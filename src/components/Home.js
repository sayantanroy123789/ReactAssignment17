import React from 'react'

function Home() {
  return (
    <div style={{height:"100vh", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", width:"100vw"}}>
        <h1>Get the right job you deserve</h1>
       <div>
       <input placeholder='job title or keynword' style={{height:"40px", width:"320px", borderRadius:"15px"}}/>
        <button style={{backgroundColor:"blue", color:'white', height:"40px", width:"100px", borderRadius:"16px"}}>submit</button>
       </div>
    </div>
  )
}

export default Home