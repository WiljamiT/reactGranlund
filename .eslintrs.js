module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'eqeqeq': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
