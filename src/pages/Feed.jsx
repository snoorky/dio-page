import CardFeed from "../components/CardFeed"
import Header from "../components/Header"
import ProgressBar from "../components/ProgressBar"
import UserProfile from "../components/UserProfile"

function Feed() {
  return (
    <div className="w-screen h-full lg:h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="space-y-10 text-white grid grid-cols-1 lg:grid-cols-4 px-4 md:px-12 py-10 lg:gap-10">
        <div className="lg:col-span-3">
          <h1 className="text-xl md:text-2xl lg:text-4xl">Feed</h1>
          <div className="mt-4 lg:mt-10 gap-4 lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
            <CardFeed />
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-xl lg:text-2xl"># TOP 5 Ranking of the Week</h2>
          <div className="mt-4 lg:mt-10 space-y-6 md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-1">
            <div className="space-y-2">
              <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name="Raphael Vitor" />
              <ProgressBar value={10} />
            </div>
            <div className="space-y-2">
              <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name="Raphael Vitor" />
              <ProgressBar value={80} />
            </div>
            <div className="space-y-2">
              <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name="Raphael Vitor" />
              <ProgressBar value={30} />
            </div>
            <div className="space-y-2">
              <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name="Raphael Vitor" />
              <ProgressBar value={70} />
            </div>
            <div className="space-y-2">
              <UserProfile image="https://avatars.githubusercontent.com/u/63130730?v=4" name="Raphael Vitor" />
              <ProgressBar value={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
