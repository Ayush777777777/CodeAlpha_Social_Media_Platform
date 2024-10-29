import React from 'react';

function Search() {

  return (
    <div>
      <nav className="flex items-center justify-center bg-black p-6 shadow-md">
        <div className="flex items-center">
          <input className="text-black focus:outline-none focus:shadow-outline border border-gray-400 rounded py-1 px-4 block leading-normal w-72" type="text" placeholder=" Search" />
        </div>
        <div>
          <i className="far fa-user text-lg cursor-pointer"></i>
        </div>
      </nav>

    </div>
  );
}

export default Search;
