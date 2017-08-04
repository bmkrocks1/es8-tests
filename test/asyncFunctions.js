import 'babel-polyfill'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

let should = chai.should();
chai.use(chaiAsPromised);

describe('Async functions', function() {
  it('sayHello() should eventually equal to \'Hello, es8\'', function() {
    this.timeout(3000)

    const fetchTextByPromise = () => new Promise(resolve => {
      setTimeout(() => {
        resolve('es8')
      }, 2000)
    })

    const sayHello = async () => {
      const fetchedText = await fetchTextByPromise()
      return `Hello, ${fetchedText}`
    }

    return sayHello().should.eventually.equal('Hello, es8')
  })
})
