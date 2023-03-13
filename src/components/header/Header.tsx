import {
  Box,
  Container,
  Flex,
  Header as MHeader,
  Text,
  Button
} from '@mantine/core'
import {FC} from 'react'

const Header: FC = () => {
  return (
    <Box pb={120}>
      <MHeader bg='gray.3' height={60}>
        <Container h={60}>
          <Flex justify='space-between' align='center' h={60}>
            <Box p={5} sx={{border: '1px solid black'}}>
              <Text>Лого</Text>
            </Box>
            <Button>Войти</Button>
          </Flex>
        </Container>
      </MHeader>
    </Box>
  )
}

export default Header
