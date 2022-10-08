import { Container } from '@mui/system';
import Header from './components/Header';  // for getting the complete table of comparison
import Corousal from './components/Corousal';  // for getting the cards of features
import Api from './components/Api';  // For getting the cards of API
function App() {
  return (
    <Container>
      <Header />
      <Corousal />
      <Api />   
    </Container>
  );
}

export default App;
