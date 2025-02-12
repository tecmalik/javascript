
const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
    };

    function getArrayOfContent(inventory){
        let items = [];
        for (const key in inventory) {
            items.push(`${key} contains ${inventory[key]}`)
        }
        return items;
    }
    console.log(getArrayOfContent(inventory))


    function getContent(inventory){
        for (const key in inventory) {
           console.log (`${key} contains ${inventory[key]}`)
        }
    }
    getContent(inventory);

    function getSum(inventory){
       let sum = 0
        for (const key in inventory) {
            sum += inventory[key];
        }
        return sum
    }

   console.log(getSum(inventory));
   module.exports = {getSum,getArrayOfContent}