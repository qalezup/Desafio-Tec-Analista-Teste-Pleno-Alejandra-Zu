// Utility helpers for Cypress tests

export function randomQaleName() {
  const num = Math.floor(Math.random() * 90000) + 10000
  return `qale${num}`
}


export function randomAlphaString(length = 6) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  let s = ''
  for (let i = 0; i < length; i++) {
    s += letters.charAt(Math.floor(Math.random() * letters.length))
  }
  return s
}

export function randomLastName(length = 6) {
  const raw = randomAlphaString(length)
  return raw.charAt(0).toUpperCase() + raw.slice(1)
}

export function buildFullName(first, last) {
  return `${first}${last}`
}

export function buildEmail(first, last) {
  return `${(first + last).toLowerCase()}@gmail.com`
}
