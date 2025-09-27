import { use } from "react";
import { AuthContexts } from "../Contexts/AuthContexts";

const useAuth = () => {
    const authInfo = use(AuthContexts);
    return authInfo;
};

export default useAuth;