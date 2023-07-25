import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '20rem',
  padding: '2rem',

  border: '2px solid #F5F7F9',
  borderRadius: '1rem'
})

export const Title = styled('h2', {
  fontSize: '2rem',
})

export const Flex = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.7rem',

  margin: '2rem 0'
})

export const Button = styled('input', {
  padding: '.85rem',
  fontSize: '.85rem',

  backgroundColor: '#F5F7F9',
  border: 0,
  borderRadius: '.35rem',

  cursor: 'pointer',
  transition: '.25s',

  '&:hover': {
    backgroundColor: '#DDDDDD'
  },

  '&:focus': {
    backgroundColor: '#DDDDDD',
  },
})

export const SocialMediaList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  gap: '1rem',

  borderTop: '2px solid #F5F7F9',
  padding: '1rem 0 0'
})

export const SocialMediaItem = styled('a', {
  cursor: 'pointer',
})

export const Icon = styled('img', {
  width: '2.5rem',
})