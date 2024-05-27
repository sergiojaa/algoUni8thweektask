//1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ობიექტს და დააბრუნებს მის name 
//ფროფერთის მნიშვნელობას. თუ name ფროფერთი არ გააჩნია, დაარეთარნეთ null.
// function getObject(obj){
//     if(obj && typeof obj === 'object' && 'name' in obj){
//         return obj.name
//     }
//     return null
// }
// console.log(getObject({"name": "sergi"}))
//2. გადააწყეთ პირველი დავალება try/catch-ის გამოყენებით. თუ name ფროფერთი არ გააჩნია,
// გაისროლეთ ერორი და შემდეგ გაუმკლავდით.
function getObject(obj){
  
   try{
    if(!('name' in obj)){
        throw new Error('no name in object')
    }
    return obj.name
   } catch(error){
    return error.message
   }
    
}
console.log(getObject({"name": "sergi"}))

//3. დაწერეთ ფუნქცია, რომელიც იღებს ორ რიცხვს პარამეტრებად და ცდილობს მათ გაყოფას. 
//თუ რომელიმე რიცხვის ტიპის არაა, გაისროლეთ ერორი. ასევე გაუმკლავდით იმ შემთხვევასაც, როცა
// მეორე რიცხვი 0-ია (0-ზე გაყოფა არ შეიძლება).
// function divide(a, b){
//     if(isNaN(a) || isNaN(b)){
//         throw new Error('both inputs must be numbers')
//     }
//     if(b === 0){
//         throw new Error('cant divide by 0') 
//     }

//     return a / b;
// }
// let firstNumber = Number(prompt('enter first number'))
// let secondNumber = Number(prompt('enter second number'))
// try {
//     console.log(divide(firstNumber, secondNumber))
// } catch(error){
//     console.log( error.message)
// }

//4. დაწერეთ ფუნქცია სახელად promptAge, რომელიც შეეკითხება მომხმარებელს თავის ასაკს და
// თუ არასწორად იქნება ასაკი შემოყვანილი, გასივრის ერორს. ეს ფუნქცია გამოიძახეთ isAdult ფუნქციაში,
// რომელიც ადგენს არის თუ არა მომხმარებელი სრულწლოვანი. გამოიყენეთ try/catch ერორების გასამკლავებლად.
// function promptAge(){
//     let age = Number(prompt('enter your age:'))
//     if(isNaN(age) || age < 0){
//         throw new Error('invalid age')
//     }
//     return age
// }
// function isAdult(){
//     let age = promptAge()
//     if(age >= 18){
//         return 'adult'
//     }else{
//         return 'minor'
//     }
// }

// try{
//     console.log(isAdult())
// } catch(error){
//     console.log(error.message)
// }


//5. დაწერეთ ფუნქცია, რომელიც ცდილობს JSON სტრინგის პარსინგს (მაგალითად სტრინგად ჩაწერილ
// ობიექტს გადაიყვანს ობიექტში). გამოიყენეთ try/catch იმ ქეისებისთვის, როცა JSON სტრინგი არავალიდურია.
// function parse(objString){
//     return JSON.parse(objString)
// }
// try{
//     console.log(parse('{"name": "sergi", "age": 18}'))
// } catch (error){
//     console.log(error.message)
// }




//6. დაწერეთ ფუნქცია, რომელიც აგზავნის რექვესთს GitHub-ის API-ზე და მოაქვს გითჰაბის იუზერის დატა.
// (მაგალითად: https://api.github.com/users/temuritsutskiridze). თუ სასურველი პასუხი ვერ
// მიიღეთ (როცა response.ok არის false), გაისროლეთ ერორი და გამკლავდით მას.
// გამოიყენეთ async/await სინტაქსი.
// async function fetchGithubUserData(){
//     const response = await fetch('https://api.github.com/users/sergiojaa')
//     if(!response.ok){
//         throw new Error('failed to fetch data')
//     }
//     const data = await response.json()
//     console.log(data)
// }
// try{
//     fetchGithubUserData()
// } catch(error){
//     console.log(error.message)
// }