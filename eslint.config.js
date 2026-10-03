import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const jsxUsesVars = {
  meta: { type: 'problem', schema: [], messages: {} },
  create(context) {
    const sourceCode = context.sourceCode || context.getSourceCode()
    const collectRoots = (node, names) => {
      if (!node || typeof node.type !== 'string') return
      if (node.type === 'JSXMemberExpression') {
        let object = node.object
        while (object && object.type === 'JSXMemberExpression') {
          object = object.object
        }
        if (object && object.type === 'JSXIdentifier') names.add(object.name)
      }
      for (const key of Object.keys(node)) {
        if (key === 'parent') continue
        const value = node[key]
        if (Array.isArray(value)) {
          value.forEach((child) => collectRoots(child, names))
        } else if (value && typeof value.type === 'string') {
          collectRoots(value, names)
        }
      }
    }
    return {
      Program(node) {
        const names = new Set()
        collectRoots(node, names)
        if (names.size === 0) return
        const markUsed = (scope) => {
          for (const variable of scope.variables) {
            if (names.has(variable.name)) variable.eslintUsed = true
          }
          for (const child of scope.childScopes) markUsed(child)
        }
        markUsed(sourceCode.getScope(node))
      },
    }
  },
}

const jsxPlugin = {
  rules: {
    'jsx-uses-vars': jsxUsesVars,
  },
}

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      jsx: jsxPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'jsx/jsx-uses-vars': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true, customHOCs: ['SectionWrapper'] },
      ],
    },
  },
]
