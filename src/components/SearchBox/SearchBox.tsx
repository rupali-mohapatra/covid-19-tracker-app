import React from 'react';
import "./SearchBox.css";

const SearchBox: React.FC = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className='title'>
        <h1>Search any Country</h1>
        <div className='input-wrapper'>
          <input
            type='text'
            placeholder='Search here'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Search</button>
        </div>
        
      </div>
    </div>
  )
}

export default SearchBox