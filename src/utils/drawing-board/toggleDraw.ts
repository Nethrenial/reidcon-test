import { canvas } from '.';

export const toggleDraw = () => {
  (canvas.c as fabric.Canvas).isDrawingMode = !(canvas.c as fabric.Canvas)
    .isDrawingMode;
};
