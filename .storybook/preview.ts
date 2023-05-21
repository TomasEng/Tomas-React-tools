import type {Preview} from "@storybook/react";
import '@altinn/figma-design-tokens/dist/tokens.css';
import '../src/style/global.css';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
