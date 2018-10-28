const data = {
    wires: [
        {"from":{"component":"2","port":0},"to":{"component":"0","port":0}},
        {"from":{"component":"2","port":0},"to":{"component":"0","port":1}},
        {"from":{"component":"0","port":2},"to":{"component":"1","port":0}},
        {"from":{"component":"0","port":2},"to":{"component":"1","port":1}},
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
                {
                    id: 1,
                    x: 290,
                    y: 190
                },
                {
                    id: 2,
                    x: 260,
                    y: 90
                }
            ]
        },
        1: {
            type: 'NODE',
            x: 500,
            y: 100,
            connectors: [
                {
                    id: 0,
                    x: 510,
                    y: 190
                },
                {
                    id: 1,
                    x: 540,
                    y: 190
                },
                {
                    id: 2,
                    x: 510,
                    y: 90
                }
            ]
        },
        2: {
            type: 'SWITCH',
            x: 250,
            y: 400,
            connectors: [
                {
                    id: 0,
                    x: 250,
                    y: 370,
                }
            ]
        }
    },
    library: {
        0: {
            type: 'NODE',
            x: 50,
            y: 100,
            connectors: [
                {
                    id: 0,
                    x: 60,
                    y: 190
                },
                {
                    id: 1,
                    x: 90,
                    y: 190
                }
            ]
        },
        1: {
            type: 'NODE',
            x: 50,
            y: 300,
            connectors: [
                {
                    id: 0,
                    x: 60,
                    y: 390
                },
                {
                    id: 1,
                    x: 90,
                    y: 390
                }
            ]
        },
        2: {
            type: 'SWITCH',
            x: 50,
            y: 500,
            connectors: [
                {
                    id: 0,
                    x: 50,
                    y: 470,
                }
            ]
        }
    }
};

export default data;



