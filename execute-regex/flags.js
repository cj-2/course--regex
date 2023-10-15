// g - global, search all matches
// i - insensitive, ignore case, "a" and "A" have the same match

const logMatch = (text, reg) =>  console.log(`Regex result: ${reg.toString()} \n`, text.match(reg), '\n' )

const text = 'Carlos assinou o artigo sobre o que é JavaScript';

logMatch(text, /C|Ja/)
logMatch(text, /c|Ja/i)
logMatch(text, /Ja|c/gi)

