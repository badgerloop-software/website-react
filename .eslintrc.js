// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'jest'],
    rules: {
        'prettier/prettier': 'error',
        'react/prop-types': 0,
        'linebreak-style': ['error', 'unix'],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-unused-vars': 'off',
    },
}
