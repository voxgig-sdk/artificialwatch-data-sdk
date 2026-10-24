-- ArtificialwatchData SDK exists test

local sdk = require("artificialwatch-data_sdk")

describe("ArtificialwatchDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
