// eslint.config.mjs
import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  // ----------------------------------------------------------------------
  // 1. ANA UYGULAMA KODU AYARLARI (src/index.js vb.)
  // ----------------------------------------------------------------------
  {
    files: ['**/*.{js,mjs,cjs}'], // Tüm JS dosyalarını hedefle
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.browser, // Tarayıcı Global'leri (window, document)
      sourceType: 'module',
    },

    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },

  // ----------------------------------------------------------------------
  // 2. JEST TEST DOSYALARI İÇİN ÖZEL AYAR (YENİ EKLENEN BLOK)
  // ----------------------------------------------------------------------
  {
    // Yalnızca test dosyalarını hedefle
    files: ['**/*.test.js', '**/__tests__/**/*.js'],

    languageOptions: {
      // JEST Global'lerini (describe, test, expect) tanıtır.
      globals: {
        ...globals.jest,
      },
      sourceType: 'module',
    },

    // Test dosyalarında kullanılan 'no-undef' ve 'no-unused-vars'
    // kurallarını esnekleştirmek isteyebilirsiniz.
    rules: {
      // 'jest/no-undef' kullanmıyoruz çünkü jest globals tanımı sorunu çözer.
    },
  },

  // ----------------------------------------------------------------------
  // 3. PRETTIER ÇAKIŞMA ÖNLEYİCİ
  // ----------------------------------------------------------------------
  prettierConfig,
])
