import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const AUTH_USER_KEY = 'auth-user';

interface StoreState {
    _hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
    authSession: any | null | undefined;
    setAuthSession: (authSession: IData | null) => void;
    allFlights: IFlight[];
    setAllFlights: (flights: IFlight[]) => void;
    selectedFlight: IFlight | null;
    setSelectedFlight: (flight: IFlight | null) => void;
    FilteredFlights: IFlight[];
    setFilteredFlights: (flights: IFlight[]) => void;
    selectedSeat: string;
    setSelectedSeat: (seat: string) => void;
    removeEverything: () => void;
}

export const useAppStore = create(
    persist(
        (set, get) => ({
            _hasHydrated: false,
            setHasHydrated: (state) => {
              set({
                _hasHydrated: state
              });
            },
            authSession: null,
            setAuthSession: async (payload: IData | null) => {
                set({ authSession: payload });
            },
            allFlights: [],
            setAllFlights: (payload: IFlight[]) => set({ allFlights: payload }),
            selectedFlight: null,
            setSelectedFlight: (payload: IFlight | null) => set({ selectedFlight: payload }),
            FilteredFlights: [],
            setFilteredFlights: (payload: IFlight[]) => set({ FilteredFlights: payload }),
            selectedSeat: '',
            setSelectedSeat: (payload: string) => set({ selectedSeat: payload }),

            // Clear all data
            removeEverything: () => set({ authSession: null, allFlights: [], selectedFlight: null, FilteredFlights: [], selectedSeat: '' }),
        }),
        {
            name: AUTH_USER_KEY, // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
            partialize: (state:StoreState) => ({ authSession: state.authSession }),
        },
    ),
)

export default useAppStore;
