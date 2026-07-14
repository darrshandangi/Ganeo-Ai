import { FadeIn } from '../FadeIn';
import { Magnet } from '../Magnet';
import { ContactButton } from '../Buttons';

export const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-between overflow-hidden relative">
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {['About', 'Price', 'Projects', 'Contact'].map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center relative z-20 overflow-hidden">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] text-center mt-6 sm:mt-4 md:-mt-5">
            Hi! I'm Darrshan
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2">
        <Magnet padding={5000} strength={15} clampMaxY={0} activeTransition="transform 0.1s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Jack - 3D Creator" 
            className="w-full h-auto object-contain pointer-events-none"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
