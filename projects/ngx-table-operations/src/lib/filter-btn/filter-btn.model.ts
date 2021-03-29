export class FilterOption {
  clause: string;
  key: string;
  dataType: string;
  conditon: string;
  value: string;
}

type dataType = 'number' | 'string' | 'boolean' | 'date';

export class KeyModel {
  key: string;
  dataType: dataType;
}

export class ConditionsInArray {
  number: string[] = NUMBER_CONDITIONS;
  string: string[] = STRING_CONDITIONS;
  boolean: string[] = BOOLEAN_CONDITIONS;
  date: string[] = DATE_CONDITIONS;
}

export const STRING_CONDITIONS: string[] = [
  'contains',
  'does not contain',
  'starts with',
  'ends with',
  'is',
  'is not',
  'is empty',
  'is not empty',
];

export const NUMBER_CONDITIONS: string[] = [
  '=',
  '!=',
  '>',
  '<',
  '>=',
  '<=',
  'is empty',
  'is not empty',
];

export const BOOLEAN_CONDITIONS: string[] = [
  'true',
  'false',
  'is empty',
  'is not empty',
];

export const DATE_CONDITIONS: string[] = [
  '=',
  '!=',
  '>',
  '<',
  '>=',
  '<=',
  'is empty',
  'is not empty',
];
