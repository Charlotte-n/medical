module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:@/typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
}
