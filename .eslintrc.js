module.exports = {
    env: {
        'es6': true,
        'node': true
    },
    extends: 'es/2015/server',
    rules: {
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline']
    }
};
