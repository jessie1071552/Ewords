// オーディオ環境（Web Audio APIによる効果音の動的生成）
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220.00, audioCtx.currentTime); // A3
        osc.frequency.setValueAtTime(165.00, audioCtx.currentTime + 0.12); // E3
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    }
}

// 状態変数
let startTime;
let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let selectedMode = '';
let activeDataset = [];

window.onload = () => {
    startTime = Date.now();
    checkWeakWordCount();
    renderChart();
    setInterval(saveStudyTime, 5000);
};

// 苦手単語カウントと選択ボタンの動的制御
function checkWeakWordCount() {
    const weakWords = JSON.parse(localStorage.getItem('weakWords') || '[]');
    const select = document.getElementById('vocabulary-select');
    const option = select.querySelector('option[value="WEAK_WORDS"]');
    option.innerText = `苦手な単語 (${weakWords.length}語収録)`;
}

// 選択されたデータセットを取得する
function getSelectedDataset() {
    const type = document.getElementById('vocabulary-select').value;
    if (type === 'WEAK_WORDS') {
        return JSON.parse(localStorage.getItem('weakWords') || '[]');
    }
    
    const filtered = wordDataSet.filter(w => w.type === type);
    return filtered.length > 0 ? filtered : wordDataSet;
}

// 学習時間のロギング
function saveStudyTime() {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    if (elapsed <= 0) return;
    
    startTime = now; 
    
    const today = new Date().toISOString().split('T')[0];
    let logs = JSON.parse(localStorage.getItem('studyLogs') || '{}');
    logs[today] = (logs[today] || 0) + elapsed;
    localStorage.setItem('studyLogs', JSON.stringify(logs));
    
    renderChart();
}

// 苦手単語の追加
function addWeakWord(wordObj) {
    let weakWords = JSON.parse(localStorage.getItem('weakWords') || '[]');
    if (!weakWords.some(w => w.entry === wordObj.entry)) {
        weakWords.push(wordObj);
        localStorage.setItem('weakWords', JSON.stringify(weakWords));
    }
    checkWeakWordCount();
}

// 苦手単語の削除
function removeWeakWord(wordObj) {
    let weakWords = JSON.parse(localStorage.getItem('weakWords') || '[]');
    weakWords = weakWords.filter(w => w.entry !== wordObj.entry);
    localStorage.setItem('weakWords', JSON.stringify(weakWords));
    checkWeakWordCount();
}

// 簡易グラフの生成
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

// クイズ開始
function startQuiz() {
    activeDataset = getSelectedDataset();
    if (activeDataset.length === 0) {
        alert("選択された単語帳にデータがありません。");
        return;
    }

    const countSetting = parseInt(document.getElementById('question-count').value, 10);
    const count = Math.min(countSetting, activeDataset.length);
    selectedMode = document.getElementById('quiz-mode').value;
    
    const shuffled = [...activeDataset].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, count);
    
    currentIndex = 0;
    correctCount = 0;
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
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

    // 【追加】「和 → 英」以外のモードの時、画面表示と同時に自動で発音を1回流す
    if (selectedMode !== '4choice-ja-en') {
        playVoice();
    }
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
        btn.onclick = () => checkAnswer(choice.entry === correctData.entry);
        container.appendChild(btn);
    });
}

function checkAnswer(isCorrect) {
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
    }, 500);
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
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-text').innerText = 
        `${currentQuestions.length}問中 ${correctCount}問正解！\n正解率: ${Math.round((correctCount / currentQuestions.length) * 100)}%`;
}

function returnToSetup() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
    saveStudyTime();
}

function clearLogs() {
    if (confirm("学習記録と苦手単語データを完全に削除してよいか？")) {
        localStorage.removeItem('studyLogs');
        localStorage.removeItem('weakWords');
        checkWeakWordCount();
        renderChart();
    }
}
