// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier"; 
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
    { 
        files: ["**/*.{js,mjs,cjs}"], 
        plugins: { 
            js,
            prettier: prettierPlugin, 
        }, 
        languageOptions: { 
            globals: globals.browser,
            sourceType: "module", 
        },

        rules: {
            ...js.configs.recommended.rules,
            "prettier/prettier": "error", 
        }
    },
    
    prettierConfig,
]);