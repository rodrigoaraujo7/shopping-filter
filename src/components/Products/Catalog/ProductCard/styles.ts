import { styled } from '@stitches/react'

export const Container = styled('div' ,{
  width: '18rem',
  border: '2px solid #F5F7F9',
  borderRadius: '.75rem'
})

export const Image = styled('img' ,{
  width: '17.75rem',
  borderRadius: '.85em'
})

export const Description = styled('h2' ,{
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.5rem',
  fontWeight: 400,
  padding: '0 1rem'
})

export const Price = styled('span', {
  fontWeight: 600,
  borderRadius: 80
})

export const Span = styled('span', {
  padding: '0 1.25rem',
  margin: '1rem',
  background: '#F5F7F9',
  borderRadius: 80,
  textTransform: 'lowercase'
})