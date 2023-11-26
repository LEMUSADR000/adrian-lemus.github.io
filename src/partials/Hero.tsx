import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Adrian</GradientText> 👋
        </>
      }
      description={
        <>
          Mobile application developer with{' '}
          <a className="text-cyan-400 hover:underline" href="/">
           four years
          </a>{' '}
          of full-time experience primarily in delivering applications 
          requiring high output data transfers to and from peripherals 
          and cloud systems.{'\n'}
          I am particularly interested in integrating the up-and-coming
          LLM models with the capabilities of mobile apps.{'\n'}
          <a className="text-cyan-400 hover:underline" href="/">
          Let's talk about it!
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/adrian-lemus-0a8aa0158/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
