module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'unused-imports',
  ],
  rules: {
    'react/function-component-definition': [2, { namedComponents: ['arrow-function', 'function-declaration', 'function-expression'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
