/*
 * @Author: tangdexin
 * @Date: 2021-07-25 17:50:40
 * @LastEditTime: 2021-07-25 22:24:37
 * @LastEditors: tangdexin
 * @Description:
 * @FilePath: /Geewi/src/configs/routes.ts
 */

export interface IRoute {
  path?: string;
  component?: string;
  name?: string;
  [k: string]: unknown;
}

export const routes = [
  {
    path: '/',
    name: '首页',
    component: '@/pages/index',
  },
  {
    path: 'edit',
    name: '编辑',
    component: '@/pages/edit/index',
  },
  {
    path: 'home',
    name: '首页',
    component: '@/pages/home/index',
  },
  {
    path: 'preview',
    name: '预览',
    component: '@/pages/preview/index',
  },
];
