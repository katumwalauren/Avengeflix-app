import React from 'react'
import { Box } from '@chakra-ui/layout'

import Navbar from './Navbar'

export default function PageContainer({ children }) {
  return (
    <Box maxW="200vw" minH="200vh" bg="background" color="orange">
      <Navbar />
      {children}
    </Box>
  )
}