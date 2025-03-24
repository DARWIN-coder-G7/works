function calculateTotalSalesWithTax(arr,tax) {
return approach002(arr,tax)
}

function approach001(arr,tax){
const total =  arr.map((item)=>{
    return item.price*item.quantity;
}).reduce((acc,curr)=> acc+curr,0);
const withTax=(total*tax)/100;
return withTax+total;
}

function approach002(arr,tax){
const total = arr.reduce((acc,product)=> acc+(product.price*product.quantity),0);
const taxValue = (total*tax)/100;
return parseFloat((total+taxValue).toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
