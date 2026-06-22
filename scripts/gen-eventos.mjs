// One-off generator: reads the GDG Community API JSON dump and writes one MDX
// per completed event into contents/eventos/. No invented data — speakers/agenda
// stay empty because the API does not expose them.
import fs from "node:fs";
import path from "node:path";

const data = JSON.parse(fs.readFileSync("/tmp/gdg-completed.json", "utf8"));
const OUT = "contents/eventos";

const COLORS = ["google-blue", "google-red", "google-yellow", "google-green"];

// Map the API's event_type_title to our schema `kind` select options.
function kindFor(title) {
  const t = title.toLowerCase();
  if (t.includes("devfest")) return "DevFest";
  if (t.includes("build with ai") || t.includes("build with")) return "Build with AI";
  if (t.includes("gdg talks")) return "GDG Talks";
  if (t.includes("study jam") || t.includes("study")) return "Study Jam";
  if (t.includes("i/o") || t.includes("io extended") || t.includes("i/o extended")) return "Meetup";
  return "Meetup";
}

function slugify(title, date) {
  const base = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `${base}-${date.slice(0, 4)}`;
}

function stripHtml(html = "") {
  return html
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function esc(s = "") {
  return s.replace(/"/g, '\\"');
}

const seen = new Set();
let written = 0;

data.results.forEach((ev, i) => {
  const date = ev.start_date; // ISO
  let slug = slugify(ev.title, date);
  while (seen.has(slug)) slug = `${slug}-${i}`;
  seen.add(slug);

  const kind = kindFor(ev.event_type_title || ev.title);
  const color = COLORS[i % 4];
  const summary = (ev.description_short || ev.title).replace(/\s+/g, " ").trim();
  const body = stripHtml(ev.description) || summary;
  const reg = ev.cohost_registration_url || ev.url || "https://gdg.community.dev/gdg-belem/";

  const fm = [
    "---",
    `title: "${esc(ev.title)}"`,
    `slug: "${slug}"`,
    `date: "${date.replace("Z", "").replace(/\.\d+$/, "")}"`,
    `status: "past"`,
    `kind: "${kind}"`,
    `color: "${color}"`,
    `location: "Belém, Pará"`,
    `city: "Belém, Pará"`,
    `summary: "${esc(summary).slice(0, 280)}"`,
    `cover: ""`,
    `registrationUrl: "${reg}"`,
    `speakers: []`,
    `agenda: []`,
    "---",
    "",
    body,
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUT, `${slug}.mdx`), fm);
  written++;
});

console.log(`wrote ${written} event files`);
