/*
 * @Author: tangdexin
 * @Date: 2021-07-25 17:50:20
 * @LastEditTime: 2021-07-26 19:36:54
 * @LastEditors: tangdexin
 * @Description: 物料区域
 * @FilePath: /Geewi/src/pages/edit/components/MaterialsArea/index.tsx
 */
import React, { useCallback } from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { useModel } from 'umi';
import styles from './index.less';

const MaterialsArea: React.FC = () => {
  const { canvasData, setCanvasData } = useModel('editModel');

  const Box = (props: any) => {
    const { id } = props;
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type: 'Box',
        item: {
          id: id,
          text: id + 123,
        },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
        end: (draggedItem, monitor: DragSourceMonitor) => {
          if (monitor.didDrop()) {
            console.log(canvasData, draggedItem);
            setCanvasData([...canvasData, draggedItem]);
          }
        },
      }),
      [],
    );
    return (
      <div>
        <div ref={drag}>可拖拽组件Box</div>
      </div>
    );
  };

  return (
    <div className={styles.materialsArea}>
      <h1 className={styles.title}>MaterialsArea</h1>
      <Box id={1}></Box>
      <Box id={12}></Box>
      <Box id={13}></Box>
    </div>
  );
};
export default MaterialsArea;
