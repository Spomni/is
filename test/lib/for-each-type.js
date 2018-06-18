var forEachType = module.exports = function(callback){

  var typeArr = [
    1,
    NaN,
    "string",
    null,
    undefined,
    ["", 1, null],
    {},
    function(){}
  ]
  
  typeArr.forEach(function(type, i, typeArr){
    callback(type)
  })

}