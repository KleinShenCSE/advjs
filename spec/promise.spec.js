require("../www/discography/js/lib/promise.js");

describe("Promise", function() {

  /****************************************************************************/
  it("should invoke success callbacks", function(done) {
    var p = new Promise(function(resolve, reject) {
      resolve(1);
    });

    p.then(function(data) {
      expect(data).toEqual(1);
      done(); // Must be the last thing called.
    });
  });

  /****************************************************************************/
  it("should invoke failure callbacks", function(done) {
    var p = new Promise(function(resolve, reject) {
      reject(2);
    });

    p.catch(function(data) {
      expect(data).toEqual(2);
      done(); // Must be the last thing called.
    });
  });

  /****************************************************************************/
  it("should chain resolved promises", function(done) {
    var p = new Promise(function(resolve, reject) {
      resolve(1);
    });

    p.then(function(data) {
      expect(data).toEqual(1);

      return new Promise(function(resolve, reject) {
        resolve(2);
      });
    }).then(function(data) {
      expect(data).toEqual(2);
      done(); // Must be the last thing called.
    });
  });

  /****************************************************************************/
  it("should chain rejected promises", function(done) {
    var p = new Promise(function(resolve, reject) {
      resolve(1);
    });

    p.then(function(data) {
      expect(data).toEqual(1);

      return new Promise(function(resolve, reject) {
        reject(2);
      });
    }).catch(function(data) {
      expect(data).toEqual(2);
      done(); // Must be the last thing called.
    });
  });
});
