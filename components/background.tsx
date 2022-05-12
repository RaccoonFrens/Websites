function Background({ children }: { children: React.ReactNode }) {
  return (
    <section className="background-container">
      {/* Gradient Overlay */}
      <div className="background-overlay"></div>

      {/* Container children */}
      {children}
    </section>
  );
}

export default Background;
