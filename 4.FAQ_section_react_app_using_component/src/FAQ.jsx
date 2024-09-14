import { questions } from "./faqQuestions";
import {useState} from 'react';

export default function FAQ() {
    let [currentID, setCurrentID] = useState(-1);
    let items = questions.map((itemData, i) => {
        let itemDetails = {
            itemData,
            currentID,
            setCurrentID
        }
        return(
            <FAQItems itemDetails={itemDetails} key={i} />
        );
    })
    return (
        <div id="FAQ">
            <p className="title">Frequently Asked Questions (FAQs)</p>
            <div className="accordian">
                {items}
            </div>
        </div>
    );
}

function FAQItems({itemDetails}) {
    let item = itemDetails.itemData;
    return (
        <div className={`item ${(itemDetails.currentID===item.id) ? 'selected' : ''}`}>
            <div className="FAQ-title" onClick={()=>{itemDetails.setCurrentID(item.id)}}>
                <p className="faqQuestion">{item.id}. {item.question}</p>
                <span className="expandToggle">+</span>
            </div>
            <div className={`FAQ-content ${(itemDetails.currentID===item.id) ? 'show' : ''}`}>
                <p>{item.answer}</p>
            </div>
        </div>
    );
}