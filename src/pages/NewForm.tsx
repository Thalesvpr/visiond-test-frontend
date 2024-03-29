import React, { useState } from "react";
import ButtonComponent from "../components/Button";
import AutoTextarea from "../components/TextArea";
import OptionsComponent from "../components/Options";


enum QuestionType {
    MultipleChoice = 0,
    Text = 1
  }
  
  interface Question {
    type: QuestionType;
    title: string;
    description?: string;
    isRequired?: boolean;
    options?: string[];
  }

interface Form {
  title: string;
  description?: string;
  questions: Question[];
  isActive?: boolean;
  createdBy?: string;
}

const NewForm: React.FC = () => {
    // const [newOption, setNewOption] = useState("");
    const [newOptions, setNewOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState<Form>({
    title: "",
    questions: [
      {
        type: 1,
        title: "",
        description: "",
        isRequired: false,
        options: []
      },
    ],
  });


//   const handleNewOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewOptions(e.target.value);
//   };
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


  return (
    <div className="container mx-auto">
        
      <div className="flex flex-col justify-center items-center mt-4 mb-14">
        <div className=" w-full mb-6">
            <h1 className="text-2xl"> Novo Formulario </h1>
        </div>
      <div className="w-full">
        <input
                id="title"
                type="text"
                className={" border-none bg-transparent rounded-md p-2 text-2xl focus:outline-none"}
                placeholder='"Titulo"'
                // +( 
                //     errors?.confirmPassword?.type === 'required' ? ' border-red-800': ' border-zinc-300')}
                // {...register('confirmPassword', {required: true,   validate: (value: string) => {
                //     if (watch('password') != value) {
                //       return "Suas senhas devem ser iguas";
                //     }
                //   },
                // }) }
                
              />
        <AutoTextarea placehoder={'"Descrição do formulario..."'} onBlur={function (value: string): void {
                     console.log(value)
                 } }/>
        </div>

        {formData.questions.map((question, index) => (
          <div key={index} className="bg-trras shadow-md rounded-md p-4 w-full mb-20">

            <input
              type="text"
              className="border-none bg-transparent rounded-md p-2 text-lg focus:outline-none"
              placeholder={`"Questão ${index + 1}"`}
              onChange={(e) =>
                handleQuestionChange(index, "title", e.target.value)
              }
            />
            <AutoTextarea
              placehoder={'"Texto da questão..."'}
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
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Nova opção"
                    className="mr-4 border rounded-md p-2"
                    value={newOptions[index]}
                    // onChange={handleNewOptionChange}
                    onChange={(e) => handleNewOptionChange(index, e)}

                  />
                  <ButtonComponent
                    onClick={() => addOption(index, newOptions[index])}
                  >
                    + Opção
                  </ButtonComponent>
                </div>
              </>
            )}

            {/* Checkbox for 'isRequired' */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-500">Obrigatório:</p>
              <input
                type="checkbox"
                checked={question.isRequired}
                // onChange={(e) =>
                //   handleQuestionChange(index, "isRequired", e.target.checked)
                // }
              />
            </div>
          </div>
        ))}
        <hr/>
            <div className="fixed bottom-0 right-0 p-4 flex flex-col justify-center">
            <ButtonComponent onClick={() => addQuestion(1)}>Adcionar questão multipla escolha</ButtonComponent>
        <div className=" mb-4"/>
        <ButtonComponent onClick={() => addQuestion(0)}>Adcionar questão discursiva</ButtonComponent>
        <ButtonComponent onClick={() => console.log(formData)}>Concluir</ButtonComponent>

        <div className=" mb-4"/>
            </div>
      </div>
    </div>
  );
};

export default NewForm;
