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

export const Default: Story = {
  args: {
    selected: 'nb',
  },
};

export const SelectedLanguages: Story = {
  args: {
    languages: ['nb', 'nn', 'se', 'pl', 'eo'],
    selected: 'eo'
  },
};

export const WithCountry: Story = {
  args: {
    languages: ['fr-FR', 'fr-CA', 'en-CA', 'pt-PT', 'pt-BR'],
    selected: 'fr-CA'
  }
}