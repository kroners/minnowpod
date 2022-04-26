/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import useSWR from 'swr';
import Card from '../components/card';
import ListItem from '../components/list';

import Sidebar from '../components/sidebar'

const dashboardWrapperStyle = css({
  display: 'flex',
  height: '100vh'
});

const fetcher = (url) => fetch(url).then((res) => res.json());

const valueToMins = (value) => {
  const hours = Math.floor(value / 60);          
  const minutes = value % 60;

  return `${hours} hours ${minutes} min`
}

export default function Home() {
  const { data, error } = useSWR('/api/home', fetcher)
  
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  const { user, pod, stats } = data;

  return (
    <main css={dashboardWrapperStyle}>
      <Sidebar />
      <div 
        css={{
          flex: 1,
          padding: '75px 60px'
        }}
      >
        <div css={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '90px'
        }}>
          <div css={{
            color: '#263238',
            fontSize: '44px'
          }}>
            Hello {user.name}
          </div>
          <div css={{
            color: '#006E7D',
            fontSize: '20px',
          }}>
            <span>Dark Mode</span>
          </div>
        </div>
        <div css={{ 
          boxShadow: '-1px 2px 5px #0007',
          borderRadius: '5px',
          padding: '28px 31px'
        }}>
          <h2>Pod Online Status</h2>
          <div css={{display: 'flex'}}>
            {Object.entries(pod).map((podItem) => {
              return (<ListItem key={podItem[0]} title={podItem[0]} userList={podItem[1]} />);
            })}
          </div>
        </div>
        <div css={{
          display: 'flex',
          marginTop: '15px',
          justifyContent: 'space-between',
        }}>
          {Object.entries(stats).map((statItem) => {
            const value = statItem[0] === 'totalTimeInPod' ? valueToMins(statItem[1].value) : statItem[1].value;
            return (
              <Card 
                key={statItem[0]}
                title={statItem[1].title}
                itemValue={value}
                bgColor={statItem[1].bgColor}
                improvement={statItem[1].improvement} 
              />
            );
          })}
        </div>
      </div>
    </main>
  )
}
