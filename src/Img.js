import "./style.css"
import Product from "./Product";
function Img() {
  const styleObject = {color :"red" , textAlign: 'center', fontWeight: 'bold', fontSize:25}
    const firstName = "mohsen"; 

  return (
    <>
    {firstName ? (<><p>hello,{firstName}!</p><img src={Product.image} alt={Product.nom} /></>):(<p>hello,there !(create your name)</p>)}
     
    </>
  );
}
  
   export default Img;