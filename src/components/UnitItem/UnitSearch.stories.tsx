import type {Meta, StoryObj} from '@storybook/react';
import {UnitItem} from './UnitItem';

const meta = {
  title: 'Components/UnitItem',
  component: UnitItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UnitItem>;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    dimension: 'Length',
    name: 'Metre',
    symbol: 'm',
  },
};

export default meta;