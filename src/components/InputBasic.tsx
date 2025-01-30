function InputBasic({ name, icon, placeholder, type }: IInput) {
  return (
    <div className="py-2 px-4 rounded-md bg-slate-400 flex items-center space-x-2">
      {icon && <i className={`bi bi-${icon} text-gray-700`}></i>}
      <input className="w-full text-gray-700 placeholder:text-gray-700 outline-none" placeholder={placeholder} type={type} />
    </div>
  )
}

export default InputBasic
