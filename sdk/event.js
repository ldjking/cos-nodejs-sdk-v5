var initEvent = function (cos) {
    var listeners = {};
    var getList = function (action) {
        !listeners[action] && (listeners[action] = []);
        return listeners[action];
    };
    cos.on = function (action, callback) {
        getList(action).push(callback);
    };
    cos.off = function (action, callback) {
        var list = getList(action);
        for (var i = list.length - 1; i >= 0; i--) {
            callback === list[i] && (list.splice(i, 1));
        }
    };
    cos.emit = function (action, data) {
        var list = getList(action);
        for (var i = 0; i < list.length; i++) {
            list[i](data);
        }
    };
};

module.exports.init = initEvent;