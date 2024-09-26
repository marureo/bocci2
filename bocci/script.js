document.addEventListener('DOMContentLoaded', () => {
    const missionList = document.getElementById('mission-list');

    const initialMissions = {
        "Lv1": [
            { task: "ひとりラーメン", advice: " ラーメン店で自分好みの一杯を堪能しましょう。孤独を感じず、美味しい食事を楽しむ時間を大切にしてください。" },
            { task: "ひとりとんかつ", advice: "クリスピーなとんかつを一人で味わいましょう。静寂の中で食べると、料理の本当の美味しさが感じられます。" },
            { task: "ひとりカラオケ", advice: "好きな曲を心ゆくまで歌い、ストレス解消しましょう。他人の目を気にせずに自分だけのパフォーマンスを楽しんでください。" },
            { task: "ひとりスポーツ観戦", advice: "スタジアムやアリーナで熱狂的なファンと一緒になるのではなく、自分のペースで試合を楽しみましょう。自分だけの観戦スタイルを見つけてください。" }
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

    const level = document.querySelector('script[data-level]').getAttribute('data-level');

    function loadMissionsForLevel(level) {
        initialMissions[level].forEach(mission => addMission(mission));
    }

    function addMission(mission) {
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
                            saveToDiary(mission.task, photo, comment);
                            missionText.classList.add('completed');
                            buttonsContainer.removeChild(fileInput);
                            buttonsContainer.removeChild(commentBox);
                            buttonsContainer.removeChild(saveBtn);
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
        missionList.appendChild(missionItem);
    }

    function saveToDiary(mission, photo, comment) {
        let diary = localStorage.getItem('diary');
        if (!diary) {
            diary = [];
        } else {
            diary = JSON.parse(diary);
        }
        diary.push({ mission, date: new Date().toLocaleString(), photo, comment });
        localStorage.setItem('diary', JSON.stringify(diary));
    }

    // 指定されたレベルのミッションをロード
    loadMissionsForLevel(level);
});
