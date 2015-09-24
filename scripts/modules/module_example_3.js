Array.prototype.pushAll = function (items) {

    // items must be an array
    if (! Array.isArray (items)) {
        throw new TypeError("Argument must be an array");
    }

    return this.push(...items);
};