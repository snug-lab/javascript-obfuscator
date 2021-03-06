import { TOptionsNormalizerRule } from '../../types/options/TOptionsNormalizerRule';

import { IOptions } from '../../interfaces/options/IOptions';

import { Utils } from '../../utils/Utils';

export const DomainLockRule: TOptionsNormalizerRule = (options: IOptions): IOptions => {
    if (options.domainLock.length) {
        const normalizedDomains: string[] = [];

        for (const domain of options.domainLock) {
            normalizedDomains.push(Utils.extractDomainFromUrl(domain));
        }

        options = {
            ...options,
            domainLock: normalizedDomains
        };
    }

    return options;
};
