import linted from "linted";

export default linted(
  {
    ts: {
      rules: {
        "@typescript-eslint/require-await": "off",
      },
    },
  },
);
