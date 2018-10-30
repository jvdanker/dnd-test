
function updateModel(components, wires) {
    var changed = true;
    var i = 0;

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

                if (c1 && c2 && c3) {
                    var result = !(c1.value && c2.value);
                    if (result !== c3.value) {
                        changed = true;
                        c3.value = result;
                    }
                }
            }
        }
    }
}


export default updateModel;