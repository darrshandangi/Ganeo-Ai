export const ContactButton = ({ className = '' }: { className?: string }) => {
  return (
    <button 
      className={`rounded-full text-white font-medium uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{
        padding: '12px 32px',
        fontSize: '12px',
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '1.5px solid white',
        outlineOffset: '-4px'
      }}
    >
      Contact Me
    </button>
  );
};

export const LiveProjectButton = ({ className = '' }: { className?: string }) => {
  return (
    <button 
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors ${className}`}
    >
      Live Project
    </button>
  );
};
