

const Contact = () => {
  return (
    <section className='w-[90%] mx-auto pb-2 '>
        <div className='text-5xl font-bold opacity-40 text-white relative top-16 text-center tracking-[.4rem]'>Contact me</div>
        <div className="flex justify-center mb-5 z-10">
          <div className="relative oval-container-white my-6 font-semibold text-white">
              Contact me
              <span className="third-oval"></span>
          </div>
        </div>
        <p className='text-brown text-center mb-3 font-medium'>Have a project in mind? Write me so we can make something amazing</p>
        <form className='mb-5' action="">
            <input type="email" placeholder='Your email' className='w-full placeholder:text-brown placeholder:opacity-60  mb-3 border border-brown text-brown outline-none rounded-sm p-2'/>
            <textarea placeholder='Your message' className='w-full outline-none placeholder:text-brown placeholder:opacity-60  text-brown border border-brown resize-none rounded-sm pt-2 pl-2' rows={3} cols={10}  name="" id="">
            </textarea>
            <button className='ml-auto mt-5 block bg-pink text-white py-1.5 px-7 rounded-sm'>Send</button>
        </form><form className='mb-5' action="">
            <input type="email" placeholder='Your email' className='w-full placeholder:text-brown placeholder:opacity-60  mb-3 border border-brown text-brown outline-none rounded-sm p-2'/>
            <textarea placeholder='Your message here' className='w-full outline-none placeholder:text-brown placeholder:opacity-60  text-brown border border-brown resize-none rounded-sm pt-2 pl-2' rows={3} cols={10}  name="" id="">
            </textarea>
            <button className='ml-auto mt-5 block bg-pink text-white py-1.5 px-7 rounded-sm'>Send</button>
        </form>
        <p className='text-brown text-justify'>Connect with me on social media, or drop a message.</p>
        {/* <Footer/> */}
    </section>
  )
}

export default Contact