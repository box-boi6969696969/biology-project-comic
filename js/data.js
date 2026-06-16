// ==========================================
// GAME DATA - ALL STAGES AND PANELS
// ==========================================
const GAME_DATA = {
    track1: {
        title: "TRACK 1: SPERM RACE",
        statLabel: "ATP ENERGY",
        statColor: "#4CC9F0",
        stages: [
            {
                name: "Stage 1: Seminiferous Tubules (The Factory)",
                description: "The origin of your journey - where spermatogenesis begins.",
                panels: [
                    {
                        type: "narrative",
                        title: "Welcome to the Factory",
                        content: "You awaken in the Seminiferous Tubules, a vast biological factory deep within the testes. Around you, germ cells are undergoing the incredible process of spermatogenesis.",
                        visual: `<div class="text-6xl text-center py-8"><i class="fas fa-industry" style="color: #4CC9F0;"></i><div class="mt-4 text-2xl" style="color: #9D4EDD;"><i class="fas fa-dna mx-2"></i><i class="fas fa-arrow-right mx-2"></i><i class="fas fa-circle mx-2" style="color: #4CC9F0;"></i></div></div>`,
                        dialogue: { text: "Whoa... where am I? Everything is so... tubular!", type: "sperm" }
                    },
                    {
                        type: "narrative",
                        title: "Diploid to Haploid",
                        content: "You start as a diploid SPERMATOGONIUM (2n=46). Through meiosis, you become haploid. First, you duplicate DNA and become a PRIMARY SPERMATOCYTE. Then Meiosis I produces SECONDARY SPERMATOCYTES (n=23), and Meiosis II creates SPERMATIDS.",
                        visual: `<div class="flex items-center justify-center gap-4 py-6 flex-wrap"><div class="text-center"><div class="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center text-2xl font-bold" style="background:#4A148C">2n</div><p class="text-xs mt-2">Spermatogonium</p></div><i class="fas fa-arrow-right text-2xl" style="color:#4CC9F0"></i><div class="text-center"><div class="w-16 h-16 rounded-full border-4 flex items-center justify-center text-lg font-bold" style="border-color:#4CC9F0;background:#006064">2n</div><p class="text-xs mt-2">Primary Spermatocyte</p></div><i class="fas fa-arrow-right text-2xl" style="color:#4CC9F0"></i><div class="text-center"><div class="w-14 h-14 rounded-full border-4 flex items-center justify-center text-base font-bold" style="border-color:#FFD60A;background:#F57F17">n</div><p class="text-xs mt-2">Secondary Spermatocyte</p></div><i class="fas fa-arrow-right text-2xl" style="color:#4CC9F0"></i><div class="text-center"><div class="w-12 h-12 rounded-full border-4 flex items-center justify-center text-sm font-bold" style="border-color:#2EC4A5;background:#1B5E20">n</div><p class="text-xs mt-2">Spermatid</p></div></div>`,
                        dialogue: { text: "I'm changing! Getting smaller... but more focused!", type: "sperm" }
                    },
                    {
                        type: "narrative",
                        title: "Spermiogenesis: Shedding Excess Baggage",
                        content: "During SPERMIOGENESIS, you shed most of your cytoplasm. Your GOLGI APPARATUS forms the ACROSOME - a helmet-like structure containing enzymes. Your CENTRIOLES construct the FLAGELLUM (tail) for propulsion. Your MITOCHONDRIA cluster in the MIDPIECE to generate ATP energy.",
                        visual: `<div class="flex justify-center py-4"><svg viewBox="0 0 300 100" class="w-full max-w-md"><ellipse cx="60" cy="50" rx="25" ry="20" fill="#4CC9F0" stroke="white" stroke-width="2"/><ellipse cx="50" cy="50" rx="15" ry="12" fill="#9D4EDD" opacity="0.6"/><rect x="80" y="44" width="40" height="12" rx="6" fill="#2EC4A5" stroke="white" stroke-width="1"/><path d="M120 50 Q200 30, 280 50 Q200 70, 120 50" fill="none" stroke="#4CC9F0" stroke-width="4" stroke-linecap="round"/><circle cx="95" cy="47" r="3" fill="#FFD60A"/><circle cx="100" cy="53" r="3" fill="#FFD60A"/><circle cx="105" cy="47" r="3" fill="#FFD60A"/><circle cx="110" cy="53" r="3" fill="#FFD60A"/><text x="60" y="95" text-anchor="middle" fill="white" font-size="10" font-family="Comic Neue">Head (Acrosome)</text><text x="100" y="95" text-anchor="middle" fill="white" font-size="10" font-family="Comic Neue">Midpiece</text><text x="200" y="95" text-anchor="middle" fill="white" font-size="10" font-family="Comic Neue">Flagellum</text></svg></div>`,
                        dialogue: { text: "Check out my new tail! And this helmet-looking thing...", type: "sperm" }
                    },
                    {
                        type: "choice",
                        title: "Spermatogenesis Check",
                        content: "A Sertoli cell is testing your knowledge before you can leave the tubule. Answer correctly to proceed!",
                        question: "What does the Golgi Apparatus become during spermiogenesis?",
                        choices: [
                            { text: "The Flagellum", correct: false, feedback: "Incorrect! The centrioles form the flagellum." },
                            { text: "The Acrosome", correct: true, feedback: "Correct! The Golgi apparatus forms the acrosome cap containing digestive enzymes!" },
                            { text: "The Midpiece", correct: false, feedback: "Incorrect! The midpiece is formed by mitochondria clustering." }
                        ],
                        visual: `<div class="text-6xl text-center py-4"><i class="fas fa-graduation-cap" style="color: #FFD60A;"></i></div>`
                    }
                ],
                cheatSheet: [
                    { term: "Spermatogonium", definition: "Diploid (2n) stem cells in seminiferous tubules that divide by mitosis." },
                    { term: "Primary Spermatocyte", definition: "Diploid cell that enters Meiosis I to reduce chromosome number." },
                    { term: "Secondary Spermatocyte", definition: "Haploid (n) cells produced after Meiosis I." },
                    { term: "Spermatid", definition: "Haploid cells produced after Meiosis II; undergo spermiogenesis." },
                    { term: "Spermiogenesis", definition: "The transformation of spermatids into mature spermatozoa." },
                    { term: "Acrosome", definition: "Cap-like structure derived from Golgi; contains enzymes to penetrate the egg." },
                    { term: "Flagellum", definition: "Tail structure for motility; powered by ATP from mitochondria." },
                    { term: "Sertoli Cells", definition: "Nurse cells that support and nourish developing sperm cells." }
                ]
            },
            {
                name: "Stage 2: Epididymis Swim School",
                description: "Learn to swim and mature before the big race.",
                panels: [
                    {
                        type: "narrative",
                        title: "Welcome to Swim School",
                        content: "You enter the EPIDIDYMIS - a long, coiled tube where you will learn to swim and mature. Here, you gain motility and the ability to fertilize. Without this training, you'd be useless in the race ahead!",
                        visual: `<div class="text-center py-6"><svg viewBox="0 0 400 80" class="w-full max-w-lg"><path d="M20 40 Q60 10, 100 40 T180 40 T260 40 T340 40 T400 40" fill="none" stroke="#4CC9F0" stroke-width="20" stroke-linecap="round" opacity="0.3"/><path d="M20 40 Q60 10, 100 40 T180 40 T260 40 T340 40 T400 40" fill="none" stroke="#4CC9F0" stroke-width="8" stroke-linecap="round"/><text x="200" y="75" text-anchor="middle" fill="#4CC9F0" font-size="12" font-family="Comic Neue">Epididymis - Coiled Tube (~6m long!)</text></svg></div>`,
                        dialogue: { text: "Time to learn how to swim! This tail won't power itself!", type: "sperm" }
                    },
                    {
                        type: "qte",
                        title: "Swim Training!",
                        content: "Tap the keys in order to practice your swimming technique! Build up ATP energy for the journey ahead.",
                        sequence: ["W", "A", "S", "D", "W", "S"],
                        timePerKey: 2500,
                        reward: 20,
                        visual: `<div class="text-6xl text-center py-4"><i class="fas fa-swimmer" style="color: #4CC9F0;"></i></div>`
                    },
                    {
                        type: "narrative",
                        title: "Maturation Complete",
                        content: "Excellent work! You've matured in the epididymis. Key changes occurred:\n\n1. Your cell membrane became more stable\n2. You gained forward motility\n3. Your DNA became highly condensed\n4. You are now a fully mature SPERMATOZOON!\n\nYou're ready for the big race!",
                        visual: `<div class="text-6xl text-center py-4"><i class="fas fa-certificate" style="color: #FFD60A;"></i></div>`,
                        dialogue: { text: "I'm a lean, mean, swimming machine! Let's do this!", type: "sperm" }
                    }
                ],
                cheatSheet: [
                    { term: "Epididymis", definition: "Coiled tube on testis where sperm mature and gain motility (~6m long)." },
                    { term: "Capacitation", definition: "Final maturation process that occurs in female reproductive tract." },
                    { term: "Spermatozoon", definition: "A fully mature male gamete with head, midpiece, and tail." }
                ]
            },
            {
                name: "Stage 3: The Blastoff (Vas Deferens & Glands)",
                description: "Power up with secretions from accessory glands.",
                panels: [
                    {
                        type: "narrative",
                        title: "The Vas Deferens Highway",
                        content: "You enter the VAS DEFERENS - a muscular tube that propels you upward during ejaculation. Strong peristaltic contractions push you toward the urethra.",
                        visual: `<div class="text-center py-4"><svg viewBox="0 0 300 60" class="w-full max-w-sm"><rect x="10" y="20" width="280" height="20" rx="10" fill="none" stroke="#E63946" stroke-width="3"/><circle cx="50" cy="30" r="8" fill="#4CC9F0"/><circle cx="150" cy="30" r="8" fill="#4CC9F0" opacity="0.7"/><circle cx="250" cy="30" r="8" fill="#4CC9F0" opacity="0.4"/><text x="150" y="60" text-anchor="middle" fill="white" font-size="10">Peristaltic Contractions</text></svg></div>`,
                        dialogue: { text: "Wheee! It's like a water slide... but muscular!", type: "sperm" }
                    },
                    {
                        type: "upgrade",
                        title: "Accessory Gland Power-Ups!",
                        content: "Three glands contribute secretions to semen. Choose your power-ups wisely!",
                        upgrades: [
                            { id: "seminal-vesicle", name: "Seminal Vesicle Boost", description: "+Fructose Energy! Provides 60% of semen fluid volume. Contains fructose for your ATP production.", icon: "fas fa-bolt", effect: "fructose" },
                            { id: "prostate-gland", name: "Prostate Shield", description: "+Alkaline Protection! Milky, alkaline fluid neutralizes acidic vaginal environment.", icon: "fas fa-shield-alt", effect: "alkaline" },
                            { id: "bulbourethral", name: "Bulbourethral Lubricant", description: "+Pre-Launch Gel! Clear mucus that lubricates the urethra and neutralizes residual acidity.", icon: "fas fa-tint", effect: "lube" }
                        ]
                    },
                    {
                        type: "narrative",
                        title: "Semen Composition",
                        content: "SEMEN is now complete! It's not just you - it's a complex mixture:\n\n- Sperm: Only 2-5% of volume!\n- Seminal Vesicle fluid: 60% (fructose, prostaglandins)\n- Prostatic fluid: 20-30% (alkaline, enzymes)\n- Bulbourethral gland fluid: trace (lubrication)\n\nTotal volume: 2-5 mL per ejaculation (200-500 million sperm!)",
                        visual: `<div class="flex justify-center py-4"><div class="w-32 h-32 rounded-full border-4 border-white relative" style="background: conic-gradient(#4CC9F0 0deg 18deg, #9D4EDD 18deg 234deg, #E63946 234deg 342deg, #F72585 342deg 360deg);"><div class="absolute inset-4 rounded-full flex items-center justify-center" style="background:#000"><span class="text-xs text-center">Semen<br>Mixture</span></div></div></div>`,
                        dialogue: { text: "I'm just 2% of the total volume? Talk about a team effort!", type: "sperm" }
                    }
                ],
                cheatSheet: [
                    { term: "Vas Deferens", definition: "Muscular tube transporting sperm from epididymis to ejaculatory duct." },
                    { term: "Seminal Vesicles", definition: "Glands producing fructose-rich fluid (60% of semen volume)." },
                    { term: "Prostate Gland", definition: "Walnut-sized gland producing alkaline, milky fluid." },
                    { term: "Bulbourethral Glands", definition: "Pea-sized glands secreting pre-ejaculatory lubricating fluid." },
                    { term: "Semen", definition: "Fluid mixture (2-5mL) containing sperm and glandular secretions." }
                ]
            },
            {
                name: "Stage 4: The Gauntlet (Vagina & Fallopian Tubes)",
                description: "Navigate the treacherous path to the egg.",
                panels: [
                    {
                        type: "narrative",
                        title: "The Acidic Wasteland",
                        content: "You've entered the VAGINA - a hostile acidic environment (pH 3.8-4.5). Millions of your brothers are dying around you! The alkaline semen temporarily neutralizes the acid, buying you precious minutes.",
                        visual: `<div class="text-center py-4"><div class="text-4xl mb-2"><i class="fas fa-skull-crossbones" style="color: #E63946;"></i></div><div class="flex justify-center gap-2 flex-wrap"><i class="fas fa-circle text-xs" style="color:#4CC9F0"></i><i class="fas fa-circle text-xs" style="color:#4CC9F0"></i><i class="fas fa-circle text-xs" style="color:#E63946"></i><i class="fas fa-circle text-xs" style="color:#4CC9F0"></i><i class="fas fa-circle text-xs" style="color:#E63946"></i><i class="fas fa-circle text-xs" style="color:#E63946"></i><i class="fas fa-circle text-xs" style="color:#4CC9F0"></i></div><p class="text-xs mt-2" style="color:#E63946">pH 3.8 - ACIDIC!</p></div>`,
                        dialogue: { text: "It's burning! So many are falling... I must push forward!", type: "sperm" }
                    },
                    {
                        type: "choice",
                        title: "The Cervix Checkpoint",
                        content: "You've reached the CERVIX, the gate to the uterus. Cervical mucus changes throughout the menstrual cycle.",
                        question: "The cervical mucus is thick and sticky. What do you do?",
                        choices: [
                            { text: "Ram through it!", correct: false, feedback: "Ouch! Thick mucus blocks your path. During non-fertile periods, the cervix is a brick wall!" },
                            { text: "Wait for ovulation timing", correct: true, feedback: "Smart! During ovulation, estrogen makes cervical mucus thin and watery - the 'ferning' pattern that lets you through!" },
                            { text: "Give up and die", correct: false, feedback: "Don't quit! There's always a way during the fertile window!" }
                        ]
                    },
                    {
                        type: "narrative",
                        title: "The Uterine Sprint",
                        content: "You've passed the cervix! Now you're in the UTERUS. Uterine contractions (powered by prostaglandins in semen and oxytocin) help propel you upward. But you must choose the correct fallopian tube - only one has the egg!",
                        visual: `<div class="text-center py-4"><svg viewBox="0 0 300 100" class="w-full max-w-sm"><path d="M150 10 Q100 50, 150 90 Q200 50, 150 10" fill="none" stroke="#F72585" stroke-width="3"/><path d="M100 50 L30 20" fill="none" stroke="#4CC9F0" stroke-width="4" stroke-linecap="round"/><path d="M100 50 L30 80" fill="none" stroke="#4CC9F0" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="35" r="5" fill="#4CC9F0"/><circle cx="50" cy="65" r="5" fill="#4CC9F0"/><text x="150" y="100" text-anchor="middle" fill="white" font-size="9">Uterus with Fallopian Tubes</text></svg></div>`
                    },
                    {
                        type: "qte",
                        title: "Fallopian Tube Race!",
                        content: "The CILIA in the fallopian tube are beating, creating currents. Click the flashing keys in order to ride the ciliary current!",
                        sequence: ["UP", "UP", "DOWN", "UP", "LEFT", "RIGHT", "UP"],
                        timePerKey: 2500,
                        reward: 25,
                        visual: `<div class="text-6xl text-center py-4"><i class="fas fa-wind" style="color: #2EC4A5;"></i></div>`
                    },
                    {
                        type: "narrative",
                        title: "Capacitation Achieved!",
                        content: "While navigating the female tract, you've undergone CAPACITATION - the final maturation process!\n\nYour membrane cholesterol decreases, making it more fluid. Your tail beats more vigorously in a hyperactivated pattern. Your acrosome is now primed and ready for the reaction!",
                        visual: `<div class="text-center py-4"><div class="inline-block p-4 rounded-xl border-4" style="border-color:#2EC4A5;box-shadow:0 0 20px #2EC4A5"><i class="fas fa-star text-4xl" style="color:#FFD60A"></i><p class="mt-2 font-bold" style="color:#2EC4A5">CAPACITATION COMPLETE</p></div></div>`,
                        dialogue: { text: "I feel... different. More powerful. The acrosome is buzzing!", type: "sperm" }
                    }
                ],
                cheatSheet: [
                    { term: "Vagina", definition: "Muscular canal; acidic pH (3.8-4.5) acts as a selective barrier." },
                    { term: "Cervix", definition: "Lower uterine neck; mucus becomes watery during ovulation." },
                    { term: "Uterus", definition: "Hollow muscular organ; contractions help sperm transport." },
                    { term: "Fallopian Tubes", definition: "Oviducts lined with cilia that move egg toward uterus." },
                    { term: "Cilia", definition: "Hair-like projections that beat to create currents." },
                    { term: "Capacitation", definition: "Final sperm maturation occurring in female reproductive tract." },
                    { term: "Prostaglandins", definition: "Hormone-like compounds in semen that stimulate uterine contractions." }
                ]
            },
            {
                name: "Stage 5: The Final Wall",
                description: "Penetrate the egg's defenses and achieve fertilization!",
                panels: [
                    {
                        type: "narrative",
                        title: "The Target Sighted!",
                        content: "There she is! The OOCYTE surrounded by the CORONA RADIATA - a layer of follicle cells. Beyond that lies the ZONA PELLUCIDA, a glycoprotein barrier. Your ACROSOME contains enzymes (hyaluronidase, acrosin) to break through!",
                        visual: `<div class="flex items-center justify-center gap-8 py-4"><div class="text-center"><div class="w-16 h-24 relative"><svg viewBox="0 0 40 60" class="w-full h-full"><ellipse cx="20" cy="15" rx="12" ry="10" fill="#4CC9F0" stroke="white" stroke-width="1"/><rect x="16" y="22" width="8" height="6" rx="3" fill="#2EC4A5"/><path d="M20 28 Q35 35, 38 45 Q35 55, 20 58 Q5 55, 2 45 Q5 35, 20 28" fill="none" stroke="#4CC9F0" stroke-width="3"/></svg></div><p class="text-xs mt-1" style="color:#4CC9F0">You</p></div><div class="text-2xl" style="color:#E63946"><i class="fas fa-bolt"></i></div><div class="relative"><div class="w-24 h-24 rounded-full border-4 relative" style="border-color:#F72585;background:radial-gradient(circle,#F72585 30%,#9D4EDD 60%,transparent 70%)"><div class="absolute -inset-3 border-2 border-dashed rounded-full" style="border-color:#FFD60A"></div></div><p class="text-xs mt-2" style="color:#F72585">Egg + Corona + Zona</p></div></div>`,
                        dialogue: { text: "There she is! The most beautiful cell I've ever seen!", type: "sperm" }
                    },
                    {
                        type: "qte",
                        title: "ACROSOME REACTION!",
                        content: "Time to release your enzymes! The acrosome reaction must be timed perfectly. Click the sequence to release hyaluronidase and acrosin!",
                        sequence: ["H", "Y", "A", "L", "U", "R", "O"],
                        timePerKey: 3000,
                        reward: 30,
                        visual: `<div class="text-center py-4"><div class="inline-block p-4 rounded-xl border-4" style="border-color:#E63946;box-shadow:0 0 30px #E63946"><i class="fas fa-bomb text-5xl" style="color:#E63946"></i><p class="mt-2 font-bold" style="color:#E63946">ACROSOME REACTION!</p></div></div>`
                    },
                    {
                        type: "narrative",
                        title: "Through the Corona Radiata!",
                        content: "HYALURONIDASE breaks down the hyaluronic acid cement between corona radiata cells. You've penetrated the first layer! Now for the ZONA PELLUCIDA...",
                        visual: `<div class="text-center py-4"><i class="fas fa-check-circle text-5xl" style="color:#2EC4A5"></i><p class="mt-2 font-bold" style="color:#2EC4A5">Corona Radiata Breached!</p></div>`,
                        dialogue: { text: "First layer down! The zona pellucida is next!", type: "sperm" }
                    },
                    {
                        type: "choice",
                        title: "Zona Pellucida Binding",
                        content: "You've reached the ZONA PELLUCIDA, composed of ZP1, ZP2, ZP3 glycoproteins.",
                        question: "Which zona pellucida glycoprotein binds to sperm receptors?",
                        choices: [
                            { text: "ZP1", correct: false, feedback: "Incorrect! ZP1 forms structural cross-links between ZP filaments." },
                            { text: "ZP2", correct: false, feedback: "Incorrect! ZP2 is involved in secondary binding after acrosome reaction." },
                            { text: "ZP3", correct: true, feedback: "Correct! ZP3 is the primary sperm receptor that triggers the acrosome reaction!" }
                        ]
                    },
                    {
                        type: "narrative",
                        title: "FERTILIZATION!",
                        content: "You did it! Your membrane fuses with the oocyte's membrane, and your nucleus enters! This triggers the CORTICAL REACTION - cortical granules release enzymes that harden the zona pellucida, preventing other sperm from entering (BLOCK TO POLYSPERMY).\n\nThe SECONDARY OOCYTE completes Meiosis II, forming the OVUM and the SECOND POLAR BODY. Your pronucleus and the ovum's pronucleus fuse...\n\nTHE ZYGOTE IS FORMED (2n=46)!",
                        visual: `<div class="text-center py-6"><div class="inline-block"><i class="fas fa-heart text-6xl animate-pulse" style="color:#F72585"></i></div><div class="mt-4 flex items-center justify-center gap-4"><div class="w-12 h-12 rounded-full border-2 flex items-center justify-center" style="border-color:#4CC9F0;background:rgba(76,201,240,0.3)"><span class="text-sm">n</span></div><i class="fas fa-plus text-2xl" style="color:#FFD60A"></i><div class="w-12 h-12 rounded-full border-2 flex items-center justify-center" style="border-color:#F72585;background:rgba(247,37,133,0.3)"><span class="text-sm">n</span></div><i class="fas fa-arrow-right text-2xl" style="color:#2EC4A5"></i><div class="w-16 h-16 rounded-full border-4 flex items-center justify-center animate-pulse" style="border-color:#2EC4A5;background:radial-gradient(circle,#2EC4A5,#1A1A1A);box-shadow:0 0 30px #2EC4A5"><span class="text-xl font-bold" style="color:#FFD60A;line-height:56px">2n</span></div></div></div>`,
                        dialogue: { text: "We did it... we're one. The zygote is formed!", type: "sperm" },
                        isVictory: true
                    }
                ],
                cheatSheet: [
                    { term: "Corona Radiata", definition: "Outermost layer of follicle cells surrounding the oocyte." },
                    { term: "Zona Pellucida", definition: "Glycoprotein layer between corona radiata and oocyte membrane." },
                    { term: "ZP3", definition: "Primary sperm receptor glycoprotein in zona pellucida." },
                    { term: "Hyaluronidase", definition: "Enzyme in acrosome that digests hyaluronic acid in corona radiata." },
                    { term: "Acrosin", definition: "Protease enzyme that digests zona pellucida proteins." },
                    { term: "Acrosome Reaction", definition: "Release of acrosomal enzymes when sperm binds zona pellucida." },
                    { term: "Cortical Reaction", definition: "Release of cortical granules preventing polyspermy." },
                    { term: "Block to Polyspermy", definition: "Mechanisms preventing multiple sperm fertilization." },
                    { term: "Zygote", definition: "Fertilized egg with diploid chromosome number (2n=46)." }
                ]
            }
        ]
    },
    track2: {
        title: "TRACK 2: OOCYTE AWAKENING",
        statLabel: "CYTOPLASM INTEGRITY",
        statColor: "#F72585",
        stages: [
            {
                name: "Stage 1: The Long Sleep (Ovary)",
                description: "The journey of an oocyte that began before you were born.",
                panels: [
                    {
                        type: "narrative",
                        title: "Prophase I: The Great Pause",
                        content: "You are a PRIMARY OOCYTE, arrested in PROPHASE I of meiosis. This happened during fetal development - you've been waiting since before birth! Your chromosomes are condensed and paired as homologous pairs (bivalents) in SYNAPSIS. This pause can last 12-50 years!",
                        visual: `<div class="text-center py-6"><div class="inline-block p-6 rounded-full border-4 relative" style="border-color:#F72585;background:radial-gradient(circle,#F72555 20%,#1A1A1A 70%)"><i class="fas fa-moon text-5xl" style="color:#9D4EDD"></i><div class="absolute -top-2 -right-2 rounded-full px-2 py-1 text-xs font-bold border-2 border-white" style="background:#7B1FA2">2n</div></div><p class="mt-3 text-sm" style="color:#F72585">Primary Oocyte - Prophase I Arrest</p></div>`,
                        dialogue: { text: "*yawn* How long have I been asleep? Feels like decades...", type: "oocyte" }
                    },
                    {
                        type: "narrative",
                        title: "The Ovarian Reserve",
                        content: "At birth, you had about 1-2 million fellow primary oocytes. By puberty, only 300,000-400,000 remain. Most underwent atresia (degeneration). Each menstrual cycle, a group of 10-20 primordial follicles are recruited, but typically only one achieves dominance.",
                        visual: `<div class="flex justify-center py-4"><div class="grid grid-cols-8 gap-1 max-w-xs">${Array(32).fill(0).map((_, i) => `<div class="w-4 h-4 rounded-full ${i < 8 ? 'bg-pink-600' : i < 16 ? 'bg-pink-800' : 'bg-gray-800'}"></div>`).join('')}</div></div><div class="text-center text-xs mt-2"><span style="color:#F72585">Pink = Surviving</span> | <span class="text-gray-600">Gray = Atresia</span></div>`,
                        dialogue: { text: "So many sisters... lost to time. I must carry on for them.", type: "oocyte" }
                    },
                    {
                        type: "choice",
                        title: "Biology Check",
                        content: "A neighboring follicle cell quizzes you on your identity.",
                        question: "At what stage of meiosis are you arrested?",
                        choices: [
                            { text: "Metaphase II", correct: false, feedback: "Incorrect! That's the secondary oocyte stage, after ovulation." },
                            { text: "Prophase I", correct: true, feedback: "Correct! Primary oocytes are arrested in Prophase I from fetal development until puberty!" },
                            { text: "Anaphase I", correct: false, feedback: "Incorrect! You haven't even completed meiosis I yet!" }
                        ]
                    }
                ],
                cheatSheet: [
                    { term: "Primary Oocyte", definition: "Diploid germ cell arrested in Prophase I since fetal development." },
                    { term: "Prophase I Arrest", definition: "Meiotic arrest lasting from fetal life until puberty (12-50 years)." },
                    { term: "Synapsis", definition: "Pairing of homologous chromosomes during prophase I." },
                    { term: "Bivalents", definition: "Paired homologous chromosomes (4 chromatids total)." },
                    { term: "Atresia", definition: "Degeneration of follicles; 1-2 million reduce to 300,000 by puberty." },
                    { term: "Ovarian Reserve", definition: "Pool of primordial follicles available for recruitment." }
                ]
            },
            {
                name: "Stage 2: The Monthly Wakeup",
                description: "FSH rises and follicular development begins.",
                panels: [
                    {
                        type: "narrative",
                        title: "FSH Surge Detected!",
                        content: "You feel it - FOLLICLE STIMULATING HORMONE (FSH) from the anterior pituitary! FSH signals the beginning of the follicular phase. Your primordial follicle awakens and begins developing into a PRIMARY, then SECONDARY follicle. Granulosa cells multiply and start producing ESTROGEN.",
                        visual: `<div class="text-center py-4"><div class="flex items-center justify-center gap-4"><div class="text-center"><i class="fas fa-brain text-3xl" style="color:#9D4EDD"></i><p class="text-xs mt-1">Pituitary</p></div><i class="fas fa-arrow-right" style="color:#FFD60A"></i><div class="text-center"><div class="px-3 py-2 rounded-lg border-2" style="border-color:#F72585;background:rgba(247,37,133,0.2)"><span class="font-bold text-sm" style="color:#F72585">FSH</span></div></div><i class="fas fa-arrow-right" style="color:#FFD60A"></i><div class="text-center"><i class="fas fa-circle text-3xl" style="color:#F72585"></i><p class="text-xs mt-1">Follicle</p></div></div></div>`,
                        dialogue: { text: "I feel a tingling... FSH! It's time to wake up!", type: "oocyte" }
                    },
                    {
                        type: "upgrade",
                        title: "Follicle Development",
                        content: "Choose how to develop your follicle structure!",
                        upgrades: [
                            { id: "granulosa-cells", name: "Granulosa Cell Multiplication", description: "Multiply granulosa cells! These cells surround you, provide nutrients, and convert androgens to estrogen.", icon: "fas fa-users", effect: "granulosa" },
                            { id: "theca-cells", name: "Theca Interna Development", description: "Develop the theca interna layer! These cells produce androgens under LH stimulation.", icon: "fas fa-layer-group", effect: "theca" },
                            { id: "antrum-fluid", name: "Antrum Fluid Accumulation", description: "Accumulate follicular fluid in the antrum! This creates the mature Graafian follicle structure.", icon: "fas fa-water", effect: "antrum" }
                        ]
                    },
                    {
                        type: "narrative",
                        title: "The Dominant Follicle",
                        content: "As estrogen levels rise, they exert NEGATIVE FEEDBACK on FSH. With less FSH available, only the follicle with the most FSH receptors survives - that's YOU! The others undergo atresia. You've become the DOMINANT FOLLICLE (Graafian follicle)!\n\nEstrogen levels continue climbing, now reaching a threshold that will trigger a completely different hormonal event...",
                        visual: `<div class="text-center py-4"><div class="inline-block p-4 rounded-xl border-4" style="border-color:#FFD60A"><i class="fas fa-crown text-4xl" style="color:#FFD60A"></i><p class="mt-2 font-bold" style="color:#FFD60A">DOMINANT FOLLICLE</p></div></div>`,
                        dialogue: { text: "I'm the chosen one! All the resources are mine now!", type: "oocyte" }
                    },
                    {
                        type: "narrative",
                        title: "Meiosis I Begins!",
                        content: "Under hormonal influence, you finally complete MEIOSIS I! This is UNEQUAL CYTOKINESIS - you divide into:\n\n1. SECONDARY OOCYTE (n=23) - receives almost all cytoplasm\n2. FIRST POLAR BODY (n=23) - tiny, minimal cytoplasm\n\nWhy unequal? To maximize resources for the future zygote! The polar body will eventually degenerate. You're now arrested in METAPHASE II.",
                        visual: `<div class="flex items-center justify-center gap-4 py-4"><div class="text-center"><div class="w-20 h-20 rounded-full border-4 flex items-center justify-center" style="border-color:#F72585;background:rgba(247,37,133,0.3)"><span class="text-2xl">n</span></div><p class="text-xs mt-2" style="color:#F72585">Secondary Oocyte</p><p class="text-xs text-gray-500">(Most cytoplasm)</p></div><div class="text-center"><i class="fas fa-plus text-xl" style="color:#FFD60A"></i></div><div class="text-center"><div class="w-8 h-8 rounded-full border-2 flex items-center justify-center" style="border-color:#E63946;background:rgba(230,57,70,0.3)"><span class="text-xs">n</span></div><p class="text-xs mt-2" style="color:#E63946">Polar Body</p><p class="text-xs text-gray-500">(Minimal cytoplasm)</p></div></div>`,
                        dialogue: { text: "Division complete! I kept all the good stuff - smart move!", type: "oocyte" }
                    }
                ],
                cheatSheet: [
                    { term: "FSH", definition: "Follicle Stimulating Hormone; stimulates follicular development." },
                    { term: "Granulosa Cells", definition: "Cells surrounding oocyte; produce estrogen from androgens." },
                    { term: "Theca Cells", definition: "Outer layer cells producing androgens under LH influence." },
                    { term: "Estrogen", definition: "Primary female sex hormone; exerts negative feedback on FSH." },
                    { term: "Graafian Follicle", definition: "Mature dominant follicle ready for ovulation." },
                    { term: "Unequal Cytokinesis", definition: "Asymmetric cell division maximizing cytoplasm in oocyte." },
                    { term: "Secondary Oocyte", definition: "Haploid cell arrested in Metaphase II until fertilization." },
                    { term: "Polar Body", definition: "Small cell with minimal cytoplasm; degenerates." }
                ]
            },
            {
                name: "Stage 3: The LH Shockwave (Ovulation)",
                description: "The explosive release from the ovary.",
                panels: [
                    {
                        type: "narrative",
                        title: "Estrogen Switch to Positive Feedback",
                        content: "Your estrogen production has reached a critical threshold (around 200 pg/mL for ~36 hours). Suddenly, the feedback SWITCHES from negative to POSITIVE! This massive estrogen surge stimulates the hypothalamus and anterior pituitary to release a HUGE burst of LUTEINIZING HORMONE (LH) - the LH SURGE!",
                        visual: `<div class="text-center py-4"><svg viewBox="0 0 400 120" class="w-full max-w-lg"><line x1="40" y1="100" x2="380" y2="100" stroke="white" stroke-width="2"/><line x1="40" y1="100" x2="40" y2="10" stroke="white" stroke-width="2"/><text x="210" y="118" text-anchor="middle" fill="white" font-size="10">Time (days)</text><text x="15" y="55" text-anchor="middle" fill="white" font-size="10" transform="rotate(-90 15 55)">Hormone Level</text><path d="M40 90 Q80 85, 120 70 Q160 40, 200 30 Q240 25, 280 50 Q320 80, 360 90" fill="none" stroke="#F72585" stroke-width="3"/><path d="M200 95 Q220 60, 240 20 Q260 60, 280 95" fill="none" stroke="#FFD60A" stroke-width="4"/><text x="200" y="15" fill="#F72585" font-size="10">Estrogen</text><text x="260" y="15" fill="#FFD60A" font-size="10">LH SURGE</text></svg></div>`,
                        dialogue: { text: "Something big is coming... I can feel the hormonal earthquake!", type: "oocyte" }
                    },
                    {
                        type: "qte",
                        title: "LH SURGE DETECTED!",
                        content: "The LH surge triggers ovulation! Click the hormone cascade sequence to complete the process! This is the most critical moment of your journey!",
                        sequence: ["L", "H", "S", "U", "R", "G", "E"],
                        timePerKey: 3000,
                        reward: 35,
                        visual: `<div class="text-center py-4"><div class="inline-block p-6 rounded-full border-4 animate-pulse" style="border-color:#FFD60A;box-shadow:0 0 40px #FFD60A"><span class="text-4xl font-bold title-font" style="color:#FFD60A">LH</span></div></div>`
                    },
                    {
                        type: "narrative",
                        title: "OVULATION!",
                        content: "The LH surge causes multiple events within 24-36 hours:\n\n1. Theca interna cells convert to LH receptors\n2. Prostaglandins increase in follicle wall\n3. Matrix metalloproteinases digest the follicle wall\n4. The stigma (thin spot) forms on ovarian surface\n5. Smooth muscle contractions expel you!\n\nYou're released from the ovary, swept up by the FIMBRIAE (finger-like projections) of the fallopian tube!",
                        visual: `<div class="text-center py-4"><div class="relative inline-block"><i class="fas fa-bomb text-6xl" style="color:#E63946"></i><div class="absolute -top-4 -right-4 animate-ping"><i class="fas fa-star" style="color:#FFD60A"></i></div></div><p class="mt-3 text-2xl font-bold title-font" style="color:#E63946">OVULATION!</p></div>`,
                        dialogue: { text: "I'm FREE! The fimbriae... they're pulling me in!", type: "oocyte" }
                    }
                ],
                cheatSheet: [
                    { term: "LH", definition: "Luteinizing Hormone; triggers ovulation and corpus luteum formation." },
                    { term: "LH Surge", definition: "Massive LH release triggered by sustained high estrogen." },
                    { term: "Positive Feedback", definition: "High estrogen stimulates LH release (rare in endocrine system)." },
                    { term: "Ovulation", definition: "Release of secondary oocyte from mature follicle." },
                    { term: "Fimbriae", definition: "Finger-like projections at fallopian tube end that capture oocyte." },
                    { term: "Stigma", definition: "Thin spot on follicle wall that ruptures during ovulation." }
                ]
            },
            {
                name: "Stage 4: The Tube Transit",
                description: "Float down the oviduct toward the uterus.",
                panels: [
                    {
                        type: "narrative",
                        title: "In the Fallopian Tube",
                        content: "The FIMBRIAE have swept you into the INFUNDIBULUM of the fallopian tube. You're now in the AMPULLA, the widest section. This is where fertilization typically occurs!\n\nCILIA on the epithelial cells beat toward the uterus, creating currents. But you're moving SLOWLY - you have about 12-24 hours before the uterus, and you need to meet a sperm here in the ampulla!",
                        visual: `<div class="text-center py-4"><svg viewBox="0 0 400 80" class="w-full max-w-lg"><path d="M30 40 Q80 10, 150 30 Q220 50, 280 30 Q350 10, 390 40" fill="none" stroke="#F72585" stroke-width="12" stroke-linecap="round" opacity="0.3"/><path d="M30 40 Q80 10, 150 30 Q220 50, 280 30 Q350 10, 390 40" fill="none" stroke="#F72585" stroke-width="4" stroke-linecap="round"/><path d="M60 28 L55 15" stroke="#4CC9F0" stroke-width="2"/><path d="M100 22 L95 8" stroke="#4CC9F0" stroke-width="2"/><path d="M140 25 L135 12" stroke="#4CC9F0" stroke-width="2"/><path d="M180 35 L175 22" stroke="#4CC9F0" stroke-width="2"/><path d="M220 38 L215 25" stroke="#4CC9F0" stroke-width="2"/><path d="M260 32 L255 19" stroke="#4CC9F0" stroke-width="2"/><path d="M300 25 L295 12" stroke="#4CC9F0" stroke-width="2"/><circle cx="200" cy="35" r="8" fill="#F72585" stroke="white" stroke-width="2"/><text x="200" y="75" text-anchor="middle" fill="#4CC9F0" font-size="10">Cilia beating toward uterus</text></svg></div>`,
                        dialogue: { text: "So peaceful floating here... but where is my sperm?", type: "oocyte" }
                    },
                    {
                        type: "narrative",
                        title: "Your Protective Layers",
                        content: "You're still protected by your two key layers:\n\n1. CORONA RADIATA - The innermost layer of granulosa cells still attached to you.\n2. ZONA PELLUCIDA - The transparent glycoprotein shell (ZP1, ZP2, ZP3). ZP3 acts as the sperm receptor. This barrier prevents polyspermy after the cortical reaction.",
                        visual: `<div class="flex justify-center py-4"><div class="relative"><div class="w-24 h-24 rounded-full border-4" style="border-color:#F72585;background:radial-gradient(circle,#F72585 30%,transparent 70%)"></div><div class="absolute -inset-3 border-2 border-dashed rounded-full animate-spin" style="border-color:#FFD60A;animation-duration:8s"></div><div class="absolute -inset-6 border border-gray-600 rounded-full"></div><div class="absolute -left-24 top-1/2 -translate-y-1/2 text-xs text-right" style="color:#FFD60A">Zona Pellucida</div><div class="absolute -right-28 top-1/2 -translate-y-1/2 text-xs text-gray-400">Corona Radiata</div></div></div>`
                    },
                    {
                        type: "choice",
                        title: "Tube Transit Timing",
                        content: "The fallopian tube environment is complex.",
                        question: "How long is the window for fertilization after ovulation?",
                        choices: [
                            { text: "6-12 hours", correct: false, feedback: "Too short! While sperm can survive longer, the oocyte's fertile window is actually longer." },
                            { text: "12-24 hours", correct: true, feedback: "Correct! The oocyte remains fertilizable for about 12-24 hours after ovulation. Sperm can survive 3-5 days!" },
                            { text: "3-5 days", correct: false, feedback: "That's sperm survival time! The oocyte's window is much shorter." }
                        ]
                    }
                ],
                cheatSheet: [
                    { term: "Infundibulum", definition: "Funnel-shaped opening of fallopian tube with fimbriae." },
                    { term: "Ampulla", definition: "Widest section of fallopian tube; typical fertilization site." },
                    { term: "Cilia", definition: "Hair-like projections beating toward uterus to move oocyte." },
                    { term: "Corona Radiata", definition: "Layer of follicle cells surrounding oocyte after ovulation." },
                    { term: "Zona Pellucida", definition: "Glycoprotein barrier between corona radiata and oolemma." },
                    { term: "Fertilization Window", definition: "Oocyte viable for 12-24 hours; sperm survive 3-5 days." }
                ]
            },
            {
                name: "Stage 5: The Final Rendezvous",
                description: "Meet the sperm, block polyspermy, and complete meiosis.",
                panels: [
                    {
                        type: "narrative",
                        title: "The Sperm Arrives!",
                        content: "A SPERM has reached you! It first penetrates the CORONA RADIATA using hyaluronidase enzyme. Then it binds to ZP3 glycoproteins on your ZONA PELLUCIDA. This binding triggers the ACROSOME REACTION, releasing enzymes to digest a path through the zona.",
                        visual: `<div class="flex items-center justify-center gap-6 py-4"><div class="text-center"><svg viewBox="0 0 40 60" class="w-10 h-14"><ellipse cx="20" cy="15" rx="12" ry="10" fill="#4CC9F0" stroke="white" stroke-width="1"/><rect x="16" y="22" width="8" height="6" rx="3" fill="#2EC4A5"/><path d="M20 28 Q35 35, 38 45 Q35 55, 20 58 Q5 55, 2 45 Q5 35, 20 28" fill="none" stroke="#4CC9F0" stroke-width="3"/></svg><p class="text-xs mt-1" style="color:#4CC9F0">Sperm</p></div><div class="text-2xl" style="color:#E63946"><i class="fas fa-bolt"></i></div><div class="relative"><div class="w-20 h-20 rounded-full border-4" style="border-color:#F72585;background:radial-gradient(circle,#F72585 30%,#9D4EDD 60%,transparent 70%)"><div class="absolute -inset-2 border-2 border-dashed rounded-full" style="border-color:#FFD60A"></div></div></div></div>`,
                        dialogue: { text: "I see it! A tiny swimmer approaching... it's kinda cute!", type: "oocyte" }
                    },
                    {
                        type: "qte",
                        title: "SPERM PENETRATION!",
                        content: "The sperm is drilling through your zona pellucida! Complete the cortical reaction sequence to prepare for fertilization!",
                        sequence: ["Z", "P", "3", "B", "I", "N", "D"],
                        timePerKey: 3000,
                        reward: 30,
                        visual: `<div class="text-center py-4"><div class="inline-block p-4 rounded-xl border-4 animate-pulse" style="border-color:#F72585;box-shadow:0 0 30px #F72585"><i class="fas fa-shield-virus text-5xl" style="color:#F72585"></i><p class="mt-2 font-bold" style="color:#F72585">MEMBRANE FUSION!</p></div></div>`
                    },
                    {
                        type: "narrative",
                        title: "Membrane Fusion & Cortical Reaction!",
                        content: "The sperm's membrane FUSES with your OOLEMA! The sperm nucleus enters your cytoplasm.\n\nThis triggers the CORTICAL REACTION - your cortical granules release their contents. These enzymes:\n\n1. Alter ZP3 glycoproteins (so no more sperm can bind)\n2. Harden the zona pellucida\n3. Create the BLOCK TO POLYSPERMY\n\nNo other sperm can enter now!",
                        visual: `<div class="text-center py-4"><div class="relative inline-block"><i class="fas fa-lock text-6xl" style="color:#2EC4A5"></i><div class="absolute -top-2 -right-2"><i class="fas fa-check-circle text-2xl" style="color:#2EC4A5"></i></div></div><p class="mt-3 font-bold" style="color:#2EC4A5">BLOCK TO POLYSPERMY ACTIVATED</p></div>`,
                        dialogue: { text: "Sorry boys, first come first served! The door is locked!", type: "oocyte" }
                    },
                    {
                        type: "narrative",
                        title: "Complete Meiosis II!",
                        content: "The sperm's entry provides the signal to complete MEIOSIS II! Your chromosomes align at the metaphase plate, sister chromatids separate, and you divide again by UNEQUAL CYTOKINESIS:\n\n1. OVUM (mature egg) - keeps the nucleus + sperm nucleus = ZYGOTE (2n=46)\n2. SECOND POLAR BODY - tiny, degenerates\n\nThe two pronuclei fuse... and LIFE BEGINS!",
                        visual: `<div class="text-center py-6"><div class="flex items-center justify-center gap-4"><div class="text-center"><div class="w-12 h-12 rounded-full border-2 flex items-center justify-center" style="border-color:#4CC9F0;background:rgba(76,201,240,0.3)"><span class="text-sm">n</span></div><p class="text-xs mt-1">Male Pronucleus</p></div><i class="fas fa-heart text-xl" style="color:#F72585"></i><div class="text-center"><div class="w-12 h-12 rounded-full border-2 flex items-center justify-center" style="border-color:#F72585;background:rgba(247,37,133,0.3)"><span class="text-sm">n</span></div><p class="text-xs mt-1">Female Pronucleus</p></div><i class="fas fa-arrow-right text-xl" style="color:#2EC4A5"></i><div class="text-center"><div class="w-16 h-16 rounded-full border-4 flex items-center justify-center animate-pulse" style="border-color:#2EC4A5;background:radial-gradient(circle,#2EC4A5,#1A1A1A);box-shadow:0 0 20px #2EC4A5"><span class="text-lg font-bold" style="color:#FFD60A;line-height:56px">2n</span></div><p class="text-xs mt-1 font-bold" style="color:#2EC4A5">ZYGOTE!</p></div></div></div>`
                    },
                    {
                        type: "narrative",
                        title: "FERTILIZATION COMPLETE!",
                        content: "THE ZYGOTE IS FORMED!\n\nKey Events Summary:\n- Sperm penetrates corona radiata\n- Acrosome reaction digests zona pellucida\n- Sperm binds ZP3 and fuses with oolemma\n- Cortical reaction blocks polyspermy\n- Meiosis II completes\n- Pronuclei fuse = ZYGOTE (2n=46)\n\nCleavage begins... the journey to becoming a human being has started!",
                        visual: `<div class="text-center py-6"><div class="inline-block p-8 rounded-full border-8" style="border-color:#2EC4A5;background:radial-gradient(circle,#2EC4A5 20%,#1A1A1A 80%);animation:victoryGlow 2s ease infinite"><i class="fas fa-baby text-6xl" style="color:#FFD60A"></i></div><h3 class="mt-4 text-3xl font-bold title-font" style="color:#2EC4A5;letter-spacing:3px">LIFE BEGINS!</h3></div>`,
                        dialogue: { text: "We did it! A new life starts with us... together!", type: "oocyte" },
                        isVictory: true
                    }
                ],
                cheatSheet: [
                    { term: "Oolemma", definition: "Plasma membrane of the oocyte." },
                    { term: "Cortical Reaction", definition: "Release of cortical granules upon sperm entry; prevents polyspermy." },
                    { term: "Cortical Granules", definition: "Lysosome-like vesicles whose contents modify zona pellucida." },
                    { term: "Block to Polyspermy", definition: "Mechanisms preventing multiple sperm fertilization." },
                    { term: "Meiosis II Completion", definition: "Secondary oocyte completes meiosis upon sperm entry." },
                    { term: "Ovum", definition: "Mature female gamete after meiosis II completion." },
                    { term: "Pronuclei", definition: "Haploid nuclei of sperm and egg before fusion." },
                    { term: "Zygote", definition: "Diploid cell (2n=46) formed by fusion of male and female pronuclei." },
                    { term: "Cleavage", definition: "Rapid mitotic divisions of zygote into smaller blastomeres." }
                ]
            }
        ]
    }
};
