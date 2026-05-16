export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 border-b border-[#E8DED1] bg-[#F8F5F0]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5">
          <h1 className="text-2xl font-semibold tracking-[0.25em] text-[#6E1F28]">
            ELVARA
          </h1>
  
          <div className="flex items-center gap-6 text-sm md:gap-10">
            <a href="#">Home</a>
            <a href="#collections">Invitations</a>
            <a href="#gifts">Gifts</a>
            <a href="#explore">Explore</a>
          </div>
        </div>
      </nav>
    );
  }