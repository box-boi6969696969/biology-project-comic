// ==========================================
// UI RENDERING MODULE
// ==========================================
const UI = {
    // DOM cache
    elements: {},

    // Initialize DOM references
    init() {
        this.elements = {
            mainMenu: document.getElementById('main-menu'),
            gameInterface: document.getElementById('game-interface'),
            victoryScreen: document.getElementById('victory-screen'),
            trackTitle: document.getElementById('track-title'),
            stageName: document.getElementById('stage-name'),
            statLabel: document.getElementById('stat-label'),
            statValue: document.getElementById('stat-value'),
            statBarFill: document.getElementById('stat-bar-fill'),
            scoreDisplay: document.getElementById('score-display'),
            gearText: document.getElementById('gear-text'),
            comicViewport: document.getElementById('comic-viewport'),
            nextBtn: document.getElementById('next-btn'),
            cheatSheetModal: document.getElementById('cheat-sheet-modal'),
            cheatSheetContent: document.getElementById('cheat-sheet-content'),
            victorySummary: document.getElementById('victory-summary'),
            conceptsLearned: document.getElementById('concepts-learned')
        };
    },

    // Show a screen, hide others
    showScreen(screenName) {
        this.elements.mainMenu.classList.add('hidden');
        this.elements.gameInterface.classList.add('hidden');
        this.elements.victoryScreen.classList.add('hidden');
        
        switch(screenName) {
            case 'menu':
                this.elements.mainMenu.classList.remove('hidden');
                break;
            case 'game':
                this.elements.gameInterface.classList.remove('hidden');
                break;
            case 'victory':
                this.elements.victoryScreen.classList.remove('hidden');
                break;
        }
    },

    // Update stats display
    updateStats(health, maxHealth, score) {
        this.elements.statValue.textContent = `${health}/${maxHealth}`;
        this.elements.statBarFill.style.width = `${(health / maxHealth) * 100}%`;
        this.elements.scoreDisplay.innerHTML = `<i class="fas fa-star mr-1"></i>${score}`;
    },

    // Update gear display
    updateGear(upgrades) {
        this.elements.gearText.textContent = upgrades.length > 0 
            ? upgrades.join(', ')
            : 'No upgrades equipped';
    },

    // Update progress steps
    updateProgressSteps(currentStage) {
        for (let i = 1; i <= 5; i++) {
            const dot = document.getElementById(`step-${i}`);
            const line = document.getElementById(`line-${i}`);
            
            if (dot) {
                dot.className = 'step-dot';
                if (i < currentStage) dot.classList.add('completed');
                else if (i === currentStage) dot.classList.add('active');
            }
            
            if (line && i < 5) {
                line.className = 'step-line';
                if (i < currentStage) line.classList.add('completed');
            }
        }
    },

    // Render a panel based on its type
    renderPanel(panel, trackNum) {
        let html = '';
        
        switch (panel.type) {
            case 'narrative':
                html = this.renderNarrativePanel(panel, trackNum);
                break;
            case 'choice':
                html = this.renderChoicePanel(panel, trackNum);
                break;
            case 'qte':
                html = this.renderQTEPanel(panel, trackNum);
                break;
            case 'upgrade':
                html = this.renderUpgradePanel(panel, trackNum);
                break;
        }
        
        this.elements.comicViewport.innerHTML = html;
        
        // Show/hide next button
        if (panel.type === 'choice' || panel.type === 'qte' || panel.type === 'upgrade') {
            this.elements.nextBtn.style.visibility = 'hidden';
        } else {
            this.elements.nextBtn.style.visibility = 'visible';
        }
    },

    // Narrative panel with optional dialogue
    renderNarrativePanel(panel, trackNum) {
        const trackColor = trackNum === 1 ? '#4CC9F0' : '#F72585';
        const dialogueHtml = panel.dialogue ? `
            <div class="mt-4 flex ${panel.dialogue.type === 'sperm' ? 'justify-start' : 'justify-end'}">
                <div class="speech-bubble ${panel.dialogue.type === 'sperm' ? 'sperm-bubble' : 'oocyte-bubble'} max-w-md">
                    "${panel.dialogue.text}"
                </div>
            </div>
        ` : '';
        
        return `
            <div class="panel-narrative rounded-xl p-6 md:p-8 panel-pop">
                <h3 class="title-font text-2xl md:text-3xl mb-4" style="color: ${trackColor};">
                    ${panel.title}
                </h3>
                ${panel.visual ? `<div class="mb-4">${panel.visual}</div>` : ''}
                <div class="text-base md:text-lg leading-relaxed whitespace-pre-line">
                    ${panel.content}
                </div>
                ${dialogueHtml}
            </div>
        `;
    },

    // Choice panel with clickable answer buttons
    renderChoicePanel(panel, trackNum) {
        const btnClass = trackNum === 1 ? 'btn-cyan' : 'btn-pink';
        const choicesHtml = panel.choices.map((choice, index) => `
            <button onclick="Interactions.handleChoice(${index})" 
                class="btn-comic w-full text-left text-base md:text-lg py-4 px-6 mb-3 ${btnClass}"
                id="choice-${index}">
                <span class="mr-3">${String.fromCharCode(65 + index)}.</span>${choice.text}
            </button>
        `).join('');
        
        return `
            <div class="panel-choice rounded-xl p-6 md:p-8 panel-pop">
                <h3 class="title-font text-2xl md:text-3xl mb-4" style="color: #4CC9F0;">${panel.title}</h3>
                ${panel.visual ? `<div class="mb-4">${panel.visual}</div>` : ''}
                <p class="text-lg mb-4">${panel.content}</p>
                <div class="rounded-lg p-4 mb-4 border-l-4" style="background: rgba(0,0,0,0.5); border-color: #FFD60A;">
                    <p class="font-bold" style="color: #FFD60A;"><i class="fas fa-question-circle mr-2"></i>${panel.question}</p>
                </div>
                <div id="choices-container">${choicesHtml}</div>
                <div id="choice-feedback" class="mt-4 hidden"></div>
            </div>
        `;
    },

    // QTE panel with FULLY CLICKABLE on-screen buttons
    renderQTEPanel(panel, trackNum) {
        const keysHtml = panel.sequence.map((key, index) => `
            <div class="qte-key" id="qte-key-${index}" data-key="${key.toUpperCase()}" data-index="${index}"
                onclick="Interactions.handleQTEClick(this)">
                ${key.toUpperCase()}
            </div>
        `).join('');
        
        // Also add clickable arrow icons for UP/DOWN/LEFT/RIGHT
        const arrowLegend = panel.sequence.some(k => ['UP','DOWN','LEFT','RIGHT'].includes(k)) ? `
            <div class="text-center mt-2 mb-4 text-sm text-gray-400">
                <i class="fas fa-arrow-up mx-1"></i> UP 
                <i class="fas fa-arrow-down mx-1"></i> DOWN 
                <i class="fas fa-arrow-left mx-1"></i> LEFT 
                <i class="fas fa-arrow-right mx-1"></i> RIGHT
            </div>
        ` : '';
        
        return `
            <div class="panel-action rounded-xl p-6 md:p-8 panel-pop">
                <h3 class="title-font text-2xl md:text-3xl mb-4" style="color: #E63946;">${panel.title}</h3>
                ${panel.visual ? `<div class="mb-4">${panel.visual}</div>` : ''}
                <p class="text-lg mb-4">${panel.content}</p>
                <div class="text-center mb-4">
                    <span class="mono-font text-sm text-gray-400">Click each key in order before time runs out!</span>
                </div>
                ${arrowLegend}
                <div class="flex flex-wrap justify-center gap-2 mb-6" id="qte-container">
                    ${keysHtml}
                </div>
                <div class="text-center">
                    <div class="inline-block px-4 py-2 rounded-lg bg-black/50 border border-gray-700">
                        <span class="mono-font text-lg" style="color: #FFD60A;">
                            Progress: <span id="qte-progress">0</span>/${panel.sequence.length}
                        </span>
                    </div>
                    <div class="mt-2">
                        <div class="inline-block px-3 py-1 rounded bg-black/30 border border-gray-700">
                            <span class="mono-font text-xs text-gray-400">
                                Time: <span id="qte-timer" class="text-red-400">--</span>s
                            </span>
                        </div>
                    </div>
                </div>
                <div id="qte-feedback" class="mt-4 text-center hidden"></div>
            </div>
        `;
    },

    // Upgrade panel with clickable equipment choices
    renderUpgradePanel(panel, trackNum) {
        const upgradesHtml = panel.upgrades.map((upgrade, index) => `
            <div class="upgrade-slot" id="upgrade-${index}" onclick="Interactions.selectUpgrade(${index})">
                <div class="text-4xl mb-3"><i class="${upgrade.icon}" style="color: #2EC4A5;"></i></div>
                <h4 class="font-bold text-lg mb-2">${upgrade.name}</h4>
                <p class="text-sm text-gray-400">${upgrade.description}</p>
                <button class="btn-comic btn-green mt-4 text-sm py-2 px-4" onclick="event.stopPropagation(); Interactions.selectUpgrade(${index})">
                    EQUIP
                </button>
            </div>
        `).join('');
        
        return `
            <div class="panel-upgrade rounded-xl p-6 md:p-8 panel-pop">
                <h3 class="title-font text-2xl md:text-3xl mb-4" style="color: #2EC4A5;">${panel.title}</h3>
                <p class="text-lg mb-6">${panel.content}</p>
                ${panel.visual ? `<div class="mb-4">${panel.visual}</div>` : ''}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${upgradesHtml}
                </div>
                <div id="upgrade-feedback" class="mt-4 text-center hidden"></div>
            </div>
        `;
    },

    // Render stage transition screen
    renderStageTransition(currentStage, nextStage, track) {
        const stage = track.stages[nextStage - 1];
        
        this.elements.comicViewport.innerHTML = `
            <div class="panel-narrative rounded-xl p-8 text-center panel-pop">
                <h2 class="title-font text-4xl mb-4 gradient-text">STAGE ${currentStage} COMPLETE!</h2>
                <div class="text-6xl mb-4"><i class="fas fa-trophy" style="color: #FFD60A;"></i></div>
                <p class="text-xl mb-6">Get ready for the next challenge...</p>
                <div class="panel-action rounded-lg p-4 inline-block">
                    <h3 class="title-font text-2xl mb-2" style="color: #E63946;">COMING UP: ${stage.name}</h3>
                    <p class="text-gray-400">${stage.description}</p>
                </div>
                <div class="mt-6">
                    <button onclick="Game.showStage(${nextStage})" class="btn-comic btn-green">
                        BEGIN STAGE ${nextStage} <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;
        this.elements.nextBtn.style.visibility = 'hidden';
    },

    // Render game over screen
    renderGameOver() {
        this.elements.comicViewport.innerHTML = `
            <div class="panel-action rounded-xl p-8 text-center panel-pop">
                <h2 class="title-font text-4xl mb-4 gameover-pulse" style="color: #E63946;">GAME OVER</h2>
                <div class="text-6xl mb-4"><i class="fas fa-heart-broken" style="color: #E63946;"></i></div>
                <p class="text-xl mb-6">Your health reached zero! The journey has ended.</p>
                <div class="flex gap-4 justify-center">
                    <button onclick="Game.restartCurrentTrack()" class="btn-comic btn-green">
                        <i class="fas fa-redo mr-2"></i>TRY AGAIN
                    </button>
                    <button onclick="Game.showMainMenu()" class="btn-comic btn-purple">
                        <i class="fas fa-home mr-2"></i>MENU
                    </button>
                </div>
            </div>
        `;
        this.elements.nextBtn.style.visibility = 'hidden';
    },

    // Toggle cheat sheet modal
    toggleCheatSheet() {
        const modal = this.elements.cheatSheetModal;
        const isActive = modal.classList.contains('active');
        
        if (isActive) {
            modal.classList.remove('active');
        } else {
            this.renderCheatSheet();
            modal.classList.add('active');
        }
    },

    // Render cheat sheet content
    renderCheatSheet() {
        if (!Game.state.currentTrack) return;
        
        const track = Game.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const stage = track.stages[Game.state.currentStage - 1];
        
        let html = `
            <div class="mb-4 p-3 rounded-lg border-2 ${Game.state.currentTrack === 1 ? 'border-cyan-400' : 'border-pink-400'} bg-black/50">
                <h3 class="font-bold text-lg mb-1">${stage.name}</h3>
                <p class="text-sm text-gray-400">${stage.description}</p>
            </div>
        `;
        
        stage.cheatSheet.forEach(item => {
            html += `
                <div class="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 class="font-bold" style="color: #4CC9F0;">${item.term}</h4>
                    <p class="text-sm text-gray-300">${item.definition}</p>
                </div>
            `;
        });
        
        html += `
            <div class="mt-4 p-3 rounded-lg border border-gray-700 bg-black/30">
                <h4 class="font-bold text-sm mb-2" style="color: #FFD60A;">Quick Reference</h4>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div><span style="color: #9D4EDD;">Track:</span> ${track.title}</div>
                    <div><span style="color: #9D4EDD;">Stage:</span> ${Game.state.currentStage}/5</div>
                    <div><span style="color: #9D4EDD;">Health:</span> ${Game.state.health}%</div>
                    <div><span style="color: #9D4EDD;">Score:</span> ${Game.state.score}</div>
                </div>
            </div>
        `;
        
        this.elements.cheatSheetContent.innerHTML = html;
    },

    // Render victory screen
    renderVictory() {
        this.showScreen('victory');
        
        const track = Game.state.currentTrack === 1 ? GAME_DATA.track1 : GAME_DATA.track2;
        const trackName = Game.state.currentTrack === 1 ? "Sperm Track" : "Oocyte Track";
        
        this.elements.victorySummary.innerHTML = `
            <div class="flex items-center gap-4 mb-2">
                <i class="fas fa-route" style="color: #4CC9F0;"></i>
                <span><strong>Track:</strong> ${trackName}</span>
            </div>
            <div class="flex items-center gap-4 mb-2">
                <i class="fas fa-heart" style="color: #2EC4A5;"></i>
                <span><strong>Final Health:</strong> ${Game.state.health}/${Game.state.maxHealth}</span>
            </div>
            <div class="flex items-center gap-4 mb-2">
                <i class="fas fa-star" style="color: #FFD60A;"></i>
                <span><strong>Final Score:</strong> ${Game.state.score}</span>
            </div>
            <div class="flex items-center gap-4 mb-2">
                <i class="fas fa-wrench" style="color: #9D4EDD;"></i>
                <span><strong>Upgrades:</strong> ${Game.state.upgrades.join(', ') || 'None'}</span>
            </div>
        `;
        
        let conceptsHtml = '';
        track.stages.forEach(stage => {
            stage.cheatSheet.forEach(item => {
                conceptsHtml += `
                    <div class="bg-black/50 rounded-lg p-3 border border-gray-700">
                        <h4 class="font-bold text-sm mb-1" style="color: #4CC9F0;">${item.term}</h4>
                        <p class="text-xs text-gray-400">${item.definition}</p>
                    </div>
                `;
            });
        });
        this.elements.conceptsLearned.innerHTML = conceptsHtml;
        
        Effects.spawnConfetti();
    }
};

// Initialize UI on load
document.addEventListener('DOMContentLoaded', () => UI.init());
