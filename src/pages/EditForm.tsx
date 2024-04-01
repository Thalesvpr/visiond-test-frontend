import React, { useEffect, useState } from "react";
import AutoTextarea from "../components/TextArea";
import OptionsComponent from "../components/Options";
import { useNavigate, useParams } from "react-router-dom";
import { getFormById, updateForm } from "../../services/FormService";
import { Form, Question, QuestionType } from "./NewForm";
import { ButtonAction, ButtonComponent, IconButtonAction } from "../components/Button";
import MiniMenu from "../components/MiniMenu";
import { FaPlus, FaXmark } from "react-icons/fa6";
import PulsingDot from "../components/PulsingDot";




const EditForm: React.FC = () => {
  const { id } = useParams();
    const [newOptions, setNewOptions] = useState<string[]>([]);
    const [formData, setFormData] = useState<Form>({
      _id: "",
      title: "",
      questions: [
      ],
    });

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchForms = async () => {
    try {
      const response = await getFormById(id!);
      setFormData(response.data);
      setIsLoading(false);
    } catch (error) {
      alert(error)
    }
  };

  fetchForms();
}, [id]);

  const navigate = useNavigate()
const onSubmit = async () => {
  await updateForm(formData)
  navigate('/forms')
};


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      title: newTitle
    }));
  };

  const handleIsActiveToggle = () => {
    const isActive = !formData.isActive
    setFormData(prevFormData => ({
      ...prevFormData,
      isActive: isActive
    }));
  };


  const handleDescriptionChange = (value: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      description: value
    }));
  };
const handleNewOptionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedNewOptions = [...newOptions];
    updatedNewOptions[index] = e.target.value;
    setNewOptions(updatedNewOptions);
  };

  const handleQuestionChange = (
    index: number,
    field: keyof Question,
    value: string | string[] | QuestionType | boolean
  ) => {
    const updatedFormData = { ...formData };
  
    if (field === "type") {
      updatedFormData.questions[index][field] = value as QuestionType;
    } else if(field === "isRequired"){
        updatedFormData.questions[index][field] = value as boolean;
    }
    else if (field === "options") {
      updatedFormData.questions[index][field] = value as string[];
    } else {
      updatedFormData.questions[index][field] = value as string;
    }
  
    setFormData(updatedFormData);
  };
  


  const addQuestion = (type: 0 | 1) => {
    let newQuestion: Question ;
    type? newQuestion = {
        type: type,
        title: "",
        description: "",
        options: [],
        isRequired: false,
    } : newQuestion = {
        type: type,
        title: "",
        description: "",
        isRequired: false,
    }
    const updatedQuestions = [...formData.questions];
    updatedQuestions.push(newQuestion)
    setFormData((prevFormData) => {
        return { ...prevFormData, questions: updatedQuestions };
      });

  }
  const deleteQuestion = (questionIndex: number) => {
    let updatedQuestions = [...formData.questions];
    updatedQuestions = updatedQuestions.filter((_,i)=>i !== questionIndex)
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: updatedQuestions,
    }));
};

  const addOption = (questionIndex: number, newOption: string) => {
    const updatedQuestions = [...formData.questions];
    const inOptions = !!updatedQuestions[questionIndex].options?.find((o)=> o == newOption)
    if(!inOptions){
     updatedQuestions[questionIndex].options?.push(newOption)
    }

    setFormData((prevFormData) => {
      return { ...prevFormData };
    });
    
  };

  const deleteOption = (questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options = updatedQuestions[questionIndex].options?.filter((_,i)=>i !== optionIndex)
  setFormData((prevFormData) => {
    return { ...prevFormData, questions: updatedQuestions };
  });
};

return (isLoading ? (

  <h1>Carregando...</h1>
  )

 :
   (
    <div className="container mx-auto">

        
      <div className="flex flex-col justify-center items-center mt-4 mb-14">
        
            <h1 className="text-2xl"> Editar Formulario </h1>
      <div className=" flex items-center w-full">
      <PulsingDot active={formData.isActive!}/> 
      <div className=" w-4"/>
        <ButtonAction onClick={handleIsActiveToggle}>{formData.isActive? "desativar" : " ativar"}</ButtonAction>
      </div>
      <div className="w-full">
        <input
                id="title"
                type="text"
                className={" border-none bg-transparent rounded-md p-4 text-2xl focus:outline-none"}
                placeholder='"Titulo"'
                onChange={handleTitleChange}
                value={formData.title}
                
              />
        <AutoTextarea value={formData.description} placehoder={'"Descrição do formulario..."'} onBlur={ (value) => {
                    handleDescriptionChange(value)
                 }
                 
                 }/>
        </div>

        {formData.questions.map((question, index) => (
          <div key={index} className="bg-trras shadow-md rounded-md p-4 w-full mb-20">
            <div className=" flex justify-between items-center">
            <input
              type="text"
              className="border-none bg-transparent rounded-md p-2 text-lg focus:outline-none"
              placeholder={`"Questão ${index + 1}"`}
              value={question.title}
              onChange={(e) =>
                handleQuestionChange(index, "title", e.target.value)
              }
            /><IconButtonAction onClick={() => deleteQuestion(index)}><FaXmark/></IconButtonAction>
            </div>
            <AutoTextarea
              placehoder={'"Texto da questão..."'}
              value={question.description}
              onBlur={(value: string) => {
                handleQuestionChange(index, "description", value);
              }}
            />

            {/* Options */}
            {question.type === 1 && (
              <>
                <OptionsComponent
                  data={question.options}
                  onChange={(value: string) => {
                    console.log(value);
                  }}
                  onDelete={(optionIndex) =>
                    deleteOption(index, optionIndex)
                  }
                />
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nova opção"
                    className="mr-4 border rounded-md p-2"
                    value={newOptions[index]}
                    // onChange={handleNewOptionChange}
                    onChange={(e) => handleNewOptionChange(index, e)}

                  />
                  <IconButtonAction
                    onClick={() => addOption(index, newOptions[index])}
                  >
                    <FaPlus/>
                  </IconButtonAction>
                </div>
              </>
            )}

            
            <div className="flex items-center mt-4">
              <p className="text-gray-500 mr-4">Obrigatório:</p>
              <input
                type="checkbox"
                checked={question.isRequired}
                onChange={(e) =>
                  handleQuestionChange(index, "isRequired", e.target.checked)
                }
              />
            </div>
          </div>
        ))}
        <hr/>
        <div className="">
                <MiniMenu>
                <ButtonAction onClick={() => addQuestion(QuestionType.MultipleChoice)}>Adcionar questão multipla escolha</ButtonAction>
        <div className=" mb-4"/>
        <ButtonAction onClick={() => addQuestion(QuestionType.Text)}>Adcionar questão discursiva</ButtonAction>
        <div className=" mb-4"/>
        <ButtonComponent onClick={onSubmit}>Concluir</ButtonComponent>
                </MiniMenu>
            </div>
      </div>
    </div>
  ))
};
export default EditForm;

