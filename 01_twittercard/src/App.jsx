import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  const [orden, setOrden] = useState([0,1,2,3])

  const handleClick = () => {
    setOrden([orden[3],orden[0],orden[1],orden[2]])
  }

  
  let u = []
  orden.forEach( (c) => { u.push(users[c]) })

  return (
    <section className='App'>
      {
        u.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    <button onClick={handleClick}>CAMBIAR</button>
    </section>
  )
}
