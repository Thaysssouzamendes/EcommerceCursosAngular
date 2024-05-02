export interface ICurso {
    id: number;
    title: string;
    author: string;
    description: string;
    published_date: Date;
    // imgUrl: string;
    price: number;
    totalInStock: number;
    totalAddedToCart: number;
}

// type CursoType = {
//      id: number;
//      title: string;
//      author: string;
//      description: string;
//      published_date: Date;
//      price: number;
//    };
  
//   type CursoFantasyType = CursoType & { fantasyType: "high fantasy" };