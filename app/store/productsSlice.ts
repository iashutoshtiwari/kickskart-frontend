import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Product {
  id: string
  name: string
  price: number
  category: string
  images: string[]
  description: string
  sizes: string[]
  featured?: boolean
}

interface ProductsState {
  products: Product[]
  filteredProducts: Product[]
  sortBy: "price-low" | "price-high" | "name" | "newest"
  filterBy: {
    category: string
    priceRange: [number, number]
    size: string
  }
}

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Air Max 270",
    price: 150,
    category: "Running",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "The Nike Air Max 270 delivers visible cushioning under every step.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    featured: true,
  },
  {
    id: "2",
    name: "Jordan 1 Retro High",
    price: 170,
    category: "Basketball",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "The Air Jordan 1 Retro High remixes the classic design.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    featured: true,
  },
  {
    id: "3",
    name: "React Infinity Run",
    price: 160,
    category: "Running",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "Designed to help reduce injury and keep you on the run.",
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "4",
    name: "Dunk Low",
    price: 100,
    category: "Lifestyle",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "Created for the hardwood but taken to the streets.",
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "5",
    name: "Air Force 1",
    price: 90,
    category: "Lifestyle",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "The radiance lives on in the Nike Air Force 1.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    featured: true,
  },
  {
    id: "6",
    name: "Zoom Pegasus 38",
    price: 120,
    category: "Running",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "A trusted companion over the years and miles.",
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "7",
    name: "Blazer Mid 77",
    price: 100,
    category: "Lifestyle",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "Praised by the streets and styled for the courts.",
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "8",
    name: "Metcon 7",
    price: 130,
    category: "Training",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    description: "The most versatile shoe in the gym.",
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
]

const initialState: ProductsState = {
  products: dummyProducts,
  filteredProducts: dummyProducts,
  sortBy: "newest",
  filterBy: {
    category: "all",
    priceRange: [0, 300],
    size: "all",
  },
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<ProductsState["sortBy"]>) => {
      state.sortBy = action.payload
      productsSlice.caseReducers.applyFilters(state)
    },
    setFilterBy: (state, action: PayloadAction<Partial<ProductsState["filterBy"]>>) => {
      state.filterBy = { ...state.filterBy, ...action.payload }
      productsSlice.caseReducers.applyFilters(state)
    },
    applyFilters: (state) => {
      let filtered = [...state.products]

      // Filter by category
      if (state.filterBy.category !== "all") {
        filtered = filtered.filter(
          (product) => product.category.toLowerCase() === state.filterBy.category.toLowerCase(),
        )
      }

      // Filter by price range
      filtered = filtered.filter(
        (product) => product.price >= state.filterBy.priceRange[0] && product.price <= state.filterBy.priceRange[1],
      )

      // Filter by size
      if (state.filterBy.size !== "all") {
        filtered = filtered.filter((product) => product.sizes.includes(state.filterBy.size))
      }

      // Sort
      switch (state.sortBy) {
        case "price-low":
          filtered.sort((a, b) => a.price - b.price)
          break
        case "price-high":
          filtered.sort((a, b) => b.price - a.price)
          break
        case "name":
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "newest":
        default:
          // Keep original order for newest
          break
      }

      state.filteredProducts = filtered
    },
  },
})

export const { setSortBy, setFilterBy } = productsSlice.actions
export default productsSlice.reducer
