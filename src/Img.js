import "./style.css"
import Product from "./Product";
function Img() {
    const firstName = "mohsen"; 

  return (
    <>
     <i><h3>bonjour</h3></i> {firstName && <img src={Product.image} alt={Product.nom} />}
    </>
  );
}
  
   export default Img;