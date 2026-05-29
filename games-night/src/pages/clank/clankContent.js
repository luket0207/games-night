export const clankContent = {
  en: {
    locale: 'en',
    badge: 'Dungeon guide',
    title: 'Clank! Quick Rules',
    marketLabel: 'Card element',
    subtitle:
      'A simple play reference for teaching Clank, surviving the dragon, and understanding the market cards.',
    rulesHeading: 'How the Game Works',
    rulesIntro:
      'Use these notes as a quick table guide. They cover the main flow of the game without copying the official rulebook.',
    ruleSections: [
      {
        number: '01',
        title: 'Game objective',
        bullets: [
          'Explore the dungeon, collect treasure, steal an artifact, and get back out before the dragon defeats you.',
          'You usually need to escape with an artifact to feel safe about your score.',
        ],
      },
      {
        number: '02',
        title: 'Main idea',
        bullets: [
          'Your deck gives you movement, attack, and skill each turn.',
          'You use those resources to move through rooms, fight monsters, buy cards, collect rewards, and manage how much Clank you make.',
        ],
      },
      {
        number: '03',
        title: 'What happens on a turn',
        bullets: [
          'Play cards from your hand.',
          'Spend boots to move through the dungeon.',
          'Spend swords to fight monsters or deal with dangerous paths.',
          'Spend skill to buy useful cards.',
          'Collect gold, secrets, items, monkey idols, and artifacts when the board or card effects allow it.',
          'Add Clank whenever a card or board space tells you to make noise.',
        ],
      },
      {
        number: '04',
        title: 'Movement',
        bullets: [
          'Boot icons give movement.',
          'Most normal paths cost one movement, but some tunnels cost more.',
          'Some paths have monster icons or special requirements, so check the path before moving.',
        ],
      },
      {
        number: '05',
        title: 'Fighting',
        bullets: [
          'Sword icons are used for attack.',
          'You can defeat monsters that appear in the dungeon row.',
          'Some board paths also punish you if you pass without enough attack or another required item.',
          'Defeated monsters often reward gold, cards, healing, or other benefits.',
        ],
      },
      {
        number: '06',
        title: 'Skill and buying cards',
        bullets: [
          'Skill points are your buying power for new cards.',
          'Use skill to buy cards from the dungeon row or other available card areas.',
          'Most bought cards go to your discard pile and join your deck later.',
        ],
      },
      {
        number: '07',
        title: 'Clank and the dragon bag',
        bullets: [
          'Clank is the noise you make while exploring.',
          'When a card tells you to gain Clank, place your cubes in the Clank area.',
          'During dragon attacks, cubes are drawn from the dragon bag.',
          'If your cubes are drawn, you take damage.',
          'Making too much Clank makes future dragon attacks more dangerous.',
        ],
      },
      {
        number: '08',
        title: 'Artifacts and escaping',
        bullets: [
          'Each player wants to collect an artifact before leaving.',
          'Once artifacts start being taken, the dragon becomes more dangerous.',
          'Try to return to the surface and escape instead of getting knocked out underground.',
          'Escaping usually gives a much better result than collapsing in the dungeon.',
        ],
      },
      {
        number: '09',
        title: 'Damage and losing health',
        bullets: [
          'Damage moves your health marker down.',
          'Monsters, dangerous paths, and dragon attacks can all hurt you.',
          'If you take too much damage, you are knocked out, so healing and timing matter.',
        ],
      },
      {
        number: '10',
        title: 'End of the game',
        bullets: [
          'The end game begins when a player escapes or when players start getting knocked out after the artifact rush becomes dangerous.',
          'Scores come from artifacts, treasure, cards, gold, and other point sources.',
          'The highest score wins.',
        ],
      },
    ],
    marketHeading: 'Market Card Guide',
    marketIntro:
      'These notes explain the common symbols, keywords, and effect types that help new players understand what the market and dungeon cards are doing.',
    marketCards: [
      {
        displayTerm: 'Skill / スキル',
        bullets: [
          'Skill is used to buy cards from the dungeon row or another available card area.',
          'It is often shown as a blue value or icon.',
          'If a card gives skill, you spend it during that same turn.',
        ],
      },
      {
        displayTerm: 'Swords / Attack / 剣・攻撃',
        bullets: [
          'Swords are used to fight monsters.',
          'Some monsters appear in the dungeon row.',
          'Some board paths also want attack so you can move through safely.',
          'If you cannot cover a dangerous monster path, you may take damage.',
        ],
      },
      {
        displayTerm: 'Boots / Movement / ブーツ・移動',
        bullets: [
          'Boots let you move through rooms in the dungeon.',
          'One boot usually covers one normal path.',
          'Some paths cost more movement or come with special rules.',
        ],
      },
      {
        displayTerm: 'Gold / ゴールド',
        bullets: [
          'Gold can come from cards, rooms, monsters, and treasure.',
          'Gold is worth points at the end of the game.',
          'Some effects also spend or reward gold during play.',
        ],
      },
      {
        displayTerm: 'Clank / クランク',
        bullets: [
          'Some cards make you add Clank.',
          'Put those cubes in the Clank area first.',
          'Later they may be added to the dragon bag.',
          'More Clank means more danger when the dragon attacks.',
        ],
      },
      {
        displayTerm: 'Draw cards / カードを引く',
        bullets: [
          'Some cards let you draw extra cards.',
          'That gives you more options in the same turn.',
          'Draw effects often help create stronger combo turns.',
        ],
      },
      {
        displayTerm: 'Healing / 回復',
        bullets: [
          'Some cards and effects heal damage.',
          'Healing removes damage from your health track.',
          'It helps you stay alive long enough to escape.',
        ],
      },
      {
        displayTerm: 'Teleport or special movement / テレポート・特殊移動',
        bullets: [
          'Some effects move you in unusual ways.',
          'They may skip paths, move to a specific room, or ignore part of a restriction.',
          'When this happens, follow the card effect carefully.',
        ],
      },
      {
        displayTerm: 'Companions / 仲間',
        bullets: [
          'Some cards are companions.',
          'Companions often give solid effects on their own.',
          'Other cards may become stronger if you already played a companion this turn.',
        ],
      },
      {
        displayTerm: 'Devices / 装置',
        bullets: [
          'Some cards are devices.',
          'Device cards often give an immediate one-time effect when bought, gained, or resolved.',
          'After using the effect, follow the normal card instructions.',
        ],
      },
      {
        displayTerm: 'Monsters / モンスター',
        bullets: [
          'Some cards in the dungeon row are monsters.',
          'You do not buy monsters with skill.',
          'Instead, you defeat them with swords and then take the reward shown.',
        ],
      },
      {
        displayTerm: 'Dragon attack cards / ドラゴン攻撃カード',
        bullets: [
          'Some cards trigger a dragon attack when they appear.',
          'Refill the dungeon row first if the timing requires it, then resolve the attack.',
          'Cubes drawn from the dragon bag damage the matching players.',
        ],
      },
      {
        displayTerm: 'Victory points / 勝利点',
        bullets: [
          'Some cards are worth points at the end of the game.',
          'Those points are added to your artifact, treasure, gold, and other scoring items.',
          'A card can be worth taking even if its immediate effect looks small.',
        ],
      },
      {
        displayTerm: 'Arrive effects / 登場時効果',
        bullets: [
          'Some cards do something as soon as they appear in the dungeon row.',
          'Resolve that effect when the card arrives.',
          'These effects can include danger changes, dragon attacks, or other immediate problems.',
        ],
      },
      {
        displayTerm: 'Acquire effects / 獲得時効果',
        bullets: [
          'Some cards do something when you buy or gain them.',
          'Resolve that acquire effect right away.',
          'After that, the card usually goes to your discard pile unless it says otherwise.',
        ],
      },
    ],
  },
  ja: {
    locale: 'ja',
    badge: 'ダンジョンガイド',
    title: 'クランク！かんたんルールガイド',
    marketLabel: 'カード要素',
    subtitle:
      'ドラゴンにやられる前に脱出する流れと、マーケット系カードの見方をすばやく確認できる日本語ガイドです。',
    rulesHeading: 'ゲームの流れ',
    rulesIntro:
      '遊びながら確認しやすいように、クランクの大事な流れだけをやさしくまとめています。公式ルールの文章そのままではありません。',
    ruleSections: [
      {
        number: '01',
        title: 'ゲームの目的',
        bullets: [
          'ダンジョンを進み、宝を集め、アーティファクトを取って、ドラゴンに倒される前に地上へ戻ることを目指します。',
          'しっかり点数を狙うなら、アーティファクトを持って逃げ切ることが大切です。',
        ],
      },
      {
        number: '02',
        title: '基本の考え方',
        bullets: [
          '自分のデッキから出したカードで、移動、攻撃、スキルを作ります。',
          'それらを使って部屋を移動し、モンスターと戦い、カードを買い、報酬を取り、クランクの出しすぎを管理します。',
        ],
      },
      {
        number: '03',
        title: '手番でやること',
        bullets: [
          '手札のカードを出します。',
          'ブーツを使ってダンジョン内を移動します。',
          '剣を使ってモンスターを倒したり、危険な道に対応したりします。',
          'スキルを使って新しいカードを買います。',
          '状況に応じてゴールド、秘密、アイテム、猿の偶像、アーティファクトなどを受け取ります。',
          'カード効果やマスに指示があればクランクを追加します。',
        ],
      },
      {
        number: '04',
        title: '移動',
        bullets: [
          'ブーツのアイコンは移動力です。',
          '普通の道なら、通常はブーツ1つで1本進めます。',
          '道によっては追加の移動力が必要だったり、特別な条件が付いていたりします。',
        ],
      },
      {
        number: '05',
        title: '戦闘',
        bullets: [
          '剣のアイコンは攻撃力です。',
          'ダンジョン列に出たモンスターは剣で倒します。',
          '盤面の道にも、通る時に攻撃力などを要求する場所があります。',
          'モンスターを倒すと、ゴールドやカード、回復などの報酬がもらえることがあります。',
        ],
      },
      {
        number: '06',
        title: 'スキルとカード購入',
        bullets: [
          'スキルは新しいカードを買うための資源です。',
          'ダンジョン列や購入可能なカード置き場からカードを獲得できます。',
          '買ったカードの多くは、すぐには使わず捨て札に入り、後で山札に混ざります。',
        ],
      },
      {
        number: '07',
        title: 'クランクとドラゴンバッグ',
        bullets: [
          'クランクは、自分が立てた物音です。',
          'クランクを増やす時は、まず自分のキューブをクランク置き場に置きます。',
          'ドラゴン攻撃が起きると、そのキューブがドラゴンバッグに入って引かれることがあります。',
          '引かれたキューブの持ち主はダメージを受けます。',
          'クランクを出しすぎるほど、あとで危険になります。',
        ],
      },
      {
        number: '08',
        title: 'アーティファクトと脱出',
        bullets: [
          '基本的には、まずアーティファクトを取ることが大きな目標です。',
          'アーティファクトが取られ始めると、ドラゴンはさらに危険になります。',
          '地下で倒れるより、地上まで戻って脱出した方がずっと有利です。',
          '安全に逃げ切れれば、得点面でも結果が良くなりやすいです。',
        ],
      },
      {
        number: '09',
        title: 'ダメージと気絶',
        bullets: [
          'ダメージを受けると体力トラックが下がります。',
          'モンスター、危険な道、ドラゴン攻撃などでダメージを受けます。',
          '体力がなくなると気絶してしまうので、回復や引き際も重要です。',
        ],
      },
      {
        number: '10',
        title: 'ゲーム終了',
        bullets: [
          '誰かが脱出したり、アーティファクト争いの後に倒れる人が出たりすると終盤に入ります。',
          '最後はアーティファクト、宝物、カード、ゴールド、その他の得点源を合計します。',
          '合計点が最も高い人の勝ちです。',
        ],
      },
    ],
    marketHeading: 'マーケットカード説明',
    marketIntro:
      'ここでは、マーケットやダンジョン列のカードを見る時に役立つ、よく出る記号や効果の種類をまとめています。',
    marketCards: [
      {
        displayTerm: 'スキル / Skill',
        bullets: [
          'スキルは、ダンジョン列や購入できるカード置き場のカードを買うために使います。',
          '多くの場合、青い数字やアイコンで表されます。',
          'カードで得たスキルは、その手番のうちに使います。',
        ],
      },
      {
        displayTerm: '剣・攻撃 / Swords, Attack',
        bullets: [
          '剣はモンスターと戦うために使います。',
          'モンスターはダンジョン列に出ることがあります。',
          '盤面の道にも、安全に通るために攻撃力が必要な場所があります。',
          '必要な攻撃力が足りないまま危険な道を通ると、ダメージを受けることがあります。',
        ],
      },
      {
        displayTerm: 'ブーツ・移動 / Boots, Movement',
        bullets: [
          'ブーツはダンジョン内を移動するための力です。',
          '普通はブーツ1つで通常の道を1本進めます。',
          '道によっては、より多くの移動力や追加条件が必要です。',
        ],
      },
      {
        displayTerm: 'ゴールド / Gold',
        bullets: [
          'ゴールドはカード、部屋、モンスター、宝物などから手に入ります。',
          'ゴールドはゲーム終了時に得点になります。',
          '効果によっては、ゲーム中に使ったり追加でもらったりすることもあります。',
        ],
      },
      {
        displayTerm: 'クランク / Clank',
        bullets: [
          '一部のカードはクランクを増やします。',
          'クランクを増やす時は、自分のキューブをクランク置き場に置きます。',
          'その後、キューブがドラゴンバッグに入ることがあります。',
          'クランクが多いほど、ドラゴン攻撃で傷つく危険が高くなります。',
        ],
      },
      {
        displayTerm: 'カードを引く / Draw cards',
        bullets: [
          '追加でカードを引ける効果があります。',
          'その手番の選択肢が増えるので、強い動きにつながりやすいです。',
          '連続してうまく動きたい時に役立ちます。',
        ],
      },
      {
        displayTerm: '回復 / Healing',
        bullets: [
          'カードや効果によってダメージを回復できます。',
          '回復すると体力トラックのダメージが減ります。',
          '脱出するまで生き残る助けになります。',
        ],
      },
      {
        displayTerm: 'テレポート・特殊移動 / Teleport, special movement',
        bullets: [
          '一部のカードは、ふつうとは違う移動をさせてくれます。',
          '道を飛ばしたり、特定の部屋へ移動したり、移動制限の一部を無視したりできます。',
          'この場合は、そのカードの効果にしたがって処理します。',
        ],
      },
      {
        displayTerm: '仲間 / Companions',
        bullets: [
          '仲間カードという種類があります。',
          '仲間カードは、それだけでも便利な効果を持つことが多いです。',
          'ほかのカードの中には、この手番に仲間を出していると強くなるものもあります。',
        ],
      },
      {
        displayTerm: '装置 / Devices',
        bullets: [
          '装置カードという種類もあります。',
          '装置は、買った時や使った時にすぐ効果を出すことが多いです。',
          '効果を処理したら、その後はカードの指示にしたがいます。',
        ],
      },
      {
        displayTerm: 'モンスター / Monsters',
        bullets: [
          'ダンジョン列にはモンスターカードが出ることがあります。',
          'モンスターはスキルで買いません。',
          '剣を使って倒し、書かれている報酬を受け取ります。',
        ],
      },
      {
        displayTerm: 'ドラゴン攻撃カード / Dragon attack cards',
        bullets: [
          '出た時にドラゴン攻撃を起こすカードがあります。',
          '必要なら先にダンジョン列を補充してから、ドラゴン攻撃を解決します。',
          'ドラゴンバッグから引かれたキューブの持ち主がダメージを受けます。',
        ],
      },
      {
        displayTerm: '勝利点 / Victory points',
        bullets: [
          'ゲーム終了時に得点になるカードがあります。',
          'その点数は、アーティファクト、宝物、ゴールドなどの得点と合計します。',
          'すぐ強く見えないカードでも、勝利点が大きな助けになることがあります。',
        ],
      },
      {
        displayTerm: '登場時効果 / Arrive effects',
        bullets: [
          'ダンジョン列に出た瞬間に効果が起こるカードがあります。',
          'そのカードが登場した時にすぐ処理します。',
          '危険度の上昇、ドラゴン攻撃、そのほか即時効果が含まれることがあります。',
        ],
      },
      {
        displayTerm: '獲得時効果 / Acquire effects',
        bullets: [
          '買った時や獲得した時に発動する効果があります。',
          '獲得時効果はすぐに解決します。',
          'その後、特別な指示がなければカードは通常どおり捨て札に入ります。',
        ],
      },
    ],
  },
};
