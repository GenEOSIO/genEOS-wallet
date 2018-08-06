
export const Blockchains = {
    GENEOS:'geneos',
    ETH:'eth'
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));