import { useState, CSSProperties } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import PropagateLoader from "react-spinners/PropagateLoader";


function App() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [description, setDescription] = useState("")

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const generateImage = () => {
    setIsGenerating(true)
  }

  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden bg-black">

      <div className="flex w-1/3 h-screen px-3 py-5 ">
        <div className="flex flex-col items-center w-full h-full bg-red-500 p-3 rounded-xl">
          <p className='text-white text-3xl'>PixoAI</p>
          <textarea
            className='w-full h-40 mt-5 rounded-lg p-2 text-red-500 resize-none'
            placeholder='Description'
            minLength={5}
            maxLength={500}
            onChange={handleDescription}
            value={description}
            />
          {
            isGenerating 
            ? 
            <div className='w-full mt-8 rounded-lg text-center'>
              <PropagateLoader
                color="#FFFFFF"
                loading={isGenerating}
                size={30}
              />
            </div>
            :
            <button 
              className='w-full py-2 text-red-500 text-lg bg-white mt-8 rounded-lg'
              onClick={generateImage}>
              Generate
            </button>
          }
        </div>
      </div>

      <div className="flex w-1/3 h-screen px-3 py-5">
        <div className="flex flex-col items-center justify-center w-full h-full rounded-xl overflow-hidden">
          {
            isGenerating
            ?
            <PuffLoader
              color="#ef4444"
              loading={isGenerating}
              size={150}
            />
            :
            <img src='https://image.lexica.art/full_jpg/0109beee-4709-4d9a-8e7f-6fd37626844f' />
          }
          
        </div>
      </div>

      <div className="flex w-1/3 h-screen px-3 py-5">
        <div className="flex flex-col items-center justify-center w-full h-full rounded-xl overflow-hidden">
          {
            isGenerating
            ?
            <PuffLoader
              color="#ef4444"
              loading={isGenerating}
              size={150}
            />
            :
            <img src='https://image.lexica.art/full_jpg/0109beee-4709-4d9a-8e7f-6fd37626844f' />
          }
          
        </div>
      </div>

    </div>
  )
}

export default App
