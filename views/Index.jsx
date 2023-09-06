
const React = require('react');

function Index(props) {
  const { pokemon } = props;
  const myStyle = {
  };

  return (
    <div style={myStyle}>
    {/* <div> */}
      <h1>See All The Pokemon!</h1>
      <nav>
        <a href='/pokemon/new'>Create a new Pokemon</a>
      </nav>
      <ul>
        {
          pokemon.map( (item, i) =>
            <li key={item._id}>
              <a href={`/pokemon/${item._id}`}>{item.name[0].toUpperCase() + item.name.slice(1)}</a>
            </li>
            )
        }
      </ul>
      
    </div>
    
  )
}

module.exports = Index;