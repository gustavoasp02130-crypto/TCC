import Galeria from './components/Galeria.jsx'
import Header from './components/Header.jsx'
import Sobre from './components/Sobre.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
function App(){
   return( 
    <>
        <Header/>
        <Sobre/>
        <Galeria/>  
    </>
   )
}

export default App
