import PropTypes from 'prop-types'
import styled from 'styled-components'

import Money from 'components/money'

const StyledProduct = styled.div`
  display: flex;
  flex: 44%;
  flex-direction: column;
  align-items: center;

  border: 1px solid #f8f8f8;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);

  margin: 0.4rem;
  padding: 0.4rem;
`

const Image = styled.img`
  width: 128px;
  margin: 0.3rem 0;
`

const Button = styled.span`
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  padding: 0.3rem;

  color: white;
  background-color: ${(props) => (props.color ? props.color : 'lightskyblue')};
`

const Product = ({ name, price, image, onAdd, onRemove }) => (
  <StyledProduct>
    <h3>{name}</h3>
    <Image src={image} alt={name}></Image>
    <span>
      <Money amount={price} />
    </span>
    <Button onClick={onAdd}>Add</Button>
    <Button color="pink" onClick={onRemove}>
      Remove
    </Button>
  </StyledProduct>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Product
