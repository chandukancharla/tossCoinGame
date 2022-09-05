import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
  }

  getResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const heads = tossResult === 0 ? 'true' : 'false'
    if (heads === 'true') {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {imageUrl, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" /> <br />
          <button onClick={this.getResult} type="button" className="toss-btn">
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads} </p>
            <p className="result">Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
