// ミッションデータのロードと保存
const levels = {
    "Lv1": [
        { task: "ひとりラーメン", advice: "ラーメン店で自分好みの一杯を堪能しましょう。" },
        { task: "ひとりとんかつ", advice: "クリスピーなとんかつを一人で味わいましょう。" },
        { task: "ひとりカラオケ", advice: "好きな曲を心ゆくまで歌い、ストレス解消しましょう。" },
        { task: "ひとりスポーツ観戦", advice: "スタジアムで試合を自分のペースで楽しみましょう。" }
    ],
    "Lv2": [
            { task: "ひとりイタリアン", advice: "イタリアンレストランで贅沢な料理を堪能しましょう。孤独を感じることなく、料理と空間を楽しんでください。" },
            { task: "ひとりハンバーグ", advice: " ジューシーなハンバーグを一人で味わいながら、食事の時間を楽しんでください。自分のペースで食事を進めてください。" },
            { task: "ひとり動物園", advice: "動物たちのかわいい姿や動きを自由に観察しましょう。他の人のペースに縛られることなく、動物たちとの時間を楽しんでください。" },
            { task: "ひとり水族館", advice: "海の生物たちの美しさを一人でじっくりと観察しましょう。静かな空間で、水族館の魅力を存分に堪能してください。" }
        ],
    "Lv3": [
            { task: "ひとり回転寿司", advice: "お寿司を回転させながら、自分のペースで好きなものを選んで楽しんでください。孤独を感じることなく、食事を楽しんでください。" },
            { task: "ひとり韓国料理", advice: "韓国料理の本格的な味を一人で堪能しましょう。他人の目を気にせず、料理の豊かな味わいを楽しんでください。" },
            { task: "ひとりハイキング", advice: "自然の中で静寂を感じながらハイキングを楽しみましょう。自分のペースで景色を眺め、リフレッシュしてください。" },
            { task: "ひとりキャンプ", advice: " 自然の中でのキャンプを通じて、自分自身と向き合いましょう。静かな時間を大切にしてください。" }
        ],
    "Lv4": [
            { task: "ひとり鉄板焼き", advice: "シェフの技を間近で見ながら、贅沢な鉄板焼きを楽しんでください。孤独を感じることなく、料理の魅力を味わってください。" },
            { task: "ひとり居酒屋", advice: "居酒屋で自分の好みのお酒や料理を一人で楽しんでください。自分のペースで飲み食いを楽しんでください。" },
            { task: "ひとりプール", advice: " プールでのリフレッシュタイムを満喫しましょう。他の人の目を気にせず、水泳や水遊びを楽しんでください。" },
            { task: "ひとり果物狩り", advice: "果物狩りで季節の美味しい果物を収穫し、自分のペースで楽しんでください。自然の恵みを存分に味わってください。" }
        ],
     "Lv5": [
            { task: "ひとり焼肉", advice: "高品質な肉を自分のペースで焼き、贅沢なひとときを楽しんでください。孤独を感じることなく、食事を堪能してください。" },
            { task: "ひとり鍋・しゃぶしゃぶ", advice: "しゃぶしゃぶや鍋を一人でゆっくりと楽しんでください。自分の好みで具材を選び、温かい食事を楽しんでください。" },
            { task: "ひとりボウリング", advice: "ボウリングでストライクを狙いましょう。他の人の競争ではなく、自分自身との競争を楽しんでください。" },
            { task: "ひとり遊園地", advice: "遊園地のアトラクションを自分のペースで楽しんでください。人目を気にせず、好きな乗り物やショーを楽しんでください。" }
        ]
};

// ミッションリストを表示
function loadMissionsForLevel(level) {
    const missionList = document.getElementById('mission-list');
    levels[level].forEach(mission => addMission(mission, missionList));
}

function addMission(mission, container) {
    const missionItem = document.createElement('li');
    missionItem.className = 'mission-item';

    const missionText = document.createElement('span');
    missionText.className = 'mission-text';
    missionText.textContent = mission.task;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '完了';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', () => {
        if (!missionText.classList.contains('completed')) {
            completeMission(mission.task, buttonsContainer, missionText);
        }
    });

    const adviceBtn = document.createElement('button');
    adviceBtn.textContent = 'アドバイス';
    adviceBtn.className = 'advice-btn';
    adviceBtn.addEventListener('click', () => {
        alert(mission.advice);
    });

    buttonsContainer.appendChild(completeBtn);
    buttonsContainer.appendChild(adviceBtn);

    missionItem.appendChild(missionText);
    missionItem.appendChild(buttonsContainer);
    container.appendChild(missionItem);
}

// ミッション完了時の処理
function completeMission(task, buttonsContainer, missionText) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.className = 'upload-btn';

    const commentBox = document.createElement('textarea');
    commentBox.className = 'comment-box';
    commentBox.placeholder = 'コメントを入力してください';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = '保存';
    saveBtn.className = 'upload-btn';
    saveBtn.addEventListener('click', () => {
        const file = fileInput.files[0];
        const comment = commentBox.value;
        if (file && comment) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const photo = e.target.result;
                saveToDiary(task, photo, comment);
                missionText.classList.add('completed');
                buttonsContainer.innerHTML = ''; // ボタンを削除
            };
            reader.readAsDataURL(file);
        } else {
            alert('写真とコメントを入力してください');
        }
    });

    buttonsContainer.appendChild(fileInput);
    buttonsContainer.appendChild(commentBox);
    buttonsContainer.appendChild(saveBtn);
}

// 日記データのロード
function loadDiary() {
    let diary = localStorage.getItem('diary');
    return diary ? JSON.parse(diary) : [];
}

// 日記に保存
function saveToDiary(mission, photo, comment) {
    const diary = loadDiary();
    diary.push({ mission, date: new Date().toLocaleString(), photo, comment });
    localStorage.setItem('diary', JSON.stringify(diary));

    showAchievementNotification(mission);
}

// 通知の表示
function showAchievementNotification(mission) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `${mission} ミッションを達成しました！`;

    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => notification.remove(), 3000);
}

// ページロード時の処理
document.addEventListener('DOMContentLoaded', () => {
    const level = document.querySelector('script[data-level]')?.getAttribute('data-level');
    if (level) loadMissionsForLevel(level);

    const diaryList = document.getElementById('diary-list');
    if (diaryList) {
        loadDiary().forEach(entry => addDiaryEntry(entry, diaryList));
    }
});

// 日記エントリの表示
function addDiaryEntry(entry, container) {
    const diaryItem = document.createElement('li');
    diaryItem.className = 'diary-item';

    const diaryText = document.createElement('span');
    diaryText.className = 'diary-text';
    diaryText.textContent = `${entry.date} - ${entry.mission}`;

    const diaryPhoto = document.createElement('img');
    diaryPhoto.className = 'diary-photo';
    diaryPhoto.src = entry.photo;
    diaryPhoto.alt = entry.mission;

    const diaryComment = document.createElement('p');
    diaryComment.textContent = entry.comment;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', () => deleteDiaryEntry(entry, container));

    diaryItem.appendChild(diaryText);
    diaryItem.appendChild(diaryPhoto);
    diaryItem.appendChild(diaryComment);
    diaryItem.appendChild(deleteBtn);
    container.appendChild(diaryItem);
}

// 日記エントリの削除
function deleteDiaryEntry(entry, container) {
    let diary = loadDiary();
    diary = diary.filter(e => e !== entry);
    localStorage.setItem('diary', JSON.stringify(diary));
    container.innerHTML = ''; // 更新
    loadDiary().forEach(entry => addDiaryEntry(entry, container));
}

document.addEventListener('DOMContentLoaded', () => {
    const diaryList = document.getElementById('diary-list');
    const datePicker = document.getElementById('diary-date-picker');
    const searchButton = document.getElementById('search-diary');

    function loadDiary() {
        let diary = localStorage.getItem('diary');
        return diary ? JSON.parse(diary) : [];
    }

    function saveDiary(diary) {
        localStorage.setItem('diary', JSON.stringify(diary));
    }

    function displayDiaryEntries(entries) {
        diaryList.innerHTML = ''; // リストをクリア
        if (entries.length === 0) {
            const noResults = document.createElement('li');
            noResults.textContent = '該当する日記が見つかりませんでした。';
            diaryList.appendChild(noResults);
            return;
        }

        entries.forEach((entry, index) => {
            const diaryItem = document.createElement('li');
            diaryItem.className = 'diary-item';

            const diaryText = document.createElement('span');
            diaryText.className = 'diary-text';
            diaryText.textContent = `${entry.date} - ${entry.mission}`;

            const diaryPhoto = document.createElement('img');
            diaryPhoto.className = 'diary-photo';
            diaryPhoto.src = entry.photo;
            diaryPhoto.alt = entry.mission;

            const diaryComment = document.createElement('p');
            diaryComment.textContent = entry.comment;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '削除';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                deleteDiaryEntry(index);
            });

            diaryItem.appendChild(diaryText);
            diaryItem.appendChild(diaryPhoto);
            diaryItem.appendChild(diaryComment);
            diaryItem.appendChild(deleteBtn);
            diaryList.appendChild(diaryItem);
        });
    }

    function deleteDiaryEntry(index) {
        const diary = loadDiary();
        diary.splice(index, 1); // 該当エントリを削除
        saveDiary(diary); // 更新後の日記を保存
        displayDiaryEntries(diary); // 更新後の日記リストを表示
    }

    function searchDiaryByDate(date) {
        const diary = loadDiary();
        const filteredEntries = diary.filter(entry => entry.date.startsWith(date));
        displayDiaryEntries(filteredEntries);
    }

    searchButton.addEventListener('click', () => {
        const selectedDate = datePicker.value;
        if (selectedDate) {
            searchDiaryByDate(selectedDate);
        } else {
            alert('日付を選択してください。');
        }
    });

    // 初期ロード: すべての日記を表示
    displayDiaryEntries(loadDiary());
})