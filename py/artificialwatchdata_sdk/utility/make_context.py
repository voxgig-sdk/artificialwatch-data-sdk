# ArtificialwatchData SDK utility: make_context

from artificialwatchdata_sdk.core.context import ArtificialwatchDataContext


def make_context_util(ctxmap, basectx):
    return ArtificialwatchDataContext(ctxmap, basectx)
