const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                require: "readonly",
                module: "readonly",
                console: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn"
        }
    },
    {
        ignores: ["node_modules/**"]
    }
];