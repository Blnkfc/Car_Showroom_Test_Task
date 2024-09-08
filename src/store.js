import { create } from 'zustand'

const useStore = create((set) => ({
  queryParams: '',

  setQueryParams: (newQueryParams) => set((state) => ({ queryParams: newQueryParams }))
}))

export default useStore