# ArtificialwatchData SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ArtificialwatchDataUtility.registrar = ->(u) {
  u.clean = ArtificialwatchDataUtilities::Clean
  u.clean_add = ArtificialwatchDataUtilities::CleanAdd
  u.clean_explain = ArtificialwatchDataUtilities::CleanExplain
  u.done = ArtificialwatchDataUtilities::Done
  u.make_error = ArtificialwatchDataUtilities::MakeError
  u.feature_add = ArtificialwatchDataUtilities::FeatureAdd
  u.feature_hook = ArtificialwatchDataUtilities::FeatureHook
  u.feature_init = ArtificialwatchDataUtilities::FeatureInit
  u.fetcher = ArtificialwatchDataUtilities::Fetcher
  u.make_fetch_def = ArtificialwatchDataUtilities::MakeFetchDef
  u.make_context = ArtificialwatchDataUtilities::MakeContext
  u.make_options = ArtificialwatchDataUtilities::MakeOptions
  u.make_request = ArtificialwatchDataUtilities::MakeRequest
  u.make_response = ArtificialwatchDataUtilities::MakeResponse
  u.make_result = ArtificialwatchDataUtilities::MakeResult
  u.make_point = ArtificialwatchDataUtilities::MakePoint
  u.make_spec = ArtificialwatchDataUtilities::MakeSpec
  u.make_url = ArtificialwatchDataUtilities::MakeUrl
  u.param = ArtificialwatchDataUtilities::Param
  u.prepare_auth = ArtificialwatchDataUtilities::PrepareAuth
  u.prepare_body = ArtificialwatchDataUtilities::PrepareBody
  u.prepare_headers = ArtificialwatchDataUtilities::PrepareHeaders
  u.prepare_method = ArtificialwatchDataUtilities::PrepareMethod
  u.prepare_params = ArtificialwatchDataUtilities::PrepareParams
  u.prepare_path = ArtificialwatchDataUtilities::PreparePath
  u.prepare_query = ArtificialwatchDataUtilities::PrepareQuery
  u.graphql_body = ArtificialwatchDataUtilities::GraphqlBody
  u.graphql_errors = ArtificialwatchDataUtilities::GraphqlErrors
  u.result_basic = ArtificialwatchDataUtilities::ResultBasic
  u.result_body = ArtificialwatchDataUtilities::ResultBody
  u.result_headers = ArtificialwatchDataUtilities::ResultHeaders
  u.transform_request = ArtificialwatchDataUtilities::TransformRequest
  u.transform_response = ArtificialwatchDataUtilities::TransformResponse
}
