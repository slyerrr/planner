// customers.js

var faker = require('faker')

function generateProjects () {
  const size = 100;
  var projects = [];

  for (var id = 0; id < size; id++) {

    projects.push({
      "id": id + 1,
      "name": faker.random.word(),
      "psp": faker.random.alphaNumeric(),
      "desc": faker.random.words(),
      "cost": faker.commerce.price(),
      "start": faker.date.past(),
      "end":  faker.date.future(),
      "status" : faker.random.arrayElement([
        'open',
        'completed',
        'canceled'
      ]),
      "owners": faker.random.arrayElement([
        'Jakub Nowak',
        'Jan Kowalski',
        'Papilon'
      ]),
      "tags": faker.random.arrayElement([
        'Energy',
        'IT',
        'Nuclear'
      ]),
      "country_code": faker.address.countryCode()
    })
  }


  return { "projects": projects }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProjects;


