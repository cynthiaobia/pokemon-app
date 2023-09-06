
const React = require('react');

function Show (props) {
  console.log(`========================`);
  // const { name, img } = props;
  const {pokemon} = props;
  // console.log(img);


  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name}</h2>
      <img src={`${pokemon.img}`} />
      {/* {img} */}
      <br />
      <a href="/pokemon">Back</a>
    </div>
  )
}

module.exports = Show;