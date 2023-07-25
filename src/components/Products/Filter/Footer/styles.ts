import { styled, keyframes } from '@stitches/react'
import * as Tooltip from '@radix-ui/react-tooltip'

export const SocialMediaList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  listStyle: 'none',
  borderTop: '2px solid #F5F7F9',
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