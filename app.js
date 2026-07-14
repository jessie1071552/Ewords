// 学習時間の記録用変数
let startTime;
let totalStudyTime = parseInt(localStorage.getItem('totalStudyTime') || '0', 10);

// クイズ状態管理
let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let selectedMode = '';

// ページ読み込み時にタイマー開始と記録の表示
window.onload = () => {
    startTime = Date.now();
    updateStudyTimeLog();
    // 定期的にローカルストレージに学習時間を保存
    setInterval(saveStudyTime, 5000);
};

function saveStudyTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    localStorage.setItem('totalStudyTime', totalStudyTime + elapsed);
    updateStudyTimeLog();
}

function updateStudyTimeLog() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const total = totalStudyTime + elapsed;
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    document.getElementById('study-time-log').innerText = `本日の学習時間: ${mins}分 ${secs}秒`;
}

// クイズ開始
function startQuiz() {
    const count = parseInt(document.getElementById('question-count').value, 10);
    selectedMode = document.getElementById('quiz-mode').value;
    
    if (!wordDataSet || wordDataSet.length === 0) {
        alert("単語データが読み込まれていません。words.jsを確認してください。");
        return;
    }

    // ランダムに単語を抽出
    const shuffled = [...wordDataSet].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, count);
    
    currentIndex = 0;
    correctCount = 0;
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    
    showQuestion();
}

// 問題の表示
function showQuestion() {
    const qData = currentQuestions[currentIndex];
    const total = currentQuestions.length;
    
    document.getElementById('progress').innerText = `問題: ${currentIndex + 1} / ${total}`;
    document.getElementById('example-area').classList.add('hidden');
    
    // UIコンテナを一度すべて隠す
    document.getElementById('options-container').classList.add('hidden');
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('input-container').classList.add('hidden');
    
    const cardLog = document.getElementById('question-card');
    
    if (selectedMode === '4choice-en-ja') {
        cardLog.innerText = qData.entry;
        setupFourChoices(qData, 'meaning_ja');
    } else if (selectedMode === '4choice-ja-en') {
        cardLog.innerText = qData.meaning_ja;
        setupFourChoices(qData, 'entry');
    } else if (selectedMode === 'card-know') {
        cardLog.innerText = qData.entry;
        document.getElementById('card-container').classList.remove('hidden');
    } else if (selectedMode === 'fill-blank') {
        // 例文中のターゲット単語を「_______」に置換
        const regex = new RegExp(qData.entry, 'gi');
        const blankedSentence = qData.example_sentence.replace(regex, '_______');
        cardLog.innerText = blankedSentence;
        
        const exArea = document.getElementById('example-area');
        exArea.innerText = `和訳: ${qData.translated_sentence}`;
        exArea.classList.remove('hidden');
        
        document.getElementById('blank-input').value = '';
        document.getElementById('input-container').classList.remove('hidden');
    }
}

// 4択問題の選択肢を生成
function setupFourChoices(correctData, key) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    container.classList.remove('hidden');
    
    // ダミー選択肢の取得
    const dummies = wordDataSet
        .filter(w => w.entry !== correctData.entry)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
        
    const choices = [correctData, ...dummies].sort(() => 0.5 - Math.random());
    
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = choice[key];
        btn.onclick = () => checkFourChoiceAnswer(choice.entry === correctData.entry, correctData);
        container.appendChild(btn);
    });
}

function checkFourChoiceAnswer(isCorrect, correctData) {
    if (isCorrect) {
        alert("正解！");
        correctCount++;
    } else {
        alert(`不正解...\n正解は: ${correctData.entry} 【${correctData.meaning_ja}】`);
    }
    nextQuestion();
}

// 単語カードモードの処理
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
    if (knows) correctCount++;
    nextQuestion();
}

// 例文穴埋めモードの処理
function handleBlankAnswer() {
    const input = document.getElementById('blank-input').value.trim().toLowerCase();
    const correctAns = currentQuestions[currentIndex].entry.toLowerCase();
    
    if (input === correctAns) {
        alert("正解！");
        correctCount++;
    } else {
        alert(`不正解...\n正解は: ${correctAns}`);
    }
    nextQuestion();
}

// 発音音声再生機能 (Web Speech APIを使用)
function playVoice() {
    const qData = currentQuestions[currentIndex];
    if (!qData) return;
    
    const utterance = new SpeechSynthesisUtterance(qData.entry);
    utterance.lang = 'en-US'; // 米国英語
    window.speechSynthesis.speak(utterance);
}

// 次の問題に進むか結果画面を表示
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
