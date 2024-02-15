module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    jest: true
  },
  'extends': ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:i18next/recommended", "plugin:storybook/recommended"],
  'overrides': [{
    'env': {
      'node': true
    },
    'files': ['.eslintrc.{js,cjs}', '**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off'
    },
    'parserOptions': {
      'sourceType': 'script'
    }
  }],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  'rules': {
    'indent': ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [2, 'tab'],
    'react/jsx-indent-props': [2, 'tab'],
    'react/jsx-filename-extension': [2, {
      'extensions': ['.js', '.jsx', '.ts', '.tsx']
    }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/no-deprecated': 'off',
    'no-undef': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }],
    'object-curly-spacing': ['error', 'always']
  },
  globals: {
    '__IS_DEV__': true,
    '__PROJ_NAME__': true
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};