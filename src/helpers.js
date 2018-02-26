import { Map, OrderedMap } from 'immutable';

export function arrToMap(array, DataRecord = Map) {
  return array.reduce((result, item) => (
    result.set(item.id, new DataRecord(item))
  ), new OrderedMap({}));
}

export function mapToArr(map) {
  return map.valueSeq().toArray();
}