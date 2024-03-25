import {Component} from 'react'
import VisitCountryItem from '../VisitCountryItem'
import VisitedCountryItem from '../VisitedCountryItem'
import {
  BgCont,
  Cont,
  Heading,
  UlContriesCont,
  UlVisitedCont,
} from './styledComponents'

class VisitCountries extends Component {
  state = {countriesList: []}

  componentDidMount() {
    const {initialCountriesList} = this.props
    this.setState({countriesList: initialCountriesList})
  }

  onRemoveAndVisit = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  onClickVisit = id => {
    this.onRemoveAndVisit(id)
  }

  onClickRemove = id => {
    this.onRemoveAndVisit(id)
  }

  render() {
    const {countriesList} = this.state

    const isVisitedCountryZero =
      countriesList.filter(eachItem => eachItem.isVisited === true).length === 0

    return (
      <BgCont>
        <Cont>
          <Heading>Countries</Heading>
          <UlContriesCont>
            {countriesList.map(eachItem => (
              <VisitCountryItem
                countryDetails={eachItem}
                key={eachItem.id}
                onClickVisit={this.onClickVisit}
              />
            ))}
          </UlContriesCont>
          <Heading>Visited Countries</Heading>
          <UlVisitedCont>
            {isVisitedCountryZero === false &&
              countriesList.map(
                eachItem =>
                  eachItem.isVisited && (
                    <VisitedCountryItem
                      countryDetails={eachItem}
                      key={eachItem.id}
                      onClickRemove={this.onClickRemove}
                    />
                  ),
              )}
            {isVisitedCountryZero && (
              <Heading as="p" noView>No Countries Visited Yet!</Heading>
            )}
          </UlVisitedCont>
        </Cont>
      </BgCont>
    )
  }
}

export default VisitCountries
