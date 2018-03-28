/* globals window */

(function exportShip() {
  function Ship(itinerary) {
    const currentPort = itinerary.ports[0];
    this.currentPort = currentPort;
    this.itinerary = itinerary;
    this.currentPort.addShip(this);
  }

  Ship.prototype = {
    setSail: function setSail() {
      this.currentPort.removeShip(this);
      this.currentPort = false;
    },
    dock: function dock(currentPort) {
      this.currentPort = currentPort;
      currentPort.addShip(this);
    },
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Ship };
  } else {
    window.Ship = Ship;
  }
}());
