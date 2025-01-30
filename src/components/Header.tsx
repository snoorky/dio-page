import logo from "../assets/logo-dio.png"
import Button from "./Button"
import ItemMenu from "./ItemMenu"
import InputBasic from "./InputBasic"
import UserProfile from "./UserProfile"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

function Header() {
  const { user, handleSignOut } = useAuth()
  const navigate = useNavigate()

  const [menu, setMenu] = useState(false)
  const handleMenu = () => { setMenu(!menu) }

  return (
    <div className="w-full bg-black py-4 px-4 md:px-12 lg:px-20 flex items-center justify-between text-white">
      <div className="relative">
        {user.id ? (
          <div className="flex lg:space-x-4">
            <Link to={"/"}><img className="w-15 md:w-20" src={logo} alt="logo DIO" /></Link>
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <InputBasic name="search" placeholder="Search..." type="text" icon="search" />
              <ItemMenu title="Live Code" href="/feed" />
              <ItemMenu title="Global" />
            </div>
          </div>
        ) : (
          <Link to={"/"}><img className="w-15 md:w-20" src={logo} alt="logo DIO" /></Link>
        )}
      </div>
      <div className="relative">
        {user.id ? (
          <>
            <i className="bi bi-list text-2xl md:text-3xl lg:hidden" onClick={() => handleMenu()}></i>
            {menu == true &&
              <div className="absolute bg-black w-screen right-[-1rem] md:right-[-3rem] top-[150%] border-t border-[#e4105d] flex flex-col space-y-4 text-left py-4 px-4 md:px-12">
                <InputBasic name="search" placeholder="Search..." type="text" icon="search" />
                <ItemMenu title="Live Code" href="/feed" />
                <ItemMenu title="Global" />
                <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name={user.name} />
              </div>
            }
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name={user.name} />
              <Button value="Sign Out" onClick={handleSignOut} />
            </div>
          </>
        ) : (
          <>
            <i className="bi bi-list text-2xl md:text-3xl lg:hidden" onClick={() => handleMenu()}></i>
            {menu == true &&
              <div className="absolute bg-black w-screen right-[-1rem] md:right-[-3rem] top-[150%] border-t border-[#e4105d] flex flex-col space-y-4 text-center py-4 px-4 md:px-12">
                  <ItemMenu title="Home" href="/" />
                <Button value="Login" onClick={() => navigate("/login")} />
                <Button value="Register" onClick={() => navigate("/register")} />
              </div>
            }
            <div className="hidden lg:block space-x-4">
                <ItemMenu title="Home" href="/" />
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
