import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Book{
  ISBN:number,
  title:string,
  author:string,
  summary:string,
  image:string,
  price:number,
  quantity:number,
}


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: Book | undefined;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter()
  @Output() cartTotal: EventEmitter<number> = new EventEmitter()
  
  removeProduct(id:number){
    this.removeFromCart.emit(id)
  }

  addItem(item:any){
    item.quantity += 1;
    const newTotal = item.price * item.quantity;
    this.cartTotal.emit(newTotal)

  }

  deleteItem(item:any){
    item.quantity -= 1;
    const newTotal = item.price * item.quantity;
    this.cartTotal.emit(newTotal)
    

  }
 

}
