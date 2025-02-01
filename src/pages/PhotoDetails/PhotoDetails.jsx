import SecondaryNav from "../../components/SecondaryNav/SecondaryNav"
import PhotoId from "../../components/PhotoId/PhotoId"
import PhotoDetails1 from "../../components/PhotoDetails1/PhotoDetails1"
import PhotoComments from "../../components/PhotoComments/PhotoComments"
import axios from 'axios'
import { useState, useEffect } from 'react';

function PhotoDetails() {
  const [photo, setPhoto] = useState([])

  const getPhotos = async () => {
    try {
      const photosResponse = await axios.get (
        `http://localhost:8888/api/photos`
      );
      setPhoto(photosResponse.data);
    } catch (error) {
      console.error("error", error)
    }
    }

  useEffect(() => {
    getPhotos(photo)
      })
  return (
    <>
    <SecondaryNav />
      <PhotoId />
      <PhotoComments />
      <PhotoDetails1 />
      </>
  )
}

export default PhotoDetails
