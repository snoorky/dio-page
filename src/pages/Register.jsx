import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import Input from "../components/Input"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import api from "../services/Api";

function Register() {
  const navigate = useNavigate()

  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Insira um email válido").required("Campo obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório")
  }).required()

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const registerUser = async (formData) => {
    try {
      await api.post("/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      navigate("/login")
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
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
            <h2 className="text-xl md:text-3xl lg:text-5xl">Get started now for free</h2>
            <p className="text-gray-300 lg:text-xl">Log in and make the change.</p>
            <form className="mt-4 lg:mt-10 mb-4 lg:mb-5 space-y-2 lg:space-y-4 w-full" onSubmit={handleSubmit(registerUser)}>
              <Input control={control} errorMessage={errors?.name?.message} name={"name"} placeholder="Full Name" icon="envelope-at-fill" />
              <Input control={control} errorMessage={errors?.email?.message} name={"email"} placeholder="Email" icon="envelope-at-fill" />
              <Input control={control} errorMessage={errors?.password?.message} name={"password"} placeholder="Password" type="password" icon="lock-fill" />
              <Button value="Create my account" color="primary" isFull={true} type="submit" />
            </form>
            <div className="space-y-4">
              <p className="text-sm">By clicking on `create my account`, I declare that I accept the DIO Privacy Policies and Terms of Use.</p>
              <p className="text-sm">I already have an account. <span className="text-primary cursor-pointer" onClick={() => navigate("/login")}>Access account.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
