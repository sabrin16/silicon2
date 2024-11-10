import React from 'react'
import bxCheckCircle from '../assets/images/icons/bx-check-circle.svg'
import messageIcon from '../assets/images/icons/message.svg'
import sendMoney from '../assets/images/icons/sendMoney.svg'

const MakeMoney = () => {
    // Funktion för att hantera "Learn more" knappklick
    const handleLearnMoreClick = () => {
        // exempelvis navigera till en annan sida eller visa en modal
        console.log('Learn more clicked!');
      }
      
  return (
    <section className="make-money">
        <div className="make-money-info">
            <h1 className="h1">Make your money <br/> transfer simple and clear</h1>

            <ul className="features-list">
                <li>
                    <img width="20" height="20" alt="Free banking transactions" src={bxCheckCircle} />
                    <span className="h1">Banking transactions are free for you</span>
                </li>
                <li>
                    <img width="20" height="20" alt="No monthly cash commission" src={bxCheckCircle} />
                    <span className="h1">No monthly cash commission</span>
                </li>
                <li>
                    <img width="20" height="20" alt="Manage payments online" src={bxCheckCircle} />
                        <span className="h1">Manage payments and transactions online</span>
                </li>
            </ul>
            <div>
                <button className="learn-more" onClick={() => alert('Learn more clicked!')} >
                    Learn more
                    <img width="20" height="20" src={messageIcon} alt="Learn more icon" />
                </button>
            </div>
        </div> 
        <div className="make-money-img">
            <img width="528" height="500" src={sendMoney} alt="Send money illustration" />           
        </div>
    </section>
  )
}

export default MakeMoney