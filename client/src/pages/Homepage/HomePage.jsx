import React from 'react'
import SecNav from '../../components/Nav/SecNav'
import TopBanner from '../../components/Banners/TopBanner'
import TodayItems from './TodayItems'

const HomePage = () => {
    return (
        <div>
            <SecNav />
            <TopBanner />
            <div className="xl:mx-32 md:mx-12 mx-4">
                <TodayItems />
            </div>

        </div>
    )
}

export default HomePage