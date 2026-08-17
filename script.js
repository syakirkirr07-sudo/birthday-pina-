// Fungsi untuk membuat confetti
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb3d9', '#ff66cc', '#ff99dd'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            // Variasi bentuk confetti
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            } else {
                confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            }
            
            document.body.appendChild(confetti);
            
            // Hapus confetti setelah animasi selesai
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 30);
    }
}

// Fungsi untuk efek kejutan saat tombol diklik
function celebrate() {
    const button = document.querySelector('.btn-celebrate');
    const card = document.querySelector('.card');
    const flame = document.querySelector('.flame');
    
    // Ubah teks tombol
    button.textContent = '🎊 Yeay! Selamat Ulang Tahun! 🎊';
    button.disabled = true;
    button.style.background = 'linear-gradient(135deg, #ff1493, #c71585)';
    
    // Tambahkan efek shake pada card
    card.style.animation = 'shake 0.5s';
    
    // Matikan lilin
    if (flame) {
        flame.style.opacity = '0';
        setTimeout(() => {
            flame.style.display = 'none';
        }, 500);
    }
    
    // Buat confetti
    createConfetti();
    
    // Ubah warna background
    document.body.style.animation = 'colorChange 2s ease-in-out';
    
    // Tampilkan surat spesial setelah 2 detik
    setTimeout(() => {
        const specialLetter = document.getElementById('specialLetter');
        specialLetter.classList.add('show');
    }, 2000);
    
    // Reset tombol setelah 3 detik
    setTimeout(() => {
        button.textContent = '🎉 Rayakan Lagi! 🎉';
        button.disabled = false;
        card.style.animation = 'fadeInScale 1s ease-out';
        
        // Hidupkan lilin lagi
        if (flame) {
            flame.style.display = 'block';
            flame.style.opacity = '1';
        }
    }, 3000);
}

// Fungsi untuk menutup surat spesial
function closeLetter() {
    const specialLetter = document.getElementById('specialLetter');
    specialLetter.classList.remove('show');
}

// Animasi tambahan untuk shake effect
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes colorChange {
        0%, 100% {
            background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffdde1 100%);
        }
        50% {
            background: linear-gradient(135deg, #fecfef 0%, #ff9a9e 50%, #ffd1dc 100%);
        }
    }
`;
document.head.appendChild(style);

// Tambahkan efek hover pada nama
const nameElement = document.querySelector('.name');
if (nameElement) {
    nameElement.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        this.style.transition = 'all 0.3s ease';
    });
    
    nameElement.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Tambahkan efek particles yang mengikuti cursor (opsional)
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.95) {
        const particle = document.createElement('div');
        particle.className = 'confetti';
        particle.style.left = e.pageX + 'px';
        particle.style.top = e.pageY + 'px';
        particle.style.position = 'absolute';
        particle.style.background = '#ff69b4';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'fall 1s linear forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});

// Pesan selamat datang saat halaman dimuat
window.addEventListener('load', function() {
    console.log('🎉 Selamat Ulang Tahun Pina! 🎂');
    console.log('💖 Website dibuat dengan penuh kasih sayang 💖');
    
    // Tambahkan efek sparkle pada judul
    const title = document.querySelector('.title');
    setInterval(() => {
        title.style.textShadow = `
            ${Math.random() * 5}px ${Math.random() * 5}px 10px rgba(255, 105, 180, 0.8),
            ${Math.random() * -5}px ${Math.random() * -5}px 10px rgba(255, 20, 147, 0.8)
        `;
    }, 500);
});

// Easter egg: klik lilin untuk mematikan/menghidupkan
const candle = document.querySelector('.candle');
if (candle) {
    candle.addEventListener('click', function() {
        const flame = document.querySelector('.flame');
        if (flame.style.opacity === '0') {
            flame.style.opacity = '1';
            flame.style.display = 'block';
        } else {
            flame.style.opacity = '0';
            setTimeout(() => {
                flame.style.display = 'none';
            }, 300);
        }
    });
    
    candle.style.cursor = 'pointer';
}
