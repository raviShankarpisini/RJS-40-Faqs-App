// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  //   newFaqsListFun = () => {
  //     const {faqsList} = this.props
  //     const newFaqsList = faqsList.map(eachItem => ({
  //       ...eachItem,
  //       isVisible: false,
  //     }))
  //     this.setState({faqsList: newFaqsList})
  //   }

  //   showOrHideAnswer = id => {
  //     const {faqsList} = this.state
  //     const newFaqList = faqsList.map(eachItem => {
  //       if (eachItem.id === id) {
  //         return {...eachItem, isVisible: !eachItem.isVisible}
  //       }
  //       return eachItem
  //     })
  //     this.setState({faqsList: newFaqList})
  //   }

  render() {
    // this.newFaqsListFun()
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <h1 className="app-heading">FAQs</h1>
        <ul>
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
