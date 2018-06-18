var is = require('../index.js')
var assert = require('chai').assert

/** Call the callback function that passed as once option for each data type.
 * @function
 */
var forEachType = require('./lib/for-each-type.js')

describe('@namespace is', function(){

  describe('#array(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is array.', function(){
      assert.isTrue(is.array([]))
    })
    
    it('Should return false if the option "rabbit" is not array.', function(){
      forEachType(function(type){
        if (!(type instanceof Array)){
          assert.isFalse(is.array(type))
        }
      })
    })
  })
  
  describe('#function(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is function.', function(){
      assert.isTrue(is.function(function(){}))
    })
    
    it('Should return false if the option "rabbit" is not function.', function(){
      forEachType(function(type){
        if (!(type instanceof Function)){
          assert.isFalse(is.function(type))
        }
      })
    })
  })
  
  describe('#NaN(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is NaN.', function(){
      assert.isTrue(is.NaN(NaN))
    })
    
    it('Should return false if the option "rabbit" is not NaN.', function(){
      forEachType(function(type){
        if (!(type !== type)){
          assert.isFalse(is.NaN(type))
        }
      })
    })
  })
  
  describe('#null(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is null.', function(){
      assert.isTrue(is.null(null))
    })
    
    it('Should return false if the option "rabbit" is not null.', function(){
      forEachType(function(type){
        if (!(type === null)){
          assert.isFalse(is.null(type))
        }
      })
    })
  })
  
  describe('#number(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is number.', function(){
      assert.isTrue(is.number(45))
    })
    
    it('Should return false if the option "rabbit" is not number.', function(){
      forEachType(function(type){
        if (!(typeof(type) === 'number')){
          assert.isFalse(is.number(type))
        }
      })
    })
  })
  
  describe('#object(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is an object.', function(){
      assert.isTrue(is.object({}))
    })
    
    it('Should return false if the option "rabbit" is not an object.', function(){
      forEachType(function(type){
        if (!(type instanceof Object)){
          assert.isFalse(is.object(type))
        }
      })
    })
  })
  
  describe('#string(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is string.', function(){
      assert.isTrue(is.string('str'))
    })
    
    it('Should return false if the option "rabbit" is not string.', function(){
      forEachType(function(type){
        if (!(typeof(type) === 'string')){
          assert.isFalse(is.string(type))
        }
      })
    })
  })
  
  describe('#undefined(rabbit)', function(){
  
    it('Should rerurn true if the option "rabbit" is undefined.', function(){
      assert.isTrue(is.undefined(undefined))
    })
    
    it('Should return false if the option "rabbit" is not undefined.', function(){
      forEachType(function(type){
        if (!(type === undefined)){
          assert.isFalse(is.undefined(type))
        }
      })
    })
  })

/*
*   undefined
*/


})