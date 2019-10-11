const assert = require('assert')
const { exec } = require('child_process')

describe('vclass', () => {
    describe('run', () => {
        it('should return what the main() function does in the class', () => {
            assert.equal(exec('vclass ~/vclass/main.js', 'Hello World!'))
        })
    })
})