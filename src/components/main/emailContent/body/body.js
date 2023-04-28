import flaticonWelcomeImage from 'assets/images/flaticon-welcome-image.png'

import './body.css'

function Body() {
  return (
    <section className="email-body">
      <div className="content">
        <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
      </div>
    </section>
  )
}

export default Body