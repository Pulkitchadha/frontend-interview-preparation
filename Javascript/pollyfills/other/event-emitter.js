// Solution 1: Function Based.
const EventEmitter = function () {
    this.event = {};
    this.on = function (type, cb) {
        if (this.event[type]) {
            this.event[type].push(cb)

        }
        else {
            this.event[type] = [cb]
        }
    }
    this.emit = function (type) {
        if (this.event[type]) {
            this.event[type].forEach((fun) => {
                fun()
            })
        }
    }
}

// Solution 2: Class based
class EventEmitter {
    constructor() {
        this.event = {};
    }

    on(name, callback) {
        this.event[name] = this.event[name] || [];

        this.event[name].push(callback);
    }

    emit(name, data) {
        if(!this.event[name]) return;

        for(const callback of this.event[name]) {
            callback(data);
        }
    }
}


let eventEmitter = new EventEmitter();

eventEmitter.on('foo', function (data) {
    console.log('Event called', data)
});

eventEmitter.emit('foo', "Hello")