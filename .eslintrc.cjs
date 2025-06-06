module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'indent': ['warn', 2],
    'no-multi-spaces': ['warn'],
    "import/order": [
      1, 
      { 
        "groups": 
          [
            "builtin", 
            "external", 
            "internal", 
            "parent", 
            "sibling", 
            "index"
          ],
        "alphabetize": { 
            "order": "asc", 
            "caseInsensitive": true 
        }
      } 
    ] 
  },
}
