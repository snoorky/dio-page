import { createContext, useState } from "react";
import api from "./Api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const navigate = useNavigate()

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`)

      if (data.length == 1) {
        setUser(data[0])
        navigate("/feed")
      }
    } catch (error) {
      console.error("Email ou senha incorretos", error);
    }
  }

  const handleSignOut = () => {
    setUser({} as IUser)
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
