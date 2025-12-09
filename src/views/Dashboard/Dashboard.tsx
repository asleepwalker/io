import { useState } from 'react'
import Header from '../../components/Header/Header'
import logo from '/logo.png'

function Dashboard() {
  const [date, setDate] = useState(new Date())
  const header = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <Header title={header} />
      <img src={logo} className="logo" alt="logo" width="512" />
    </>
  )
}

export default Dashboard
