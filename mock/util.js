const Mock = require('mockjs');
import { productList } from './const';

export function getProduct(index) {
  const res =
    index !== undefined
      ? productList[index]
      : productList[Mock.Random.integer(0, productList.length - 1)];
  return res;
}
