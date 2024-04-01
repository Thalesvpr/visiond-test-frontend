import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh w-full">

        <FaCheckCircle className="text-6xl text-green-500" />
      <h1 className="text-3xl font-semibold mt-4">Formulário Enviado com Sucesso!</h1>
      <p className="text-lg mt-2">Obrigado pelo seu envio.</p>
      <p className="text-lg mt-2">Agradecemos o seu feedback.</p>
      <p className="mt-20 text-sm">Crie seus proprios formularios <Link className=" hover:underline font-semibold" to={"/login"}>Faça login</Link></p>
    </div>
  );
};

export default SuccessPage;
