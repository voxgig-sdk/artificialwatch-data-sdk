import { ArtificialwatchDataEntityBase } from '../ArtificialwatchDataEntityBase';
import type { ArtificialwatchDataSDK } from '../ArtificialwatchDataSDK';
import type { Control } from '../types';
import type { Wire, WireLoadMatch } from '../ArtificialwatchDataTypes';
declare class WireEntity extends ArtificialwatchDataEntityBase<Wire> {
    constructor(client: ArtificialwatchDataSDK, entopts: any);
    make(this: WireEntity): WireEntity;
    load(this: any, reqmatch?: WireLoadMatch, ctrl?: Control): Promise<WireEntity>;
}
export { WireEntity };
