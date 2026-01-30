import { create } from 'zustand'
import {persist} from 'zustand/middleware'

const useStore = create(
  
  persist(
    (set)=>(
    {
  //the state
  count: 0, 

  //the action to update the state using set function
  increment: ()=> set((state)=>({count:state.count + 1})),
  decrement: ()=> set((state)=>({count: state.count - 1})),
  reset: ()=>set({count: 0})
    }), 
    
    {
      name: 'counter-storage' //name of the item in the storage (local storage by default)
    }
))

export default useStore;