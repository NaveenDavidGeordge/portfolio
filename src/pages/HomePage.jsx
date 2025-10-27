import SnakeGame from "../components/SnakeGame"

const HomePage = () => {
  return (
    <>
      <div className="h-full flex">
        <div className="flex-1  flex justify-center items-center">
          <div>
            <p>Hey Hi.. I am  </p>
            <h1 className="text-white text-5xl tracking-wider mt-3">Naveen Kumar</h1>
            <h4 className="text-2xl mt-2 text-indigo-400"> &gt; Full Stack Developer </h4>
            <div className='mt-15'>
              // complete the game to continue <br />
              // find my profile on LinkedIn : 
              <p className="mt-3">
                <span className='text-indigo-500'>const </span>
                <span className="text-emerald-300">LinkedIn </span>
                <span className="text-white">= </span>
                <span className='text-orange-300'>"linkedin url"</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex pl-10   items-center ">
          <SnakeGame></SnakeGame>
        </div>
      </div>
    </>
  )
}

export default HomePage