const shop = {
    name : 'hathazari telecom',
    address : 'hathazari',
    profit : 12000,
    products : ['mobile', 'headphone', 'charger', 'cable'],

};
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(shopStringified);
// console.log(shop);