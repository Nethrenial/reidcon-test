import { fabric } from 'fabric';

export const createTextBox = (canvas: fabric.Canvas) => {
  const textBox = new fabric.Textbox('Hakuna MAtata', {
    width: 400,
  });
  canvas.add(textBox);
};
