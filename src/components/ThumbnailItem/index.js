import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onChangerandomImage} = props
  const {thumbnailUrl, imageUrl} = thumbnailDetails

  const onClickedThumbnai = () => {
    onChangerandomImage(imageUrl)
  }

  return (
    <li className="thumnail-item-container">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickedThumbnai}
      >
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
