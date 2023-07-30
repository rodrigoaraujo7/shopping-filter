import {
  FooterContainer,
  ProfileContainer,
  ProfilePic,
  ProfileName,
  SocialMediaList,
  SocialMediaItem,
  Icon,
  ResetedTrigger,
  StyledTooltipContent,
  Title,
  TechsContainer,
  TechImage
} from './styles'

import * as Tooltip from '@radix-ui/react-tooltip'

const Footer = () => {
  const socialMedias: { name: string, icon: string, link: string }[] = [
    {
      name: 'Linkedin',
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      link: 'https://www.linkedin.com/in/rodrigoleitearaujo/'
    },
    {
      name: 'Github',
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      link: 'https://github.com/rodrigoaraujo7/shopping-cart'
    },
  ]

  const techs: string[] = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  ]

  return (
    <FooterContainer>
      <div>
        <ProfileContainer>
          <ProfilePic src="https://avatars.githubusercontent.com/u/53542838?v=4" alt="" />
          <ProfileName>Rodrigo Leite Araujo</ProfileName>
        </ProfileContainer>
        <SocialMediaList>
          {socialMedias.map((social, index) => (
            <Tooltip.Provider delayDuration={0} key={index}>
              <Tooltip.Root>
                {/* social media icon */}
                <ResetedTrigger>
                  <SocialMediaItem href={social.link} target="_blank">
                    <Icon src={social.icon} alt={social.name} />
                  </SocialMediaItem>
                </ResetedTrigger>

                {/* hover popup -> show the social media name */}
                <Tooltip.Portal>
                  <StyledTooltipContent side="bottom">
                    {social.name}
                    <Tooltip.Arrow style={{ fill: '#101010' }} />
                  </StyledTooltipContent>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </SocialMediaList>
      </div>

      <div>
        <Title>Techs used:</Title>
        <TechsContainer>
          {techs.map((tech, index) => (
            <TechImage src={tech} alt='tech image' key={index} />
          ))}
        </TechsContainer>
      </div>
    </FooterContainer>
  )
}

export default Footer;