import { expect } from 'chai'

describe('String.prototype.padStart()', function() {
  it('should pad string from the start of the current string', function() {
    expect('abc'.padStart(10)).to.equal('       abc')
    expect('abc'.padStart(10, 'foo')).to.equal('foofoofabc')
    expect('abc'.padStart(6, '123456')).to.equal('123abc')
    expect('abc'.padStart(8, '0')).to.equal('00000abc')
    expect('abc'.padStart(1)).to.equal('abc')
  })
})

describe('String.prototype.padEnd()', function() {
  it('should pad string from the end of the current string', function() {
    expect('abc'.padEnd(10)).to.equal('abc       ')
    expect('abc'.padEnd(10, 'foo')).to.equal('abcfoofoof')
    expect('abc'.padEnd(6, '123456')).to.equal('abc123')
    expect('abc'.padEnd(1)).to.equal('abc')
  })
})
