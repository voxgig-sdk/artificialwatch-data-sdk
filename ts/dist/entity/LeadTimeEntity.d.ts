import { ArtificialwatchDataEntityBase } from '../ArtificialwatchDataEntityBase';
import type { ArtificialwatchDataSDK } from '../ArtificialwatchDataSDK';
import type { Control } from '../types';
import type { LeadTime, LeadTimeListMatch } from '../ArtificialwatchDataTypes';
declare class LeadTimeEntity extends ArtificialwatchDataEntityBase<LeadTime> {
    constructor(client: ArtificialwatchDataSDK, entopts: any);
    make(this: LeadTimeEntity): LeadTimeEntity;
    list(this: any, reqmatch?: LeadTimeListMatch, ctrl?: Control): Promise<LeadTimeEntity[]>;
}
export { LeadTimeEntity };
