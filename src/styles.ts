import styled, { keyframes, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding:  0;
    font-size: 18px;
}
`
const move = keyframes`
    0% {
        transform: translateX(100vw)
    }
    100% {
        transform: translateX(-50vw)
    }
`

const moveExample = keyframes`
    0% {
        transform: translateX(100vw)
    }
    100% {
        transform: translateX(-50vw)
    }
`

export const MarqueeContainer = styled.div<{ background: string }>`
    display: flex;
    align-items: center;
    width:100vw;
    height:100vh;
    background: ${({ background }) => background};
    overflow: hidden;
`
export const Marquee = styled.p<{
    text: string,
    speed: number,
    color: string,
    fontSize: number
    isExample?: boolean
}>`
    font-size: ${({ fontSize }) => fontSize}px;
    line-height: 1.3;
    font-family: sans-serif;
    padding: 24px 0;
    color: ${({ color }) => color};
    white-space: nowrap;
    animation: ${({ isExample }) => isExample ? moveExample : move} ${({ speed }) => speed}s infinite linear;

    &:after{
      content: ${({ text }) => text};
    }
`

export const SetupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding:10px 0;
    width:100vw;
    height:auto;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    min-width: 100px;
    max-width: 700px;
    width:100%;
    margin-top: 40px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid gray;
    gap: 5px;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 500px) {
    flex-direction: column;
}
`

export const Input = styled.input`
    max-width: 300px;
    min-width:100px;
    width:100%;
    height: 40px;
`

export const Button = styled.button`
    margin-top:20px;
    width:200px;
    height: 50px;
    border-radius:10px;
    background: white;
    color: gray;
`

export const ExampleContainer = styled.div<{ background: string }>`
    display: flex;
    align-items: center;
    width:100vw;
    height:50vh;
    background: ${({ background }) => background};
    overflow: hidden;
`
