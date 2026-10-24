# ArtificialwatchData SDK utility: prepare_body
require_relative 'media'
module ArtificialwatchDataUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ArtificialwatchDataUtilities.raw_body(ctx.reqdata) if ArtificialwatchDataUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
