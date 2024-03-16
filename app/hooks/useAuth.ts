import { AuthContext } from "@/store/auth-context";
import { useContext } from "react";

export const useAuth = () => {
    const state = useContext(AuthContext);
    return state ?? undefined;
};