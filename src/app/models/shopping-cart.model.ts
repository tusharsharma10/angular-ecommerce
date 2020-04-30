import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {

    items:ShoppingCartItem[] = [];
    constructor(public itemsMap: { [ productId:string ]: ShoppingCartItem }) { 

        for(let pId in itemsMap){
           let item = itemsMap[pId];
            this.items.push(new ShoppingCartItem(item.product,item.quantity));
        }

    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;

    }

    get productIds() {

        return Object.keys(this.items);
    }


    get totalPrice(){

        let sum = 0;
        for(let pId in this.items ){

            sum += this.items[pId].totalPrice;
        }

        return sum;
    }

}