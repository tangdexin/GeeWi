/*
 * @Author: tangdexin
 * @Date: 2021-07-24 20:45:18
 * @LastEditTime: 2021-07-25 22:25:14
 * @LastEditors: tangdexin
 * @Description:
 * @FilePath: /Geewi/.umirc.ts
 */
import { defineConfig } from 'umi';
import { routes } from './src/configs/routes';

export default defineConfig({
  title: '精卫填海',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes,
    },
  ],
  fastRefresh: {},
});
