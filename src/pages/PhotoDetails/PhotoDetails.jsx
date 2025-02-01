import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import PhotoId from "../../components/PhotoId/PhotoId";
import PhotoDetails1 from "../../components/PhotoDetails1/PhotoDetails1";
import PhotoComments from "../../components/PhotoComments/PhotoComments";

function PhotoDetails() {
  return (
    <>
      <SecondaryNav />
      <PhotoId />
      <PhotoComments />
      <PhotoDetails1 />
    </>
  );
}

export default PhotoDetails;
