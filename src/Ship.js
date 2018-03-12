function Ship(itinerary) {
  this.currentPort = itinerary.ports[0];
  this.currentPort = itinerary.ports[0];
  this.itinerary = itinerary;
}

Ship.prototype = {
  setSail: function () {
    this.currentPort = false;
  },
  dock: function (currentPort) {
    this.currentPort = currentPort;
  },
}

module.exports = { Ship };
