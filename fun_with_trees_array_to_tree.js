function arrayToTree(array) {
  function buildTree(index){
      if (index < array.length) {
        return new TreeNode(array[index], buildTree(2 * index + 1), buildTree(2 * index + 2));
      }
      else {
        return;
      }
   }
   return buildTree(0);
}
