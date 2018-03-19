/* globals describe it expect */

const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
const { Itinerary } = require('../src/Itinerary.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  describe('with a port', () => {
    let port;

    beforeEach(() => {
      port = new Port('Dover');
    });

    it('port has name', () => {
      // const port = new Port('Dover');
      expect(port.portName).toBe('Dover');
    });

    it('port has ships', () => {
      // const port = new Port('Dover');
      expect(port.ships).toEqual([]);
    });

    it('port can add ships', () => {
      // const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const robShip = new Ship(itinerary);
      const robShip = jest.fn();
      port.addShip(robShip);
      expect(port.ships).toContain(robShip);
    });

    it('port can remove ships', () => {
      // const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      const robShip = jest.fn(); // new Ship(itinerary);
      const anthonyShip = jest.fn(); // new Ship(itinerary);
      port.addShip(robShip);
      port.addShip(anthonyShip);
      port.removeShip(robShip);
      expect(port.ships).toEqual([anthonyShip]);
    });
  });
});
