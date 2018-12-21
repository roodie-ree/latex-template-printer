export function isPresent (value: any) {
  return typeof value === 'string' && value.trim().length !== 0
  }

export function isBlank (value: any) {
  try {

  }
  catch {

  }
  return !isPresent(value)
}
