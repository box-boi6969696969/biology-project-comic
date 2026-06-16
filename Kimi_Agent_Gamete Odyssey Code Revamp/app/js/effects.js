// ==========================================
// VISUAL EFFECTS MODULE
// ==========================================
const Effects = {
    // Spawn confetti celebration
    spawnConfetti(count = 50) {
        const colors = ['#9D4EDD', '#E63946', '#4CC9F0', '#F72585', '#FF9E00', '#2EC4A5', '#FFD60A'];
        
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }
    },

    // Screen shake on damage
    screenShake() {
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 500);
    },

    // Floating particles
    spawnParticles(count = 20, color = '#9D4EDD') {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                animation: floatUp ${Math.random() * 3 + 2}s linear forwards;
                opacity: ${Math.random() * 0.5 + 0.3};
            `;
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 5000);
        }
    }
};
