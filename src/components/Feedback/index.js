import {Component} from 'react'
import ResourceItem from '../resourceItem'

import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    return (
      <div>
        <div>
          <h1>How satisfied are you with our customer support performance</h1>
          <ul>
            {resources.map(eachItem => (
              <ResourceItem key={eachItem.id} resourcesDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
