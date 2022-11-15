const ResourceItem = props => {
  const {resourcesDetails} = props
  const {id, name, imageUrl, loveEmojiUrl} = resourcesDetails

  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} onClick={onClickResource} />
        <p>{name}</p>
      </div>
    </li>
    <div>
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
    </div>
  )
}
export default ResourceItem
