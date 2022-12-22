var year = 2022

console.time('time1')
console.log(year)
console.warn("This is a warning!")
console.error("This is an error!")
console.info("This is a information")

console.assert(year < 2020, "Sorry, you've seen the pandemic ")

console.timeEnd('time1')