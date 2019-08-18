var jsonQuery = require('json-query');

var data1 = {
    "grouped_people": {
      "friends": [
        {name: 'Steve', country: 'NZ'},
        {name: 'Jane', country: 'US'},
        {name: 'Mike', country: 'AU'},
        {name: 'Mary', country: 'NZ'},
      ],
      'enemies': [
        {name: 'Evil Steve', country: 'AU'},
        {name: 'Betty', country: 'NZ'}
      ]
    }
  }
   
  var result = jsonQuery('grouped_people.friends[0]', {data: data1}).value

  console.log(data1.grouped_people.friends)