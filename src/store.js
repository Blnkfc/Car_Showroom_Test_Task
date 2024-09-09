import { create } from 'zustand'

const useStore = create((set) => ({
  queryParams: '',
  sortParams: [
    'price',
    'rating',
    'stock',
    'weight'
  ],
  tags: [
    'sedan',
    'sport',
    'hatchback',
    'compact',
    'suv',
    'minivan'
  ],

  setQueryParams: (newQueryParams) => set((state) => ({ queryParams: newQueryParams }))
}))

export default useStore