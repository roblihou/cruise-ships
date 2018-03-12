/* globals describe it expect */

//  const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
//  const { Itinerary } = require('../src/Itinerary.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('port has name', () => {
    const port = new Port('Dover');
    expect(port.portName).toBe('Dover');
  });
});

// it('port has ships', () => {
//   const port = new Port('Dover');
//   expect(port.ships).toEqual([]);
// });

// it('port can add ships', () => {
//   const port = new Port('Dover');
//   port.addShip('Rob');
//   expect(port.ships).toContain('Rob');
// });
