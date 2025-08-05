export  const limitWords = (text, limit = 10) => {
  const words = text.trim().split(/\s+/);
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
};
