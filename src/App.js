import React, {Component} from 'react';
import styled from 'styled-components';

import Wires from './components/Wires';
import Components from './components/Components';
import Library from './components/Library';

import data from './data';
import updateModel from './Logic';

import './App.css';

const Svg = styled.svg`
    flex: 1;
`;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = this.sanitize(data);

        this.onMove = this.onMove.bind(this);
        this.addComponent = this.addComponent.bind(this);
        this.selectPort = this.selectPort.bind(this);
        this.switchValue = this.switchValue.bind(this);

        updateModel(this.state.components, this.state.wires);
    }

    sanitize(data) {
        var wires = data.wires.map(w => {
            if (typeof w.value === 'undefined') {
                w.value = false;
            }

            return w;
        });
        data.wires = wires;

        var components = Object.keys(data.components).map(key => {
            var c = data.components[key];

            for (var i=0; i<c.connectors.length; i++) {
                var conn = c.connectors[i];
                if (typeof conn.value === 'undefined') {
                    conn.value = false;
                }
            }

            return c;
        });
        data.components = components;

        return data;
    }

    onMove(e) {
        const components = this.state.components;
        const component = components[e.id];
        component.x = e.x;
        component.y = e.y;

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
        var wires = this.state.wires;
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

            wires.push({
                from: {
                    component: selectedPorts[0].component,
                    port: selectedPorts[0].port.id
                },
                to: {
                    component: selectedPorts[1].component,
                    port: selectedPorts[1].port.id
                }
            });

            selectedPorts = [];
            fromConnector.selected = false;
            port.selected = false;
        }

        this.setState({
            wires: wires,
            selectedPorts: selectedPorts,
            components: components
        });
    }

    switchValue(id) {
        var components = this.state.components;
        components[id].connectors[0].value = !components[id].connectors[0].value;

        this.setState({
            components: components
        }, () => {
            updateModel(this.state.components, this.state.wires);
            this.setState({
                components: this.state.components,
                wires: this.state.wires
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    test
                </header>
                <main>
                    <Svg>
                        <line
                            x1="200" y1="0"
                            x2="200" y2="100%"
                            stroke="black"
                        />
                        <Library library={this.state.library} />
                        <Wires wires={this.state.wires} components={this.state.components} />
                        <Components
                            wires={this.state.wires}
                            components={this.state.components}
                            onMove={this.onMove}
                            selectPort={this.selectPort}
                            switchValue={this.switchValue}
                        />
                    </Svg>
                    <div>
                        <pre>{JSON.stringify(this.state.wires)}</pre>
                        <pre>{JSON.stringify(this.state.components)}</pre>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
