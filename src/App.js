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
            components: {
                0: {
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
                                return (
                                    <Node
                                        key={id}
                                        id={id}
                                        x={e.x}
                                        y={e.y}
                                        connectors={e.connectors}
                                        fill='blue'
                                        onMove={this.onMove} />
                                );
                            })
                        }
                        {
                            Object.keys(this.state.components).map(id => {
                                const e = this.state.components[id];
                                var lines = e.connectors.map((c, i) => {
                                    return (
                                        <line
                                            key={i}
                                            x1="0" y1="0"
                                            x2={c.x} y2={c.y}
                                            stroke="black" />
                                    );
                                })

                                return lines;
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
