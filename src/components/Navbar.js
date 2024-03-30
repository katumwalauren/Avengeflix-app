import React from 'react'
import { HStack, Text } from '@chakra-ui/layout'
import SearchMovie from './SearchMovie'

export default function Navbar() {
  return (
    <HStack
      px={5}
      py={2}
      mb={4}
      justifyContent="space-between"
      borderBottom="1px solid blue"
    >
      <a href="/">
        <Text
          fontSize="2xl"
          fontWeight="medium"
          letterSpacing="1px"
          color="blue"

        >
          Avengeflix
        </Text>
      </a>
      <SearchMovie />
    </HStack>
  )
}