function Airport(capacity) {
  this.hangar = [];
  this.capacity = capacity || 5;
};

Airport.prototype.isFull = function() {
  return (this.hangar.length >= this.capacity);
};

Airport.prototype.land = function(plane) {
  if (this.isFull()) { throw new Error('Airport is full'); }
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  plane.takeoff();
  var n = this.hangar.indexOf(plane);
  this.hangar.splice(n, 1);
  // this.hangar.pop(plane);
};
