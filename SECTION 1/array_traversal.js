const nums = [3, 7, 9, 2, 1, 6, 8];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}



console.log('-----------------');

for (let n of nums) {
    console.log(n);
}



console.log('-----------------');

nums.forEach((a, b) => { console.log(a, b); });
nums.forEach((a, b) => { console.log(a, b); });



// WAP to print all even numbers from the array
nums.forEach((a) => {
    if (a % 2 === 0) {
        console.log(a);
    }
});



// WAP to filter all odd numbers
const odds = [];
nums.forEach((a) => {
    if (a % 2 !== 0) {
        // console.log(a);
        odds.push(a);
    }
});
console.log(odds);



// WAP to store square of all nums in another array
const squares = [];
nums.forEach((a) => {
    // console.log(a**2);
    squares.push(a ** 2);
})
console.log(squares);



// Map Functions
const sqr = nums.map((n) => { return n ** 2 });
console.log(sqr);
const names = ['raju', 'ramu', 'pinki', 'kaliya', 'chutki'];
console.log('sdsd'.toUpperCase());
const upperNames = names.map((n) => { return n.toUpperCase() });
console.log(upperNames);
const prices = ['₹234.56', '₹345.67', '₹456.78', '₹567.89', '₹678.90'];
console.log( '₹56354'.slice(1) );
console.log( parseInt('372546') );



// WAP to convert all prices to integer
// [234, 345, 456, 567, 678]
const intPrices = prices.map( (p) => { return parseInt(p.slice(1)) } )
console.log(intPrices);
const prices2 = [2400, 340, 890, 430, 12000, 340];
// add 18% GST to all prices
// console.log( 3400 + 3400 * 0.18 );
// prices2.map( () => {} )
const fullnames = [ 'Ayush Joshi', 'Ankit Singh', 'Shreyansh Saxena', 'Hamid Khan' ];
// ['Ayush, 'Ankit', 'Shreyansh', 'Hamid']
console.log( 'raju rastogi'.split(' ')[0] );
const firstNames = fullnames.map( (n) => { return n.split(' ')[0] } );
console.log(firstNames);


