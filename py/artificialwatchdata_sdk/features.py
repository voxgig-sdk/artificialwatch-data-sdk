# ArtificialwatchData SDK feature factory

from artificialwatchdata_sdk.feature.base_feature import ArtificialwatchDataBaseFeature
from artificialwatchdata_sdk.feature.ratelimit_feature import ArtificialwatchDataRatelimitFeature
from artificialwatchdata_sdk.feature.retry_feature import ArtificialwatchDataRetryFeature
from artificialwatchdata_sdk.feature.test_feature import ArtificialwatchDataTestFeature
from artificialwatchdata_sdk.feature.timeout_feature import ArtificialwatchDataTimeoutFeature


_FEATURES = {
    "base": lambda: ArtificialwatchDataBaseFeature(),
    "ratelimit": lambda: ArtificialwatchDataRatelimitFeature(),
    "retry": lambda: ArtificialwatchDataRetryFeature(),
    "test": lambda: ArtificialwatchDataTestFeature(),
    "timeout": lambda: ArtificialwatchDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
