import React, { useState } from 'react'
import Controls from '../Courses/Controls';
import TdControls from '../Exercises/TdControls';

const Home = () => {
    const [tab, setTab] = useState(1)
  return (
    <div>
        <div className='w-full flex'>
            <div className= {tab===1 ? 'w-1/2 text-center cursor-pointer bg-blue-600 text-white font-bold text-xl': 'w-1/2 text-center cursor-pointer text-blue-600 bg-white font-bold text-xl' } onClick={() => setTab(1)}> Cours </div>
            <div className= {tab===2 ? 'w-1/2 text-center cursor-pointer bg-blue-600 text-white font-bold text-xl': 'w-1/2 text-center cursor-pointer text-blue-600 bg-white font-bold text-xl' } onClick={() => setTab(2)}> Exercises </div>

        </div>
        <div className='mt-5'>
            <div className={tab===1 ? 'block ' : 'hidden font-bold text-blue-600 text-xl'}> <Controls/> </div>
            <div className={tab===2 ? 'block ' : 'hidden font-bold text-blue-600 text-xl'}> <TdControls/> </div>
        </div>
    </div>

  )
}

export default Home