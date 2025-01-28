function Badge({ value }) {
  const languages = {
    HTML: "bg-[#E44D26]",
    CSS: "bg-[#1572B6]",
    JavaScript: "bg-[#C79A2F]",
  }

  return (
    <button className={`text-sm rounded-md py-1 px-2 ${languages[value]}`}>{value}</button>
  )
}

export default Badge
