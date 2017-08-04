import { expect } from 'chai'

describe('Object.entries(obj)', function() {
  it('work on simple json object', function() {
    let obj = { foo: 'bar', baz: 42 }
    expect(Object.entries(obj)).to.deep.equal(
      [
        ['foo', 'bar'],
        ['baz', 42]
      ]
    )
  })

  it('work on array like object', function() {
    let obj = { 0: 'a', 1: 'b', 2: 'c' }
    expect(Object.entries(obj)).to.deep.equal([
      ['0', 'a'],
      ['1', 'b'],
      ['2', 'c']
    ])
  })

  it('work on array like object with random key ordering', function() {
    let obj = { 100: 'a', 2: 'b', 7: 'c' }
    expect(Object.entries(obj)).to.deep.equal([
      ['2', 'b'],
      ['7', 'c'],
      ['100', 'a']
    ])
  })

  it('getFoo is property which isn\'t enumerable', function() {
    let obj = Object.create({}, {
      getFoo: {
        value: function() { return this.foo }
      }
    })
    obj.foo = 'bar'
    expect(Object.entries(obj)).to.deep.equal([
      ['foo', 'bar']
    ])
  })

  it('non-object argument will be coerced to an object', function() {
    expect(Object.entries('foo')).to.deep.equal([
      ['0', 'f'],
      ['1', 'o'],
      ['2', 'o']
    ])
  })

  it('iterate through key-value gracefully', function() {
    let obj = { a: 5, b: 7, c: 9 }
    let q = []
    for (var [key, value] of Object.entries(obj)) {
      q.push([key, value])
    }
    expect(q).to.deep.equal([
      ['a', 5],
      ['b', 7],
      ['c', 9]
    ])
  })
})

describe('Object.values(obj)', function() {
  it('work on simple json object', function() {
    let obj = { foo: 'bar', baz: 42 }
    expect(Object.values(obj)).to.deep.equal(['bar', 42])
  })

  it('work on array like object', function() {
    let obj = { 0: 'a', 1: 'b', 2: 'c' }
    expect(Object.values(obj)).to.deep.equal(['a', 'b', 'c'])
  })

  it('work on array like object with random key ordering', function() {
    let obj = { 100: 'a', 2: 'b', 7: 'c' }
    expect(Object.values(obj)).to.deep.equal(['b', 'c', 'a'])
  })

  it('getFoo is property which isn\'t enumerable', function() {
    let obj = Object.create({}, {
      getFoo: {
        value: function() { return this.foo }
      }
    })
    obj.foo = 'bar'
    expect(Object.values(obj)).to.deep.equal(['bar'])
  })

  it('non-object argument will be coerced to an object', function() {
    expect(Object.values('foo')).to.deep.equal(['f', 'o', 'o'])
  })
})
