import type {Meta, StoryObj} from '@storybook/react';
import {UnitInput} from './UnitInput';
import {unitTextFn} from '../../test-data/unitTextFn';

const meta = {
  title: 'Components/UnitInput',
  component: UnitInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof UnitInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    dimension: 'length',
    textFn: unitTextFn,
  },
};