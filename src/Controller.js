/* eslint-env browser */

(function exportController() {
  function Controller() {
    this.initialiseSea();
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
    renderShip: function renderShip(ship) {
      //  currentPort = ship.currentPort;
      // function checkPort(port) {
      //   return port === ship.currentPort;
      // }
      const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector("div#ports div[data-port-index='" + portIndex + "']");//       
      const topPos = portElement.offsetTop + 10;
      // alert(topPos);
      const leftPos = portElement.offsetLeft - 30;
      // alert(leftPos);
      const shipElement = document.querySelector('#ship');
      shipElement.style.top = topPos + 'px';
      shipElement.style.left = leftPos + 'px';
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Controller };
  } else {
    window.Controller = Controller;
  }
}());

