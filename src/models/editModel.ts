import { useState, useCallback } from 'react';

interface IEditModel {
  canvasData: [];
  setCanvasData: (val: any) => void;
}

type ICanvasData = [];

export default function EditModel(): IEditModel {
  const [canvasData, setCanvasData] = useState<ICanvasData>([]);

  return {
    canvasData,
    setCanvasData,
  };
}
