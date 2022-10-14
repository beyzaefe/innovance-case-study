export interface NavbarTitle {
  name: string;
  path: string;
  icon: any;
}

export interface Products {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartProducts {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  count: number;
  rating: {
    rate: number;
    count: number;
  };
}
