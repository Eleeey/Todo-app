import EditSection from '@/components/EditSection'
import Sidebar from '@/components/SideBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-row w-[100%]'>
    <Sidebar/>
    <EditSection/>
  </div>
    
  )
}
