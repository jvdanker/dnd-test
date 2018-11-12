
function updateModel(state, root) {
    const {library, components, wires} = state;

    var changed = true;
    var depth = 0;

    if (typeof root === 'undefined') {
        root = state.components[0];
    }

    if (typeof root.components === 'undefined') {
        return;
    }

    while (changed) {
        changed = false;
        depth++;

        if (depth > 100) {
            alert('Error');
            return;
        }

        for (let j=0; j<root.wires.length && !changed; j++) {
            var w = root.wires[j];

            // var from = components[w.from.component];
            var from = root.components.find(c => c.id === w.from.component);
            var fromV = from.values[w.from.port];
            // var fromL = findLib(library, from.type);
            // var fromC = fromL.connectors.find(c => c.id === w.from.port);

            var to = root.components.find(c => c.id === w.to.component);
            // var to = components[w.to.component];
            var toV = to.values[w.to.port];
            // var toL = findLib(library, to.type);
            // var toC = toL.connectors.find(c => c.id === w.to.port);

            if (fromV !== toV) {
                changed = true;
                to.values[w.to.port] = fromV;
            }
        }

        for (let i=0; i<root.components.length && !changed; i++) {
            var c = root.components[i];

            if (c.type === 'NODE') {
                var c1 = c.values[0];
                var c2 = c.values[1];
                var c3 = c.values[2];

                var result = !(c1 && c2);
                if (result !== c3) {
                    changed = true;
                    c.values[2] = result;
                }
            }

            if (!changed) {
                updateModel(state, c);
            }
        }
    }
}

export function findLib(library, type) {
    var key = Object.keys(library).find(e => {
        var component = library[e];
        if (component.type === type) {
            return component;
        }

        return null;
    });

    return library[key];
}

export function sanitize(data) {
    console.log(data);
    // FIXME not creating new objects breaks rendering
    var components = data.diagram.components.map(c => {
        // var c = data.components[key];
        // var lib = findLib(data.library, c.type);

        // if (typeof c.values === 'undefined') {
        //     c.values = new Array(c.ports.length);
        //
        //     for (var i=0; i<c.values.length; i++) {
        //         c.values[i] = false;
        //     }
        // }

        return c;
    });
    data.diagram.components = components;

    return data;
}

function addComponent(id) {
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

function selectPort(component, port) {
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

export function mergeComponents(state, selectedComponents) {
    console.log('merge', selectedComponents);

    var newComponent = {
        id: 4,
        type: 'COMPOSITE',
        x: 250,
        y: 10,
        components: selectedComponents,
        wires: [],
        ports: [],
        values: []
    };

    state.components[0].components.push(newComponent);
}

export default updateModel;