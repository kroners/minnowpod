import Dropdown from "./dropdown";

function Card({ title, itemValue, bgColor, improvement }) {
  console.log({ title, itemValue, bgColor, improvement })
  return (
    <div css={{
      borderRadius: '12px',
      backgroundColor: bgColor,
      color: '#E2EAE8',
      display: 'flex',
      flexDirection: 'column',
      height: '200px',
      padding: '16px 15px 25px',
      width: '360px',

      '&:not(:last-child)': {
        marginRight: '30px'
      }
    }}>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 css={{ margin: 0 }}>{title}</h2>
        <Dropdown />
      </div>
      <div 
        css={{
          flex: 1,
          fontSize: '40px',
          paddingTop: '29px',
        }}
      >{itemValue}</div>
      <div className="card-footer">{`${improvement}% Improvement`}</div>
    </div>
  )
}

export default Card;