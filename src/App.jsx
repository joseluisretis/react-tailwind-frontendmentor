import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat min-h-screen">
      <header className="container mx-auto pt-8 px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[.4em]">TODO</h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="bg-white mt-8 rounded-md overflow-hidden py-3 px-4
        flex gap-4 items-center">
          <span className="rounded-full border-2 inline-block w-5 h-5"></span>
          <input type="text" placeholder="Create a new todo..." 
            className="w-full text-gray-400 outline-none border-none"
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md">

          <article className="flex items-center gap-4 p-4 border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block w-5 h-5
              flex-none
            "></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 p-4 border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block w-5 h-5
              flex-none
            "></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 p-4 border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block w-5 h-5
              flex-none
            "></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 p-4 border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block w-5 h-5
              flex-none
            "></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 p-4 border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block w-5 h-5
              flex-none
            "></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 p-4 border-b border-b-gray-300">
            <button className="rounded-full border-2 inline-block w-5 h-5
              flex-none
            "></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        
          <section className="p-4 flex justify-between text-gray-400">
            <span>3 items left</span>
            <button>Clear Completed</button>
          </section>
        </div>

      </main>

      <section className="container mx-auto mt-8">
        <div className="bg-white gap-6 rounded-md p-4 flex justify-center">
          <button className="text-blue-500">All</button>
          <button className="hover:text-blue-500">Active</button>
          <button className="hover:text-blue-500">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8">
        Drag and drop to reorder list
      </p>
    </div>
  )
}


export default App;