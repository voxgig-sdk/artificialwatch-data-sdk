package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewBenchIndexEntityFunc func(client *ArtificialwatchDataSDK, entopts map[string]any) ArtificialwatchDataEntity

var NewCodingIndexEntityFunc func(client *ArtificialwatchDataSDK, entopts map[string]any) ArtificialwatchDataEntity

var NewLeadTimeEntityFunc func(client *ArtificialwatchDataSDK, entopts map[string]any) ArtificialwatchDataEntity

var NewWireEntityFunc func(client *ArtificialwatchDataSDK, entopts map[string]any) ArtificialwatchDataEntity

