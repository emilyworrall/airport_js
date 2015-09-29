function Airport(capacity) {
  this.hangar = [];
  this.capacity = capacity || 5;
};

Airport.prototype.isFull = function() {
  return (this.hangar.length >= this.capacity);
};

Airport.prototype.land = function(plane) {
  console.log(this.isFull())
  if (this.isFull()) { throw new Error('Airport is full'); }
  plane.land();
  this.hangar.push(plane);
};
