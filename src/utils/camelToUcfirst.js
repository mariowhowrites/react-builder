export default function camelToUcfirst(string) {
  return string
    .split(/(?=[A-Z])/) // splits string on capital letters (StackOverflow ftw)
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}
