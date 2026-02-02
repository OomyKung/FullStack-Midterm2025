// Made by : Me
// จัดกลุ่มข้อมูลสินค้าในคลังและสรุปยอดรวมของสินค้าที่มียอดขาย มากกว่าเกณฑ์ที่กำหนด
function groupAndSummarize(items,groupKey,valueKey,threshold){
    const inventoryMap = new Map();
    for (sale of items){
        if(!inventoryMap.has(sale.category,sale[groupKey]) && sale[valueKey]>threshold){
            inventoryMap.set(sale.category,sale.amount);
        }
        else if(inventoryMap.has(sale.category,sale[groupKey]) && sale[valueKey]>threshold){
            inventoryMap.set(sale.category,sale.amount+inventoryMap.get(sale.category))
        }
        else{
            continue;
        }
    }
    return Object.fromEntries(inventoryMap.entries())
}
const sales = [
    {category:"Electronics",product:"Phone",amount:500},
    {category:"Electronics",product:"Laptop",amount:1200},
    {category:"Clothing",product:"Shirt",amount:50},
    {category:"Clothing",product:"Jacket",amount:200},
    {category:"Food",product:"Snack",amount:30},
]
console.log(groupAndSummarize(sales,'category','amount',100))
console.log(groupAndSummarize(sales,'category','amount',40))
