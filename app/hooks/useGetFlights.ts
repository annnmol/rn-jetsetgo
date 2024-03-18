import { useState } from "react";
import { useShallow } from "zustand/react/shallow";

//user defined components
import { handleError } from "@/lib/utils";
import useAppStore from "@/store/app-store";
import { NetworkService } from "@/services/network";

const useGetFlights = () => {

  const {allFlights,setAllFlights,appliedFilters,currentCity,destinationCity,setLoading} = useAppStore(useShallow((state) => state));
  const [filteredFlights, setFilteredFlights] = useState<any>(allFlights);


  const getAllFlights = (id: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      NetworkService.get(`/${id}`)
        .then((res: any) => {
          // console.log(
          //   `🚀 ~ file: useGetFlights.ts:18 ~ NetworkService.get ~ res:`,
          //   res
          // );
          if (res?.error) {
            handleError(res);
            reject(res);
          } else {
            setAllFlights(res);
            resolve(res);
          }
        })
        .catch((error) => {
          handleError(error);
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  const getFilteredFlights = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);

      let data: IFlight[] = allFlights ?? [];
      
      //current city filter
      data = data?.filter((item) => { 
        return item?.origin?.toLowerCase() === (currentCity?.toLowerCase()) ?? [];
      }) ?? [];
      
      //destination city filter
      data = data?.filter((item) => { 
        return item?.destination?.toLowerCase() === (destinationCity?.toLowerCase()) ?? [];
      }) ?? [];

      //airline city filter
      const airlineFilter = appliedFilters?.["airline"] ?? "";

      if (airlineFilter) {
        data = data?.filter((item) => { 
          return item?.airline?.toLowerCase() === (airlineFilter?.toLowerCase()) ?? [];
        }) ?? [];
      }

      //sort filter
      const sortFilter = appliedFilters?.["sort"] ?? "";
      if (sortFilter === "lowToHigh") {
        data = data.sort((a, b) => a.price - b.price);
      }
      if (sortFilter === "highToLow") {
        data = data.sort((a, b) => b.price - a.price);
      }

      setTimeout(() => {
        setFilteredFlights(data);
        resolve(data);
        setLoading(false);
      }, 500); //simulate network delay dummy api call
    });
  };

  return { getAllFlights, filteredFlights, getFilteredFlights };
};
export default useGetFlights;
