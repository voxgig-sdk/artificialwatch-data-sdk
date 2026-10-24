# ArtificialwatchData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ArtificialwatchDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      ArtificialwatchDataBaseFeature.new
    when "ratelimit"
      ArtificialwatchDataRatelimitFeature.new
    when "retry"
      ArtificialwatchDataRetryFeature.new
    when "test"
      ArtificialwatchDataTestFeature.new
    when "timeout"
      ArtificialwatchDataTimeoutFeature.new
    else
      ArtificialwatchDataBaseFeature.new
    end
  end
end
