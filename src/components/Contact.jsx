import Form from './Form';


const Contact = () => {
  return (
    <section className='w-[90%] mx-auto pb-2 '>
        <div className='text-5xl font-bold opacity-40 text-white relative top-16 text-center  lg:text-7xl  tracking-[.4rem]'>Contact me</div>
        <div className="flex justify-center mb-5 z-10">
          <div className="relative oval-container-white my-4 font-semibold text-white">
              Contact me
              <span className="third-oval"></span>
          </div>
        </div>
        <Form/>
        <p className='text-brown text-justify lg:w-[40%] lg:mx-auto lg:text-center'>Connect with me on social media, or drop a message.</p>
        {/* <Footer/> */}
    </section>
  )
}

export default Contact