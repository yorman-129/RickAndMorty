import { Button } from './components/atoms/Button/Button'
import { RickMorty } from './components/pages/RickMorty/RickMorty'

function App() {

  /* const handleOnclick = () => {
    console.log("first button")
  }
  const handleOnclickTwo = () => {
    console.log("two button")
  } */

  return (
    <div>

      <RickMorty/>
      {/* <Button
        text={"Enviar"}
        onClick={handleOnclick}
        color='#fffc'
        fontSize="19px"
        bgColor='#000'
        width='110px'
        height='200px'
      />


      <Button
        text={"Guardar"}
        onClick={handleOnclickTwo}
        color='blue'
        fontSize="19px"
        bgColor='red'
      />
 */}
    </div>

  )
}

export default App
