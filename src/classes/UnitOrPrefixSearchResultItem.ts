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

  /**
   * Generate a UnitOrPrefixSearchResultItem from an id of the format dimensionKey.unitKey.prefix
   * @param id The id to generate from.
   * @returns A UnitOrPrefixSearchResultItem.
   */
  public static fromId(id: string): UnitOrPrefixSearchResultItem {
    const [dimensionKey, unitKey, prefix] = id.split('.');
    const unit = dimensionKey && unitKey
      ? {dimensionKey, unitKey} as UnitKeys<DimensionName>
      : undefined;
    return new UnitOrPrefixSearchResultItem(unit, prefix as Prefix || null);
  }

  /**
   * Generate an id of the format dimensionKey.unitKey.prefix for internal use.
   */
  public id(): string {
    const prefixKey = this.prefix || '';
    if (this.unit) {
      const {dimensionKey, unitKey} = this.unit;
      return `${dimensionKey}.${unitKey}.${prefixKey}`;
    } else return `..${prefixKey}`;
  }

  public isPrefixOnly(): boolean {
    return !this.unit;
  }
}