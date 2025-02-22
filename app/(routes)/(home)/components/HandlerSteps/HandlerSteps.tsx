import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { HandlerStepsProps } from "./HandlerSteps.type";
import { useState } from "react";
import { useStepConfig } from "@/hooks/useStepConfig";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";
import { StepTree } from "../StepTree";

export function HandlerSteps(props: HandlerStepsProps) {
    const { onReload } = props;
    const [openDialog, setOpenDialog] = useState(true)

    const {totalSteps, step, setStep, nextStep, prevStep} = useStepConfig();

    const progressValue = (step / totalSteps) * 100;

    const onCloseDialog = () => {
        onReload(true);
        setOpenDialog(false);
    }

    return (
        <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle className="mb-3">
                { step > 1 && step < 5 && (
                    <Button variant={"outline"} className="mr-2" onClick={prevStep}>
                        <ArrowLeft />Atrás
                    </Button>
                )}
                <div className="mb-2 text-center">
                    Paso { step } de { totalSteps }
                </div>
                <Progress value={progressValue} />
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
                <div>
                    { step === 1 && <StepOne />}
                    { step === 2 && <StepTwo />}
                    { step === 3 && <StepTree />}
                    { step === 4 && (<p>Paso cuatro</p>)}
                    { step === 5 && (<p>Paso cinco</p>)}
                </div>
            </AlertDialogDescription>
            </AlertDialogHeader>
        </AlertDialogContent>
        </AlertDialog>
    )
}
