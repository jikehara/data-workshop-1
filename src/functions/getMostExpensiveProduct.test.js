/* global describe, expect, it */
import DATA from '../DATA'
import getMostExpensiveProduct from './getMostExpensiveProduct'

describe('getMostExpensiveProduct', () => {
  it('is a function', () => expect(typeof getMostExpensiveProduct).toBe('function'))

  it('returns null with no data', () => expect(getMostExpensiveProduct(null)).toBe(null))

  it('returns null with undefined products', () => expect(getMostExpensiveProduct({})).toBe(null))

  it('returns an object', () => expect(typeof getMostExpensiveProduct(DATA)).toBe('object'))

  it('return the correct result', () => {
    const result = getMostExpensiveProduct(DATA)
    expect(result.id).toBe(5)
    expect(result.name).toBe('Man Wipes')
    expect(result.price).toBe(75)
  })
})
