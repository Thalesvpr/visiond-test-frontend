
import { useForm } from "react-hook-form";
import { login, logout } from "../../services/AuthService";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {

  logout()
const {register, handleSubmit, formState: {errors}} = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    await login(data.email, data.password);
    navigate('/forms');


    
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-md shadow-md w-full max-w-md">
          <h1 className=" text-3xl font-semibold mb-4">Entre com sua conta</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className={"block  font-medium mb-2"+( errors?.email?.type === 'required' ? ' text-red-700': ' text-zinc-700')}

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

                className={"block  font-medium mb-2"+( errors?.email?.type === 'required' ? ' text-red-700': ' text-zinc-700')}

              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                className={"border  rounded-md p-2 w-full"+( errors?.email?.type === 'required' ? ' border-red-800': ' border-zinc-300')}
                {...register('password', {required: true})}
              />
            </div>
            <button
              type="button"
              className="bg-zinc-600 text-white font-bold rounded-full p-2 w-full mb-6 hover:bg-zinc-800"
              onClick={() => handleSubmit(onSubmit)()}
            >
              Entrar
            </button>
            <a
              href="#"
              className="text-zinc-600 font-medium hover:underline mb-4"
            >
              Esqueçeu sua senha?
            </a>
          </form>
          <p className="text-center mt-4">
            Ainda não possui uma conta?{" "}
            <Link to="/register" className="text-zinc-600 font-medium">
              Cadastre-se ja!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
