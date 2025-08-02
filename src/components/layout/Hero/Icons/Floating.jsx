import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiFigma,
  SiAdobeillustrator,
  SiGithub,
  SiPython,
} from 'react-icons/si';
import { TbBrandMantine } from 'react-icons/tb';

import './Floating.scss';

export default function FloatingIcons() {
  const icons = [
    { icon: SiHtml5, className: 'icon-1' },
    { icon: SiCss3, className: 'icon-2' },
    { icon: SiJavascript, className: 'icon-3' },
    { icon: SiReact, className: 'icon-4' },
    { icon: SiSass, className: 'icon-5' },
    { icon: SiFigma, className: 'icon-6' },
    { icon: SiAdobeillustrator, className: 'icon-7' },
    { icon: SiGithub, className: 'icon-8' },
    { icon: TbBrandMantine, className: 'icon-9' },
    { icon: SiPython, className: 'icon-10' },
  ];

  return (
    <div className="floating-icons">
      {icons.map(({ icon, className }, i) => {
        const Icon = icon;
        return (
          <div key={i} className={`floating-icon ${className}`}>
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
