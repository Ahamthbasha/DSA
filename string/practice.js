//check anagram

// let str = "silent"
// let str1 = "listen"

// // console.log(str.split("").sort().join("")==str1.split("").sort().join(""))

// function checkAnagram(str,str1){
// for(let i=0;i<str.length;i++){
//     if(!str1.includes(str[i])){
//         return false
//     }
// }
// return true
// }
// console.log(checkAnagram(str,str1))

//store unique letters from a string

//index == unique letter

// let str="malayalam"
// let arr=[]
// for(let i=0;i<str.length;i++){
//     if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
//         arr.push(str[i])
//     }
// }

// console.log(arr.join(''))

//find the first non repeating letter
// let str = "cocoloco";

// for(let i=0;i<str.length;i++){
//     if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
//         console.log(str[i])
//         break
//     }
// }

//combine two strings like first letter from first string and first letter from second string.

//find max length iterate make condition there first and second < their length it will work

// let str1 = "pqr";
// let str2 = "stuv";

// function MixStr(str1,str2){
//     let length=Math.max(str1.length,str2.length)
//     let result=''
//     let first=0
//     let second=0

//     for(let i=0;i<length;i++){
//         if(first < str1.length){
//             result+=str1[first]
//             first++
//         }
//         if(second < str2.length){
//             result+=str2[second]
//             second++
//         }
//     }
//     return result
// }
// console.log(MixStr(str1,str2))

//palindrome checking

// function palindromeCheck(str){
//     let rev=''
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     return str==rev
// }
// console.log(palindromeCheck("malayalam"))

//reverse

// function reverse(str){
//     let rev=''
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     return rev
// }

// console.log(reverse("hello"))

//check str1 is a rotation of str. 
//concate make str abcdabcd here bcda exists so str1 is rotation of str

// let str = "abcd"
// let str1 = "bcda"

// function rotate(str,str1){
//     if(str.concat(str).includes(str1)){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(rotate(str,str1))

//separate vowels and consonants

// let str="basha"

// function separatVowelConsonants(str){
//     let arr=['a','e','i','o','u','A','E','I','O','U']
//     let vowels=[]
//     let consonants=[]
//     for(let i=0;i<str.length;i++){
//         if(arr.includes(str[i])){
//             vowels.push(str[i])
//         }else{
//             consonants.push(str[i])
//         }
//     }
//     return {vowels,consonants}
// }
// console.log(separatVowelConsonants(str))

//reverse a string using recursion

// function reverseRecursion(str){
//     if(str.length < 2){
//         return str
//     }
//     let first=str[0]
//     let remaining=str.slice(1)
//     return reverseRecursion(remaining)+first
// }
// console.log(reverseRecursion("basha"))

//capitalize the first letter of all word

// let str='hi hello how are you'

// let firstCap=str.split(' ').map((word)=>{
//     return word[0].toUpperCase()+word.slice(1)
// }).join(' ')

// console.log(firstCap)

//reverse like this output:ih olleh woh era uoy

// let str='hi hello how are you'

// console.log(str.split('').reverse().join('').split(' ').reverse().join(' '))

//another approach for this

// let str='hi hello how are you'

// let reverseStr=''
// let word=''

// for(let i=0;i<=str.length;i++){
//     if(str[i]=== ' ' || i===str.length){
//         for(let j=word.length-1;j>=0;j--){
//             reverseStr+=word[j]
//         }

//         if(i !== str.length){
//             reverseStr+=' '
//         }

//         word=''
//     }else{
//         word+=str[i]
//     }
// }

// console.log(reverseStr)