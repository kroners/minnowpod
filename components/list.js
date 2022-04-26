function ListItem({ title, userList }) {
  return (
    <div css={{
      minWidth: '187px',

      '&:not(:last-child)': {
        paddingRight:'15px',
      },
    }}>
      <div css={{
        fontSize: 14,
        color: '#263238',
        paddingBottom: '8px',
        borderBottom: '1px solid #263238',
        textTransform: 'capitalize'
      }}>{title}</div>
      <ul css={{
        fontSize: 12,
        margin: 0,
        padding: 0,
        listStyle: 'none',
      }}>
        {Object.entries(userList).map((user) => {
          console.log(user)
          return (<li key={user[0]} css={{
            padding: '12px 0 0',
            '&:before': {
              content: '"•"',
              paddingRight:'10px',
              color: user[1].podOnlineStatus ? '#3EB49C' : '#DD4242',
              fontSize: '16px'
            }
          }}>{user[0]}</li>)
        })}
      </ul>
    </div>
  )
}

export default ListItem;