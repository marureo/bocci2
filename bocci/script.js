// ミッションデータのロードと保存
const levels = {
    "Lv1": [
        { task: "ひとりラーメン", advice: "1人ラーメンの魅力は、スープや麺の風味をじっくり味わえる贅沢な時間です。煮干しや豚骨など店ごとの個性を楽しみ、集中して香りや食感を堪能できます。さらに、自分好みのトッピングでオリジナルな一杯を作る楽しさも。チャーシューや煮卵、メンマなどを自由に選び、食べ方や組み合わせを試せるのが醍醐味です。一人だからこそ気兼ねなく、ラーメンの奥深い味わいやトッピングの工夫を心ゆくまで楽しめます。忙しい日常に贅沢なひとときをぜひ。" },
        { task: "ひとりとんかつ", advice: "1人でとんかつ屋さんに行く魅力は、揚げたてのとんかつを楽しめることです。カウンター席が多いお店では、一人でも入りやすく、気兼ねなく自分の食事に集中できます。サクサクの衣やジューシーな豚肉の食感を存分に味わい、ソースや塩、レモンなどで自分好みに味を調整する楽しさもあります。さらに、多くの店ではご飯やキャベツ、味噌汁のおかわりが自由なので、自分の満足いく量で食事を楽しむことが可能です。一人だからこそ、揚げたての香りや音、食感など、食べる瞬間のすべてに集中できるのが魅力。また、お店ごとのソースや揚げ方の違いを発見する楽しみもあります。" },
        { task: "ひとりカラオケ", advice: "ひとりカラオケの魅力は、誰にも気兼ねせず自由に歌えることです。友人や同僚とのカラオケで順番や周囲の反応を気にしてストレスを感じた経験がある方も、一人なら自分だけのワンマンショーを楽しめます。お気に入りの曲や練習したい曲を何度でも歌えるほか、アニソンやラップ、懐メロ、外国語の歌など、気兼ねなく挑戦できます。うろ覚えの曲を途中で止めたり、本人映像を見ながら振り付けを全力で踊るのも自由。採点結果を気にせず、好きなタイミングで休憩や再開ができるのも魅力です。一人だからこそストレスフリーで、本当の意味で音楽を楽しむ時間を満喫できます。" },
        { task: "ひとりスポーツ観戦", advice: "一人でスポーツ観戦を楽しむ最大の魅力は、自由度の高さにあります。友人や家族と一緒だと会話や周囲の目が気になることもありますが、一人なら自分のペースで試合に集中できます。例えば、選手の動きや戦術をじっくり観察したり、自分の好みに合わせた観戦スタイルを楽しむことが可能です。また、一人での観戦は自由に応援できるため、ゴールが決まった瞬間や点数が入った時の喜びを心から表現できます。" }
    ],
    "Lv2": [
            { task: "ひとりイタリアン", advice: "イタリアンの魅力は、素材の味を最大限に引き出すシンプルで洗練された料理にあります。パスタやピザといった馴染み深いメニューから、リゾットやカルパッチョなど多彩な選択肢があり、幅広い好みに応えることができます。オリーブオイルやトマト、チーズ、バジルといった新鮮な素材が豊富に使われ、ヘルシーかつ味わい深いのが特徴です。また、ワインとの相性が抜群で、料理と飲み物のマリアージュを楽しむ贅沢なひとときも味わえます。イタリアンレストランでは、カジュアルな雰囲気から高級感あふれる空間まで多様なスタイルがあり、ランチやディナー、特別な記念日など、どんなシーンにもぴったり。イタリアンは美味しさと楽しさを兼ね備えた、心を満たしてくれる料理です。" },
            { task: "ひとりハンバーグ", advice: " そのジューシーさと豊かなバリエーションにあります。一口噛めば肉汁が溢れる食感は、誰もが思わず笑顔になるおいしさです。牛肉や豚肉の配合、焼き加減、ソースの種類によって味わいが大きく変わり、自分好みの一品を見つける楽しさがあります。デミグラスソースや和風おろし、チーズインハンバーグなど、多彩なアレンジで飽きることなく楽しめるのも魅力。また、付け合わせの野菜やライス、パンとの相性も抜群で、食事全体の満足感を高めます。子どもから大人まで愛される、まさに国民食ともいえるハンバーグは、いつ食べても心を満たしてくれる一皿です。" },
            { task: "ひとり動物園", advice: "一人で動物園を楽しむ方法は、じっくりと動物たちを観察することにあります。お気に入りの動物を見つけて時間を忘れて眺めたり、動物の生態や特徴を説明する掲示物をじっくり読んで新たな知識を得るのも魅力です。特に一人だと、人混みを避けて静かなエリアを選んだり、撮影スポットで思い通りの写真を撮る自由もあります。ふれあいコーナーでは動物と近く触れ合える体験を楽しみ、カフェで休憩しながら園内の雰囲気を味わうのもおすすめです。また、イベントや餌やり体験に参加することで、一人でも充実した時間を過ごせます。一人だからこそ、周囲を気にせず、自分の興味に合わせて深く楽しむことができるのが動物園の魅力です。心を癒し、新しい発見に出会える贅沢な時間をぜひ体験してみてください。" },
            { task: "ひとり水族館", advice: "一人で水族館を楽しむ方法は、ゆったりと海の世界に浸ることです。お気に入りの生き物をじっくり観察したり、展示パネルを読みながら生態について学ぶのも魅力です。静かな環境でクラゲの幻想的な動きを眺めたり、大きな水槽の前で泳ぐ魚たちの群れに心を癒される贅沢な時間を過ごせます。一人なら、混雑を避けて好きなスポットで写真撮影を楽しむ自由もあります。イルカショーやペンギンの餌やりタイムなどのイベントに参加して、生き物の魅力をより深く感じるのもおすすめです。カフェで海をテーマにしたメニューを楽しみながら、水族館の雰囲気を満喫するのもいいですね。一人だからこそ、他人に気を使わず、自分の興味や感性に素直に向き合いながら、心のリフレッシュができるのが水族館の最大の魅力です。" }
        ],
    "Lv3": [
            { task: "ひとり回転寿司", advice: "一人で回転寿司を楽しむ方法は、好きな寿司を選び、食べたいだけ食べられる自由さにあります。周りを気にせず、気になるネタや季節限定のメニューを次々と試せるのが一人ならではの楽しみ。タッチパネルで自分好みに注文することで、席にいながら特別な一皿を味わえます。あえて普段は選ばないネタに挑戦したり、寿司以外のサイドメニューやデザートを楽しむのも新たな発見に繋がります。お茶を飲みながらリラックスして、自分だけの時間を満喫できるのも魅力。回転寿司は短時間で手軽に利用できるため、空いた時間にふらりと訪れるのもおすすめです。一人だからこそ自由度が高く、食べることに集中しながら、気分をリフレッシュできる贅沢な体験をぜひ楽しんでみてください" },
            { task: "ひとり韓国料理", advice: "一人で韓国料理を楽しむ方法は、多彩な味わいを堪能することです。ビビンバやスンドゥブチゲ、チヂミなど、豊富なメニューからその日の気分に合わせて選べるのが魅力。一人用に提供される鍋料理や定食スタイルの店も増えており、気軽に訪れることができます。辛さが特徴の料理も、一人なら自分好みの辛さを選べる自由さがあります。韓国料理特有のキムチやナムルなどのバンチャン（おかず）も、組み合わせを試しながら楽しむのが醍醐味です。また、サムギョプサルやプルコギのような焼き肉系料理を一人で堪能できる専門店もあり、気兼ねなくゆっくりと味わえます。多彩な味わいと自由なスタイルで、韓国料理の魅力を存分に楽しんでください。" },
            { task: "ひとりハイキング", advice: "一人でハイキングを楽しむ方法は、自然の中で自分だけの時間を満喫することです。静かな山道を自分のペースで歩けるため、疲れたら休憩し、気になる景色や植物をじっくり観察する自由があります。音楽を聞きながら歩いたり、鳥のさえずりや川のせせらぎに耳を傾けることで、心をリフレッシュできるのも魅力です。お気に入りの景色を見つけたら写真を撮ったり、ベンチで一息つきながらお弁当や軽食を楽しむのも贅沢なひととき。地図を見ながらルートを決めたり、未踏のトレイルに挑戦することで冒険心を満たすこともできます。また、一人だからこそ静かに自然と向き合え、日常の喧騒から離れてリラックスできます。事前にルートや天候をしっかり確認し、安全に気をつけて、心地よい一人ハイキングをぜひ楽しんでください。" },
            { task: "ひとりキャンプ", advice: " 一人でキャンプを楽しむ方法は、自然を満喫し、自由な時間を過ごすことです。まず、好きなキャンプ場を選び、自分に合った場所にテントを設営するところから楽しみが始まります。一人なら時間や場所に縛られることなく、静かな環境で読書や星空観察、焚き火を楽しむ贅沢な時間を過ごせます。自分好みのアウトドア料理を作るのも一つの楽しみで、シンプルなキャンプ飯でも、一人で作る達成感は格別です。自然の音に耳を傾けたり、心のリフレッシュや考え事をする時間を持てるのも一人キャンプの魅力です。特に初心者の場合は、設備が整ったオートキャンプ場などを選ぶと安心して楽しめます。安全対策や天候確認を怠らず、自然の中で自分だけの時間を存分に味わい、日常からの解放感を楽しんでください。" }
        ],
    "Lv4": [
            { task: "ひとり鉄板焼き", advice: "一人で鉄板焼きを楽しむ方法は、目の前で調理される料理のライブ感を存分に味わいながら、自分だけの贅沢なひとときを過ごすことです。一人でカウンター席に座れば、シェフが作る音や香り、焼き上がる瞬間を間近で楽しむことができます。お肉や海鮮、野菜など、旬の素材が鉄板で焼かれる様子を見ながら、焼き加減や味付けを好みに応じてリクエストするのも一人ならではの楽しみ方です。また、豪華な鉄板焼きメニューはもちろん、ガーリックライスやデザートなどの一品一品をじっくり堪能できます。気兼ねなく自分のペースで食事を進められるため、料理そのものやシェフとの会話を純粋に楽しめるのも魅力です。高級感あふれる鉄板焼きを一人で体験することで、非日常感や特別な満足感を味わえる時間をぜひ堪能してください。" },
            { task: "ひとり居酒屋", advice: "一人で居酒屋を楽しむ方法は、好きな料理とお酒をゆったり楽しむことです。カウンター席に座れば、店員や隣の常連客との軽い会話を楽しむこともでき、一人でありながら心地よいコミュニケーションが生まれる場でもあります。好きなメニューを自由に選び、焼き鳥や刺身、一品料理などを少しずつ楽しむのも醍醐味。お酒も、ビール、日本酒、焼酎、カクテルなど、その日の気分に合わせて選べます。一人だからこそ、料理やお酒に集中してその美味しさをしっかり味わうことができ、周囲を気にせずリラックスできます。また、静かな時間を楽しむもよし、賑やかな雰囲気を味わうもよしで、自分だけの特別なひとときを作ることができます。一人居酒屋は、自由度が高く、気分転換やリフレッシュにもぴったりです。" },
            { task: "ひとりプール", advice: " 一人でプールを楽しむ方法は、泳ぎながら、体を動かす爽快感を満喫することです。誰に気を使うことなく、自分の体力や気分に合わせて泳ぐことができるため、リラックスしながら楽しめます。ウォーキングプールやジャグジーを利用して体をほぐしたり、サウナでリフレッシュするのもおすすめです。一人なら、水中でのストレッチや軽いエクササイズにも集中でき、リフレッシュと健康維持の両方を叶えられます。休憩中にはプールサイドで読書や音楽を楽しみながら、日常の喧騒から離れる贅沢な時間を過ごすのも魅力です。また、スライダーや流れるプールのある施設では、一人でも子供のように楽しむことができます。一人だからこそ、自分だけのペースで心と体をリフレッシュし、プールの魅力を存分に味わいましょう。" },
            { task: "ひとり果物狩り", advice: "一人で果物狩りを楽しむ方法は、誰にも邪魔されず、旬の果物を味わう贅沢な時間を過ごすことです。お気に入りの果物をじっくり選び、収穫する瞬間の楽しさを満喫できます。摘みたての果物をその場で味わえば、フレッシュな香りや甘さに感動すること間違いなし。一人だからこそ、他人を気にせず写真を撮ったり、じっくり観察しながら自然と触れ合えるのも魅力です。また、スタッフと会話をしながら、果物の育て方や品種について学ぶことで、知識も広がります。収穫した果物を持ち帰り、自宅で楽しむのも一人果物狩りの醍醐味。ジャムやスムージーを作ったり、そのまま味わったりと、収穫後の楽しみも多彩です。一人だからこそ、自由で充実した果物狩りを心ゆくまで堪能できます。" }
        ],
     "Lv5": [
            { task: "ひとり焼肉", advice: "一人で焼肉を楽しむ方法は、好きな部位を焼きながら、焼き加減や味付けにこだわり抜けることです。一人焼肉専門店やカウンター席のあるお店なら、気軽に訪れることができ、周囲を気にせずリラックスして過ごせます。自分の好きな肉を選び、部位ごとの違いやタレ、塩などの味付けをじっくり楽しめるのが魅力です。また、野菜や海鮮、サイドメニューも自由に選べるため、バランスの良い食事を自分好みにアレンジできます。焼肉の香ばしい香りやジュージューと焼ける音を感じながら食べる時間は、まさに癒しのひととき。一人なら、次の一切れを焼くタイミングも、休憩するタイミングも自由自在です。肉の焼き方やタレの組み合わせを試して、自分だけの焼肉スタイルを追求するのも楽しいポイント。一人焼肉は、満足感と充実感を得られる贅沢な時間です。" },
            { task: "ひとり鍋・しゃぶしゃぶ", advice: "一人で鍋やしゃぶしゃぶを楽しむ方法は、自分の好みに合わせて具材や味付けを自由に選び、ゆったりとした時間を過ごすことです。一人鍋専用のお店や、一人用の鍋セットが提供される店なら、気兼ねなく自分だけの鍋を堪能できます。好きな野菜、肉、魚介類などを選び、味噌や醤油、辛味噌、昆布だしなど、好みのスープで自分だけの味を楽しむのが魅力。また、火の通し加減を調整しながら、具材の美味しさを最大限に引き出せるのも一人だからこその楽しみです。タレや薬味の組み合わせを変えながら味の変化を楽しむのもおすすめ。食事の途中でゆっくり休憩したり、具材を追加したりと、全て自分のペースで進められます。一人で鍋やしゃぶしゃぶを味わう時間は、リラックスしながら心も体も温まる贅沢なひとときです。" },
            { task: "ひとりボウリング", advice: "一人でボウリングを楽しむ方法は、自分のペースで集中してプレイできることにあります。誰にも気を使うことなく、自分のフォームやスコアに向き合い、上達を目指す練習時間を持てるのが魅力です。レンタルシューズを履いてレーンに立つと、心地よい緊張感とともに集中力が高まり、日常を忘れてリフレッシュできます。特に、一人だと投球のタイミングやプレイのリズムを自由に調整できるため、マイペースで楽しめます。自分の弱点を見つけたり、ストライクやスペアを狙う戦略を試したりすることで、達成感も味わえます。また、ボウリング場の音楽やライトアップされたレーンの雰囲気を満喫しながら、リラックスした時間を過ごすことができます。スコアにこだわらず、運動として楽しむのも一人ボウリングの醍醐味。心も体もリフレッシュできる、自分だけのボウリング時間をぜひ楽しんでみてください。" },
            { task: "ひとり遊園地", advice: "一人で遊園地を楽しむ方法は、自分のペースで好きなアトラクションや景色を満喫することです。混雑を避けながら人気のアトラクションを効率よく回れるのも、一人ならではのメリット。特に、自分の興味や好みに合わせてプランを自由に組み立てられるため、思い切り楽しむことができます。また、一人だと好きなタイミングで休憩を取りながら、観覧車やメリーゴーラウンドなどのゆったりとしたアトラクションを楽しむのもおすすめ。食べ歩きをしながら園内の雰囲気を味わったり、フォトスポットでの撮影を楽しむこともできます。ショーやパレードではお気に入りの場所を確保し、じっくりと観賞する贅沢な時間も持てます。一人での遊園地訪問は、誰にも気を使わず自分だけのペースで非日常を満喫できる特別な体験です。思い切りリフレッシュして、自由な冒険を楽しんでください。" }
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
    // 通知コンテナを作成
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.textContent = `${mission} ミッションを達成しました！`;

    // 通知を画面に追加
    document.body.appendChild(notification);

    // 0.1秒後にクラスを追加してトランジションを発動
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // 3秒後に通知を削除
    setTimeout(() => {
        notification.remove();
    }, 3000);
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