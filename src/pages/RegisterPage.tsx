
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { registerUser } from './../../services/RegisterService';


const RegisterPage: React.FC = () => {

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, watch } = useForm()
  const onSubmit = async (data: any) => {

    await registerUser(data.name, data.email, data.password)
    navigate('/login')
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-4">Crie sua conta</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-zinc-700 font-medium mb-2"
              >
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                
                className={"border  rounded-md p-2 w-full"+( errors?.name?.type === 'required' ? ' border-red-800': ' border-zinc-300')}
                {...register('name', {required: true})}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-zinc-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={"border  rounded-md p-2 w-full"+( errors?.email?.type === 'required' ? ' border-red-800': ' border-zinc-300')}
                {...register('email', {required: true})}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-zinc-700 font-medium mb-2"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                className={"border  rounded-md p-2 w-full"+( errors?.password?.type === 'required' ? ' border-red-800': ' border-zinc-300')}
                {...register('password', {required: true})}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-zinc-700 font-medium mb-2"
              >
                Confirmação de senha
              </label>
              <input
                id="confirm-password"
                type="password"
                className={"border  rounded-md p-2 w-full"+( errors?.confirmPassword?.type === 'required' ? ' border-red-800': ' border-zinc-300')}
                {...register('confirmPassword', {required: true,   validate: (value: string) => {
                    if (watch('password') != value) {
                      return "Suas senhas devem ser iguas";
                    }
                  },}) }
                
              />
              <p className=" text-sm text-red-700"> { errors?.confirmPassword?.message && errors?.confirmPassword?.message.toString()}</p>
                  
            </div>
            <button
              type="button"
              className="bg-zinc-600 text-white font-bold rounded-full p-2 w-full mb-6 hover:bg-zinc-800"
              onClick={()=>handleSubmit(onSubmit)()}
            >
              Criar conta
            </button>
          </form>
          <p className="text-center mt-4">
  Já tem uma conta?{" "}
  <Link to="/login" className="text-zinc-600 font-medium">
    Faça login
  </Link>
</p>
</div>
      </div>
    </>
  );
};

export default RegisterPage;
