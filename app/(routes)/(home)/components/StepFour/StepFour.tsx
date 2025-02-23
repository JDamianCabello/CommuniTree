import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import { dataStepFourImages } from "./StepFour.data";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function StepFour() {
  const { setInfoUser, nextStep, infoUser } = useStepConfig();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [showUploadPhoto, setShowUploadPhoto] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const handleImageSelect = (src: string) => {
    setSelectedPhoto(src);
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      avatarUrl: src
    }));
  };

  const handleClick = () => {
    if (!name.trim() || !username.trim() || (!selectedPhoto && !photoUrl)) {
      toast({
        variant: "destructive",
        title: "Campos incompletos",
        description: "Por favor, completa todos los campos requeridos",
      });
      return;
    }

    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      name: name,
      username: username
    }));

    nextStep();
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Haz que te vean
      </h2>
      <p className="text-center">
        Selecciona tu imagen de perfil o sube la tuya
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-4 items-center">
        {dataStepFourImages.map(({src}) => (
          <div key={src}
            className={`flex flex-col items-center gap-2 p-1 rounded-full text-white transition-all duration-300 cursor-pointer
              ${selectedPhoto === src ? 'bg-violet-500' : 'hover:bg-violet-300'}`}
            onClick={() => handleImageSelect(src)}
          >
            <Image src={src} alt="profile_stock_image" width={300} height={300} className="h-30 w-30 rounded-full object-cover aspect-square"/>
          </div>
        ))}
        
        {photoUrl && (
          <div className={`flex flex-col items-center gap-2 p-1 rounded-full text-white transition-all duration-300 cursor-pointer
            ${selectedPhoto === photoUrl ? 'bg-violet-500' : 'hover:bg-violet-300'}`}
            onClick={() => handleImageSelect(photoUrl)}
          >
            <Image src={photoUrl} alt="profile" height={300} width={300} className="h-30 w-30 rounded-full object-cover aspect-square" />
          </div>
        )}

        {showUploadPhoto ? (
          <UploadButton 
            className="rounded-md text-slate-800 bg-slate-200 h-full"
            endpoint="profileImage"
            onClientUploadComplete={(res) => {
              const url = res?.[0].url;
              setPhotoUrl(url);
              setSelectedPhoto(url);
              setShowUploadPhoto(false);
            }}
            onUploadError={(error: Error) => {
              console.log(error);
              toast({
                variant: "destructive",
                title: "Error",
                description: "Error al subir la imagen. Inténtalo de nuevo.",
              });
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center hover:bg-slate-100 h-full rounded-full cursor-pointer border"
            onClick={() => setShowUploadPhoto(!showUploadPhoto)}
          >
            <Plus className="w-7 h-7"/>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-lg my-3 text-center">Añade tu nombre de usuario</h3>
        <div className="grid gap-4">
          <Input 
            placeholder="Nombre" 
            className="w-full" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Input 
            placeholder="Nombre de usuario"
            className="w-full" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}  
          />
        </div>
      </div>

      <div className="mt-6 md:mt-16">
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