import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer className="bg-my-deep-black">
        <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-4 gap-8 divide-y divide-my-blue divide-dashed'>
          <div className='py-32 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mx-auto'>
            <div>
              <Image src="/images/chiglogo.png" alt="Logo" width={180} height={180} />
            </div>
            <div className='flex flex-col md:flex-row gap-20'>
              <div>
                <h3 className='font-medium mb-2'>Menu</h3>
                <ul>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Home</button></li>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Projects</button></li>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Process</button></li>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Contact</button></li>
                </ul>
              </div>
              <div>
                <h3 className='font-medium mb-2'>Socials</h3>
                <ul>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Facebook</button></li>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Instagram</button></li>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Tiktok</button></li>
                  <li><button className="hover:text-my-blue cursor-pointer transition-colors duration-300">X</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-312.5 mx-auto px-4 md:px-8 lg:px-4 py-4">
            <p className="text-center text-sm text-gray-400">&copy; 2026 Chig Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer