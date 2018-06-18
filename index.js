(function(){

  /** The library for quick and pretty check the conditions.
   * Contains next methods:
   *   array
   *   function
   *   NaN
   *   null
   *   number
   *   object
   *   string
   *   undefined
   *
   * @namespace is
   */
  var is = module.exports = {
  
    array: function(rabbit){
      if (rabbit instanceof Array) return true
      return false
    },
    
    function: function(rabbit){
      if (rabbit instanceof Function) return true
      return false
    },
    
    NaN: function(rabbit){
      return rabbit !== rabbit
    },
    
    null: function(rabbit){
      if (rabbit === null) return true
      return false
    },
    
    number: function(rabbit){
      if (typeof(rabbit) !== 'number') return false
      return true
    },
    
    object: function(rabbit){
      if (typeof(rabbit) !== 'object') return false
      if (rabbit === null) return false
      return true
    },
  
    string: function(rabbit){
      if (typeof(rabbit) !== "string") return false;
      return true;
    },
      
    undefined: function(rabbit){
      if (rabbit !== undefined) return false
      return true
    }
  }
})()