type User = {
    readonly _id : number,
    name: string,
    email: string,
    isActive:boolean
    cardDetail?: number
}

const object:User = {
    _id: 534534534534534,
    name:"Aditya Rawat",
    email: "adiyarawatnew2487@gmail.com",
    isActive: true,
    cardDetail: 8982348924789478
}

/// whe we are using the tsx we use interface instead of type