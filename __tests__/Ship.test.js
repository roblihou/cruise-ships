/* globals describe it expect */

const { Ship, Port } = require('../src/Ship.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

it('has a starting port', () => {
  const port = new Port('Dover');
  const ship = new Ship(port);

  expect(ship.startingPort).toBe(port);
});

it('has set sail', () => {
  const port = new Port('Dover');
  const ship = new Ship(port);
  ship.setSail();
  expect(ship.startingPort).toBeFalsy();
});

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

it('port has name', () => {
  const port = new Port('Dover');
  expect(port.portName).toBe('Dover');
});

it('is docked at a port', () => {
  const port = new Port('Dover');
  const ship = new Ship(port);

  const calais = new Port('Calais');
  ship.dock(calais);
  expect(ship.currentPort).toBe(calais);
});

