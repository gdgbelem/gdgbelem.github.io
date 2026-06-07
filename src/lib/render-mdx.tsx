import { compile, run, type RunOptions } from "@mdx-js/mdx";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";

// Components available inside MDX bodies. Keep this small and intentional.
const mdxComponents = {};

const runOptions: RunOptions = {
  Fragment,
  jsx,
  jsxs,
  baseUrl: import.meta.url,
};

// Compile + run an MDX string into a React element at build time (static export safe).
export async function renderMdx(source: string): Promise<React.ReactElement> {
  const code = String(await compile(source, { outputFormat: "function-body" }));
  const { default: MdxContent } = await run(code, runOptions);
  return <MdxContent components={mdxComponents} />;
}
