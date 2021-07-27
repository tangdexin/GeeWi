/*
 * @Author: tangdexin
 * @Date: 2021-07-25 17:50:20
 * @LastEditTime: 2021-07-26 19:21:54
 * @LastEditors: tangdexin
 * @Description: 编辑区域
 * @FilePath: /Geewi/src/pages/edit/components/EditArea/index.tsx
 */
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { memo } from 'react';
import { useModel } from 'umi';
import styles from './index.less';

const EditArea = () => {
  const { canvasData, setCanvasData } = useModel('editModel');

  const [collectProps, droper] = useDrop({
    accept: 'Box',
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
    }),
  });
  const content = collectProps.isOver ? '快松开，放到碗里来' : '将 Box 组件拖动到这里';

  return (
    // 将 droper 赋值给对应元素的 ref
    <div ref={droper} className={styles.editArea}>
      EditArea
      <div>
        {canvasData.map((item: any, index: number) => (
          <h2 key={index}>{item.text}</h2>
        ))}
      </div>
      {content}
    </div>
  );
};

export default memo(EditArea);
