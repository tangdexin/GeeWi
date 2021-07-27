import React, { useCallback, useState, useEffect } from 'react';
import { IRouteComponentProps, history } from 'umi';
import styles from './index.less';

export default function Layout({ children }: IRouteComponentProps) {
  return (
    <div className={styles.layout}>
      {children}
      <div className={styles.footer}>footer</div>
    </div>
  );
}
