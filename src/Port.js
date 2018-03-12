

function Port(portName) {
    this.portName = portName;
    this.ships = [];
  }
  
  
  
  
  
  Port.prototype = {
    addShip: function(ship) {
      this.ships.push(ship);
    }
  }


  module.exports = { Port };