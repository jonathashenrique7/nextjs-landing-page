import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function FaqSection () {
    return (
        <section id='faq' className='bg-slate dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py24'>
            <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
                <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
                    FAQ
                </h2>
            </div>
            <div className='mx-auto text-center md:max-w-[58rem]'>
                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Alguma dúvida?</AccordionTrigger>
                            <AccordionContent className='text-left'>
                                Entre em contato conosco! Nossos meios de comunicação estão descritos nos próximos link's
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-1">
                            <AccordionTrigger>E-mail</AccordionTrigger>
                            <AccordionContent className='text-left'>
                                jonathas.henrique@protonmail.com
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-1">
                            <AccordionTrigger>Portifólio</AccordionTrigger>
                            <AccordionContent className='text-left'>
                                Perfil GitHub: https://github.com/jonathashenrique7
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-1">
                            <AccordionTrigger>Preço / Aula</AccordionTrigger>
                            <AccordionContent className='text-left'>
                                R$ 50,00 hora/aula
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FaqSection