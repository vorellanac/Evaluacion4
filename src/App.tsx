
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Formulario from './Components/Formulario'
import ApiDataList from './Components/ApiRequest'
import Background from './Components/Background'

const imageUrl = 'https://www.bing.com/images/search?view=detailV2&ccid=cp2nIefL&id=33FAC2C788C79D39B92AD8B640A680683AC79BF2&thid=OIP.cp2nIefLTxknbP4jsYQLVgHaHa&mediaurl=https%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2017%2f08%2fpaper2b3.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.729da721e7cb4f19276cfe23b1840b56%3frik%3d8pvHOmiApkC22A%26pid%3dImgRaw%26r%3d0&exph=1600&expw=1600&q=imagen+de+fondo+claros+url&simid=608045861010486134&FORM=IRPRST&ck=D867F7289698E25239CC5025612C8FBF&selectedIndex=1&itb=0'

function App() {
  return (
    <div id="root">
       <Background src={imageUrl} alt="Imagen de fondo" />
      <header>
        <NavBar />       
      </header>
      
    <div className='content'>
      <div id="home" className='seccion'>
        <Home />
      </div>
    </div>
    
    <div id="about">
      <About />
    </div>      

    <div id="Formulario">
       <Formulario />
    </div>
    
    <div id="api">
      <ApiDataList />
    </div>
      
    <div id="contact">
      <Contact />
    </div>
    
    <div id="footer">
    <Footer />
    </div>
    
     </div>
  )
}

export default App;
