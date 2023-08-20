export const truncateText = (text: string, maxLength: number = 20): string => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
      if (lastSpaceIndex !== -1) {
        return text.slice(0, lastSpaceIndex) + '...';
      } else {
        return text.slice(0, maxLength) + '...';
      }
    }
}