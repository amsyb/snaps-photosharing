import "./PhotoCard.scss";
import axios from "axios";
import { useState, useEffect } from 'react';

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126";

function PhotoCard() {
  const [photos, setPhotos] = useState(null);
 
  const getPhotos = async () => {
   try{
     const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${API_KEY}`);
     setPhotos(response.data.photo);
     console.log(response)
   } catch (error) {
     console.log("Error fetching photos", error);
   }
  };
 
  useEffect(()=> {
   getPhotos();
  })
 
   return (
   
     <section className="photo__list">
       {photos &&
         photos.map((photo) => (
           <article key={photo.id} className="">
 
             <img
               src= {photo.photo}
               alt={photo.photoDescription}
               className=""
             />  
           </article>
         ))}
     </section>
   )
 }
 
 export default PhotoCard
 

//  function PhotoCard({ photo }) {
//   return (
//     <div className="photos">
//       <div className="photos__name">
//         <img
//           className="photos__img"
//           src={photo.photo}
//           alt={`Photo ${photo.id}`}
//         />
//         <p className="photos__photographer body">{photo.photographer}</p>
//       </div>
//       <p className="photos__tags">
//         {photo.tags.map((tag, index) => (
//           <span key={index} className="photos__tag body">
//             {tag}
//           </span>
//         ))}
//       </p>
//     </div>
//   );
// }

// export default PhotoCard