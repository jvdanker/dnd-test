
function updateModel(dontSetState) {
    var changed = true;
    var i = 0;
    var components = this.state.components;
    var wires = this.state.wires;

    while (changed) {
        changed = false;
        i++;

        if (i > 100) {
            alert('Error');
            return;
        }

        for (var j=0; j<wires.length; j++) {
            var w = wires[j];

            // debugger;
            // console.log(i, w);

            var from = components[w.from.component];
            var fromC = from.connectors.find(c => c.id === w.from.port);
            var to = components[w.to.component];
            var toC = to.connectors.find(c => c.id === w.to.port);

            if (typeof w.value === 'undefined') {
                w.value = false;
            }
            if (typeof fromC.value === 'undefined') {
                fromC.value = false;
            }
            if (typeof toC.value === 'undefined') {
                toC.value = false;
            }

            if (fromC.value !== w.value) {
                changed = true;
                w.value = fromC.value;
            }
            if (toC.value !== w.value) {
                changed = true;
                toC.value = w.value;
            }
        }

        for (var j=0; j<Object.keys(components).length; j++) {
            var key = Object.keys(components)[j];
            var c = components[key];

            if (c.type === 'NODE') {
                var c1 = c.connectors[0];
                var c2 = c.connectors[1];
                var c3 = c.connectors[2];

                if (typeof c1.value === 'undefined') {
                    c1.value = false;
                }
                if (typeof c2.value === 'undefined') {
                    c2.value = false;
                }
                if (typeof c3.value === 'undefined') {
                    c3.value = false;
                }

                var result = !(c1.value && c2.value);
                if (result !== c3.value) {
                    changed = true;
                    c3.value = result;
                }
            }
        }
    }

    if (!dontSetState) {
        this.setState({
            components: components,
            wires: wires
        });
    }
}


export default updateModel;