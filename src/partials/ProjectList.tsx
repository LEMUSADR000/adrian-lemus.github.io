import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Synopic"
        description="iOS app made with SwiftUI using Service Locator + MVVM + Combine as the general architecture. 
        Implements optical character recognition services to scan long-form documents and create notes using OpenAI’s
        LLM API and then stores them with Core Data. API services are made with custom REST API implemented with 
        AWS Lambda, API Gateway, and Secrets."
        link="https://apps.apple.com/us/app/synopic/id6446234665"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>Swift</Tags>
            <Tags color={ColorTags.LIME}>Core Data</Tags>
            <Tags color={ColorTags.FUCHSIA}>Combine</Tags>
            <Tags color={ColorTags.BLUE}>VisionKit</Tags>
            <Tags color={ColorTags.RED}>AWS</Tags>

          </>
        }
      />
      <Project
        name="Bluetooth Identifiers"
        description="Codification of some Assigned Numbers from Bluetooth.com which have been packaged into a Flutter package for your convenience!"
        link="https://pub.dev/packages/bluetooth_identifiers"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Dart</Tags>
            <Tags color={ColorTags.BLUE}>Flutter</Tags>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
