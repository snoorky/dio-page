import { Controller } from "react-hook-form"

function Input({ name, errorMessage, control, icon, placeholder, type, ...rest }: IInput) {
  return (
    <div className="py-2 px-4 rounded-md bg-slate-400 flex items-center space-x-2">
      {icon && <i className={`bi bi-${icon} text-gray-700`}></i>}
      {control && (
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <input {...field} {...rest} className="w-full text-gray-700 placeholder:text-gray-700 outline-none" placeholder={placeholder} type={type} />
          )}
        />
      )}
      {errorMessage && (
        <div className="relative">
          <i className="text-red-600 bi bi-exclamation-circle-fill"></i>
          <p className="absolute right-5 top-0 bottom-0 flex items-center p-1 bg-red-600 text-nowrap rounded-md text-[0.5rem]">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

export default Input
