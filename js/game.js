// ==========================================
// GAME STATE & CORE LOGIC
// ==========================================
const Game = {
    // Central game state
    state: {
        currentTrack: null,
        currentStage: 1,
        currentPanel: 0,
        health: 100,
        maxHealth: 100,
        score: 0,
        upgrades: [],
        conceptsLearned: [],
        stageComplete: false,
        gameLog: [],
        isGameOver: false
    },

    // Start a track (1 = Sperm, 2 = Oocyte)
    startTrack(trackNumber) {
        // Reset state
        this.state.currentTrack = trackNumber;
        this.state.currentStage = 1;
        this.state.currentPanel = 0;
        this.state.health = 100;
        this.state.maxHealth = 100;
        this.state.score = 0;
        this.state.upgrades = [];
        this.state.conceptsLearned = [];
        this.state.stageComplete = false;
        this.state.gameLog = [];
        this.state.isGameOver = false;

        const track = trackNumber === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        
        // Update header UI
        UI.elements.trackTitle.textContent = track.title;
        UI.elements.trackTitle.style.color = track.statColor;
        UI.elements.statLabel.textContent = track.statLabel;
        UI.elements.statLabel.style.color = track.statColor;
        
        // Set stat bar gradient based on track
        const gradient = trackNumber === 1 
            ? 'linear-gradient(90deg, #4CC9F0, #2EC4A5)'
            : 'linear-gradient(90deg, #F72585, #FF9E00)';
        UI.elements.statBarFill.style.background = gradient;
        
        // Update displays
        UI.updateStats(this.state.health, this.state.maxHealth, this.state.score);
        UI.updateGear(this.state.upgrades);
        UI.updateProgressSteps(1);
        
        // Switch to game screen
        UI.showScreen('game');
        
        // Show first stage
        this.showStage(1);
        this.logEvent(`Started ${track.title}`);
    },

    // Show a specific stage
    showStage(stageNumber) {
        this.state.currentStage = stageNumber;
        this.state.currentPanel = 0;
        this.state.stageComplete = false;
        
        // Clear any active QTE
        Interactions.qte.active = false;
        Interactions.clearQTETimers();
        
        const track = this.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[stageNumber - 1];
        
        UI.elements.stageName.textContent = stage.name;
        UI.updateProgressSteps(stageNumber);
        this.showPanel(0);
    },

    // Show a specific panel within the current stage
    showPanel(panelIndex) {
        const track = this.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[this.state.currentStage - 1];
        
        // Check if we've gone past all panels in this stage
        if (panelIndex >= stage.panels.length) {
            this.state.stageComplete = true;
            if (this.state.currentStage < 5) {
                UI.renderStageTransition(this.state.currentStage, this.state.currentStage + 1, track);
            } else {
                UI.renderVictory();
            }
            return;
        }
        
        this.state.currentPanel = panelIndex;
        const panel = stage.panels[panelIndex];
        
        UI.renderPanel(panel, this.state.currentTrack);
        
        // Auto-start QTE panels after rendering
        if (panel.type === 'qte') {
            this.initQTE(panel);
        }
        
        // Check for victory flag on narrative panels
        if (panel.isVictory) {
            setTimeout(() => UI.renderVictory(), 3000);
        }
    },

    // Initialize and start QTE for a panel
    initQTE(panel) {
        Interactions.qte.sequence = panel.sequence;
        Interactions.qte.currentIndex = 0;
        Interactions.qte.active = true;
        
        // Highlight first key after a brief delay for the player to see
        setTimeout(() => {
            Interactions.highlightNextQTEKey();
            Interactions.resetQTETimer();
        }, 600);
    },

    // Advance to next panel
    nextPanel() {
        if (this.state.isGameOver) return;
        
        // If QTE is active, don't allow skipping
        if (Interactions.qte.active) return;
        
        this.showPanel(this.state.currentPanel + 1);
    },

    // Add health (positive or negative)
    addHealth(amount) {
        this.state.health = Math.max(0, Math.min(this.state.maxHealth, this.state.health + amount));
        UI.updateStats(this.state.health, this.state.maxHealth, this.state.score);
        
        if (amount < 0) {
            Effects.screenShake();
        }
        
        if (this.state.health <= 0 && !this.state.isGameOver) {
            this.gameOver();
        }
    },

    // Add score
    addScore(amount) {
        this.state.score += amount;
        UI.updateStats(this.state.health, this.state.maxHealth, this.state.score);
    },

    // Add an upgrade
    addUpgrade(upgradeName) {
        this.state.upgrades.push(upgradeName);
        UI.updateGear(this.state.upgrades);
    },

    // Game over
    gameOver() {
        this.state.isGameOver = true;
        Interactions.qte.active = false;
        Interactions.clearQTETimers();
        UI.renderGameOver();
        this.logEvent('Game Over - Health depleted');
    },

    // Show main menu
    showMainMenu() {
        Interactions.qte.active = false;
        Interactions.clearQTETimers();
        this.state.currentTrack = null;
        this.state.isGameOver = false;
        UI.showScreen('menu');
    },

    // Restart current track
    restartCurrentTrack() {
        Interactions.qte.active = false;
        Interactions.clearQTETimers();
        if (this.state.currentTrack) {
            this.startTrack(this.state.currentTrack);
        }
    },

    // Log an event
    logEvent(event) {
        this.state.gameLog.push({
            time: new Date().toISOString(),
            event: event
        });
    }
};

// Initialize the game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    UI.init();
    UI.showScreen('menu');
});
