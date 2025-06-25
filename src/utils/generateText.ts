import saveAs from 'file-saver';

export function generateTxtFile(content: string, filename: string = 'mensaje.txt') {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, filename);
}