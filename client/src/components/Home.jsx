function Home({ onNavigate }) {
  return (
    <div className="landing-shell">
      <header className="hero">
        <p className="eyebrow">No account required</p>
        <h1>Learn by taking fast quizzes and fun kids games.</h1>
        <p>Visit the site, choose your path, and start learning right away.</p>
      </header>
      <main className="landing-grid">
        <section className="card path-card">
          <div className="path-badge">Exams</div>
          <h2>Practice real exam questions</h2>
          <p>Try AWS, Azure, Kubernetes, and Docker practice rounds with reviews at the end.</p>
          <button className="primary-btn" onClick={() => onNavigate('exams')}>Open exams</button>
        </section>
        <section className="card path-card">
          <div className="path-badge">Adults</div>
          <h2>Wind down with sleep sounds</h2>
          <p>Play soothing rain, ocean waves, or gentle noise to help you fall asleep, with a built-in timer.</p>
          <button className="primary-btn" onClick={() => onNavigate('sleepSounds')}>Open sleep sounds</button>
        </section>
        <section className="card path-card">
          <div className="path-badge">Kids</div>
          <h2>Play a kid-friendly quiz and voice game</h2>
          <p>Enjoy simple riddles and a pronunciation obstacle game that uses your voice.</p>
          <button className="primary-btn" onClick={() => onNavigate('kids')}>Open kids section</button>
        </section>
      </main>
    </div>
  );
}

export default Home;
