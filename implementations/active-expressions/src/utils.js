// TODO this is a copy from reactive object queries repository (not completely anymore)
// TODO extract this into its own library

export function pushIfMissing(array, item) {
    // check for already existing.
    var exists = false;
    var len = array.length;
    for(var i = 0; i < len; i++)
        if(array[i] == item) {
            exists = true;
            break;
        }

    // do not add an already existing item
    if (!exists) {
        array.push(item);
    }

    // return true if the given element was pushed, otherwise false
    return !exists;
}

export function removeIfExisting(array, item) {
    var index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
        // return true if the given element was actually removed
        return true;
    }
    return false;
}

export function isPrimitive(elem) {
    var getType = function(elem) {
        return Object.prototype.toString.call(elem).slice(8, -1);
    };

    var type = getType(elem);

    return type === 'String' ||
        type === 'RegExp' ||
        type === 'Boolean' ||
        type === 'Number' ||
        type === 'Null' ||
        type === 'Undefined';
}

export function identity(x) { return x; }
