/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  "[javascript]": {
    "editor.formatOnSave": true
  },
  
};

export default config;
