/* global describe, expect, it */
import DATA from '../DATA'
import getProductById from './getProductById'

describe('getProductById', () => {
  it('is a function', () => expect(typeof getProductById).toBe('function'))

  it('returns null with no id', () => expect(getProductById(DATA, null)).toBe(null))

  it('returns null with no data', () => expect(getProductById(null, 1)).toBe(null))

  it('returns an object with a good id', () => expect(typeof getProductById(DATA, 1)).toBe('object'))

  it('return ')
})
