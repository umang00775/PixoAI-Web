import { useState, CSSProperties } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from 'axios';


function App() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [description, setDescription] = useState("")
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  
  const handleDescription = (event) => {
    setDescription(event.target.value)
  }


  const generateImage = async () => {
    setIsGenerating(true)
    const data = {
      prompt: description,
      page: 1,
    };

    const config = {
      method: 'post',
      url: 'https://ai-image-generator3.p.rapidapi.com/generate',
      headers: {
        'x-rapidapi-key': 'cad6739fc1msh57546ab3d2a3272p1e8715jsn5be6acbeb711',
        'x-rapidapi-host': 'ai-image-generator3.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await axios(config);
      setImage1(response.data.results.images[0]);
      setImage2(response.data.results.images[1]);
      setIsGenerating(false)
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  };


  return (
    <div className="flex flex-row flex-wrap w-screen lg:h-screen overflow-hidden bg-black justify-center items-center">

      <div className="flex w-full lg:w-1/3 h-96 lg:h-screen lg:px-3 lg:py-5">
        <div className="p-2 flex flex-col items-center w-full h-full bg-red-500 lg:p-3 lg:rounded-xl">
          <p className='text-white text-3xl'>PixoAI</p>
          <textarea
            className='w-full h-40 mt-5 rounded-lg p-2 text-black resize-none'
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

      <div className="flex w-screen lg:w-1/3 h-full lg:px-3 lg:py-5">
        <div className="flex flex-col items-center justify-center w-full h-full lg:rounded-xl overflow-hidden">
          {
            isGenerating
            ?
            <PuffLoader
              color="#ef4444"
              loading={isGenerating}
              size={150}
            />
            :
            <img src={image1} />
          }
          
        </div>
      </div>

      <div className="flex w-screen lg:w-1/3 h-full lg:px-3 lg:py-5">
        <div className="flex flex-col items-center justify-center w-full h-full lg:rounded-xl overflow-hidden">
          {
            isGenerating
            ?
            <PuffLoader
              color="#ef4444"
              loading={isGenerating}
              size={150}
            />
            :
            <img src={image2} />
          }
          
        </div>
      </div>

    </div>
  )
}

export default App
