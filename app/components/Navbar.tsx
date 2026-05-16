export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 border-b border-[#E8DED1] bg-[#F8F5F0]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <img
            src="/images/elvara-logo.png"
            alt="Elvara"
            className="h-10 w-auto object-contain"
        />
          {/* <div className="flex items-center gap-6 text-sm md:gap-10">
            <a href="#">Home</a>
            <a href="#collections">Invitations</a>
            <a href="#gifts">Gifts</a>
            <a href="#explore">Explore</a>
          </div> */}
        </div>
      </nav>
    )
  }