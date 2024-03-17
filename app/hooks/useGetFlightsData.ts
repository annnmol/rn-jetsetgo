import { useState } from "react";
import { useShallow } from "zustand/react/shallow";

//user defined components
import { handleError } from "@/lib/utils";
import useAppStore from "@/store/app-store";
import { NetworkService } from "@/services/network";

const useGetFlights = () => {
  const [loading, setLoading] = useState(false);
  const setAllFlights = useAppStore(useShallow((state) => state.setAllFlights));

  const getAllFlights = (id: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      NetworkService.get(`/${id}`)
        .then((res: any) => {
          console.log(
            `🚀 ~ file: useGetFlights.ts:18 ~ NetworkService.get ~ res:`,
            res
          );
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

  return { getAllFlights, loading };
};
export default useGetFlights;
