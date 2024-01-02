import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import babel from "@rollup/plugin-babel";
import tailwindcss from "tailwindcss";

const tailwindConfig = require("./tailwind.config.js");
const packageJson = require("./package.json");

const config = {
  input: "src/lib.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
    babel(),
    commonjs(),
    typescript({
      tsconfig: "tsconfig.build.json",
      include: "src/**/*.{js,jsx,ts,tsx}",
      exclude: "test/**/*",
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
      plugins: [tailwindcss(tailwindConfig)],
    }),
  ],
};

export default config;
