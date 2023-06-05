import {DimensionName} from 'enheter';
import {Prefix} from 'enheter/lib/Prefix';
import {UnitKeys} from '../types';

export class UnitOrPrefixSearchResultItem {
  unit?: UnitKeys<DimensionName>;
  prefix: Prefix;

  constructor(unit?: UnitKeys<DimensionName>, prefix?: Prefix) {
    this.unit = unit;
    this.prefix = prefix ?? null;
  }

  public static fromUnitKeys<D extends DimensionName>(unit: UnitKeys<D>): UnitOrPrefixSearchResultItem {
    return new UnitOrPrefixSearchResultItem(unit);
  }

  public static fromUnitKeysWithPrefix<D extends DimensionName>(prefix: Prefix) {
    return (unit: UnitKeys<D>): UnitOrPrefixSearchResultItem => new UnitOrPrefixSearchResultItem(unit, prefix);
  }

  public static fromPrefix(prefix: Prefix): UnitOrPrefixSearchResultItem {
    return new UnitOrPrefixSearchResultItem(undefined, prefix);
  }

  public isPrefixOnly(): boolean {
    return !this.unit;
  }
}