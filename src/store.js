import { create } from 'zustand'

const useStore = create((set) => ({
  queryParams: '',
  sortParams: [
    'price',
    'rating',
    'stock',
    'weight'
  ],
  tags:[
    'sedans',
    'sports cars',
    'hatchbacks',
    'compact cars',
    'suvs',
    'minivans'
  ],

  setQueryParams: (newQueryParams) => set((state) => ({ queryParams: newQueryParams }))
}))

export default useStore