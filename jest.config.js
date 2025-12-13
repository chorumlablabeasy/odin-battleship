// jest.config.js

/** @type {import('jest').Config} */
const config = {
  // Projenizdeki test dosyalarını bulmak için kullanacağı kalıplar (pattern)
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // Jest'in çalıştırmadan önce kodunuzu dönüştürmek için kullandığı araçlar
  // Bu, ESM kodunuzun Jest tarafından anlaşılması için kritik.
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // Eğer projenizdeki ESM modüllerini mock'lamak isterseniz bu ayar kullanılabilir.
  // Varsayılan değeri genelde yeterlidir.
  // moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
}

export default config
