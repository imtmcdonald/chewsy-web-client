import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EntryPage from './pages/EntryPage'
import InitiatorPage from './pages/InitiatorPage'
import RestaurantPage from './pages/RestaurantPage'

export default function App() {

  return (
    <Routes>
      <Route exact path='/' element={<EntryPage/>} />
      <Route exact path='/initiator' element={<InitiatorPage/>} />
      <Route exact path='/restaurant' element={<RestaurantPage/>} />
    </Routes>
  )
}