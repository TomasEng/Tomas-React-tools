import {unitTextFn} from './unitTextFn';
import {lengthUnit, massUnit} from 'enheter';

describe('unitTestFn', () => {
  it('Works', () => {
    expect(unitTextFn(lengthUnit('metre'))).toEqual('Metre');
    expect(unitTextFn(lengthUnit('metre').withPrefix('centi'))).toEqual('Centimetre');
    expect(unitTextFn(massUnit('gram').withPrefix('kilo'))).toEqual('Kilogram');
    expect(unitTextFn(lengthUnit('foot'))).toEqual('Foot');
    expect(unitTextFn(lengthUnit('foot').withPrefix('centi'))).toEqual('Centifoot');
  });
});