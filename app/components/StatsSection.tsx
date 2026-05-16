export default function StatsSection() {
    return (
      <section className="border-t border-white/10 px-6 py-20 md:px-16 lg:px-24">
        <div className="grid gap-10 text-center md:grid-cols-3">
          <div>
            <h3 className="text-5xl font-semibold">30+</h3>
            <p className="mt-3 text-neutral-400">Happy Customers</p>
          </div>
  
          <div>
            <h3 className="text-5xl font-semibold">5000+</h3>
            <p className="mt-3 text-neutral-400">Cards Delivered</p>
          </div>
  
          <div>
            <h3 className="text-5xl font-semibold">5+</h3>
            <p className="mt-3 text-neutral-400">Wedding Events</p>
          </div>
        </div>
      </section>
    );
  }