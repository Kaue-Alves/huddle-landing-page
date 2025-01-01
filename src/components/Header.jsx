import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="bg-transparent w-full flex justify-between items-center px-5 lg:px-12 py-8">
          <img src={Logo} className="w-auto h-6 sm:h-full"/>
          <button className="text-black font-semibold bg-white rounded-full py-2 px-6 lg:py-3 lg:px-14 shadow-lg text-sm font-poppins">
              Try It Free
          </button>
    </header>
  )
}

104