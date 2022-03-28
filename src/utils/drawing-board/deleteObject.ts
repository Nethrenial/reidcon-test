import type { fabric } from 'fabric';
export const deleteObject = (canvas: fabric.Canvas) => {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    canvas.remove(activeObject);
  }
};
