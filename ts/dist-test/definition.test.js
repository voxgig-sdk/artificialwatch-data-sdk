"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "bench_index",
        "accessor": "BenchIndex",
        "op": "list",
        "method": "GET",
        "path": "/data/bench-index.json",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "name": "ArtificialWatch Bench Index",
            "description": "x",
            "url": "https://artificialwatch.com/benchmarks",
            "generatedAt": "2026-10-23T14:11:55.552Z",
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "attribution": "x",
            "method": "x",
            "sources": [
                {
                    "id": "livebench",
                    "name": "LiveBench",
                    "url": "x",
                    "scale": "global average (0-100)",
                    "asOf": "2026-01-01T00:00:00Z"
                }
            ],
            "models": [
                {
                    "rank": 1,
                    "id": "opus-next",
                    "name": "Claude Opus 5.5",
                    "vendor": "Anthropic",
                    "index": 100,
                    "boards": 1,
                    "scores": {},
                    "page": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "coding_index",
        "accessor": "CodingIndex",
        "op": "list",
        "method": "GET",
        "path": "/data/coding-index.json",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "name": "ArtificialWatch Bench Index",
            "description": "x",
            "url": "https://artificialwatch.com/benchmarks",
            "generatedAt": "2026-10-23T14:11:55.552Z",
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "attribution": "x",
            "method": "x",
            "sources": [
                {
                    "id": "livebench",
                    "name": "LiveBench",
                    "url": "x",
                    "scale": "global average (0-100)",
                    "asOf": "2026-01-01T00:00:00Z"
                }
            ],
            "models": [
                {
                    "rank": 1,
                    "id": "opus-next",
                    "name": "Claude Opus 5.5",
                    "vendor": "Anthropic",
                    "index": 100,
                    "boards": 1,
                    "scores": {},
                    "page": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "lead_time",
        "accessor": "LeadTime",
        "op": "list",
        "method": "GET",
        "path": "/data/lead-time.json",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "name": "x",
            "url": "x",
            "license": "x",
            "attribution": "x",
            "method": "x",
            "temporalCoverage": "2026-07-24/2026-10-19",
            "counted": 1,
            "liveBeforeAnnouncement": 1,
            "launches": [
                {
                    "model": "MiniMax M3.1 Flash",
                    "lab": "MiniMax",
                    "first_seen": "2026-01-01T00:00:00Z",
                    "announced": "2026-01-01T00:00:00Z",
                    "lead_minutes": 1,
                    "outcome": "before",
                    "announcement_source": "x",
                    "announcement_url": "x",
                    "note": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "wire",
        "accessor": "Wire",
        "op": "load",
        "method": "GET",
        "path": "/wire/feed",
        "action": "feed",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/rss+xml"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": null,
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map