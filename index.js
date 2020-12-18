var PersonLogic = require('./domain/person/person.logic')
var person1 = new PersonLogic('Tata', '6403052010930001', '1993-10-20');

if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
  console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
} else {
  console.log(`Tanggal lahir ${person1.name} bermasalah`)
}
console.log(`Saat ini berumur ${person1.getAge()}`)


var PersonAge = require('./domain/personAge/personAge.logic')
var age1 = new PersonAge('Tata', '6403052010930001', '1993-10-20');
console.log(`Merupakan seorang ${age1.personByAge()}`)