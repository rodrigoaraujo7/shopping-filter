import { styled, keyframes } from '@stitches/react'
import * as Tooltip from '@radix-ui/react-tooltip'

export const FooterContainer = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',

  borderTop: '2px solid #F5F7F9',
  marginTop: '2rem',
  padding: '2rem 0',

  flexWrap: 'wrap',
  gap: '5rem'
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})

export const ProfilePic = styled('img', {
  width: '3.75rem',
  borderRadius: 80,
  filter: 'grayscale(100%)'
})

export const ProfileName = styled('h1', {
  fontSize: '1.75rem',
  fontWeight: 500,
  letterSpacing: '-1px',
  color: ''
})

export const SocialMediaList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  listStyle: 'none',
  padding: '1rem 0 0'
})

export const SocialMediaItem = styled('a', {
  cursor: 'pointer',
})

export const Icon = styled('img', {
  width: '2.5rem',
})

export const ResetedTrigger = styled(Tooltip.Trigger, {
  border: 0,
  background: '#fff'
})


// popup
const slideUpAndFade = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateY(2px)',
  },
  '100%': {
    opacity: '1',
    transform: 'translateY(0)',
  }
})

export const StyledTooltipContent = styled(Tooltip.Content, {
  borderRadius: '4px',
  padding: '10px 15px',
  fontSize: '.9rem',

  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  animationName: `${slideUpAndFade}`,

  backgroundColor: '#090909',
  color: '#F7F7F7'
})

export const Title = styled('h1', {
  textAlign: 'right'
})

export const TechsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  gap: '1rem'
})

export const TechImage = styled('img', {
  width: '5rem'
})