module.exports = {
    extends: "eslint:recommended",
    parserOptions: {ecmaVersion: 6},
    env: {
        node: true,
        es6: true,
        mocha: true
    },
    rules: {
        //possible errors
        "no-cond-assign": ["error", "always"],
        "no-console": "off",
        "no-constant-condition": ["error"],
        "no-control-regex": ["error"],
        "no-debugger": ["error"],
        "no-dupe-args": ["error"],
        "no-dupe-keys": ["error"],
        "no-duplicate-case": ["error"],
        "no-empty": ["error", {allowEmptyCatch: true}],
        "no-empty-character-class": ["error"],
        "no-ex-assign": ["error"],
        "no-extra-boolean-cast": ["error"],
        "no-extra-parens": ["error"],
        "no-extra-semi": ["error"],
        "no-func-assign": ["error"],
        "no-inner-declarations": ["error"],
        "no-invalid-regexp": ["error"],
        "no-irregular-whitespace": ["error"],
        "no-negated-in-lhs": ["error"],
        "no-obj-calls": ["error"],
        "no-prototype-builtins": "off",
        "no-regex-spaces": "off",
        "no-sparse-arrays": ["error"],
        "no-unexpected-multiline": ["error"],
        "no-unreachable": ["error"],
        "no-unsafe-finally": ["warn"],
        "use-isnan": ["error"],
        "valid-jsdoc": "off",
        "valid-typeof": ["error"],

        //best practices
        "accessor-pairs": "off",
        "array-callback-return": "warn",
        "block-scoped-var": "error",
        complexity: ["warn", 20],
        "consistent-return": "off",
        curly: ["error", "all"],
        "default-case": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        eqeqeq: ["error", "always"],
        "guard-for-in": "error",
        "no-alert": "off",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-functions": "off",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "off",
        "no-native-reassign": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "off",
        "no-octal-escape": "off",
        "no-param-reassign": "off",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "off",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-with": "error",
        radix: "error",
        "vars-on-top": "error",
        "wrap-iife": ["error", "outside"],
        yoda: "error",

        //strict mode
        strict: "off",

        //variables
        "init-declarations": "off",
        "no-catch-shadow": "off",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": "off",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undefined": "error",
        "no-unused-vars": "warn",
        "no-use-before-define": "error",

        //node.js & commonjs
        "callback-return": "off",
        "global-require": "off",
        "handle-callback-err": "off",
        "no-mixed-requires": "off",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "error",
        "no-process-exit": "off",
        "no-restricted-modules": "off",
        "no-sync": "warn",

        //stylistic issues
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        camelcase: ["error", {properties: "always"}],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", {after: true}],
        "comma-style": ["error", "last"],
        "computed-property-spacing": "error",
        "consistent-this": "off",
        "eol-last": "error",
        "func-names": "off",
        "func-style": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        indent: ["error", 4],
        "jsx-quotes": "off",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "lines-around-comment": "off",
        "max-depth": "off",
        "max-len": ["error", 120],
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "new-cap": "error",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": "off",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-trailing-spaces": ["error", {skipBlankLines: false}],
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": ["error", {multiline: true}],
        "object-curly-spacing": ["error", "never"],
        "object-property-newline": "off",
        "one-var-declaration-per-line": "off",
        "one-var": ["error", {var: "always"}],
        "operator-assignment": "error",
        "operator-linebreak": ["error", "after"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "as-needed"],
        quotes: ["error", "double"],
        "require-jsdoc": "off",
        semi: ["error", "always"],
        "semi-spacing": "error",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {anonymous: "always", named: "never"}],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "off",
        "unicode-bom": "off",
        "wrap-regex": "off",

        //ECMAScript 6
        "arrow-body-style": "error",
        "arrow-parens": "off",
        "arrow-spacing": "error",
        "constructor-super": "error",
        "generator-star-spacing": ["error", "after"],
        "no-class-assign": "error",
        "no-confusing-arrow": "off",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "warn",
        "no-new-symbol": "error",
        "no-restricted-imports": "off",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": ["error"],
        "require-yield": "error",
        "rest-spread-spacing": "off",
        "sort-imports": "off",
        "template-curly-spacing": "error",
        "yield-star-spacing": "error"
    }
};
