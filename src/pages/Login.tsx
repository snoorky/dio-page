import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import Input from "../components/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAuth } from "../hooks/useAuth"

function Login() {
  const navigate = useNavigate()
  const { handleLogin } = useAuth()

  const schema = yup.object({
    email: yup.string().email("Email não é válido").required("Campo obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório")
  }).required()

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const onSubmit = async (formData: IFormData) => {
    handleLogin(formData)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="grow text-white grid grid-cols-1 lg:grid-cols-2 px-4 md:px-12 py-10">
        <div className="content-center text-center lg:text-left lg:content-center">
          <h3 className="text-xl md:text-4xl lg:text-6xl">The platform for you to learn from experts, master the main technologies and enter the most desired companies faster.</h3>
        </div>
        <div className="lg:flex lg:items-center lg:justify-center text-center">
          <div className="flex flex-col lg:w-lg items-center">
            <h2 className="text-xl md:text-3xl lg:text-5xl">Access your account</h2>
            <p className="text-gray-300 lg:text-xl">Log in and make the change.</p>
            <form className="mt-4 lg:mt-10 mb-4 lg:mb-5 space-y-2 lg:space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" type="text" icon="envelope-at-fill" />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" icon="lock-fill" />
              <Button isFull={true} value="Entrar" color="primary" />
            </form>
            <div className="flex justify-between w-full">
              <a>I forgot my password</a>
              <a className="text-primary cursor-pointer" onClick={() => navigate("/register")}>Create account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
