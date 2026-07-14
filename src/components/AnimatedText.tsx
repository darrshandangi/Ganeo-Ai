import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character = ({ char, progress, range }: { char: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');

  let charCount = 0;
  const totalChars = text.replace(/\s/g, '').length;

  return (
    <p ref={containerRef} className={className} style={{ wordWrap: 'break-word', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '0.3em', rowGap: '0.2em' }}>
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-flex">
            {word.split('').map((char, j) => {
              const start = charCount / totalChars;
              const end = (charCount + 1) / totalChars;
              charCount++;
              return (
                <Character 
                  key={j} 
                  char={char} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
