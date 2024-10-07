// let styles = ["jazz","blues"]

// styles.push("rock-n-roll")

// // styles[1]="classic"
// styles[Math.floor(styles.lenght / 2)]="classic"

// alert(styles.shift())

// styles.unshift("reggae")
// styles.unshift("rap")
// alert(styles)

// function sumInput(){
//     let arr=[]
//     let num
//     do{
//         num=promt("enter number")
//         if (num && (+num || num === "0")) arr.push(+num)
//     }while(num && (+num || num == "0"))
//     let result=0
//     for(item of arr){
//         result+=item
//     }
//     return result
// }

// let auto = {
//     brand:"bmw",
//     model:"x5",
//     year:2021,
//     avgSpeed:80,
//     toString(){
//         return `
//             brand:${this.brand},
//             model:${this.model},
//             year:${this.year},
//             avgSpeed:${this.avgSpeed},
//         `
//     }
//     calculateDriveTime(distance){
//         return distance / this.avgSpeed
//     }
// }

// alert(auto.calculateDriveTime(240))

// let list = [
//     {name: "potato",count:3,bought:false,price:50},
//     {name: "carrot",count:4,bought:false,price:58},
//     {name: "onion",count:7,bought:false,price:70},

// ]

// function addToList(name){
//     for(item of list){
//         if(item.name===name){
//             item.count += 1
//             return list
//         }
//     }
//     list.push({name:name,count:1,bought:false,price:price})
//     return list
// }

// function buyProduct(name){
//     for(item of list){
//         if(item.name === name){
//         item.bought= true
//         }
//     }
// }


