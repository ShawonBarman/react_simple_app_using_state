import {useState} from 'react';


function App() {
  let [menuStatus, setMenuStatus] = useState(false);
  
  return (
    <div className="App">
      <button className="micon" onClick={()=>setMenuStatus(!menuStatus)}>
        {
          (menuStatus)
          ?
          <span>&times;</span>
          :
          <span>&#9776;</span>
        }
      </button>
      <div className={`menu ${menuStatus ? 'acticeItem' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Gallary</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
