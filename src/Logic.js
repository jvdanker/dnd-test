
function updateModel(state) {
    const {library, components, wires} = state;

    var changed = true;
    var i = 0;

    while (changed) {
        changed = false;
        i++;

        if (i > 100) {
            alert('Error');
            return;
        }

        for (let j=0; j<wires.length && !changed; j++) {
            var w = wires[j];

            // var from = components[w.from.component];
            var from = components.find(c => c.id === w.from.component);
            var fromV = from.values[w.from.port];
            // var fromL = findLib(library, from.type);
            // var fromC = fromL.connectors.find(c => c.id === w.from.port);

            var to = components.find(c => c.id === w.to.component);
            // var to = components[w.to.component];
            var toV = to.values[w.to.port];
            // var toL = findLib(library, to.type);
            // var toC = toL.connectors.find(c => c.id === w.to.port);

            if (fromV !== toV) {
                changed = true;
                to.values[w.to.port] = fromV;
            }
        }

        for (let j=0; j<Object.keys(components).length && !changed; j++) {
            var key = Object.keys(components)[j];
            var c = components[key];

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
    // FIXME not creating new objects breaks rendering
    var components = data.components.map(c => {
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
    data.components = components;

    return data;
}

export default updateModel;