function getMiddle(s)
{
  ind = Math.floor(s.length / 2)
  if (s.length % 2 != 0) {
    return s[ind];
  }
  else {
    return s.slice(ind - 1, ind + 1);
  }
}
