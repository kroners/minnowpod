/** @jsxImportSource @emotion/react */
import Link from "next/link"
import Image from 'next/image'
import { jsx, css } from '@emotion/react'

const menuListItemStyle = css({
  paddingLeft: '55px',

  '&:before': {
    content: "'■'",
    paddingRight:'13px',
    color: '#C4C4C4',
    fontSize:'25px'
  }
});

function Sidebar() {
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#E2EAE8',
      paddingTop: '75px',
      width: '250px',
      textAlign: 'center',
    }}>
      <div>
        <Image src="/minnow-logo.png" alt="Minnow Pod Logo" width={138} height={48} />
      </div>
      <ul css={{
        flex: 1,
        margin: 0,
        padding: '70px 0 0',
        listStyle: 'none',
        textAlign: 'left'
      }}>
        <li css={menuListItemStyle}>
          <Link href="/">
            <a css={{ fontSize: '20px', color: '#006E7D', fontWeight: 600 }}>Home</a>
          </Link>
        </li>
        <li css={menuListItemStyle}>
          <Link href="/report">
            <a css={{ fontSize: '20px', color: '#C2C2C2', fontWeight: 600 }}>Report</a>
          </Link>
        </li>
      </ul>
      <div css={{
        marginBottom: '10px'
      }}>
        <Link href="/settings">
          <a css={{ fontSize: '20px', color: '#C2C2C2', fontWeight: 600 }}>Settings</a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar