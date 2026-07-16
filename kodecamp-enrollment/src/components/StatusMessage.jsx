const StatusMessage = ({ type, message = '' }) => {
  const messages = {
    loading: 'Loading roster...',
    error: message || 'Something went wrong. Please try again.'
  }
  const text = messages[type] || 'Unknown status'
  return <div className={`status ${type}`}>{text}</div>
}
export default StatusMessage
