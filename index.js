(function() {
  /** The library for quick and pretty check the conditions.
   * Contains next methods:
   *   array
   *   boolean
   *   false
   *   function
   *   NaN
   *   nativeObject
   *   nodeList
   *   null
   *   number
   *   object
   *   string
   *   true
   *   undefined
   *
   * @namespace is
   */
module.exports = {

    array: function(rabbit) {
      if (rabbit instanceof Array) return true
      return false
    },

    boolean: function(rabbit) {
      if (typeof(rabbit) !== 'boolean') return false
      return true
    },

    false: function(rabbit, debug) {
      if (rabbit !== false) return false
      return true
    },

    function: function(rabbit) {
      if (rabbit instanceof Function) return true
      return false
    },

    NaN: function(rabbit) {
      var standartDoNotCry = rabbit
      return rabbit !== standartDoNotCry
    },

    nativeObject: function(rabbit) {
      if (!(rabbit instanceof Object)) return false
      if (rabbit === null) return false
      if (rabbit.constructor !== Object) return false
      return true
    },

    nodeList: function(rabbit) {
      if (!(NodeList instanceof Function)) return false
      if (rabbit instanceof NodeList) return true
      return false
    },

    null: function(rabbit) {
      if (rabbit === null) return true
      return false
    },

    number: function(rabbit) {
      if (typeof(rabbit) !== 'number') return false
      return true
    },

    object: function(rabbit) {
      if (typeof(rabbit) !== 'object') return false
      if (rabbit === null) return false
      return true
    },

    string: function(rabbit) {
      if (typeof(rabbit) !== 'string') return false
      return true
    },

    true: function(rabbit) {
      if (rabbit !== true) return false
      return true
    },

    undefined: function(rabbit) {
      if (rabbit !== undefined) return false
      return true
    }
  }
})()
