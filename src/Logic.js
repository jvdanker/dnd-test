
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
            var from = components[w.from.component];
            var fromV = from.values[w.from.port];
            var fromL = findLib(library, from.type);
            var fromC = fromL.connectors.find(c => c.id === w.from.port);

            var to = components[w.to.component];
            var toV = to.values[w.to.port];
            var toL = findLib(library, to.type);
            var toC = toL.connectors.find(c => c.id === w.to.port);

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

function findLib(library, type) {
    var key = Object.keys(library).find(e => {
        var component = library[e];
        if (component.type === type) {
            return component;
        }

        return null;
    });

    return library[key];
}


export default updateModel;