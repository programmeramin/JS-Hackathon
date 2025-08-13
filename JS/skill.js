let x = 0 && "lws";

var Storm = function () {};
Storm.prototype.precip = 'rain';

var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';

var bob = new WinterStorm();
// console.log(bob.precip);


// var-এর কারণে সব setTimeout একই i (শেষ মান) ধরে ফেলে
for (var i = 1; i <= 3; i++) {
  // setTimeout(() => console.log("var:", i), 0);
}
// আউটপুট: var: 4 (তিনবার)

// let ব্লক-স্কোপড হওয়ায় প্রত্যেক ইটারেশনে i আলাদা কপি
for (let j = 1; j <= 3; j++) {
  // setTimeout(() => console.log("let:", j), 0);
}
// আউটপুট: let: 1, let: 2, let: 3

for (let i = 1; i <= 3; i++) {
  // setTimeout(() => console.log(i), 0);
}


// console.log(val);
var val = 5;

(() => {
  // console.log(num);
  let num = 10;
})();


// console.log(typeof null, Array.isArray(null));
// console.log([] === []);
// console.log(Object.is(NaN, NaN), NaN === NaN);


// console.log([] == false);
// console.log([1] == [1]);


// let a = { name: "JS" };
// let b = a;
// b.name = "Node";
// console.log(a.name);


// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));


let xx = 10n;
let yy = 20n;
// console.log(xx + yy);

const arr1 = [{ id: 1 }, { id: 2 }];

    arr1[1] = {id : 4}
 
console.log(arr1);


// তোমার সমাধান এখানে
