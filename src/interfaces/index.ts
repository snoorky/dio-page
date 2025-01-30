interface IButton {
  value: string
  color?: string
  onClick?: () => void
  isFull?: boolean
}

interface IBadge {
  value: string
}

interface IItemMenu {
  title: string
  href?: string
}

interface IProgressBar {
  value: number
}

interface IUserProfile {
  image: string
  name: string
}

interface IHeader {
  authentication?: boolean
}

interface IInput {
  name: string
  errorMessage?: string
  control?: any
  placeholder: string
  type: string
  icon?: string
}

interface IFormData {
  name?: string
  email: string;
  password: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IUser {
  id: number
  name: string
  email: string
  password: string
}

interface IAuthContext {
  user: IUser
  handleLogin: (loginData: ILoginData) => Promise<void>
  handleSignOut: () => void
}

interface IAuthContextProvider {
  children: React.ReactNode
}
