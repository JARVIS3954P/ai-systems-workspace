const phone1 = {
    brand : "Nothing",
    ram : "8GB",
    rom : "128GB",
    processor : "Dimensity 7200",
    "processor brand" : "mediatek",
    hasEarphoneJack : false,
    displayType : "Amoled",
    price : 22000
}

const phone2 = {
    brand : "Realme",
    ram : "8GB",
    rom : "128GB",
    processor : "8 Gen2",
    "processor brand" : "snapdragon",
    hasEarphoneJack : true,
    displayType : "Amoled",
    price : 15000
}

const {["processor brand"]: pBrand1} = phone1
const {["processor brand"]: pBrand2} = phone2

function displaySpecs(obj) {
    let arr = Object.keys(obj);

    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}: ${obj[arr[i]]}`);
    }
}
displaySpecs(phone1)
displaySpecs(phone2)

function comparePrices(obj1, obj2){
    if(obj1.price > obj2.price){
        console.log(`${obj1.brand} is more expensive`);
    }else if(obj1.price < obj2.price){
        console.log(`${obj2.brand} is more expensive`);
    }else{
        console.log(`Both have equal price`)
    }
}
comparePrices(phone1, phone2)