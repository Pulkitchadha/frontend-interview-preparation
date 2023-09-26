var obj = {
    key1: 'a',
    key2: null,
    key3: {
        key31: 'b',
        key32: null,
        key33: {
            key331: 'e',
            key332: null,
        },
        key34: null,
    },
    key4: [{
        key41: 'c',
        key42: null,
        key43 : 'd',
    }, {
        key411: 'c',
        key412: null,
        key413 : 'd',
        key414: {
            key4141: 'f',
            key4142: null,
        }
    }]
    };
    
    
    
    
    flatten(obj);
    