import './index.css'

const CardItem = props => {
  const {Item} = props
  const {name, imageUrl, description} = Item
  return (
    <li className="list-item">
      <img src={imageUrl} className="card-images" alt={name} />
      <div className="text-bg-container">
        <div className="text-container">
          <h1 className="heading-name">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CardItem
