import type {Meta, StoryObj} from '@storybook/react';
import {UnitSearch} from './UnitSearch';
import {unitKeywords} from '../../test-data/unitKeywords';
import {unitPrefixKeywords} from '../../test-data/unitPrefixKeywords';
import {unitTextFn} from '../../test-data/unitTextFn';
import {unitPrefixTextFn} from '../../test-data/unitPrefixTextFn';
import {allUnits} from 'enheter';
import {unitDimensionText} from '../../test-data/unitDimensionText';

const meta = {
  title: 'Components/UnitSearch',
  component: UnitSearch,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    value: {
      options: Object.keys(allUnits.length.units),
      mapping: allUnits.length.units,
    }
  }
} satisfies Meta<typeof UnitSearch>;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    dimensionText: unitDimensionText,
    unitKeywords,
    prefixKeywords: unitPrefixKeywords,
    unitTextFn,
    unitPrefixTextFn,
    placeholder: "Enter a unit",
    value: allUnits.length.units.metre,
  },
};

export default meta;