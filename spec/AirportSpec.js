describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = { land: function() {} };
    spyOn(plane, 'land');
  });

  describe('.land', function() {

    it('tells plane to land', function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('adds landed plane to hangar', function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });

    it('throws an error if hangar is full', function() {
      while (!airport.isFull()) { airport.land(plane) }
      expect(function() { airport.land(plane); }).toThrowError('Airport is full');
    });

  });

});
