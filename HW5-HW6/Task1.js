function deepCopy(a) {
    if (a) {
        var clone;
        if (typeof(a) === 'object') {
            clone = {};
            for (var key in a) {
                if (a.hasOwnProperty(key)) {
                    clone[key] = deepCopy(a[key]);
                }
            }
        } else {
            clone = a;
        }
        return clone;
    } else {
        return a;
    }
}
