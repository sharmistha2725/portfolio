useEffect(() => {
  const typed = new Typed(typedRef.current, {
    strings: [
      'AI/ML Engineer',
      'Software Developer',
      'MLOps Engineer'
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  });

  const createParticles = () => {
    const particles = [];
    const colors = ['#4A86E8', '#34A853', '#FBBC05', '#EA4335'];

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const size = Math.floor(Math.random() * 5) + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;

      const animDuration = Math.random() * 15 + 10;
      particle.style.animation = `float ${animDuration}s ease-in-out infinite`;

      particleRef.current.appendChild(particle);
      particles.push(particle);
    }

    return particles;
  };

  const particles = createParticles();

  return () => {
    if (typed) typed.destroy();

    particles.forEach((particle) => {
      particleRef.current?.removeChild(particle);
    });
  };
}, []);