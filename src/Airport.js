function Airport(capacity) {
  this.hangar = []
};

Airport.prototype.land = function(plane) {
  plane.land();
  this.hangar.push(plane);
};
