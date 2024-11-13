import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
    <div className='bg-deepPurple rounded-bl-[3rem]'>
      <div className="w-[90%] mx-auto  rounded-bl-lg ">
        <Header />
        <Hero />
      </div>
      {/* <div className="oval-container">
      Recent Projects
      <span className="third-oval"></span>
      </div> */}
    </div >
    <div className="bg-deepPurple">
      <div className="rounded-tr-[3rem] rounded-br-[3rem] bg-[#F2E9E4]">
        About Me
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam cum ipsam suscipit blanditiis exercitationem dicta pariatur ad ea voluptatem commodi. Eligendi commodi facilis illo error, voluptatem perspiciatis. Doloribus accusamus aperiam sit at dolorem. Error, fugit et. Voluptatibus commodi ipsam nihil nisi doloribus ad odit ratione voluptatem, accusantium aspernatur inventore, error architecto harum consequatur ipsum. Adipisci, minus accusamus sint tempore magni vero eligendi nam ipsa, facilis odit ullam quam nihil. Dolor alias a, mollitia sed, deleniti dolorum perspiciatis ab aut saepe enim tempore atque natus sint expedita sit obcaecati. Distinctio ex quibusdam repellat fuga fugit id earum maiores temporibus animi aut.
      </div>
    </div>
    <div className="bg-[#F2E9E4]">
      <div className="rounded-tl-[3rem] bg-deepPurple border-">
        About Me
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam cum ipsam suscipit blanditiis exercitationem dicta pariatur ad ea voluptatem commodi. Eligendi commodi facilis illo error, voluptatem perspiciatis. Doloribus accusamus aperiam sit at dolorem. Error, fugit et. Voluptatibus commodi ipsam nihil nisi doloribus ad odit ratione voluptatem, accusantium aspernatur inventore, error architecto harum consequatur ipsum. Adipisci, minus accusamus sint tempore magni vero eligendi nam ipsa, facilis odit ullam quam nihil. Dolor alias a, mollitia sed, deleniti dolorum perspiciatis ab aut saepe enim tempore atque natus sint expedita sit obcaecati. Distinctio ex quibusdam repellat fuga fugit id earum maiores temporibus animi aut.
      </div>
    </div>
    </>
  )
}

export default App
