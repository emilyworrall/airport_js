describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = { land: function() {}, takeoff: function() {} };
    spyOn(plane, 'land');
    spyOn(plane, 'takeoff');
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

  describe('.takeoff', function() {

    it('tells plane to takeoff', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(plane.takeoff).toHaveBeenCalled();
    });

    it('removes plane from hangar on takeoff', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar).not.toContain(plane);
    });

  });

});
