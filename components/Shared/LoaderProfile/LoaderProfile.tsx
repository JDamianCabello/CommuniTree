import React from 'react';
import { AlertCircle, LoaderCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function LoaderProfile() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-6">
      <div className="relative">
        <LoaderCircle className="animate-spin h-12 w-12 text-gray-800" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gray-100 animate-pulse" />
      </div>
      
      <Alert variant="default" className="w-full max-w-md border-gray-200 bg-gray-50">
        <AlertCircle className="h-4 w-4 text-gray-800" />
        <AlertDescription className="ml-2 text-gray-800">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Estamos preparando tu espacio personal</p>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-800 animate-pulse"/>
                <span>Cargando tus datos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-600 animate-pulse delay-100"/>
                <span>Sincronizando tus links</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-pulse delay-200"/>
                <span>Preparando tu perfil</span>
              </div>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default LoaderProfile;