import {
  SocialMediaList,
  SocialMediaItem,
  Icon,
  ResetedTrigger,
  StyledTooltipContent
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

  return (
    <footer>
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
    </footer>
  )
}

export default Footer;