import logo from './logo.svg';
import './App.css';
import './index.css'
import Nav from './components/navComponent'
import Title from './components/titleComponent'
import Bio from './components/bioComponent'
import Scroll from './components/scrollComponent'
import Dev3d from './components/dev3dComponent'
import Abouttitle from './components/abttitleComponent'
import Cardgrid from './components/cardGrid'

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect()
        //update
        card.style.setProperty('--x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--y', `${e.clientY - rect.top}px`)
    })
})

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Nav />
      <main>
        <Title/>
        <Bio/>
        <Scroll/>
        <Dev3d/>
      </main>
      <section className='about'>
        <Abouttitle/>
        <Cardgrid/>
      </section>

      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.10/build/spline-viewer.js"></script>

      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.11/build/spline-viewer.js"></script>

    </div>
  );
}

export default App;
