module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',

    'plugin:react/recommended',

    'airbnb-typescript',
    'airbnb/hooks',

    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'prettier',
    'plugin:prettier/recommended',

    'plugin:import/recommended',
    // 'plugin:import/typescript',
    // 'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',

  rules: {
    'react/react-in-jsx-scope': 'off',
    // 'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],

    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'warn',

    // 'import/no-relative-parent-imports': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-anonymous-default-export': [2, { allowCallExpression: false }],
    'import/namespace': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    //
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/named': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/default': 'off',
    // 'import/no-duplicates': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-var-requires': 'off',
    'no-undef': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
