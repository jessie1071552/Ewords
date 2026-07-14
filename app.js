const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); 
        osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.1); 
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220.00, audioCtx.currentTime); 
        osc.frequency.setValueAtTime(165.00, audioCtx.currentTime + 0.12); 
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    }
}

// 状態変数
let quizStartTime;
let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let selectedMode = '';
let activeDataset = [];
let isQuizActive = false; // 【追加】クイズ中かどうかの判定フラグ

let timerInterval = null;
let timeLeft = 0;
let limitSetting = 0;

window.onload = () => {
    checkWeakWordCount();
    renderChart();
    renderChapterProgress(); // 【追加】進捗バー表示
    // 定期的な保存処理ルーチン（クイズ中のみ加算を実行）
    setInterval(saveStudyTime, 2000);
};

function checkWeakWordCount() {
    const weakWords = JSON.parse(localStorage.getItem('weakWords') || '[]');
    const select = document.getElementById('vocabulary-select');
    const option = select.querySelector('option[value="WEAK_WORDS"]');
    option.innerText = `苦手な単語 (${weakWords.length}語収録)`;
}

function getSelectedDataset() {
    const type = document.getElementById('vocabulary-select').value;
    if (type === 'WEAK_WORDS') {
        return JSON.parse(localStorage.getItem('weakWords') || '[]');
    }
    const filtered = wordDataSet.filter(w => w.type === type);
    return filtered.length > 0 ? filtered : wordDataSet;
}

// 【修正】クイズアクティブ時のみ学習時間を計測・保存
function saveStudyTime() {
    if (!isQuizActive) return; 
    
    const now = Date.now();
    const elapsed = Math.floor((now - quizStartTime) / 1000);
    if (elapsed <= 0) return;
    
    quizStartTime = now; 
    
    const today = new Date().toISOString().split('T')[0];
    let logs = JSON.parse(localStorage.getItem('studyLogs') || '{}');
    logs[today] = (logs[today] || 0) + elapsed;
    localStorage.setItem('studyLogs', JSON.stringify(logs));
    
    renderChart();
}

// 苦手単語への追加および履歴管理
function addWeakWord(wordObj) {
    let weakWords = JSON.parse(localStorage.getItem('weakWords') || '[]');
    if (!weakWords.some(w => w.entry === wordObj.entry)) {
        weakWords.push(wordObj);
        localStorage.setItem('weakWords', JSON.stringify(weakWords));
    }
    
    // 間違えた履歴（進捗判定用）を保存
    let history = JSON.parse(localStorage.getItem('wordHistory') || '{}');
    history[wordObj.entry] = 'incorrect';
    localStorage.setItem('wordHistory', JSON.stringify(history));
    
    checkWeakWordCount();
}

function removeWeakWord(wordObj) {
    let weakWords = JSON.parse(localStorage.getItem('weakWords') || '[]');
    weakWords = weakWords.filter(w => w.entry !== wordObj.entry);
    localStorage.setItem('weakWords', JSON.stringify(weakWords));
    
    // 正解した履歴（進捗判定用）を保存
    let history = JSON.parse(localStorage.getItem('wordHistory') || '{}');
    history[wordObj.entry] = 'correct';
    localStorage.setItem('wordHistory', JSON.stringify(history));
    
    checkWeakWordCount();
}

// 【追加】各章の進捗状況のグラフ描画
function renderChapterProgress() {
    const container = document.getElementById('progress-container');
    container.innerHTML = '';
    
    const chapters = ['NGSL', 'NAWL', 'TSL', 'BSL'];
    const history = JSON.parse(localStorage.getItem('wordHistory') || '{}');
    
    chapters.forEach(ch => {
        const chWords = wordDataSet.filter(w => w.type === ch);
        if (chWords.length === 0) return;
        
        // 当該章で「一度クイズに出題され、現在苦手リストに残っていない（＝修得済み）」数をカウント
        const masteredCount = chWords.filter(w => history[w.entry] === 'correct').length;
        const percent = Math.round((masteredCount / chWords.length) * 100);
        
        const row = document.createElement('div');
        row.className = 'chart-row';
        row.innerHTML = `
            <div class="chart-label">${ch}</div>
            <div class="chart-bar-wrapper">
                <div class="chart-bar progress-bar" style="width: ${percent}%"></div>
            </div>
            <div class="chart-value">${percent}%</div>
        `;
        container.appendChild(row);
    });
}

function renderChart() {
    const chartContainer = document.getElementById('history-chart');
    chartContainer.innerHTML = '';
    const logs = JSON.parse(localStorage.getItem('studyLogs') || '{}');
    
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        const displayDate = dateStr.substring(5); 
        const seconds = logs[dateStr] || 0;
        
        const maxScale = 300;
        const percentage = Math.min((seconds / maxScale) * 100, 100);
        
        const row = document.createElement('div');
        row.className = 'chart-row';
        row.innerHTML = `
            <div class="chart-label">${displayDate}</div>
            <div class="chart-bar-wrapper">
                <div class="chart-bar" style="width: ${percentage}%"></div>
            </div>
            <div class="chart-value">${seconds}秒</div>
        `;
        chartContainer.appendChild(row);
    }
}

function startQuiz() {
    activeDataset = getSelectedDataset();
    if (activeDataset.length === 0) {
        alert("選択された単語帳にデータがありません。");
        return;
    }

    const countSetting = parseInt(document.getElementById('question-count').value, 10);
    const count = Math.min(countSetting, activeDataset.length);
    selectedMode = document.getElementById('quiz-mode').value;
    limitSetting = parseInt(document.getElementById('time-limit-select').value, 10);
    
    const shuffled = [...activeDataset].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, count);
    
    currentIndex = 0;
    correctCount = 0;
    
    // クイズ開始のタイマー割り当てフラグ変更
    isQuizActive = true;
    quizStartTime = Date.now();
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
    clearInterval(timerInterval);

    const qData = currentQuestions[currentIndex];
    const total = currentQuestions.length;
    
    document.getElementById('progress').innerText = `問題: ${currentIndex + 1} / ${total}`;
    document.getElementById('example-area').classList.add('hidden');
    document.getElementById('options-container').classList.add('hidden');
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('input-container').classList.add('hidden');
    
    const card = document.getElementById('question-card');
    card.className = 'card'; 
    
    if (selectedMode === '4choice-en-ja') {
        card.innerText = qData.entry;
        setupFourChoices(qData, 'meaning_ja');
    } else if (selectedMode === '4choice-ja-en') {
        card.innerText = qData.meaning_ja;
        setupFourChoices(qData, 'entry');
    } else if (selectedMode === 'card-know') {
        card.innerText = qData.entry;
        document.getElementById('card-container').classList.remove('hidden');
    } else if (selectedMode === 'fill-blank') {
        const regex = new RegExp(qData.entry, 'gi');
        const blanked = qData.example_sentence.replace(regex, '_______');
        card.innerText = blanked;
        
        const exArea = document.getElementById('example-area');
        exArea.innerText = `和訳: ${qData.translated_sentence}`;
        exArea.classList.remove('hidden');
        
        document.getElementById('blank-input').value = '';
        document.getElementById('input-container').classList.remove('hidden');
    }

    if (selectedMode !== '4choice-ja-en') {
        playVoice();
    }

    initTimer();
}

function initTimer() {
    const timerContainer = document.getElementById('timer-container');
    if (limitSetting <= 0) {
        timerContainer.classList.add('hidden');
        return;
    }
    
    timerContainer.classList.remove('hidden');
    timeLeft = limitSetting;
    updateTimerUI();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function updateTimerUI() {
    document.getElementById('timer-text').innerText = `残り: ${timeLeft}秒`;
    const progressWidth = (timeLeft / limitSetting) * 100;
    document.getElementById('timer-bar').style.width = `${progressWidth}%`;
}

function handleTimeOut() {
    playSound('incorrect');
    const card = document.getElementById('question-card');
    card.classList.add('incorrect-flash');
    
    const qData = currentQuestions[currentIndex];
    addWeakWord(qData);
    
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

function setupFourChoices(correctData, key) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    container.classList.remove('hidden');
    
    const dummies = activeDataset
        .filter(w => w.entry !== correctData.entry)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
        
    while (dummies.length < 3) {
        const fallback = wordDataSet[Math.floor(Math.random() * wordDataSet.length)];
        if (fallback.entry !== correctData.entry && !dummies.some(d => d.entry === fallback.entry)) {
            dummies.push(fallback);
        }
    }
        
    const choices = [correctData, ...dummies].sort(() => 0.5 - Math.random());
    
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = choice[key];
        if (choice.entry === correctData.entry) {
            btn.dataset.correct = "true";
        }
        btn.onclick = (e) => handleChoiceSelection(e.target, choice.entry === correctData.entry);
        container.appendChild(btn);
    });
}

function handleChoiceSelection(clickedButton, isCorrect) {
    clearInterval(timerInterval); 
    const container = document.getElementById('options-container');
    const buttons = container.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const card = document.getElementById('question-card');
    const qData = currentQuestions[currentIndex];
    
    if (isCorrect) {
        playSound('correct');
        card.classList.add('correct-flash');
        clickedButton.style.backgroundColor = "var(--success-color)";
        clickedButton.style.color = "white";
        correctCount++;
        removeWeakWord(qData);
    } else {
        playSound('incorrect');
        card.classList.add('incorrect-flash');
        clickedButton.style.backgroundColor = "var(--error-color)";
        clickedButton.style.color = "white";
        
        buttons.forEach(btn => {
            if (btn.dataset.correct === "true") {
                btn.style.backgroundColor = "var(--success-color)";
                btn.style.color = "white";
                btn.style.border = "2px solid #27ae60";
            }
        });
        addWeakWord(qData); 
    }
    
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

function checkAnswer(isCorrect) {
    clearInterval(timerInterval); 
    const card = document.getElementById('question-card');
    const qData = currentQuestions[currentIndex];
    
    if (isCorrect) {
        playSound('correct');
        card.classList.add('correct-flash');
        correctCount++;
        removeWeakWord(qData);
    } else {
        playSound('incorrect');
        card.classList.add('incorrect-flash');
        addWeakWord(qData); 
    }
    
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

function toggleCardFlip() {
    const card = document.getElementById('question-card');
    const qData = currentQuestions[currentIndex];
    if (card.innerText === qData.entry) {
        card.innerText = `${qData.entry}\n\n【意味】\n${qData.meaning_ja}`;
        const exArea = document.getElementById('example-area');
        exArea.innerText = `例文: ${qData.example_sentence}\n訳: ${qData.translated_sentence}`;
        exArea.classList.remove('hidden');
    } else {
        card.innerText = qData.entry;
        document.getElementById('example-area').classList.add('hidden');
    }
}

function handleCardAnswer(knows) {
    clearInterval(timerInterval);
    const qData = currentQuestions[currentIndex];
    if (knows) {
        playSound('correct');
        correctCount++;
        removeWeakWord(qData);
        nextQuestion();
    } else {
        playSound('incorrect');
        addWeakWord(qData);
        nextQuestion();
    }
}

function handleBlankAnswer() {
    const input = document.getElementById('blank-input').value.trim().toLowerCase();
    const correctAns = currentQuestions[currentIndex].entry.toLowerCase();
    checkAnswer(input === correctAns);
}

function playVoice() {
    const qData = currentQuestions[currentIndex];
    if (!qData) return;
    const utterance = new SpeechSynthesisUtterance(qData.entry);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timerInterval);
    isQuizActive = false; // クイズ終了に伴い計測停止
    saveStudyTime();

    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-text').innerText = 
        `${currentQuestions.length}問中 ${correctCount}問正解！\n正解率: ${Math.round((correctCount / currentQuestions.length) * 100)}%`;
}

function returnToSetup() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
    renderChapterProgress(); // 設定画面に戻った際に最新の進捗を反映
}

function clearLogs() {
    if (confirm("学習記録・苦手単語・各章の進捗データを完全に削除してよいか？")) {
        localStorage.removeItem('studyLogs');
        localStorage.removeItem('weakWords');
        localStorage.removeItem('wordHistory'); // 履歴の削除
        checkWeakWordCount();
        renderChart();
        renderChapterProgress();
    }
}
