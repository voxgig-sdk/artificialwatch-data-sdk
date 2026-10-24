package voxgigartificialwatchdatasdk

import (
	"github.com/voxgig-sdk/artificialwatch-data-sdk/go/core"
	"github.com/voxgig-sdk/artificialwatch-data-sdk/go/entity"
	"github.com/voxgig-sdk/artificialwatch-data-sdk/go/feature"
	_ "github.com/voxgig-sdk/artificialwatch-data-sdk/go/utility"
)

// Type aliases preserve external API.
type ArtificialwatchDataSDK = core.ArtificialwatchDataSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ArtificialwatchDataEntity = core.ArtificialwatchDataEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ArtificialwatchDataError = core.ArtificialwatchDataError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewBenchIndexEntityFunc = func(client *core.ArtificialwatchDataSDK, entopts map[string]any) core.ArtificialwatchDataEntity {
		return entity.NewBenchIndexEntity(client, entopts)
	}
	core.NewCodingIndexEntityFunc = func(client *core.ArtificialwatchDataSDK, entopts map[string]any) core.ArtificialwatchDataEntity {
		return entity.NewCodingIndexEntity(client, entopts)
	}
	core.NewLeadTimeEntityFunc = func(client *core.ArtificialwatchDataSDK, entopts map[string]any) core.ArtificialwatchDataEntity {
		return entity.NewLeadTimeEntity(client, entopts)
	}
	core.NewWireEntityFunc = func(client *core.ArtificialwatchDataSDK, entopts map[string]any) core.ArtificialwatchDataEntity {
		return entity.NewWireEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewArtificialwatchDataSDK = core.NewArtificialwatchDataSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewArtificialwatchDataSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ArtificialwatchDataSDK  { return NewArtificialwatchDataSDK(nil) }
func Test() *ArtificialwatchDataSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
