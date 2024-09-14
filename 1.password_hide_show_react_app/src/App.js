import {useState} from 'react';


function App() {
  let [isShow, setIsShow] = useState(false);
  let input_field = '';
  if (isShow){
    input_field = <input type="text" className="password" />;
  }
  else{
    input_field = <input type="password" className="password" />;
  }
  
  return (
    <div className="App">
      <main className="passwordToggle">

        <label>
          <p>Password</p>
          {input_field}
        </label>

        {
          (isShow)
          ?
          <button type="button" className="password-hide" onClick={() => setIsShow(isShow=false)}>Hide</button>
          :
          <button type="button" className="password-show" onClick={() => setIsShow(isShow=true)}>Show</button>
        }
        
      </main>
    </div>
  );
}

export default App;
