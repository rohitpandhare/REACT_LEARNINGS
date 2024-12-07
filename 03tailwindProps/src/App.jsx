import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    {/* you can use tailwind classes her  */}
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>


    <Card username={'rohit'} btnText='click' />
    <Card  username={'kunal'} btnText='flick'/>
    <Card  username={'srk'} btnText='clock'/>

    {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://th.bing.com/th/id/OIP.XRtPPswL5TW-_ayWIYQ6VAHaJS?w=2384&h=2988&rs=1&pid=ImgDetMain" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    </>
  )
}

export default App
