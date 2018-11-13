
function updateModel(state, root) {
    let changed = true;
    let depth = 0;

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
            let w = root.wires[j];

            let from = root;
            if (typeof w.from.component !== 'undefined') {
                from = root.components.find(c => c.id === w.from.component);
            }
            let fromV = from.values[w.from.port];

            let to = root;
            if (typeof w.to.component !== 'undefined') {
                to = root.components.find(c => c.id === w.to.component);
            }
            let toV = to.values[w.to.port];

            if (fromV !== toV) {
                changed = true;
                to.values[w.to.port] = fromV;
            }
        }

        for (let i=0; i<root.components.length && !changed; i++) {
            let c = root.components[i];

            if (c.type === 'NODE') {
                let c1 = c.values[0];
                let c2 = c.values[1];
                let c3 = c.values[2];

                let result = !(c1 && c2);
                if (result !== c3) {
                    changed = true;
                    c.values[2] = result;
                }
            }

            updateModel(state, c);
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


export function findComponent(root, id) {
    if (root.id === id) {
        return root;
    }

    if (typeof root.components === 'undefined') {
        return -1;
    }

    for (let i=0; i<root.components.length; i++) {
        const c = findComponent(root.components[i], id);
        if (c !== -1) {
            return c;
        }
    }

    return -1;
}

export function findPort(component, id) {
    return component.ports.filter(p => p.id === id)[0];
}

export function mergeComponents(state, selectedComponents) {
    console.log('merge', selectedComponents);

    let newComponent = {
        id: 4,
        type: 'COMPOSITE',
        x: 250,
        y: 10,
        components: selectedComponents,
        wires: [],
        ports: [],
        values: []
    };

    let root = state.components[0];

    let ids = selectedComponents.map(c => c.id);
    console.log(ids);
    let idSet = new Set(ids);

    root.wires.map(w => {
        if (idSet.has(w.from.component)) {
            let component = findComponent(root, w.from.component);
            let port = Object.assign({}, findPort(component, w.from.port));

            if (!findPort(newComponent, w.from.port)) {
                newComponent.ports.push(port);

                newComponent.wires.push({
                    from: {
                        component: w.from.component, // FIXME find component
                        port: w.from.port,
                    },
                    to: {
                        // no component id (external port)
                        port: port.id
                    }
                });
            }

            w.from.component = newComponent.id;
        }
    });

    root.wires.map(w => {
        if (idSet.has(w.to.component)) {
            let component = findComponent(root, w.to.component);
            // TODO generate new destination port id, could collide with existing ids
            let port = Object.assign({}, findPort(component, w.to.port));

            if (!findPort(newComponent, w.to.port)) {
                newComponent.ports.push(port);

                newComponent.wires.push({
                    from: {
                        // no component id (external port)
                        port: port.id
                    },
                    to: {
                        component: w.to.component, // FIXME find component
                        port: w.to.port
                    }
                });
            }

            w.to.component = newComponent.id;
        }
    });

    console.log('newComponent=', newComponent);

    // root.wires = root.wires.filter(w => idSet.has(w.from.component));
    // root.wires = root.wires.filter(w => idSet.has(w.to.component));
    console.log(root.wires);

    root.components = root.components.filter(c => !idSet.has(c.id));
    root.components.push(newComponent);
    console.log(root.components);
}

export default updateModel;