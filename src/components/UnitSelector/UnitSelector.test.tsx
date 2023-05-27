import React from 'react';
import {act, render as renderRtl, screen} from '@testing-library/react';
import {UnitSelector, UnitSelectorProps} from './UnitSelector';
import {unitTextFn} from '../../test-data/unitTextFn';
import {lengthUnit} from 'enheter';
import {Prefix} from 'enheter/lib/Prefix';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

// Test data:
const defaultProps: UnitSelectorProps = {
  dimension: 'length',
  textFn: unitTextFn,
};

describe('UnitSelector', () => {
  it('Chooses the base unit as default', () => {
    render();
    expect(unitBox()).toHaveValue(unitTextFn(lengthUnit('metre')));
    expect(prefixBox()).toHaveValue('');
  });

  it('Shows the selected unit', () => {
    render({selectedUnit: lengthUnit('yard')});
    expect(unitBox()).toHaveValue(unitTextFn(lengthUnit('yard')));
    expect(prefixBox()).toHaveValue('');
  });

  it('Shows the selected unit and prefix for a prefixed unit', () => {
    const prefixlessUnit = lengthUnit('metre');
    const prefix: Prefix = 'kilo';
    const selectedUnit = prefixlessUnit.withPrefix(prefix);
    render({selectedUnit});
    expect(unitBox()).toHaveValue(unitTextFn(prefixlessUnit));
    expect(prefixBox()).toHaveValue(prefix);
  });

  it('Calls onChange function with new unit when user changes something', async () => {
    const onChange = jest.fn();
    render({onChange});
    await act(() => user.click(unitBox()));
    await act(() => user.click(screen.getByRole('option', {name: 'Yard'})));
    expect(onChange).toHaveBeenCalledTimes(1);
    const newUnit = onChange.mock.calls[0][0];
    expect(newUnit.equals(lengthUnit('yard'))).toBe(true);
  });

  it('Sets new unit when user changes something', async () => {
    render();
    await act(() => user.click(unitBox()));
    await act(() => user.click(screen.getByRole('option', {name: 'Yard'})));
    expect(unitBox()).toHaveValue(unitTextFn(lengthUnit('yard')));
    expect(prefixBox()).toHaveValue('');
  });
});

const render = (props: Partial<UnitSelectorProps> = {}) =>
  renderRtl(<UnitSelector {...defaultProps} {...props} />);

const unitBox = () => screen.getByRole('combobox', {name: 'Unit'});
const prefixBox = () => screen.getByRole('combobox', {name: 'Prefix'});
