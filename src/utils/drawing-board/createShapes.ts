import { fabric } from 'fabric';
import { canvas } from './index';
export const createRectangle = (color = 'red') => {
  const rect = new fabric.Rect({
    fill: color,
    width: 100,
    height: 100,
  });

  (canvas.c as fabric.Canvas).add(rect);
};

export const createCircle = (color = 'red') => {
  const circle = new fabric.Circle({
    fill: color,
    width: 100,
    height: 100,
  });

  (canvas.c as fabric.Canvas).add(circle);
};
export const createTriangle = (color = 'red') => {
  const triangle = new fabric.Triangle({
    fill: color,
    width: 100,
    height: 100,
  });

  (canvas.c as fabric.Canvas).add(triangle);
};
