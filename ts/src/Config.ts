
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ArtificialwatchData',
        slug: "artificialwatch-data",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://artificialwatch.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        bench_index: {
        },
  
        coding_index: {
        },
  
        lead_time: {
        },
  
        wire: {
        },
  
    }
  }


  entity = {
    "bench_index": {
      "fields": [
        {
          "name": "attribution",
          "title": "Attribution",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "generatedAt",
          "title": "Generated At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "license",
          "title": "License",
          "type": "`$STRING`",
          "req": true,
          "short": "Licence URL."
        },
        {
          "name": "method",
          "title": "Method",
          "type": "`$STRING`",
          "req": true,
          "short": "How the index is computed."
        },
        {
          "name": "models",
          "title": "Models",
          "type": "`$ARRAY`",
          "req": true,
          "short": "One entry per model, best first."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "sources",
          "title": "Sources",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "short": "Page that shows the table."
        }
      ],
      "name": "bench_index",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/data/bench-index.json",
              "segments": [
                {
                  "lit": "data"
                },
                {
                  "lit": "bench-index.json"
                }
              ],
              "parts": [
                "data",
                "bench-index.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "coding_index": {
      "fields": [
        {
          "name": "attribution",
          "title": "Attribution",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "generatedAt",
          "title": "Generated At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "license",
          "title": "License",
          "type": "`$STRING`",
          "req": true,
          "short": "Licence URL."
        },
        {
          "name": "method",
          "title": "Method",
          "type": "`$STRING`",
          "req": true,
          "short": "How the index is computed."
        },
        {
          "name": "models",
          "title": "Models",
          "type": "`$ARRAY`",
          "req": true,
          "short": "One entry per model, best first."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "sources",
          "title": "Sources",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "short": "Page that shows the table."
        }
      ],
      "name": "coding_index",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/data/coding-index.json",
              "segments": [
                {
                  "lit": "data"
                },
                {
                  "lit": "coding-index.json"
                }
              ],
              "parts": [
                "data",
                "coding-index.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "lead_time": {
      "fields": [
        {
          "name": "announced",
          "title": "Announced",
          "type": "`$STRING`",
          "req": true,
          "short": "The lab's own announcement time.",
          "format": "date-time"
        },
        {
          "name": "announcement_source",
          "title": "Announcement Source",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "announcement_url",
          "title": "Announcement Url",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "first_seen",
          "title": "First Seen",
          "type": "`$STRING`",
          "req": true,
          "short": "When the sweep first found the model live on an API.",
          "format": "date-time"
        },
        {
          "name": "lab",
          "title": "Lab",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "lead_minutes",
          "title": "Lead Minutes",
          "type": "`$NUMBER`",
          "req": true,
          "short": "announced minus first_seen in minutes; positive means live before the announcement."
        },
        {
          "name": "model",
          "title": "Model",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "note",
          "title": "Note",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "outcome",
          "title": "Outcome",
          "type": "`$STRING`",
          "req": true,
          "short": "Values seen: after, before, excluded."
        }
      ],
      "name": "lead_time",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/data/lead-time.json",
              "segments": [
                {
                  "lit": "data"
                },
                {
                  "lit": "lead-time.json"
                }
              ],
              "parts": [
                "data",
                "lead-time.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.launches`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "wire": {
      "fields": [],
      "name": "wire",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/wire/feed",
              "segments": [
                {
                  "lit": "wire"
                },
                {
                  "lit": "feed"
                }
              ],
              "parts": [
                "wire",
                "feed"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "feed"
              },
              "response": {
                "kind": "raw",
                "media": "application/rss+xml"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

