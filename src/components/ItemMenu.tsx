import { Link } from "react-router-dom";

function ItemMenu({ title, href = "#" }: IItemMenu) {
  return (
    <Link to={href} className="cursor-pointer text-white">{title}</Link>
  );
}

export default ItemMenu;
