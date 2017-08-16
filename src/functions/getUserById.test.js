/* global describe, expect, it */
import DATA from '../DATA'
import getUserById from './getUserById'

describe('getUserById', () => {
  it('is a function', () => expect(typeof getUserById).toBe('function'))

  it('returns null with no id', () => expect(getUserById(DATA, null)).toBe(null))

  it('returns null with no data', () => expect(getUserById(null, 1)).toBe(null))

  it('returns null with undefined users', () => expect(getUserById({}, 1)).toBe(null))

  it('returns an object with a good id', () => expect(typeof getUserById(DATA, 1)).toBe('object'))

  it('return the correct result', () => {
    const result = getUserById(DATA, 1)
    expect(result.id).toBe(1)
    expect(result.name).toBe('Jane')
    expect(result.accountActive).toBe(true)
  })
})
