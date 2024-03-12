import { create } from 'zustand';

interface OrderStore {
  orderData: any | null;
  setOrderData: (data: any) => void;
  }

export const useOrderStore = create<OrderStore>((set) => ({
  orderData: null,
  setOrderData: (data) => {
    set({ orderData: data });
  },
  }));
