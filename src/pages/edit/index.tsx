/*
 * @Author: tangdexin
 * @Date: 2021-07-25 17:50:20
 * @LastEditTime: 2021-07-26 19:20:07
 * @LastEditors: tangdexin
 * @Description:
 * @FilePath: /Geewi/src/pages/edit/index.tsx
 */
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { ConfigArea, EditArea, MaterialsArea } from './components';
import styles from './index.less';

// @DragDropContext(HTML5Backend)
export default function EditPage() {
  console.log('editpage');
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <h1 className={styles.title}>EditPage</h1>
        <div className={styles.container}>
          <MaterialsArea></MaterialsArea>
          <EditArea></EditArea>
          <ConfigArea></ConfigArea>
        </div>
      </DndProvider>
    </div>
  );
}
