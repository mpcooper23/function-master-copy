//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { isObject } = require("lodash");

function objectValues(object) {
    // code
    let objArr = []
    for(let key in object){
    objArr.push(object[key])}
    return objArr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let objStr = '';
for(let key in object){
objStr += key + ' '
}
return objStr.trim()
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let valStr = '';
for (let key in object){
    if(typeof object[key] === 'string'){
    valStr += object[key] + ' ';
}
}
return valStr.trim()
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array'
    }
    if(typeof collection === 'object' && collection !== null){
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let allCaps = [];
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++){
        let capStr = words[i][0].toUpperCase() + words[i].slice(1);
        allCaps.push(capStr)
    }
    return allCaps.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object with a name property and return
 // 'Welcome <Name>'

function welcomeMessage(object) {
    return 'Welcome ' + object.name + '!'
    }
//}
//}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object with a name and a species and return '<Name> is
 // a <Species>`

function profileInfo(object) {
    return `${object.name} is a ${object.species}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//should take an object, if this object has a noises array return them
 //as a string separated by a space; if there are no noises, return 
  //"there are no noises"

function maybeNoises(object) {
if (object.noises && object.noise.length > 0){
    return object.noises.join(" ")
}else {
    return 'there are no noises'
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a string of words and a word and return TRUE if <word>
 //is in <string> of words; else, return FALSE

function hasWord(string, word) {
    let words = string.split(' ')
    for (let i = 0; i < words.length; i++){
        if (words[i] === word){
            return true
        }else {
            return false
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an object and add the name to the object's friends 
 //array, and then return the object. 

function addFriend (name, object) {
    if (Array.isArray(object.friends)){
        object.friends.push(name)
    }
return object 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an object and add the name to the object's friends 
 //array, and then return the object. 

 function isFriend (name, object) {
    if(Array.isArray(object.friends)){
    for (let i = 0; i < object.friends.length; i++){
if(object.friends[i] === name){
    return true
}
    
        }
    }
    return false;
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an array (i.e. a list of people), and return a list
 //of all the names that <name> is not friends with.

function nonFriends(name, array) {
    let notFriends = [];
for(let i = 0; i < array.length; i++){
    if (array[i].name !== name && !array[i].friends.includes(name)){
        notFriends.push(array[i].name)
    }
}
return notFriends
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object, a key and a value. Should update the property 
 // <key> on <object> with new <value>

function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object and an array of strings. Should removed any 
 //properties on <object> that are listed in <array>

function removeProperties(object, array) {
for (let key in object){
    if(array.includes(key)){
delete object[key]
    }
}
return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an array and return an array with all of the duplicates removed. 

function dedup(array) {
array.map()
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}