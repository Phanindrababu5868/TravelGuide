import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CardItem from '../CardItem'

import './index.css'

class TravelGuide extends Component {
  state = {cardsList: [], isLoading: true}

  componentDidMount() {
    this.getData()
    console.log('is_mount')
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({cardsList: updatedData, isLoading: false})
    console.log('is_find')
  }

  render() {
    const {isLoading, cardsList} = this.state
    return (
      <div className="app-container">
        <div className="travel-heading-container">
          <h1 className="heading">Travel Guide</h1>
          <hr className="line" />
        </div>
        <div className="card-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-card-container">
              {cardsList.map(each => (
                <CardItem Item={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
