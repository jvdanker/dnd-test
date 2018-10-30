const data = {
    wires: [
        {"from":{"component":"1","port":0},"to":{"component":"0","port":0}},
    ],
    selectedPorts: [],
    components: {
        0: {
            type: 'NODE',
            x: 250,
            y: 100,
            connectors: [
                {
                    id: 0,
                    x: 260,
                    y: 190
                },
            ]
        },
        1: {
            type: 'SWITCH',
            x: 250,
            y: 400,
            connectors: [
                {
                    id: 0,
                    x: 250,
                    y: 400,
                }
            ]
        },
    },
    library: {
    }
};

export default data;



