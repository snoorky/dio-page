import Button from "./components/Button"
import Header from "./components/Header"
import banner from "./assets/banner.png"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="grow text-white grid grid-cols-1 lg:grid-cols-2 px-4 md:px-12 py-10">
        <div className="space-y-4 text-center lg:text-left lg:content-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl"><span className="text-primary block">Implement</span> your global future now</h1>
          <p className="md:text-xl">Master the technologies used by the most innovative companies in the world and face your new professional challenge, evolving in a community with the best experts.</p>
          <Button value="Start now" color="primary" onClick={() => navigate("/login")} />
        </div>
        <div className="lg:content-center">
          <img src={banner} alt="application banner" />
        </div>
      </div>
    </div>
  )
}

export default App
