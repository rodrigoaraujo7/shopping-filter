import { styled } from '@stitches/react'

export const Container = styled('div' ,{
  width: '18rem',
})

export const Image = styled('img' ,{
  width: '17.75rem',
})

export const Description = styled('h2' ,{
  justifyContent: 'space-between',
  fontSize: '1.35rem',
  fontWeight: 400,
})

export const Price = styled('span', {
  fontSize: '1.25rem',
  fontWeight: 600,
  borderRadius: 80
})

export const Span = styled('span', {
  padding: '0 1.25rem',
  background: '#F5F7F9',
  borderRadius: 80,
  textTransform: 'lowercase'
})