function partitionOn(pred, items) {
  tarr = items.filter(x => pred(x))
  farr = items.filter(x => !pred(x))
  items.splice(0)
  items.push(...farr)
  items.push(...tarr)
  return farr.length
}
