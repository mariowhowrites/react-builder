import _ from "lodash"

export function associativeMap(object, fn) {
  return _(object)
    .toPairs()
    .map(fn)
    .fromPairs()
    .value()
}

export function camelToUcfirst(string) {
  return string
    .split(/(?=[A-Z])/) // splits string on capital letters (StackOverflow ftw)
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}
