import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";

export function InitialStep() {
  const { nextStep} = useStepConfig();


  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Cuentanos sobre ti
      </h2>
      <p className="text-center">
        Con estas preguntas personalizaremos tu experiencia inical
      </p>

      <div className="mt-6">
        <Button 
          className="w-full bg-purple-600" 
          onClick={() => nextStep()}
        >
          ¡Vamos a ello!
        </Button>
      </div>
    </div>
  );
}