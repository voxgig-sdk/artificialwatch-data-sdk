
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ArtificialwatchDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ArtificialwatchDataSDK.test()
    equal(testsdk instanceof ArtificialwatchDataSDK, true,
      'ArtificialwatchDataSDK.test() must return a client synchronously')
  })

})
