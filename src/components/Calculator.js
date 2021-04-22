import { Box, Button, Input, Heading } from "@chakra-ui/react"
import { useState } from "react"

function Calculator() {
  const [total, setTotal] = useState(0)
  const [textInput, setTextInput] = useState('')
  const [storedOperator, setStoredOperator] = useState('')
  const buttonsValues = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '0', '00', '000', '/',
  ]
  let buttons = []

  function onClickHandler(event) {
    let valueInput = event.target.innerText
    if (valueInput <= 9 && valueInput >= 0) {
      {
        setTextInput(textInput + valueInput)
      }
    }
    else {
      if (total != 0) {
        switch (storedOperator) {
          case '+':
            setTotal(total + parseFloat(textInput))
            setTextInput('')
            break;
          case '-':
            setTotal(total - parseFloat(textInput))
            setTextInput('')
            break;
          case '*':
            setTotal(total * parseFloat(textInput))
            setTextInput('')
            break;
          case '/':
            setTotal(total / parseFloat(textInput))
            setTextInput('')
            break;
          case '00':
            setTextInput(textInput + valueInput)
            break;
          case '000':
            setTextInput(textInput + valueInput)
            break;

          default:
            break;
        }
      }
      else {
        setTotal(total + parseFloat(textInput))
        setTextInput('')
      }
      setStoredOperator(valueInput)
    }
  }

  for (let i = 0; i < buttonsValues.length; i++) {
    buttons.push(
      <Button
        key={buttonsValues[i]}
        width="25%"
        size="lg"
        color="lightblue"
        fontWeight="bold"
        variant="ghost"
        _hover={{ bgColor: "lightblue", color: "#222222" }}
        onClick={onClickHandler}>
        {buttonsValues[i]}
      </Button>
    )
  }

  return (
    <Box align="center">
      <Heading size="3xl" marginBottom={4}>Basic Calculator </Heading>
      <Box height="50px" width="250px" padding="5px" align="center" margin="10px">
        <Heading color="coral" marginBottom={2}>{total}</Heading>
        <Input
          type="number"
          color="coral"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value)
          }}>
        </Input>
        {buttons}
        <Button
          width="50%"
          size="lg"
          color="lightblue"
          fontWeight="bold"
          variant="ghost"
          _hover={{ bgColor: "lightblue", color: "#222222" }}
          onClick={onClickHandler}>
          =
        </Button>
        <Button
          width="50%"
          size="lg"
          color="lightblue"
          fontWeight="bold"
          variant="ghost"
          _hover={{ bgColor: "lightblue", color: "#222222" }}
          onClick={() => {
            setTotal(0)
            setTextInput('')
          }}>
          Clear
        </Button>
      </Box>
    </Box>
  )
}

export default Calculator