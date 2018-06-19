(function() {
var NodeList = function() {
  this.length = 0
}

module.exports = [
  [],
  true,
  false,
  function() {},
  NaN,
  null,
  34,
  {},
  new NodeList(),
  'str',
  undefined
]
})()
