import React, {Component} from 'react';
import styled from 'styled-components';

import Node from './components/Node';

import './App.css';

const Svg = styled.svg`
    flex: 1;
`;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPorts: [],
            components: {
                0: {
                    x: 250,
                    y: 100,
                    connectors: [
                        {
                            id: 0,
                            x: 260,
                            y: 190,
                            connections: [
                                {component: 1, connector: 0}
                            ]
                        },
                        {
                            id: 1,
                            x: 290,
                            y: 190
                        }
                    ]
                },
                1: {
                    x: 500,
                    y: 100,
                    connectors: [
                        {
                            id: 0,
                            x: 510,
                            y: 190
                        }
                    ]
                }
            },
            library: {
                0: {
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

        this.onMove = this.onMove.bind(this);
        this.addComponent = this.addComponent.bind(this);
        this.selectPort = this.selectPort.bind(this);
    }

    onMove(e) {
        const components = this.state.components;
        components[e.id] = e;
        this.setState({
            components: components
        });
    }

    addComponent(id) {
        const components = this.state.components;
        var max = 0;
        Object.keys(components).forEach(i => {
            const c = this.state.components[i];
            if (c.id > max) {
                max = c.id;
            }
        });

        const c = JSON.parse(JSON.stringify(this.state.library[id]));
        c.x = 500;
        c.connectors[0].x = 510;
        c.connectors[1].x = 540;
        components[max+1] = c;
        this.setState({
            components: components
        });
    }

    selectPort(component, port) {
        port.selected = !port.selected;
        console.log(component, port);

        var selectedPorts = this.state.selectedPorts;
        if (port.selected) {
            selectedPorts.push({
                component: component,
                port: port
            });
        } else {
            // TODO remove from array
        }

        var components = this.state.components;
        if (selectedPorts.length === 2) {
            var from = components[selectedPorts[0].component];
            var fromConnector = from.connectors.find((e) => {
                return e.id === selectedPorts[0].port.id;
            });

            if (!fromConnector.connections) {
                fromConnector.connections = [];
            }

            fromConnector.connections.push({
                component: selectedPorts[1].component,
                connector: selectedPorts[1].port.id
            });

            selectedPorts = [];
            port.selected = false;
        }

        this.setState({
            selectedPorts: selectedPorts,
            components: components
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    test
                </header>
                <main>
                    <div onClick={(e) => console.log(e)}>laksdjf</div>
                    <Svg>
                        {
                            Object.keys(this.state.library).map(id => {
                                const c = this.state.library[id];
                                return (
                                    <Node
                                        key={id}
                                        id={id}
                                        x={c.x}
                                        y={c.y}
                                        connectors={c.connectors}
                                        fill='blue'
                                        onClick={this.addComponent}
                                    />
                                );
                            })
                        }
                        {
                            Object.keys(this.state.components).map(id => {
                                const e = this.state.components[id];
                                var lines = e.connectors.map((c, i) => {
                                    if (! (c.connections)) {
                                        return [];
                                    }

                                    var lines = c.connections.map((conn, i2) => {
                                        var comp = this.state.components[conn.component];
                                        var connector = comp.connectors.find(e => {
                                            return e.id === conn.connector;
                                        });

                                        return (
                                            <line
                                                key={i}
                                                x1={connector.x} y1={connector.y}
                                                x2={c.x} y2={c.y}
                                                stroke="black" />
                                        );
                                    });

                                    return lines;
                                });

                                return lines;
                            })
                        }
                        {
                            Object.keys(this.state.components).map(id => {
                                const e = this.state.components[id];
                                return (
                                    <Node
                                        key={id}
                                        id={id}
                                        x={e.x}
                                        y={e.y}
                                        connectors={e.connectors}
                                        selected={e.selected}
                                        fill='blue'
                                        onMove={this.onMove}
                                        selectPort={this.selectPort}/>
                                );
                            })
                        }
                    </Svg>
                    <div>
                        <pre>{JSON.stringify(this.state)}</pre>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
