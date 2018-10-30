const data = {
    x: 500,
    y: 50,
    wires: [
        {"from":{"component":"2","port":0},"to":{"component":"0","port":0}},
        {"from":{"component":"3","port":0},"to":{"component":"0","port":1}},
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
                    x: 10,
                    y: 90
                },
                {
                    id: 1,
                    x: 40,
                    y: 90
                },
                {
                    id: 2,
                    x: 10,
                    y: 0
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
                    x: 10,
                    y: 90
                },
                {
                    id: 1,
                    x: 40,
                    y: 90
                },
                {
                    id: 2,
                    x: 10,
                    y: 0
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
                }
            ]
        },
        3: {
            type: 'SWITCH',
            x: 350,
            y: 400,
            connectors: [
                {
                    id: 0,
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
                    x: 10,
                    y: 90
                },
                {
                    id: 1,
                    x: 40,
                    y: 90
                },
                {
                    id: 2,
                    x: 10,
                    y: 0
                }
            ]
        },
        1: {
            type: 'SWITCH',
            x: 50,
            y: 300,
            connectors: [
                {
                    id: 0,
                    x: 0,
                    y: 0,
                }
            ]
        }
    }
};

export default data;



