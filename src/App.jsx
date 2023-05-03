import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {
  return (
    <div className="w-full h-full flex flex-col 
   
    relative items-center bg-gradient-to-r from-slate-300 to-slate-500">
      <h1 className="bg-white rounded-lg  text-center mt-[40px] w-11/12
       px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center">
      <Random/>
      <Tag/>
      </div>
    </div>
  )
}
