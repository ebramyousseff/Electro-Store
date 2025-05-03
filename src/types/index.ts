
export type Product = {
    id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  quantity?:number
  rating: {
    rate: number;
    count: number;
  };
  }
  
  export type ProductState = {
    product: Product[];
    searchTerm: string;
    filterData: Product[];
    selectedCategory: string;
  }
  
  export type CartProduct = Product & {
    quantity: number
    totalPrice: number
  }


  export type CartState = {
    products: CartProduct[];
    totalQuantity: number;
    totalPrice: number;
  }


  export type ImportMetaEnv = {
    VITE_FIREBASE_API_KEY: string;
    VITE_FIREBASE_AUTH_DOMAIN: string;
    VITE_FIREBASE_PROJECT_ID: string;
    VITE_FIREBASE_STORAGE_BUCKET: string;
    VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    VITE_FIREBASE_APP_ID: string;
    VITE_FIREBASE_MEASUREMENT_ID: string;
  }

  export type ImportMeta = {
    env: ImportMetaEnv;
  }

  export type UserState = {
    email: string | null;
    displayName: string | null;
  }


  export type WishlistState = {
  products: Product[];
};

export type CompareState = {
  products: Product[];
}