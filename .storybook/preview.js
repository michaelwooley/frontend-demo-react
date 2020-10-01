import "../src/styles/index.scss";
import "common/fontawesome";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "facebook",
    values: [
      {
        name: "app",
        value: "#f5f5f5",
      },
      {
        name: "facebook",
        value: "#3b5998",
      },
    ],
  },
};
