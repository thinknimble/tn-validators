import assert from 'assert'

import { NumberValidator, MinLengthValidator, EmailValidator } from '../src/index'

describe('Validators', function() {
  describe('#NumberValidator', function() {
    it('should throw an error if the supplied value is not a number', function() {
      const validator = new NumberValidator()
      try {
        validator.call('what')
        assert.fail('Field validation should have thrown an error')
      } catch (err) {}
    })

    it('should do nothing if a valid number is supplied', function() {
      const validator = new NumberValidator()
      try {
        validator.call(42)
      } catch (err) {
        assert.fail('An error was thrown when it should not be')
      }
    })


  })


  describe('#emailValidator', function() {
    it('should throw an error if the supplied value is not an email', function() {
      const validator = new EmailValidator()
      try {
        validator.call('what')
        
      } catch (err) {
        
      }
    })
    it('should not throw an error for emails', function() {
      const validator = new EmailValidator()
      try {
        validator.call('test@test.com')
      } catch (err) {}
    })
    it('should not throw an error for multidomain email', function() {
      const validator = new EmailValidator()
      try {
        validator.call('test@test.com.cy')
      } catch (err) {}
    })
    it('should not throw an error for multidomain email', function() {
      const validator = new EmailValidator()
      try {
        validator.call('test@onmicrosoft.tn.com')
      } catch (err) {}
    })
    it('should return a custom error message if one is passed in', function() {
      const validator = new EmailValidator({ message: 'Custom message' })
      try {
        validator.call('what')
        assert.fail('Validation should not have been successful')
      } catch (err) {
        let error = JSON.parse(err.message)
        assert.strictEqual(error.message,'Custom message')
      }
    })
  })



  describe('#MinLengthValidator', function() {
    const validator = new MinLengthValidator({ minLength: 8 })

    it('should throw an error if the supplied value is less than the required length', function() {
      try {
        validator.call('what')
        assert.fail('Field validation should have thrown an error')
      } catch (err) {}
    })

    it('should do nothing if a valid number is supplied', function() {
      try {
        validator.call('eighteight')
      } catch (err) {
        assert.fail('An error was thrown when it should not be')
      }
    })



    it('should throw an error if a value that can not be coerced to a string is supplied', function() {
      try {
        validator.call({ val: 'This is a random object' })
        assert.fail('Validation should not have been successful')
      } catch (err) {}
    })
  })
})
