// JS Objects
// Challenge 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printAll(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
}


// Challenge 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


 function printAll(dictionary) {
    for (var key in dictionary) {
        console.log(key.toUpperCase())
        for (var i = 0; i < dictionary[key].length; ++i) {
            console.log(i+1 + " - " +  dictionary[key][i].last_name.toUpperCase() + ", " + dictionary[key][i].first_name.toUpperCase())
        }
    }
 }
