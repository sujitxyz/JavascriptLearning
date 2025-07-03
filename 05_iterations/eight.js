//reduce 

const arrayOne = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

const totalNumber =arrayOne.reduce(function(acc, curVal){
    //console.log(`acc: ${acc} and currval: ${curVal}`);
    //return acc + curVal
}, 0)
//console.log(totalNumber);
                   


const mobilePhones = [
  { name: "iPhone 14 Pro", price: 1199 },
  { name: "Samsung Galaxy S23 Ultra", price: 1099 },
  { name: "Google Pixel 8 Pro", price: 999 },
  { name: "OnePlus 12", price: 849 },
  { name: "Xiaomi 13 Pro", price: 799 },
  { name: "Realme GT 5", price: 649 },
  { name: "Motorola Edge+", price: 699 },
  { name: "Nothing Phone (2)", price: 599 }
];


const totalPrice = mobilePhones.reduce((acc, PhonePrice) => {
    return acc + PhonePrice.price;
}, 0)
console.log(totalPrice);
