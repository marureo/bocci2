document.addEventListener('DOMContentLoaded', () => {
    const diaryList = document.getElementById('diary-list');

    function loadDiary() {
        let diary = localStorage.getItem('diary');
        if (!diary) {
            diary = [];
        } else {
            diary = JSON.parse(diary);
        }

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
        let diary = localStorage.getItem('diary');
        if (!diary) {
            diary = [];
        } else {
            diary = JSON.parse(diary);
        }

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

    loadDiary();
});
