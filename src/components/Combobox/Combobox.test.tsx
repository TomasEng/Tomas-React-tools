import React from 'react';
import {Combobox} from './Combobox';
import {searchResult} from './testUtils';
import {act, render as renderRtl, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ComboboxProps} from './types/ComboboxProps';

const user = userEvent.setup();

// Test data:
const placeholder = "Enter a country";
const defaultProps: ComboboxProps = {
  placeholder,
  searchResult,
};

describe('Combobox', () => {
  afterEach(jest.clearAllMocks);

  it('Does not show the list when user has not typed anything', async () => {
    render();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    const input = screen.getByRole('combobox');
    await act(() => user.click(input));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('Shows the list on focus if openOnFocus is true', async () => {
    render({openOnFocus: true});
    await act(() => user.click(document.body));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    const input = screen.getByRole('combobox');
    await act(() => user.click(input));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('Opens when user types something', async () => {
    render();
    const input = screen.getByRole('combobox');
    await act(() => user.type(input, 'a'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('Switches to "selected" mode when user selects an item', async () => {
    render();
    await act(() => user.type(screen.getByRole('combobox'), 'a'));
    await act(() => user.click(screen.getByRole('option', {name: /Austria/i})));
    expect(screen.getByRole('combobox')).toHaveValue('Austria');
  });

  it('Calls onChange function with new value when user selects an item', async () => {
    const onChange = jest.fn();
    render({onChange});
    await act(() => user.type(screen.getByRole('combobox'), 'a'));
    await act(() => user.click(screen.getByRole('option', {name: /Austria/i})));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('Austria');
  });

  it('Resets when in selected mode and user clicks', async () => {
    render();
    await act(() => user.type(screen.getByRole('combobox'), 'a'));
    await act(() => user.click(screen.getByRole('option', {name: /Austria/i})));
    await act(() => user.click(screen.getByRole('combobox')));
    expect(screen.getByRole('combobox')).toHaveValue('');
  });

  it('Renders with given selected value', () => {
    const value = 'Norway';
    render({value});
    expect(screen.getByRole('combobox')).toHaveValue(value);
  });

  it('Keeps old selection if the field is blurred', async () => {
    const value = 'Norway';
    render({value});
    const input = screen.getByRole('combobox');
    await act(() => user.type(input, 'a'));
    await act(() => user.tab());
    expect(input).toHaveValue(value);
  });
});

const render = (props: Partial<ComboboxProps> = {}) =>
  renderRtl(<Combobox {...defaultProps} {...props} />);