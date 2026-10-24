# ArtificialwatchData SDK configuration

module ArtificialwatchDataConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ArtificialwatchData",
        "slug" => "artificialwatch-data",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://artificialwatch.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "bench_index" => {},
          "coding_index" => {},
          "lead_time" => {},
          "wire" => {},
        },
      },
      "entity" => {
        "bench_index" => {
          "fields" => [
            {
              "name" => "attribution",
              "title" => "Attribution",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "generatedAt",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "license",
              "title" => "License",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Licence URL.",
            },
            {
              "name" => "method",
              "title" => "Method",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "How the index is computed.",
            },
            {
              "name" => "models",
              "title" => "Models",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "One entry per model, best first.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sources",
              "title" => "Sources",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Page that shows the table.",
            },
          ],
          "name" => "bench_index",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/data/bench-index.json",
                  "segments" => [
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "bench-index.json",
                    },
                  ],
                  "parts" => [
                    "data",
                    "bench-index.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "coding_index" => {
          "fields" => [
            {
              "name" => "attribution",
              "title" => "Attribution",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "generatedAt",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "license",
              "title" => "License",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Licence URL.",
            },
            {
              "name" => "method",
              "title" => "Method",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "How the index is computed.",
            },
            {
              "name" => "models",
              "title" => "Models",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "One entry per model, best first.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sources",
              "title" => "Sources",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Page that shows the table.",
            },
          ],
          "name" => "coding_index",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/data/coding-index.json",
                  "segments" => [
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "coding-index.json",
                    },
                  ],
                  "parts" => [
                    "data",
                    "coding-index.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "lead_time" => {
          "fields" => [
            {
              "name" => "announced",
              "title" => "Announced",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The lab's own announcement time.",
              "format" => "date-time",
            },
            {
              "name" => "announcement_source",
              "title" => "Announcement Source",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "announcement_url",
              "title" => "Announcement Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "first_seen",
              "title" => "First Seen",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "When the sweep first found the model live on an API.",
              "format" => "date-time",
            },
            {
              "name" => "lab",
              "title" => "Lab",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "lead_minutes",
              "title" => "Lead Minutes",
              "type" => "`$NUMBER`",
              "req" => true,
              "short" => "announced minus first_seen in minutes; positive means live before the announcement.",
            },
            {
              "name" => "model",
              "title" => "Model",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "note",
              "title" => "Note",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "outcome",
              "title" => "Outcome",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Values seen: after, before, excluded.",
            },
          ],
          "name" => "lead_time",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/data/lead-time.json",
                  "segments" => [
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "lead-time.json",
                    },
                  ],
                  "parts" => [
                    "data",
                    "lead-time.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.launches`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "wire" => {
          "fields" => [],
          "name" => "wire",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/wire/feed",
                  "segments" => [
                    {
                      "lit" => "wire",
                    },
                    {
                      "lit" => "feed",
                    },
                  ],
                  "parts" => [
                    "wire",
                    "feed",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {
                    "$action" => "feed",
                  },
                  "response" => {
                    "kind" => "raw",
                    "media" => "application/rss+xml",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ArtificialwatchDataFeatures.make_feature(name)
  end
end
