let score: number | string = 33;

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string, id: number
}

let aditya: User | Admin = {
    name: "Aditya", id: 334
}
function getDBId(id: number | string){
    console.log(`DB id is ${id}`)
}

getDBId(3)
getDBId("3")

function getDBIdd(id: number | string){
    console.log(`DB id is ${id}`)
}

const data:number[] = [1,3,4,5,]


const data3:(string|number)[] = ["aditya", 5 ,6,7,2]