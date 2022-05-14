import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prod:Product=new Product(0,"","",new Date(),"",0);

  nprod:Product=new Product(0,"","",new Date(),"",0);

  prods:Product[]=[
    new Product(1,"product1","p1-123",new Date(1997,6,4) ,"$20.21" ,2),
    new Product(2,"product2","p2-121",new Date(2010,7,4) ,"$45.21",3),
    new Product(3,"product3","p3-122",new Date(2020,8,4) ,"$20.88",1),
  ]

  add(){
    this.prods.push(new Product(this.nprod.id,this.nprod.product,this.nprod.code,this.nprod.Available,this.nprod.price,this.nprod.star_rating));
  
    this.nprod.id=0;
    this.nprod.product="";
    this.nprod.code="";
    this.nprod.Available=new Date();
    this.nprod.price="";
    this.nprod.star_rating=0;
  }

  show(prodid:number){
    for (let i = 0; i < this.prods.length; i++) {
      if (this.prods[i].id==prodid) {
        this.prod=this.prods[i];
        break;
      }
    }
  }

  edit(prodid:number){
    for (let i = 0; i < this.prods.length; i++) {
      if (this.prods[i].id==prodid) {
        this.prods[i].id=this.nprod.id;
        this.prods[i].product=this.nprod.product;
        this.prods[i].code=this.nprod.code;
        this.prods[i].Available=this.nprod.Available;
        this.prods[i].price=this.nprod.price;
        this.prods[i].star_rating=this.nprod.star_rating;

        this.nprod.id=0;
        this.nprod.product="";
        this.nprod.code="";
        this.nprod.Available=new Date();
        this.nprod.price="";
        this.nprod.star_rating=0;
        break;
      }
    }
  }

  delete(prodid:number){
    for (let i = 0; i < this.prods.length; i++) {
      if (this.prods[i].id==prodid) {
        this.prods.splice(i,1);
        break;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
