import type {Meta, StoryObj} from '@storybook/react';
import {Flag} from './Flag';
import {countryCodesWithNames} from '../../data/countryCodesWithNames';

const meta = {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    country: {
      options: Object.keys(countryCodesWithNames),
      control: {
        type: 'select',
        labels: Object.fromEntries(Object.entries(countryCodesWithNames).map(([code, name]) => [code, `${code} (${name})`]))
      }
    }
  }
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    country: 'NO',
    squared: false,
  },
};