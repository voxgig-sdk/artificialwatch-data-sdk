

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ArtificialwatchDataSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CodingIndexEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARTIFICIALWATCH_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARTIFICIALWATCH_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArtificialwatchDataSDK.test()
    const ent = testsdk.CodingIndex()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('coding_index hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of ArtificialwatchDataSDK.test(offline).CodingIndex().stream('list')) { }
    }, /offline/)

    for await (const _item of ArtificialwatchDataSDK.test(offline).CodingIndex()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = ArtificialwatchDataSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.CodingIndex().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of ArtificialwatchDataSDK.test().CodingIndex().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new ArtificialwatchDataSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.CodingIndex().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.CodingIndex().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = ArtificialwatchDataSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CodingIndex().list({"attribution":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARTIFICIALWATCH_DATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'coding_index.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attribution":{"a":true,"h":"Attribution","n":"attribution","r":true,"t":"`$STRING`","key$":"attribution","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":1},"generatedAt":{"a":true,"fo":"date-time","h":"Generated At","n":"generatedAt","r":true,"t":"`$STRING`","key$":"generatedAt","index$":2},"license":{"a":true,"h":"License","n":"license","r":true,"sh":"Licence URL.","t":"`$STRING`","key$":"license","index$":3},"method":{"a":true,"h":"Method","n":"method","r":true,"sh":"How the index is computed.","t":"`$STRING`","key$":"method","index$":4},"models":{"a":true,"h":"Models","n":"models","r":true,"sh":"One entry per model, best first.","t":"`$ARRAY`","key$":"models","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":6},"sources":{"a":true,"h":"Sources","n":"sources","r":true,"t":"`$ARRAY`","key$":"sources","index$":7},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"Page that shows the table.","t":"`$STRING`","key$":"url","index$":8}},"name":"coding_index","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data/coding-index.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/data/coding-index.json","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"data"},{"lit":"coding-index.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"coding_index","name__orig":"coding_index","Name":"CodingIndex","name_":"coding_index","name-":"coding-index","NAME":"CODING_INDEX","index$":1}, {"active":true,"entity":"coding_index","key$":"BasicCodingIndexFlow","kind":"basic","name":"BasicCodingIndexFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"coding_index_ref01"}}],"index$":0}]}, 'CodingIndex', {"GET /data/coding-index.json":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let coding_index_ref01_data = Object.values(setup.data.existing.coding_index)[0] as any

    // LIST
    const coding_index_ref01_ent = client.CodingIndex()
    const coding_index_ref01_match: any = {}

    const coding_index_ref01_list = (await coding_index_ref01_ent.list(coding_index_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/coding_index/CodingIndexTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ArtificialwatchDataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['coding_index01','coding_index02','coding_index03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARTIFICIALWATCH_DATA_TEST_CODING_INDEX_ENTID': idmap,
    'ARTIFICIALWATCH_DATA_TEST_LIVE': 'FALSE',
    'ARTIFICIALWATCH_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARTIFICIALWATCH_DATA_TEST_CODING_INDEX_ENTID']

  const live = 'TRUE' === env.ARTIFICIALWATCH_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARTIFICIALWATCH_DATA_TEST_CODING_INDEX_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ArtificialwatchDataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
