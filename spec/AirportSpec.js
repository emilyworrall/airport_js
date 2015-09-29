describe('Airport', function() {

beforeEach(function() {
  airport = new Airport(5);
  plane = { land: function() {} };
  spyOn(plane, 'land');
});

it('tells plane to land', function() {
  airport.land(plane);
  expect(plane.land).toHaveBeenCalled();
});

it('adds landed plane to hangar', function() {
  airport.land(plane);
  expect(airport.hangar).toContain(plane);
});







});
