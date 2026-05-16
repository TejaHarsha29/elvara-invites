export default function FeatureSection() {
    return (
      <section className="grid gap-10 px-6 py-24 md:grid-cols-2 md:px-16 lg:px-24">
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af7a]">
            Premium Craftsmanship
          </p>
  
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Designed
            <br />
            To Feel Personal.
          </h2>
  
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            From PVC invitations to caricature concepts and
            curated wedding themes, every detail is designed to
            reflect your celebration beautifully.
          </p>
        </div>
  
        <div>
          <img
            src="/images/banner-curation.png"
            alt="Wedding Curation"
            className="w-full rounded-[36px] object-cover"
          />
        </div>
      </section>
    );
  }