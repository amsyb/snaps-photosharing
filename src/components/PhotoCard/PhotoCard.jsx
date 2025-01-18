import "./PhotoCard.scss"

export default function PhotoCard({ photo }) {
    return (

<div className="photos">
<img className="photos__img" src={photo.photo} alt={`Photo ${photo.id}`} />
      <p className="photos__photographer body">{photo.photographer}</p>
      <p className="photos__tags"> 
    {photo.tags.map((tag, index) => (
    <span key={index} className="photos__tag body">{tag}</span>
  ))}
</p>
</div>
    );
}

{/* <div className="photos">
<img className="photos__img" src={photo.photo} alt={`Photo ${photo.id}`} />
      <p className="photos__photographer body">{photo.photographer}</p>
      <p className="photos__tags body">{photo.tags}</p>
</div> */}