function UserProfile({ image, name }: IUserProfile) {
  return (
    <div className="flex items-center space-x-2">
      <img className="w-15 rounded-full border-3 border-gray-300" src={image} alt={name} />
      <h3 className="text-lg">{name}</h3>
    </div>
  )
}

export default UserProfile
