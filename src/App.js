import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Name from "./Name";
import Prix from "./Prix";
import Description from "./Description";
import Img from "./Img";

const firstName = "mohsen";
function App() {
  
  return (
     
    <>
   <Card style={{ width: '18rem' }}>
   <Img/>
      <Card.Body>
        <Name/>
        <Prix/>
        <Description/>
      </Card.Body>
    </Card>
     
        
       </>
  );
}

export default App;
