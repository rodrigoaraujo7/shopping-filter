import { styled } from '@stitches/react'

import { motion } from 'framer-motion'

export const Container = styled('div', {
  width: '100%',

  backgroundColor: '#fff',
  borderRadius: '1rem',
})

export const Title = styled(motion.h2, {
  fontSize: '2rem',
})

export const Flex = styled(motion.ul, {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '.7rem',
  listStyle: 'none',

  margin: '2rem 0'
})

export const FilterItem = styled(motion.input, {
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

export const ClearFilter = styled(motion.span, {
  cursor: 'pointer'
})