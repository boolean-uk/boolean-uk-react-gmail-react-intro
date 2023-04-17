import './nav.css'

import backArrow from 'D:/Temporary/react-gmail-intro/src/assets/icons/back-arrow.png'
import downloadButton from 'D:/Temporary/react-gmail-intro/src/assets/icons/download-button.png'
import rubbishButton from 'D:/Temporary/react-gmail-intro/src/assets/icons/rubbish-bin-delete-button.png'

function Nav() {
    return (
<nav className="email-toolbar">
<ul>
  <li>
    <img className="icon" src={backArrow} alt="reply button" />
  </li>
  <li>
    <img className="icon" src={downloadButton} alt="archive button" />
  </li>
  <li>
    <img className="icon" src={rubbishButton} alt="delete button" />
  </li>
</ul>
<div className="space"></div>
<div>
  <p>1 of 25</p>
  <button>&lt;</button>
  <button>&gt;</button>
</div>
</nav>
    )
}

export default  Nav