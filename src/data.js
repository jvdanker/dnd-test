const data = {
    wires: [],
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
                }
            ]
        },
        2: {
            type: 'SWITCH',
            x: 200,
            y: 400,
            connectors: [
                {
                    id: 0,
                    x: 200,
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
        }
    }
};

export default data;



