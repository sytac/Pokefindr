import React from 'react';

export default function PokeSearch(props) {
  return (
    <div className="poke-search">
      <input
        type="text"
        placeholder="Start typing to filter through Pokemon"
        onChange={props.onFilter}
      />
    </div>
  );
};
