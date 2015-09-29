beforeEach(function () {
  jasmine.addMatchers({
    toBeFlying: function () {
      return {
        compare: function (actual, expected) {
          var plane = actual;

          return {
            pass: plane.isFlying
          };
        }
      };
    }
  });
});
