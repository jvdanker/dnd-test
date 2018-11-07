const data = {
    selectedPorts: [],

    // top component
    id: 0,
    type: 'ROOT',
    // no x, y, lib
    components: [
        {
            id: 0,
            type: 'NODE',
            x: 250,
            y: 100,
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
        {
            id: 4,
            type: 'COMPOSITE',
            lib: 2,
            x: 500,
            y: 500,
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
                }
            ],
            wires: [ // wires external ports to internal components
                {
                    from: {
                        port:2
                    },
                    to:{
                        component:1,
                        port:0
                    }
                },
                {
                    from: {
                        port:2
                    },
                    to: {
                        component:1,
                        port:1
                    }
                },
                // wires internal components together
                {
                    from: {
                        component: 0,
                        port:2
                    },
                    to:{
                        component:1,
                        port:0
                    }
                },
                {
                    from: {
                        component: 0,
                        port:2
                    },
                    to: {
                        component:1,
                        port:1
                    }
                },
            ],
            ports: [
                // external ports exposed by this composite component
                // this should be automatically generated using the components and wires definitions
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
        }
    ],
    wires: [
        {from:{component:2,port:0},to:{component:0,port:0}},
        {from:{component:3,port:0},to:{component:0,port:1}},
        {from:{component:0,port:2},to:{component:1,port:0}},
        {from:{component:0,port:2},to:{component:1,port:1}},
    ],
    // if no ports[], then don't draw those
    ports: [],

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
        },
        2: {
            type:'COMPOSITE',
            components: [
                {
                    id: 0,
                    type: 'NODE',
                    x: 250,
                    y: 100,
                    components: [],
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
                    wires: []
                },
                {
                    id: 1,
                    type: 'NODE',
                    x: 500,
                    y: 100,
                    components: [],
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
                    wires: []
                }
            ],
            ports: [ // external ports exposed by this composite component
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
            wires: [ // wires external ports to internal components
                {
                    from: {
                        port:2
                    },
                    to:{
                        component:1,
                        port:0
                    }
                },
                {
                    from: {
                        port:2
                    },
                    to: {
                        component:1,
                        port:1
                    }
                },
                // wires internal components together
                {
                    from: {
                        component: 0,
                        port:2
                    },
                    to:{
                        component:1,
                        port:0
                    }
                },
                {
                    from: {
                        component: 0,
                        port:2
                    },
                    to: {
                        component:1,
                        port:1
                    }
                },
            ],

        }
    }
};

export default data;



