import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";

export function StepFour() {
  const { setInfoUser, nextStep , infoUser} = useStepConfig();



  const handleClick = () => {
  };


  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Cuentanos sobre ti
      </h2>
      <p className="text-center">
        Con estas preguntas personalizaremos tu experiencia inical
      </p>

      <div className="mt-6">
        <p className={`text-sm text-center animate-bounce `}>Selecciona uno para continuar</p>
        <Button 
          className="w-full bg-purple-600" 
          onClick={nextStep}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}