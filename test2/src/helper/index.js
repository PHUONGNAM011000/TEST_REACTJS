import _isArray from 'lodash/isArray';
import _size from 'lodash/size';
import _forEach from 'lodash/forEach';

export function frequencyValueInArray(array, value) {
  if (!_isArray(array) || _size(array) === 0) return 0;

  let count = 0;

  _forEach(array, (item) => {
    if (item === value) count++;
  });

  return count;
}
