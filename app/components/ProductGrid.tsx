'use client';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { setSortBy, setFilterBy } from '../store/productsSlice';
import ProductCard from './ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function ProductGrid() {
  const dispatch = useDispatch();
  const { filteredProducts, sortBy, filterBy } = useSelector((state: RootState) => state.products);

  const categories = ['all', 'Running', 'Basketball', 'Lifestyle', 'Training'];
  const sizes = ['all', '7', '8', '9', '10', '11', '12'];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Filters and Sort */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-wrap gap-4">
          {/* Category Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Category</label>
            <Select
              value={filterBy.category}
              onValueChange={(value) => dispatch(setFilterBy({ category: value }))}
            >
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Size Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Size</label>
            <Select
              value={filterBy.size}
              onValueChange={(value) => dispatch(setFilterBy({ size: value }))}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size === 'all' ? 'All Sizes' : size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Price Range</label>
            <div className="flex gap-2">
              <Button
                variant={filterBy.priceRange[1] === 100 ? 'default' : 'outline'}
                size="sm"
                onClick={() => dispatch(setFilterBy({ priceRange: [0, 10000] }))}
              >
                Under ₹10k
              </Button>
              <Button
                variant={
                  filterBy.priceRange[0] === 100 && filterBy.priceRange[1] === 200
                    ? 'default'
                    : 'outline'
                }
                size="sm"
                onClick={() => dispatch(setFilterBy({ priceRange: [100, 20000] }))}
              >
                ₹10k-₹20k
              </Button>
              <Button
                variant={filterBy.priceRange[0] === 20000 ? 'default' : 'outline'}
                size="sm"
                onClick={() => dispatch(setFilterBy({ priceRange: [20000, 30000] }))}
              >
                ₹20k+
              </Button>
            </div>
          </div>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Sort By</label>
          <Select value={sortBy} onValueChange={(value: any) => dispatch(setSortBy(value))}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">No products found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() =>
              dispatch(setFilterBy({ category: 'all', priceRange: [0, 300], size: 'all' }))
            }
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
