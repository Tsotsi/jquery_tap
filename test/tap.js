$.fn.tap = function(func) {
  if (func == null) {
    func = function() {};
  }
  this._flag = [];
  this._timer = [];
  this.on('touchstart', (function(_this) {
    return function() {
      var idx;
      idx = _this.index(arguments[0].target);
      _this._flag[idx] = true;
      return _this._timer[idx] = setTimeout((function(idx) {
        return function() {
          return _this._flag[idx] = false;
        };
      })(idx), 300);
    };
  })(this)).on('touchend', (function(_this) {
    return function() {
      var idx;
      idx = _this.index(arguments[0].target);
      if (_this._flag[idx]) {
        clearTimeout(_this._timer[idx]);
        return func.call(_this[idx]);
      }
    };
  })(this));
  return this;
};
