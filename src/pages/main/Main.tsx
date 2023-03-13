import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Button,
  Modal,
  Tabs
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {FC} from 'react'

import Header from '../../components/header/Header'

const Main: FC = () => {
  const [opened, {open, close}] = useDisclosure(false)
  return (
    <Box>
      <Modal opened={opened} onClose={close} title='О приложении'>
        <Tabs variant='pills' radius='xs' defaultValue='default' inverted>
          <Tabs.Panel value='default' pt='xs'>
            Информация для участника
          </Tabs.Panel>

          <Tabs.Panel value='manager' pt='xs'>
            Информация для менеджера
          </Tabs.Panel>
          <Tabs.List grow>
            <Tabs.Tab value='default'>Участник</Tabs.Tab>
            <Tabs.Tab value='manager'>Менеджер</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Modal>
      <Header />
      <Container>
        <Flex justify='space-between'>
          <Box>
            <Text mb={10}>Какая-то информация</Text>
            <Button.Group orientation='vertical'>
              <Button mb={10}>Регистрация</Button>
              <Button variant='subtle' compact uppercase onClick={open}>
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
