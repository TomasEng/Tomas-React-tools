import type {Meta, StoryObj} from '@storybook/react';
import {Flag} from './Flag';
import {flagCodesWithNames} from '../../data/flagCodesWithNames';

const meta = {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    code: {
      options: Object.keys(flagCodesWithNames),
      control: {
        type: 'select',
        labels: Object.fromEntries(Object.entries(flagCodesWithNames).map(([code, name]) => [code, `${code} (${name})`])),
      }
    }
  }
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    code: 'no',
    squared: false,
  },
};