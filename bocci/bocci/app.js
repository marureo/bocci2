document.addEventListener('DOMContentLoaded', () => {
    const levels = {
        level1: [
            "ひとりラーメン", "ひとりとんかつ", "ひとりカラオケ", "ひとりスポーツ観戦"
        ],
        level2: [
            "ひとりイタリアン", "ひとりハンバーグ", "ひとり動物園", "ひとり水族館"
        ],
        level3: [
            "ひとり回転寿司", "ひとり韓国料理", "ひとりハイキング", "ひとりキャンプ"
        ],
        level4: [
            "ひとり鉄板焼き", "ひとり居酒屋", "ひとりプール", "ひとり果物狩り"
        ],
        level5: [
            "ひとり焼肉", "ひとり鍋・しゃぶしゃぶ", "ひとりボウリング", "ひとり遊園地"
        ]
    };

    function loadDiary() {
        let diary = localStorage.getItem('diary');
        if (!diary) {
            diary = [];
        } else {
            diary = JSON.parse(diary);
        }
        return diary;
    }

    function updateMissionStatus() {
        const diary = loadDiary();
        let totalCompleted = 0;

        for (const [level, missions] of Object.entries(levels)) {
            let completedMissions = 0;
            missions.forEach(mission => {
                if (diary.some(entry => entry.mission === mission)) {
                    completedMissions++;
                    totalCompleted++;
                }
            });
            const statusElement = document.getElementById(`${level}-status`);
            if (statusElement) {
                statusElement.textContent = `${completedMissions}/${missions.length} ミッション完了`;
            }
        }

        const totalCompletedElement = document.getElementById('total-completed');
        if (totalCompletedElement) {
            totalCompletedElement.textContent = `総ミッション達成数: ${totalCompleted}`;
        }
    }

    function loadDiaryPage() {
        const diaryList = document.getElementById('diary-list');
        if (!diaryList) return;

        const diary = loadDiary();
        diary.forEach((entry, index) => {
            const diaryItem = document.createElement('li');
            diaryItem.className = 'diary-item';

            const diaryText = document.createElement('span');
            diaryText.className = 'diary-text';
            diaryText.textContent = `${entry.date} - ${entry.mission}`;

            const diaryPhoto = document.createElement('img');
            diaryPhoto.className = 'diary-photo';
            diaryPhoto.src = entry.photo;
            diaryPhoto.alt = entry.mission;
            diaryPhoto.addEventListener('click', () => {
                openModal(entry.photo, entry.comment);
            });

            const diaryComment = document.createElement('p');
            diaryComment.textContent = entry.comment;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '削除';
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
        let diary = loadDiary();
        diary.splice(index, 1);
        localStorage.setItem('diary', JSON.stringify(diary));
        location.reload(); // ページをリロードして日記リストを更新
    }

    function openModal(photoUrl, comment) {
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const modalPhoto = document.createElement('img');
        modalPhoto.className = 'modal-photo';
        modalPhoto.src = photoUrl;
        modalPhoto.alt = '拡大写真';

        const modalComment = document.createElement('p');
        modalComment.textContent = comment;

        modalContent.appendChild(modalPhoto);
        modalContent.appendChild(modalComment);
        modalContainer.appendChild(modalContent);

        document.body.appendChild(modalContainer);

        modalContainer.addEventListener('click', closeModal);
    }

    function closeModal(event) {
        if (event.target.classList.contains('modal-container')) {
            event.target.remove();
        }
    }

    // ページ読み込み時にクリア状況と達成数を更新
    updateMissionStatus();
    // 日記ページ用の関数呼び出し
    loadDiaryPage();
});

