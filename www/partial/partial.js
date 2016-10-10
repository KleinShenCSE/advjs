Function.prototype.partial = function() {
  var origArgs = Array.from(arguments);
  var origThis = origArgs.shift();
  var origFunc = this;

  return function() {
    var newArgs = Array.from(arguments);
    var args = origArgs.concat(newArgs);
    return origFunc.apply(origThis, args);
  };
};
