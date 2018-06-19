var is = require('../index.js')
var assert = require('chai').assert

/** The values that will be passed to the methods of the namespace "is".
 * @type array
 */
var testValues = require('./lib/test-values.js')

if (global !== undefined) {
  global.NodeList = function() {}
}

describe('@namespace is', function() {
  describe('#array(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is array.', function() {
      assert.isTrue(is.array([]))
    })

    it('Should return false if the option "rabbit" is not array.', function() {
      testValues.forEach(function(type) {
        if (!(type instanceof Array)) {
          assert.isFalse(is.array(type))
        }
      })
    })
  })

  describe('#boolean(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is boolean.', function() {
      assert.isTrue(is.boolean(true))
    })

    it('Should return false if the option "rabbit" is not boolean.', function() {
      testValues.forEach(function(type) {
        if (!(typeof(type) === 'boolean')) {
          assert.isFalse(is.boolean(type))
        }
      })
    })
  })

  describe('#false(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is false.', function() {
      assert.isTrue(is.false(false))
    })

    it('Should return false if the option "rabbit" is not false.', function() {
      testValues.forEach(function(type) {
        if (type !== false) {
          assert.isFalse(is.false(type))
        }
      })
    })
  })

  describe('#function(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is function.', function() {
      assert.isTrue(is.function(function() {}))
    })

    it('Should return false if the option "rabbit" is not function.', function() {
      testValues.forEach(function(type) {
        if (!(type instanceof Function)) {
          assert.isFalse(is.function(type))
        }
      })
    })
  })

  describe('#NaN(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is NaN.', function() {
      assert.isTrue(is.NaN(NaN))
    })

    it('Should return false if the option "rabbit" is not NaN.', function() {
      testValues.forEach(function(type) {
        var standartDoNotCry = type
        if (!(type !== standartDoNotCry)) {
          assert.isFalse(is.NaN(type))
        }
      })
    })
  })

  describe('#nativeObject(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is a native object.', function() {
      assert.isTrue(is.nativeObject({}))
    })

    it('Should return false if the option "rabbit" is not a native object.', function() {
      testValues.forEach(function(type) {
        if (!(type instanceof Object)
          || type === null
          || type.constructor !== Object
        ) {
          assert.isFalse(is.nativeObject(type))
        }
      })
    })
  })

  describe('#nodeList(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is an instence of the class "NodeList".', function() {
      assert.isTrue(is.nodeList(new NodeList()))
    })

    it('Should return false if the option "rabbit" is not an instence of the class "NodeList".', function() {
      testValues.forEach(function(type) {
        if (!(type instanceof NodeList)) {
          assert.isFalse(is.nodeList(type))
        }
      })
    })
  })

  describe('#null(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is null.', function() {
      assert.isTrue(is.null(null))
    })

    it('Should return false if the option "rabbit" is not null.', function() {
      testValues.forEach(function(type) {
        if (!(type === null)) {
          assert.isFalse(is.null(type))
        }
      })
    })
  })

  describe('#number(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is number.', function() {
      assert.isTrue(is.number(45))
    })

    it('Should return false if the option "rabbit" is not number.', function() {
      testValues.forEach(function(type) {
        if (!(typeof(type) === 'number')) {
          assert.isFalse(is.number(type))
        }
      })
    })
  })

  describe('#object(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is an object.', function() {
      assert.isTrue(is.object({}))
    })

    it('Should return false if the option "rabbit" is not an object.', function() {
      testValues.forEach(function(type) {
        if (!(type instanceof Object)
          || type === null
        ) {
          assert.isFalse(is.object(type))
        }
      })
    })
  })

  describe('#string(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is string.', function() {
      assert.isTrue(is.string('str'))
    })

    it('Should return false if the option "rabbit" is not string.', function() {
      testValues.forEach(function(type) {
        if (!(typeof(type) === 'string')) {
          assert.isFalse(is.string(type))
        }
      })
    })
  })

  describe('#true(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is true.', function() {
      assert.isTrue(is.true(true))
    })

    it('Should return false if the option "rabbit" is not true.', function() {
      testValues.forEach(function(type) {
        if (type !== true) {
          assert.isFalse(is.true(type))
        }
      })
    })
  })

  describe('#undefined(rabbit)', function() {
    it('Should rerurn true if the option "rabbit" is undefined.', function() {
      assert.isTrue(is.undefined(undefined))
    })

    it('Should return false if the option "rabbit" is not undefined.', function() {
      testValues.forEach(function(type) {
        if (!(type === undefined)) {
          assert.isFalse(is.undefined(type))
        }
      })
    })
  })
})
