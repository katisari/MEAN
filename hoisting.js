// #1
var hello;
console.log(hello); //print undefined
hello = 'world';

// #2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);     //prints magnet
}

// #3
var brendan = 'super cool'
function print(){
	brendan = 'only okay';
	console.log(brendan); //doesn't print anything because function not called
}
console.log(brendan); //'super cool'


// #4
var food = 'chicken';
console.log(food); //chicken
function eat(){
	var food;
	food = "half-chicken"	
	console.log(food)	//half-chicken
	food = "gone"
}
eat()


// #5
var mean;
mean();					//mean X function yet			
console.log(food);		//nothing, no variable food
mean = function() {
	var food;
	food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);		//nothing, no variable food


// #6
var genre;
function rewind() {
	var genre;
	genre = "rock";
	console.log(genre);	//rock
	genre = "r&b"
	console.log(genre)	//r&b
}
console.log(genre);		//nothing
genre = "disco";
rewind();	
console.log(genre);		//disco

// OUTPUT: undefined, rock, r&b, disco


// #7
function learn() {
	var dojo;
	dojo = "seattle";
	console.log(dojo);	//seattle
	dojo = "burbank";
	console.log(dojo);	//burbank
}
dojo = "san jose";
console.log(dojo);		//san jose
learn();
console.log(dojo);		//san jose

// OUTPUT: san jose, seattle, burbank, san jose


// #8
function makeDojo(name, students) {
	const dojo = {}
	dojo.name = name
	dojo.students = students;
	if(dojo.students > 50) {
		dojo.hiring = true;
	}
	else if (dojo.students <= 0) {
		dojo = "closed for now";	//once assigned, cannot reassign using const
	}
	return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkely", 0));

// OUTPUT: {name: "Chicago", students: 65, hiring: true}, error
