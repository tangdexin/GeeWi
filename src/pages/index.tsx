/*
 * @Author: tangdexin
 * @Date: 2021-07-24 20:45:18
 * @LastEditTime: 2021-07-25 22:52:11
 * @LastEditors: tangdexin
 * @Description:
 * @FilePath: /Geewi/src/pages/index.tsx
 */
import { NavLink } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>精卫填海，开始</h1>
      <Button type="primary">
        <NavLink to="edit">去编辑页</NavLink>
      </Button>
      <Button type="primary">
        <NavLink to="preview">去预览页</NavLink>
      </Button>
    </div>
  );
}
