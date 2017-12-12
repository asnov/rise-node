export const Symbols = {
  generic: {
    appConfig   : Symbol('appConfig'),
    db          : Symbol('db'),
    genesisBlock: Symbol('genesisBlock'),
    redisClient : Symbol('redisClient'),
    zschema     : Symbol('z_schema'),
  },
  helpers: {
    bus      : Symbol('bus'),
    constants: Symbol('constants'),
    ed       : Symbol('ed'),
    logger   : Symbol('logger'),
    sequence : Symbol('sequence'),
    slots    : Symbol('slots'),
  },
  logic  : {
    account        : Symbol('account'),
    appState       : Symbol('appState'),
    block          : Symbol('block'),
    blockReward    : Symbol('blockReward'),
    broadcaster    : Symbol('broadcaster'),
    peer           : Symbol('peer'),
    peers          : Symbol('peers'),
    round          : Symbol('round'),
    rounds         : Symbol('rounds'),
    transaction    : Symbol('transaction'),
    transactionPool: Symbol('transactionPool'),
    transactions   : {
      createmultisig : Symbol('createMultisigTx'),
      delegate       : Symbol('delegateTx'),
      secondSignature: Symbol('secondSignatureTx'),
      send           : Symbol('sendTx'),
      vote           : Symbol('voteTx'),
    },
  },
  modules: {
    accounts        : Symbol('accounts module'),
    blocks          : Symbol('blocks module'),
    blocksSubModules: {
      chain  : Symbol('blocks_submodule_chain'),
      process: Symbol('blocks_submodule_process'),
      utils  : Symbol('blocks_submodule_utils'),
      verify : Symbol('blocks_submodule_verify'),
    },
    cache           : Symbol('cache module'),
    delegates       : Symbol('delegates module'),
    forge           : Symbol('forge module'),
    fork            : Symbol('fork module'),
    loader          : Symbol('loader module'),
    multisignatures : Symbol('multisignatures module'),
    peers           : Symbol('peers module'),
    rounds          : Symbol('rounds module'),
    system          : Symbol('system module'),
    transactions    : Symbol('transactions module'),
    transport       : Symbol('transport module'),
  },

  tags: {
    helpers: {
      balancesSequence: Symbol('balanceSequence')
    }
  }
};
