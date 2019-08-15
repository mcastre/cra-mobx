module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  plugins: ['import', 'jest', 'prettier'],
  extends: ['airbnb', 'prettier', 'react-app', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-one-expression-per-line': false,
    // This rule only makes sense when you need to:
    //  - Destructure more than one property
    //  - Use a destructure property more than once
    // If you only need to use the property once, it is better to write out the path to the property
    // rather than destructure it because:
    //  - It's more verbose
    //  - Creates a useless variable assignment that needs to be garbage collected later
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }],
    'no-unused-vars': 'error',
    'linebreak-style': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label']
      }
    ],
    'prettier/prettier': ['error', { singleQuote: true }],
    'jsx-a11y/href-no-hash': ['off'],
    'class-methods-use-this': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['Common', './src/common'], ['Assets', './src/assets'], ['Routes', './src/routes']]
      }
    }
  },
  overrides: [
    {
      files: ['*spec.js'],
      globals: {
        shallow: 'readonly',
        mount: 'readonly',
        render: 'readonly'
      },
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
};
