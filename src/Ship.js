function Ship(startingPort) {
  this.startingPort = startingPort;
  this.currentPort = startingPort;
}

function Port(portName) {
  this.portName = portName;
}

Ship.prototype = {
  setSail: function(){
    this.startingPort = false;
  },
  dock: function(currentPort){
    this.currentPort = currentPort;
  }
}


module.exports = { Ship, Port };
