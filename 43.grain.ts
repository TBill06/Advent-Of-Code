// v1 Base Version
export const square = (square: number): bigint => {
  if (square <=0 || square > 64) {
    throw new Error("Number cannot be more than 64 or less than 1")
  }
    let i = 0n
    let wheat = 0n
    while (i < square) {
        wheat = 2n**i
        i += 1n
    }
    return wheat
}

export const total = (): bigint => {
  let i: bigint = 0n
  let sum: bigint = 0n
  while (i < 64n) {
    sum += 2n**i
    i += 1n
  }
  return sum
}

// v2 O(1) no need of loops baby
// Grade 11 Math to rescue
export const squarev2 = (n: number): bigint => {
  if (n <= 0 || n > 64) {
    throw new Error('Square must be between 1 and 64')
  }
  return 2n ** BigInt(n - 1)
}

export const totalv2 = (): bigint => {
  return (2n ** 64n) - 1n
}
