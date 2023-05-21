import {Dimension, DimensionName, findDimensionName, Unit, UnitName} from 'enheter';
import {capitalize} from '../utils/stringUtils';

const unitTexts: {
  [dimensionName in DimensionName]: {
    [unitName in UnitName<dimensionName>]: string[];
  }
} = {
  length: {
    angstrom: ['ångström', 'ångströms'],
    astronomicalUnit: ['astronomical unit', 'astronomical units'],
    chain: ['chain', 'chains'],
    fathom: ['fathom', 'fathoms'],
    fermi: ['fermi', 'fermis'],
    foot: ['foot', 'feet'],
    furlong: ['furlong', 'furlongs'],
    inch: ['inch', 'inches'],
    lightYear: ['light year', 'light years'],
    link: ['link', 'links'],
    metre: ['metre', 'metres'],
    micron: ['micron', 'microns'],
    nauticalMile: ['nautical mile', 'nautical miles'],
    parsec: ['parsec', 'parsecs'],
    rod: ['rod', 'rods'],
    scandinavianMile: ['scandinavian mile', 'scandinavian miles'],
    statuteMile: ['statute mile', 'statute miles'],
    yard: ['yard', 'yards'],
  },
  mass: {
    carat: ['carat', 'carats'],
    gram: ['gram', 'grams'],
    kilogram: ['kilogram', 'kilograms'],
    ounce: ['ounce', 'ounces'],
    pound: ['pound', 'pounds'],
    tonne: ['tonne', 'tonnes'],
  },
  time: {
    day: ['day', 'days'],
    hour: ['hour', 'hours'],
    minute: ['minute', 'minutes'],
    second: ['second', 'seconds'],
    week: ['week', 'weeks'],
  },
  temperature: {
    celsius: ['degree Celsius', 'degrees Celsius'],
    delisle: ['degree Delisle', 'degrees Delisle'],
    fahrenheit: ['degree Fahrenheit', 'degrees Fahrenheit'],
    kelvin: ['kelvin', 'kelvins'],
    newton: ['degree Newton', 'degrees Newton'],
    rankine: ['degree Rankine', 'degrees Rankine'],
    reaumur: ['degree Réaumur', 'degrees Réaumur'],
    romer: ['degree Rømer', 'degrees Rømer'],
  },
  area: {
    acre: ['acre', 'acres'],
    are: ['are', 'ares'],
    dekare: ['dekare', 'dekares'],
    hectare: ['hectare', 'hectares'],
    squareFoot: ['square foot', 'square feet'],
    squareInch: ['square inch', 'square inches'],
    squareMetre: ['square metre', 'square metres'],
    squareYard: ['square yard', 'square yards'],
  },
  volume: {
    cubicFoot: ['cubic foot', 'cubic feet'],
    cubicInch: ['cubic inch', 'cubic inches'],
    cubicMetre: ['cubic metre', 'cubic metres'],
    cubicYard: ['cubic yard', 'cubic yards'],
    imperialGallon: ['imperial gallon', 'imperial gallons'],
    litre: ['litre', 'litres'],
    usGallon: ['US gallon', 'US gallons'],
  },
  velocity: {
    footPerSecond: ['foot per second', 'feet per second'],
    kilometrePerHour: ['kilometre per hour', 'kilometres per hour'],
    knot: ['knot', 'knots'],
    metrePerHour: ['metre per hour', 'metres per hour'],
    metrePerSecond: ['metre per second', 'metres per second'],
    milePerHour: ['mile per hour', 'miles per hour'],
  },
  acceleration: {
    footPerSecondSquared: ['foot per second squared', 'feet per second squared'],
    gal: ['galileo', 'galileos'],
    metrePerSecondSquared: ['metre per second squared', 'metres per second squared'],
    standardGravity: ['standard gravity', 'standard gravities'],
  },
  charge: {
    coulomb: ['coulomb', 'coulombs'],
    elementaryCharge: ['elementary charge', 'elementary charges'],
    statcoulomb: ['statcoulomb', 'statcoulombs'],
  },
  current: {
    ampere: ['ampere', 'amperes'],
  },
  energy: {
    calorie: ['calorie', 'calories'],
    electronVolt: ['electron volt', 'electron volts'],
    erg: ['erg', 'ergs'],
    joule: ['joule', 'joules'],
    kilocalorie: ['kilocalorie', 'kilocalories'],
    kilowattHour: ['kilowatt hour', 'kilowatt hours'],
    wattHour: ['watt hour', 'watt hours'],
    wattSecond: ['watt second', 'watt seconds'],
  },
  force: {
    dyne: ['dyne', 'dynes'],
    kilonewton: ['kilonewton', 'kilonewtons'],
    kilopond: ['kilopond', 'kiloponds'],
    newton: ['newton', 'newtons'],
    pond: ['pond', 'ponds'],
    pound: ['pound', 'pounds'],
    poundal: ['poundal', 'poundals'],
  },
  frequency: {
    hertz: ['hertz', 'hertz'],
  },
  power: {
    horsepower: ['horsepower', 'horsepower'],
    watt: ['watt', 'watts'],
  },
  pressure: {
    bar: ['bar', 'bars'],
    inchOfMercury: ['inch of mercury', 'inches of mercury'],
    kilopondPerSquareCentimetre: ['kilopond per square centimetre', 'kiloponds per square centimetre'],
    millibar: ['millibar', 'millibars'],
    pascal: ['pascal', 'pascals'],
    poundPerSquareInch: ['pound per square inch', 'pounds per square inch'],
    standardAtmosphere: ['standard atmosphere', 'standard atmospheres'],
    torr: ['torr', 'torrs'],
  },
  voltage: {
    volt: ['volt', 'volts'],
  },
  capacitance: {
    farad: ['farad', 'farads'],
  },
  resistance: {
    ohm: ['ohm', 'ohms'],
  },
  inductance: {
    henry: ['henry', 'henrys'],
  },
  magneticFlux: {
    maxwell: ['maxwell', 'maxwells'],
    weber: ['weber', 'webers'],
  },
  magneticFluxDensity: {
    gauss: ['gauss', 'gauss'],
    tesla: ['tesla', 'teslas'],
  },
  luminousIntensity: {
    candela: ['candela', 'candelas'],
    candlepower: ['candlepower', 'candlepower'],
  },
  conductance: {
    siemens: ['siemens', 'siemens'],
  },
  density: {
    kilogramPerCubicMetre: ['kilogram per cubic metre', 'kilograms per cubic metre'],
    gramPerCubicCentimetre: ['gram per cubic centimetre', 'grams per cubic centimetre'],
  },
  conductivity: {
    siemensPerMetre: ['siemens per metre', 'siemens per metre'],
  },
  resistivity: {
    ohmMetre: ['ohm metre', 'ohm metre'],
  },
  amountOfSubstance: {
    mole: ['mole', 'moles'],
  }
};

export const unitTextFn = <D extends Dimension>(unit: Unit<D>): string => {
  const dimensionName = findDimensionName(unit.dimension);
  for (const [dimension, units] of Object.entries(unitTexts)) {
    if (dimension === dimensionName) {
      for (const [key, value] of Object.entries(units)) {
        if (unit.key === key) {
          return capitalize((unit.prefix || '') + value[0]);
        }
      }
    }
  }
  return '';
}