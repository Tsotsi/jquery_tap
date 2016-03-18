$.fn.tap = function(func) {
  this._flag = false;
  return this.on('touchstart', (function(_this) {
    return function() {
      _this._flag = true;
      return _this._timer = setTimeout((function() {
        return _this._flag = false;
      }), 300);
    };
  })(this)).on('touchend', (function(_this) {
    return function() {
      if (_this._flag) {
        return func();
      }
    };
  })(this));
};
