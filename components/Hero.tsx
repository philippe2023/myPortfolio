import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FlipWordsTitle } from './ui/FlipWordsTitle'
import { LinkPreviewButton } from './ui/LinkPreviewButton'

const Hero = () => {
  return (
    <section id='hero' className="pb-20 pt-36">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <FlipWordsTitle />
                <TextGenerateEffect
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Creating Innovative, Efficient, and Scalable Web Applications.'
                />
                <p className="text-center md:tracking-wider mt-6 mb-4 text-sm md:text-lg lg:text-2xl">
                    Hi, I&apos;m Jean Philippe, a Next.js & Rails Developer based in Germany.
                </p>
                <a href="#about">
                    <LinkPreviewButton />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero