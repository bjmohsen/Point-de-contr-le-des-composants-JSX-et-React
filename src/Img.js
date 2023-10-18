
import Product from "./Product";
function Img() {
    const firstName = "mohsen"; 
  
    return (
      <>
       <img src={Product.image} alt={Product.nom} />
    
      </>
    );
  }
   export default Img;