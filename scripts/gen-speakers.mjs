// One-off: create real speaker `pessoas` extracted VERBATIM from event descriptions,
// and link them to the events they spoke at. No invented bios/photos/socials —
// only name + title taken from the GDG Community descriptions.
import fs from "node:fs";
import path from "node:path";

const COLORS = ["google-blue", "google-red", "google-yellow", "google-green"];
const PESSOAS = "contents/pessoas";
const EVENTOS = "contents/eventos";

function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Real speakers (name + verbatim title/company) and the event slug(s) they spoke at.
const speakers = [
  { name: "Gabriel Brina", title: "Analista Sênior de Cibersegurança", company: "Accenture", interests: ["Segurança", "IA"], events: ["gdg-talks-2-build-with-ai-edition-ia-na-construcao-de-softwa-2026"] },
  { name: "Fausto Blanco", title: "Engenheiro de Software Sênior", company: "Banco BV", interests: ["Flutter"], events: ["testes-em-flutter-teoria-e-workshop-pratico-2023"] },
  { name: "Gabriel Brasileiro", title: "Android Developer", company: "PicPay", interests: ["Android"], events: ["android11-convidados-apresentam-e-comentam-as-novidades-2020"] },
  { name: "Larissa Guimarães", title: "Lead Mobile Developer", company: "MarketUP", interests: ["Android", "Mobile"], events: ["android11-convidados-apresentam-e-comentam-as-novidades-2020", "i-o-extended-2018-belem-2018"] },
  { name: "Guilherme Carneiro", title: "Android Developer & Engineering Leader", company: "EBANX", interests: ["Android"], events: ["android11-convidados-apresentam-e-comentam-as-novidades-2020"] },
  { name: "Edson Pinheiro", title: "Android Developer", company: "TERRAS App Solutions", interests: ["Android"], events: ["android11-convidados-apresentam-e-comentam-as-novidades-2020"] },
  { name: "Jéssica Paz", title: "Dev Python", company: "", interests: ["IA"], events: ["1-wtm-belem-mercado-de-trabalho-de-ti-em-belem-2019"] },
  { name: "Lourdilene Souza", title: "Scrum Master", company: "", interests: [], events: ["1-wtm-belem-mercado-de-trabalho-de-ti-em-belem-2019"] },
  { name: "Alessandra Gomes", title: "Analista de Dados", company: "", interests: ["IA"], events: ["1-wtm-belem-mercado-de-trabalho-de-ti-em-belem-2019"] },
  { name: "Ilana Ribeiro", title: "DevOps", company: "", interests: ["DevOps"], events: ["1-wtm-belem-mercado-de-trabalho-de-ti-em-belem-2019"] },
  { name: "Fernanda Rabello", title: "GDG Belém | Women Techmakers", company: "", interests: ["Web"], events: ["i-o-extended-2018-belem-2018"] },
  { name: "Paulo Moura", title: "Tá Safo!", company: "", interests: ["Web"], events: ["i-o-extended-2018-belem-2018"] },
  { name: "Brenda Vilas Boas", title: "IEEE", company: "", interests: [], events: ["i-o-extended-2018-belem-2018"] },
  { name: "Thiago Kunz", title: "Fab Lab Belém", company: "", interests: [], events: ["i-o-extended-2018-belem-2018"] },
  { name: "Ramon Rabello", title: "GDG Belém", company: "", interests: ["Android"], events: ["i-o-extended-2018-belem-2018"] },
  { name: "Felipe Araújo", title: "GDG Belém", company: "", interests: [], events: ["i-o-extended-2018-belem-2018"] },
];

// 1) Write speaker pessoas (skip slugs that already exist, e.g. organizers).
const existing = new Set(fs.readdirSync(PESSOAS).map((f) => f.replace(/\.mdx$/, "")));
const slugByName = {};
speakers.forEach((s, i) => {
  const slug = slugify(s.name);
  slugByName[s.name] = slug;
  if (existing.has(slug)) return; // don't overwrite organizers
  const color = COLORS[i % 4];
  const interests = s.interests.length ? `[${s.interests.map((x) => `"${x}"`).join(", ")}]` : "[]";
  const tagline = [s.title, s.company].filter(Boolean).join(" · ") || "Palestrante no GDG Belém.";
  const fm = [
    "---",
    `name: "${s.name}"`,
    `slug: "${slug}"`,
    `role: ["speaker"]`,
    `title: "${s.title}"`,
    `company: "${s.company}"`,
    `color: "${color}"`,
    `avatar: ""`,
    `tagline: "${tagline.replace(/"/g, '\\"')}"`,
    `interests: ${interests}`,
    `linkedin: ""`,
    `instagram: ""`,
    `twitter: ""`,
    `github: ""`,
    `website: ""`,
    "---",
    "",
    `${s.name} palestrou no GDG Belém${s.title ? `, atuando como ${s.title}${s.company ? ` na ${s.company}` : ""}` : ""}.`,
    "",
  ].join("\n");
  fs.writeFileSync(path.join(PESSOAS, `${slug}.mdx`), fm);
});

// 2) Link speakers into their events (frontmatter `speakers: [...]`).
const byEvent = {};
for (const s of speakers) {
  for (const ev of s.events) {
    (byEvent[ev] ||= []).push(slugByName[s.name]);
  }
}
let linked = 0;
for (const [evSlug, slugs] of Object.entries(byEvent)) {
  const file = path.join(EVENTOS, `${evSlug}.mdx`);
  if (!fs.existsSync(file)) {
    console.warn("MISSING event file:", evSlug);
    continue;
  }
  let txt = fs.readFileSync(file, "utf8");
  const arr = `[${slugs.map((s) => `"${s}"`).join(", ")}]`;
  txt = txt.replace(/^speakers:\s*\[\]\s*$/m, `speakers: ${arr}`);
  fs.writeFileSync(file, txt);
  linked++;
}

console.log(`speakers created (new): ${speakers.filter((s) => !existing.has(slugify(s.name))).length}`);
console.log(`events linked: ${linked}`);
