import {LiItem, Para, Button} from './styledComponents'

const VisitCountryItem = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const visitCountry = () => {
    onClickVisit(id)
  }

  return (
    <LiItem>
      <Para>{name}</Para>
      {isVisited === false && (
        <Button type="button" onClick={visitCountry}>
          Visit
        </Button>
      )}
      {isVisited && <Para isVisited={isVisited}>Visited</Para>}
    </LiItem>
  )
}

export default VisitCountryItem
