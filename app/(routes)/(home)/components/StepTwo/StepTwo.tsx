import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import { stepTwoData } from "./StepTwo.data";
import Image from "next/image";
import { useState } from "react";

export function StepTwo() {
  const { setInfoUser, nextStep, infoUser } = useStepConfig()

  const sortedData = [...stepTwoData].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(
    infoUser?.platforms?.map((platform) => platform.name) || []
  )

  const handleSelectedPlatform = (platform: string) => {
    setSelectedPlatforms((prevSelected) => {
      // Eliminar la seleccionada si ya estaba (hacer click sobre una que ya estaba)
      if(prevSelected.includes(platform)){
        return prevSelected.filter((item) => item !== platform)
      }else{
        return[...prevSelected, platform]
      }
    })
  }

  const handleContinue = () => {
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      platforms: stepTwoData.filter(({name}) => 
        selectedPlatforms.includes(name)
      ),
    }));

    nextStep();
  }

  return(
    <div>      
      <h2 className="text-center font-semibold text-2xl">¿Qué plataformas utilizas?</h2>
      <p className="text-center">
        Indica a otros usuarios en que redes pueden encontrarte
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-4">
        { sortedData.map(({icon, name}) => (
          <div key={name}
          className={`flex flex-col gap-1 items-center rounded-lg py-3 hover:via-violet-300 
          transition-all duration-200 cursor-pointer
          ${selectedPlatforms.includes(name) ? "bg-purple-900 text-white" : ""}
          `}
          onClick={() => handleSelectedPlatform(name)}>
            <Image src={icon} alt={`${name}_icon`} width={40} height={40} />
            <p className="text-sm">{ name }</p>
          </div>
        )) }
      </div>

      <div className="mt-6">
        <p className={`text-sm text-center animate-bounce ${selectedPlatforms.length === 0 ? "" : "hidden"}`}>Selecciona al menos una para continuar</p>
        <Button className="w-full bg-purple-600"
        onClick={handleContinue}
        disabled={selectedPlatforms.length === 0}>
          Continuar
        </Button>
      </div>
    </div>
  );
}