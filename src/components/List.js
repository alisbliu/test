import Item from "./Item"

function List () {
  return (
  <> 
    <h1> Minha Lista </h1>
    <ul>
     <Item/>    
     <Item marca="Ferrari" ano_lançamento={1985} />
     <Item marca="Chevrolet" ano_lançamento= {1980} />
    </ul>
  </>  
  )
}

export default List