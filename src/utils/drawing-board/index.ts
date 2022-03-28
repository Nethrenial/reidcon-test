import { fabric } from 'fabric';

export const canvas: { c: fabric.Canvas | null } = { c: null };

export function createCanvas(
  canvasElementID: string,
  containerElementID: string
): fabric.Canvas {
  const containerElement = document.getElementById(
    containerElementID
  ) as HTMLElement;
  const containerWidth = containerElement.clientWidth;
  const containerHeight = containerElement.clientHeight;
  const c = new fabric.Canvas(canvasElementID, {
    width: containerWidth as number,
    height: containerHeight as number,
    backgroundColor: '#ffffff',
    isDrawingMode: true,
    allowTouchScrolling: true,
  });

  window.addEventListener('resize', () => {
    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;
    c.setWidth(containerWidth);
    c.setHeight(containerHeight);
  });
  canvas.c = c;
  return c;
}
