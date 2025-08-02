import { useEffect, useState } from 'react';
import '@/components/layout/Hero/Hero.scss';
import FloatingIcons from '@/components/layout/Hero/Icons/Floating';
import ProfileImage from '@/assets/img/profile.png';

const subtitleText = `
Part designer, part developer, all heart.
I build digital experiences that feel warm, curious, and quietly clever.
I believe good design doesn't just work — it feels like home.
`;

export default function Hero() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="Hero section">
      <FloatingIcons />
      <div className={`glow-border${hasLoaded ? ' show' : ''}`}>
        <div className={`hero-content${hasLoaded ? ' show' : ''}`}>
          <img
            className={`hero-image${hasLoaded ? ' show' : ''}`}
            src={ProfileImage}
            alt="Portrait of Katarina"
            loading="eager"
          />

          <div className="hero-text">
            <div className={`hero-text-inner${hasLoaded ? ' show' : ''}`}>
              <h1 className="hero-title">
                {hasLoaded && (
                  <>
                    {"Hi, I'm ".split('').map((char, i) => (
                      <span key={i} style={{ animationDelay: `${i * 50}ms` }}>
                        {char}
                      </span>
                    ))}
                    <span className="highlighted-name">Katarina</span>
                  </>
                )}
              </h1>

              <p className="hero-subtitle">
                {subtitleText
                  .trim()
                  .split('\n')
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
