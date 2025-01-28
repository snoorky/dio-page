function Button({ value, color = "default", onClick, isFull = false }) {
  const baseStyles = "py-2 px-4 rounded-md hover:opacity-70"
  const variants = {
    default: "bg-slate-600",
    primary: "bg-primary",
  }

  return (
    <button className={`${baseStyles} ${variants[color] || variants.default} ${isFull ? "w-full" : null}`} onClick={onClick}>{value}</button>
  )
}

export default Button
