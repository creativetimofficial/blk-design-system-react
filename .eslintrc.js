module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2023, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // 0 = off, 1 = warn, 2 = error
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],

    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    '@typescript-eslint/no-use-before-define': 2,

    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-unescaped-entities': 0,
    'react/no-did-update-set-state': 0,
    'react/function-component-definition': 0,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'state',
          'getters',
          'setters',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/jsx-props-no-spreading': [
      2,
      {
        custom: 'ignore',
      },
    ],

    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],

    semi: [2, 'never'],
    'class-methods-use-this': 0,
    'no-param-reassign': 2,
    'no-underscore-dangle': 0,
    'func-names': [2, 'never'],
    'guard-for-in': 0,
    'implicit-arrow-linebreak': 0,
    'no-unexpected-multiline': 0,
    'max-len': [
      2,
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-plusplus': 0,
    'no-else-return': [2, { allowElseIf: true }],
    'no-use-before-define': 0,
    'lines-between-class-members': 0,
  },
}
