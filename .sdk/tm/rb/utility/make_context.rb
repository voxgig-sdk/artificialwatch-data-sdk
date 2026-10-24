# ArtificialwatchData SDK utility: make_context
require_relative '../core/context'
module ArtificialwatchDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    ArtificialwatchDataContext.new(ctxmap, basectx)
  }
end
