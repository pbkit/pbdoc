import { IS_BROWSER } from '$fresh/runtime.ts';
import { apply, Configuration, setup } from 'twind';
export * from 'twind';
import * as colors from 'twind/colors';
export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',
  theme: {
    extend: {
      colors,
    },
  },
  preflight: {
    body: apply`bg-gray-900 text-white min-h-screen`,
  },
};
if (IS_BROWSER) setup(config);
