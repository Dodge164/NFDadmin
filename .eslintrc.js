module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    // 'airbnb-typescript',
    // 'airbnb/hooks',
    // 'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      project: './tsconfig.json',
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    // 'max-len': ['error', { code: 90 }],
    // 'object-curly-spacing': 0,
    // 'linebreak-style': 0,
    // semi: 0,
    // 'require-jsdoc': 0,
    // 'comma-dangle': 0,
    // 'react/prop-types': 0,
    // 'operator-linebreak': 0,
    // / 'import/no-namespace': 'error',
    // / 'import/no-relative-parent-imports': 'error',
    // 'import/no-anonymous-default-export': [
    //   'error',
    //   {
    //     allowArray: true,
    //     allowArrowFunction: false,
    //     allowAnonymousClass: false,
    //     allowAnonymousFunction: false,
    //     allowCallExpression: true, // The true value here is for backward compatibility
    //     allowLiteral: true,
    //     allowObject: true,
    //   },
    // ],
    // 'import/order': [
    //   'error',
    //   {
    //     pathGroups: [
    //       {
    //         pattern: 'consts/**',
    //         group: 'external',
    //         position: 'after',
    //       },
    //       {
    //         pattern: 'components/**',
    //         group: 'external',
    //         position: 'after',
    //       },
    //       {
    //         pattern: 'helpers/**',
    //         group: 'external',
    //         position: 'after',
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ['builtin'],
    //   },
    // ],
    // 'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    // 'react/function-component-definition': [
    //   'error',
    //   {
    //     namedComponents: 'arrow-function',
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    'react/forbid-dom-props': ['error', { forbid: ['style'] }],
  },
};
