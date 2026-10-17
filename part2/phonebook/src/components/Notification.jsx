const Notification = ({ notification }) => {
  if (!notification) {
    return
  }

  return (
    <div 
        className={notification.status}
    >
        {notification.text}
    </div>
  )
}

export default Notification
