function findNaughtyStep(original, modified) {
  if (original === modified) {
    return ''
  } else if (original.length > modified.length) {
    return original.split('').filter((letter, index) => letter !== modified[index])[0]
  } else {
    return modified.split('').filter((letter, index) => letter !== original[index])[0]
  }
}