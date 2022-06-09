import { useState, useCallback } from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
 

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(( {  index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    
      if(viewerIsOpen){
        // alert(viewerIsOpen);
        setCurrentImage(0);
        setViewerIsOpen(false);
      }
  };

  return (
   
    <div  style={{paddingTop:"28px"}}>
      {isMobile ?(
          <div  onClick={closeLightbox}>
               <Gallery photos={photos} onClick={openLightbox} />
               <ModalGateway>
                 {viewerIsOpen ? (
                   <Modal  onClose={closeLightbox}>
                       
                     <Carousel
                       currentIndex={currentImage}
                       views={photos.map(x => ({
                         ...x,
                         srcset: x.srcSet,
                         caption: x.title
                       }))}
                     />
                     
                   </Modal>
                 ) : null}
               </ModalGateway>
               </div>
      ):(    
    <div>    
    <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal  onClose={closeLightbox}>
              
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
            
          </Modal>
        ) : null}
      </ModalGateway>
      </div>  
      )}
 
    </div>
  );
}
// render(<App />, document.getElementById("app"));

export default  App;