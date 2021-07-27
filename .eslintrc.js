/*
 * @Author: tangdexin
 * @Date: 2021-07-25 21:44:06
 * @LastEditTime: 2021-07-25 22:19:57
 * @LastEditors: tangdexin
 * @Description:
 * @FilePath: /Geewi/.eslintrc.js
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  // globals: {
  //   ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
  //   page: true,
  // },

  rules: {
    indent: ['error', 2],
  },
};
