import Badge from "./Badge"
import UserProfile from "./UserProfile"

function CardFeed() {
  return (
    <div className="rounded-md bg-gray-500 space-y-2">
      <img className="w-full h-30 object-cover rounded-t-md" src="https://www.pangoo.biz/wp-content/uploads/2024/04/Feed-Ingredients-1-1.jpeg" alt="" />
      <div className="p-4">
        <UserProfile image={"https://avatars.githubusercontent.com/u/63130730?v=4"} name={"Raphael Vitor"} />
        <h3 className="font-bold">Projeto para curso de HTML e CSS</h3>
        <p className="pb-4 text-sm">Projeto feito no curso de HTML e CSS no Bootcamp da DIO do Global Avanade... <a className="text-primary">Ver mais</a></p>
        <div className="space-x-2">
          <Badge value="HTML" />
          <Badge value="CSS" />
          <Badge value="JavaScript" />
        </div>
      </div>
    </div>
  )
}

export default CardFeed
