import React from 'react'
import SecNav from '../../components/Nav/SecNav'
import TopBanner from '../../components/Banners/TopBanner'

const HomePage = () => {
  return (
    <div>
        <SecNav />
        <TopBanner />
        <h1 className="text-red-500 font-bold">HomePage</h1>
    </div>
  )
}

export default HomePage