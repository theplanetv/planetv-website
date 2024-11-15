export function ToTitle(text: string): string {
  let newText: string[] = text.toLowerCase().split(' ');
  for (let i = 0; i < newText.length; i++) {
    newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
  }
  return newText.join(' ');
}

