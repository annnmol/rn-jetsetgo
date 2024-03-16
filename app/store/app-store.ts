import { create } from 'zustand'

export type StoreState = {

    authSession: IData | null;
    setAuthSession: (authSession: IData | null) => void;
    allFlights: IFlight[];
    setAllFlights: (flights: IFlight[]) => void;
    selectedFlight: IFlight | null;
    setSelectedFlight: (flight: IFlight | null) => void;
    FilteredFlights: IFlight[];
    setFilteredFlights: (flights: IFlight[]) => void;
    selectedSeat: string;
    setSelectedSeat: (seat: string) => void;

    removeEverything: () => void,
};

const useAppStore = create<StoreState>((set) => ({
    authSession: {"name":"anmol"},
    setAuthSession: (payload: IData | null) => set({ authSession: payload }),
    allFlights: [],
    setAllFlights: (payload: IFlight[]) => set({ allFlights: payload }),
    selectedFlight: null,
    setSelectedFlight: (payload: IFlight | null) => set({ selectedFlight: payload }),
    FilteredFlights: [],
    setFilteredFlights: (payload: IFlight[]) => set({ FilteredFlights: payload }),
    selectedSeat: '',
    setSelectedSeat: (payload: string) => set({ selectedSeat: payload }),

    //clear all data
    removeEverything: () => set({}, true),
}));

export default useAppStore;