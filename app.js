// 4択問題の選択肢を生成（ボタンに識別用のカスタムデータを持たせる）
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
        
        // 正解判定のためのフラグをボタン要素に持たせる
        if (choice.entry === correctData.entry) {
            btn.dataset.correct = "true";
        }
        
        // クリック時に自分自身の要素を渡せるように変更
        btn.onclick = (e) => handleChoiceSelection(e.target, choice.entry === correctData.entry);
        container.appendChild(btn);
    });
}

// 4択の選択肢が押されたときの処理
function handleChoiceSelection(clickedButton, isCorrect) {
    clearInterval(timerInterval); // タイマー停止
    
    const container = document.getElementById('options-container');
    const buttons = container.querySelectorAll('.option-btn');
    
    // 連打防止のためすべてのボタンを無効化
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
        
        // 間違えたボタンを赤くする
        clickedButton.style.backgroundColor = "var(--error-color)";
        clickedButton.style.color = "white";
        
        // 【追加】正解のボタンを探して緑色に強調表示する
        buttons.forEach(btn => {
            if (btn.dataset.correct === "true") {
                btn.style.backgroundColor = "var(--success-color)";
                btn.style.color = "white";
                btn.style.border = "2px solid #27ae60";
                btn.style.fontWeight = "bold";
            }
        });
        
        addWeakWord(qData); 
    }
    
    // 演出をしっかり見せるため、次の問題への遷移を1秒（1000ms）に延長
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

// 4択以外のモード（記述式など）用の汎用判定ロジック
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
    }, 500);
}
