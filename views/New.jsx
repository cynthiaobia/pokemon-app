
const React = require('react');

function New(props) {
  return (
    <div>
      <h1>Create a New Pokemon</h1>
      <form action='/pokemon' method='POST'>
        Name: <input type='text' name='name' />
          <br />
        
        Image URL: <input type='text' name='img' />
        <br />

        <input type='submit' name='' value='Create Pokemon' />
      </form>
    </div>
  )
}

module.exports = New;