export  interface  postResponsModel{

//     id: number,
//     title?:string,
//     price?: number,
//     description: string,
//     images: string,
//     category: CardItem,
// }

// export interface CardItem{
//       id: number,
//       name: string,
//       image: string,
//       creationAt : number,
//       updatedAt: number,
// }

status: string ,
  message: string ,
  products:CardItem[]  ,
}
export interface CardItem{

     id: number ,
      title:string |undefined ,
      image : string ,
      price : number ,
      description: string ,
      brand: string ,
      model:string  ,
      color: string ,
      category: string ,
      discount: number ,
      onSale: string ,
}
