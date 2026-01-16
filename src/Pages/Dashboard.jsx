import React from 'react'
import DashboardNavbar from '../Components/DashboardComponents/DashboardNavbar'
import WelcomeSection from '../Components/DashboardComponents/WelcomeSection'
import TotalJobs from '../Components/DashboardComponents/TotalJobs'
import InProgressJobs from '../Components/DashboardComponents/InProgressJobs'

const Dashboard = () => {
  return (
    <div>
        <WelcomeSection/>
        <TotalJobs/>
        <InProgressJobs/>
    </div>
  )
}

export default Dashboard