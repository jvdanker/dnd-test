const data = {
        selectedPorts: [],
        selectedComponents: [],

        components: [
            {
                id: 100,
                type: 'ROOT',
                x: 100,
                y: 100,
                components: [
                    {
                        id: 0,
                        type: 'NODE',
                        x: 250,
                        y: 100,
                        components: [],
                        wires: [],
                        ports: [
                            {
                                id: 0,
                                type: 'INPUT',
                                x: 10,
                                y: 90
                            },
                            {
                                id: 1,
                                type: 'INPUT',
                                x: 40,
                                y: 90
                            },
                            {
                                id: 2,
                                type: 'OUTPUT',
                                x: 10,
                                y: 0
                            }
                        ],
                        values: [false, false, false]
                    },
                    {
                        id: 1,
                        type: 'NODE',
                        x: 500,
                        y: 100,
                        components: [],
                        wires: [],
                        ports: [
                            {
                                id: 0,
                                type: 'INPUT',
                                x: 10,
                                y: 90
                            },
                            {
                                id: 1,
                                type: 'INPUT',
                                x: 40,
                                y: 90
                            },
                            {
                                id: 2,
                                type: 'OUTPUT',
                                x: 10,
                                y: 0
                            }
                        ],
                        values: [false, false, false]
                    },
                    {
                        id: 2,
                        type: 'SWITCH',
                        x: 250,
                        y: 400,
                        wires: [],
                        ports: [
                            {
                                id: 0,
                                type: 'OUTPUT',
                                x: 0,
                                y: 0,
                            }
                        ],
                        values: [false]
                    },
                    {
                        id: 3,
                        type: 'SWITCH',
                        x: 350,
                        y: 400,
                        wires: [],
                        ports: [
                            {
                                id: 0,
                                type: 'OUTPUT',
                                x: 0,
                                y: 0,
                            }
                        ],
                        values: [false]
                    },
                ],
                // wires external ports to internal components
                // wires internal components together
                wires: [
                    {from: {component: 2, port: 0}, to: {component: 0, port: 0}},
                    {from: {component: 3, port: 0}, to: {component: 0, port: 1}},
                    {from: {component: 0, port: 2}, to: {component: 1, port: 0}},
                    {from: {component: 0, port: 2}, to: {component: 1, port: 1}},
                ],
                // external ports exposed by this composite component
                // this should be automatically generated using the components and wires definitions
                ports: [],
                values: []
            },
        ]
    }
;

export default data;



