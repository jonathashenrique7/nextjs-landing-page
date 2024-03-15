import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function FeatureSection () {
    return (
        <section id='feature' className='bg-slate dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py24'>
            <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
                <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
                    Tech Stack
                </h2>
                <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam fugiat, deserunt maiores illum temporibus, obcaecati ab quaerat quod, facere repudiandae? Natus, provident neque quaerat dolores repudiandae voluptatibus vel voluptatem.
                </p>
            </div>

            <div className='mx-auto grid justify-center'>

                <div className='mx-auto flex justify-center gap-2 sm:grid-cols-3 md:max-w-[64rem] md:grid-cols-3 '>
                    <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                        <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                        <svg 
                            viewBox="0 0 1024 1024" 
                            className="absolute left-1/3 top-full md:left-1/2 -z-10  h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset="1" stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                            </svg>
                            <h3 className='font-bold'>Next.js - SQL - JavaScript - GIT - MongoDB</h3>
                            <br />
                            <br />
                            <p className='text-sm text-muted-background'>
                                Seja um expert no framework full-stack mais utilizado no mundo do desenvolvimento web!
                            </p><br />
                        </div>
                    </div>
                </div>  
            </div><br /> 

            <div className='mx-auto text-center md:max-w-[58rem]'>
                <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4'>
                    Iremos desenvolver uma plataforma LMS ( Learning Management System ).
                </p>
                <Accordion type="single" collapsible className='w-full'>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>Módulo 1: Introdução</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Tudo o que você precisa para começar a desenvolver com Next.js!
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>Módulo 2: Fundamentos</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Os princípios do framework Next.js!
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>Módulo 3: Projetos</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Vamos colocar em prática todo o conhecimento absorvido ao longo das aulas!
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>Módulo 4: Mercado</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Soft skylls: Dicas sobre como encontrar as melhores vagas!
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
            
            </section>
    )
}

export default FeatureSection