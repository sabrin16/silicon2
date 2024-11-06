import React from 'react'
import bx1 from '../assets/images/icons/bx-check-circle.svg'
import bx2 from '../assets/images/icons/bx-check-circle.svg'
import bx3 from '../assets/images/icons/message.svg'
import icon from '../assets/images/icons/message.svg'
import sendmoney from '../assets/images/icons/message.svg'

const MakeMoney = () => {
  return (
    <section className="make-money">
        <div className="make-money-info">
            <h1 className="h1">Make your money <br/> transfer simple and clear</h1>
            <div>
                <img width="20" height="20" alt="bx-check" src={bx1} />
                <span className="h1">Banking transactions are free for you</span>

            </div>
            <div>
                <img width="20" height="20" alt="bx-check" src={bx2} />
                <span className="h1">No monthly cash commission</span>
            </div>
            <div>
                <img width="20" height="20" alt="bx-check" src={bx3} />
                 <span className="h1">Manage payments and transactions online</span>
            </div>
            <div>
                <button className="learn-more">
                    Learn more
                    <img width="20" height="20" src={icon} alt="" />
                </button>
            </div>
        </div> 
        <div className="make-money-img">
            <img width="528" height="500" src={sendmoney} />
            
        </div>
    </section>
  )
}

export default MakeMoney