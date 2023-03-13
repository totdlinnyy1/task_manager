import {Box, Container, Flex, Image, Text, Button} from '@mantine/core'
import {FC} from 'react'

import Header from '../../components/header/Header'

const Main: FC = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Flex justify='space-between'>
          <Box>
            <Text mb={10}>Какая-то информация</Text>
            <Button.Group orientation='vertical'>
              <Button mb={10}>Регистрация</Button>
              <Button variant='subtle' compact uppercase>
                О приложении
              </Button>
            </Button.Group>
          </Box>
          <Box>
            <Image
              height='500px'
              src='https://krot.info/uploads/posts/2022-03/1646169088_48-krot-info-p-kot-prikol-smeshnie-foto-53.jpg'
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Main
