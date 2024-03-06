import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  const nome = "Eduardo Barbosa"

  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App"> 
    <h1> Teste no React </h1>
    <Frase />
    <p> "Olá, {nome}!" </p>
    <p> "Soma de 1 + 2 = {sum(1, 2)} </p>
    <img src={url} alt="Imagem"/>
    <SayMyName nome="Eduardo"/>
    <SayMyName nome={nome}/>
    <Pessoa nome="Eduardo" idade="19" profissao="Programador" />
    <List />
    <Evento numero={1}/>
    <Form />
    <Condicional />
    </div>
  );
}

export default App;