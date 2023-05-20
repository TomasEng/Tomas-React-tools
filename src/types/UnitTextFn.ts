import {Dimension, Unit} from 'enheter';

export type UnitTextFn<D extends Dimension = Dimension> = (unit: Unit<D>) => string;