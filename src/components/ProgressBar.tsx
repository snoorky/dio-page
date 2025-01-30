function ProgressBar({ value }: IProgressBar) {
  const style = `relative rounded-md h-2`

  return (
    <div className={`${style} w-full bg-slate-700`}>
      <div className={`${style} bg-green-700`} style={{ width: `${value}%` }}></div>
    </div>
  )
}

export default ProgressBar
