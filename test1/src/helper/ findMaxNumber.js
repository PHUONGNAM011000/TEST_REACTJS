import _isArray from 'lodash/isArray';
import _size from 'lodash/size';

export function findMaxNumber(array) {
  if (!_isArray(array) || _size(array) === 0) return 0;

  const stringConcatFromArr = `${array.join('')}`;
  const arrSplitFromStr = stringConcatFromArr.split('');
  const sortArr = arrSplitFromStr.sort((a, b) => b - a);
  const maxNumber = sortArr.join('');

  return maxNumber;
}
