/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { jsx, css } from '@emotion/react'

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
      <div css={{
      }}>
        <img src="/minnow-logo.png" alt="Minnow Pod Logo" />
      </div>
      <ul css={{
        flex: 1,
        margin: 0,
        listStyleType: 'square',
        listStylePosition: 'inside'
      }}>
        <li css={{
          paddingRight:'13px',
          '&:before': {
            color: 'red',
            width: '28px'
          }
        }}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/report">
            <a>Report</a>
          </Link>
        </li>
      </ul>
      <div css={{
        marginBottom: '10px'
      }}>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
      </div>
    </div>
  )
}

export default Sidebar