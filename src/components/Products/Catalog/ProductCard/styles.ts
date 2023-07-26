import { styled } from '@stitches/react'

export const Container = styled('div' ,{
  width: '19rem'
})

export const Image = styled('img' ,{
  width: '19rem',
  borderRadius: '.85em'
})

export const Description = styled('h2' ,{
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.5rem',
  fontWeight: 400,
})

export const Price = styled('span', {
  fontWeight: 600,

  background: '#F5F7F9',
  padding: '.35rem 1.25rem',
  borderRadius: 80
})