const phones = [
    { brand: "Samsung", price: 79999, ram: 12 },
    { brand: "Realme", price: 15000, ram: 6 },
    { brand: "OnePlus", price: 45000, ram: 8 },
    { brand: "Apple", price: 129999, ram: 8 },
    { brand: "Xiaomi", price: 18000, ram: 6 },
    { brand: "Nothing", price: 22000, ram: 8 }
]

// const under50k = phones.filter((phone) => phone.price <50000)
// console.log(under50k)

// const details = phones.map(({brand,price})=>({
//     brand,
//     price
// }))
// console.log(details)

// const total = phones.reduce((acc, phone)=> acc + phone.price , 0)
// console.log(total)

/*Combining these expression : Chaining of Methods*/
const filteredResult = phones
                        .filter((phone) => phone.price < 50000)
                        .map(phone => ({
                            brand : phone.brand,
                            price : phone.price
                        }))
                        .reduce( (acc, phone) => acc + phone.price , 0)
console.log(filteredResult)