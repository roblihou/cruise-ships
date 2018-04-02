/* eslint-env browser */

(function exportController() {
  function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();
    document.querySelector('#sailbutton').addEventListener('click', () => {
      this.setSail();
    });  
  }

  Controller.prototype = {
    initialiseSea: function initialiseSea() {
      let imageIndex = 0; //  Initialze array index
      const waterImages = ['images/water0.png', 'images/water1.png'];
      const changeBackground = function changeBackground() {
        const viewport = document.querySelector('#viewport');
        viewport.style.backgroundImage = 'url(' + waterImages[imageIndex] + ')';
        imageIndex = -imageIndex + 1; //  This causes imageIndex to alternate between 0 and 1
      };
      setInterval(changeBackground, 500);
    },
    renderPorts: function renderPorts(ports) {
      // alert('renderPorts method called');
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      let portsElementWidth = 0;
      ports.forEach((port, portIndex) => {
        const newPortElement = document.createElement('div');
        newPortElement.setAttribute('class', 'port');
        newPortElement.setAttribute('id', port.portName);
        newPortElement.dataset.portIndex = portIndex;
        //  newPortElement.setAttribute('data', portIndex);
        portsElement.appendChild(newPortElement);
        portsElementWidth += 256;
      });
      //  portsElement.style.width = `${portsElementWidth} + px`;
      portsElement.style.width = portsElementWidth + 'px';
    },
    renderShip: function renderShip() {
      // alert('renderShip method called');
      const portIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
      // alert('Current port index: ' + portIndex);
      const portElement = document.querySelector("div#ports div[data-port-index='" + portIndex + "']");//       
      const topPos = portElement.offsetTop + 10;
      const leftPos = portElement.offsetLeft - 30;
      const shipElement = document.querySelector('#ship');
      shipElement.style.top = topPos + 'px';
      shipElement.style.left = leftPos + 'px';
    },
    setSail: function setSail() {
      // alert('setSail method called');
      const portIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
      const portElement = document.querySelector("div#ports div[data-port-index='" + portIndex + "']");//       
      const nextPortIndex = portIndex + 1;
      const nextPortElement = document.querySelector("div#ports div[data-port-index='" + nextPortIndex + "']");//       
      const sailDistance = nextPortElement.offsetLeft - portElement.offsetLeft;
      const shipElement = document.querySelector('#ship');
      const newOffestLeft = shipElement.offsetLeft + sailDistance;
      // shipElement.style.left = newOffestLeft + 'px';
      // alert('setSail method finished');
      // alert(this.ship.itinerary.ports[nextPortIndex].portName);
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === (nextPortElement.offsetLeft - 30)) {
          this.ship.dock(this.ship.itinerary.ports[nextPortIndex]);
          alert('Docked at ' + this.ship.currentPort.portName);
          clearInterval(sailInterval);
        } else {
          shipElement.style.left = `${shipLeft + 1}px`;
        }
      }, 25);
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Controller };
  } else {
    window.Controller = Controller;
  }
}());

