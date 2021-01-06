import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./node_modules/axios/dist/axios.js",
    output: {
      file: "./axios.js",
      format: "es",
    },
    plugins: [commonjs()],
  },
];
