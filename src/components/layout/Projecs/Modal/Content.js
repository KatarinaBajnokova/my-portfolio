import koyekolaLogo from '@/assets/koyekola/logo.png';
import koyekolaMascot from '@/assets/koyekola/mascot.png';
import koyekolaPalette from '@/assets/koyekola/design.png';
import wordsearchVideo from '@/assets/koyekola/wordsearch.mp4';
import wordsearchJSX from '@/assets/koyekola/WordSearchGame.jsx?raw';
import wordsearchSass from '@/assets/koyekola/WordSearchGame.scss?raw';

export default function getModalPages(project) {
  if (!project) {
    console.warn('Project data is missing');
    return [];
  }

  const { title } = project;

  switch (title) {
    case 'Koyekola':
      return [
        {
          title: 'Koyekola',
          content: `
            Koyekola is a personal project that I worked on during my free time. 
            It was driven by my frustration that there are so few interactive resources 
            available for children to learn Lingala, a language that is close to my heart. 
            I wanted to create a fun, engaging platform to help children learn Lingala through 
            interactive games and cultural stories. To keep the development process simple and 
            the platform easily deployable, I decided not to use a backend. 
          `,
          images: [
            { src: koyekolaLogo, size: 'medium' },
            { src: koyekolaMascot, size: 'medium' },
          ],
        },
        {
          title: 'Branding & UI Design',
          content: `
            Before diving into development, I designed Koyekola in Figma to establish 
            its visual identity and layout system. The color palette uses soft pastel tones 
            to evoke warmth and joy. Typography was chosen to balance clarity with playfulness. 
            I also used Figma’s auto layout to create responsive components for seamless development.
          `,
          images: [{ src: koyekolaPalette, size: 'large' }],
        },
        {
          title: 'Development',
          content: `
            The mini-games were developed using modular React components and SCSS modules. 
            Below you can explore the word search game through a video demo and its full source code.
          `,
          images: [],
          tabs: [
            {
              label: 'Preview',
              type: 'video',
              src: wordsearchVideo,
            },
            {
              label: 'JSX Code',
              type: 'code',
              language: 'jsx',
              content: wordsearchJSX,
            },
            {
              label: 'Sass Styles',
              type: 'code',
              language: 'scss',
              content: wordsearchSass,
            },
          ],
        },
      ];

    case 'Guess Redesign':
      return [
        {
          title: 'Guess Redesign',
          content: `
            A modern UI/UX redesign of the Guess website with a strong emphasis 
            on denim storytelling, eco-conscious fashion, and inclusive accessibility for all devices.
          `,
        },
        {
          title: 'Branding',
          content: `
            The new Guess design repositions denim as a lifestyle statement, 
            using soft typographic accents and immersive visuals.
          `,
        },
        {
          title: 'Development',
          content: `
            Built as a responsive concept with Figma prototypes and 
            story-driven user flows, focusing on the denim-wearer's journey.
          `,
        },
      ];

    case 'Sentora':
      return [
        {
          title: 'Sentora',
          content: `
            An inclusive music visualization app for the deaf community. 
            Sentora transforms sound into vibrations, lights, and abstract visual art 
            to create a multi-sensory musical experience.
          `,
        },
        {
          title: 'Branding',
          content: `
            Sentora’s branding is inspired by fluid motion and synesthetic textures, 
            with a calming palette and abstract sound waves.
          `,
        },
        {
          title: 'Development',
          content: `
            Developed using Web Audio API, React, and custom shaders, 
            with accessibility and inclusivity built in from the start.
          `,
        },
      ];

    case 'Rouge':
      return [
        {
          title: 'Rouge',
          content: `
            Rouge is a giftbox webshop built in collaboration with a classmate. 
            It allows users to create personalized boxes with add-ons like messages, 
            wrapping, and custom checkout flows.
          `,
        },
        {
          title: 'Branding',
          content: `
            Rouge uses a warm romantic theme with French-inspired serif fonts 
            and soft red hues symbolizing intimacy and attention.
          `,
        },
        {
          title: 'Development',
          content: `
            Built with React and SCSS on the frontend and PHP + SQLite on the backend, 
            following a modular sprint-based development structure.
          `,
        },
      ];

    default:
      return [
        {
          title: title || 'Untitled Project',
          content: 'This project has no description yet.',
        },
      ];
  }
}
