import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {format} from 'date-fns'


function Clock(){
  const today = new Date()

  return (
    <>
      <p>
        {format(today, 'PPpp')}
      </p>             
    </>
  )
}

export default Clock
