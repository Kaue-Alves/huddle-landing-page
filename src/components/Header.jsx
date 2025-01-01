import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="bg-transparent w-full flex justify-between items-center px-5 md:px-12 py-8">
          <img src={Logo} className="w-auto h-6 md:h-full"/>
          <button className="text-black font-semibold bg-white rounded-full py-2 px-6 md:py-3 md:px-14 shadow-lg text-sm font-poppins">
              Try It Free
          </button>
    </header>
  )
}