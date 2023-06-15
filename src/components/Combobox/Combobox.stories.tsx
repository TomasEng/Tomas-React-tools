import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Combobox, ComboboxItem} from './Combobox';
import {countries} from '../../test-data/countries';
import style from './Combobox.stories.module.css';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    placeholder: "Enter a country",
    searchResult: (input: string) => countries.filter((item: ComboboxItem) => item.value.toLowerCase().includes(input.toLowerCase())).map((item: ComboboxItem) => ({
      ...item,
      label: <span className={style.item}>{item.label}</span>
    })),
  },
};