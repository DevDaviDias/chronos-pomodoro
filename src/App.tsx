//pascallCase
//App
import { Heading } from './components/Heading';
import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';


function App(){

    return(
    <>
    <Heading >
      olaMundo!

      <button>
        <TimeIcon/>
      </button>
    </Heading>
     <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, itaque eaque ab tempora autem quaerat voluptatum unde mollitia, eius minus nobis suscipit sint saepe placeat! Modi ea quaerat suscipit dicta?
     </p>
     
     </>)
}
export {App};