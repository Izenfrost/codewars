function stringify(list) {
  var head = list
  var str = ""
  while (head != null){
    str = str.concat(head.data, " -> ");
    head = head.next;
  }
  return str.concat("null");
}
