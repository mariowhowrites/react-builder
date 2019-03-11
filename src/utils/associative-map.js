export default function associativeMap(obj, func) {
  return Object.entries(obj)
    .flatMap(func)
    .reduce(convertToObject, {})
}

function convertToObject(oldField, field) {
  if (!field || !oldField) {
    return
  }

  const fieldName = Object.keys(field)[0]

  oldField[fieldName] = field[fieldName]

  return oldField
}
