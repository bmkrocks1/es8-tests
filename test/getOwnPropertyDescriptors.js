import { expect } from 'chai'

describe('Object.getOwnPropertyDescriptors(obj, prop)', function() {
  it('should return a property descriptor for an own property of a given object', function() {
    let d = Object.getOwnPropertyDescriptors({
      get foo() {
        return 17
      }
    }, 'foo')

    expect(d.foo.configurable).to.be.true
    expect(d.foo.enumerable).to.be.true
    expect(d.foo.get()).to.be.equal(17)
    expect(d.foo.set).to.be.undefined

    d = Object.getOwnPropertyDescriptors({
      bar: 42
    }, 'bar')

    expect(d.bar.configurable).to.be.true
    expect(d.bar.enumerable).to.be.true
    expect(d.bar.value).to.be.equal(42)
    expect(d.bar.writable).to.be.true

    let o = {}
    Object.defineProperty(o, 'baz', {
      value: 8675309,
      writable: false,
      enumerable: false
    })
    d = Object.getOwnPropertyDescriptors(o, 'baz')

    expect(d.baz.configurable).to.be.false
    expect(d.baz.enumerable).to.be.false
    expect(d.baz.value).to.be.equal(8675309)
    expect(d.baz.writable).to.be.false

  })
})
