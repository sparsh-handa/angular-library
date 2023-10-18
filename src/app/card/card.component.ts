import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Book{
  ISBN:number,
  title:string,
  author:string,
  summary:string,
  image:string,
  price:number,
  quantity: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: any | undefined;
  @Output() addProduct: EventEmitter<Book> = new EventEmitter();

  addToCart(book: Book){
    this.addProduct.emit(book);
  }

}
