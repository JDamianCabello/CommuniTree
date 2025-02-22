import { Button } from "@/components/ui/button";
import { stepOneData } from "./StepOne.data";
import { useStepConfig } from "@/hooks/useStepConfig";
import { useEffect, useState } from "react";

export function StepOne() {
  const { setInfoUser, nextStep , infoUser} = useStepConfig();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if(infoUser?.typeUser !== ""){
      setSelected(infoUser.typeUser);
    }
  }, []);


  const handleClick = (value: string) => {
    setSelected(value);
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      typeUser: value
    }));
  };


  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Cuentanos sobre ti
      </h2>
      <p className="text-center">
        Con estas preguntas personalizaremos tu experiencia inical
      </p>

      <div className="grid grid-cols-1 gap-2 mt-4">
        {stepOneData.map((data) => (
          <div 
            key={data.title} 
            className={`flex flex-col items-center rounded-full border py-2
              hover:bg-gray-200 transition-all duration-300 cursor-pointer
              ${selected === data.value ? "bg-purple-900 hover:bg-purple-900 text-white" : ""}`}
            onClick={() => handleClick(data.value)}
          >
            {data.title}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className={`text-sm text-center animate-bounce ${!selected ? "" : "hidden"}`}>Selecciona uno para continuar</p>
        <Button 
          className="w-full bg-purple-600" 
          onClick={nextStep}
          disabled={!selected}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}