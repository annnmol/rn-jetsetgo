
import { useState } from "react";
import { useShallow } from "zustand/react/shallow";

//user defined components
import { handleError } from "@/lib/utils";
import useAppStore from "@/store/app-store";
import { NetworkService } from "@/services/network";

const useGetFlights = () => {
	const [loading, setLoading] = useState(false);
	const setAllFlights = useAppStore(useShallow((state) => state.setAllFlights));

	const getAllFlights = async (id: string) => {
		setLoading(true);
		NetworkService.get(`/${id}`).then((res: any) => {
			console.log(`🚀 ~ file: useGetMessages.ts:18 ~ NetworkService.get ~ res:`, res);
			if (res?.error) return handleError(res);
			setAllFlights(res?.data);
		}).catch((error) => {
			handleError(error);
		}).finally(() => {
			setLoading(false);
		});
	};

	return { getAllFlights, loading };
};
export default useGetFlights