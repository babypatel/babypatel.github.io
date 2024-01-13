import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Community Service/Extracurriculars - Saj Patel</title>
        <meta
          name="description"
          content="Here is a list of my community service involvements and some of my current and past extracurriculars."
        />
      </Head>
      <SimpleLayout
        title="Community Service and Extracurriculars"
        intro="Here is a list of my community service involvements and some of my current and past extracurriculars."
      >
        <div className="space-y-20">
          <SpeakingSection title="Involvements -">
            <Appearance
              href="https://em5flyhigh.org/"
              title="EM5 Fly High Foundation"
              description="The EM5 Fly Foundation was created to honor the short life and big heart of 15-year-old Evan Melau. They have donated more than 20k to the community in the form of giving Christmas gifts to the less fortunate and covering sports equipment fees."
              event="Community Service - Volunteer - 40+ hours"
              cta=""
            />
            <Appearance
              href="https://habitatillinois.org/"
              title="Habitat for Humanity"
              description="I would volunteer to help build homes to support the foundations message of eliminating substandard housing through construction."
              event="Community Service - Volunteer - 20+ hours
              cta=""
            />
            <Appearance
              href="https://saturdaymorningphysics.fnal.gov/"
              title="Fermilab Saturday Morning Physics"
              description="Every Saturday morning for 11 weeks Fermilab would host a meeting for high schoolers aimed to further their understanding of physics and display and explain their current research."
              event="Extracurricular - Member"
              cta=""
            />
            <Appearance
              href="https://wyse.engineering.illinois.edu/summer-camps/electrical-engineering/"
              title="UIUC ECE Summer Camp"
              description="Virtual Summer Camp during COVID where I learned what ECE majors do and some of the basic topics of both Electrical and Computer Engineering"
              event="Extracurricular - 35+ hours"
              cta=""
            />
          </SpeakingSection>
          {/* <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
