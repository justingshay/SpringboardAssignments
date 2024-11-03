import { addItem, removeItem, listItems } from "./inventory.mjs";

const groceries = ['oranges', 'peaches', 'bananas', 'kiwis'];

groceries.forEach(item => addItem(item, Math.floor(Math.random() * 5), (Math.random() * 10).toFixed(2)));

listItems();

removeItem('kiwis');

listItems();