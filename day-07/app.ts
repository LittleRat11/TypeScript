// *async function 
const delay = (time :number ) :Promise<string>=> {
    return new Promise((resolve) => setTimeout(() => {
        resolve("Return String");
    },time)
);
};

delay(1000);

// *Pick<Type, Key>
// *to create a new type by picking a subset of properties from an existing type

type ProductBaseType = {
    id: string;
    name:string;
    price: number;
    edit: boolean;
    loading: boolean;
};

type Product = Pick<ProductBaseType,"id" | "name" | "price">

const product: Product ={
    id: "123",
    name: "Burger",
    price: 200,
}

// *Omit<Type, Key>
// *to create a new type by omitting a subset of properties from an existing type

type ProductType = {
    id: string;
    name:string;
    price: number;
    
};

type AddProduct = Omit<ProductType, "id">;  //so AddProduct has name and price remove id

const addProduct = (newProduct : AddProduct) : ProductType => {
    const generatedId = Math.random() + "";

    return {
        id: generatedId,
        name: newProduct.name,
        price: newProduct.price,
    }
}

console.log(addProduct({name: "Apple", price: 50}));

// *Partial<Type>
// *to create a new type by making all properties of an existing type optional
type ProductType1 = {
    id: string;
    name: string;
    price: number;
    description: string;
  };
  
  const products: Array<ProductType1> = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      description: "Lorem",
    },
  ];
  
  type ProductWithoutID = Omit<ProductType1, "id">;
  
  type PartialProduct = Partial<ProductWithoutID>;
  
  const updateProductById = (id: string, data: PartialProduct) => {
    const index = products.findIndex((prod) => prod.id === id);
    if (index > 0) {
      products[index] = {
        ...products[index],
        ...data,
      };
    }
  };
  
  updateProductById("1", { price: 200 });
  
  updateProductById("1", { name: "Edited Product Name" });
  
  updateProductById("1", { description: "New Desc", price: 10 });

//   *Required<Type>
//    *to create a new type by making all properties of an existing type required

// Example:
// Start with a type where all properties are optional:
type PartialSquare = {
    width?: number;
    height?: number;
  };
  
  // Use the `Required`
  type Square = Required<PartialSquare>;
  
  const square: Square = {
    width: 100,
    height: 100,
  };
  
  // Imagine a configuration with optional:
  type Config = {
    apiKey?: string;
    debugMode?: boolean;
  };
  
  // You want to enforce 
  // that all properties are provided at runtime:
  type FullConfig = Required<Config>;
  
  // This works.
  const validConfig: FullConfig = {
    apiKey: "12345",
    debugMode: true,
  };
  
  // Error: Property 'debugMode' is missing in 
  // type '{ apiKey: string; }' but required in type 'FullConfig'.
//  * const invalidConfig: FullConfig = {
//     apiKey: "12345",
//   };