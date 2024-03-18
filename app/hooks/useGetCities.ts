import { useShallow } from "zustand/react/shallow";
import { useState } from "react";

//user defined components
import { DUMMY_AIRPORT_CITIES } from "@/lib/dummy-data";
import useAppStore from "@/store/app-store";

const useGetCities = () => {
  const setLoading = useAppStore(useShallow((state) => state.setLoading));
  const [filtredCities, setFilteredCities] = useState(DUMMY_AIRPORT_CITIES);

  const getFiltredCities = async (text: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);

      if (text.length < 2) {
        setFilteredCities([]);
        setLoading(false);
        resolve([]);
        return;
      }

      // filter the data
      const newResults = DUMMY_AIRPORT_CITIES.filter((item) => {
        return item?.city?.toLowerCase()?.includes(text?.toLowerCase()) ?? [];
      });

      setTimeout(() => {
        setFilteredCities(newResults);
        resolve(newResults);
        setLoading(false);
      }, 500); //simulate network delay dummy api call
    });
  };

  return { getFiltredCities, filtredCities };
};
export default useGetCities;
