package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ArtificialwatchData",
			"slug": "artificialwatch-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://artificialwatch.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"bench_index": map[string]any{},
				"coding_index": map[string]any{},
				"lead_time": map[string]any{},
				"wire": map[string]any{},
			},
		},
		"entity": map[string]any{
			"bench_index": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attribution",
						"title": "Attribution",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "generatedAt",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "license",
						"title": "License",
						"type": "`$STRING`",
						"req": true,
						"short": "Licence URL.",
					},
					map[string]any{
						"name": "method",
						"title": "Method",
						"type": "`$STRING`",
						"req": true,
						"short": "How the index is computed.",
					},
					map[string]any{
						"name": "models",
						"title": "Models",
						"type": "`$ARRAY`",
						"req": true,
						"short": "One entry per model, best first.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sources",
						"title": "Sources",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Page that shows the table.",
					},
				},
				"name": "bench_index",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/bench-index.json",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "bench-index.json",
									},
								},
								"parts": []any{
									"data",
									"bench-index.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"coding_index": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attribution",
						"title": "Attribution",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "generatedAt",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "license",
						"title": "License",
						"type": "`$STRING`",
						"req": true,
						"short": "Licence URL.",
					},
					map[string]any{
						"name": "method",
						"title": "Method",
						"type": "`$STRING`",
						"req": true,
						"short": "How the index is computed.",
					},
					map[string]any{
						"name": "models",
						"title": "Models",
						"type": "`$ARRAY`",
						"req": true,
						"short": "One entry per model, best first.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sources",
						"title": "Sources",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Page that shows the table.",
					},
				},
				"name": "coding_index",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/coding-index.json",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "coding-index.json",
									},
								},
								"parts": []any{
									"data",
									"coding-index.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lead_time": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "announced",
						"title": "Announced",
						"type": "`$STRING`",
						"req": true,
						"short": "The lab's own announcement time.",
						"format": "date-time",
					},
					map[string]any{
						"name": "announcement_source",
						"title": "Announcement Source",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "announcement_url",
						"title": "Announcement Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "first_seen",
						"title": "First Seen",
						"type": "`$STRING`",
						"req": true,
						"short": "When the sweep first found the model live on an API.",
						"format": "date-time",
					},
					map[string]any{
						"name": "lab",
						"title": "Lab",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lead_minutes",
						"title": "Lead Minutes",
						"type": "`$NUMBER`",
						"req": true,
						"short": "announced minus first_seen in minutes; positive means live before the announcement.",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "note",
						"title": "Note",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "outcome",
						"title": "Outcome",
						"type": "`$STRING`",
						"req": true,
						"short": "Values seen: after, before, excluded.",
					},
				},
				"name": "lead_time",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/data/lead-time.json",
								"segments": []any{
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"lit": "lead-time.json",
									},
								},
								"parts": []any{
									"data",
									"lead-time.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.launches`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"wire": map[string]any{
				"fields": []any{},
				"name": "wire",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/wire/feed",
								"segments": []any{
									map[string]any{
										"lit": "wire",
									},
									map[string]any{
										"lit": "feed",
									},
								},
								"parts": []any{
									"wire",
									"feed",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "feed",
								},
								"response": map[string]any{
									"kind": "raw",
									"media": "application/rss+xml",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
