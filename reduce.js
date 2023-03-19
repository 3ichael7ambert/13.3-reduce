/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    // newArr=[];
    // return arr. 
    // return newArr;

    // let extractedValue = arr.map(function(item) {return item[prop]});
    // return extractedValue;

//     let newArr = [];
//   return arr.reduce(function(accum, nextVal) {
//     if(nextVal !== key)
//       newArr.push(accum[key] + ', '+ nextVal[key])
//       return newArr;
//   })


//   return arr.reduce(function(accum, item) {
//     if (!item[key]) {
//       return accum;  // <--- we must still return the accumulator
//     }

//     accum.push(item[key])
//     return accum;  // <---- and return accumulator here also
//   }, [])


    return arr.reduce(function(accum, object) {
        ///as long as it's not empty
        if (key in object) accum.push(object[key]);
        return accum;
    }, []);


    ////SOLUTION////
        // return arr.reduce(function(acc,next){
        //     acc.push(next[key]);
        //     return acc;
        // },[]);
    

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {


    // let strObj={};
    // return strObj;


    ///USEING FOREACH METHOD - Works///
    // let splitArr = str.split("");
    // let obj = {};
    // const vowels = "aeiou";
  
    // splitArr.forEach(function(letter) {
    //   let lowerCasedLetter = letter.toLowerCase()
    //   if (vowels.indexOf(lowerCasedLetter) !== -1) {
    //     if (obj[lowerCasedLetter]) {
    //       obj[lowerCasedLetter]++;
    //     } else {
    //       obj[lowerCasedLetter] = 1;
    //     }
    //   }
    // });
    // return obj;


    const vowels = "aeiou";

    return str.split('').reduce(function(acc,next)  {

        let strLowercase = next.toLowerCase()

        if(vowels.indexOf(strLowercase) !== -1){

            if(acc[strLowercase]){
                acc[strLowercase]++;
            } else {
                acc[strLowercase] = 1;
            }
        }

        return acc;

    }, {});

}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {

    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);

}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);

}
