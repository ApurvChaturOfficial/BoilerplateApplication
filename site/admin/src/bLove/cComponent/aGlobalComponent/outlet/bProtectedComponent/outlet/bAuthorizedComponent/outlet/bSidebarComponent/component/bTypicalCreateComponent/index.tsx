import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Form } from "@/aConnection/bShadcnConnection/components/ui/form"
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator"
import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast"

import TextInputComponent from "./component/aTextInputComponent"


type TypicalCreateComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
}

const TypicalCreateComponent = (props: TypicalCreateComponentType) => {
  // Form
  const form = useForm<z.infer<typeof extras.formSchema>>({
    resolver: zodResolver(extras.formSchema),
    mode: "onChange",
    defaultValues: extras.formDefaultValue
  })

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof extras.formSchema>) => {
    console.log(data)

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  } 
 
  // JSX
  return (
    <React.Fragment>
      {/* TypicalCreateComponent */}

      <div className="flex-1 p-4">
        <div className="mb-8" >
          <h2 className="text-3xl font-bold tracking-tight">{"Data Form One"}</h2>
          <p className="text-muted-foreground">
            {"This is just some subtitle for the data-form-one..."}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Section */}
            {extras.data.content.sections?.filter((eachSection: any) => eachSection.display)?.map((eachSection: any, indexSection: number) => eachSection.display && (
              <React.Fragment key={indexSection} >
                
                <div>
                  <h3 className="text-lg font-medium">{indexSection+1}) {eachSection.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{eachSection.subtitle}</p>
                  <Separator />
                </div>

                {/* Input */}
                <div className="space-y-8">
                  {eachSection.inputs.map((eachInput: any, indexInput: any) => (
                    <React.Fragment>

                      {/* For I/P Type: Text, Email, Number */}
                      {((eachInput.type === "text" || eachInput.type === "email" || eachInput.type === "number" || eachInput.type === "password") && 
                        <TextInputComponent key={indexInput}  form={form} eachInput={eachInput} />
                      )}

                    </React.Fragment>
                  ))}
                </div>

              </React.Fragment>
            ))}

            <Button type="submit">Create</Button>
          </form>
        </Form>

      </div>
    </React.Fragment>
  )
}

export default TypicalCreateComponent;
