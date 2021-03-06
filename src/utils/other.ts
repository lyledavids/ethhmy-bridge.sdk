import { randomBytes } from '@harmony-js/crypto/dist/random';

export const uuid = () => {
    return [randomBytes(4), randomBytes(4), randomBytes(4), randomBytes(4)].join(
        '-',
    );
};

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
