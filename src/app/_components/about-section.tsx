import Image from "next/image"
import Link from "next/link"
import { InstagramIcon, GitHubIcon, YoutTubeIcon, LinkedInIcon } from '@/components/social-icons'

function SocialLink({ icon: Icon, ...props }: any) {
    return (
        <Link className='group -m-1 p-1' { ...props }>
            <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400' />
        </Link>
    )
}

function AboutSection () {
    return (
        <section id="about" className='container flex flex-col md:max-w-[64rem] md:max-w-[64rem] md:py-12 lg:py-24'>
            <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]'>
                <div className='lg:pl-20 flex justify-center'>
                    <div className='max-w-xs px-2.5 lg:max-w-none'>
                        <Image 
                            src='/next.jpg' 
                            alt='Jonathas Henrique Pocidonio' 
                            width={400} 
                            height={400} 
                            quality='95' 
                            priority={true} 
                            className='aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bh-zinc object-cover' 
                        />
                    </div>
                </div>
                <div className='order-first lg:row-span-2 text-center md:text-start'>
                    <h1 className='font-heading text-3xl md:text-4xl lg:text-5xl'>
                        <strong>Jonathas H. Pocidonio</strong>
                    </h1><br />
                    <span className='mt-6 text-base text-muted-foreground'>
                        Desenvolvedor full stack:
                    </span>&nbsp;
                    <p className='mt-6 text-base'>
                        Entusiasta do mundo da tecnologia, já prestei serviços para algumas empresas que atendem todo o território nacional. Sempre busco aprender mais e me manter à frente das tendências do mercado. A programação de computadores é com certeza uma importante parte de minha vida!
                    </p>

                    <div className='mt-6 flex justify-center md:justify-start gap-6'>
                        <SocialLink href='https://github.com/jonathashenrique7' icon={GitHubIcon} target="_blank" />
                        <SocialLink href='https://linkedin.com' icon={LinkedInIcon} target="_blank" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
