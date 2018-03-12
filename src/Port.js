function Port(portName) {
  this.portName = portName;
  this.ships = [];
}

Port.prototype = {
  addShip: function addShip(ship) {
    this.ships.push(ship);
  },
  removeShip: function removeShip(ship) {
    const i = this.ships.indexOf(ship);
    this.ships.splice(i, 1);
  },
};

module.exports = { Port };
