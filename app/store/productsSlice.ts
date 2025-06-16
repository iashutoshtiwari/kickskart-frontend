import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import dummyProducts from '@/lib/sneakers';
export interface Product {
  id: string;
  owner?: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  labels?: string[];
  color?: string;
  style?: string;
  sizes: string[];
  featured?: boolean;
  availableSince?: string;
}

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  sortBy: 'price-low' | 'price-high' | 'name' | 'newest';
  filterBy: {
    category: string;
    priceRange: [number, number];
    size: string;
  };
}

const normalizeProduct = (product: any): Product => ({
  ...product,
  owner: product.owner === null ? undefined : product.owner,
  labels: product.labels === null ? undefined : product.labels,
});

const initialState: ProductsState = {
  products: dummyProducts.map(normalizeProduct),
  filteredProducts: dummyProducts.map(normalizeProduct),
  sortBy: 'newest',
  filterBy: {
    category: 'all',
    priceRange: [0, 200000],
    size: 'all',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<ProductsState['sortBy']>) => {
      state.sortBy = action.payload;
      productsSlice.caseReducers.applyFilters(state);
    },
    setFilterBy: (state, action: PayloadAction<Partial<ProductsState['filterBy']>>) => {
      state.filterBy = { ...state.filterBy, ...action.payload };
      productsSlice.caseReducers.applyFilters(state);
    },
    applyFilters: (state) => {
      let filtered = [...state.products];

      // Filter by category
      if (state.filterBy.category !== 'all') {
        filtered = filtered.filter(
          (product) => product.category.toLowerCase() === state.filterBy.category.toLowerCase(),
        );
      }

      // Filter by price range
      filtered = filtered.filter(
        (product) =>
          product.price >= state.filterBy.priceRange[0] &&
          product.price <= state.filterBy.priceRange[1],
      );

      // Filter by size
      if (state.filterBy.size !== 'all') {
        filtered = filtered.filter((product) => product.sizes.includes(state.filterBy.size));
      }

      // Sort
      switch (state.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'newest':
        default:
          // Keep original order for newest
          break;
      }

      state.filteredProducts = filtered;
    },
  },
});

export const { setSortBy, setFilterBy } = productsSlice.actions;
export default productsSlice.reducer;
