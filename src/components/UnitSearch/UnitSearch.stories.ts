import type {Meta, StoryObj} from '@storybook/react';
import {UnitSearch} from './UnitSearch';
import {unitKeywords} from '../../test-data/unitKeywords';
import {unitPrefixKeywords} from '../../test-data/unitPrefixKeywords';

const meta = {
  title: 'Components/UnitSearch',
  component: UnitSearch,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof UnitSearch>;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    unitKeywords,
    prefxKeywords: unitPrefixKeywords
  },
};

export default meta;