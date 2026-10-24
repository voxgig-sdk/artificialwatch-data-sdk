import { ArtificialwatchDataEntityBase } from '../ArtificialwatchDataEntityBase';
import type { ArtificialwatchDataSDK } from '../ArtificialwatchDataSDK';
import type { Control } from '../types';
import type { BenchIndex, BenchIndexListMatch } from '../ArtificialwatchDataTypes';
declare class BenchIndexEntity extends ArtificialwatchDataEntityBase<BenchIndex> {
    constructor(client: ArtificialwatchDataSDK, entopts: any);
    make(this: BenchIndexEntity): BenchIndexEntity;
    list(this: any, reqmatch?: BenchIndexListMatch, ctrl?: Control): Promise<BenchIndexEntity[]>;
}
export { BenchIndexEntity };
