let inventory = [];
let name = " ";
let qty = 0;
let price = null;

export function addItem(name, qty, price) {
    const item = {
        name, qty, price
    };
    inventory.push(item);
}

export function removeItem(name) {
    inventory = inventory.filter(item => item.name != name);
    //console.log(inventory);
}

export function listItems() {
    if(inventory.length >= 1){
        inventory.forEach(item => {
            console.log(item);
        })
    }else {
        console.log("No inventory. Must replenish!");
    }
}

addItem('apples', 3, 0.99);
listItems();
removeItem('apples');
listItems();