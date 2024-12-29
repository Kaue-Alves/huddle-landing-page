import Logo from "../assets/images/logo";

export default function Header() {
  return (
    <header className="w-full bg-VerPaleCyan flex justify-between items-center px-8 py-8">
          <Logo />
          <button className="text-black font-semibold bg-white rounded-full py-3 px-10 shadow-lg text-sm">
              Try It Free
          </button>
    </header>
  )
}
