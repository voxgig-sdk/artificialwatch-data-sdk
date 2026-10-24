import { BenchIndexEntity } from './entity/BenchIndexEntity';
import { CodingIndexEntity } from './entity/CodingIndexEntity';
import { LeadTimeEntity } from './entity/LeadTimeEntity';
import { WireEntity } from './entity/WireEntity';
export type * from './ArtificialwatchDataTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ArtificialwatchDataEntityBase } from './ArtificialwatchDataEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class ArtificialwatchDataSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    BenchIndex(entopts?: Record<string, any>): BenchIndexEntity;
    CodingIndex(entopts?: Record<string, any>): CodingIndexEntity;
    LeadTime(entopts?: Record<string, any>): LeadTimeEntity;
    Wire(entopts?: Record<string, any>): WireEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ArtificialwatchDataSDK;
    tester(testopts?: any, sdkopts?: any): ArtificialwatchDataSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ArtificialwatchDataSDK;
export { stdutil, config, BaseFeature, ArtificialwatchDataEntityBase, ArtificialwatchDataSDK, SDK, };
export type { DirectResult };
