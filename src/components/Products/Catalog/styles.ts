import { styled } from '@stitches/react'

import { motion } from 'framer-motion'

export const CatalogContainer = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2rem',

  width: '100%',
  marginTop: '2rem',

  minHeight: '50vh'
})