import {
  Container,
  Title,
  Flex,
  Button,
  SocialMediaList,
  SocialMediaItem,
  Icon
} from "./styles";

const Filter = () => {
  // filter categorys
  const categorys = [
    'Tops',
    'Jackets',
    'Sweaters',
    'Shoes',
    'Pants'
  ]

  const socialMedias: { name: string, icon: string, link: string }[] = [
    {
      name: 'linkedin',
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      link: 'https://www.linkedin.com/in/rodrigoleitearaujo/'
    },
    {
      name: 'github',
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      link: 'https://github.com/rodrigoaraujo7/shopping-cart'
    },
  ]

  return (
    <Container>
      <Title>Category:</Title>

      <Flex>
        {/* automatic alphabetic order */}
        {categorys.sort().map((category, index) => (
          <Button type="button" value={category} key={index} />
        ))}
      </Flex>

      <footer>
        <SocialMediaList>
          {socialMedias.map((social, index) => (
            <SocialMediaItem key={index} href={social.link} target="_blank">
              <Icon src={social.icon} alt={social.name} />
            </SocialMediaItem>
          ))}
        </SocialMediaList>
      </footer>
    </Container >
  )
}

export default Filter;