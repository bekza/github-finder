import React from 'react';

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:{' '}
        <a href='https://github.com/bekza'>
          Bekzat
        </a>
      </p>
    </div>
  );
}

export default About;
