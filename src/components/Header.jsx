import logo from "../assets/logo-dio.png"
import Button from "./Button"
import ItemMenu from "./ItemMenu"
import Input from "./Input"
import UserProfile from "./UserProfile"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Header({ authentication }) {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)

  const handleMenu = () => { setMenu(!menu) }

  return (
    <div className="w-full bg-black py-4 px-4 md:px-12 lg:px-20 flex items-center justify-between text-white">
      <div className="relative">
        {authentication ? (
          <div className="flex lg:space-x-4">
            <img className="w-15 md:w-20" src={logo} alt="logo DIO" />
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Input placeholder="Search..." icon="search" />
              <ItemMenu title="Live Code" />
              <ItemMenu title="Global" />
            </div>
          </div>
        ) : (
          <img className="w-15 md:w-20" src={logo} alt="logo DIO" />
        )}
      </div>
      <div className="relative">
        {authentication ? (
          <>
            <i className="bi bi-list text-2xl md:text-3xl lg:hidden" onClick={() => handleMenu()}></i>
            {menu == true ? (
              <div className="absolute bg-black w-screen right-[-1rem] md:right-[-3rem] top-[150%] border-t border-[#e4105d] flex flex-col space-y-4 text-left py-4 px-4 md:px-12">
                <Input placeholder="Search..." icon="search" />
                <ItemMenu title="Live Code" />
                <ItemMenu title="Global" />
                <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name="Raphael Vitor" />
              </div>
            ) : null}
            <div className="hidden lg:flex">
              <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name="Raphael Vitor" />
            </div>
          </>
        ) : (
          <>
            <i className="bi bi-list text-2xl md:text-3xl lg:hidden" onClick={() => handleMenu()}></i>
            {menu == true ? (
              <div className="absolute bg-black w-screen right-[-1rem] md:right-[-3rem] top-[150%] border-t border-[#e4105d] flex flex-col space-y-4 text-center py-4 px-4 md:px-12">
                <ItemMenu title="Home" onClick={() => navigate("/")} />
                <Button value="Login" onClick={() => navigate("/login")} />
                <Button value="Register" onClick={() => navigate("/register")} />
              </div>
            ) : null}
            <div className="hidden lg:block space-x-4">
              <ItemMenu title="Home" onClick={() => navigate("/")} />
              <Button value="Login" onClick={() => navigate("/login")} />
              <Button value="Register" onClick={() => navigate("/register")} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
