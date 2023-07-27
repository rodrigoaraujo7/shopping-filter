import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '100%',
  padding: '2rem',

  backgroundColor: '#fff',
  border: '2px solid #F5F7F9',
  borderRadius: '1rem'
})

export const Title = styled('h2', {
  fontSize: '2rem',
})

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '.7rem',

  margin: '2rem 0'
})

export const FilterItem = styled('input', {
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

export const ClearFilter = styled('span', {
  cursor: 'pointer'
})