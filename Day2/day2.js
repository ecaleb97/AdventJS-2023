function manufacture(gifts, materials) {
  const result = gifts.map(gift => {
    if (gift.split('').every(letter => materials.includes(letter))) {
      return gift
    }
  })

  return result.filter(r => r !== undefined)
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const result = manufacture(gifts, materials)
console.log(result)