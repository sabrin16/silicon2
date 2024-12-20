import React from 'react'
import iphone1 from '../assets/images/iphone-tilted.png'
import iconcredit from '../assets/images/icons/credit-card.svg'
import iconshield from '../assets/images/icons/shield.svg'
import iconbars from '../assets/images/icons/bars-graphic.svg'
import communication from '../assets/images/icons/communication.svg'
import wallet from '../assets/images/icons/wallet.svg'
import happy from '../assets/images/icons/happy.svg'

const Features = () => {
  return (
    <section aria-label="App features" className="features">
      <div className="container">
          <div className="iphone">
              <img src={iphone1} alt="" />
          </div>
          <div className="text space-y-1">
              <h2 className="h1">App Features</h2>
              <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
              </p>

              <div className="features-grid">

                  <div className="feature-card">
                      <div className="icon-container">
                          <img src={iconcredit} alt="" />
                      </div>
                      <div className="space-y-1">
                          <h3 className="h5">Easy Payments</h3>
                          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      </div>
                  </div>

                  <div className="feature-card">
                      <div className="icon-container">
                          <img src={iconshield} alt="" />
                      </div>
                      <div className="space-y-1">
                          <h3 className="h5">Data Security</h3>
                          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      </div>
                  </div>

                  <div className="feature-card">
                      <div className="icon-container">
                          <img src={iconbars} alt="" />
                      </div>
                      <div className="space-y-1">
                          <h3 className="h5">Cost Statistics</h3>
                          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      </div>
                  </div>

                  <div className="feature-card">
                      <div className="icon-container">
                          <img src= {communication} alt="" />
                      </div>
                      <div className="space-y-1">
                          <h3 className="h5">Support 24/7</h3>
                          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      </div>
                  </div>

                  <div className="feature-card">
                      <div className="icon-container">
                          <img src={wallet} alt="" />
                      </div>
                      <div className="space-y-1">
                          <h3 className="h5">Regular Cashback</h3>
                          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      </div>
                  </div>

                  <div className="feature-card">
                      <div className="icon-container">
                          <img src={happy} alt="" />
                      </div>
                      <div className="space-y-1">
                          <h3 className="h5">Top Standards</h3>
                          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  )
}

export default Features