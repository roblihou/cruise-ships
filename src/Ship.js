function Ship(itinerary) {
  this.startingPort = itinerary.ports[0];
  this.currentPort = itinerary.ports[0];
  this.itinerary = itinerary;
}

function Port(portName) {
  this.portName = portName;
}

function Itinerary(ports) {
  this.ports = ports;
}

Ship.prototype = {
  setSail: function(){
    this.startingPort = false;
  },
  dock: function(currentPort){
    this.currentPort = currentPort;
  }
}


module.exports = { Ship, Port, Itinerary };
