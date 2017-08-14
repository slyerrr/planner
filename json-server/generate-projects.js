// customers.js

var faker = require('faker')

function generateProjects () {
  var projects = []

  for (var id = 0; id < 50; id++) {

    projects.push({
      "id": id + 1,
      "name": faker.random.word(),
      "psp": faker.random.alphaNumeric(),
      "desc": faker.random.words(),
      "cost": faker.commerce.price(),
      "start": faker.date.past(),
      "end":  faker.date.future(),
      "owner": faker.random.arrayElement([
        'Jakub Karcz',
        'Michał Malucha',
        'Papilon'
      ]),
      "country_code": faker.address.countryCode()
    })
  }

  return { "projects": projects }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProjects


