import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import Image from "next/image";
import { useState } from "react";

export function StepTree() {
  const { setInfoUser, nextStep, infoUser} = useStepConfig();
  const [selected, setSelected] = useState<string>("");


  const sortedData = [...infoUser.platforms || []].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  const handleClick = () => {
    const updatedPlatforms = infoUser.platforms.map(({icon, name}) => {
      const input = document.getElementById(`${name}-input`) as HTMLInputElement;

      return {
        name,
        icon,
        link: input?.value || ""
      };
    });

    setInfoUser((prevInfoUSer) => ({
      ...prevInfoUSer,
      platforms: updatedPlatforms
    }));

    nextStep();
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Añade tus links
      </h2>
      <p className="text-center">
        Completa los campos para añadir tus enlaces
      </p>

      { sortedData.map(({icon, name, link}) => (
        <div key={name} className="flex items-center gap-2 mt-4">
          <div className="flex flex-col gap-2 items-center">
            <Image src={icon} alt={`${name}_icon`} width={40} height={40}/>
          </div>
          <input id={`${name}-input`} 
            type="text" 
            placeholder={`Usuario de ${name}`}
            className="w-full rounded-lg border p-2 text-sm"
            defaultValue={link}
            />
        </div>
      ))
      }

      <div className="mt-6">
        <Button 
          className="w-full bg-purple-600" 
          onClick={handleClick}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}