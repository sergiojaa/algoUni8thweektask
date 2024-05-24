//1. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს callback ფუქნციას და იძხებს მას 1 წამის შემდეგ.
// setTimeout(()=> console.log('hello async programming'),1000)

//2. დაწერეთ ფუქნცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და ორ ქოლბექ ფუქნციას. თუ პირველი რიცხვი მეტია მეორეზე, 
//გამოიძახეთ პირველი ქოლბექი, თუარადა გამოიძხეთ მეორე ქოლბექ ფუნქცია.

// function checkNumber(num1, num2, funcEquals, funcNotEquals){
//     if(num1 > num2){
//         funcEquals()
//     }else{
//         funcNotEquals()
//     }
// }
// checkNumber(
//     10,
//     20,
//     () => {
//         console.log('func not equals')
//     },
//     ()=> {
//         console.log('func  equals')
//     }

// )


//3. დაწერეთ ფუნქცია, რომელიც პარამეტრებად იღებს მასივს, რიცხვს და callback ფუქნციას. callback ფუნქციის გამოძახების
//შემდეგ მასივში უნდა ჩაიფუშოს რიცხვი და დაბრუნოს განახლებული მასივი. მინიშნება: callback ფუნქციას გამოძახებისას არგუმენტებად
// გაატანეთ მასივი და რიცხვი, რომელიც მასივში უნდა ჩაიფუშოს.
// function addNumber(arr, number, callback){
//     callback(arr,number)
//     return arr
// }

// function addToArray(arr,number){
//     arr.push(number)
// }
// let myArray = [1,2,3,4]
// let num = 5
// let updatedArray = addNumber(myArray,num,addToArray)
// console.log(updatedArray)


//4. შექმენით ფრომისი, რომელიც დარეზოლვდება 2 წამის შემდეგ და გამოიტანს წარამტების შეტყობინებას.
// const promise = new Promise((resolve) => {
//     setTimeout(()=> resolve('success'),3000)
// })
// promise.then(message => console.log(message))

//5. შექმენით ფრომისი, რომელიც დარეზოლვდება ან დარეჯექთდება 3 წამის შემდეგ. დარეზოლვდეს თუ იუზერი სრულწლოვანია და დარეჯექთდეს - თუ არაა.

// let user = 19;
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(user >= 18){
//             console.log('srulwlovani')
//         }else{
//             reject('araswulwlovani')
//         }
//     },3000)
// })
// promise.then(message => {
//     console.log(message)
// }).catch(error => console.log(error))

//6. შექმენით ფრომისი, რომელიც დაარეზოლვებს შემთხვევების 50%-ში და დანარჩენ 50%-ში დაარეჯექთებს. დაუმკლავდით ორივე ვარიანტს then და catch-ით.
// const promise = new Promise((resolve, reject) => {
//     if(Math.random() > 0.5){
//         resolve('resolved metia')
//     }else{
//         reject('rejected naklebia')
//     }
// })
// promise.then(result => {
//     console.log(result)
// }).catch(error=>{
//     console.log(error)
// })



//7. შექმენით Promise Chain (მინიმუმ 3 ფრომისით), სადაც თითოეული დარეზოლვდება 1 წამში და გამოიტანს განსხვავებულ წარმატების შეტყობინებებს.
// const promise = new Promise((resolve)=>{
//     setTimeout((resolve('resolved')),1000)
//     return resolve
// })
// promise.then(resolve=>{
//     console.log(resolve)
//     return resolve
// }).then(resolve=>{
//     console.log(resolve)
//     return resolve
// }).then(resolve => {
//     console.log(resolve)
//     return resolve
// }).catch(error=> console.log(error))

//8. შექმენით ორი ფრომისი. პირველმა დაარეზოლვოს რიცხვი და მეორემ დარეზოლვებული რიცხვი გაამრავლოს 2-ზე. გამოიყენეთ promise chaining.
// const firstPromise = new Promise((resolve)=>{
//     resolve(17)
// })
// firstPromise.then((number)=>{
//     console.log("first promise" + number)
//     return number
// }).then((number)=>{
//     const num2 = number * 2
//     console.log('second promise' + num2)
//     return num2
// }).catch((error)=>{
//     console.log(error)
// })
//9. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება დადებით რიცხვს და დაითვლის მაგ რიცხვამდე. თითოეული რიცხვი უნდა გამოკონსოლდეს
// 1 წამის ინტერვალით.
const num = 5
let currentNumber = 1
const interval = setInterval(()=>{
    console.log(currentNumber)
    if(currentNumber === num){
        clearInterval(interval)
    }
    currentNumber++
})



//10. დაწერეთ პროგრამა, რომელიც მომხმარბელს შეეკითხება თავისი გითჰაბის იუზერნეიმს და წამოიღებს მის ინფორმაციას გითჰაბის API-დან.
// API ლინკი - https://api.github.com/users/[username], მაგალითად: https://api.github.com/users/temuritsutskiridze. 
//ჯერ გამოიყენეთ then/catch და შემდეგ async/await.
// https://api.github.com/users/sergiojaa


//11. დაწერეთ პროგრამა, რომელსაც API-დან მოაქვს ორი განსხვავებული ინფორმაცია და დაბეჭდოს, როდესაც ორივეს მიიღებს
// const fetchData1 = fetch("https://jsonplaceholder.typicode.com/todos/1")
// const fetchData2 = fetch("https://jsonplaceholder.typicode.com/todos/2")
// Promise.all([fetchData1,fetchData2]).then(responses => {
//     console.log(responses.map((response) => response.json()));
//     Promise.all(responses.map((response) => response.json() )).then(console.log(data))
// } )


//12. დაწერეთ პროგრამა, რომელიც API-დან წამოიღებს სამ განსხვავებულ დატას და დაბეჭდავს იმას, რომელსაც ყველაზე მალე მიიღებს.
// const urls = [
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2",
//     "https://jsonplaceholder.typicode.com/todos/3"
// ]
// const promises = urls.map( url => fetch(url).then(response => response.json()) )
// Promise.race(promises).then((fastestData) => console.log(fastestData) )