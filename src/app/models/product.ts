export class Product {
    id: number;
    Typeid:number;
    Name: string;
    Stock:number;
    UnitPrice: number;
    images: string;
  
    constructor(id, typeid,name,stock, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
      this.id = id
      this.Typeid= typeid
      this.Name = name
      this.Stock = stock
      
      this.UnitPrice = price
      this.images= imageUrl
    }
  }
  