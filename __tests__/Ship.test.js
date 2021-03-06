/* globals describe it expect */

const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
const { Itinerary } = require('../src/Itinerary.js');


describe('Ship', () => {
  describe('with a port and itinerery', () => {
    let ship;
    let port;

    beforeEach(() => {
      //  port = new Port('Dover');
      port = { portName: 'Dover', ships: [], removeShip: jest.fn(), addShip: jest.fn() };
      //  port = jest.fn();
      const itinerary = new Itinerary([port]);
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      //  const port = new Port('Dover');
      //  const itinerary = new Itinerary([port]);
      //  const ship = new Ship(itinerary);
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      //  const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
      //  const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      ship.setSail();
      expect(port.removeShip).toHaveBeenCalledWith(ship);
      // expect(ship.currentPort).toBeFalsy();
    });

    it('is docked at a port', () => {
      //  const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      const calais = new Port('Calais');
      ship.dock(calais);
      expect(ship.currentPort).toBe(calais);
    });

    it('gets added to port on instantiation', () => {
      //  const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      // expect(ship.currentPort.ships).toContain(ship);
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });

    it('gets removed from port when it sets sail', () => {
      //  const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      ship.setSail();
      expect(port.ships).not.toContain(ship);
    });

    it('can dock at a different port', () => {
      //  const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      ship.setSail();
      const nextPort = new Port('Ningbo');
      ship.dock(nextPort);
      expect(nextPort.ships).toContain(ship);
    });
  });
});
