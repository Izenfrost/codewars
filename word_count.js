function countWords(str) {
  if (str.length == 0) {
    return 0;
  }
  return str.trim().replace(/,/g, "").split(/\s+/).filter(x => x != "").length;
}
