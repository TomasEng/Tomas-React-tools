import {DimensionName, findDimensionName} from 'enheter';
import {Prefix} from 'enheter/lib/Prefix';
import {UnitKeys, UnitPrefixTextFn, UnitTextFn} from '../types';
import {ComboboxItem, UnitItem, UnitPrefixItem} from '../components';
import React from 'react';
import {findUnitFromUnitKeys} from '../utils/unitUtils';

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

  public comboboxItem(unitTextFn: UnitTextFn, unitPrefixTextFn: UnitPrefixTextFn): ComboboxItem {
    let label;
    let searchString = undefined;
    if (this.isPrefixOnly()) {
      const prefixName = unitPrefixTextFn(this.prefix);
      label = <UnitPrefixItem prefix={this.prefix} prefixName={prefixName}/>;
      searchString = prefixName;
    } else if (!this.unit) {
      throw new Error('Something impossible happened.');
    } else {
      const unit = findUnitFromUnitKeys<DimensionName>(this.unit!);
      const prefixedUnit = unit.withPrefix(this.prefix);
      const {dimension, symbol} = prefixedUnit;
      label = <UnitItem name={unitTextFn(prefixedUnit)} symbol={symbol} dimension={findDimensionName(dimension)!}/>
    }
    return {
      value: this.id(),
      label,
      searchString,
    };
  }
}