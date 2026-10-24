"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('LeadTimeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ARTIFICIALWATCH_DATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ARTIFICIALWATCH_DATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ArtificialwatchDataSDK.test();
        const ent = testsdk.LeadTime();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('lead_time hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.ArtificialwatchDataSDK.test(offline).LeadTime().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.ArtificialwatchDataSDK.test(offline).LeadTime()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.ArtificialwatchDataSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.LeadTime().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.ArtificialwatchDataSDK.test().LeadTime().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.ArtificialwatchDataSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.LeadTime().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.LeadTime().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.ArtificialwatchDataSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.LeadTime().list({ "announced": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ARTIFICIALWATCH_DATA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'lead_time.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "announced": { "a": true, "fo": "date-time", "h": "Announced", "n": "announced", "r": true, "sh": "The lab's own announcement time.", "t": "`$STRING`", "key$": "announced", "index$": 0 }, "announcement_source": { "a": true, "h": "Announcement Source", "n": "announcement_source", "r": true, "t": "`$STRING`", "key$": "announcement_source", "index$": 1 }, "announcement_url": { "a": true, "h": "Announcement Url", "n": "announcement_url", "r": true, "t": "`$STRING`", "key$": "announcement_url", "index$": 2 }, "first_seen": { "a": true, "fo": "date-time", "h": "First Seen", "n": "first_seen", "r": true, "sh": "When the sweep first found the model live on an API.", "t": "`$STRING`", "key$": "first_seen", "index$": 3 }, "lab": { "a": true, "h": "Lab", "n": "lab", "r": true, "t": "`$STRING`", "key$": "lab", "index$": 4 }, "lead_minutes": { "a": true, "h": "Lead Minutes", "n": "lead_minutes", "r": true, "sh": "announced minus first_seen in minutes; positive means live before the announcement.", "t": "`$NUMBER`", "key$": "lead_minutes", "index$": 5 }, "model": { "a": true, "h": "Model", "n": "model", "r": true, "t": "`$STRING`", "key$": "model", "index$": 6 }, "note": { "a": true, "h": "Note", "n": "note", "r": true, "t": "`$STRING`", "key$": "note", "index$": 7 }, "outcome": { "a": true, "h": "Outcome", "n": "outcome", "r": true, "sh": "Values seen: after, before, excluded.", "t": "`$STRING`", "key$": "outcome", "index$": 8 } }, "name": "lead_time", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data/lead-time.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/data/lead-time.json", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "data" }, { "lit": "lead-time.json" }], "t": { "req": "`reqdata`", "res": "`body.launches`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "lead_time", "name__orig": "lead_time", "Name": "LeadTime", "name_": "lead_time", "name-": "lead-time", "NAME": "LEAD_TIME", "index$": 2 }, { "active": true, "entity": "lead_time", "key$": "BasicLeadTimeFlow", "kind": "basic", "name": "BasicLeadTimeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "lead_time_ref01" } }], "index$": 0 }] }, 'LeadTime', { "GET /data/lead-time.json": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let lead_time_ref01_data = Object.values(setup.data.existing.lead_time)[0];
        // LIST
        const lead_time_ref01_ent = client.LeadTime();
        const lead_time_ref01_match = {};
        const lead_time_ref01_list = (await lead_time_ref01_ent.list(lead_time_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/lead_time/LeadTimeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ArtificialwatchDataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['lead_time01', 'lead_time02', 'lead_time03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ARTIFICIALWATCH_DATA_TEST_LEAD_TIME_ENTID': idmap,
        'ARTIFICIALWATCH_DATA_TEST_LIVE': 'FALSE',
        'ARTIFICIALWATCH_DATA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ARTIFICIALWATCH_DATA_TEST_LEAD_TIME_ENTID'];
    const live = 'TRUE' === env.ARTIFICIALWATCH_DATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ARTIFICIALWATCH_DATA_TEST_LEAD_TIME_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ArtificialwatchDataSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.ARTIFICIALWATCH_DATA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=LeadTimeEntity.test.js.map