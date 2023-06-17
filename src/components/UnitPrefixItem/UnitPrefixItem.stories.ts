import type {Meta, StoryObj} from '@storybook/react';
import {UnitPrefixItem} from './UnitPrefixItem';

const meta = {
  title: 'Components/UnitPrefixItem',
  component: UnitPrefixItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UnitPrefixItem>;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    prefix: 'kilo'
  },
};

export default meta;