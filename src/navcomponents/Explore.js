import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';

function Explore() {

  const accessKey = '51EFp5veBlxPICo5jw3YaiMBe6uw74qi2N23e9fUTo8';
  // const accessKey = proceess.env.accessKey;
  const page = 1;
  const perPage = 20;
  const orderBy = 'latest';

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Make the GET request
    axios.get('https://api.unsplash.com/photos', {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        page,
        per_page: perPage,
        order_by: orderBy,
      },
    })
      .then(response => {
        // Update the state with the response data
        setImages(response.data);
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount


  return (
    // Display images
    <div className="flex flex-wrap flex-row justify-center items-center">
      {images.map(image => (
        <img key={image.id} 
        src={image.urls.full} 
        alt={image.description} 
        className="image h-auto border w-3/4 border-gray-500 border-opacity-50 rounded-md display-flex mb-2 mt-4" 
        />
      ))}
    </div>
  )
}

export default Explore
