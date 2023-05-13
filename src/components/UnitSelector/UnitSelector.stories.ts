import type {Meta, StoryObj} from '@storybook/react';
import {UnitSelector} from './UnitSelector';
import {Unit, UnitName} from 'enheter';

const meta = {
  title: 'Components/UnitSelector',
  component: UnitSelector,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof UnitSelector>;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    dimension: 'length',
    textFn: (unit: Unit) => {
      //@formatter:off
      switch (unit.key as UnitName<'length'>) {
        case 'metre': return 'Metres';
        case 'foot': return 'Feet';
        case 'inch': return 'Inches';
        case 'yard': return 'Yards';
        case 'nauticalMile': return 'Nautical miles';
        case 'statuteMile': return 'Statute miles';
        case 'astronomicalUnit': return 'Astronomical units';
        case 'lightYear': return 'Light years';
        case 'parsec': return 'Parsecs';
        case 'angstrom': return 'Ångstrøms';
        case 'fermi': return 'Fermis';
        case 'micron': return 'Microns';
        case 'chain': return 'Chains';
        case 'fathom': return 'Fathoms';
        case 'furlong': return 'Furlongs';
        case 'link': return 'Links';
        case 'rod': return 'Rods';
        case 'scandinavianMile': return 'Scandinavian miles';
        default: return unit.key || '';
      }
      //@formatter:on
    },
  },
};

export default meta;