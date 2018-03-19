/* globals describe it expect */

//  const { Ship } = require('../src/Ship.js');
const { Port } = require('../src/Port.js');
const { Itinerary } = require('../src/Itinerary.js');

describe('Itinerary', () => {
  it('Creates an itinerary object', () => {
    const itinerary = new Itinerary();
    expect(itinerary).toBeInstanceOf(Object);
  });

  it('checks whether an itinerary has a ports property', () => {
    // const dover = new Port('Dover');
    // const calais = new Port('Calais');
    const portsArray = [jest.fn(), jest.fn()];
    const itinerary = new Itinerary(portsArray);
    expect(itinerary.ports).toEqual(portsArray);
  });
});
