module.exports = {
    root: true,
    extends: ['airbnb', 'plugin:react-hooks/recommended'],
    parser: '@babel/eslint-parser',
    plugins: ['react-hooks'],
    env: {
        jest: true,
        browser: true,
    },
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'import/no-unresolved': 'off',
        semi: ['error', 'never'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx'] }],
        'react/jsx-indent-props': ['error', 4],

        'import/extensions': 0,

        // React hooks config
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // To enable only typescript variant
        'no-unused-vars': 'off',

        // React native uses require to load assets
        'global-require': 'off',

        // A lot of files export only one const
        'import/prefer-default-export': 'off',

        // Typescript reports this anyways
        'no-undef': 'off',
    },
}
