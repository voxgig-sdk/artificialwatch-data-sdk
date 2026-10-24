# ArtificialwatchData SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ArtificialwatchData",
            "slug": "artificialwatch-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://artificialwatch.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "bench_index": {},
                "coding_index": {},
                "lead_time": {},
                "wire": {},
            },
        },
        "entity": {
      "bench_index": {
        "fields": [
          {
            "name": "attribution",
            "title": "Attribution",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "generatedAt",
            "title": "Generated At",
            "type": "`$STRING`",
            "req": True,
            "format": "date-time",
          },
          {
            "name": "license",
            "title": "License",
            "type": "`$STRING`",
            "req": True,
            "short": "Licence URL.",
          },
          {
            "name": "method",
            "title": "Method",
            "type": "`$STRING`",
            "req": True,
            "short": "How the index is computed.",
          },
          {
            "name": "models",
            "title": "Models",
            "type": "`$ARRAY`",
            "req": True,
            "short": "One entry per model, best first.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "sources",
            "title": "Sources",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "Page that shows the table.",
          },
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
                    "lit": "data",
                  },
                  {
                    "lit": "bench-index.json",
                  },
                ],
                "parts": [
                  "data",
                  "bench-index.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "coding_index": {
        "fields": [
          {
            "name": "attribution",
            "title": "Attribution",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "generatedAt",
            "title": "Generated At",
            "type": "`$STRING`",
            "req": True,
            "format": "date-time",
          },
          {
            "name": "license",
            "title": "License",
            "type": "`$STRING`",
            "req": True,
            "short": "Licence URL.",
          },
          {
            "name": "method",
            "title": "Method",
            "type": "`$STRING`",
            "req": True,
            "short": "How the index is computed.",
          },
          {
            "name": "models",
            "title": "Models",
            "type": "`$ARRAY`",
            "req": True,
            "short": "One entry per model, best first.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "sources",
            "title": "Sources",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "Page that shows the table.",
          },
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
                    "lit": "data",
                  },
                  {
                    "lit": "coding-index.json",
                  },
                ],
                "parts": [
                  "data",
                  "coding-index.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "lead_time": {
        "fields": [
          {
            "name": "announced",
            "title": "Announced",
            "type": "`$STRING`",
            "req": True,
            "short": "The lab's own announcement time.",
            "format": "date-time",
          },
          {
            "name": "announcement_source",
            "title": "Announcement Source",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "announcement_url",
            "title": "Announcement Url",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "first_seen",
            "title": "First Seen",
            "type": "`$STRING`",
            "req": True,
            "short": "When the sweep first found the model live on an API.",
            "format": "date-time",
          },
          {
            "name": "lab",
            "title": "Lab",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "lead_minutes",
            "title": "Lead Minutes",
            "type": "`$NUMBER`",
            "req": True,
            "short": "announced minus first_seen in minutes; positive means live before the announcement.",
          },
          {
            "name": "model",
            "title": "Model",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "note",
            "title": "Note",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "outcome",
            "title": "Outcome",
            "type": "`$STRING`",
            "req": True,
            "short": "Values seen: after, before, excluded.",
          },
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
                    "lit": "data",
                  },
                  {
                    "lit": "lead-time.json",
                  },
                ],
                "parts": [
                  "data",
                  "lead-time.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.launches`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                    "lit": "wire",
                  },
                  {
                    "lit": "feed",
                  },
                ],
                "parts": [
                  "wire",
                  "feed",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "feed",
                },
                "response": {
                  "kind": "raw",
                  "media": "application/rss+xml",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
