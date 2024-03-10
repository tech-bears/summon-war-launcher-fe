module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
    //允许any类型
    //'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    //关闭prettier提示
    //'prettier/prettier': 'off',
    //单引号
    quotes: ['error', 'single'],
    //不要分号
    semi: ['error', 'never'],
    //=号两边要有一个空格
    'space-infix-ops': 'error',
    //箭头函数的箭头前后需要有空格
    'arrow-spacing': 'error',
    //不对每行末尾检查空格
    //'no-trailing-spaces': 'off'
    'prettier/prettier': ['off', { endOfLine: 'auto' }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
