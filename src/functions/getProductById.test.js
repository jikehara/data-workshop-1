/* global describe, expect, it */
import DATA from '../DATA'
import getProductById from './getProductById'

describe('getProductById', () => {
  it('is a function', () => expect(typeof getProductById).toBe('function'))

  it('returns null with no id', () => expect(getProductById(DATA, null)).toBe(null))

  it('returns null with no data', () => expect(getProductById(null, 1)).toBe(null))

  it('returns null with undefined products', () => expect(getProductById({}, 1)).toBe(null))

  it('returns an object when passed a good id', () => expect(typeof getProductById(DATA, 1)).toBe('object'))

  it('return the correct result', () => {
    const result = getProductById(DATA, 1)
    expect(result.id).toBe(1)
    expect(result.name).toBe('Amazing Book')
    expect(result.price).toBe(30)
  })
})
