import {useState} from 'react';
import { questions } from "./faqQuestions";


function App() {
  let [showAns, setShowAns] = useState(-1);
  
  return (
    <div className="App">
      <div id="FAQ">
        <p className="title">Frequently Asked Questions (FAQs)</p>
        <div className="accordian">
          {questions.map((faqItems, i) => {
            return(
              <div className={`item ${(showAns===faqItems.id) ? 'selected' : ''}`} key={i}>
                <div className="FAQ-title" onClick={()=>setShowAns(faqItems.id)}>
                  <p className="faqQuestion">{faqItems.id}. {faqItems.question}</p>
                  <span className="expandToggle">+</span>
                </div>
                <div className={`FAQ-content ${(showAns===faqItems.id) ? 'show' : ''}`}>
                  <p>{faqItems.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
