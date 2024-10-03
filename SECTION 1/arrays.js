const arr =['hello',345,true];

console.log(typeof arr);
console.log(Array.isArray(arr) );


const movies =['Stree2','Salaar','Pathaan','John Wick','Spiderman'];

console.log(movies.length); //also works for string

//indexing

console.log(movies[2]); //also

console.log(movies.indexOf('Spiderman')); //also

console.log( movies[-2]);
console.log(movies.at(-2) ); //also

movies[2] = 'James Bond';
console.log(movies);



//slicing

console.log(movies.slice(1,4)); //also 
console.log(movies.slice(2));
console.log(movies.slice(-3));



//adding and removing emements


movies.push('Batman'); //adds to the end
movies.unshift('Superman'); //add to the beginning

console.log(movies);


movies.pop(); //removes from the end
movies.shift(); //removes from the  beginning

console.log(movies);












