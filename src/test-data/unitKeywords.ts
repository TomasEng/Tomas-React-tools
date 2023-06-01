import {UnitKeywords} from '../types';

export const unitKeywords: UnitKeywords = {
  length: {
    angstrom: ['ångström', 'angstrom', 'ångstrom', 'angström'],
    astronomicalUnit: ['astronomical unit', 'astronomisk enhet'],
    chain: ['chain'],
    fathom: ['fathom', 'favn'],
    fermi: ['fermi'],
    foot: ['foot', 'feet', 'fot'],
    furlong: ['furlong'],
    inch: ['inch', 'tomme'],
    lightYear: ['light year', 'lysår'],
    link: ['link', 'Gunter\'s link'],
    metre: ['metre', 'meter'],
    micron: ['micron', 'mikron', 'micrometer', 'mikrometer'],
    nauticalMile: ['nautical mile', 'nautisk mil'],
    parsec: ['parsec', 'parsecs'],
    rod: ['rod', 'perch', 'pole', 'lug', 'stang'],
    scandinavianMile: ['scandinavian mile', 'mil', 'skandinavisk mil', 'norsk mil'],
    statuteMile: ['statute mile'],
    yard: ['yard'],
  },
  mass: {
    carat: ['carat', 'karat'],
    gram: ['gram', 'gramme'],
    kilogram: ['kilogram', 'kilogramme'],
    ounce: ['ounce', 'unse'],
    pound: ['pound', 'pund'],
    tonne: ['tonne', 'tonn'],
  },
  time: {
    day: ['day', 'dag'],
    hour: ['hour', 'time'],
    minute: ['minute', 'minutt'],
    second: ['second', 'sekund'],
    week: ['week', 'uke'],
  },
  temperature: {
    celsius: ['celsius', 'degree celsius', 'grad celsius', 'celsiusgrad'],
    delisle: ['degree delisle', 'grad delisle', 'delislegrad'],
    fahrenheit: ['fahrenheit', 'degree fahrenheit', 'grad fahrenheit', 'fahrenheitgrad'],
    kelvin: ['kelvin', 'degree kelvin', 'grad kelvin', 'kelvinqrad'],
    newton: ['newton', 'degree newton', 'grad newton', 'newtongrad'],
    rankine: ['rankine', 'degree rankine', 'grad rankine', 'rankinegrad'],
    reaumur: ['reaumur', 'réaumur', 'degree réaumur', 'grad réaumur'],
    romer: ['rømer', 'romer', 'degree rømer', 'grad rømer', 'rømergrad'],
  },
  area: {
    acre: ['acre', 'acres'],
    are: ['are'],
    dekare: ['dekare', 'dekar', 'mål'],
    hectare: ['hectare', 'hektar'],
    squareFoot: ['square foot', 'square feet', 'kvadratfot'],
    squareInch: ['square inch', 'kvadrattomme'],
    squareMetre: ['square metre', 'square meter', 'kvadratmeter'],
    squareYard: ['square yard', 'kvardratyard'],
  },
  volume: {
    cubicFoot: ['cubic foot', 'cubic feet', 'kubikkfot'],
    cubicInch: ['cubic inch', 'cubic inches', 'kubikktomme'],
    cubicMetre: ['cubic metre', 'cubic meter', 'kuibkkmeter'],
    cubicYard: ['cubic yard', 'kubikkyard'],
    imperialGallon: ['imperial gallon', 'engelsk gallon'],
    litre: ['litre', 'liter'],
    usGallon: ['US gallon', 'amerikansk gallon'],
  },
  velocity: {
    footPerSecond: ['foot per second', 'feet per second', 'fot per sekund'],
    kilometrePerHour: ['kilometre per hour', 'kilometres per hour', 'kilometer per time', 'kilometer i timen'],
    knot: ['knot', 'knop'],
    metrePerHour: ['metre per hour', 'meter per hour', 'meter per time', 'meter i timen'],
    metrePerSecond: ['metre per second', 'meter per second', 'meter per sekund', 'meter i sekundet'],
    milePerHour: ['mile per hour', 'miles per time', 'miles i timen'],
  },
  acceleration: {
    footPerSecondSquared: ['foot per second squared', 'feet per second squared', 'fot per sekund per sekund'],
    gal: ['galileo'],
    metrePerSecondSquared: ['metre per second squared', 'meter per second squared', 'meter per sekund per sekund'],
    standardGravity: ['standard gravity', 'standardgravitasjon'],
  },
  charge: {
    coulomb: ['coulomb'],
    elementaryCharge: ['elementary charge', 'elementærladning'],
    statcoulomb: ['statcoulomb', 'statisk coulomb'],
  },
  current: {
    ampere: ['ampere'],
  },
  energy: {
    calorie: ['calorie', 'kalori'],
    electronVolt: ['electron volt', 'elektronvolt'],
    erg: ['erg'],
    joule: ['joule'],
    kilocalorie: ['kilocalorie', 'kilokalori'],
    kilowattHour: ['kilowatt hour', 'kilowattime'],
    wattHour: ['watt hour', 'wattime'],
    wattSecond: ['watt second', 'wattsekund'],
  },
  force: {
    dyne: ['dyne', 'dyn'],
    kilonewton: ['kilonewton'],
    kilopond: ['kilopond', 'kilogram-force', 'kilogramkraft'],
    newton: ['newton'],
    pond: ['pond', 'gram-force', 'gramkraft'],
    pound: ['pound', 'pund'],
    poundal: ['poundal'],
  },
  frequency: {
    hertz: ['hertz'],
  },
  power: {
    horsepower: ['horsepower', 'hestekraft', 'hestekrefter'],
    watt: ['watt'],
  },
  pressure: {
    bar: ['bar'],
    inchOfMercury: ['inches of mercury', 'tommer kvikksølv'],
    kilopondPerSquareCentimetre: ['kilopond per square centimetre', 'kilogramkraft per kvadratcentimeter'],
    millibar: ['millibar'],
    pascal: ['pascal'],
    poundPerSquareInch: ['pound per square inch', 'pund per kvadrattomme'],
    standardAtmosphere: ['standard atmosphere', 'standardatmosfære'],
    torr: ['torr'],
  },
  voltage: {
    volt: ['volt'],
  },
  capacitance: {
    farad: ['farad', 'faraday'],
  },
  resistance: {
    ohm: ['ohm'],
  },
  inductance: {
    henry: ['henry'],
  },
  magneticFlux: {
    maxwell: ['maxwell'],
    weber: ['weber'],
  },
  magneticFluxDensity: {
    gauss: ['gauss'],
    tesla: ['tesla'],
  },
  luminousIntensity: {
    candela: ['candela'],
    candlepower: ['candlepower', 'normallys'],
  },
  conductance: {
    siemens: ['siemens'],
  },
  density: {
    kilogramPerCubicMetre: ['kilograms per cubic metre', 'kilograms per cubic meter', 'kilogram per kubikkmeter'],
    gramPerCubicCentimetre: ['gram per cubic centimetre', 'grams per cubic centimetre', 'gram per kubikkcentimeter'],
  },
  conductivity: {
    siemensPerMetre: ['siemens per metre', 'siemens per meter'],
  },
  resistivity: {
    ohmMetre: ['ohm metre', 'ohm meter', 'ohmmeter'],
  },
  amountOfSubstance: {
    mole: ['mole', 'mol'],
  }
};