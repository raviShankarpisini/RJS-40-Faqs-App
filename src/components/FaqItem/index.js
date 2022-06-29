// Write your code here.

import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isVisible: false}

  visibleOrHideButton = () =>
    this.setState(prevState => ({isVisible: !prevState.isVisible}))

  render() {
    const {isVisible} = this.state
    const {itemDetails} = this.props
    const {questionText, answerText} = itemDetails
    const imgSrc = isVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

    const altText = isVisible ? 'minus' : 'plus'

    return (
      <li className="card-container">
        <div className="heading-container">
          <h1 className="heading">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.visibleOrHideButton}
          >
            <img src={imgSrc} alt={altText} />
          </button>
        </div>
        {isVisible && (
          <div className="paragraph-container">
            <hr />
            <p className="description">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
