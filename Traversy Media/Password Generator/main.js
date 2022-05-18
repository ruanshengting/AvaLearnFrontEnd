function getRandomSymbol() {
  const symbol = '!#$%()+,.&~'
  console.log('symbol.length:', symbol.length)
  return symbol[Math.floor(Math.random() * symbol.length)]
}
console.log('...', getRandomSymbol())
//https://net-comber.com/charset.html