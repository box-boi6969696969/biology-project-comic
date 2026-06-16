// ==========================================
// INTERACTIONS MODULE - ALL CLICKABLE
// ==========================================
const Interactions = {
    // Current QTE state
    qte: {
        active: false,
        sequence: [],
        currentIndex: 0,
        timer: null,
        countdownTimer: null,
        timeLeft: 0
    },

    // Handle multiple choice answer click
    handleChoice(choiceIndex) {
        const track = Game.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[Game.state.currentStage - 1];
        const panel = stage.panels[Game.state.currentPanel];
        const choice = panel.choices[choiceIndex];
        
        // Disable all choice buttons
        panel.choices.forEach((_, i) => {
            const btn = document.getElementById(`choice-${i}`);
            if (btn) {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                btn.style.pointerEvents = 'none';
            }
        });
        
        // Highlight selected
        const selectedBtn = document.getElementById(`choice-${choiceIndex}`);
        if (selectedBtn) {
            selectedBtn.style.opacity = '1';
        }
        
        const feedbackDiv = document.getElementById('choice-feedback');
        feedbackDiv.classList.remove('hidden');
        
        if (choice.correct) {
            if (selectedBtn) {
                selectedBtn.style.borderColor = '#2EC4A5';
                selectedBtn.style.boxShadow = '0 0 20px #2EC4A5';
            }
            feedbackDiv.innerHTML = `
                <div class="p-4 rounded-lg border-2 border-green-400 bg-green-900/30">
                    <p class="font-bold text-green-400">
                        <i class="fas fa-check-circle mr-2"></i>${choice.feedback}
                    </p>
                </div>
            `;
            Game.addScore(15);
            Game.addHealth(10);
            Game.logEvent(`Correct answer in Stage ${Game.state.currentStage}`);
            
            // Show next button after delay
            setTimeout(() => {
                UI.elements.nextBtn.style.visibility = 'visible';
            }, 1500);
        } else {
            if (selectedBtn) {
                selectedBtn.style.borderColor = '#E63946';
                selectedBtn.style.boxShadow = '0 0 20px #E63946';
            }
            feedbackDiv.innerHTML = `
                <div class="p-4 rounded-lg border-2 border-red-500 bg-red-900/30">
                    <p class="font-bold text-red-400">
                        <i class="fas fa-times-circle mr-2"></i>${choice.feedback}
                    </p>
                    <p class="text-sm text-gray-400 mt-2">Try another answer!</p>
                </div>
            `;
            Game.addHealth(-10);
            Effects.screenShake();
            Game.logEvent(`Wrong answer in Stage ${Game.state.currentStage}`);
            
            // Re-enable other buttons after delay
            setTimeout(() => {
                panel.choices.forEach((_, i) => {
                    const btn = document.getElementById(`choice-${i}`);
                    if (btn && i !== choiceIndex) {
                        btn.disabled = false;
                        btn.style.opacity = '1';
                        btn.style.pointerEvents = 'auto';
                        btn.style.borderColor = '';
                        btn.style.boxShadow = '';
                    }
                });
            }, 1500);
        }
    },

    // Handle QTE key CLICK (fully clickable, no keyboard needed)
    handleQTEClick(element) {
        if (!this.qte.active) return;
        
        const clickedIndex = parseInt(element.dataset.index);
        const clickedKey = element.dataset.key;
        
        // Only accept clicks in order
        if (clickedIndex !== this.qte.currentIndex) {
            // Wrong order - visual feedback
            element.classList.add('wrong');
            Game.addHealth(-5);
            Effects.screenShake();
            setTimeout(() => element.classList.remove('wrong'), 500);
            return;
        }
        
        // Correct key clicked
        element.classList.remove('active');
        element.classList.add('pressed');
        element.style.pointerEvents = 'none';
        
        this.qte.currentIndex++;
        
        const progressEl = document.getElementById('qte-progress');
        if (progressEl) {
            progressEl.textContent = this.qte.currentIndex;
        }
        
        // Reset timer for next key
        this.resetQTETimer();
        
        if (this.qte.currentIndex >= this.qte.sequence.length) {
            // QTE Complete!
            this.qteSuccess();
        } else {
            // Highlight next key
            this.highlightNextQTEKey();
        }
    },

    // Start QTE timer with visual countdown
    resetQTETimer() {
        if (this.qte.timer) clearTimeout(this.qte.timer);
        if (this.qte.countdownTimer) clearInterval(this.qte.countdownTimer);
        
        const track = Game.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[Game.state.currentStage - 1];
        const panel = stage.panels[Game.state.currentPanel];
        const timePerKey = panel.timePerKey || 2500;
        
        this.qte.timeLeft = timePerKey;
        
        // Update timer display
        const timerEl = document.getElementById('qte-timer');
        if (timerEl) {
            timerEl.textContent = (timePerKey / 1000).toFixed(1);
        }
        
        // Countdown interval
        this.qte.countdownTimer = setInterval(() => {
            this.qte.timeLeft -= 100;
            if (timerEl) {
                timerEl.textContent = Math.max(0, this.qte.timeLeft / 1000).toFixed(1);
                if (this.qte.timeLeft <= 500) {
                    timerEl.style.color = '#E63946';
                } else {
                    timerEl.style.color = '#4CC9F0';
                }
            }
        }, 100);
        
        // Timeout handler
        this.qte.timer = setTimeout(() => {
            if (this.qte.active) {
                this.qteFail("Time's up!");
            }
        }, timePerKey);
    },

    // Highlight the next QTE key that needs to be clicked
    highlightNextQTEKey() {
        // Remove all active highlights
        document.querySelectorAll('.qte-key').forEach(el => el.classList.remove('active'));
        
        const nextKey = document.getElementById(`qte-key-${this.qte.currentIndex}`);
        if (nextKey) {
            nextKey.classList.add('active');
        }
    },

    // QTE completed successfully
    qteSuccess() {
        this.clearQTETimers();
        this.qte.active = false;
        
        const track = Game.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[Game.state.currentStage - 1];
        const panel = stage.panels[Game.state.currentPanel];
        
        const feedbackDiv = document.getElementById('qte-feedback');
        feedbackDiv.classList.remove('hidden');
        feedbackDiv.innerHTML = `
            <div class="p-4 rounded-lg border-2 border-green-400 bg-green-900/30 inline-block">
                <p class="font-bold text-green-400">
                    <i class="fas fa-check-circle mr-2"></i>Sequence Complete! +${panel.reward} points!
                </p>
            </div>
        `;
        
        Game.addScore(panel.reward);
        Game.addHealth(10);
        Game.logEvent(`QTE Success: ${panel.title}`);
        Effects.spawnConfetti(20);
        
        setTimeout(() => {
            UI.elements.nextBtn.style.visibility = 'visible';
        }, 1500);
    },

    // QTE failed
    qteFail(reason) {
        this.clearQTETimers();
        this.qte.active = false;
        
        const feedbackDiv = document.getElementById('qte-feedback');
        feedbackDiv.classList.remove('hidden');
        feedbackDiv.innerHTML = `
            <div class="p-4 rounded-lg border-2 border-red-500 bg-red-900/30 inline-block">
                <p class="font-bold text-red-400">
                    <i class="fas fa-times-circle mr-2"></i>${reason}
                </p>
                <button onclick="Interactions.retryQTE()" class="btn-comic btn-red mt-3 text-sm py-2 px-4">
                    <i class="fas fa-redo mr-2"></i>RETRY
                </button>
            </div>
        `;
        
        Game.addHealth(-15);
        Effects.screenShake();
        Game.logEvent(`QTE Failed: ${reason}`);
    },

    // Clear all QTE timers
    clearQTETimers() {
        if (this.qte.timer) clearTimeout(this.qte.timer);
        if (this.qte.countdownTimer) clearInterval(this.qte.countdownTimer);
        this.qte.timer = null;
        this.qte.countdownTimer = null;
    },

    // Retry QTE - re-render the panel
    retryQTE() {
        const track = Game.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[Game.state.currentStage - 1];
        const panel = stage.panels[Game.state.currentPanel];
        
        // Reset QTE state
        this.qte.active = false;
        this.qte.currentIndex = 0;
        this.qte.sequence = [];
        
        // Re-render panel which will auto-start QTE
        UI.renderPanel(panel, Game.state.currentTrack);
        
        // Initialize and start QTE
        this.qte.sequence = panel.sequence;
        this.qte.currentIndex = 0;
        this.qte.active = true;
        
        // Highlight first key
        setTimeout(() => {
            this.highlightNextQTEKey();
            this.resetQTETimer();
        }, 600);
    },

    // Handle upgrade selection click
    selectUpgrade(upgradeIndex) {
        const track = Game.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[Game.state.currentStage - 1];
        const panel = stage.panels[Game.state.currentPanel];
        const upgrade = panel.upgrades[upgradeIndex];
        
        // Apply upgrade effect
        switch(upgrade.effect) {
            case 'fructose':
                Game.addHealth(30);
                Game.addUpgrade('Fructose Engine');
                break;
            case 'alkaline':
                Game.addHealth(25);
                Game.addUpgrade('Alkaline Shield');
                break;
            case 'lube':
                Game.addHealth(15);
                Game.addUpgrade('Pre-Launch Lube');
                break;
            case 'granulosa':
                Game.addHealth(25);
                Game.addUpgrade('Granulosa Shield');
                break;
            case 'theca':
                Game.addHealth(20);
                Game.addUpgrade('Theca Armor');
                break;
            case 'antrum':
                Game.addHealth(15);
                Game.addUpgrade('Antrum Reserve');
                break;
            default:
                Game.addHealth(20);
                Game.addUpgrade(upgrade.name);
        }
        
        // Mark as equipped visually
        document.querySelectorAll('.upgrade-slot').forEach((el, i) => {
            if (i === upgradeIndex) {
                el.classList.add('equipped');
                if (!el.querySelector('.level-badge')) {
                    const badge = document.createElement('div');
                    badge.className = 'level-badge';
                    badge.textContent = '1';
                    el.appendChild(badge);
                }
            }
            el.style.pointerEvents = 'none';
            if (i !== upgradeIndex) el.style.opacity = '0.4';
        });
        
        const feedbackDiv = document.getElementById('upgrade-feedback');
        feedbackDiv.classList.remove('hidden');
        feedbackDiv.innerHTML = `
            <div class="p-4 rounded-lg border-2 border-green-400 bg-green-900/30 inline-block">
                <p class="font-bold text-green-400">
                    <i class="fas fa-check-circle mr-2"></i>${upgrade.name} equipped!
                </p>
            </div>
        `;
        
        UI.updateStats(Game.state.health, Game.state.maxHealth, Game.state.score);
        UI.updateGear(Game.state.upgrades);
        Game.logEvent(`Equipped: ${upgrade.name}`);
        
        setTimeout(() => {
            UI.elements.nextBtn.style.visibility = 'visible';
        }, 1500);
    }
};
