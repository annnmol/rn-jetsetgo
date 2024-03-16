import {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export const AUTH_USER_KEY = "auth-user";
export const AUTH_TOKEN_KEY = "auth-token";
// const DEFAULT_LOGIN_REDIRECT = "/home-screen";

// const getItem = localStorage.getItem(AUTH_USER_KEY) ?? "{}";
// const parsedItem = JSON.parse(getItem) ?? undefined;
const parsedItem:IData | undefined = undefined;

interface IAuthUserContext {
  authUser: IData | undefined;
  handleAuthChange: (data: IData) => void;
}

export const AuthContext = createContext({
  authUser: undefined,
  handleAuthChange: (data: IData) => undefined,
} as IAuthUserContext);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [authUser, setAuthUser] = useState(parsedItem);

  const handleAuthChange = async (data: any) => {
    console.log(
      `🚀 ~ file: auth-context.tsx:36 ~ handleAuthChange ~ data:`,
      data
    );
    if (data?._id) {
      data = JSON.stringify(data);
      //TODO: save to local storage
    } else {
      //logout
      // TODO: remove from local storage
    }
  };

  useEffect(() => {
    if (!parsedItem) {
      //TODO: navigate to login
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, handleAuthChange }}>
      {children}
    </AuthContext.Provider>
  );
};
