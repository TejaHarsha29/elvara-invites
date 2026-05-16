export default function Footer() {
    return (
      <footer className="border-t border-[#E8DED1] px-6 py-10 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-[0.2em] text-[#6E1F28]">
              ELVARA
            </h2>
  
            <p className="mt-3 text-[#666666]">
              Luxury wedding invitations & curated gifting experiences.
            </p>
          </div>
  
          <div className="flex flex-wrap gap-6 text-sm text-[#5B5B5B]">
            <a href="#">Home</a>
            <a href="#collections">Invitations</a>
            <a href="#gifts">Gifts</a>
            <a href="#explore">Explore</a>
          </div>
        </div>
      </footer>
    );
  }