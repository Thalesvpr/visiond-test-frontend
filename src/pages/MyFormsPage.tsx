import React, { useState, useEffect } from "react";
import { getUserName } from "../../services/AuthService";
import { getAllForms } from "../../services/FormService";
import PulsingDot from "../components/PulsingDot";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/Button";

const MyFormsPage: React.FC = () => {
  const baseUrl = window.location.origin;
  const [forms, setforms] = useState([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchforms = async () => {
      const response = await getAllForms();
      setforms(response.data);
    };

    fetchforms();
  }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      const user = getUserName()
      setUserName(user!);
    };

    fetchUserName();
  }, []);

  const handleFormClick = (formId: string) => {
    navigate(`/edit/${formId}`,);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl">👋 Olá, {userName}!</h1>
        <ButtonComponent onClick={() => navigate('/new')}>
          + Novo Formulário
        </ButtonComponent>
      </div>

      {forms.length === 0 ? (
        <p className="text-zinc-500 bg- text-center mt-8">Você não possui nenhum formulário</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-8">
          {forms.map((form: any) => (
            <div
              key={form._id}
              className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between hover:border-zinc-600 border border-transparent transition duration-300 cursor-pointer"
              onClick={() => handleFormClick(form._id)}
            >
              <div>
                <h2 className="text-xl">{form.title}</h2>
                <p className="text-zinc-700 mb-2 overflow-ellipsis">{form.description}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <a className="text-sm hover:underline" href={`${baseUrl}/answer/${form._id}`}>{`${baseUrl}/answer/${form._id}`}</a>
                <p className="text-zinc-500">Respostas: {form.numeroRespostas}</p>
                <PulsingDot active={form.isActive}/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFormsPage;
