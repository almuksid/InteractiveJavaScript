const phones = [
  { id: 1, brand: "Apple", model: "iPhone 14", released: 2022, price: 999, weight: 172, screenSize: 6.1, battery: 3279, rating: 4.8 },
  { id: 2, brand: "Samsung", model: "Galaxy S23", released: 2023, price: 899, weight: 168, screenSize: 6.1, battery: 3900, rating: 4.7 },
  { id: 3, brand: "Xiaomi", model: "Redmi Note 12", released: 2023, price: 249, weight: 188, screenSize: 6.67, battery: 5000, rating: 4.4 },
  { id: 4, brand: "Oppo", model: "Find X5", released: 2022, price: 799, weight: 180, screenSize: 6.55, battery: 4800, rating: 4.5 },
  { id: 5, brand: "Vivo", model: "V27", released: 2023, price: 429, weight: 180, screenSize: 6.44, battery: 4600, rating: 4.3 },
  { id: 6, brand: "OnePlus", model: "10 Pro", released: 2022, price: 899, weight: 200, screenSize: 6.7, battery: 5000, rating: 4.6 },
  { id: 7, brand: "Realme", model: "GT Neo 3", released: 2022, price: 399, weight: 188, screenSize: 6.7, battery: 4500, rating: 4.2 },
  { id: 8, brand: "Nokia", model: "G60", released: 2022, price: 299, weight: 190, screenSize: 6.58, battery: 4500, rating: 4.1 },
  { id: 9, brand: "Google", model: "Pixel 7", released: 2022, price: 599, weight: 197, screenSize: 6.3, battery: 4355, rating: 4.6 },
  { id: 10, brand: "Sony", model: "Xperia 10 V", released: 2023, price: 549, weight: 159, screenSize: 6.1, battery: 5000, rating: 4.3 },
  { id: 11, brand: "Apple", model: "iPhone 13", released: 2021, price: 799, weight: 174, screenSize: 6.1, battery: 3240, rating: 4.8 },
  { id: 12, brand: "Samsung", model: "Galaxy A54", released: 2023, price: 449, weight: 187, screenSize: 6.4, battery: 5000, rating: 4.4 },
  { id: 13, brand: "Oppo", model: "Mi 11 Lite", released: 2021, price: 329, weight: 157, screenSize: 6.55, battery: 4250, rating: 4.5 },
  { id: 14, brand: "Oppo", model: "A77", released: 2022, price: 299, weight: 187, screenSize: 6.56, battery: 5000, rating: 4.2 },
  { id: 15, brand: "Vivo", model: "Y35", released: 2022, price: 229, weight: 188, screenSize: 6.58, battery: 5000, rating: 4.1 },
  { id: 16, brand: "OnePlus", model: "Nord CE 3", released: 2023, price: 449, weight: 185, screenSize: 6.7, battery: 5000, rating: 4.5 },
  { id: 17, brand: "Realme", model: "9 Pro+", released: 2022, price: 329, weight: 182, screenSize: 6.4, battery: 4500, rating: 4.4 },
  { id: 18, brand: "Nokia", model: "X30", released: 2022, price: 499, weight: 185, screenSize: 6.43, battery: 4200, rating: 4.0 },
  { id: 19, brand: "Google", model: "Pixel 6a", released: 2022, price: 449, weight: 178, screenSize: 6.1, battery: 4410, rating: 4.6 },
  { id: 20, brand: "Sony", model: "Xperia 5 IV", released: 2022, price: 999, weight: 172, screenSize: 6.1, battery: 5000, rating: 4.5 },

];

const brandCounter = phones.reduce((acc, el) => {
    if(acc[el.brand]){
        acc[el.brand] ++;
    }
    else{
        acc[el.brand] = 1;
    }
    return acc;
}, {})
console.log(brandCounter);

