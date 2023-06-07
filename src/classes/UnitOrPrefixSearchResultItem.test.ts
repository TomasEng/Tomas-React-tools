import {DimensionName, UnitName} from 'enheter';
import {Prefix} from 'enheter/lib/Prefix';
import {UnitOrPrefixSearchResultItem} from './UnitOrPrefixSearchResultItem';

describe('UnitOrPrefixSearchResultItem', () => {
  describe('fromId', () => {
    it('Generates a UnitOrPrefixSearchResultItem from an id of the format dimensionKey.unitKey.prefix', () => {
      const dimensionKey: DimensionName = 'length';
      const unitKey: UnitName<'length'> = 'metre';
      const prefix: Prefix = 'kilo';
      const itemWithUnitAndPrefix = UnitOrPrefixSearchResultItem.fromId(`${dimensionKey}.${unitKey}.${prefix}`);
      const itemWithUnitOnly = UnitOrPrefixSearchResultItem.fromId(`${dimensionKey}.${unitKey}.`);
      const itemWithPrefixOnly = UnitOrPrefixSearchResultItem.fromId(`..${prefix}`);
      expect(itemWithUnitAndPrefix).toEqual({unit: {dimensionKey, unitKey}, prefix});
      expect(itemWithUnitOnly).toEqual({unit: {dimensionKey, unitKey}, prefix: null});
      expect(itemWithPrefixOnly).toEqual({unit: undefined, prefix});
    });
  });

  describe('id', () => {
    it('Generates an id of the format dimensionKey.unitKey.prefix', () => {
      const dimensionKey: DimensionName = 'length';
      const unitKey: UnitName<'length'> = 'metre';
      const prefix: Prefix = 'kilo';
      const itemWithUnitAndPrefix = new UnitOrPrefixSearchResultItem({dimensionKey, unitKey}, prefix);
      const itemWithUnitOnly = new UnitOrPrefixSearchResultItem({dimensionKey, unitKey});
      const itemWithPrefixOnly = new UnitOrPrefixSearchResultItem(undefined, prefix);
      expect(itemWithUnitAndPrefix.id()).toEqual(`${dimensionKey}.${unitKey}.${prefix}`);
      expect(itemWithUnitOnly.id()).toEqual(`${dimensionKey}.${unitKey}.`);
      expect(itemWithPrefixOnly.id()).toEqual(`..${prefix}`);
    });
  });
});