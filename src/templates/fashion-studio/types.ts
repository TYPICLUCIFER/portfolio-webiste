export type FashionThemeVariant = 'atelier-dark' | 'nova-light';

export type FashionScreenId =
  | 'home'
  | 'shop'
  | 'product'
  | 'cart'
  | 'checkout'
  | 'about'
  | 'contact'
  | 'track'
  | 'account'
  | 'admin';

export interface FashionProduct {
  id: string;
  name: string;
  price: number; // in INR
  originalPrice?: number;
  category: 'T-Shirts' | 'Hoodies' | 'Bottoms' | 'Accessories';
  image: string;
  rating?: number;
  reviewsCount?: number;
  colors?: string[];
  sizes?: string[];
  description?: string;
  badge?: string;
}

export interface FashionCartItem {
  product: FashionProduct;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface FashionOrder {
  id: string;
  date: string;
  customerName?: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Canceled';
  items: {
    name: string;
    image: string;
    price: number;
  }[];
}
