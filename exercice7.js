//calculateur de reduction

let originalPrice = 1500000;
let ratePerecent = 10;

let reduction = (originalPrice * ratePerecent) / 100;

let priceAfterReduction = originalPrice - reduction;

console.log(originalPrice);
console.log(reduction);
console.log(`Le nouveau prix après reduction est ${priceAfterReduction}`);
