import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import styles from '../styles/Home.module.css'
export default function Home({ data }) {
  const [datajson, setDatajson] = React.useState()
  const [buttonClicked, setButtonClicked] = React.useState(0)
  const [prompt, setPrompt] = React.useState()
  
  React.useEffect(() => {
    const URL = "http://127.0.0.1:5000/result/"+prompt
    if(buttonClicked!=0)
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDatajson(data)
        console.log(data)
      })
  }, [buttonClicked])

  function handleChange(event) {
      setPrompt(() => (event.target.value))
  }
  function settingButtonClicked(){
    setButtonClicked((prev) => prev+1)
  }
  return (
      <main className='index--body'>
          <div className="form">
              <input 
                  type="text"
                  placeholder="Enter the text"
                  className="form--input"
                  name="text"
                  onChange={handleChange}
              />
              <button 
                  className="form--button"
                  onClick={settingButtonClicked}
              >
                Submit
              </button>
          </div>
          <div className="result">
            {datajson&&datajson.code=="200"&&buttonClicked? <Image src={datajson.data} className="form--image" width={"800px"} height={"800px"} alt="Generated Image" /> : ""}          
            {datajson? datajson.code=="404"? <div className='form--error'>Our request activated the API&apos;s safety filters and could not be processed. Please modify the prompt and try again.</div> : '': ''}
          </div>
      </main>
  )
}

