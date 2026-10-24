# ArtificialwatchData SDK exists test

import pytest
from artificialwatchdata_sdk import ArtificialwatchDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ArtificialwatchDataSDK.test(None, None)
        assert testsdk is not None
