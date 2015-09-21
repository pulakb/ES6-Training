function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(function (key) {
        receiver[key] = supplier[key];
    });

    return receiver;
}

function EventTarget() {

}

EventTarget.prototype = {
  constructor: EventTarget,
    emit: function () {},
    on: function () {}
};

var myObject = {};

//mixin(myObject, EventTarget.prototype); // Old way
Object.asin(myObject, EventTarget.prototype) //ES6

myObject.emit("somethingChanged");

