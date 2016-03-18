$.fn.tap = function(func) {
  if (func == null) {
    func = function() {};
  }
  this._flag = false;
  this.on('touchstart', (function(_this) {
    return function() {
      _this._flag = true;
      return _this._timer = setTimeout((function() {
        return _this._flag = false;
      }), 300);
    };
  })(this)).on('touchend', (function(_this) {
    return function() {
      if (_this._flag) {
        clearTimeout(_this._timer);
        return func.call(_this);
      }
    };
  })(this));
  return this;
};
