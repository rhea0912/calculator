//Variables - check (nilalamanan ng value)
//Assignment - check
//Operators - check
//Function - check
//If else - check
//If else conditions > < <= >= ==
//Array
//Object
//HTML manipulation

/**
 * Variables - G
 * Operations - G
 * If else
    * Conditional Operators
    * Logical Operators
 * String functions
 * Array
 * For Loop
 * Objects
 * Creating a function
 * Scopes - Global and Local variables
 */

//Logical operator - ginagamit upang magcombine ng dalawa or multiple na condition sa isang if statement.
//&& - and
//|| - or


/**
 * true && true = true
 * true && false = false
 * false && true = false
 * false && false = false
 * 
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 */


//-----String Functions = Built in Function ni javascript for strings

/**
 * String Functions na aaralin naten
 * - length
 * - toUpperCase()
 * - toLowerCase()
 * - substring()
 * - replace()
 * - chatAt()
 * - slice()
 * - match()  
 * - indexOf()
 * - charCodeAt()
 * - repat()   
 */



/**
 * Array functions
 * - push //add array 
 * - pop //remove the last element and return the remove element
 * - splice // delete the index number and count of deleted
 * - join // from array to string separated by input seperator
 * - concat
 */


/**
 * Arrays iteration functions
 * - Function na ginagamit for visiting each elements.
 * 
 * - forEach - Ginagamit for to access or iterate to every element and not returning value
 * - map - Kagaya ng forEach pero nagrereturn sya ng value which is array
 * - filter - Nagiiterate rin sya and nireremove niya element base sa logic naten. may return value na array
 * - find - Ganagamit upang makapag find ng element sa sa array
 */

//forEach
// let arr = 'Hello world way';

// arr = arr.split('');

// let r = arr.forEach(function(element, i){
//     console.log(element, i);
// });

// console.log(r);


//map
// let arr = [2, 1, 4, 8];

// let r = arr.map(function(element, i){
//     if(element >= 4)
//     {
//         return element + 10 + i;
//     }
//     else
//     {
//         return element;
//     }
// });

// console.log(r);


//filter
// let arr =  ['Hello', 'World', 'nice', 'why'];
// //output nya dapat ay ['nice', 'why']
 
// arr = arr.filter(function(element){
//     return element.length > 4;
// }
// );
//['Hello', 'World']
// console.log(arr);

//find

// let arr =  ['Hello', 'World', 'nice', 'why'];

// arr = arr.find(function(item){
//     return item.length == 5;
// });
// console.log(arr);

// let arr = [20, 15, 12, 8];

// //find the first element that is less than 12

// arr = arr.find(function(element){
//     return element < 12 ;
// });

// console.log(arr);


/**
 * Exercise 1: ------------------------------------
 * Get the average of all element
 * 
 * Input: [1, 4, 2, 8]
 * 
 * Output: (1 + 4 + 2 + 😎 / 4 = 3.75
 * 
 * 
 * Exercise 2: ------------------------------------
 * Delete elements that is less than 7
 * 
 * Input: [2, 12, 5, 8, 7]
 * 
 * Output: [12, 8, 7]
 * 
 * 
 * Exercise 3: ------------------------------------
 * 
 * Find index position the element from array base on Input2
 * 
 * if the element is less than the Input2, get that element
 * 
 * Input: [10, 3, 2, 5, 8]
 * Input2: 5
 * 
 * Output: 3
 * 
 * 
 * Exercise 4: ------------------------------------
 * Add index to each string element
 * 
 * Input: ['hello', 'world', 'nice', 'home']
 * 
 * Output: ['hello - 0', 'world - 1', 'nice - 2', 'nice - 3']
 * 
 * 
 * Exercise 5: ------------------------------------
 * 
 * Get the lowest value
 * 
 * Input: '12 5, 2, 7'
 * 
 * Output: 2
 */



/**
 * Object
 * - What is Object. 
 * - Object ay nigagamit para storan ng multiple na variables and functions.
 * - Ang tawag varaible sa loob ng object ay property.
 * - Ang tawag naman sa function sa loob ng object ay method
 * - Sa loob ng object ay key-value pair separated with comma.
 */

// let person = {
//    name: 'Misis kong love na love ko sobra',
//    age: 10,
//    sayHello: function(){
//       return 'HELLO WORLD!';
//    },
//    things: 'phone shoes shirt',
// };


// console.log(person.age);
// console.log(person.sayHello());

// let result = person.things.split(' ').map(function(element, i){
//    return element.length + "-" + i;
// });

// console.log(result);

// const brand = {
//    brandName: 'Vivo',
//    price: 16000,
//    specs: { 
//       ram:"4gb",
//       rom: "8gb",
//       specstypes: ['ram', 'rom'] //Ang object ay naggogroup ng mga properties. I could be array, numbers, strings, bollean, function, objects
//    },
//    isSold: false,
//    users: ['Baiby', 'Zilzo'],
//    buy: function(){
//       console.log('Sold!');
//       this.isSold = true;
//    },
//    displayInformation: function(displayPrice){
//       console.log('Name: ', this.brandName);

//       if(displayPrice)
//       {
//          console.log('Price: ', this.price);
//       }
//    }
// };

// console.log(brand);

// brand.buy();

// console.log(brand);



// const calculator = {
//    name: 'CASIO',
//    version: 'v2019',
//    displayInformation: function()
//    {
//       console.log('Name: ', this.name);
//       console.log('Version: ', this.version);
//    },
//    add: function(input1, input2)
//    {
//       return input1 + input2;
//    },
//    subtract: function(input1, input2)
//    {
//       return input1 - input2;
//    },
//    division: function(input1, input2){
//       return input1 / input2;
//    },
//    times: function(input1, input2){
//       return input1 * input2;
//    },
// };

// calculator.displayInformation();
// const addREsult = calculator.add(100, 200);

// console.log(calculator.division(addREsult, 2));


/**
 * Registration System
 * - Ability to add new user
 * - Ability to remove user
 * - Ability to update user
 * - Ability to display user
 * - Ability to get user
 * - Ability to delete all users
 * - Ability to count users
 */

// const registrationSystem = {
//    users: [],
//    addUser: function(username){
//       this.users.push(username);
//    },
//    removeUser: function(username){
//       this.users = this.users.filter(function(element){
//          return element != username;
//       });
//    },
//    updateUSer: function(username, updatedName){
//       this.users = this.users.map(function(element){
//          if(username == element){
//             return updatedName;
//          }
//          else{
//             return element;
//          }
//       });
//    },
//    displayUser: function(){
//       this.users.forEach(function(element){
//          console.log(element);
//       });
//    },
//    getUser: function(username){
//       this.users = this.users.filter(function(element){
//          return username == element;
//       });
//    },
//    deleteAll: function(){
//       this.users = [];
//    },
//    countUser: function(){
//       return this.users.length;
//    },
// };

// registrationSystem.addUser('Rhea');
// registrationSystem.addUser('Lioncio');
// console.log(registrationSystem.users);

// registrationSystem.updateUSer('Rhea', 'Mahal ko');
// registrationSystem.removeUser('Rhea');
// console.log(registrationSystem.users);

// registrationSystem.displayUser();


// registrationSystem.getUser('Rhea');
// console.log(registrationSystem.users);
// registrationSystem.addUser('Lioncio');
// console.log(registrationSystem.users);
// registrationSystem.deleteAll();
// console.log(registrationSystem.users);


// registrationSystem.addUser('Rhea');
// registrationSystem.addUser('Lioncio');
// console.log(registrationSystem.users);

// console.log(registrationSystem.countUser());
// console.log(registrationSystem.users);





/**
 * Registration System V2
 * 
 * Same with the old one but has user information like 
 * name, age, displayInfo function
 * 
 * {
 *    name: 'Rhea Misis ko love na love ko sobra',
 *    age: 23,
 *    displayInfo: function(){} //Ginagamit to print the name and age of the user
 * }
 */


// const obj = {
//    users: [{name: 'Rhea', age: 23}],
//    addUser: function(_name, _age){
//      this.users.push({
//       name: _name,
//       age: _age,
//      })
//    },
//    getUser: function(_name){
//       const get = this.users.find(function(element){
//          return element.name == _name;
//       }); 
//       return get;     
//    },
//    deleteUser: function(_name){
//       this.users = this.users.filter(function(element){
//          return element.name != _name;
//       });
//    },
//    displayInfo: function(_name){
//       const user = this.getUser(_name);
//       console.log('Information: ' + user.name + '-' + user.age);
//    },
//    deleteAll: function(){
//       this.users = [];
//    }
// }

// obj.addUser('Mahal kong Lioncio', 23);
// obj.addUser('Aking Lioncio', 23);
// console.log(obj.users);
// console.log (obj.getUser('Aking Lioncio'));
// obj.deleteUser('Aking Lioncio');
// console.log(obj.users);
// obj.displayInfo('Rhea');
// obj.deleteAll();
// console.log(obj.users);

const library = {
   name: 'Our Library',
   books: [{bookName: 'java', page: 100}, {bookName:'c++', page: 250}, {bookName:'c#', page: 50}],
   countPages: function(){
      let total = 0;
      this.books.forEach(function(element){
         total += element.page;
      });
      return total;
   },
   getBook: function(_bookName){
      const book = this.books.find(function(element){
         return element.bookName == _bookName;
      });
      return book;
   },
   addBook: function(book, page){
      this.books.push({
         bookName: book,
         page: page,
      })
   },
   booksCount: function(){
      return this.books.length
   }
}

console.log(library.getBook('c++'));
library.countPages();
console.log(library.booksCount());