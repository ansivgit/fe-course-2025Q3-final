import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      'react': { version: 'detect' },
    },
    linterOptions: {
      noInlineConfig: true,
    },
    rules: {
      // 🔴 Mandatory
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit', overrides: { constructors: 'off' } },
      ],
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off', //* switched off for now
      '@typescript-eslint/no-unsafe-call': 'off', //* switched off for now

      'react-hooks/exhaustive-deps': 'warn',

      // 🟡 Good practices
      'no-console': ['warn', { allow: ['info', 'error'] }],
      'no-magic-numbers': ['error', { ignore: [0, 1, 2, -1] }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'max-lines-per-function': ['warn', { max: 40, skipBlankLines: true, skipComments: true }],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',

      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            args: false,
            err: false,
            index: false,
            temp: false,
            params: false,
            props: false,
            ref: false,
            res: false,
          },
        },
      ],
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-top-level-await': 'error',

      // 🎨 Styles
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      curly: ['error', 'all'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],
      'arrow-parens': ['error', 'always'],
      'max-len': ['warn', { code: 120, ignoreComments: true }],

      // 🔧 Switched off
      'boundaries/element-types': 'off',
      'no-undef': 'off',
      'no-restricted-exports': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],

      '@typescript-eslint/no-misused-promises': 'off', //* switched off for now
      '@typescript-eslint/restrict-template-expressions': 'off', //* switched off for now
      '@typescript-eslint/no-inferrable-types': 'error',

      'unicorn/no-array-reduce': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/prefer-query-selector': 'off',
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      'max-lines-per-function': ['warn', { max: 80, skipBlankLines: true, skipComments: true }],
    }
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.d.ts',
      'eslint.config.js',
      'lint-staged.config.js',
    ],
  },
]);
