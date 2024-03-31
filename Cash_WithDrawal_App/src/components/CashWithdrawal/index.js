import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onchange = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="container">
          <div className="box1">
            <p className="para1"> S</p>
            <p className="heading1"> Sarah Williams</p>
          </div>

          <div className="box2">
            <p className="para2">Your Balance</p>

            <p className="para3">
              {balance}
              <br />
              <span className="down">In Rupees</span>
            </p>
          </div>

          <p className="heading2">Withdraw </p>
          <p className="para4">CHOOSE SUM (IN RUPEES)</p>

          <ul className="ul">
            {denominationsList.map(each => (
              <DenominationItem
                denominationsList={each}
                key={each.id}
                onDecrease={this.onchange}
                balance={balance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
