import {
  ListItem,
  Img,
  InsideCont,
  RemoveButton,
  Paragraph,
} from './styledComponents'

const VisitedCountryItem = props => {
  const {countryDetails, onClickRemove} = props
  const {id, name, imageUrl} = countryDetails

  const removeCountry = () => {
    onClickRemove(id)
  }

  return (
    <ListItem>
      <Img src={imageUrl} alt="thumbnail" />

      <InsideCont>
        <Paragraph>{name}</Paragraph>
        <RemoveButton type="button" onClick={removeCountry}>
          Remove
        </RemoveButton>
      </InsideCont>
    </ListItem>
  )
}

export default VisitedCountryItem
