import { ArtificialwatchDataEntityBase } from '../ArtificialwatchDataEntityBase';
import type { ArtificialwatchDataSDK } from '../ArtificialwatchDataSDK';
import type { Control } from '../types';
import type { CodingIndex, CodingIndexListMatch } from '../ArtificialwatchDataTypes';
declare class CodingIndexEntity extends ArtificialwatchDataEntityBase<CodingIndex> {
    constructor(client: ArtificialwatchDataSDK, entopts: any);
    make(this: CodingIndexEntity): CodingIndexEntity;
    list(this: any, reqmatch?: CodingIndexListMatch, ctrl?: Control): Promise<CodingIndexEntity[]>;
}
export { CodingIndexEntity };
