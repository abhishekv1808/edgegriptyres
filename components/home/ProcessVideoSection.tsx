export default function ProcessVideoSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Full-width Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/workshop-process.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm mb-5">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.1] mb-4 tracking-tight">
            Precision Fitment. <br className="hidden sm:block" />
            <span className="text-brand-red">Every Single Time.</span>
          </h2>
          <p className="text-white/60 font-body text-base md:text-lg max-w-xl mx-auto">
            From tyre changing to computerised wheel alignment — watch our experts work with care, speed, and world-class equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
