document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ambil daftar class animasi dari data-anim
        const animClasses = entry.target.dataset.anim;
        // Tambahkan semua class animasi sekaligus
        animClasses.split(' ').forEach(cls => entry.target.classList.add(cls));
        // Stop observing agar animasi hanya sekali
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe elemen yang punya data-anim
  document.querySelectorAll('[data-anim]').forEach(el => {
    observer.observe(el);
  });
});

// index.js
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ambil daftar class animasi dari data-anim
        const animClasses = entry.target.dataset.anim.split(' ');
        // Tambahkan class animate__animated agar opacity jadi 1
        entry.target.classList.add('animate__animated');
        // Tambahkan semua class animasi lainnya
        animClasses.forEach(cls => entry.target.classList.add(cls));
        // Stop observing agar animasi hanya sekali
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  // Amati elemen yang punya attribute data-anim
  document.querySelectorAll('[data-anim]').forEach(el => {
    observer.observe(el);
  });
});
