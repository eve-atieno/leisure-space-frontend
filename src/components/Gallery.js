// import React,{useState} from 'react'


// function Gallery(){
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const photos = [
//     {
//       id: 1,
//       src:"https://www.dailynautica.com/wp-content/uploads/2020/12/Air-96-Nauta-Design-The-Island.jpg",
//       related: [yatch, yatch2, yatch3]
//     },
    
//     {

//     },
//     {

//     }
    
//   ]

//   const handlePhotoClick = (photo) => {
//     setSelectedPhoto(photo);
//   };

//   const handleRelatedClick = (relatedPhoto) => {
//     setSelectedPhoto(relatedPhoto);
//   };
//   return (
    
//     <div className="gallery">
//       {photos.map((photo) => (
//         <img
//           key={photo.id}
//           src={photo.src}
//           alt={`Photo ${photo.id}`}
//           onClick={() => handlePhotoClick(photo)}
//         />
//       ))}
//       {selectedPhoto && (
//         <div className="lightbox">
//           <img src={selectedPhoto.src} alt={`Photo ${selectedPhoto.id}`} />
//           <div className="related-photos">
//             {/* <p>Related photos:</p> */}
//             {selectedPhoto.related.map((relatedPhoto, index) => (
//               <img
//                 key={index}
//                 src={relatedPhoto}
//                 alt={`Related Photo ${index}`}
//                 onClick={() => handleRelatedClick({ src: relatedPhoto, id: `${selectedPhoto.id}-${index + 1}` })}
//               />
//             ))}
//           </div>
//           <button onClick={() => setSelectedPhoto(null)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Gallery