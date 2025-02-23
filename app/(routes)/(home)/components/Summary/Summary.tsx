import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import { SummaryProps } from "./Summary.types";
import Image from "next/image";

export function Summary(props: SummaryProps) {
  const { onReload } = props;

  const { nextStep, infoUser} = useStepConfig();
  const {avatarUrl, name, username, typeUser, platforms} = infoUser;


  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        ¡Tu CommuniTree esta listo!
      </h2>
      <p className="text-center">
        Es hora de compartirlo con el mundo.
      </p>

      <div className="relative">
        <div className="flex justify-center mt-4">
          <Image src={avatarUrl} alt="user_avatar" width={120} height={120} 
          className="rounded-full border-4 border-white shadow-xl object-cover aspect-square" />
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm font-semibold text-gray-500">@{username}</p>
          <p className="text-sm font-semibold text-gray-400">{typeUser}</p>
        </div>
        <div className="space-y-3 mt-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center gap-2">
              <Image src={platform.icon} alt={`${platform.name}_icon`} width={25} height={25} />
              <p className="text-sm font-medium text-gray-700">{platform.name}</p>
            </div>
          ))}
        </div>
      </div>



      <div className="mt-6">
        <Button 
          className="w-full bg-purple-600" 
          onClick={onReload}
        >
          Continuar a tu perfil
        </Button>
      </div>
    </div>
  );
}