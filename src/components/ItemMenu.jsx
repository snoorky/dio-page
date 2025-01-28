function ItemMenu({ title, onClick }) {
  return (
    <><a className="cursor-pointer" onClick={onClick}>{title}</a></>
  )
}

export default ItemMenu
