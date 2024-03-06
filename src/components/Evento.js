import Button from './Eventos/Button'

function Evento() {
    function meuEvento () {
        console.log('Ativando o primeiro evento')
    }

    function segundoEvento () {
      console.log('Ativando o segundo evento!')
    }

    return (
    <div>
      <p> Clique para disparar o evento:</p>
      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </div>    
    )
}

export default Evento