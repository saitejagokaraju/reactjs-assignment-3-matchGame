import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onChangeActiveTabId} = props
  const {displayText, tabId} = tabDetails

  const active = isActive ? 'active-btn' : ''

  const onClickedTab = () => {
    onChangeActiveTabId(tabId)
  }

  return (
    <li className="item-container">
      <button
        onClick={onClickedTab}
        className={`tab-btn ${active}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
