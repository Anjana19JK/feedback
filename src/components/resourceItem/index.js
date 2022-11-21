const ResourceItem = props => {
  const {resourcesDetails, updateNewPage} = props
  const {id, name, imageUrl, loveEmojiUrl} = resourcesDetails
  const updateNewPage=()=>{
     <div>
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
    </div>
  }
  
  const onClickResource =(id) =>{
    updateNewPage()

  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} onClick={onClickResource} />
        <p>{name}</p>
      </div>
    </li>
  )
}
export default ResourceItem
