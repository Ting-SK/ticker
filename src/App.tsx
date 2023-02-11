
import { ChangeEvent, useState } from 'react'
import { GlobalStyle, MarqueeContainer, Marquee, SetupContainer, Form, Input, Button, FlexRow, ExampleContainer } from './styles'

export type TSettings = {
  text: string,
  speed: number,
  color: string,
  background: string,
  fontSize: number
}

const seconds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
  const [page, setPage] = useState<'setup' | 'screen'>('setup')
  const [settings, setSettings] = useState<TSettings>({
    text: 'aaaaaa',
    speed: 5,
    color: 'white',
    background: 'gray',
    fontSize: 30
  })
  const handleChangePage = () => {
    setPage('screen')
  }

  const handleChangeSettings = (value: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, field: string) => {
    setSettings(prev => ({ ...prev, [field]: value.target.value }))
  }

  return (
    <>
      <GlobalStyle />
      {page === 'setup' &&
        <SetupContainer>
          <ExampleContainer background={settings.background}        >
            <Marquee
              isExample
              fontSize={settings.fontSize}
              text={settings.text}
              speed={settings.speed}
              color={settings.color}
            >
              {settings.text}
            </Marquee>
          </ExampleContainer>
          <Form>
            <FlexRow>
              <label>
                Текст строки
              </label>
              <Input value={settings.text} onChange={(value) => handleChangeSettings(value, 'text')} />
            </FlexRow>
            <FlexRow>
              <label>
                Размер Текста
              </label>
              <Input type='number' value={settings.fontSize} onChange={(value) => handleChangeSettings(value, 'fontSize')} />
            </FlexRow>
            <FlexRow>
              <label>
                Скорость движения
              </label>
              <select value={settings.speed} onChange={(value) => handleChangeSettings(value, 'speed')}>
                {seconds.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </FlexRow>
            <FlexRow>
              <label>
                Цвет надписи
              </label>
              <Input type='color' value={settings.color} onChange={(value) => handleChangeSettings(value, 'color')} />
            </FlexRow>
            <FlexRow>
              <label>
                Цвет фона
              </label>
              <Input type='color' value={settings.background} onChange={(value) => handleChangeSettings(value, 'background')} />
            </FlexRow>
            <Button onClick={handleChangePage}>Поехали</Button>
          </Form>
        </SetupContainer>
      }
      {
        page === 'screen' &&
        <MarqueeContainer background={settings.background}        >
          <Marquee
            fontSize={settings.fontSize}
            text={settings.text}
            speed={settings.speed}
            color={settings.color}
          >
            {settings.text}
          </Marquee>
        </MarqueeContainer>
      }
    </>
  )
}

export default App