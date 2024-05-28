//1. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს callback ფუქნციას და იძხებს მას 1 წამის შემდეგ.
// setTimeout(()=> console.log('get in 1 second'),1000 )
// function getInSecond(callback){
//     setTimeout(()=> console.log(callback),1000)
// }
// getInSecond('hi bro')

//2. დაწერეთ ფუქნცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და ორ ქოლბექ ფუქნციას. თუ პირველი რიცხვი მეტია მეორეზე, 
//გამოიძახეთ პირველი ქოლბექი, თუარადა გამოიძხეთ მეორე ქოლბექ ფუნქცია.
// function getElements(num1, num2, callback1, callback2){
//     if(num1 > num2){
//        return callback1()
//     }else{
//         return callback2()
//     }
// }
// const number1 = Number(prompt('enter the first number'))
// const number2 = Number(prompt('enter the second number'))
// getElements( 
//     number1,
//     number2,
//     ()=> console.log(`${number1} მეტია ${number2}-ზე ${number1 - number2}-ით`),
//     ()=> console.log(`${number1} ნაკლებია ${number2}-ზე ${number1 - number2}-ით`)
//  )

//3. დაწერეთ ფუნქცია, რომელიც პარამეტრებად იღებს მასივს, რიცხვს და callback ფუქნციას. callback ფუნქციის გამოძახების
//შემდეგ მასივში უნდა ჩაიფუშოს რიცხვი და დაბრუნოს განახლებული მასივი. მინიშნება: callback ფუნქციას გამოძახებისას არგუმენტებად
// გაატანეთ მასივი და რიცხვი, რომელიც მასივში უნდა ჩაიფუშოს.
// function getParams(arr, num, callback){
//     callback(arr, num)
//     return arr
// }
// let array = [10,20,30,40]
// const number = 50
// function addToArray(arr,num){
//     arr.push(num)
//     return arr
// }
// console.log(getParams(array, number, addToArray))

//4. შექმენით ფრომისი, რომელიც დარეზოლვდება 2 წამის შემდეგ და გამოიტანს წარამტების შეტყობინებას.
// const promise = new Promise(resolve => {
//     setTimeout(resolve('success'),2000)
// })
// promise.then(message => console.log(message))
//5. შექმენით ფრომისი, რომელიც დარეზოლვდება ან დარეჯექთდება 3 წამის შემდეგ. დარეზოლვდეს თუ იუზერი სრულწლოვანია და დარეჯექთდეს - თუ არაა.
// let user1 = Number(prompt('enter your age'))
// const promise = new Promise((resolve, reject)=>{
//     setTimeout( ()=>{
//         if(user1 >= 18){
//             resolve('adult')
//         }else{
//             reject('minor')
//         }
//     } )
// })
// promise.then(message=> console.log(message)).catch(error => console.log(error))

//6. შექმენით ფრომისი, რომელიც დაარეზოლვებს შემთხვევების 50%-ში და დანარჩენ 50%-ში დაარეჯექთებს. დაუმკლავდით ორივე ვარიანტს then და catch-ით.
// const promise = new Promise((resolve, reject)=> {
//     if(Math.random() > 0.5){
//         resolve('metia')
//     }else{
//         reject('naklebia')
//     }
// })
// promise.then(message=>console.log(message)).catch(error=>console.log(error))

//7. შექმენით Promise Chain (მინიმუმ 3 ფრომისით), სადაც თითოეული დარეზოლვდება 1 წამში და გამოიტანს განსხვავებულ წარმატების შეტყობინებებს.
// const promise = new Promise((resolve)=>{
//     setTimeout(resolve('success'),1000)
// })
// promise.then(response=> {
//     console.log(response)
//     return response
// }).then(response=>{
//     console.log(response)
//     return response
// } ).then(response=> {
//     console.log(response)
//     return response
// }).catch(error=>console.log(error))


//8. შექმენით ორი ფრომისი. პირველმა დაარეზოლვოს რიცხვი და მეორემ დარეზოლვებული რიცხვი გაამრავლოს 2-ზე. გამოიყენეთ promise chaining.
// const promise1 = new Promise((resolve)=>{
//     resolve(20)
// })
// promise1.then((number)=>{
//     console.log('first number' + " " + number)
//     return number
// }).then((number)=>{
//     const num2 = number * 2
//     console.log('second number' + " " + num2)
//     return num2
// })
//9. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება დადებით რიცხვს და დაითვლის მაგ რიცხვამდე. თითოეული რიცხვი უნდა გამოკონსოლდეს
// 1 წამის ინტერვალით.
// const userNumber = 5
// let currentNumber = 1
// const interval1 = setInterval(()=>{
//     console.log(currentNumber)
//     if(currentNumber === userNumber){
//         clearInterval(interval1)
//     }
//     currentNumber++
// })

//10. დაწერეთ პროგრამა, რომელიც მომხმარბელს შეეკითხება თავისი გითჰაბის იუზერნეიმს და წამოიღებს მის ინფორმაციას გითჰაბის API-დან.
// API ლინკი - https://api.github.com/users/[username], მაგალითად: https://api.github.com/users/temuritsutskiridze. 
//ჯერ გამოიყენეთ then/catch და შემდეგ async/await.
// const githubUser = prompt('enter the github username')
// async function githubUrl(name){
//     const response = await fetch(`https://api.github.com/users/${name}`)
//     const data = await response.json()
//     console.log(data)
// }
// githubUrl(githubUser)
// 11. დაწერეთ პროგრამა, რომელსაც API-დან მოაქვს ორი განსხვავებული ინფორმაცია და დაბეჭდოს, როდესაც ორივეს მიიღებს
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
// // unda shevqmnat cvladi gadavurbinot mapit davfetchot da gamovitanot responsit
// const promises = urls.map(url=> fetch(url).then(response=>response.json()) )
// Promise.race(promises).then(fastestData=>console.log(fastestData))
// Promise.race(promises).then(fastestData => console.log(fastestData)) 

// const promises = urls.map(url => fetch(url).then(response => response.json()));
// Promise.race(promises).then(fastestData => console.log(fastestData));

