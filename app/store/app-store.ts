import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const AUTH_USER_KEY = "auth-user";

interface StoreState {
  authSession: any | null | undefined;
  setAuthSession: (authSession: IData | null) => void;
  allFlights: IFlight[];
  setAllFlights: (flights: IFlight[]) => void;
  selectedFlight: IFlight | null;
  setSelectedFlight: (flight: IFlight | null) => void;

  currentCity: string;
  setCurrentCity: (city: string) => void; 
  destinationCity: string;
  setDestinationCity: (city: string) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  appliedFilters: any;
  setAppliedFilters: (filters: any) => void;

  removeEverything: () => void;
}

export const useAppStore = create(
  persist(
    (set) => ({
      authSession: null,
      setAuthSession: async (payload: IData | null) => {
        set({ authSession: payload });
      },
      allFlights: [],
      setAllFlights: (payload: IFlight[]) => set({ allFlights: payload }),
      selectedFlight: null,
      setSelectedFlight: (payload: IFlight | null) =>
        set({ selectedFlight: payload }),

      currentCity: "",
      setCurrentCity: (payload: string) => set({ currentCity: payload }),
      destinationCity: "",
      setDestinationCity: (payload: string) => set({ destinationCity: payload }),

      loading: false,
      setLoading: (payload: boolean) => set({ loading: payload }),

      appliedFilters: undefined,
      setAppliedFilters: (payload: any) => set({ appliedFilters: payload }),

      // Clear all data
      removeEverything: () =>
        set({
          authSession: null,
          allFlights: [],
          selectedFlight: null,
          currentCity: "",
          destinationCity: "",
          loading: false,
          appliedFilters: undefined,
          
        }),
    }),
    {
      name: AUTH_USER_KEY, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
      partialize: (state: StoreState) => ({ authSession: state.authSession }),
    }
  )
);

export default useAppStore;
