/* globals describe it expect */

const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
const { Itinerary } = require('../src/Itinerary.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });

  it('has set sail', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  it('is docked at a port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });

  it('gets added to port on instantiation', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort.ships).toContain(ship);
  });

  it('gets removed from port when it sets sail', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(port.ships).not.toContain(ship);
  });

  it('can dock at a different port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    ship.setSail();
    const nextPort = new Port('Ningbo'); 
    ship.dock(nextPort);
    expect(nextPort.ships).toContain(ship);
  });
});
