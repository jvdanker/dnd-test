const data = {
    diagram: {
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
                        id: 4,
                        type: 'COMPOSITE',
                        x: 250,
                        y: 10,
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
                                values: [
                                    false,
                                    false,
                                    true
                                ],
                                selected: true
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
                                values: [
                                    true,
                                    true,
                                    false
                                ],
                                selected: true
                            }
                        ],
                        wires: [
                            {
                                from: {
                                    component: 0,
                                    port: 2
                                },
                                to: {
                                    port: 2
                                }
                            },
                            {
                                from: {
                                    port: 0
                                },
                                to: {
                                    component: 0,
                                    port: 0
                                }
                            },
                            {
                                from: {
                                    port: 1
                                },
                                to: {
                                    component: 0,
                                    port: 1
                                }
                            }
                        ],
                        ports: [
                            {
                                id: 2,
                                type: 'OUTPUT',
                                x: 10,
                                y: 0
                            },
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
                            }
                        ],
                        values: []
                    },
                    {
                        id: 2,
                        type: 'SWITCH',
                        x: 250,
                        y: 401,
                        wires: [],
                        ports: [
                            {
                                id: 0,
                                type: 'OUTPUT',
                                x: 0,
                                y: 0
                            }
                        ],
                        values: [
                            false
                        ]
                    },
                    {
                        id: 3,
                        type: 'SWITCH',
                        type: 'SWITCH',
                        x: 350,
                        y: 400,
                        wires: [],
                        ports: [
                            {
                                id: 0,
                                type: 'OUTPUT',
                                x: 0,
                                y: 0
                            }
                        ],
                        values: [
                            false
                        ]
                    },
                ],
                wires: [
                    {
                        from: {
                            component: 2,
                            port: 0
                        },
                        to: {
                            component: 4,
                            port: 0
                        }
                    },
                    {
                        from: {
                            component: 3,
                            port: 0
                        },
                        to: {
                            component: 4,
                            port: 1
                        }
                    },
                    {
                        from: {
                            component: 4,
                            port: 2
                        },
                        to: {
                            component: 4,
                            port: 0
                        }
                    },
                    {
                        from: {
                            component: 4,
                            port: 2
                        },
                        to: {
                            component: 4,
                            port: 1
                        }
                    }
                ],
                ports: [],
                values: []
            }
        ]
    }
}