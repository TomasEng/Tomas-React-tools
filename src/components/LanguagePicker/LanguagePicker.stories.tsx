import type {Meta, StoryObj} from '@storybook/react';
import {LanguagePicker} from './LanguagePicker';

const meta = {
  title: 'Components/LanguagePicker',
  component: LanguagePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LanguagePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};