const wordDataSet = [
  {
    "entry": "distinguish",
    "meaning_ja": "...を区別する / 〈物事が〉…の特徴である / 《通例canと共に》…をはっきり見る,聞く / 〈自分〉を目立たせる",
    "example_sentence": "It is important to distinguish between right and wrong.",
    "translated_sentence": "正しいことと間違ったことを区別することは重要です。"
  },
  {
    "entry": "massive",
    "meaning_ja": "大きくて重い / 大規模な, 膨大な",
    "example_sentence": "The elephant is massive.",
    "translated_sentence": "象は大きいです。"
  },
  {
    "entry": "greet",
    "meaning_ja": "〈他〉〈人など〉にあいさつする / 《喜び・親しみ・悪意などをもって》…を迎える《with ...》",
    "example_sentence": "I greet my friends every morning.",
    "translated_sentence": "私は毎朝友達に挨拶をします。"
  },
  {
    "entry": "period",
    "meaning_ja": "〈C〉(あることが続く) 期間 / (歴史的な) 時代 / (試合の)一区切り / 《おもに米》ピリオド, 終止符",
    "example_sentence": "The period of the dinosaurs lasted [[up to]] 65 million years.",
    "translated_sentence": "恐竜の時代は6,500万年まで続いたと言われています。"
  },
  {
    "entry": "crucial",
    "meaning_ja": "重要な / 決定的な / 必須の / 不可欠な",
    "example_sentence": "This information is crucial for the success of the project.",
    "translated_sentence": "この情報はプロジェクトの成功に重要です。"
  },
  {
    "entry": "transition",
    "meaning_ja": "〈U/C〉《...から...への》移行, 変遷《from ... to ...》 / 《...から...への》過渡期《from ... to ...》",
    "example_sentence": "The transition from summer to autumn is always beautiful.",
    "translated_sentence": "夏から秋への移り変わりはいつも美しいです。"
  },
  {
    "entry": "competitive",
    "meaning_ja": "競争の, 競争による / 競争心の強い",
    "example_sentence": "She is very competitive and always wants to win.",
    "translated_sentence": "彼女はとても競争心が強く、いつも勝ちたがっています。"
  },
  {
    "entry": "responsibility",
    "meaning_ja": "〈U〉責任があること / 〈C〉責任を負うべきこと, 責務",
    "example_sentence": "Taking responsibility for your actions is important.",
    "translated_sentence": "自分の行動に責任を持つことは重要です。"
  },
  {
    "entry": "discussion",
    "meaning_ja": "〈U〉《...についての》議論, 討論, 検討《about, on ...》",
    "example_sentence": "The discussion about the new project lasted for hours.",
    "translated_sentence": "新しいプロジェクトについての議論は数時間続きました。"
  },
  {
    "entry": "democratic",
    "meaning_ja": "民主主義の / (人・態度などが)民主的な",
    "example_sentence": "The country has a strong democratic tradition.",
    "translated_sentence": "その国は強い民主主義の伝統を持っています。"
  },
  {
    "entry": "stick",
    "meaning_ja": "〈C〉棒, 棒切れ,枝 / (歩行用)ステッキ,杖  / 《~ of ...》 棒状《の...》 /《話》処罰,せっかん",
    "example_sentence": "I found a stick on the ground.",
    "translated_sentence": "地面に棒が落ちているのを見つけました。"
  },
  {
    "entry": "such",
    "meaning_ja": "《特定の種類・程度を示して》こんな,あんな / 《類似の種類・程度を示して》そんな,そのような / 《名詞の前にのみ用いて》とても / 《補語にのみ用いて》そのような",
    "example_sentence": "I have never seen such a beautiful sunset before.",
    "translated_sentence": "私はこんな美しい夕日を見たことがありません。"
  },
  {
    "entry": "indication",
    "meaning_ja": "〈U〉《...を》指摘すること, 表示すること《of ...》 / 〈U/C〉表れ, 徴候, 兆し",
    "example_sentence": "The doctor gave me an indication of how long my recovery would take.",
    "translated_sentence": "医者は私に回復にどれくらい時間がかかるかの指摘をしました。"
  },
  {
    "entry": "fund",
    "meaning_ja": "〈C〉《特定の目的のための》資金, 基金《for ...》 / 《a ~》(すぐに役立つ知職などの)蓄え,蓄積",
    "example_sentence": "I need to raise funds for my new business venture.",
    "translated_sentence": "新しいビジネスベンチャーのために資金を集める必要があります。"
  },
  {
    "entry": "statement",
    "meaning_ja": "声明；供述",
    "example_sentence": "He made a statement to the police about the incident.",
    "translated_sentence": "彼は事件について警察に供述した。"
  },
  {
    "entry": "morning",
    "meaning_ja": "〈C〉〈U〉朝,午前(午前0時または夜明けから正午まで)  / 〈U〉《the~》(物事の)始まり,夜明け,黎明(れいめい)《+of+名》  / 《名詞の前にのみ用いて》朝の",
    "example_sentence": "The morning sun was so beautiful.",
    "translated_sentence": "朝日が美しかった。"
  },
  {
    "entry": "rural",
    "meaning_ja": "田舎の, 農村の / 田舎風の / 農業の",
    "example_sentence": "I grew up in a rural area surrounded by fields and farms.",
    "translated_sentence": "私は田舎の畑や農場に囲まれた地域で育ちました。"
  },
  {
    "entry": "folk",
    "meaning_ja": "〈C〉《米・しばしば複数形で》 人々 / 《話》 《one's ~》 家族 / 《古》民族 / 《話》《呼び掛けに用いて》皆さん",
    "example_sentence": "Now folks, let's go on.",
    "translated_sentence": "さあ、みんな、先へ進もう。"
  },
  {
    "entry": "hundred",
    "meaning_ja": "〈C〉(数の) 100 / 《複数形で》何百《もの…》, 多数《の…》 《of ...》 / 《米話》100ドル /《英話》100ポンド / 【形】100の / 《a ~》数多くの",
    "example_sentence": "There are a hundred people in the room.",
    "translated_sentence": "部屋には百人います。"
  },
  {
    "entry": "inform",
    "meaning_ja": "《...を》〈人〉に知らせる《of ...》 / 《...の》情報を提供する, 《...を》密告する《on, upon, against ...》",
    "example_sentence": "I will inform him of the meeting.",
    "translated_sentence": "私は彼に会議のことを知らせます。"
  },
  {
    "entry": "otherwise",
    "meaning_ja": "ほかの点では / そうでなければ, さもないと / 別の方法で",
    "example_sentence": "I don't like spicy food, but otherwise, I enjoy trying new dishes.",
    "translated_sentence": "辛い食べ物は好きではありませんが、それを除けば新しい料理を試すのが楽しいです。"
  },
  {
    "entry": "judgment",
    "meaning_ja": "【名/U】判断力 / 【名/U/C】判断, 判定 / 判決 / 【名/C】《判断に基づく》 見解 《on ...》　裁判",
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "department",
    "meaning_ja": "〈C〉(政府・会社・学校などの組織の) 部門 / (仕事などの) (専門) 領域 /《英》(官庁の)局 / (フランスなどの) 県,州",
    "example_sentence": "The marketing department is responsible for promoting the company's products.",
    "translated_sentence": "マーケティング部門は、会社の製品の宣伝を担当しています。"
  },
  {
    "entry": "external",
    "meaning_ja": "外側の, 外部の / (作用・動作などが) 外側からの",
    "example_sentence": "The external walls of the building are made of glass.",
    "translated_sentence": "建物の外壁はガラス製です。"
  },
  {
    "entry": "maintain",
    "meaning_ja": "〈ある状催・動作〉を維持する, を続ける / を主張する / 〈家族など〉を扶養する",
    "example_sentence": "It is important to maintain a healthy lifestyle.",
    "translated_sentence": "健康な生活を維持することは重要です。"
  },
  {
    "entry": "photograph",
    "meaning_ja": "写真を撮る",
    "example_sentence": "I love to photograph beautiful landscapes.",
    "translated_sentence": "私は美しい風景を撮影するのが大好きです。"
  },
  {
    "entry": "section",
    "meaning_ja": "〈C〉(全体を構成する個々の) 部分,部品 / (内部構造を示す)断面図 / 〈U〉切断すること /",
    "example_sentence": "This book is divided into 10 sections.",
    "translated_sentence": "この本は１０つのセクションに分かれている。"
  },
  {
    "entry": "nevertheless",
    "meaning_ja": "それでもやはり / それにもかかわらず",
    "example_sentence": "She was tired; nevertheless, she continued working.",
    "translated_sentence": "彼女は疲れていた。それにもかかわらず、彼女は仕事を続けた。"
  },
  {
    "entry": "remote",
    "meaning_ja": "遠い、遠隔の、離れた、かすかな、わずかな",
    "example_sentence": "The lighthouse was just a remote speck in the distance.",
    "translated_sentence": "灯台は遠く離れた小さな点にしか見えませんでした。"
  },
  {
    "entry": "trillion",
    "meaning_ja": "【名/C】(アメリカ・フランスでは) 兆 / (イギリス・ドイツでは)100京 / 《くだけて》無数",
    "example_sentence": "The company's revenue reached a trillion dollars last year.",
    "translated_sentence": "会社の収益は昨年、1兆ドルに達しました。"
  },
  {
    "entry": "agricultural",
    "meaning_ja": "農業の, 農耕の, 農学の",
    "example_sentence": "The agricultural sector plays a vital role in the country's economy.",
    "translated_sentence": "農業部門は、国の経済において重要な役割を果たしています。"
  },
  {
    "entry": "precise",
    "meaning_ja": "正確な, 的確な / 《名詞の前にのみ用いて》まさにその / (必要量などに)ちょうどの / (人,考え・規則などか)厳格な",
    "example_sentence": "He gave a precise answer to the question.",
    "translated_sentence": "彼は質問に正確な答えをした。"
  },
  {
    "entry": "elderly",
    "meaning_ja": "年配の,初老の / 《the ~》年配の人たち",
    "example_sentence": "The elderly couple enjoys taking walks in the park every morning.",
    "translated_sentence": "年配の夫婦は毎朝公園で散歩を楽しんでいます。"
  },
  {
    "entry": "impose",
    "meaning_ja": "《...に》 (重荷・税金など)を課する, を負わせる《on, upon ...》 / (考えなど)を押しつける,を強いる《on, upon ...》 / 《...に》つけこむ, 甘える《on, upon ...》",
    "example_sentence": "The government decided to impose a new tax on luxury goods.",
    "translated_sentence": "政府は贅沢品に新たな税金を課すことを決定した。"
  },
  {
    "entry": "live",
    "meaning_ja": "《名詞の前にのみ用いて》生きている / 活気のある / (問題などが)当面の / 燃えている / (弾丸などが)まだ爆発してない,未発の / まだ動いている,有効な / 電流が通じている / (放送が)生の,実況の",
    "example_sentence": "I don't want to eat a live lobster.",
    "translated_sentence": "私は生きたままのえびは食べたくない。"
  },
  {
    "entry": "mature",
    "meaning_ja": "成熟した",
    "example_sentence": "She is a mature and responsible adult.",
    "translated_sentence": "彼女は成熟した責任感のある大人です。"
  },
  {
    "entry": "province",
    "meaning_ja": "〈C〉(国の行政区画としての)州,省,県 / 〈U〉(権威・責任などの及ぶ)範囲, (学問・活動などの)領域,分野 / 《the ~s》(首都・大都市に対して) 地方,いなか",
    "example_sentence": "He moved to a small province to escape the busy city life.",
    "translated_sentence": "彼は忙しい都会の生活を逃れるために小さな州に引っ越しました。"
  },
  {
    "entry": "smooth",
    "meaning_ja": "(表面が) なめらかな, 平らな",
    "example_sentence": "Her skin is smooth and flawless.",
    "translated_sentence": "彼女の肌は滑らかで完璧です。"
  },
  {
    "entry": "expert",
    "meaning_ja": "〈C〉《...の》専門家, 熟練者《at, in, on ...》",
    "example_sentence": "He is an expert in his field.",
    "translated_sentence": "彼はその分野のエキスパートだ。"
  },
  {
    "entry": "broad",
    "meaning_ja": "幅の広い / 広大な / 寛大な / 広範囲にわたる",
    "example_sentence": "She has a broad knowledge of various subjects.",
    "translated_sentence": "彼女はさまざまな科目について幅広い知識を持っています。"
  },
  {
    "entry": "additional",
    "meaning_ja": "付け加えた,追加の / 特別の",
    "example_sentence": "I need to make an additional comment on the report.",
    "translated_sentence": "私はレポートに追加のコメントを付け加える必要があります。"
  },
  {
    "entry": "previous",
    "meaning_ja": "《名詞の前にのみ用いて》前の, 先の, 以前の / 《補語にのみ用いて》《話》早まった,せっかちすぎる",
    "example_sentence": "The previous owner of the house left behind some furniture.",
    "translated_sentence": "その家の前の所有者が家具を残していった。"
  },
  {
    "entry": "throat",
    "meaning_ja": "〈C〉(気管・食道部分としての) のど / のど状の物, (容器などの)首",
    "example_sentence": "I have a sore throat.",
    "translated_sentence": "私はのどが痛いです。"
  },
  {
    "entry": "currency",
    "meaning_ja": "〈C〉〈U〉通貨, 貨幣 / 〈U〉流通, 普及",
    "example_sentence": "I need to exchange my currency for euros.",
    "translated_sentence": "私は通貨をユーロに両替する必要があります。"
  },
  {
    "entry": "stare",
    "meaning_ja": "〈自〉《...を》じっと見つめる《at, into ...》 / 〈他〉をじっと見つめる, を凝視する",
    "example_sentence": "She stared at him in disbelief.",
    "translated_sentence": "彼女は信じられないという思いで彼を見つめた。"
  },
  {
    "entry": "throughout",
    "meaning_ja": "《期間》…中[ずっと] /  《場所》…の至る所に",
    "example_sentence": "She worked hard throughout the day.",
    "translated_sentence": "彼女は一日中一生懸命働きました。"
  },
  {
    "entry": "muscle",
    "meaning_ja": "〈U〉(動物体の組織としての)筋肉,筋(きん);〈C〉(体の各部を動かす)筋肉  / 〈U〉力,(特に)筋力,腕力",
    "example_sentence": "He has strong muscles from working out regularly.",
    "translated_sentence": "彼は定期的にトレーニングをしているので、筋肉が強いです。"
  },
  {
    "entry": "musician",
    "meaning_ja": "音楽家,楽士  / 《おもに英》作曲家",
    "example_sentence": "The musician played a beautiful melody on the piano.",
    "translated_sentence": "ピアニストは美しい旋律を弾いた。"
  },
  {
    "entry": "bus",
    "meaning_ja": "バス",
    "example_sentence": "I will take the bus to school.",
    "translated_sentence": "学校へはバスに乗るつもりです。"
  },
  {
    "entry": "potentially",
    "meaning_ja": "潜在的に, 可能性を秘めて",
    "example_sentence": "He is potentially the best candidate for the job.",
    "translated_sentence": "彼は最高の候補者である可能性がある。"
  },
  {
    "entry": "replace",
    "meaning_ja": "取り替える；取って代わる；戻す、買い換える",
    "example_sentence": "I need to replace the broken light bulb.",
    "translated_sentence": "壊れた電球を取り替える必要があります。"
  },
  {
    "entry": "series",
    "meaning_ja": "〈C〉(関連のあるもの・同種のものの) 連続 / (同種の貨幣・切手などの)一組 / (テレビ番組などの)連続物 / (電気の)直列",
    "example_sentence": "I am currently watching a series on Netflix.",
    "translated_sentence": "私は現在、Netflixでシリーズを視聴しています。"
  },
  {
    "entry": "stability",
    "meaning_ja": "〈U〉安定, 安定性 / (人・意志などの)着実,強固,不変",
    "example_sentence": "The stability of the economy is crucial for the country's development.",
    "translated_sentence": "経済の安定は国の発展にとって重要です。"
  },
  {
    "entry": "staff",
    "meaning_ja": "〈C〉つえ / 支えとなるもの / 《集合的に》職員,社員 / 【動/他】...に職員を置く /",
    "example_sentence": "The staff at the hotel were very helpful and friendly.",
    "translated_sentence": "ホテルのスタッフはとても親切でフレンドリーでした。"
  },
  {
    "entry": "text",
    "meaning_ja": "原文 / 本文 / 教科書 / (議論・演説などの)主題、題目",
    "example_sentence": "The text of the book is written in a clear and concise manner.",
    "translated_sentence": "この本の本文は明瞭かつ簡潔に書かれている。"
  },
  {
    "entry": "neighbor",
    "meaning_ja": "〈C〉隣人, 近所の人 / 同胞, 仲間",
    "example_sentence": "My neighbor is a friendly person.",
    "translated_sentence": "私の隣人は親しみやすい人です。"
  },
  {
    "entry": "myself",
    "meaning_ja": "《強意用法》《Iと同格に用いて》私自身  / 《再帰用法》《動詞・前置詞の目的語として》私自身を(に),自分を(に)",
    "example_sentence": "I can take care of it myself.",
    "translated_sentence": "自分で対処できます。"
  },
  {
    "entry": "steel",
    "meaning_ja": "〈U〉鋼鉄 / 〈C〉鋼鉄製品",
    "example_sentence": "The construction of the building required a lot of steel.",
    "translated_sentence": "建物の建設にはたくさんの鋼鉄が必要でした。"
  },
  {
    "entry": "yard",
    "meaning_ja": "〈C〉ヤード(長さの単位で3フィート,約91.4センチ) / (日本で布を測るときの)ヤール / (特に建築業で)1立方ヤード",
    "example_sentence": "The kids are playing in the yard.",
    "translated_sentence": "子供たちは庭で遊んでいます。"
  },
  {
    "entry": "agenda",
    "meaning_ja": "会議事項,議事日程;備忘録",
    "example_sentence": "Please make sure to review the agenda before the meeting.",
    "translated_sentence": "会議前に必ず議題を確認してください。"
  },
  {
    "entry": "repair",
    "meaning_ja": "〈U〉修繕, 修理",
    "example_sentence": "I need to repair my car.",
    "translated_sentence": "私は車を修理する必要があります。"
  },
  {
    "entry": "subsequent",
    "meaning_ja": "(時間・順序,位置などについて)後の, 次の / (結果として)続いて起こる",
    "example_sentence": "The subsequent events were unexpected.",
    "translated_sentence": "その後の出来事は予想外でした。"
  },
  {
    "entry": "rear",
    "meaning_ja": "〈C〉(ある物の)背後, 後方 / (ある物の)後部 / (軍・艦隊などの)最後尾,後衛 / 【形】後方の / 後部の",
    "example_sentence": "I looked in the rearview mirror to check for any cars behind me.",
    "translated_sentence": "私は後ろを見るためにバックミラーを見ました。"
  },
  {
    "entry": "numerous",
    "meaning_ja": "非常に多い,多数の(very many)  / 多数から成る(を含む)",
    "example_sentence": "There are numerous books in the library.",
    "translated_sentence": "図書館には非常に多くの本があります。"
  },
  {
    "entry": "supply",
    "meaning_ja": "〈他〉《...に》〈不足物・必要物〉を供給する《to, for ...》 / 《...を》〈人・物〉に供給する《with ...》",
    "example_sentence": "They supplied the villagers with food.",
    "translated_sentence": "彼らは村人たちに食料を供給した。"
  },
  {
    "entry": "tip",
    "meaning_ja": "〈C〉チップ, 心付け,祝儀 / 《...に関する ...からの》内報, 秘密情報《for, on ... from ...》 / 《...についての》ヒント, 助言《on ...》 /",
    "example_sentence": "Here's a helpful tip: always double-check your work before submitting it.",
    "translated_sentence": "ここに役立つヒントがあります：提出する前に常に作業をダブルチェックしてください。"
  },
  {
    "entry": "wound",
    "meaning_ja": "〈C〉(身体の) 傷,負傷 / 《感情・自尊心などに対する》 痛手《to ...》",
    "example_sentence": "She had a deep wound on her leg.",
    "translated_sentence": "彼女は脚に深い傷を負っていた。"
  },
  {
    "entry": "mean",
    "meaning_ja": "〈人が〉…を意図する, ...のつもりである / 〈単語・句・文章などが〉…を意味を持つ, を意味する",
    "example_sentence": "What do you mean?",
    "translated_sentence": "何を意味していますか？"
  },
  {
    "entry": "athlete",
    "meaning_ja": "競技者,運動家 / 強壮な人;《英》陸上競技選手",
    "example_sentence": "The athlete trained hard every day to improve his performance.",
    "translated_sentence": "その競技者は、パフォーマンスを向上させるために毎日厳しくトレーニングしていました。"
  },
  {
    "entry": "ourselves",
    "meaning_ja": "《強意用法》《weと同格に用いて》私たち自身,自分たちみずから  / 《再帰用法》《動詞・前置詞の目的語として》私たち自身を(に),自分たちを(に)  / 《まれ》《おもにthan,butなどの後でweの代用として》我々,私たち",
    "example_sentence": "We should believe in ourselves and our abilities.",
    "translated_sentence": "私たちは自分自身と自分の能力を信じるべきです。"
  },
  {
    "entry": "car",
    "meaning_ja": "自動車(automobile)電車(streetcar)  / 《米》(鉄道の)車両;客車,貨車  / (気球などの)かご;(エレベーターの)箱",
    "example_sentence": "I bought a new car.",
    "translated_sentence": "私は新しい車を買った。"
  },
  {
    "entry": "partnership",
    "meaning_ja": "〈U〉提携,協力  / 〈U〉組合契約;〈C〉合名会社",
    "example_sentence": "The two companies formed a partnership to expand their market reach.",
    "translated_sentence": "2つの会社は市場拡大のために提携を結んだ。"
  },
  {
    "entry": "passenger",
    "meaning_ja": "〈C〉乗客, 旅客 / 《英話》足手まといな人",
    "example_sentence": "The passenger boarded the plane.",
    "translated_sentence": "乗客が飛行機に乗りました。"
  },
  {
    "entry": "percentage",
    "meaning_ja": "百分率,割合  / 《複数形で》見込み,確率",
    "example_sentence": "The percentage of students who passed the exam is 80%.",
    "translated_sentence": "試験に合格した学生の割合は80％です。"
  },
  {
    "entry": "perfectly",
    "meaning_ja": "完全に,申し分なく  / 全く,すっかり",
    "example_sentence": "She perfectly executed the dance routine.",
    "translated_sentence": "彼女は完全にダンスのルーティンを実行しました。"
  },
  {
    "entry": "lip",
    "meaning_ja": "〈C〉くちびる,口もと  / 《複数形で》(発音器官としての)くちびる,口  / 〈U〉《俗》生意気な言葉  / 〈C〉(容器などの)口,へり,縁;(峡谷・火山などの)口  / 〈C〉(植物の)唇弁(しんべん)",
    "example_sentence": "She applied a coat of lipstick to her lips.",
    "translated_sentence": "彼女はくちびるに口紅を塗った。"
  },
  {
    "entry": "poet",
    "meaning_ja": "詩人,歌人  / 詩的才能のある人",
    "example_sentence": "The poet wrote beautiful verses that touched the hearts of many.",
    "translated_sentence": "その詩人は多くの人々の心に触れる美しい詩を書いた。"
  },
  {
    "entry": "winner",
    "meaning_ja": "勝利者,優勝者;(競馬の)勝ち馬  / 受賞者  / うまくいくもの(こと),期待できるもの(こと)",
    "example_sentence": "She was declared the winner of the competition.",
    "translated_sentence": "彼女は競技の勝利者と宣言されました。"
  },
  {
    "entry": "monthly",
    "meaning_ja": "月1回の,毎月の,月ぎめの  / 1か月間の,1か月続く",
    "example_sentence": "I have a monthly meeting with my team.",
    "translated_sentence": "私はチームと月に１回ミーティングを行っています。"
  },
  {
    "entry": "nothing",
    "meaning_ja": "何も…ない(not anything ,no thing)  / 少しも…でない  / 〈C〉《単数形で》重用でないこと(人),取るに足りない人  / 〈U〉ゼロ",
    "example_sentence": "There's nothing I can do.",
    "translated_sentence": "私にできることは何もない。"
  },
  {
    "entry": "once",
    "meaning_ja": "(ただ)1度,1回  / かつて,以前  / 《否定文で》一度も(…しない);《条件節で》いったん…すれば  / 1度,1回",
    "example_sentence": "Once I got on the train, I felt relieved.",
    "translated_sentence": "電車に乗ったら、安心しました。"
  },
  {
    "entry": "pick",
    "meaning_ja": "〈他〉を選ぶ / を摘む,もぎ取る / つまみとる〈自〉つつく / 精選する",
    "example_sentence": "He picked up the pen from the desk.",
    "translated_sentence": "彼は机からペンを拾い上げた。"
  },
  {
    "entry": "service",
    "meaning_ja": "〈U〉〈C〉奉仕 / 公共事業 / 〈U〉職員業務 / サービス / 役立つこと",
    "example_sentence": "The customer service at this restaurant is excellent.",
    "translated_sentence": "このレストランのサービスは素晴らしいです。"
  },
  {
    "entry": "powerful",
    "meaning_ja": "強力な / 効果的な / 有力な",
    "example_sentence": "She has a powerful voice.",
    "translated_sentence": "彼女は力強い声を持っています。"
  },
  {
    "entry": "release",
    "meaning_ja": "解放する / 公開する,発表する",
    "example_sentence": "The company plans to release a new product next month.",
    "translated_sentence": "会社は来月新製品を発売する予定です。"
  },
  {
    "entry": "repeat",
    "meaning_ja": "〈自分がすでに一度言ったこと)‘を'繰り返して言う  / 〈他人の言ったこと〉‘を'おうむ返しに言う;…‘を'他の人に繰り返して言う  / …‘を'暗記して言う,暗唱する  / …‘を'繰り返して行う(do again)  / (食べたあとで)〈食物の〉味が残る  / 〈小数が〉循環する",
    "example_sentence": "I will repeat the same question again.",
    "translated_sentence": "同じ質問をもう一度繰り返します。"
  },
  {
    "entry": "score",
    "meaning_ja": "(ゲーム・競技の)スコア,得点記録  / (ゲーム・競技の)得点  / (試験の)点数,評点  / 《おもに文》20[の単位]  / 《複数形で》多数(の…)《+of+名》  / 《まれ》勘定,借金  / 《単数形で》理由,根拠,原因  / (またscore mark)刻み目,線,印  / 総譜,楽譜",
    "example_sentence": "The final score was calculated based on the average of all the individual scores.",
    "translated_sentence": "最終得点は、個々の得点の平均に基づいて計算されました。"
  },
  {
    "entry": "pregnancy",
    "meaning_ja": "〈U〉〈C〉妊娠の状態(期間)  / 〈U〉《文》含蓄",
    "example_sentence": "She is experiencing a healthy pregnancy.",
    "translated_sentence": "彼女は健康な妊娠を経験しています。"
  },
  {
    "entry": "season",
    "meaning_ja": "季,季節(春夏秋冬の4季節のそれぞれ)  / (一年のうちの,ある気候の)時季,時節  / (果物などの)出盛り,(…の)盛んな時期  / (一般に)時節,時期 / 《…に》ふさわしい時,《…の》好期《for ...》",
    "example_sentence": "I love the autumn season.",
    "translated_sentence": "私は秋の季節が大好きです。"
  },
  {
    "entry": "seed",
    "meaning_ja": "〈U〉〈C〉種,種子  / 〈C〉《複数形で》(物事・事件などの)原因,根源,種  / 〈U〉(聖書で)子供たち,子孫  / 〈土地〉‘に'種をまく,まく;(…を)…‘に'まく《+名+with+名》  / 〈果物など〉‘の'種を除く  / 〈チーム・競技者など〉‘を'シードする  / (人工雨を降らすため)〈雲〉‘に'ドライアイス(その他の化学薬品)を散布する  / 〈植物が〉種(実)を生ずる;種(実)を落とす",
    "example_sentence": "She planted the seed in the garden.",
    "translated_sentence": "彼女は庭に種を植えました。"
  },
  {
    "entry": "printer",
    "meaning_ja": "印刷する人(機械);印刷屋  / (コンピューターの)文字打ち出し機　プリンター",
    "example_sentence": "I need to buy a new printer for my office.",
    "translated_sentence": "オフィス用に新しいプリンターを買わなければなりません。"
  },
  {
    "entry": "producer",
    "meaning_ja": "生産者;産出地  / (劇・映画などの)製作者,プロデューサー",
    "example_sentence": "The producer is responsible for overseeing the manufacturing process.",
    "translated_sentence": "生産者は製造プロセスの監督を担当しています。"
  },
  {
    "entry": "snap",
    "meaning_ja": "パチン(ポキン,カチッ,ピシッ)と音をたてる / 〈木の枝などが〉ポキッと折れる,〈糸などが〉プツンと切れる / 〈戸・ふた・カギなどが〉パチン(カチッなど)と音をたてて(…の状態に)なる《+形〈補〉》 / (…に)ぱくっとかみつく《+at+名》 / …‘を'パチン(ピシッ)と音をさせる / …‘を'ポキッと折る,プツンと切る;…‘を'パチッと締める / 〈命令・応答など〉‘を'ピシッと言う《+out+名,+名+out》 / 《話》〈スナップ写真〉‘を'撮る",
    "example_sentence": "The pup snapped at my hand.",
    "translated_sentence": "小犬は私の手にかみついた。"
  },
  {
    "entry": "promote",
    "meaning_ja": "…‘を'助長する,促進する,増進する  / (…に)…‘を'昇進させる,進級させる《+名+to+名》  / 〈議案など〉‘を'通過するように努力する  / 〈会社・事業〉‘を'発起する;〈興業〉‘を'主催する  / 〈商品など〉‘の'販売促進をする",
    "example_sentence": "Social media can promote the spread of information.",
    "translated_sentence": "ソーシャルメディアは情報の拡散を助長することができます。"
  },
  {
    "entry": "spirit",
    "meaning_ja": "〈U〉精神,心  / 〈C〉(超自然の)霊魂,霊;幽霊,妖精  / 〈C〉《形容詞を伴って》(ある気資・性格をもった)人  / 〈U〉元気,活気  / 〈U〉《時にa ~》気立て,気質;意気,気概  / 《複数形で》気分,きげん  / 〈U〉(団体などに対する)忠誠心,献心  / 〈C〉(全体に流れる)傾向,風潮  / 〈U〉《the ~》(法などの)精神  / 《複数形で》アルコール;強い酒",
    "example_sentence": "She has a strong spirit.",
    "translated_sentence": "彼女は強い精神を持っています。"
  },
  {
    "entry": "convert",
    "meaning_ja": "〈他〉〖~ A into [to] B〗AをBに変える,転換する〈自〉変わる,転換する",
    "example_sentence": "I need to convert the file to a different format.",
    "translated_sentence": "ファイルを別の形式に変換する必要があります。"
  },
  {
    "entry": "warm",
    "meaning_ja": "暖かい,思いやりのある / 興奮した / 暖色の / 生々しい",
    "example_sentence": "The warm sun was shining through the window.",
    "translated_sentence": "太陽が窓を通して暖かく輝いていた。"
  },
  {
    "entry": "part",
    "meaning_ja": "〈C〉(全体を構成する) 部分 / 〈U〉《しばしばa ...》《…の》一部, 一部分《of ...》 / 〈C〉(仕事などの)役目",
    "example_sentence": "I need you to be a part of this project.",
    "translated_sentence": "このプロジェクトの一部として参加してもらいたい。"
  },
  {
    "entry": "childhood",
    "meaning_ja": "幼時,子供時代",
    "example_sentence": "I have many fond memories from my childhood.",
    "translated_sentence": "私には子供の頃の楽しい思い出がたくさんあります。"
  },
  {
    "entry": "publication",
    "meaning_ja": "〈U〉(書籍・雑誌などの)出版,発行《+of+名》  / 〈C〉出版物(書籍,雑誌,新聞など)  / 〈U〉(…の)公表,発表《+of+名》",
    "example_sentence": "The publication of her new book was eagerly anticipated by her fans.",
    "translated_sentence": "彼女の新しい本の出版は、彼女のファンに熱望されていました。"
  },
  {
    "entry": "quietly",
    "meaning_ja": "静かに  / 穏やかに  / じみに",
    "example_sentence": "She sat quietly in the corner, reading her book.",
    "translated_sentence": "彼女は静かに角に座って、本を読んでいた。"
  },
  {
    "entry": "competitor",
    "meaning_ja": "競争者,競争相手,競合他社",
    "example_sentence": "She is a tough competitor in the business world.",
    "translated_sentence": "彼女はビジネス界で厳しい競争相手です。"
  },
  {
    "entry": "completely",
    "meaning_ja": "完全に,全く,十分に",
    "example_sentence": "The answer is completely wrong.",
    "translated_sentence": "その答えは完全に間違っている。"
  },
  {
    "entry": "symptom",
    "meaning_ja": "〈C〉(病気の) 症状, 兆候 / 《...の》きざし, 印《of ...》",
    "example_sentence": "He experienced a symptom of the disease.",
    "translated_sentence": "彼はその病気の症状を経験した。"
  },
  {
    "entry": "relative",
    "meaning_ja": "比較上の,(他と)比べての / 相対的で / 関係のある /対応した",
    "example_sentence": "Supply is relative to demand.",
    "translated_sentence": "供給は需要に比例する。"
  },
  {
    "entry": "tape",
    "meaning_ja": "〈U〉(細長い紙・布などの荷造り用)テープ,ひも  / 〈C〉(決勝線用の)テープ  / =tape measure  / 〈C〉〈U〉録音用テープ  / =tape recording  / =tape measure",
    "example_sentence": "I used tape to wrap the gift.",
    "translated_sentence": "私は贈り物を包むためにテープを使いました。"
  },
  {
    "entry": "resist",
    "meaning_ja": "《通例否定文で》…‘を'こらうる,がまんする  / …‘に'抵抗する,反抗する  / …‘の'作用に耐える,‘に'影響されない,抵抗する,耐える",
    "example_sentence": "She tried to resist the temptation to eat the chocolate cake.",
    "translated_sentence": "彼女はチョコレートケーキを食べる誘惑に抵抗しようとした。"
  },
  {
    "entry": "reveal",
    "meaning_ja": "〈秘密・事実など〉を明らかにする, を暴く / 〈隠されていた物〉を現す, を見せる",
    "example_sentence": "The detective will reveal the truth at the end of the movie.",
    "translated_sentence": "探偵は映画の最後に真実を明らかにするでしょう。"
  },
  {
    "entry": "risk",
    "meaning_ja": "危険;危害(損害)を受ける可能性《+of+名(doing)》",
    "example_sentence": "Investing in stocks carries a certain level of risk.",
    "translated_sentence": "株式投資には一定のリスクが伴います。"
  },
  {
    "entry": "yellow",
    "meaning_ja": "黄色の / 皮膚の黄色い / 《俗》おく病な(cowardly) / (新聞が)センセーショナルな,扇情的な",
    "example_sentence": "The sunflower is a beautiful yellow flower.",
    "translated_sentence": "ひまわりは美しい黄色の花です。"
  },
  {
    "entry": "sad",
    "meaning_ja": "(人が)悲しい  / (表情などが)悲しそうな;(物事が)悲しむ  / べき,残念な  / 《名試の前にのみ用いて》ひどい,みじめな,貧習な  / (色が)くすんだ",
    "example_sentence": "The girl was sad when her best friend moved away.",
    "translated_sentence": "彼女の親友が引っ越してしまった時、女の子は悲しんでいた。"
  },
  {
    "entry": "December",
    "meaning_ja": "12月({略}Dec.)",
    "example_sentence": "I'm looking forward to December.",
    "translated_sentence": "12月が楽しみです。"
  },
  {
    "entry": "despite",
    "meaning_ja": "〜にもかかわらず",
    "example_sentence": "Despite the rain, we still went for a walk.",
    "translated_sentence": "雨にもかかわらず、私たちは散歩に行きました。"
  },
  {
    "entry": "physical",
    "meaning_ja": "身体の,肉体の(bodily)  / 《名詞の前にのみ用いて》物質の(material);自然[界]の  / 《名詞の前にのみ用いて》物理学の,物理的な;自然科学の  / 身体検査(physical examination)",
    "example_sentence": "Regular exercise is important for maintaining good physical health.",
    "translated_sentence": "定期的な運動は良い身体の健康を維持するために重要です。"
  },
  {
    "entry": "population",
    "meaning_ja": "〈U〉〈C〉人口,住民の数  / 《the~》《集合的に》(一定地域の)全体民  / 《the~》(特定階層の)人々,連中  / 〈U〉〈C〉(一定の区域内にいる)動植物の個体数",
    "example_sentence": "The population of the city has been steadily increasing over the years.",
    "translated_sentence": "その都市の人口は年々着実に増加しています。"
  },
  {
    "entry": "potato",
    "meaning_ja": "〈C〉〈U〉ジャガイモ  / (またpotato plant)〈C〉ジャガイモをつける植物  / 〈C〉〈U〉《おもに米》サツマイモ(sweet potato)",
    "example_sentence": "I made mashed potatoes for dinner.",
    "translated_sentence": "夕食にマッシュポテトを作りました。"
  },
  {
    "entry": "hot",
    "meaning_ja": "熱い, 暑い /  (味が)辛い,ひりひりする  / (気性などの)激しい / (気分・感情などの)高ぶった, 興奮した([[excited)]]) / (状態や動きが)激しい([[violent]])   / (ニュースなどが)新しい, 発表されたばかりの / 《話》(商品などが)人気のある,売れる",
    "example_sentence": "The coffee is too hot to drink.",
    "translated_sentence": "コーヒーは飲むには熱すぎます。"
  },
  {
    "entry": "sexual",
    "meaning_ja": "性の,男女(雌雄)の  / 有性生殖の",
    "example_sentence": "Sexual education is important for young adults.",
    "translated_sentence": "若者にとって性教育は重要です。"
  },
  {
    "entry": "imagination",
    "meaning_ja": "〈U〉〈C〉想像,空想  / 〈U〉《話》想像の産物,空想的な考え,気の迷い  / 〈U〉創作力,創意",
    "example_sentence": "She has a vivid imagination.",
    "translated_sentence": "彼女は豊かな想像力を持っています。"
  },
  {
    "entry": "immediate",
    "meaning_ja": "即座の,即時の, すぐの, 早急な / 当面の, 当座の / (時間・空間的に)すぐ近くの  / 直接の,じかの([[direct]])",
    "example_sentence": "I need your immediate response to this matter.",
    "translated_sentence": "この件については早急な対応が必要です。"
  },
  {
    "entry": "sheep",
    "meaning_ja": "羊  / 気の弱い人,人に引きずられやすい人",
    "example_sentence": "The farmer has a lot of sheep.",
    "translated_sentence": "農夫はたくさんの羊を持っている。"
  },
  {
    "entry": "shirt",
    "meaning_ja": "(えり付きの男物)シャツ,ワイシャツ  / 《米》(下着の)シャツ,はだ着(undershirt)",
    "example_sentence": "I bought a new shirt yesterday.",
    "translated_sentence": "昨日新しいシャツを買った。"
  },
  {
    "entry": "dozen",
    "meaning_ja": "ダースの,12個の(《略》doz.,dz.)",
    "example_sentence": "I bought a dozen eggs at the grocery store.",
    "translated_sentence": "私はスーパーマーケットで卵を１ダース買いました。"
  },
  {
    "entry": "similar",
    "meaning_ja": "(大体において) 似ている / (図形が)相似の",
    "example_sentence": "The two paintings have a similar style.",
    "translated_sentence": "2つの絵は似たスタイルを持っています。"
  },
  {
    "entry": "skill",
    "meaning_ja": "〈U〉(…の)熟練,技量,腕《+in+名(doing)》  / 〈C〉特殊技術,特殊技能",
    "example_sentence": "He showed his skill in playing the piano.",
    "translated_sentence": "彼はピアノ演奏の腕前を披露した。"
  },
  {
    "entry": "no",
    "meaning_ja": "《名詞の前に置いて》一つも(一人も,少しも, 全く)…ない / 《補語につけて》決して…でない, 決して...ならない / 《省略文で》…なし;…お断り / 《話》少ししか(あまり)…ない",
    "example_sentence": "There is no way I can finish this task on time.",
    "translated_sentence": "私にはこの仕事を時間内に終わらせる方法は一つもありません。"
  },
  {
    "entry": "park",
    "meaning_ja": "(町の中の)公園,庭園  / 自然公園  / 《米》(観覧席などで囲まれた)競技場;《英》サッカー場  / 《英》(貴族や大地主の邸宅の)広大な敷地,大庭園  / =parking lot  /",
    "example_sentence": "Let's go to the park.",
    "translated_sentence": "公園に行こう。"
  },
  {
    "entry": "sky",
    "meaning_ja": "空,上空  / 《しばしば複数形で》空模様,天候,気候  / 《しばしば複数形で》天国,天  / 〈ボール〉‘を'高く打ち上げる",
    "example_sentence": "The sky was beautiful and blue.",
    "translated_sentence": "空は美しく青く見えた。"
  },
  {
    "entry": "educate",
    "meaning_ja": "を教育する, を教え込む",
    "example_sentence": "Parents have a responsibility to educate their children.",
    "translated_sentence": "親は子供を教育する責任があります。"
  },
  {
    "entry": "slightly",
    "meaning_ja": "わずかに,少し  / (人・体格などが)ほっそりと;(建物などが)もろく",
    "example_sentence": "I am slightly tired.",
    "translated_sentence": "わずかに疲れています。"
  },
  {
    "entry": "slip",
    "meaning_ja": "〈C〉(木・紙の細長い) 小片, 伝票 / (継ぎ木・さし木来の) 切り枝 / 《a ( ) of …》きゃしゃ《な…》",
    "example_sentence": "Please make sure to keep your sales slip for future reference.",
    "translated_sentence": "将来の参照のために、売上伝票を保管してください。"
  },
  {
    "entry": "elsewhere",
    "meaning_ja": "どこかよそに,ほかの所で(somewhere else)",
    "example_sentence": "I want to go elsewhere for my vacation.",
    "translated_sentence": "私は休暇にどこか他の場所に行きたいです。"
  },
  {
    "entry": "employer",
    "meaning_ja": "雇い主,雇用者",
    "example_sentence": "My employer is very supportive and understanding.",
    "translated_sentence": "私の雇い主はとてもサポートしてくれるし、理解もあります。"
  },
  {
    "entry": "entirely",
    "meaning_ja": "全く / 完全に / 全部で",
    "example_sentence": "She was entirely focused on her work.",
    "translated_sentence": "彼女は完全に仕事に集中していました。"
  },
  {
    "entry": "equally",
    "meaning_ja": "平等に,同等に;均一に,均等に  / 《文を修飾して》同時に",
    "example_sentence": "All employees are treated equally regardless of their position.",
    "translated_sentence": "全ての従業員は、彼らの立場に関係なく平等に扱われます。"
  },
  {
    "entry": "specialist",
    "meaning_ja": "専門家  / 専門医",
    "example_sentence": "I consulted a specialist about my health issues.",
    "translated_sentence": "私は健康問題について専門家に相談しました。"
  },
  {
    "entry": "speech",
    "meaning_ja": "〈U〉話す力,話す能力・〈U〉話すこと,言葉・〈C〉演説,話,スピーチ・〈U〉(人の)話し方・〈C〉〈U〉(特定の)言語,方言,なまり・〈C〉(役者の)のせりふ・〈U〉話法",
    "example_sentence": "The Prime Minister gave a powerful speech.",
    "translated_sentence": "首相は力強い演説を行ないました。"
  },
  {
    "entry": "stair",
    "meaning_ja": "〈C〉(階段の一つの)段  / 《複数形で》階段",
    "example_sentence": "I tripped and fell down the stair.",
    "translated_sentence": "私はつまずいて階段から転げ落ちた。"
  },
  {
    "entry": "February",
    "meaning_ja": "2月(《略》Feb.)",
    "example_sentence": "The month of February is the second month of the year.",
    "translated_sentence": "2月は1年の第2の月です。"
  },
  {
    "entry": "stimulate",
    "meaning_ja": "を刺激する / を励ます,を元気づける",
    "example_sentence": "Listening to music can stimulate creativity.",
    "translated_sentence": "音楽を聴くことは創造性を刺激することができます。"
  },
  {
    "entry": "strategy",
    "meaning_ja": "〈C〉戦略,戦術  / 〈C〉(商売や政治上の)巧みな戦略;(ある目的に達するための)計画,方法 / 〈U〉兵法,用兵学",
    "example_sentence": "Having a clear strategy is essential for success.",
    "translated_sentence": "成功するためには明確な戦略が不可欠です。"
  },
  {
    "entry": "strongly",
    "meaning_ja": "強く,激しく  / 熱心に",
    "example_sentence": "She strongly believes in the power of education.",
    "translated_sentence": "彼女は教育の力を強く信じています。"
  },
  {
    "entry": "structural",
    "meaning_ja": "構造の / 構成の / 組織の / 建築の",
    "example_sentence": "The structural integrity of the building was compromised after the earthquake.",
    "translated_sentence": "地震後、建物の構造的な完全性が損なわれました。"
  },
  {
    "entry": "student",
    "meaning_ja": "学生,生徒  / (…の)研究者,学者《+of+名》",
    "example_sentence": "The student studies English every day.",
    "translated_sentence": "毎日英語を勉強する学生です。"
  },
  {
    "entry": "when",
    "meaning_ja": "いつ / (…する,…した)ところの / するとその時に /",
    "example_sentence": "When I wake up, I always drink a cup of coffee.",
    "translated_sentence": "私が目を覚ますと、いつもコーヒーを一杯飲みます。"
  },
  {
    "entry": "tale",
    "meaning_ja": "(事実・伝説・架空の)話,物語  / 作り話,うそ  / 《複数形で》告げ口,中傷",
    "example_sentence": "She told him a tale about a magical kingdom.",
    "translated_sentence": "彼女は彼に魔法の王国についての話をした。"
  },
  {
    "entry": "gene",
    "meaning_ja": "遺伝子",
    "example_sentence": "Genes are passed down from ancestors to descendants.",
    "translated_sentence": "遺伝子は祖先から子孫へ受け継がれます。"
  },
  {
    "entry": "taxi",
    "meaning_ja": "タクシー(taxicabの略)",
    "example_sentence": "I took a taxi to the airport.",
    "translated_sentence": "私は空港へタクシーで行きました。"
  },
  {
    "entry": "therapy",
    "meaning_ja": "療法",
    "example_sentence": "She is undergoing therapy to help manage her anxiety.",
    "translated_sentence": "彼女は不安を管理するために療法を受けています。"
  },
  {
    "entry": "theater",
    "meaning_ja": "〈C〉劇場, 映画館 / 《the》劇, 演劇 / (事件・活動の)現場,舞台",
    "example_sentence": "I love going to the theater to watch plays.",
    "translated_sentence": "私は劇場に行って演劇を観るのが大好きです。"
  },
  {
    "entry": "thus",
    "meaning_ja": "このように, かくかくして / したがって, だから",
    "example_sentence": "She studied hard and thus passed the exam.",
    "translated_sentence": "彼女は一生懸命勉強したので、結果的に試験に合格した。"
  },
  {
    "entry": "tourist",
    "meaning_ja": "[観光]旅行者,観光客  / 観光旅行[用]の",
    "example_sentence": "The tourist took a lot of photos during their trip.",
    "translated_sentence": "旅行者は旅行中にたくさんの写真を撮りました。"
  },
  {
    "entry": "toy",
    "meaning_ja": "おもちゃ,玩具  / 小さくてちゃちな物  / 《名詞の前にのみ用いて》  / おもちゃの,愛玩用の  /",
    "example_sentence": "My daughter loves to play with her new toy.",
    "translated_sentence": "娘は新しいおもちゃで遊ぶのが大好きです。"
  },
  {
    "entry": "historian",
    "meaning_ja": "〈C〉歴史家, 歴史学者",
    "example_sentence": "The historian conducted extensive research on ancient civilizations.",
    "translated_sentence": "この歴史家は、古代文明について幅広い研究を行った。"
  },
  {
    "entry": "host",
    "meaning_ja": "〈C〉《...の》大群,大勢《of》",
    "example_sentence": "The museum exhibition attracted a host of art enthusiasts from various countries.",
    "translated_sentence": "その美術館の展示会は、さまざまな国から多くの美術愛好家を引き付けました。"
  },
  {
    "entry": "university",
    "meaning_ja": "〈C〉[総合]大学  / 〈U〉《the university》《集合的に》大学生,大学当局",
    "example_sentence": "I am studying at a university.",
    "translated_sentence": "私は大学で勉強しています。"
  },
  {
    "entry": "web",
    "meaning_ja": "〈C〉(インターネットの)ウェブ /  (クモの) 巣 /  (クモの巣のような)網状組織 / (アヒルなどの)水かき",
    "example_sentence": "I found a great website for learning web development.",
    "translated_sentence": "私はウェブ開発を学ぶための素晴らしいウェブサイトを見つけました。"
  },
  {
    "entry": "investor",
    "meaning_ja": "投資者",
    "example_sentence": "The investor made a significant profit from their investments.",
    "translated_sentence": "投資家は投資から大きな利益を得ました。"
  },
  {
    "entry": "weekend",
    "meaning_ja": "週末(通例金曜日の夕方から日曜日の夜まで);週末休暇  / 週末の  / 《状態・場所を表す副詞[句]を伴って》週末を過ごす;週末旅行をする",
    "example_sentence": "I'm looking forward to the weekend.",
    "translated_sentence": "週末が楽しみです。"
  },
  {
    "entry": "weird",
    "meaning_ja": "変な,妙な / 起自然的な,不思議な,気味の悪い",
    "example_sentence": "There was something weird about the incident.",
    "translated_sentence": "その事件には何となく気味の悪いところがあった。"
  },
  {
    "entry": "January",
    "meaning_ja": "1月(《略》Ja.,Jan.)",
    "example_sentence": "I'm looking forward to the warm days of January.",
    "translated_sentence": "1月の暖かい日を楽しみにしています。"
  },
  {
    "entry": "wife",
    "meaning_ja": "妻,女房,奥さん,夫人  / 《古》(特に結婚した)女",
    "example_sentence": "My wife is a great cook.",
    "translated_sentence": "私の妻は素晴らしい料理人です。"
  },
  {
    "entry": "July",
    "meaning_ja": "7月(《略》Jul.,Jy.)",
    "example_sentence": "This July marks the fifth anniversary of our company.",
    "translated_sentence": "今年の7月で当社が5周年を迎える。"
  },
  {
    "entry": "June",
    "meaning_ja": "6月(《略》Je.,Jun.)",
    "example_sentence": "The summer heat will start in June.",
    "translated_sentence": "夏の暑さは６月から始まる。"
  },
  {
    "entry": "laboratory",
    "meaning_ja": "実験室,研究室(所),試験室(所);(薬品などの)製造所",
    "example_sentence": "I spent the whole day working in the laboratory.",
    "translated_sentence": "私は一日中実験室で働いていました。"
  },
  {
    "entry": "lawyer",
    "meaning_ja": "〈C〉弁護士 / 法律学者",
    "example_sentence": "He hired a lawyer to help with his legal case.",
    "translated_sentence": "彼は法的な問題を手伝ってもらうために弁護士を雇った。"
  },
  {
    "entry": "forty",
    "meaning_ja": "〈C〉(数の)40;40の記号(40,XLなど)  / 〈U〉40分;40歳  / 〈U〉《複数扱い》40人,40個  / 《the forties》(世紀の)40年代;《one's forties》(年齢の)40代  / 40の,40人の,40個の  / 《補語にのみ用いて》40歳の(で)",
    "example_sentence": "I have forty apples.",
    "translated_sentence": "私はりんごを40個持っています。"
  },
  {
    "entry": "member",
    "meaning_ja": "(集団の)一員,会員,メンバー《+of+名》  / 《またM-》国会議員  / (数式の)項,辺  / 《文》身体の一部;(特に)手,足  / 《遠回しに》男根",
    "example_sentence": "She is a valuable member of our team.",
    "translated_sentence": "彼女は私たちのチームの貴重な一員です。"
  },
  {
    "entry": "officer",
    "meaning_ja": "公務員,役人(会社などの)役員,幹部  / 将校,士官  / (商船の)高級船員;船長(master)  / 警官,巡査(policeman)",
    "example_sentence": "The police officer arrested the suspect.",
    "translated_sentence": "警察官は容疑者を逮捕した。"
  },
  {
    "entry": "oil",
    "meaning_ja": "〈U〉〈C〉油;油状物  / =petroleum  / 《複数形で》=oil paint  / =oil painting  / …‘に'油を塗る,油を引く,油を差す",
    "example_sentence": "I need to change the oil in my car.",
    "translated_sentence": "私は車のオイルを交換する必要があります。"
  },
  {
    "entry": "outside",
    "meaning_ja": "外側に,外へ(に,で)  / …を外に(で,の)",
    "example_sentence": "It is raining outside.",
    "translated_sentence": "外は雨が降っています。"
  },
  {
    "entry": "constantly",
    "meaning_ja": "絶えず , しきりに / (規則的に)しばしば,たびたび",
    "example_sentence": "He is constantly checking his phone.",
    "translated_sentence": "彼は常に携帯電話をチェックしています。"
  },
  {
    "entry": "player",
    "meaning_ja": "競技者,選手  / 俳優,役者(actor)  / 演奏者  / 演奏装置,レコードプレーヤー",
    "example_sentence": "The football team has an excellent player.",
    "translated_sentence": "サッカーチームには優秀な選手がいます。"
  },
  {
    "entry": "reader",
    "meaning_ja": "読者 / 読書家  / (学校用の)読本,リーダー  / (特に英国の大学の)講師",
    "example_sentence": "The reader should be aware of the consequences before making a decision.",
    "translated_sentence": "読者は決断する前にその結果について意識しておくべきである。"
  },
  {
    "entry": "same",
    "meaning_ja": "《the ~》同じ, 《...と》同一の《as節, that節, wh-節》",
    "example_sentence": "We have the same car.",
    "translated_sentence": "私たちは同じ車を持っています。"
  },
  {
    "entry": "silly",
    "meaning_ja": "(人・人の行動が) 愚かな, 思慮のない,ばかなの / 《話》(殴られたりして)目を回した,気絶した / 【名】 おばかさん",
    "example_sentence": "He made a silly mistake.",
    "translated_sentence": "彼は愚かな間違いをした。"
  },
  {
    "entry": "get",
    "meaning_ja": "〈他〉を受け取る / を手に入れる / を取ってくる / 〈人〉にさせる / をする / 〈自〉(ある場所に) 着く / (ある状態に)なる",
    "example_sentence": "Can you get me a glass of water?",
    "translated_sentence": "お水を１杯取ってきてくれますか？"
  },
  {
    "entry": "hook",
    "meaning_ja": "〈C〉掛けくぎ, 留め金",
    "example_sentence": "I used a hook to hang my coat on the wall.",
    "translated_sentence": "私はフックを使ってコートを壁に掛けました。"
  },
  {
    "entry": "system",
    "meaning_ja": "〈C〉(関連した部分から成る)体系,系統,組織[網],装置  / 〈C〉(教育・政治などの)制度,機構;《the~》体制  / 〈C〉(思想・学問などの)体系,学説  / 〈C〉(…の)方法,方式,やり方《+of doing》  / 〈U〉正しい方針(筋道,順序)  / 〈U〉《the~》(身体の)組織,系統  / 〈U〉《the~,one's~》身体,全身",
    "example_sentence": "The solar system consists of the sun, planets, and other celestial bodies.",
    "translated_sentence": "太陽系は太陽、惑星、その他の天体から成り立っています。"
  },
  {
    "entry": "teach",
    "meaning_ja": "〈物事・学科など〉‘を'教える,〈人〉‘に'教える  / (…で)教師をする,教える《+at+名》",
    "example_sentence": "I teach English at a school.",
    "translated_sentence": "私は学校で英語を教えています。"
  },
  {
    "entry": "themselves",
    "meaning_ja": "《強意用法》《[代]名詞と同格に用いて》彼ら自身,彼女ら自身,それら自身  / 《再帰用法》《動詞・前置詞の目的語》彼ら自身を(に),彼女ら自身を(に),それら自身を(に)",
    "example_sentence": "They built the house themselves.",
    "translated_sentence": "彼ら自身がその家を建てた。"
  },
  {
    "entry": "tonight",
    "meaning_ja": "今晩,今夜  / 今夜[は]",
    "example_sentence": "The weatherman predicts snow for tonight.",
    "translated_sentence": "天気予報では今夜は雪が降ると予報している。"
  },
  {
    "entry": "tomorrow",
    "meaning_ja": "明日に, 明日は",
    "example_sentence": "I will meet you tomorrow.",
    "translated_sentence": "明日、あなたに会います。"
  },
  {
    "entry": "motivation",
    "meaning_ja": "動機を与えること,動機づけ",
    "example_sentence": "The pay was good, and that was their only motivation to participate in the study.",
    "translated_sentence": "報酬がよかった、それが彼らがその研究に参加した唯一の動機だった。"
  },
  {
    "entry": "November",
    "meaning_ja": "〈U/C〉11月, 《形容詞的に》11月の",
    "example_sentence": "November is the eleventh month of the year.",
    "translated_sentence": "11月は1年の11番目の月である。"
  },
  {
    "entry": "obviously",
    "meaning_ja": "当然ながら；明らかに",
    "example_sentence": "Obviously, she is the best candidate for the job.",
    "translated_sentence": "明らかに、彼女はその仕事の最適な候補者です。"
  },
  {
    "entry": "ability",
    "meaning_ja": "〈U〉能力, 力量 / 《複数形で》特殊な才能,優れた手腕",
    "example_sentence": "She has the ability to speak multiple languages.",
    "translated_sentence": "彼女は複数の言語を話す能力を持っています。"
  },
  {
    "entry": "abortion",
    "meaning_ja": "〈U/C〉流産, 妊娠中絶 / 〈U〉(計画などの)失敗 / 〈C〉(実現しなかった) 案,計画",
    "example_sentence": "She decided to have an abortion.",
    "translated_sentence": "彼女は中絶することを決めた。"
  },
  {
    "entry": "extent",
    "meaning_ja": "〈U〉《...の》 広がり,大きさ,長さ 《of ...》 / 《...の》 範囲, 限度,程度 《of ...》",
    "example_sentence": "The extent of the damage caused by the hurricane was catastrophic.",
    "translated_sentence": "ハリケーンによる被害の範囲は壊滅的でした。"
  },
  {
    "entry": "assure",
    "meaning_ja": "〈他〉〈人・自分〉に確信させる,を保証する / 〈事柄・地位など〉を確実にする / 《英》…に保険をかける",
    "example_sentence": "I assure you that everything will be alright.",
    "translated_sentence": "私はあなたに全てが大丈夫になることを保証します。"
  },
  {
    "entry": "random",
    "meaning_ja": "無作為の, 任意の / 手当たりしだいの, 行き当たりばったりの",
    "example_sentence": "I decided to take a random road trip.",
    "translated_sentence": "私は無作為にロードトリップをすることに決めました。"
  },
  {
    "entry": "flood",
    "meaning_ja": "をあふれさせる / 〈人・物が〉…に殺到する",
    "example_sentence": "The market was flooded with foreign goods.",
    "translated_sentence": "市場は外国製品であふれた。"
  },
  {
    "entry": "meat",
    "meaning_ja": "(食用の)動物の肉  / 《英古》《米文》(一般的に)食物(food)  / (課実などの)食用部分,果肉  / (議論・書物などの)最も重要な部分,主眼点,骨子《+of+名》",
    "example_sentence": "I like to eat meat.",
    "translated_sentence": "私は肉を食べるのが好きです。"
  },
  {
    "entry": "bike",
    "meaning_ja": "〈C〉《くだけて》自転車 / オートバイ",
    "example_sentence": "I bought a new bike.",
    "translated_sentence": "私は新しい自転車を買った。"
  },
  {
    "entry": "religion",
    "meaning_ja": "〈U〉宗教;信仰;信仰生活  / 〈C〉宗旨,宗派,…教  / 〈C〉信条,主義",
    "example_sentence": "Many people find comfort and guidance in their religion.",
    "translated_sentence": "多くの人々は宗教によって慰めと導きを見つけます。"
  },
  {
    "entry": "citizen",
    "meaning_ja": "〈C〉(法的義務を持ち,居住権などの公民権を得ている)国民,公民 / (特に居住権を得ている)市民,住民 / 《米》(軍人・警察管などに対して)文民,一般人",
    "example_sentence": "Every citizen has the right to vote.",
    "translated_sentence": "すべての市民は投票する権利を持っています。"
  },
  {
    "entry": "restaurant",
    "meaning_ja": "レストラン料理店,(大ホテル・劇場などの)食堂",
    "example_sentence": "We went to the restaurant for dinner.",
    "translated_sentence": "私たちは夕食のためにレストランへ行きました。"
  },
  {
    "entry": "evaluation",
    "meaning_ja": "〈U〉(物・行為などの)評価 / (物の)見積り",
    "example_sentence": "The evaluation of the project was positive.",
    "translated_sentence": "プロジェクトの評価は良かったです。"
  },
  {
    "entry": "expose",
    "meaning_ja": "《風雨・危険・攻撃などに》…をさらす《to ...》 / 〈秘密など〉を暴露する",
    "example_sentence": "The documentary will expose the truth about the corrupt government.",
    "translated_sentence": "そのドキュメンタリーは腐敗した政府の真実を暴露する予定です。"
  },
  {
    "entry": "filter",
    "meaning_ja": "〈C〉ろ過器 / (写真の)フィルター",
    "example_sentence": "I use a water filter to purify water.",
    "translated_sentence": "私は水を浄化するために浄水器を使っています。"
  },
  {
    "entry": "fine",
    "meaning_ja": "〈C〉罰金",
    "example_sentence": "I received a fine for parking in a no-parking zone.",
    "translated_sentence": "私は駐車禁止区域に駐車したために罰金を受けました。"
  },
  {
    "entry": "shareholder",
    "meaning_ja": "【名/C】株主",
    "example_sentence": "The shareholder meeting will be held next week.",
    "translated_sentence": "株主総会は来週開催されます。"
  },
  {
    "entry": "significantly",
    "meaning_ja": "著しく,かなり / 意味ありげに",
    "example_sentence": "She has significantly improved her piano skills.",
    "translated_sentence": "彼女はピアノのスキルを大幅に向上させました。"
  },
  {
    "entry": "solve",
    "meaning_ja": "〈問題など〉‘を'解く,解明する,解決する",
    "example_sentence": "He solved the puzzle in five minutes.",
    "translated_sentence": "彼は５分でパズルを解きました。"
  },
  {
    "entry": "funny",
    "meaning_ja": "おかしい, 笑える / 変な, 妙な, 怪しげな / 《話》 気分が悪い",
    "example_sentence": "He has a funny personality.",
    "translated_sentence": "彼は面白い性格をしています。"
  },
  {
    "entry": "unknown",
    "meaning_ja": "知られていない, 不明の / 未確認の, 未知の",
    "example_sentence": "The identity of the mysterious figure remains unknown.",
    "translated_sentence": "謎の人物の正体は知られていない。"
  },
  {
    "entry": "have",
    "meaning_ja": "《~ 過去分詞》《完了・結果》...した, ...してしまった / 《経験》...したことがある / 《継続》（ずっと）...している, ...してきた / 《will(shall) ~ 過去分詞》 《未来の完了・結果》...してしまっているだろう / 《未来の経験》...したことになる / 《未来の継続》...していることになる",
    "example_sentence": "I have finished my homework.",
    "translated_sentence": "私は終えました/宿題を"
  },
  {
    "entry": "imagine",
    "meaning_ja": "...を想像する / 《~ that ...》…と思う / 《... wh-節》…かどうかを推測する / 想像する,考える",
    "example_sentence": "I imagined a world where everyone was happy.",
    "translated_sentence": "私は全員が幸せな世界を想像した。"
  },
  {
    "entry": "immigrant",
    "meaning_ja": "〈C〉(外国からの) 移住者, 移民,入植者 / 帰化植物",
    "example_sentence": "She is an immigrant from Mexico.",
    "translated_sentence": "彼女はメキシコからの移民です。"
  },
  {
    "entry": "insight",
    "meaning_ja": "〈C〉洞察, 洞察力 / 《...を》見通す力《into ...》",
    "example_sentence": "She has a deep insight into human behavior.",
    "translated_sentence": "彼女は人間の行動に深い洞察を持っている。"
  },
  {
    "entry": "institutional",
    "meaning_ja": "制度の, 制度上の / 学会の, 協会の, 公共団体の",
    "example_sentence": "The new regulations have significantly impacted the institutional framework of our organization, leading to major structural changes.",
    "translated_sentence": "新しい規制は、私たちの組織の制度的枠組みに大きな影響を与え、大きな構造改革につながりました。"
  },
  {
    "entry": "laughter",
    "meaning_ja": "〈U〉笑い,笑い声",
    "example_sentence": "Her laughter filled the room.",
    "translated_sentence": "彼女の笑いが部屋に満ちた。"
  },
  {
    "entry": "lead",
    "meaning_ja": "〈U〉鉛 / 〈C〉鉛のおもり,測鉛 / 《複数形で》(ガラスをはめる)鉛の枠 / 〈U〉〈C〉黒鉛,鉛筆のしん / 〈U〉(鉛の)弾丸  / 〈U〉《the~》先頭",
    "example_sentence": "Exposure to lead-based paint can cause lead poisoning.",
    "translated_sentence": "鉛含有塗料にさらされると、鉛中毒を引き起こすことがあります。"
  },
  {
    "entry": "league",
    "meaning_ja": "〈C〉(国家・人々・組織などの) 連盟, 同盟 / 競技連盟,リーグ",
    "example_sentence": "She plays in the local soccer league.",
    "translated_sentence": "彼女は地元のサッカーリーグでプレーしています。"
  },
  {
    "entry": "lovely",
    "meaning_ja": "美しい, かわいらしい / 《話》すばらしい, 愉快な /",
    "example_sentence": "She was wearing a lovely dress.",
    "translated_sentence": "彼女は素敵なドレスを着ていた。"
  },
  {
    "entry": "mail",
    "meaning_ja": "〈U〉郵便 / (1回に配達または投函される) 郵便物",
    "example_sentence": "I received an email from my friend.",
    "translated_sentence": "友達からメールを受け取りました。"
  },
  {
    "entry": "match",
    "meaning_ja": "〈C〉試合, 競技, 勝負 / 《単数形で》《...に》匹敵する相手, 好敵手《for ...》 / 《単数形で》対の一方, 片われ, 生き写し / 《単数形で》《…と》よくつり合うもの《for ...》 / 《古》縁組,結婚;結婚相手",
    "example_sentence": "The soccer match was intense.",
    "translated_sentence": "サッカーの試合は激しかった。"
  },
  {
    "entry": "nearly",
    "meaning_ja": "ほとんど, だいたい / 危うく, すんでのところで / 密接に, 親密に",
    "example_sentence": "I nearly missed the bus.",
    "translated_sentence": "危うくバスに乗り遅れるところだった。"
  },
  {
    "entry": "newly",
    "meaning_ja": "最近, 近ごろ / 新たに / 再び",
    "example_sentence": "I just bought a newly released phone.",
    "translated_sentence": "私は最近発売された新しい携帯電話を買いました。"
  },
  {
    "entry": "pale",
    "meaning_ja": "(顔が)青白い, 青ざめた / (色が)薄い, 淡い",
    "example_sentence": "Her face turned pale when she heard the bad news.",
    "translated_sentence": "彼女は悪い知らせを聞いて顔が青白くなった。"
  },
  {
    "entry": "their",
    "meaning_ja": "彼らの, 彼女らの, それらの",
    "example_sentence": "Their house is very big.",
    "translated_sentence": "彼らの家はとても大きいです。"
  },
  {
    "entry": "topic",
    "meaning_ja": "(…の)話題;論題《+of+名》",
    "example_sentence": "We discussed a variety of topics yesterday.",
    "translated_sentence": "昨日は様々なトピックを話し合いました。"
  },
  {
    "entry": "rare",
    "meaning_ja": "まれな, 珍しい / (空気などが)薄い / 《話》すてきな",
    "example_sentence": "Finding a rare gemstone is like finding a needle in a haystack.",
    "translated_sentence": "珍しい宝石を見つけることは、ハヤから針を見つけるようなものだ。"
  },
  {
    "entry": "reduction",
    "meaning_ja": "〈U〉〈C〉《...を》 減らすこと,減少,縮小, 割引き 《in ...》 / 〈C〉減少した量, 割引額  / 縮図,縮写 / 〈U〉換算約分",
    "example_sentence": "The reduction in pollution levels has improved the air quality in the city.",
    "translated_sentence": "大気汚染レベルの低下により、都市の空気の質が改善されました。"
  },
  {
    "entry": "reform",
    "meaning_ja": "〈他〉〈政治・制度など〉を改善する,を改革する /   〈人〉を改心させる / 〈自〉改心する /",
    "example_sentence": "The government is planning to reform the education system.",
    "translated_sentence": "政府は教育制度を改革する予定です。"
  },
  {
    "entry": "usual",
    "meaning_ja": "いつもの, 通例の, おきまりの",
    "example_sentence": "She had a usual morning routine.",
    "translated_sentence": "彼女にはおきまりの朝の習慣があった。"
  },
  {
    "entry": "usually",
    "meaning_ja": "普通は,通例,通常,いつもは",
    "example_sentence": "He usually wakes up at 6am.",
    "translated_sentence": "彼は通常6時に起きます。"
  },
  {
    "entry": "virus",
    "meaning_ja": "ビールス,ウイルス,ろ過性病原体",
    "example_sentence": "The virus spread rapidly throughout the city.",
    "translated_sentence": "ウイルスは市内で急速に広がった。"
  },
  {
    "entry": "Wednesday",
    "meaning_ja": "水曜日(《略》Wed.)",
    "example_sentence": "I will have a meeting on Wednesday.",
    "translated_sentence": "私は水曜日に会議を持つ予定です。"
  },
  {
    "entry": "weekly",
    "meaning_ja": "毎週の,1週間(分)の;1週1度の・毎週;1週1回・週刊雑誌(新聞)",
    "example_sentence": "I have a weekly meeting with my team.",
    "translated_sentence": "私はチームと毎週ミーティングをしています。"
  },
  {
    "entry": "week",
    "meaning_ja": "〈C〉週,(ある日からの)1週間  / (また working week, work week)《a~,the~》(1週間の中の)就業日 , 平日(土日を除いた週) / 〈U〉《Wee》(特定の催しが行われる)週間",
    "example_sentence": "I'm looking forward to next week.",
    "translated_sentence": "来週を楽しみにしています。"
  },
  {
    "entry": "root",
    "meaning_ja": "〈C〉《しばしば複数形で》根 / 根元 / 《the~》根源 / 【動/他】〈植物〉を根づかせる /  《…に》…を定着させる《to, in ...》 / 【動/自】《...に》根を下ろす, 定着する《in, on, to ...》",
    "example_sentence": "The root of the tree goes deep into the ground.",
    "translated_sentence": "木の根は地面に深く伸びています。"
  },
  {
    "entry": "database",
    "meaning_ja": "〈C〉データベース",
    "example_sentence": "I need to update the database with the latest information.",
    "translated_sentence": "最新の情報でデータベースを更新する必要があります。"
  },
  {
    "entry": "effectively",
    "meaning_ja": "効果的に,有効に,事実上",
    "example_sentence": "His suggestion was, effectively, an order.",
    "translated_sentence": NaN
  },
  {
    "entry": "afraid",
    "meaning_ja": "《...を》恐れて,こわがって《of ...》  / 気づかって,心配して  / 気が進まない",
    "example_sentence": "I am afraid of spiders.",
    "translated_sentence": "私はクモを恐れています。"
  },
  {
    "entry": "almost",
    "meaning_ja": "ほとんど,たいてい([[nearly]])、もう少し",
    "example_sentence": "I have almost finished my homework.",
    "translated_sentence": "私は宿題をほとんど終えました。"
  },
  {
    "entry": "appear",
    "meaning_ja": "〈自〉姿を現す　/ 《...のように》見える, 思われる《to be ...》",
    "example_sentence": "The sun will appear at dawn.",
    "translated_sentence": "太陽は夜明けに現れます。"
  },
  {
    "entry": "artist",
    "meaning_ja": "芸術家;(特に)画家,彫刻家,音楽家  / (またartiste)芸能人(俳優・歌手・ダンサーなど)  / (その道の)達人,名人《+at(in)+名(doing)》",
    "example_sentence": "The artist spent many years perfecting his craft.",
    "translated_sentence": "その芸術家は自分の技術を磨くために何年も費やした。"
  },
  {
    "entry": "arm",
    "meaning_ja": "〈C〉(人・猿の)腕 / (四つ足の動物の前肢の)腕(手首から肩までの間）（手は[[hand]]) / 腕のような物, (特に)いすのひじ掛け, 樹の大枝 / 〈C〉《複数形で》武器, 兵器",
    "example_sentence": "He held his arm up high.",
    "translated_sentence": "彼は腕を高く掲げた。"
  },
  {
    "entry": "baby",
    "meaning_ja": "赤ん坊,赤ちゃん  / (家族・グループの中で)いちばん年少の人,最年少者  / 赤ん坊みたいな人  / (またbabe)《米俗》《特に若い女の子への呼びかけた用いて》かわいこちゃん  / 赤ん坊の[ような],赤ちゃん用の  / 《話》…'を'赤ちゃんのように扱う,甘やかす",
    "example_sentence": "The baby smiled at me.",
    "translated_sentence": "赤ちゃんが私に微笑んだ。"
  },
  {
    "entry": "who",
    "meaning_ja": "《疑問代名詞》だれが,どんな人が  / 《関係代名詞》(先行詞は「人」)  / 《制限用法》(…する,…した)ところの  / 《非制限用法》そしてその人は(を),それは…する(した)人だが  / 《古》《先行詞を含んで》…する人[はだれでも]",
    "example_sentence": "Who will go to the party?",
    "translated_sentence": "パーティに誰が行くのでしょうか？"
  },
  {
    "entry": "whose",
    "meaning_ja": "《疑問代名詞》だれのもの  / 《関係代名詞》《制限用法》その(…する,…した)ところの[人,物,事]  / 《関係代名詞》《非制限用法》そして(しかし)その人の…は(が,お,に)",
    "example_sentence": "Whose report did you read?",
    "translated_sentence": "あなたは誰の報告書を読んだのですか？"
  },
  {
    "entry": "basically",
    "meaning_ja": "基本的に,根本的に / 元来は",
    "example_sentence": "Basically, I prefer tea over coffee.",
    "translated_sentence": "基本的に、私はコーヒーよりも紅茶を好む。"
  },
  {
    "entry": "believe",
    "meaning_ja": "(現実・真実であると)〈事〉'を'信じる,信用する  / 〈人〉'を'信じる,信用する;〈人〉‘の'言ったことを信じる  / 《1,2の弱い意味に,同じ文型で用いて》…‘と'思う,考える(think)  / 信ずる;信仰する",
    "example_sentence": "I believe in the power of kindness.",
    "translated_sentence": "私は優しさの力を信じている。"
  },
  {
    "entry": "bird",
    "meaning_ja": "鳥  / 〈話〉《修飾語を伴なって(目立った特徴をもった)やつ,人  / シャトル / 《英俗》女  / 《俗》《[[the bird|get the bird]]》(不満を表す)しーっしーっという野次 / 《形容詞的に》bird feathers（鳥の羽）bird life（〈U〉鳥の生活）",
    "example_sentence": "The bird flew over the river.",
    "translated_sentence": "鳥が川を飛び越えた。"
  },
  {
    "entry": "both",
    "meaning_ja": "《both…and…の形で》両方とも,…のいずれも",
    "example_sentence": "They both arrived late for the meeting.",
    "translated_sentence": "彼らは両方とも会議に遅れて到着しました。"
  },
  {
    "entry": "box",
    "meaning_ja": "箱  / (の…)1箱《+of+名》  / (劇場などの)さじき席 ます席  / 番小屋,詰め所  / (野球で)バッターボックス;コーチャーズボックス;ピッチャーズマウンド;キャッチャーの定位置  / (線で囲った)四角のわく,囲み;(新聞・雑誌の)  / (郵便の)私書箱  / 《the box》《英俗》テレビ",
    "example_sentence": "The box was filled with candy.",
    "translated_sentence": "箱の中はキャンディでいっぱいだった。"
  },
  {
    "entry": "bread",
    "meaning_ja": "パン,食パン  / (生名の糧(かて)として必要な)食物一般…生計・金・銭",
    "example_sentence": "I bought a loaf of bread.",
    "translated_sentence": "パンを一斤買いました。"
  },
  {
    "entry": "reckon",
    "meaning_ja": "を数える,を計算する《up》 / …をみなす,を考える　guessと似てる / 数える,計算する / 《話》思う",
    "example_sentence": "I reckon there are about 100 people in the room.",
    "translated_sentence": "部屋にはおよそ100人いると思う。"
  },
  {
    "entry": "absence",
    "meaning_ja": "〈U/C〉留守, 不在 / 欠席, 《...を》欠席すること《from ...》 / 〈U〉《...が》ないこと《of ...》",
    "example_sentence": "You have to account for your absence.",
    "translated_sentence": "君は欠席の理由を説明しなければならない。"
  },
  {
    "entry": "accident",
    "meaning_ja": "〈C〉偶然,偶発,めぐり合わせ  / 〈C〉事故,災難",
    "example_sentence": "The meeting with my best friend in the city was a happy accident.",
    "translated_sentence": "都市での親友との出会いは幸せな偶然だった。"
  },
  {
    "entry": "accord",
    "meaning_ja": "【名詞】一致, 合意, 調和 / 【動詞】与える, 一致する, 調和する",
    "example_sentence": "Their opinions were in perfect accord.",
    "translated_sentence": "彼らの意見は完全に一致していました。"
  },
  {
    "entry": "active",
    "meaning_ja": "活動的な,活発な,活気のある  / 有効な,(薬の効力などが)まだ働いている,機能している  / (軍務で)現役の  / 積極的な,実際的な  / 能動態の",
    "example_sentence": "She is an active member of the community.",
    "translated_sentence": "彼女はコミュニティの活動的なメンバーです。"
  },
  {
    "entry": "activity",
    "meaning_ja": "〈U〉活動,働き;活力  / 《しばしば複数形で》(種々の)活動,行事;(学生の)学内(外)活動,クラブ活動  / 〈U〉(商況・市場などの)活発,活気",
    "example_sentence": "The activity at the park was lively and fun.",
    "translated_sentence": "公園での活動は活気があり、楽しかった。"
  },
  {
    "entry": "actor",
    "meaning_ja": "(男の)俳優,男優  / 行為者",
    "example_sentence": "Tom Hanks is a renowned actor in Hollywood.",
    "translated_sentence": "トム・ハンクスはハリウッドで有名な俳優です。"
  },
  {
    "entry": "actual",
    "meaning_ja": "現実の,実際上の(real)  / 現在の,現存の",
    "example_sentence": "The actual situation is far from what we expected.",
    "translated_sentence": "現実の状況は、私たちが期待していたものからはほど遠いです。"
  },
  {
    "entry": "adequate",
    "meaning_ja": "十分な / 適切な / 適当な",
    "example_sentence": "The hotel provided adequate facilities for the conference.",
    "translated_sentence": "ホテルは会議のために十分な設備を提供しました。"
  },
  {
    "entry": "severe",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "3004391",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "adult",
    "meaning_ja": "おとなの,成人した,成熟した / 成人向きの",
    "example_sentence": "The railroad fare for children is half of the adult fare.",
    "translated_sentence": "鉄道の料金は子供は大人の半額だ。"
  },
  {
    "entry": "advice",
    "meaning_ja": "〈U〉忠告,助言;(医者・弁護士などの)意見,指示  / 〈U〉〈C〉(商業取引上の)通知;《複数形で》報道,報告",
    "example_sentence": "I appreciate your advice.",
    "translated_sentence": "あなたの忠告に感謝します。"
  },
  {
    "entry": "adventure",
    "meaning_ja": "〈U〉〈C〉冒険  / 〈C〉珍しい経験,意外なできごと  / =venture",
    "example_sentence": "I'm always ready for a new adventure.",
    "translated_sentence": "私はいつでも新しい冒険の準備ができている。"
  },
  {
    "entry": "adviser",
    "meaning_ja": "忠告者,助言者;顧問  / 《米》(大学の)新入生指導教師",
    "example_sentence": "My adviser gave me some valuable advice for my future career.",
    "translated_sentence": "私の忠告者は、私の将来のキャリアに対して貴重なアドバイスをくれました。"
  },
  {
    "entry": "advocate",
    "meaning_ja": "【動/他】(考え・主義・政策など) を提唱する, を擁護する / 【名/C】提唱者；擁護者 / 弁護士",
    "example_sentence": "She advocates for animal rights.",
    "translated_sentence": "彼女は動物愛護を提唱している。"
  },
  {
    "entry": "aggressive",
    "meaning_ja": "侵略的な,攻撃的な  / 積極的な,反対を恐れない",
    "example_sentence": "The fight between the two teams was aggressive.",
    "translated_sentence": "2つのチーム間の戦いは激しかった。"
  },
  {
    "entry": "ago",
    "meaning_ja": "《期間を表す語の後に用いて》(今から)…前に / 《longの後に用いて》以前に",
    "example_sentence": "I moved to this city five years ago.",
    "translated_sentence": "私は5年前にこの都市に引っ越しました。"
  },
  {
    "entry": "ahead",
    "meaning_ja": "(空間的に)前方に, 前へ / 《~ of ...》...の前に / (時間的に) 前に, 先に / 他よりまさって",
    "example_sentence": "The road ahead is clear.",
    "translated_sentence": "前方の道路は開けています。"
  },
  {
    "entry": "alcohol",
    "meaning_ja": "〈U〉アルコール / アルコール飲料, 酒",
    "example_sentence": "He decided to quit drinking alcohol for his health.",
    "translated_sentence": "彼は健康のためにアルコールを飲むのをやめることに決めました。"
  },
  {
    "entry": "album",
    "meaning_ja": "(写真・切手・切り抜きなどを貼る)アルバム  / (いくつかの曲・劇などを収録した)組レコード,アルバム  / 画帳",
    "example_sentence": "I found an old photo album in the attic.",
    "translated_sentence": "私は屋根裏で古い写真アルバムを見つけました。"
  },
  {
    "entry": "alive",
    "meaning_ja": "生きている / 現存している / 活動している / 生き生きした, 活発な",
    "example_sentence": "The cat is still alive.",
    "translated_sentence": "その猫はまだ生きている。"
  },
  {
    "entry": "also",
    "meaning_ja": "…もまた([[too]]), 同様に（[[as well]]） / そしてその上,それから",
    "example_sentence": "I also like to read books.",
    "translated_sentence": "私も本を読むのが好きです。"
  },
  {
    "entry": "ancient",
    "meaning_ja": "古代の / 《おどけて》とても歳をとった /",
    "example_sentence": "The ancient ruins were discovered in the heart of the city.",
    "translated_sentence": "古代の遺跡は都市の中心部で発見されました。"
  },
  {
    "entry": "annual",
    "meaning_ja": "1年の,1年間の  / 年々の,例年の  / 1年1回の,(雑誌など)年刊の  / (植物が)1年生の  / 年報,年鑑(yearbook);年1回の行事  / 1年生植物",
    "example_sentence": "The athletic meet is an annual event.",
    "translated_sentence": "その運動会は毎年行われる行事だ。"
  },
  {
    "entry": "apart",
    "meaning_ja": "《...から》離れて 《from ...》 / 区別して / 《...と》 別々に 《from ...》 / ばらばらに",
    "example_sentence": "They live apart from each other.",
    "translated_sentence": "彼らはお互いから離れて暮らしています。"
  },
  {
    "entry": "appointment",
    "meaning_ja": "〈C〉(時・場所を決めて会う)《…との》約束《with ...》  / 〈U〉任命 / 《…を…として》任命すること《of ... as ...》 / 〈C〉(任命された)官職,地位 /  《複数形で》(特に家庭の)設備,装備",
    "example_sentence": "I have an appointment with the doctor tomorrow.",
    "translated_sentence": "明日、医者の予約があります。"
  },
  {
    "entry": "appearance",
    "meaning_ja": "〈C〉現れること / 〈U/C〉外観, 見かけ / 《複数形で》形勢, 状況",
    "example_sentence": "The sudden appearance of the comet in the sky surprised everyone.",
    "translated_sentence": "空に突然彗星が現れたことは皆を驚かせました。"
  },
  {
    "entry": "approve",
    "meaning_ja": "〈事〉'を'よいと認める,‘に'賛成する  / (正式に)…'を'認可する,承認する  / 《approve of+名(doing)》(…を)承認する,賛成する",
    "example_sentence": "The committee approved the budget.",
    "translated_sentence": "委員会は予算を承認した。"
  },
  {
    "entry": "assistant",
    "meaning_ja": "助手,補佐役;店員",
    "example_sentence": "The assistant is preparing the documents for the meeting.",
    "translated_sentence": "助手が会議のための書類を準備しています。"
  },
  {
    "entry": "assumption",
    "meaning_ja": "〈C〉（証拠はないが正しいと考えている）仮定,想定, 仮説, 憶測 / 〈U〉(任務などを)引き受けること《of ...》 / (権力・権利などの)専有,横領《of ...》 / (態度などの)でしゃばり,おうへい, 厚かましさ / 《the A-》聖母マリアの被昇天;聖母被昇天祭(8月15日)",
    "example_sentence": "Your conclusion is based on an assumption, not on evidence.",
    "translated_sentence": "あなたの結論は仮定に基づいており、証拠ではありません。"
  },
  {
    "entry": "attract",
    "meaning_ja": "(物理的な力で)…'を'引きつける,引き寄せる  / 〈人,人の注意・興味など〉'を'引きつける,誘う",
    "example_sentence": "I'm attracted to him.",
    "translated_sentence": "私は彼に惹かれている。"
  },
  {
    "entry": "average",
    "meaning_ja": "〈C〉 平均, 平均値",
    "example_sentence": "The average height of the students in the class is 160 centimeters.",
    "translated_sentence": "クラスの生徒の平均身長は160センチメートルです。"
  },
  {
    "entry": "awful",
    "meaning_ja": "(光景・事故などが)恐ろしい,すさまじい  / 《話》(行為が)ひどい,見苦しい  / 《話》(程度が)大きい,すごい(great)  / 《俗》ひどく,すごく(very, extremely)",
    "example_sentence": "The aftermath of the earthquake was an awful sight.",
    "translated_sentence": "地震の後の光景は恐ろしいものだった。"
  },
  {
    "entry": "specialize",
    "meaning_ja": "〈自〉《...を》専門にする《in ...》 / 〈生物が〉(特別な環境に適応するように)特殊化する, 分化する",
    "example_sentence": "She decided to specialize in neurology.",
    "translated_sentence": "彼女は神経学を専門にすると決めました。"
  },
  {
    "entry": "spell",
    "meaning_ja": "【動/他】〈語〉をつづる,のつづりを言う / （文字が）〈語〉のつづりである / (結果として)…を招く / 【動/自】語をつづる",
    "example_sentence": "Can you spell your name for me?",
    "translated_sentence": "あなたの名前をスペルで教えてもらえますか？"
  },
  {
    "entry": "behavior",
    "meaning_ja": "〈C〉ふるまい,行動 / (相手への反応として示す)態度;行儀,品行 / (ある状況での物の)作用,反応;(車などの)調子",
    "example_sentence": "His behavior at the party was unacceptable.",
    "translated_sentence": "彼のパーティーでの行動は許容範囲外でした。"
  },
  {
    "entry": "belong",
    "meaning_ja": "《...の》所有である / 《...の》一部である / 《...に》属する《to》",
    "example_sentence": "This book belongs to John.",
    "translated_sentence": "この本はジョンの所有物です。"
  },
  {
    "entry": "bin",
    "meaning_ja": "(穀物・石炭などを入れる)ふたつきの大箱  / (れんがなどで仕切った)貯蔵所",
    "example_sentence": "The farmer stored the harvested wheat in a large bin.",
    "translated_sentence": "農家は収穫した小麦を大きなふたつきの箱に保存した。"
  },
  {
    "entry": "billion",
    "meaning_ja": "10億(thousand million)  / 《英》兆(《米》trillion)",
    "example_sentence": "The company's net worth is over a billion dollars.",
    "translated_sentence": "その会社の純資産は10億ドル以上です。"
  },
  {
    "entry": "birth",
    "meaning_ja": "〈C〉〈U〉誕生,出生  / 〈U〉生まれ,家柄;家系(lineage)  / 〈C〉起原,起こり(origin)",
    "example_sentence": "The birth of my first child was the happiest moment of my life.",
    "translated_sentence": "私の最初の子供の誕生は私の人生で最も幸せな瞬間でした。"
  },
  {
    "entry": "bottle",
    "meaning_ja": "びん;1びんの量  / 〈U〉《the~》酒;飲酒  / 〈U〉《the~》哺乳(ほにゅう)びん;牛乳",
    "example_sentence": "She put the bottle on the table.",
    "translated_sentence": "彼女はびんをテーブルに置いた。"
  },
  {
    "entry": "breakfast",
    "meaning_ja": "朝食",
    "example_sentence": "I had a delicious breakfast this morning.",
    "translated_sentence": "今朝は美味しい朝食を食べました。"
  },
  {
    "entry": "brief",
    "meaning_ja": "短時間の;短期間の(short)  / 言葉数の少ない,簡潔な",
    "example_sentence": "I will give you a brief overview of the project.",
    "translated_sentence": "プロジェクトの簡単な概要をお伝えします。"
  },
  {
    "entry": "story",
    "meaning_ja": "【名/C】(建物の)『階』 / 《集合的に》同じ階の部屋全部",
    "example_sentence": "My house is two-story building.",
    "translated_sentence": "私の家は2階建ての建物です。"
  },
  {
    "entry": "button",
    "meaning_ja": "(衣服の)ボタン  / 記章,バッジ  / (ベルなどの)押しボタン",
    "example_sentence": "Press the button to turn on the light.",
    "translated_sentence": "ライトを点けるためにボタンを押してください。"
  },
  {
    "entry": "cancel",
    "meaning_ja": "〈約束や注文など〉を取り消す,を無効にする  / (線などを引いて)…を消す《out》〈切手など〉に消印を押す  / 〈事が〉〈相反する事〉を帳消しにする,相殺する《out》  / 〈方程式の左右の共通の項が〉約される,消去される",
    "example_sentence": "I need to cancel my reservation.",
    "translated_sentence": "予約をキャンセルしなければなりません。"
  },
  {
    "entry": "cancer",
    "meaning_ja": "〈U/C〉がん / 害悪",
    "example_sentence": "She was diagnosed with cancer last year.",
    "translated_sentence": "彼女は去年、がんと診断されました。"
  },
  {
    "entry": "carbon",
    "meaning_ja": "炭素(化学記号はC)  / 〈C〉炭素棒  / 〈C〉《時に〈U〉》=carbon paper / ≪ carbon copy ≫生き写し/ 瓜二つの≪of≫",
    "example_sentence": "Carbon is an essential element in organic compounds.",
    "translated_sentence": "炭素は有機化合物において必須の元素です。"
  },
  {
    "entry": "cash",
    "meaning_ja": "現金,正金,銀行券,硬貨  / 〈小切手・為替など〉'を'現金に換える,現金化する",
    "example_sentence": "I need to withdraw some cash from the ATM.",
    "translated_sentence": "私はATMから現金を引き出す必要があります。"
  },
  {
    "entry": "castle",
    "meaning_ja": "城,とりで  / (一般に)大邸宅,やかた  / (またrook)(チェスのこまの)城将",
    "example_sentence": "The castle is a popular tourist attraction.",
    "translated_sentence": "城は人気の観光名所です。"
  },
  {
    "entry": "catalog",
    "meaning_ja": "目録,カタログ,(大学などの)案内書,説明書  / …'を'目録に載せる,‘の'目録を作る",
    "example_sentence": "I received a new catalog in the mail today.",
    "translated_sentence": "今日、郵便で新しい目録を受け取りました。"
  },
  {
    "entry": "championship",
    "meaning_ja": "〈C〉優勝者の地位(名誉)  / 《しばしば複数形で》《単数扱い》選手権試合  / 〈U〉(自由・権利などの)擁護",
    "example_sentence": "She won the championship in the swimming competition.",
    "translated_sentence": "彼女は水泳大会で優勝しました。"
  },
  {
    "entry": "chapter",
    "meaning_ja": "章 / 支部",
    "example_sentence": "This chapter discusses the main themes of the book.",
    "translated_sentence": "この章では、本の主要なテーマについて議論します。"
  },
  {
    "entry": "unusual",
    "meaning_ja": "普通でない / 異常な / 独特の",
    "example_sentence": "It's unusual to see snow in this area.",
    "translated_sentence": "この地域で雪を見るのは普通ではありません。"
  },
  {
    "entry": "chief",
    "meaning_ja": "最高位の,長の；主要な,第一の",
    "example_sentence": "What is the chief aim of this society?",
    "translated_sentence": "この会の主な目的はなんですか。"
  },
  {
    "entry": "civil",
    "meaning_ja": "市民の,一般市民の;市民(公民)としての  / (軍・教会に対して)民間の,世俗の  / 国内に起こる;政府と国民との間の  / 民法の,民事の  / 礼儀正しい,ていねいな",
    "example_sentence": "The civil rights movement fought for equal rights for all citizens.",
    "translated_sentence": "市民の権利運動は、すべての市民に対する平等な権利を求めて戦った。"
  },
  {
    "entry": "classical",
    "meaning_ja": "古典の;古典時代の;古典様式の  / (文学・芸術において)古典主義の(簡潔で調和を保ち洗練されているのが特徴)  / (ジャズ・フォークなどに対して主として20世紀初頭までの)古典派の  / (新奇な・実験的なものではなく)伝統的な,正統的な  / (専門科目に対して)教養科目の",
    "example_sentence": "I enjoy listening to classical music.",
    "translated_sentence": "私はクラシック音楽を聴くのが好きです。"
  },
  {
    "entry": "clothes",
    "meaning_ja": "〈U〉衣服, 着物 / (シーツ・毛布など)寝具,夜具",
    "example_sentence": "I bought some new clothes.",
    "translated_sentence": "新しい服を何着か買いました。"
  },
  {
    "entry": "corporation",
    "meaning_ja": "〈C〉企業, 法人, 社団法人 / 地方議会",
    "example_sentence": "The corporation has announced a new partnership.",
    "translated_sentence": "その企業は新しいパートナーシップを発表しました。"
  },
  {
    "entry": "comedy",
    "meaning_ja": "〈U〉(劇の一部門としての)喜劇;〈C〉(一編の作品としての)喜劇  / 〈U〉〈C〉(劇・文学作品・人生などの)喜劇的要素;(実人生における)喜劇的事件(場面)",
    "example_sentence": "I love watching comedy movies.",
    "translated_sentence": "私は喜劇映画を見るのが大好きです。"
  },
  {
    "entry": "compete",
    "meaning_ja": "(…と…を)競う,競争する《+with+名+for+名》  / 《通令否定文で》(…に)匹敵する《+with+名》",
    "example_sentence": "They compete against each other in the swimming competition.",
    "translated_sentence": "彼らは水泳の競技で互いに競います。"
  },
  {
    "entry": "component",
    "meaning_ja": "構成している,成分の  / 構成要素,成分",
    "example_sentence": "The component is made up of several parts.",
    "translated_sentence": "そのコンポーネントはいくつかの部品から構成されています。"
  },
  {
    "entry": "concentration",
    "meaning_ja": "〈U〉(…への)(光線・注意などの)集中;(仕事などへの)専念,専心《+on+名》  / 〈C〉(人口などの)集中  / 〈U〉濃縮;〈液体の〉濃度",
    "example_sentence": "I need to improve my concentration if I want to succeed.",
    "translated_sentence": "成功したいなら、集中力を高める必要がある。"
  },
  {
    "entry": "conflict",
    "meaning_ja": "衝突,争い；矛盾,不一致",
    "example_sentence": "The conflict between the two countries escalated into a full-scale war.",
    "translated_sentence": "二つの国の衝突は全面戦争にエスカレートした。"
  },
  {
    "entry": "consequence",
    "meaning_ja": "〈C〉結果, 成り行き, 影響 / 《文》重要性, 重大さ",
    "example_sentence": "The consequence of his actions was severe.",
    "translated_sentence": "彼の行動の結果は厳しかった。"
  },
  {
    "entry": "consume",
    "meaning_ja": "〈物・時間・金など〉を消費する,を消耗する《away》 / を食べ尽くす /  〈特に火が〉…を焼き尽くす / 《おもに受動態で》〈怒り・嫉妬などが〉〈人〉を心をすっかり奪う",
    "example_sentence": "I consume a lot of fruits and vegetables every day.",
    "translated_sentence": "私は毎日たくさんの果物や野菜を摂取します。"
  },
  {
    "entry": "core",
    "meaning_ja": "〈C〉(果物の)芯  / 〈U〉(物事の)核心  / 〈C〉(電気の)磁心,磁極鉄心",
    "example_sentence": "This is the core of the problem.",
    "translated_sentence": "これがその問題の核心である。"
  },
  {
    "entry": "coverage",
    "meaning_ja": "【名/U】(テレビ・ラジオなどの)報道, 取材 / 報道規模,取材規模 / (テレビ・ラジオなどの)受信地域 / (保険の)補償額；(授業などの)取り扱い範囲",
    "example_sentence": "The insurance policy provides comprehensive coverage for all types of accidents.",
    "translated_sentence": "保険契約はあらゆる種類の事故に対して包括的な補償を提供します。"
  },
  {
    "entry": "creative",
    "meaning_ja": "創造力のある, 創造的な  / 独創的な",
    "example_sentence": "She is a creative artist.",
    "translated_sentence": "彼女は創造力のあるアーティストです。"
  },
  {
    "entry": "creature",
    "meaning_ja": "生物,動物  / 《しばしば愛情または軽べつを示す形容詞を前に置いて》(…の)人,(特に)(…の)女性  / (人・物に)支配されるもの,(…の)とりこ,手先《+of+名》",
    "example_sentence": "The deep sea is home to many fascinating creatures.",
    "translated_sentence": "深海には多くの魅力的な生物が生息しています。"
  },
  {
    "entry": "crisis",
    "meaning_ja": "(社会上・政治上の)重大な事態,難局,危機  / (人生の)重大な転機(岐路),重大事  / 最悪状態",
    "example_sentence": "The country is facing a major crisis.",
    "translated_sentence": "その国は重大な危機に直面している。"
  },
  {
    "entry": "curtain",
    "meaning_ja": "カーテン,窓掛け  / (劇場の)幕,どんちょう  / 幕状のもの;仕切りの壁",
    "example_sentence": "I closed the curtain to block out the sunlight.",
    "translated_sentence": "日光を遮るためにカーテンを閉めました。"
  },
  {
    "entry": "define",
    "meaning_ja": "を定義する、定義付ける",
    "example_sentence": "Please define the term for me.",
    "translated_sentence": "その用語を私に定義してください。"
  },
  {
    "entry": "desk",
    "meaning_ja": "机,勉強机,事務机  / 受付所,応接所  / (新聞社・役所などの)部局",
    "example_sentence": "I have a desk in my room.",
    "translated_sentence": "私は自分の部屋にデスクを持っている。"
  },
  {
    "entry": "destruction",
    "meaning_ja": "破壊[行為]  / 破壊された状態,破滅,絶滅  / 破壊手段,破壊をもたらすもの",
    "example_sentence": "The earthquake caused widespread destruction in the city.",
    "translated_sentence": "地震が都市で広範な破壊を引き起こしました。"
  },
  {
    "entry": "digital",
    "meaning_ja": "指の  / 数字の;計数型の",
    "example_sentence": "I prefer reading digital books over physical ones.",
    "translated_sentence": "私は紙の本よりもデジタルの本を読む方が好きです。"
  },
  {
    "entry": "disappoint",
    "meaning_ja": "《人を》‘を'失望させる,がっかりさせる  / 〈約束・期待〉‘を'破る;〈希望・計画など〉‘を'だめにする,くつがえす",
    "example_sentence": "I don't want to disappoint my parents.",
    "translated_sentence": "私は両親を失望させたくない。"
  },
  {
    "entry": "document",
    "meaning_ja": "(証書・記録・資料などの)『文書』,書類",
    "example_sentence": "Please make sure to sign the document before submitting it.",
    "translated_sentence": "提出する前に文書に署名してください。"
  },
  {
    "entry": "drama",
    "meaning_ja": "〈C〉戯曲,劇文学;脚本  / 〈U〉《しばしばthe~》演劇,劇,芝居  / 〈C〉〈U〉劇的事件",
    "example_sentence": "The drama was very exciting.",
    "translated_sentence": "ドラマはとてもエキサイティングだった。"
  },
  {
    "entry": "earn",
    "meaning_ja": "〈他〉(働いて)〈金など〉をかせぐ / (努力して)〈信用・名声など〉を得る /  (貯金などが)〈利益〉を生じる,を生む",
    "example_sentence": "She works hard to earn a living.",
    "translated_sentence": "彼女は生計を立てるために一生懸命働いています。"
  },
  {
    "entry": "easily",
    "meaning_ja": "簡単に/容易に/易々と",
    "example_sentence": "She easily solved the math problem.",
    "translated_sentence": "彼女は簡単に数学の問題を解決した。"
  },
  {
    "entry": "east",
    "meaning_ja": "東の,東方の,東部の;東からの",
    "example_sentence": "I live in the east side of the city.",
    "translated_sentence": "私は市の東側に住んでいます。"
  },
  {
    "entry": "eastern",
    "meaning_ja": "東の;東へ向かう;(風が)東からの  / 《しばしばEastern》東洋の(Oriental)  / 《しばしばEastern》《米》東部地方の  / 《Eastern》東欧の,共産圏の",
    "example_sentence": "I love watching the sunrise in the eastern sky.",
    "translated_sentence": "私は東の空の日の出を見るのが大好きです。"
  },
  {
    "entry": "edition",
    "meaning_ja": "(刊行物の)版;(同じ版で同時に刷った)全発行部数;(同じ版の)1冊(部)  / 《修飾語[句]を伴って》(装丁などから見た)…版,体裁",
    "example_sentence": "The latest edition of the magazine is now available.",
    "translated_sentence": "雑誌の最新号が発売されました。"
  },
  {
    "entry": "editor",
    "meaning_ja": "(出版物・映画などの)編集者;(新聞などの)主筆,主幹;(雑誌などの)編集長  / (新聞・雑誌などの各部門の)部長",
    "example_sentence": "The editor made several changes to the manuscript before it was published.",
    "translated_sentence": "出版される前に、編集者は原稿にいくつかの変更を加えました。"
  },
  {
    "entry": "effective",
    "meaning_ja": "効果的な,効きめのある  / (法律などが)有効な,実施されている  / 印象深い,感銘的な  / 実際に役立つ,実動の",
    "example_sentence": "Regular exercise is an effective way to improve your overall health.",
    "translated_sentence": "定期的な運動は全体的な健康を改善する効果的な方法です。"
  },
  {
    "entry": "effort",
    "meaning_ja": "〈U〉〈C〉《しばしば複数形で》努力,骨折り  / 〈C〉努力の成果,労作",
    "example_sentence": "She put a lot of effort into her studies.",
    "translated_sentence": "彼女は勉強に多くの努力を注いだ。"
  },
  {
    "entry": "tax",
    "meaning_ja": "〈C〉〈U〉(…に対する)税,税金《+on(upon)+名》  / 〈C〉《単数形で》(…にとっての)重荷,過酷な要求《+on(upon)+名》",
    "example_sentence": "I need to pay my income tax by the end of the month.",
    "translated_sentence": "月末までに所得税を支払わなければなりません。"
  },
  {
    "entry": "event",
    "meaning_ja": "(特に重要な)でき事,事件;行事  / (スポーツの)種目;勝負,試合  / 《文》成り行き,結果",
    "example_sentence": "The event was cancelled due to bad weather.",
    "translated_sentence": "天候不良のためにイベントはキャンセルされました。"
  },
  {
    "entry": "everyday",
    "meaning_ja": "毎日の,日々の  / (日曜日などに対して)平日の  / 日常の,ありふれた・（つづりに注意：一語です・everyとdayが離れずにくっついています）",
    "example_sentence": "I have an everyday routine.",
    "translated_sentence": "私は毎日の決まったルーチンを持っている。"
  },
  {
    "entry": "evolution",
    "meaning_ja": "〈U〉(徐々の)発展,進展,展開  / 〈U〉(生物の)進化;進化論  / 〈C〉(ダンス・体操などの)旋回[動作]",
    "example_sentence": "Evolution is a gradual development.",
    "translated_sentence": "進化は徐々の発展です。"
  },
  {
    "entry": "exceed",
    "meaning_ja": "〈…の限度・範囲など〉‘を'越える,超過する  / (…の点で)…‘に'まさる,‘を'しのぐ《+名+in+名(doing)》  / (…の)度を越える《+in+名(doing)》  / (…に)すぐれる,卓越する《+in+名(doing)》",
    "example_sentence": "The number of attendees exceeded our expectations.",
    "translated_sentence": "参加者の数は私たちの予想を超えました。"
  },
  {
    "entry": "experience",
    "meaning_ja": "...を経験する, ...を体験する",
    "example_sentence": "She often experiences melancholia during the winter months.",
    "translated_sentence": "彼女は冬の間によく憂うつ病になります。"
  },
  {
    "entry": "extensive",
    "meaning_ja": "広い / 広範囲の, 多方面にわたる / 大規模な",
    "example_sentence": "The hotel has extensive facilities for guests to enjoy.",
    "translated_sentence": "ホテルには広範な施設があり、ゲストが楽しむことができます。"
  },
  {
    "entry": "factor",
    "meaning_ja": "(…の)要因,(…を生み出す)要素《+in+名(doing)》  / 囲数,約数  / 代理人,《おもに英》仲買人  / =factorize",
    "example_sentence": "Lack of exercise is a major factor in weight gain.",
    "translated_sentence": "運動不足は体重増加の主要な要因です。"
  },
  {
    "entry": "hat",
    "meaning_ja": "(回りに縁のついた)帽子  / …‘に'帽子をかぶせる",
    "example_sentence": "I bought a new hat yesterday.",
    "translated_sentence": "昨日新しい帽子を買いました。"
  },
  {
    "entry": "famous",
    "meaning_ja": "有名な,名高い  / 《話;ややまれ》すばらしい,すてきな",
    "example_sentence": "He is a famous actor.",
    "translated_sentence": "彼は有名な俳優です。"
  },
  {
    "entry": "fan",
    "meaning_ja": "〈C〉ファン, 熱心な愛好者(支持者)",
    "example_sentence": "I am a big fan of basketball.",
    "translated_sentence": "私はバスケットボールの大ファンです。"
  },
  {
    "entry": "able",
    "meaning_ja": "《 be ~ to do》《...することが》できる / 有能な, 腕利きの, 並々ならない",
    "example_sentence": "He was not able to open the box.",
    "translated_sentence": "彼はその箱を開けることができなかった。"
  },
  {
    "entry": "fascinate",
    "meaning_ja": "を魅了する / (恐怖などで)…を動けなくする",
    "example_sentence": "The magician's tricks never fail to fascinate the audience.",
    "translated_sentence": "魔術師のトリックは常に観客を魅了する。"
  },
  {
    "entry": "accuse",
    "meaning_ja": "《...の罪で》 ...を訴える, を告発する 《... of ...》 / 《...であると》 ...を非難する 《... of ...》",
    "example_sentence": "He was accused of stealing the necklace.",
    "translated_sentence": "彼はネックレスを盗んだと告発されました。"
  },
  {
    "entry": "achieve",
    "meaning_ja": "（目標・成功などを）達成する,（能力・技術などを）身につける,（勝利・名声などを）獲得する,勝ち取る",
    "example_sentence": "She achieved her dream of becoming a famous actress.",
    "translated_sentence": "彼女は有名な女優になる夢を実現した。"
  },
  {
    "entry": "address",
    "meaning_ja": "〈C〉あて名,住所 / 〈C〉演説, (口頭・文書による)あいさつの言葉([[speech]]) / 《文》〈U〉話しぶり,応対のしかた / 〈U〉(物事を扱う)手ぎわのよさ,如才なさ / 《複数形で》くどき,求愛,求婚",
    "example_sentence": "Please write your address on the envelope.",
    "translated_sentence": "封筒にあなたの住所を書いてください。"
  },
  {
    "entry": "festival",
    "meaning_ja": "〈C〉〈U〉祭り,祝い,祭典  / 〈C〉祭日,祝日  / 《しばしばF-》(映画・音楽などの)…祭",
    "example_sentence": "The town holds a festival every year.",
    "translated_sentence": "町は毎年祭りを開催しています。"
  },
  {
    "entry": "finally",
    "meaning_ja": "最後に([[at the end]])  / 最終的に,決定的に([[decisively]])  / ついに,とうとう([[at last]])",
    "example_sentence": "Finally, after months of hard work, I completed my project.",
    "translated_sentence": "最後に、数ヶ月間の努力の末、私はプロジェクトを完成させました。"
  },
  {
    "entry": "finance",
    "meaning_ja": "〈人・計画など〉‘に'資金を出す,融資する",
    "example_sentence": "A budget deficit must be financed somehow.",
    "translated_sentence": "赤字は何とか埋め合わせなければならない。"
  },
  {
    "entry": "fish",
    "meaning_ja": "〈魚〉‘を'とる,釣る,捕まえる;〈小川・湖など〉‘で'魚をとる,漁をする  / 釣りをする,魚をとる,漁をする",
    "example_sentence": "They fished the stream for trout.",
    "translated_sentence": "彼らは川でマスを釣った。"
  },
  {
    "entry": "firmly",
    "meaning_ja": "堅く/ しっかりと / 確固として",
    "example_sentence": "She firmly believes in her abilities.",
    "translated_sentence": "彼女は自分の能力を堅く信じています。"
  },
  {
    "entry": "advance",
    "meaning_ja": "を前進させる, を進める / 《...に向かって》 前進する 《on, upon, toward ...》",
    "example_sentence": "We need to advance our plans for the project.",
    "translated_sentence": "私たちはプロジェクトの計画を進める必要があります。"
  },
  {
    "entry": "flight",
    "meaning_ja": "〈U〉〈C〉《…からの》逃走, 退避, 脱出《from ...》",
    "example_sentence": "The alternative possibilities were resistance and flight.",
    "translated_sentence": "可能な選択肢は抵抗か逃亡かの二者択一だった。"
  },
  {
    "entry": "allow",
    "meaning_ja": "〈他〉〈事〉を許す, 〈人〉に許可を与える / 《したいと思っていたことを》...にさせる, ...にできるようにする《to do》 / 《...のために》...を用意しておく, を見越しておく《for ...》",
    "example_sentence": "They allow pets in their apartment.",
    "translated_sentence": "彼らはアパートでペットを飼うことを許しています。"
  },
  {
    "entry": "always",
    "meaning_ja": "いつも, 常に / いつまでも, 永久に / 《話》 いずれにしても, 必要なら",
    "example_sentence": "I always drink coffee in the morning.",
    "translated_sentence": "私はいつも朝にコーヒーを飲みます。"
  },
  {
    "entry": "amaze",
    "meaning_ja": "〈他〉をひどくびっくりさせる, をとても驚かす, を仰天させる",
    "example_sentence": "The magician's tricks never fail to amaze the audience.",
    "translated_sentence": "そのマジシャンのトリックは、観客を必ず驚かせます。"
  },
  {
    "entry": "as",
    "meaning_ja": "同じぐらい,同様に / 《比較》...ほど, ...くらい / 《様態・程度》…のように,…と同じように / 《同時》…のときに([[when]]); …の間に,…するうちに, ...しながら([[while]]) / 《話》《原因・理由》…だから,…なので / 《譲歩》《文》…だけれども([[though]])",
    "example_sentence": "She is as tall as her brother.",
    "translated_sentence": "彼女は彼女の兄と同じぐらいの背が高いです。"
  },
  {
    "entry": "attach",
    "meaning_ja": "《...に》 ...をつける, を取り付ける 《to ...》 / 《...に》 付属する, 所属する 《to ...》",
    "example_sentence": "Please attach the document to the email.",
    "translated_sentence": "メールにドキュメントを添付してください。"
  },
  {
    "entry": "aware",
    "meaning_ja": "知っている / 気づいている",
    "example_sentence": "I was not aware of the changes until now.",
    "translated_sentence": "今までその変更に気づかなかった。"
  },
  {
    "entry": "foreign",
    "meaning_ja": "外国の;外国からの;外国との  / 《名詞の前にのみ用いて》異質の,外部からの  / 《補語にのみ用いて》(…に)無縁の,(…と)全く異なる《+to+名》",
    "example_sentence": "She had a foreign accent.",
    "translated_sentence": "彼女は外国のアクセントをしていた。"
  },
  {
    "entry": "bar",
    "meaning_ja": "〈C〉棒 / 《...に対する》障害《to, against ...》 / 酒場",
    "example_sentence": "This bar is a popular student hangout.",
    "translated_sentence": "このバーは学生に人気のたまり場です。"
  },
  {
    "entry": "forget",
    "meaning_ja": "…‘を'忘れる  / …‘を'怠る,‘に'注意を払わない  / …‘を'置き忘れる  / …‘を'気に留めない,無視する  / (…のことを)忘れる《+about+名(doing)》",
    "example_sentence": "I have forgotten my keys.",
    "translated_sentence": "私は鍵を忘れてしまった。"
  },
  {
    "entry": "framework",
    "meaning_ja": "〈C〉(建物などの)骨組み / 《…の》枠組《of ...》 / 《…の》構成, 組織《of ...》",
    "example_sentence": "The framework of the building was made of steel.",
    "translated_sentence": "建物の骨組みは鋼鉄で作られていました。"
  },
  {
    "entry": "be",
    "meaning_ja": "《補語を伴って》 ...である / 《位置・場所を伴う語句を伴って》 《...に》 ある / 存在する",
    "example_sentence": "I will be there soon.",
    "translated_sentence": "すぐにそこに行くよ。"
  },
  {
    "entry": "frequency",
    "meaning_ja": "〈U〉しばしば起こること,頻繁  / 〈C〉頻度数,(発生・生現などの)回数  / 〈C〉振動数;周波数",
    "example_sentence": "The frequency of earthquakes in this region is quite high.",
    "translated_sentence": "この地域の地震の頻度は非常に高いです。"
  },
  {
    "entry": "functional",
    "meaning_ja": "機能上の  / (余分なものが無く)機能的な,実用的な  / (数学で)関数の",
    "example_sentence": "This software has many functional features.",
    "translated_sentence": "このソフトウェアには多くの機能的な特徴があります。"
  },
  {
    "entry": "gay",
    "meaning_ja": "陽気な/同性愛の",
    "example_sentence": "He is a gay and cheerful person.",
    "translated_sentence": "彼は陽気で明るい人です。"
  },
  {
    "entry": "generation",
    "meaning_ja": "〈C〉《the ~》《集合的に》《単数扱い》同時代の人人,[同]世代  / 〈C〉〈U〉(家の)一代  / 〈C〉世代(ある代の出生から次の代の出生までの期間,約30年)  / 〈U〉(電気などの)発生,生成《+of+名》",
    "example_sentence": "The generation of today is facing unique challenges.",
    "translated_sentence": "今日の世代は独特な課題に直面しています。"
  },
  {
    "entry": "generate",
    "meaning_ja": "〈電気・熱〉‘を'発生させる,生む;〈文〉‘を'生成する  / 《文》(一般的に)…‘を'起こす,生じる",
    "example_sentence": "Solar panels generate electricity.",
    "translated_sentence": "太陽光パネルは電気を発生させます。"
  },
  {
    "entry": "global",
    "meaning_ja": "世界的な； 全地球的な",
    "example_sentence": "Internationalization is important for global businesses.",
    "translated_sentence": "国際化はグローバルビジネスにとって重要です。"
  },
  {
    "entry": "goal",
    "meaning_ja": "ゴール,決勝点  / (ゴールに球を入れて得た)得点  / =goalkeeper  / 目標(aim),目的;目的地",
    "example_sentence": "My goal is to become a successful entrepreneur.",
    "translated_sentence": "私の目標は成功した起業家になることです。"
  },
  {
    "entry": "golf",
    "meaning_ja": "ゴルフ  / ゴルフをする",
    "example_sentence": "I enjoy playing golf on the weekends.",
    "translated_sentence": "週末にゴルフを楽しんでいます。"
  },
  {
    "entry": "grammar",
    "meaning_ja": "〈U〉文法 / 〈C〉文法書 / 〈U〉(文法的に正しい)言葉遺い, 語法",
    "example_sentence": "I'm studying English grammar.",
    "translated_sentence": "私は英語の文法を勉強しています。"
  },
  {
    "entry": "bless",
    "meaning_ja": "〈神などが〉《…を》〈人〉に授ける,に恵む《with ...》 / を祝福する",
    "example_sentence": "May God bless you with good health and happiness.",
    "translated_sentence": "神があなたに健康と幸せを授けてくれますように。"
  },
  {
    "entry": "guest",
    "meaning_ja": "(食事・会合・滞在などへの)招待客,賓客・(ホテル・下宿などの)泊まり客,宿泊人,(レストランなどの)  / (ラジオ・テレビなどの番組の)ゲスト,特別出演者",
    "example_sentence": "The guests arrived early for the party.",
    "translated_sentence": "パーティーには客が早く到着した。"
  },
  {
    "entry": "bowl",
    "meaning_ja": "【名/C】《複数形あるいは進行形で》球をころがすこと,ボウルズ, ボウリング / (遊戯用の)木球",
    "example_sentence": "I ate a bowl of soup for lunch.",
    "translated_sentence": "昼食にスープのボウルを一杯食べました。"
  },
  {
    "entry": "happiness",
    "meaning_ja": "幸福,幸運;うれしさ  / (表現・用語・翻訳などの)巧妙,適切",
    "example_sentence": "Happiness is a choice that we make every day.",
    "translated_sentence": "幸せとは、私たちが日々選択するものだ。"
  },
  {
    "entry": "but",
    "meaning_ja": "《等位接続詞》《先に述べたことに反対・対照する内容の語・句・節を導いて》しかし,だが,けれども / 《前にある否定語と対応して》…でなくて  / …を除いて,以外に([[except]]) /《しばしばthatを伴って》…でなければ,でないと([[unless]])",
    "example_sentence": "I want to go to the beach, but it's raining outside.",
    "translated_sentence": "海に行きたいけど、外は雨が降っている。"
  },
  {
    "entry": "heart",
    "meaning_ja": "〈C〉心臓;胸  / 〈C〉(感情の中心をなす)心,気持ち  / 〈U〉愛情,同情  / 〈U〉勇気,元気,熱意  / 《the ~》中心,内部,(物事の)本質,核心  / 〈C〉ハート形の物;(カードの)ハートの札",
    "example_sentence": "I have a big heart.",
    "translated_sentence": "私は大きな心を持っている。"
  },
  {
    "entry": "by",
    "meaning_ja": "《場時・位置》…のそばに, の近くに / 《期限・期間》…までに,の間に / 《根拠・理由》…によって / …を単位として / 《手段・方法》…で, によって",
    "example_sentence": "The new store is located by the train station.",
    "translated_sentence": "新しい店は駅の近くに位置しています。"
  },
  {
    "entry": "hence",
    "meaning_ja": "それゆえに, 従って / 今から",
    "example_sentence": "He didn't study for the test, hence he failed.",
    "translated_sentence": "彼はテストの勉強をしなかった。それゆえに彼は失敗した。"
  },
  {
    "entry": "highly",
    "meaning_ja": "高度に, 非常に / 高い位に / 高価に",
    "example_sentence": "She is highly skilled in playing the piano.",
    "translated_sentence": "彼女はピアノの演奏に高度な技術を持っています。"
  },
  {
    "entry": "him",
    "meaning_ja": "彼を,彼に  / 《話》彼(=he)",
    "example_sentence": "He loves him very much.",
    "translated_sentence": "彼は彼をとても愛している。"
  },
  {
    "entry": "his",
    "meaning_ja": "《[[he]]の所有代名詞》彼のもの  / 《of hisの形で》彼の",
    "example_sentence": "This is his book.",
    "translated_sentence": "これは彼の本です。"
  },
  {
    "entry": "historical",
    "meaning_ja": "歴史の,史学の  / 史実の基づく,歴史上の",
    "example_sentence": "The historical significance of this event cannot be overstated.",
    "translated_sentence": "この出来事の歴史的な意義はどれだけ誇張してもしすぎることはありません。"
  },
  {
    "entry": "history",
    "meaning_ja": "〈U〉歴史;歴史学  / 〈C〉歴史書  / 〈C〉(人の)経歴,来歴;(物事の)過去,由来  / 〈C〉史劇",
    "example_sentence": "I'm studying the history of the United States.",
    "translated_sentence": "アメリカの歴史を勉強しています。"
  },
  {
    "entry": "cast",
    "meaning_ja": "〈他〉を投げる / を投げ捨てる《off》/ 《…に》〈影・光〉を投げ掛ける / 〈目・視線など〉を向ける / 〈票〉を投じる",
    "example_sentence": "He cast a vote for the proposition.",
    "translated_sentence": "彼はその提案に賛成票を投じた。"
  },
  {
    "entry": "household",
    "meaning_ja": "家庭 / 世帯 / 家族",
    "example_sentence": "How many people are there in this household?",
    "translated_sentence": "この家族は何人家族ですか。"
  },
  {
    "entry": "husband",
    "meaning_ja": "夫  / …‘を'節約する,倹約する",
    "example_sentence": "My husband loves to cook.",
    "translated_sentence": "私の夫は料理が大好きです。"
  },
  {
    "entry": "identity",
    "meaning_ja": "〈U〉同一であること  / 〈C〉〈U〉(人・物の)身元,正体  / 〈C〉独自性,個性",
    "example_sentence": "He didn't reveal his identity.",
    "translated_sentence": "彼は身元を明かさなかった。"
  },
  {
    "entry": "catch",
    "meaning_ja": "…を捕らえる / 〈動いている物〉をつかみ取る / 〈列車など〉に間に合う/ 〈伝染性の病気〉にかかる / 《副詞[句]を伴って》引っかかる",
    "example_sentence": "I catch the ball.",
    "translated_sentence": "私はボールを捕らえる。"
  },
  {
    "entry": "change",
    "meaning_ja": "〈C〉《…の》変化,移り変わり,変遷《of ...》 / 〈C〉《…の》取り替え,交換;乗り換え《of ...》 / 〈U〉釣り銭,小銭",
    "example_sentence": "The change in weather is noticeable.",
    "translated_sentence": "天気の変化が目立つ。"
  },
  {
    "entry": "import",
    "meaning_ja": "(…から)…‘を'輸入する《+名+from+名》  / 《文》'‘を'意味する,‘の'意味を導入する",
    "example_sentence": "I need to import some goods from China.",
    "translated_sentence": "私は中国からいくつかの商品を輸入する必要があります。"
  },
  {
    "entry": "importance",
    "meaning_ja": "重要性 / 重要度 / 価値",
    "example_sentence": "Understanding the importance of education is crucial for every individual.",
    "translated_sentence": "教育の重要性を理解することは、すべての人にとって極めて重要である。"
  },
  {
    "entry": "increase",
    "meaning_ja": "(…の)増加,増大;〈C〉増加量(額)《+of(in,on)+名》",
    "example_sentence": "They asked for an increase of salary.",
    "translated_sentence": "彼らは給料を上げることを要求した。"
  },
  {
    "entry": "chase",
    "meaning_ja": "〈C〉追跡 / 《the ~》狩猟 / 追われるもの",
    "example_sentence": "The dog lay panting after his long chase.",
    "translated_sentence": "長い間獲物を追いかけたのでその犬は寝そべってあえいでいた。"
  },
  {
    "entry": "information",
    "meaning_ja": "《単数形で冠詞をつけずに》(…についての)情報,知識《about(on, as to)+名(wh-節・句)》  / 〈U〉案内;〈C〉案内所,案内係",
    "example_sentence": "The internet provides us with a wealth of information.",
    "translated_sentence": "インターネットは我々に多くの情報を提供してくれています。"
  },
  {
    "entry": "input",
    "meaning_ja": "〈U〉(機械・電気などの) 入力  / インプット / 意見",
    "example_sentence": "Any input would be appreciated!",
    "translated_sentence": "ご意見をいただけるとありがたいです！"
  },
  {
    "entry": "international",
    "meaning_ja": "国際的な,国家間の,万国の  / 国際関係の  / 国際競技,国際試合  / 国際試合出場者",
    "example_sentence": "She has an international background.",
    "translated_sentence": "彼女は国際的なバックグラウンドを持っています。"
  },
  {
    "entry": "check",
    "meaning_ja": "〈C〉《...の》 阻止 《to ...》 / (確認のための)照合, 検査 / 小切手",
    "example_sentence": "I will do a check to make sure everything is okay.",
    "translated_sentence": "すべてが正常であることを確認するためにチェックを行います。"
  },
  {
    "entry": "class",
    "meaning_ja": "〈C〉(何らかの類似性を持つ)種類 / クラス / 〈U/C〉(クラス単位の)授業, 授業時間 / 〈C〉階級 / 等級",
    "example_sentence": "I'm in the same class as my brother.",
    "translated_sentence": "私は兄と同じクラスにいます。"
  },
  {
    "entry": "itself",
    "meaning_ja": "《強意用法》《名詞と同格に用いて》それ自身,それ自体,そのもの  / 《再帰用法》《動詞・前置詞の目的語として》それ自身を(に),それ自体を(に)",
    "example_sentence": "The book itself is very interesting.",
    "translated_sentence": "その本自体はとても面白いです。"
  },
  {
    "entry": "joy",
    "meaning_ja": "〈U〉(幸福感に満ちた大きな)喜び,うれしさ,歓喜〈C〉喜びの種",
    "example_sentence": "She couldn't contain her joy when she received the good news.",
    "translated_sentence": "彼女はその良い知らせを受け取ったとき、喜びを抑えることができなかった。"
  },
  {
    "entry": "kid",
    "meaning_ja": "《話》〈人〉をからかう / 〈人〉をだます / 人をからかう",
    "example_sentence": "Don't kid yourself.",
    "translated_sentence": "世間を甘くみるな！"
  },
  {
    "entry": "clear",
    "meaning_ja": "《...を》...から取り除く《of ...》 / 《…から》〈物〉を取り除く 《from , out of, off ...》 / 明るくなる",
    "example_sentence": "There's a lot of mess to clear up.",
    "translated_sentence": "片付けなければならないたくさんのゴミがある。"
  },
  {
    "entry": "commercial",
    "meaning_ja": "商業上の,通商上の,貿易上の  / 営利的な,もうけ主義の;市販用の  / 広告放送の",
    "example_sentence": "The commercial sector is experiencing rapid growth.",
    "translated_sentence": "商業部門は急速な成長を遂げています。"
  },
  {
    "entry": "knife",
    "meaning_ja": "ナイフ,小刀;包丁;短刀  / (機械などの)刃",
    "example_sentence": "I used a knife to cut the vegetables.",
    "translated_sentence": "私は野菜を切るのにナイフを使った。"
  },
  {
    "entry": "knowledge",
    "meaning_ja": "《時にa ~》知識,精通,認識,理解  / (…を)知っていること《+that 節》",
    "example_sentence": "Having knowledge about a wide range of topics is important.",
    "translated_sentence": "様々なトピックについての知識を持つことは重要です。"
  },
  {
    "entry": "compare",
    "meaning_ja": "...を比較する《with, to ...》 / 《...に》をたとえる《to ...》 / 《...と》比較される, 匹敵する《with, to ...》",
    "example_sentence": "I will compare the prices of different brands.",
    "translated_sentence": "私は異なるブランドの価格を比較します。"
  },
  {
    "entry": "competition",
    "meaning_ja": "〈U〉〈C〉《...との...の》 競争 《with ... for ...》 / 〈C〉試合",
    "example_sentence": "I participated in a fierce competition and won first place.",
    "translated_sentence": "私は激しい競争に参加して、一位になりました。"
  },
  {
    "entry": "complaint",
    "meaning_ja": "〈U〉《...についての》 不平, 苦情, ぐち 《about ...》 / 〈C〉不平の種 / 病気 / 《...に対する》告訴《against ...》",
    "example_sentence": "I have a complaint about the service at this restaurant.",
    "translated_sentence": "このレストランのサービスについてクレームがあります。"
  },
  {
    "entry": "concert",
    "meaning_ja": "〈C〉(公開の)演奏会,音楽会  / 〈U〉協調,協力 (動)〈…を〉協調[協定]する.〔+with+(代)名〕 〔…と〕協調[協定]する.",
    "example_sentence": "I'm going to the concert tomorrow.",
    "translated_sentence": "明日はコンサートに行くつもりです。"
  },
  {
    "entry": "conclude",
    "meaning_ja": "《文》〈演説・論文・会合〉'を'終わりにする,終える  / 〈事柄など〉'を'結論する,〈行動・意見など〉'を'決定する  / 〈条約など〉'を'締結する,結ぶ  / (…で)〈話・文などが〉終わる,結論になる,〈人が〉話を結ぶ《+with+名(doing)》",
    "example_sentence": "They will conclude the meeting with a final statement.",
    "translated_sentence": "彼らは最終声明で会議を終わりにする予定です。"
  },
  {
    "entry": "concrete",
    "meaning_ja": "具体的な / コンクリート製の / 凝固した, 固体の",
    "example_sentence": "The architect drew up detailed plans for the concrete building.",
    "translated_sentence": "建築家は具体的な建物の詳細な計画を作成しました。"
  },
  {
    "entry": "leadership",
    "meaning_ja": "指導者の地位(任務)  / 指導,指揮  / 指導力,統率力  / 《言合的に》指導者たち",
    "example_sentence": "He demonstrated strong leadership skills in guiding the team towards success.",
    "translated_sentence": "彼はチームを成功に導くために強力なリーダーシップスキルを示しました。"
  },
  {
    "entry": "lean",
    "meaning_ja": "(人・動物が) やせた, 肉の落ちた / (肉などが)脂肪が少ない / 乏しい,貧弱な / (土地などが)やせた",
    "example_sentence": "She has a lean figure.",
    "translated_sentence": "彼女はスリムな体型です。"
  },
  {
    "entry": "leather",
    "meaning_ja": "〈U〉(動物の) なめし, 革 / 〈C〉革製品 / （他の名詞をともなって形容詞的に）革製の",
    "example_sentence": "She bought a new leather jacket.",
    "translated_sentence": "彼女は新しい革のジャケットを買いました。"
  },
  {
    "entry": "legal",
    "meaning_ja": "法律の,法律上  / 法で定められた,法定の  / 合法の",
    "example_sentence": "It is important to consult a legal professional before signing any contracts.",
    "translated_sentence": "契約書に署名する前に法律の専門家に相談することが重要です。"
  },
  {
    "entry": "conduct",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "confuse",
    "meaning_ja": "《...と》 ...を混同する 《with ...》 / (人)を混乱させる, を戸惑わせる / (論点・順序など)を混乱させる",
    "example_sentence": "I always confuse the words 'accept' and 'except'.",
    "translated_sentence": "いつも「accept」と「except」という言葉を混同してしまいます。"
  },
  {
    "entry": "contemporary",
    "meaning_ja": "同時代の / 現代の（名詞的に使う場合）同年輩の人 / 同時代の人",
    "example_sentence": "Contemporary art often challenges traditional norms and conventions.",
    "translated_sentence": "現代美術はしばしば伝統的な規範や慣習に挑戦します。"
  },
  {
    "entry": "content",
    "meaning_ja": "《形容詞》《...で》満足して, 甘んじて《with ...》",
    "example_sentence": "I am content with my life.",
    "translated_sentence": "私は自分の人生に満足しています。"
  },
  {
    "entry": "limitation",
    "meaning_ja": "〈C/U〉制限するもの, 制約, 限界 / 〈U〉制限すること（されること）",
    "example_sentence": "There is a limitation on the number of participants for the event.",
    "translated_sentence": "イベントの参加者数に制限があります。"
  },
  {
    "entry": "control",
    "meaning_ja": "を支配する / 〈感情など〉を抑制する",
    "example_sentence": "The ignition of the engine is controlled by the computer.",
    "translated_sentence": "エンジンの点火はコンピュータによって制御されています。"
  },
  {
    "entry": "cope",
    "meaning_ja": "〈自〉対処する / 《難局に》対処する, 打ち勝つ 《with ...》",
    "example_sentence": "She learned how to cope with stress through meditation.",
    "translated_sentence": "彼女は瞑想を通じてストレスと上手に付き合う方法を学びました。"
  },
  {
    "entry": "counsel",
    "meaning_ja": "【名/U】協議, 相談 / 【名/U/C】助言 / 弁護士団【動/他】に助言する, に忠告する",
    "example_sentence": "I sought counsel from a lawyer before making any decisions.",
    "translated_sentence": "私は決定をする前に弁護士に助言を求めました。"
  },
  {
    "entry": "counter",
    "meaning_ja": "〈C〉(商店・銀行などの) 売り台,勘定台 /  (食堂などの)カウンター  /  (おもちゃの)模造貨幣 / 数える人 / 計算器, 計数器 / (ゲームの得点計算用)数取り,点棒",
    "example_sentence": "I need to go to the counter to check in for my flight.",
    "translated_sentence": "フライトのチェックインのためにカウンターに行かなければなりません。"
  },
  {
    "entry": "crack",
    "meaning_ja": "〈C〉割れ目, ひび / バン,ガチャッ (物が壊れたり銃声などの音)",
    "example_sentence": "I heard a loud crack coming from the tree.",
    "translated_sentence": "木から大きな割れる音が聞こえた。"
  },
  {
    "entry": "criminal",
    "meaning_ja": "〈C〉犯罪者、犯人",
    "example_sentence": "He was in reality a criminal.",
    "translated_sentence": "彼は実は犯罪者だった。"
  },
  {
    "entry": "danger",
    "meaning_ja": "〈U〉危険, おそれ / 〈C〉《...に対して》 危険を引き起こすもの, 脅威 《to ...》",
    "example_sentence": "Beware of the danger lurking in the dark alley.",
    "translated_sentence": "暗い路地に潜む危険に注意してください。"
  },
  {
    "entry": "dear",
    "meaning_ja": "親愛な,かわいい / （手紙の書き出しのあいさつの）親愛なる,尊敬する / 《...にとって》大事な《to》",
    "example_sentence": "His dear mother always supported him.",
    "translated_sentence": "彼の大切な母はいつも彼を支えていた。"
  },
  {
    "entry": "directly",
    "meaning_ja": "まっすぐに / 直接に / まさに / すぐに",
    "example_sentence": "Were you directly involved in the incident?",
    "translated_sentence": "あなたは事件に直接関与していましたか？"
  },
  {
    "entry": "director",
    "meaning_ja": "〈C〉指導者 / (会社の)重役, 取締役 / (映画・演劇・テレビ番組などの) 監督",
    "example_sentence": "The director of the company is responsible for making important decisions.",
    "translated_sentence": "会社の社長は重要な決定をする責任があります。"
  },
  {
    "entry": "literally",
    "meaning_ja": "文字通りに",
    "example_sentence": "He took her words literally.",
    "translated_sentence": "彼は彼女の言葉を文字通りに受け取った。"
  },
  {
    "entry": "dramatically",
    "meaning_ja": "劇的に, 非常に効果的に",
    "example_sentence": "The weather changed dramatically overnight.",
    "translated_sentence": "天気は一晩で劇的に変わりました。"
  },
  {
    "entry": "draw",
    "meaning_ja": "〈他〉を引く / 《副詞(句)を伴って》…を引いて(ある状態に)する / 《...から》...を引き抜く《from, out ...》 / 《...から》 〈液体など〉をくみ出す《from ...》 / 〈絵・図〉を線で描く / 〈自〉《副詞(句)を伴って》動く, 近づく / 線で書く",
    "example_sentence": "When the army drew close to the fort,",
    "translated_sentence": "軍隊が砦にはい進んだ際に"
  },
  {
    "entry": "drive",
    "meaning_ja": "〈他〉《...へ》〈動物・敵など〉を追い立てる《to ...》 / 《…から》…を押しやる《out of ...》 /  〈車・馬車〉を運転する",
    "example_sentence": "I'm going to drive to the store",
    "translated_sentence": "車で店まで行きます"
  },
  {
    "entry": "edit",
    "meaning_ja": "〈他〉を編集する / 〈原稿など〉を校訂する, 〈本など〉を監修する / 《...から》〈文章など〉を削除する《out of ...》",
    "example_sentence": "I need to edit my essay before submitting it.",
    "translated_sentence": "提出する前にエッセイを編集する必要があります。"
  },
  {
    "entry": "efficient",
    "meaning_ja": "能率的な, 効率のいい / 有能な",
    "example_sentence": "This new software is very efficient.",
    "translated_sentence": "この新しいソフトウェアは非常に能率的です。"
  },
  {
    "entry": "enable",
    "meaning_ja": "《 ~ A to do》 《Aが...することを》可能にする / 《かたく》 を可能にする",
    "example_sentence": "The scholarship enabled her to study abroad.",
    "translated_sentence": "奨学金のおかげで彼女は留学した。"
  },
  {
    "entry": "lucky",
    "meaning_ja": "幸運の,運のよい  / 幸運をもたらす",
    "example_sentence": "He was lucky to be alive.",
    "translated_sentence": "彼は生きていて幸運だった。"
  },
  {
    "entry": "essential",
    "meaning_ja": "絶対必要な, 不可欠な / 本質の, 本質的な",
    "example_sentence": "Water is essential for life.",
    "translated_sentence": "水は生命にとって不可欠です。"
  },
  {
    "entry": "even",
    "meaning_ja": "平らな；同じ高さの；同じの；偶数の",
    "example_sentence": "The chances are even.",
    "translated_sentence": "勝負の見込みは五分五分。"
  },
  {
    "entry": "everything",
    "meaning_ja": "《単数扱い》  / なんでも,何もかも,万事  / 《補語にのみ用いて》何よりも大切なもの /  / Everything is OK now. / もう大丈夫です。 / Is everything OK? / いろいろと大丈夫ですか？ / Everything will be OK. / すべてうまくいきますよ。",
    "example_sentence": "Everything will be alright.",
    "translated_sentence": "全てはうまくいくよ。"
  },
  {
    "entry": "existence",
    "meaning_ja": "〈U〉《...の》存在, 実在《of ...》 / 生存 / 〈C〉生活, 暮らし",
    "example_sentence": "The existence of aliens has been a topic of debate for many years.",
    "translated_sentence": "エイリアンの存在は長年の議論のテーマとなっています。"
  },
  {
    "entry": "expansion",
    "meaning_ja": "〈U〉拡大, 拡張 / 〈C〉拡大されたもの / 〈U/C〉(数字で)展開式",
    "example_sentence": "The expansion of the company into new markets has been successful.",
    "translated_sentence": "企業の新たな市場への拡大は成功しています。"
  },
  {
    "entry": "lunch",
    "meaning_ja": "〈U〉昼食  / 〈C〉〈U〉  / 軽食,弁当",
    "example_sentence": "Let's go out for lunch.",
    "translated_sentence": "お昼に外で食べに行こう！"
  },
  {
    "entry": "exposure",
    "meaning_ja": "【名/U】《...に》さらすこと / さらされること《to ...》 / 陳列【名/C】向き / 露出された部分",
    "example_sentence": "Exposure to sunlight can cause skin damage.",
    "translated_sentence": "日光にさらされると肌にダメージを与えることがあります。"
  },
  {
    "entry": "face",
    "meaning_ja": "〈C〉顔,表情 / 表面 / 様子 / 〈U〉面目",
    "example_sentence": "The face of the mountain was covered with snow.",
    "translated_sentence": "山の面が雪で覆われていた。"
  },
  {
    "entry": "fall",
    "meaning_ja": "落下する / 〈人・物が〉倒れる《down, over》 / 〈程度・数量・値段などが〉《…まで》下がる《to ...》 / なる, 陥る",
    "example_sentence": "I love watching the leaves fall in autumn.",
    "translated_sentence": "私は秋に葉が落ちるのを見るのが好きです。"
  },
  {
    "entry": "figure",
    "meaning_ja": "〈C〉数字 / 姿, 形, 形状 / 《修飾語句を伴って》...の人 / 図",
    "example_sentence": "She is a prominent figure in the fashion industry.",
    "translated_sentence": "彼女はファッション業界で著名な人物です。"
  },
  {
    "entry": "file",
    "meaning_ja": "〈C〉ファイル / (整理された新聞・書類などの)とじ入み / (軍事や外交等において、あるテーマを扱っている)課題・案件",
    "example_sentence": "I need to open the file.",
    "translated_sentence": "ファイルを開かなければなりません。"
  },
  {
    "entry": "final",
    "meaning_ja": "最後の；最終的な；決定的な",
    "example_sentence": "This is my final offer.",
    "translated_sentence": "これが私の最終オファーです。"
  },
  {
    "entry": "find",
    "meaning_ja": "〈他〉(偶然に) ...を見つける / を見つけ出す / 《今まで知られていない事・物》  が分かる 《out ...》",
    "example_sentence": "I found the lost key.",
    "translated_sentence": "私は失くした鍵を見つけた。"
  },
  {
    "entry": "fine",
    "meaning_ja": "(物・事が)立派な,みごとな / けっこうな, 満足できる / (人が)優れた, 立派な / (天気が)晴れた / 《補語にのみ用いて》《話》元気な, 健康な ([[well]]) / (人・衣服・態度などが)洗練された, 上品な([[refined]]) / (粒・きめなどの)細かい;細い([[thin]]) / 《名詞の前にのみ用いて》微妙な ([[delicate]]) / (物が)混じりけのない,(金・銀などが)純度…の",
    "example_sentence": "The artwork in the museum is fine.",
    "translated_sentence": "美術館の作品は立派です。"
  },
  {
    "entry": "finish",
    "meaning_ja": "(ことの)最終段階,結末 / (家具などの)表面,表面の仕上げ(手触り), 洗練 / (ニスなど)仕上げの材料 / 死, 滅亡",
    "example_sentence": "The table had a beautiful finish, with a smooth, glossy surface.",
    "translated_sentence": "テーブルは美しい仕上げが施されており、滑らかで光沢のある表面を持っていた。"
  },
  {
    "entry": "flag",
    "meaning_ja": "〈C〉(国家・団体などを象徴する) 旗 /",
    "example_sentence": "The children waved their flags to show their enthusiasm.",
    "translated_sentence": "子どもたちは熱意を表すために旗を振った。"
  },
  {
    "entry": "flat",
    "meaning_ja": "平らな / あからさまな / (料金・価格などが) 均一の / 気の抜けた",
    "example_sentence": "It was believed that the earth was flat.",
    "translated_sentence": "地球は平らだと信じられていた。"
  },
  {
    "entry": "fly",
    "meaning_ja": "ボタン隠し,ファスナー隠し(服のボタンやファスナーを隠す布) / (野球の)飛球,フライ(=[[fly ball]]) / (テントの入口の)垂れ幕 / 飛行,飛ぶこと",
    "example_sentence": "The designer added a zipper to the fly of the jeans for a modern and sleek look.",
    "translated_sentence": "デザイナーは、現代的でスマートな見た目のために、ジーンズのボタン隠しにジッパーを追加しました。"
  },
  {
    "entry": "fold",
    "meaning_ja": "〈紙など〉を折る / 〈両手など〉を組む",
    "example_sentence": "Please fold the clothes and put them in the drawer.",
    "translated_sentence": "服を折りたたんで引き出しに入れてください。"
  },
  {
    "entry": "free",
    "meaning_ja": "(束縛された状態になく)自由な / (国家・国民などが)独立している / (苦痛・制約などを) 免れている / 無料の /",
    "example_sentence": "The bird flew freely in the sky.",
    "translated_sentence": "鳥は空の中で自由に飛んでいた。"
  },
  {
    "entry": "go",
    "meaning_ja": "行く / 立ち去る / 〈事が〉運ぶ, 進展する / (ある状態に)なる / 《~ 補語》(ある状態の) ままである",
    "example_sentence": "I go to school every day.",
    "translated_sentence": "私は毎日学校に行きます。"
  },
  {
    "entry": "maker",
    "meaning_ja": "〈C〉製作者,作る人,メーカー  / 《複合語を作って》…製造業者,…屋  / 《the M-,our M-》造物主,神(God)",
    "example_sentence": "He is a talented maker.",
    "translated_sentence": "彼は才能ある製作者です。"
  },
  {
    "entry": "grant",
    "meaning_ja": "〈C〉《...への》補助金, 奨学金《to ...》 / 〈U〉《…の》授与,交付, 承認《of ...》",
    "example_sentence": "His project was funded by grants.",
    "translated_sentence": "彼のプロジェクトは助成金でまかなわれている。"
  },
  {
    "entry": "ground",
    "meaning_ja": "〈U〉《the~》地面 / 土, 土地 / 〈C〉(特定の目的のための) 場所 / 《複数形で》(建物の回りの) 庭, 構内 / 根拠 /",
    "example_sentence": "The ground was wet from the rain.",
    "translated_sentence": "雨で地面が濡れていた。"
  },
  {
    "entry": "guard",
    "meaning_ja": "〈C〉見張り, 番人 / 《英》(列車・電車の) 車掌 / 〈U〉《...を》警戒すること《against ...》",
    "example_sentence": "The security guard patrols the building every night.",
    "translated_sentence": "セキュリティーガードは毎晩ビルを巡回します。"
  },
  {
    "entry": "guide",
    "meaning_ja": "〈C〉指導者, 案内人 / 指標, 道しるべ / 旅行案内 / 《…の》手引き, 入門書《to ...》",
    "example_sentence": "The tour guide showed us around the city.",
    "translated_sentence": "ツアーガイドが私たちに街を案内してくれました。"
  },
  {
    "entry": "have",
    "meaning_ja": "【動/他】を持っている / （親類・友人など）がいる / (特質・付属物として)...を備えている / 《~ to do》...しなければならない / 【名/C】《くだけて》(財産・社会的地位などを)持っている人",
    "example_sentence": "I have a cat.",
    "translated_sentence": "私は飼っています/猫を"
  },
  {
    "entry": "heat",
    "meaning_ja": "〈U〉熱さ, 暑さ / 熱度,温度 / 暖房装置 / 熱心, 《...の》最高潮 《of ...》",
    "example_sentence": "The heat of the sun was unbearable.",
    "translated_sentence": "太陽の熱は耐えられなかった。"
  },
  {
    "entry": "hurt",
    "meaning_ja": "〈身体・身体の一部〉に苦痛を与える, 〈人〉にけがをさせる / 〈物〉に損害を与える / 〈身体の一部が〉痛む",
    "example_sentence": "He hurt himself when he fell.",
    "translated_sentence": "彼は転んだときに怪我をした。"
  },
  {
    "entry": "if",
    "meaning_ja": "《仮定・条件を表して》もし…ならば / 《譲歩を表して》たとえ…でも([[even though]]) / …するといつでも / 《間接疑問文を導いて》…かどうか",
    "example_sentence": "If you go to the store, don't forget to buy milk.",
    "translated_sentence": "もしお店に行くのなら、牛乳を買うのを忘れないでね。"
  },
  {
    "entry": "illustrate",
    "meaning_ja": "を説明する,を例証する,を例解する,を解説する / の例証として役立つ / に図解を入れる",
    "example_sentence": "This diagram will illustrate the process of photosynthesis.",
    "translated_sentence": "この図は光合成の過程を説明します。"
  },
  {
    "entry": "in",
    "meaning_ja": "《具体的な場所,位置》...の中に（で）  / ...において / 《移動を表す動詞と共に》…の中へ / (乗り物)に乗って / ...の状態に / ...に従事して / ...を身につけて / 《~ doing》…するときに / 《時間》...して, ...が経過したあと / ...の間に / ...については /《方法・手段・材料》…で",
    "example_sentence": "I left my keys in the car.",
    "translated_sentence": "私は車の中に鍵を置き忘れました。"
  },
  {
    "entry": "involve",
    "meaning_ja": "...を伴う / 《...に》〈人〉を巻き込む, ...を関与させる《in ...》 / 《Aに》を夢中にさせる《be ~ in,with A》",
    "example_sentence": "I involve myself in various activities.",
    "translated_sentence": "私はさまざまな活動に関わっています。"
  },
  {
    "entry": "issue",
    "meaning_ja": "〈C〉問題, 問題点 / 〈U〉(印刷物などの) 発行, (法令などの)発布 / 〈C〉発行物",
    "example_sentence": "The company is facing a major issue with its supply chain.",
    "translated_sentence": "会社は供給チェーンに重大な問題を抱えています。"
  },
  {
    "entry": "just",
    "meaning_ja": "ちょうど / 《完了形と共に用いて》たったいま  / 《しばしばonlyと共に用いて》 ようやく / 単に, ただ / 《命令文で》ちょっと / 《話》全く",
    "example_sentence": "He just arrived at the airport.",
    "translated_sentence": "彼は今、空港に到着した。"
  },
  {
    "entry": "lean",
    "meaning_ja": "〈建物などが〉傾く / 上体を曲げる / 《...に》もたれる 《on, upon, against ...》 / 《...のことで...に》頼る 《on, upon ... for ...》 / 〈体・頭など〉を曲げる / 《...に》...をもたれかける《against, on, upon ...》",
    "example_sentence": "She is trying to lean against the wall for support.",
    "translated_sentence": "彼女は支えとして壁に寄りかかろうとしています。"
  },
  {
    "entry": "least",
    "meaning_ja": "最も小さい, 最も少ない",
    "example_sentence": "He has the least amount of money among all his friends.",
    "translated_sentence": "彼は友達の中で一番お金が少ない。"
  },
  {
    "entry": "leave",
    "meaning_ja": "...を去る,を離れる / (学校など) をやめる / 《~ A B》 AをBのままにしておく / 《...に》 ...をゆだねる, を任せる 《to ...》 / 《...に向けて》 去る, 出発する 《for ...》",
    "example_sentence": "He left the office at 5 o'clock.",
    "translated_sentence": "彼は5時にオフィスを出た。"
  },
  {
    "entry": "level",
    "meaning_ja": "(土地などが)平らな /  同じ高さ(程度)の",
    "example_sentence": "The ground is level and easy to walk on.",
    "translated_sentence": "地面は平らで歩きやすいです。"
  },
  {
    "entry": "light",
    "meaning_ja": "〈U〉光,光線;明るさ / 〈U〉夜明け;日中;日光 / 〈C〉明かり / 〈U〉《時にa~》光輝([[brightness]]),(目などの)輝き / 〈C〉(点火するための)火,火花 / 〈C〉《通例単数形で》(絵などの)明るい部分 / 〈U〉《…についての》知識,情報,理解《on ...》 / 〈C〉(ものを見る)観点,見地 / 〈C〉この世に光を与える人;指導的な人物",
    "example_sentence": "The light from the sun is warm and comforting.",
    "translated_sentence": "太陽の光は暖かくて心地よいです。"
  },
  {
    "entry": "loan",
    "meaning_ja": "〈U〉《...の》貸し付け《of ...》 / 〈C〉貸付金, 貸与物",
    "example_sentence": "I need to apply for a loan to buy a new car.",
    "translated_sentence": "新しい車を買うためにローンを申し込む必要があります。"
  },
  {
    "entry": "me",
    "meaning_ja": "私を(に)  / 《話》私(=I)",
    "example_sentence": "Can you help me?",
    "translated_sentence": "私を助けてくれますか？"
  },
  {
    "entry": "maximum",
    "meaning_ja": "〈C〉(量・数・程度の) 最大限",
    "example_sentence": "This hall holds a maximum of 1,000 people.",
    "translated_sentence": "このホールは最大で１０００人収容できる。"
  },
  {
    "entry": "look",
    "meaning_ja": "〈自〉(ある状態に)見える / 〈他〉をじっと見る",
    "example_sentence": "Look at the beautiful sunset!",
    "translated_sentence": "美しい夕日を見てごらん！"
  },
  {
    "entry": "measurement",
    "meaning_ja": "〈U〉測定〈C〉寸法〈U〉測定法",
    "example_sentence": "I need to take a measurement of the room before buying furniture.",
    "translated_sentence": "家具を買う前に部屋の寸法を測らなければなりません。"
  },
  {
    "entry": "mechanism",
    "meaning_ja": "〈C〉機械;(部分的な)機械装置  / 〈C〉(機械装置に似た)機構  / 〈C〉(物事が行われる)仕組み,方法  / 〈U〉機械論",
    "example_sentence": "The mechanism of the clock is very intricate.",
    "translated_sentence": "時計の仕組みは非常に複雑です。"
  },
  {
    "entry": "medical",
    "meaning_ja": "医学の,医術の;医者の  / 内科の;内科治療を要する  / 診察",
    "example_sentence": "He is studying medical science at university.",
    "translated_sentence": "彼は大学で医学を勉強しています。"
  },
  {
    "entry": "menu",
    "meaning_ja": "(レストランの)メニュー,献立表  / 料理",
    "example_sentence": "Can I see the menu, please?",
    "translated_sentence": "メニューを見せてもらえますか？"
  },
  {
    "entry": "mile",
    "meaning_ja": "〈C〉マイル(長さの単位;1609メートル)  / 《the ~》1マイル競走(mile race)  / 〈C〉《複数形で》《話》長い距離;多量,たくさん",
    "example_sentence": "I ran a mile today.",
    "translated_sentence": "今日、私は1マイル走りました。"
  },
  {
    "entry": "military",
    "meaning_ja": "軍隊の,軍人の,戦争の  / 軍隊(陸・海・空軍を含む)(the armed forces)",
    "example_sentence": "The military conducted a training exercise.",
    "translated_sentence": "軍隊は訓練演習を行った。"
  },
  {
    "entry": "mark",
    "meaning_ja": "〈C〉《…の表面についた》 跡 《on ...》 / 印, 記号 / 《おもに英》(学業などの)点数 / (ある性質の) 徴候, 特徴 / (思想・生活などに及ぼす) 影響 / 的, 標的",
    "example_sentence": "Mark your calendar for the upcoming event.",
    "translated_sentence": "今後のイベントのためにカレンダーに印をつけてください。"
  },
  {
    "entry": "minimum",
    "meaning_ja": "《通例単数形で》最小限,最小量  / (数学で)極小,最小値,極小値",
    "example_sentence": "The damage was held to a minimum.",
    "translated_sentence": "被害は最小限に食い止められた。"
  },
  {
    "entry": "master",
    "meaning_ja": "主人,雇主 / 精通者,師匠",
    "example_sentence": "The dog obeyed its master's commands.",
    "translated_sentence": "犬は主人の命令に従った。"
  },
  {
    "entry": "match",
    "meaning_ja": "〈C〉(1本の)マッチ /  (昔の)火縄[銃]",
    "example_sentence": "I found a match in my pocket.",
    "translated_sentence": "ポケットの中にマッチを見つけました。"
  },
  {
    "entry": "dust",
    "meaning_ja": "〈U〉ちり,ほこり  / 《a ~》土煙,砂ぼこり  / 〈U〉粉末,粉  / 《the ~》《文》遺骨,なきがら  / 〈U〉(死後の)土  / 〈U〉屈辱,恥  / 〈U〉つまらぬもの",
    "example_sentence": "I need to clean the dust off the shelves.",
    "translated_sentence": "棚の上のちりを掃除しなければならない。"
  },
  {
    "entry": "emotion",
    "meaning_ja": "強い感情,感動,感激  / (喜怒哀楽などの)感情,情緒",
    "example_sentence": "She expressed her emotion through tears.",
    "translated_sentence": "彼女は涙で自分の感情を表現した。"
  },
  {
    "entry": "enemy",
    "meaning_ja": "敵  / 《the~》《集合的に;《米》では単数扱い,《英》では単数・複数扱い》敵兵,敵軍;敵国  / (…を)害するもの,(…の)敵《+to(of)+名》",
    "example_sentence": "He considered her his worst enemy.",
    "translated_sentence": "彼は彼女を自分の最大の敵とみなしていた。"
  },
  {
    "entry": "environment",
    "meaning_ja": "環境,周囲の状況;《the~》自然環境",
    "example_sentence": "We should all take responsibility for protecting the environment.",
    "translated_sentence": "私たちはみんな環境を守る責任を持つべきです。"
  },
  {
    "entry": "encourage",
    "meaning_ja": "勇気づける； 励ます； 奨励する",
    "example_sentence": "I encourage you to pursue your dreams.",
    "translated_sentence": "私はあなたに夢を追求するように勧めます。"
  },
  {
    "entry": "exam",
    "meaning_ja": "〈C〉試験 , テスト /（医師の）検査, 診断",
    "example_sentence": "I have an exam tomorrow.",
    "translated_sentence": "明日、試験があります。"
  },
  {
    "entry": "professional",
    "meaning_ja": "《名詞の前にのみ用いて》専門職の;(一般に)職業の  / 《名詞の前にのみ用いて》専門職に従事する;専門食の訓練を受けた  / (また《話》pro)本職の,プロの",
    "example_sentence": "He is a professional basketball player.",
    "translated_sentence": "彼はプロのバスケットボール選手です。"
  },
  {
    "entry": "may",
    "meaning_ja": "《推量》...かもしれない / 《許可》...してもよい / 《容認》...しても差し支えない / 《能力》...できる / 《文・願望》...しますように",
    "example_sentence": "She may come to the party tonight.",
    "translated_sentence": "彼女は今夜のパーティーに来るかもしれません。"
  },
  {
    "entry": "meet",
    "meaning_ja": "〈他〉に出会う / (紹介されて) ...と知り合いになる / 〈人〉と会う / 〈人〉を出迎える / 〈自〉会う / 〈人が〉会合する / 〈物が〉接触する /",
    "example_sentence": "I will meet you at the station.",
    "translated_sentence": "駅であなたに会いに行きます。"
  },
  {
    "entry": "might",
    "meaning_ja": "《仮定法で》  《現在の事実と反対の仮定》…かもしれないのだが / 《過去の反対の推量》…したかもしれない / 《可能性・推量》ひょっとしたら...かもしれない / 《許可》…してもよい / 《提案・依頼》…してくれませんか / 《非難・不平》…してもよさそうなものだ",
    "example_sentence": "I might go to the party tonight.",
    "translated_sentence": "今夜、パーティーに行くかもしれない。"
  },
  {
    "entry": "retire",
    "meaning_ja": "(…から)引退する,退職する《+from+名》  / 就寝する,床につく  / (…へ)引きこもる,退く,立ち去る《+to+名》  / (…から)…‘を'引退(退職)させる《+名+from+名》  / (野球で)〈打者〉‘を'アウトにする",
    "example_sentence": "He decided to retire from his job after working for 40 years.",
    "translated_sentence": "彼は40年間働いた後、仕事を引退することを決めました。"
  },
  {
    "entry": "notice",
    "meaning_ja": "〈U〉人目を引くこと / 通告, 通知 / 〈C〉《...の》提示《of ...》",
    "example_sentence": "Stick a notice on the board.",
    "translated_sentence": "掲示板に注意事項を貼ります。"
  },
  {
    "entry": "one",
    "meaning_ja": "『1個の』,一人の,単一の;《補語にのみ用いて》1歳の / 《時を表す名詞と共に》『ある…』 / 《人名に付けて》…という[名の]人 / 同一の,同じ([[the same]]) / 《theまたは所有格を付けて》たった一つの,唯一の / 《[[another]], [the] [[other]]と対比して》一方の",
    "example_sentence": "The restaurant only had one table available.",
    "translated_sentence": "レストランには1つのテーブルしか空いていませんでした。"
  },
  {
    "entry": "shelf",
    "meaning_ja": "たな  / (がけの)岩だな;(海・川の)砂州,岩礁",
    "example_sentence": "The books are neatly arranged on the shelf.",
    "translated_sentence": "本がきちんと棚に並べられている。"
  },
  {
    "entry": "order",
    "meaning_ja": "〈C〉命令 / 〈U〉(物事の) 順序 / 秩序 / 整頓された状態 / (物事の) 調子 / (商品などの) 注文 /",
    "example_sentence": "I placed an order for a new pair of shoes.",
    "translated_sentence": NaN
  },
  {
    "entry": "slave",
    "meaning_ja": "奴隷(どれい)  / (欲望・習慣・職業などの)とりこ,(…に)ふける人《+of(to)+名》,(他人のために)あくせく働く人  / (奴隷のように)あくせく働く《+away》",
    "example_sentence": "She was born into a family of slaves.",
    "translated_sentence": "彼女は奴隷の家族に生まれました。"
  },
  {
    "entry": "social",
    "meaning_ja": "社会の,社会的な  / 社交界の,上流社会の  / 《名詞の前にのみ用いて》社交の,親睦(しんぼく)の  / (アリ・ハチなどが)群居する  / 親睦(しんぼく)会,懇親会",
    "example_sentence": "He is a very social person.",
    "translated_sentence": "彼はとても社交的な人です。"
  },
  {
    "entry": "solid",
    "meaning_ja": "固体の,固形の  / うつろでない,中身のつまった  / (物質の)密度が高い,密な;(印刷の)行の詰まった  / 《名詞の前にのみ用いて》混じりもののない,純正の  / (構造的に)堅固な  / (人が)信頼できる,堅実な  / 健全な,しっかりした  / 一致した,団結した  / (時間が)まるまる,切れ目のない;(物が)連続した  / 三次元の,立体の,立方の",
    "example_sentence": "This bed looks solid.",
    "translated_sentence": "このベッドは頑丈そうです。"
  },
  {
    "entry": "own",
    "meaning_ja": "自分自身の, それ自身の, 特有の",
    "example_sentence": "He has an own car.",
    "translated_sentence": "彼は自分の車を持っている。"
  },
  {
    "entry": "particularly",
    "meaning_ja": "特に / 詳細に / 個々に",
    "example_sentence": "I am particularly interested in learning new languages.",
    "translated_sentence": "私は特に新しい言語を学ぶことに興味があります。"
  },
  {
    "entry": "trial",
    "meaning_ja": "〈U/C〉裁判, 審理 / 《...の》試験, 試し《of ...》 / 〈C〉試み / 試練 / 困りもの, 厄介なもの",
    "example_sentence": "The trial lasted for several weeks.",
    "translated_sentence": "裁判は数週間続いた。"
  },
  {
    "entry": "peak",
    "meaning_ja": "〈C〉(とがった)山頂  / とがった先, 先端",
    "example_sentence": "The hikers reached the peak of the mountain after a long and challenging climb.",
    "translated_sentence": "ハイカーたちは、長くて困難な登山の後、山の頂上に到達しました。"
  },
  {
    "entry": "unlikely",
    "meaning_ja": "《補語にのみ用いて》ありそうもない,考えられない  / うまくいきそうもない,見込み(将来性)のない",
    "example_sentence": "It is unlikely that he will win the lottery.",
    "translated_sentence": "彼が宝くじに当たる可能性はありそうもない。"
  },
  {
    "entry": "pipe",
    "meaning_ja": "〈C〉管 / パイプ",
    "example_sentence": "The plumber fixed the broken pipe.",
    "translated_sentence": "配管工は壊れたパイプを修理しました。"
  },
  {
    "entry": "debate",
    "meaning_ja": "〈C〉〈U〉討論, 論争",
    "example_sentence": "The students had a lively debate about the topic.",
    "translated_sentence": "生徒たちはそのトピックについて活発な討論を行った。"
  },
  {
    "entry": "device",
    "meaning_ja": "工夫,案 / 《しばしば複数形で》策略  / 《…の》考案物;装置,仕掛け《for ...》  / (紋章などの)図案,意匠  / (文学的効果を上げるための)工夫された表現",
    "example_sentence": "I need to buy a new device for my computer.",
    "translated_sentence": "私はコンピューター用の新しい装置を買う必要があります。"
  },
  {
    "entry": "devote",
    "meaning_ja": "〈生涯・労力・時間など〉‘を'ささげる,あてる:《devote+名+to+名(doing)…に…をささげる》",
    "example_sentence": "She devoted her life to helping others.",
    "translated_sentence": "彼女は他人を助けるために生涯をささげました。"
  },
  {
    "entry": "disk",
    "meaning_ja": "円盤;円盤の表面  / 植物,動物の平たく丸い組織・部分;椎間板(ついかんばん)  / (数学で)円板(円によって囲まれた範囲)  / レコード",
    "example_sentence": "I need to clean the disk before using it.",
    "translated_sentence": "使う前にディスクをきれいにする必要があります。"
  },
  {
    "entry": "electronic",
    "meaning_ja": "電子の,エレクトロンの",
    "example_sentence": "I bought a new electronic device.",
    "translated_sentence": "私は新しい電子機器を買いました。"
  },
  {
    "entry": "overcome",
    "meaning_ja": "(試合・戦闘などで)…‘に'打ち勝つ,‘を'圧倒する(conquer)  / 〈困難・障害・恐怖心など〉‘に'打ち勝つ,‘を'克服する,乗り越える  / 《通例受動態で》〈人〉‘を'参らせる,へとへとにさせる",
    "example_sentence": "He was able to overcome his fear and give a great performance.",
    "translated_sentence": "彼は恐怖心に打ち勝ち、素晴らしいパフォーマンスを披露することができました。"
  },
  {
    "entry": "portrait",
    "meaning_ja": "(…の)肖像画,肖像(人物)写真《+of+名》  / (人物などの)言葉による描写《+of+名》",
    "example_sentence": "She sat still for hours while the artist painted her portrait.",
    "translated_sentence": "彼女は芸術家が彼女の肖像画を描く間、何時間もじっと座っていました。"
  },
  {
    "entry": "route",
    "meaning_ja": "道,道筋,経路 / 路線",
    "example_sentence": "The route to the summit is quite challenging.",
    "translated_sentence": "山頂への道はかなり挑戦的です。"
  },
  {
    "entry": "sample",
    "meaning_ja": "(…の)見本,標本《+of+名》  / (…の)実例(example)《+of+名》  / (無料で進呈する)試供品,サンプル  / 見本の,標本の  / …‘の'見本をとる;(見本をとって)…‘を'試す(調べる,判断する)  / …‘を'実際に試す",
    "example_sentence": "This is a sample of the new product.",
    "translated_sentence": "これは新製品の見本です。"
  },
  {
    "entry": "pitch",
    "meaning_ja": "〈他〉を投げる / (一時的に)〈キャンプなど〉を設営する /短いプレゼンをする 〈自〉落ちる,倒れる",
    "example_sentence": "The farmer pitched the hay onto the wagon.",
    "translated_sentence": "農夫は荷馬車の上へ干し草を放り上げた。"
  },
  {
    "entry": "plain",
    "meaning_ja": "はっきり見える, 聞こえる / はっきり理解できる / 質素な",
    "example_sentence": "Explain it in plain words.",
    "translated_sentence": "わかりやすい言葉で説明してください。"
  },
  {
    "entry": "tube",
    "meaning_ja": "(金属・ガラス・ゴムなどの)管,筒  / (絵の具・歯みがきなどの)チューブ  / 《米》(列車・地下鉄の)トンネル  / 《英》地下鉄(《米》subway)  / (ラジオ・テレビなどの)真空管(vacuum tube)  / (動植物の)管状器官",
    "example_sentence": "The tube was too narrow for me to fit through.",
    "translated_sentence": "チューブは狭すぎて私には通れませんでした。"
  },
  {
    "entry": "ultimately",
    "meaning_ja": "最後に,ついに,結局 / 根源的に,根本的に / 《文修飾》最終的には,究極的には",
    "example_sentence": "He ultimately decided to pursue a career in medicine.",
    "translated_sentence": "彼は最終的に医学のキャリアを追求することを決めた。"
  },
  {
    "entry": "technical",
    "meaning_ja": "専門の / 工業の / 技術の, 技術上の",
    "example_sentence": "He has a technical background.",
    "translated_sentence": "彼は専門的なバックグラウンドを持っています。"
  },
  {
    "entry": "urban",
    "meaning_ja": "都会の / 都会に住む",
    "example_sentence": "She loves the urban lifestyle.",
    "translated_sentence": "彼女は都会のライフスタイルが大好きです。"
  },
  {
    "entry": "rice",
    "meaning_ja": "米(欧米ではプディングやケーキの原料にも用いる)  / イネ(稲)",
    "example_sentence": "I ate some rice for lunch.",
    "translated_sentence": "昼食にごはんを食べた。"
  },
  {
    "entry": "wet",
    "meaning_ja": "ぬれた,湿った,乾いていない  / 雨でぬれた;雨降りの  / 《米》非(反)禁酒主義の  / 《英話》《軽べつして》(人が)気が弱い,湿っぽい,からっとしていない  / 《the wet》(特に雨後の)湿った地面  / 《the wet》雨;雨天  / 《しばしば a wet》《英俗》酒  / …‘を'ぬらす,湿らせる",
    "example_sentence": "I forgot my umbrella and got wet in the rain.",
    "translated_sentence": "傘を忘れて雨にぬれた。"
  },
  {
    "entry": "point",
    "meaning_ja": "〈C〉主張, 指摘 /  《物語・議論などの》要点, 核心《in ...》 / 先端 / (ある特定の)地点 / (計器の目盛りなどの)点, 度 / 《...の》目的, 意義 《of, in ...》",
    "example_sentence": "How many points did you get?",
    "translated_sentence": NaN
  },
  {
    "entry": "pool",
    "meaning_ja": "〈C〉(特に,自然にできた) 水たまり / 《水以外の液体の》たまり 《of ...》 / 水泳プール",
    "example_sentence": "I love swimming in the pool during the summer.",
    "translated_sentence": "夏にプールで泳ぐのが大好きです。"
  },
  {
    "entry": "pose",
    "meaning_ja": "〈C〉ポーズ, 姿勢 / 見せかけ,気どり",
    "example_sentence": "She struck a pose for the camera.",
    "translated_sentence": "彼女はカメラに向かってポーズをとった。"
  },
  {
    "entry": "pot",
    "meaning_ja": "〈C〉つぼ, 鍋 / (つぼ・なべなどの)1杯分",
    "example_sentence": "I put the soup in the pot.",
    "translated_sentence": "私はスープを鍋に入れました。"
  },
  {
    "entry": "predict",
    "meaning_ja": "〈他〉(知識・経験などで)を予報する, を予想する, を予言する",
    "example_sentence": "Scientists predict that there will be a major earthquake in this region within the next decade.",
    "translated_sentence": "科学者たちは、この地域で次の10年以内に大地震が起こると予測しています。"
  },
  {
    "entry": "present",
    "meaning_ja": "〈C〉贈り物,プレゼント([[gift]]) / 〈U〉《the》ささげ銃(つつ)の姿勢",
    "example_sentence": "I received a beautiful present for my birthday.",
    "translated_sentence": "私は誕生日に素敵な贈り物をもらいました。"
  },
  {
    "entry": "proof",
    "meaning_ja": "〈U〉証拠,証明 / 〈C〉試験",
    "example_sentence": "I have no proof to the contrary.",
    "translated_sentence": "私にはそうではないという証拠はない。"
  },
  {
    "entry": "prove",
    "meaning_ja": "〈他〉を証明する / を試す / 《~ to be ...》...と証明される, ...とわかる / ...であると判明する",
    "example_sentence": "He needs to prove his innocence in court.",
    "translated_sentence": "彼は裁判で自分の無実を証明する必要がある。"
  },
  {
    "entry": "pump",
    "meaning_ja": "〈C〉ポンプ",
    "example_sentence": "The human heart is analogous to a pump.",
    "translated_sentence": "心臓とポンプは似かよっている。"
  },
  {
    "entry": "rank",
    "meaning_ja": "〈U〉〈C〉階級 / (相対的な)順位, 地位 / (人・物の) 列, 並び",
    "example_sentence": "He achieved the highest rank in his class.",
    "translated_sentence": "彼はクラスで最高のランクを達成しました。"
  },
  {
    "entry": "reach",
    "meaning_ja": "〈他〉〈場所・目的地〉に着く,に到着する / 〈人,人の耳など〉に届く / 〈ある年齢・状態など〉に達する / 〈手など〉を差し出す,を伸ばす《out》 / 〈物〉を手を伸ばして取る / 〈自〉《...に》手を伸ばす《out to ...》",
    "example_sentence": "I reached the top of the mountain.",
    "translated_sentence": "私は山の頂上に到達しました。"
  },
  {
    "entry": "rear",
    "meaning_ja": "【動/他】〈子供〉を養育する / 〈動植物〉を育てる / 〈頭など〉をまっすぐにする,立てる / 《文》〈建物など〉を建てる / 【動/自】〈馬などが〉後ろ足で立つ",
    "example_sentence": "Rearing a child calls for perseverance.",
    "translated_sentence": "子供を育てるには忍耐が必要です。"
  },
  {
    "entry": "regard",
    "meaning_ja": "〈他〉《...と》 ...をみなす 《as ...》 / を注視する / を尊重する / を考慮に入れる, に注意を払う",
    "example_sentence": "I regard him as a close friend.",
    "translated_sentence": "私は彼を親友とみなしています。"
  },
  {
    "entry": "registration",
    "meaning_ja": "〈U〉《...に》登録すること / 《...の》登録《of》 / 〈C〉登録証明書",
    "example_sentence": "I completed the registration process.",
    "translated_sentence": "私は登録手続きを完了しました。"
  },
  {
    "entry": "relate",
    "meaning_ja": "...を物語る / 《...と》を関連させる《to,with ...》 / 《...に》関係がある《to,with ...》 / 共感を覚える",
    "example_sentence": "The movie relates the story of a young girl who overcomes adversity.",
    "translated_sentence": "この映画は逆境を乗り越える少女の物語です。"
  },
  {
    "entry": "resign",
    "meaning_ja": "〈自〉辞職する, 辞任する / 《...を》 辞める 《from , as ...》 / 〈他〉を辞職する",
    "example_sentence": "He decided to resign from his job.",
    "translated_sentence": "彼は仕事を辞めることを決めた。"
  },
  {
    "entry": "resistance",
    "meaning_ja": "〈U〉〈C〉《...に》 抵抗すること,反抗すること, こらえること 《to, against ...》 / 抵抗運動 / 〈U〉抵抗力",
    "example_sentence": "The resistance of the material determines its durability.",
    "translated_sentence": "材料の抵抗力がその耐久性を決定します。"
  },
  {
    "entry": "resolve",
    "meaning_ja": "〈他〉を 決心する, を決意する / （問題・疑惑など）を 解決する, を解明する / を 議決する / 〈自〉《...を》決定する , 決心する 《on, against ...》 / 《...に》 分解する 《into ...》",
    "example_sentence": "They resolved to work harder.",
    "translated_sentence": "彼らはもっと一生懸命に働こうと決心した。"
  },
  {
    "entry": "result",
    "meaning_ja": "〈U〉〈C〉結果 / 《複数形で》(試験・競技などの) 成績",
    "example_sentence": "The result of the experiment was surprising.",
    "translated_sentence": "実験の結果は驚きだった。"
  },
  {
    "entry": "review",
    "meaning_ja": "〈C〉《…の》再調査,再検討;《米》復習 《of ...》 /  〈U〉〈C〉回顧,反省  / 〈C〉批評, 評論 / 〈C〉観兵式",
    "example_sentence": "I wrote a review of the new movie.",
    "translated_sentence": "新しい映画のレビューを書きました。"
  },
  {
    "entry": "right",
    "meaning_ja": "【動/他】〈誤りなど〉を正す",
    "example_sentence": "I can't seem to right the wrongs of my past.",
    "translated_sentence": "私は過去の失敗を正すことができない。"
  },
  {
    "entry": "ring",
    "meaning_ja": "〈自〉〈鐘・ベルなどが〉鳴る / 〈他〉〈鐘・ベルなど〉を鳴らす /  〈人〉を(鐘などを)鳴らして呼ぶ",
    "example_sentence": "The church bells ringing in the distance.",
    "translated_sentence": "教会の鐘の音が遠くから聞こえてきた。"
  },
  {
    "entry": "round",
    "meaning_ja": "...を回って / ...の周囲に",
    "example_sentence": "She walked round the park.",
    "translated_sentence": "彼女は公園を回って歩いた。"
  },
  {
    "entry": "rush",
    "meaning_ja": "〈自〉突進する, 急いで動く / 《...を》性急にする, 軽率にする《to, at ... / into doing》 / 〈他〉を急いで送る / を性急にする, を軽率にする",
    "example_sentence": "I need to rush to catch my flight.",
    "translated_sentence": "飛行機に間に合うために急がなければならない。"
  },
  {
    "entry": "scale",
    "meaning_ja": "〈C〉《しばしば複数形で》てんびん,はかり / てんびんのさら / 【動/他】《重量を表す副詞を伴って》…の体重がある / …をてんびんではかる",
    "example_sentence": "The scale of the universe is mind-boggling.",
    "translated_sentence": "宇宙のスケールは驚くべきものです。"
  },
  {
    "entry": "seal",
    "meaning_ja": "〈C〉公印 / 印章, 印鑑 / (封書などの)封印 / 装飾シール,ステッカー /",
    "example_sentence": "The seal swam gracefully in the water.",
    "translated_sentence": "アザラシは水中で優雅に泳いでいました。"
  },
  {
    "entry": "secure",
    "meaning_ja": "安定した, 確実性のある / 安全な",
    "example_sentence": "I feel secure knowing that my house has a security system.",
    "translated_sentence": "私の家にセキュリティシステムがあると安心です。"
  },
  {
    "entry": "serve",
    "meaning_ja": "〈他〉〈人〉に仕える / (公職・兵役などで)〈ある期間〉を勤める / 〈判決・刑罰など〉に服する / 〈食事・飲物など〉を出す / 【動/自】《…として…のもとで》 仕える《under, at, on ... as ...》  / 役立つ / 給仕をする",
    "example_sentence": "The waiter will serve the food to the customers.",
    "translated_sentence": "ウェイターは食べ物をお客さんに提供します。"
  },
  {
    "entry": "shade",
    "meaning_ja": "陰,日よけ,陰影,濃淡,色合い",
    "example_sentence": "The tall trees provided shade from the hot sun.",
    "translated_sentence": "高い木々は熱い太陽から日陰を提供していた。"
  },
  {
    "entry": "shall",
    "meaning_ja": "《単純未来》 ...でしょう / ...でしょうか / 《~ have 過分》 ...してしまっているでしょう / 《意志未来》 ...するぞ / ...させてやる / ...しましょうか, ...させましょうか",
    "example_sentence": "I shall go to the store tomorrow.",
    "translated_sentence": "明日、私は店に行くつもりです。"
  },
  {
    "entry": "shift",
    "meaning_ja": "〈他〉〈人・場所・位置など〉を移し替える / 〈自〉《...へ》 変わる 《to ...》",
    "example_sentence": "I need to shift my focus to a different project.",
    "translated_sentence": "別のプロジェクトに焦点を移す必要があります。"
  },
  {
    "entry": "shot",
    "meaning_ja": "〈C〉《...を狙った》発砲,発射, 銃声《at ...》 / 弾丸,たま / 一打ち / 《...に対する》試み《at ...》 / 《...に対する》当て推量《at ...》 / 〈U〉射程,着弾距離",
    "example_sentence": "He took a shot and scored a goal.",
    "translated_sentence": "彼はシュートを打ってゴールを決めた。"
  },
  {
    "entry": "society",
    "meaning_ja": "〈U〉〈C〉社会 / 〈U〉〈C〉(特定の利害・文化を共にする人間の) 会, 協会 / 〈U〉上流社会, 上流社会の人々 / 【形】上流社会の,社交界の",
    "example_sentence": "The society we live in is constantly changing.",
    "translated_sentence": "私たちが生活する社会は常に変化しています。"
  },
  {
    "entry": "somehow",
    "meaning_ja": "どうにかして, なんとか / 《おもに話》どういうわけか",
    "example_sentence": "Somehow, I managed to finish the project on time.",
    "translated_sentence": "どうにかして、私はプロジェクトを時間通りに終わらせることができました。"
  },
  {
    "entry": "sound",
    "meaning_ja": "〈C〉〈U〉音, 音響",
    "example_sentence": "The sound of waves crashing against the shore is so soothing.",
    "translated_sentence": "波が岸に打ち寄せる音はとても心地よい。"
  },
  {
    "entry": "spell",
    "meaning_ja": "〈C〉呪文, まじない / 魔法にかかった状態,呪縛  / 《単数形で》魅力,魔力",
    "example_sentence": "The sorceress cast a powerful spell.",
    "translated_sentence": "女魔法使いは強力な呪文を唱えた。"
  },
  {
    "entry": "stamp",
    "meaning_ja": "切手,判,足踏み　",
    "example_sentence": "I need to buy a stamp to send this letter.",
    "translated_sentence": "この手紙を送るために切手を買わなければなりません。"
  },
  {
    "entry": "stand",
    "meaning_ja": "〈C〉立つこと / 台 / 売店 / 観覧席",
    "example_sentence": "I'm waiting at the bus stand.",
    "translated_sentence": "バス停で待っています。"
  },
  {
    "entry": "steady",
    "meaning_ja": "むらのない / ぐらつかない / 変わらない",
    "example_sentence": "He maintained a steady pace throughout the race.",
    "translated_sentence": "彼はレース全体を一定のペースで維持しました。"
  },
  {
    "entry": "strain",
    "meaning_ja": "〈他〉を引っ張る / を痛める / を最大限に働かせる / をろ過する / 圧迫する / 〈自〉全力を尽くす",
    "example_sentence": "His weight strained the rope.",
    "translated_sentence": "彼の重さでロープがぴんと張った。"
  },
  {
    "entry": "tap",
    "meaning_ja": "軽く打つこと",
    "example_sentence": "I tapped on the screen to open the app.",
    "translated_sentence": "私はアプリを開くために画面をタップしました。"
  },
  {
    "entry": "through",
    "meaning_ja": "《運動や状態の変化を表す動詞とともに》(一方の端から他方へ) …を貫いて,通って / 《場所》…の中を, ...じゅうに /  《期間》…じゅうずっと / 《手段・原因》 ...によって / 《完了・終了》…を終わって / 《貫通・通過》…を貫いて,通って",
    "example_sentence": "He walked through the forest.",
    "translated_sentence": "彼は森を貫いて歩いた。"
  },
  {
    "entry": "too",
    "meaning_ja": "…もまた,その上  / あまりにも,過度に,必要以上に  / 非常に,大変,はなはだ(very, extremely)  / 《話》《相手の否定の言葉に,肯定で応じて》ところがどうして",
    "example_sentence": "He worked too hard.",
    "translated_sentence": "彼はあまりにもハードに働いた。"
  },
  {
    "entry": "top",
    "meaning_ja": "〈C〉《the ~》いちばん上の部分 / 《the ~》《...の》最上面 《of ...》 / 《the ~》《…の》最高位, 首位《of ...》 /  《the ~》《…の》最高の程度,頂点《of ...》",
    "example_sentence": "They stood on the top of the hill.",
    "translated_sentence": "彼らは丘の頂上に立った。"
  },
  {
    "entry": "treat",
    "meaning_ja": "〈他〉(人など) を扱う / 《...と》 ...を見なす 《as ...》 / (問題など)を扱う, を論じる / (病人・病気など)を治療する / 〈自〉扱う / おごる",
    "example_sentence": "I like to treat myself to a spa day every once in a while.",
    "translated_sentence": "たまには自分へのご褒美にスパに行くのが好きなんだ。"
  },
  {
    "entry": "trust",
    "meaning_ja": "〈他〉を信頼する, を信用する / ...と期待する《that ...》 / 《...に》...を任せる",
    "example_sentence": "Trust is the foundation of any strong relationship.",
    "translated_sentence": "信頼は強い関係の基盤です。"
  },
  {
    "entry": "use",
    "meaning_ja": "〈他〉(道具など) を使う / を費やす / 《副詞を伴って》 (人など) を扱う",
    "example_sentence": "I use a computer every day.",
    "translated_sentence": "私は毎日パソコンを使っている。"
  },
  {
    "entry": "value",
    "meaning_ja": "〈U〉《...の》価値, 重要性《of ...》 / 〈U〉〈C〉《...の》 価格, 値段 《of ...》",
    "example_sentence": "The value of hard work cannot be underestimated.",
    "translated_sentence": "努力の価値は過小評価できない。"
  },
  {
    "entry": "wander",
    "meaning_ja": "あてもなく歩き回る,さまよう / 《道・主題から》それる, はずれる《from ...》",
    "example_sentence": "She likes to wander around the city, exploring new places.",
    "translated_sentence": "彼女は街を歩き回り、新しい場所を探検するのが好きです。"
  },
  {
    "entry": "wear",
    "meaning_ja": "〈他〉〈服・装飾品など〉を身につけている / 〈ある表情・態度など〉を示している / (使用して)…をすり減らす / 〈自〉すり減る / 〈品物などが〉長もちする /",
    "example_sentence": "I wear my new clothes to the party.",
    "translated_sentence": "パーティーには新しい服を着て行きました。"
  },
  {
    "entry": "well",
    "meaning_ja": "『よく』,満足に,申し分なく / じょうずに,うまく,巧みに / 『十分に』,全く / 《他の副詞または前置詞句と共に用いて》『相当に』,かなり / (個人的に)親しく,親密に / 《can't, couldn't と共に用いて》『正当に』,適切に / はっきりと,確かに,全く / 親切に,好意的に",
    "example_sentence": "She speaks English well.",
    "translated_sentence": "彼女は英語を上手に話す。"
  },
  {
    "entry": "wonder",
    "meaning_ja": "〈C〉驚くべきもの / 〈U〉驚異の念",
    "example_sentence": "The Pharos was one of the Seven Wonders of the Ancient World.",
    "translated_sentence": "ファロスは古代世界の七不思議のひとつである。"
  },
  {
    "entry": "would",
    "meaning_ja": "…だろう / …するつもりである / 《過去の想像・推定》…だったろう / 《過去における主語の強い意志・固執》どうしても…しようとした / 《過去における習慣・動作の反復》…したものだった / 《控え目な表現・丁寧な表現として》たぶん…だろう / 《人の特性・癖》きまって…する / 《願望を表す動詞の目的語節において》(願わくは)…であるよう",
    "example_sentence": "I would like to go to the beach tomorrow.",
    "translated_sentence": "明日、ビーチに行きたいです。"
  },
  {
    "entry": "medium",
    "meaning_ja": "中間の, 並みの",
    "example_sentence": "I prefer to cook my steak to a medium level of doneness.",
    "translated_sentence": "私はステーキをミディアムレアで調理するのが好きです。"
  },
  {
    "entry": "matter",
    "meaning_ja": "〈U〉物質 / 〈C〉(論議・関心の的となる) 事柄, 問題 / 〈U〉重大事",
    "example_sentence": "The matter is still under investigation.",
    "translated_sentence": "この件はまだ調査中です。"
  },
  {
    "entry": "ask",
    "meaning_ja": "〈他〉〈事〉について質問する, を尋ねる / 《...について》〈人〉に質問する《about ...》 / 〈事〉を頼む / 《...を》〈人〉に頼む 《for ...》 / 〈自〉《...について》質問する《about ...》",
    "example_sentence": "I asked her to join us for dinner.",
    "translated_sentence": "彼女に夕食に付き合ってもらうように頼んだ。"
  },
  {
    "entry": "train",
    "meaning_ja": "〈C〉列車, 電車",
    "example_sentence": "I take a train to school every day.",
    "translated_sentence": "毎日学校へは電車で行きます。"
  },
  {
    "entry": "violence",
    "meaning_ja": "暴力,乱暴  / (…の)激しさ,猛烈さ,すさまじさ《+of+名》  / 害,損害",
    "example_sentence": "The movie contains scenes of violence.",
    "translated_sentence": "その映画には暴力のシーンが含まれています。"
  },
  {
    "entry": "so",
    "meaning_ja": "《様態の指示》そういうふうに / 《補語に用いて》そのようで / 《程度》それほど / 《強意として》《話》非常に,とても / 《前に述べたことの内容に対する同意を表して;「~ 主語 [助]動詞」》その通りで, 確かに / 《肯定文を受けて;「~ [助]動詞 主語」の語順で》…もまた,も同様に / 《目的を表して》…するように",
    "example_sentence": "She spoke so softly that I could barely hear her.",
    "translated_sentence": "彼女はとても小さめに話したので、ほとんど聞こえなかった。"
  },
  {
    "entry": "recall",
    "meaning_ja": "呼び戻す, 召還する / 思い出す / 回収する / 取り消す, 撤回する",
    "example_sentence": "I recall the memories of my childhood.",
    "translated_sentence": "私は子供時代を思い出す。"
  },
  {
    "entry": "formal",
    "meaning_ja": "正式の,公式の,本式の  / 形式ばった;改まった  / 形式的な,表面的な",
    "example_sentence": "Please wear formal attire to the wedding.",
    "translated_sentence": "結婚式には正式な服装でお越しください。"
  },
  {
    "entry": "successful",
    "meaning_ja": "成功した /  順調な",
    "example_sentence": "He was a successful entrepreneur.",
    "translated_sentence": "彼は成功した起業家だった。"
  },
  {
    "entry": "guideline",
    "meaning_ja": "〈C〉《...の》指針, ガイドライン《of, for ...》",
    "example_sentence": "You must follow the guidelines for essay writing.",
    "translated_sentence": "作文のガイドラインに従う必要があります。"
  },
  {
    "entry": "participation",
    "meaning_ja": "〈U〉《...への》 参加, 加入 《in ...》",
    "example_sentence": "Her participation in the project was crucial for its success.",
    "translated_sentence": "彼女のプロジェクトへの参加は成功に不可欠でした。"
  },
  {
    "entry": "medicine",
    "meaning_ja": "〈U〉医学,医術;医[師]業  / 〈C〉〈U〉(外用薬以外の)薬[剤],内服薬  / 〈U〉(北米インディアンの間で行われる)病気(悪霊)を追い払うまじない",
    "example_sentence": "I take medicine every day.",
    "translated_sentence": "毎日、薬を飲みます。"
  },
  {
    "entry": "totally",
    "meaning_ja": "全く,完全に",
    "example_sentence": "I totally forgot about our meeting.",
    "translated_sentence": "私は全く会議を忘れていました。"
  },
  {
    "entry": "motivate",
    "meaning_ja": "〈他〉（物事）の動機となる, を動機づけする / （人）に動機を与える, をやる気にさせる",
    "example_sentence": "Setting goals can help motivate you to achieve success.",
    "translated_sentence": "目標を設定することは、成功するためにあなたをやる気にしてます。"
  },
  {
    "entry": "reality",
    "meaning_ja": "〈U〉現実性, 実在 / 〈C〉(個々の)現実,事実,現物",
    "example_sentence": "The harsh reality of life can be difficult to accept.",
    "translated_sentence": "人生の厳しい現実は受け入れるのが難しいこともある。"
  },
  {
    "entry": "mostly",
    "meaning_ja": "たいてい,ほとんど;主として",
    "example_sentence": "I mostly prefer to stay at home on weekends.",
    "translated_sentence": "週末はたいてい家にいることを好む。"
  },
  {
    "entry": "impressive",
    "meaning_ja": "印象的な / 強い印象を与える, 強い感銘を与える",
    "example_sentence": "The fireworks display was truly impressive.",
    "translated_sentence": "花火の打ち上げは本当に印象的でした。"
  },
  {
    "entry": "mayor",
    "meaning_ja": "〈C〉市長 / 町長",
    "example_sentence": "The mayor of the city attended the opening ceremony.",
    "translated_sentence": "市長は開会式に出席しました。"
  },
  {
    "entry": "boundary",
    "meaning_ja": "〈C〉境界線, 境 / 限界",
    "example_sentence": "The river forms a natural boundary between the two countries.",
    "translated_sentence": "その川は二つの国の自然な境界線を形成している。"
  },
  {
    "entry": "fortunate",
    "meaning_ja": "幸運な, しあわせな / さい先よい, 幸運をもたらす",
    "example_sentence": "I consider myself fortunate to have such supportive friends.",
    "translated_sentence": "私は、こんなにも支えてくれる友達がいて幸運だと思っています。"
  },
  {
    "entry": "then",
    "meaning_ja": "その時,あの時,そのころ  / (時間・場所・順番などが)それから,その次に,隣に,その[すぐ]後で  / その上,それに  / 《通例文頭または文尾において》それでは,それなら,その結果  / その時の,当時の  / その時",
    "example_sentence": "I'll do my homework now and then I'll go out.",
    "translated_sentence": "今宿題をやって、そして外出します。"
  },
  {
    "entry": "different",
    "meaning_ja": "異なった, 違う / 個々の, 別々の / くさぐさの,いろいろな / 《話》 風変わりな",
    "example_sentence": "This book is different from others.",
    "translated_sentence": "この本は他の本とは違う。"
  },
  {
    "entry": "uncertainty",
    "meaning_ja": "〈U〉確信のなさ / 疑わしさ / 変わりやすさ, 不確かさ, 不確実性 / 〈C〉不確実なこと",
    "example_sentence": "The uncertainty of the future is causing anxiety.",
    "translated_sentence": "将来の不確かさが不安を引き起こしている。"
  },
  {
    "entry": "compensation",
    "meaning_ja": "補償 / 賠償 / 報酬 / 弁償 / 償い",
    "example_sentence": "The company provided compensation to the employees affected by the accident.",
    "translated_sentence": "会社は事故によって影響を受けた従業員に補償を提供しました。"
  },
  {
    "entry": "greatly",
    "meaning_ja": "大いに, 非常に",
    "example_sentence": "I greatly appreciate your help.",
    "translated_sentence": "あなたの助けに大いに感謝しています。"
  },
  {
    "entry": "heavily",
    "meaning_ja": "重く / 激しく",
    "example_sentence": "The suitcase was heavily packed with clothes.",
    "translated_sentence": "スーツケースには衣類がぎっしりと詰まっていた。"
  },
  {
    "entry": "really",
    "meaning_ja": "実際に, 現実に(actually)  / 本当に,真に(truly)  / 《間投詞的に》そうですか,おやおや,へえ",
    "example_sentence": "He really loves her.",
    "translated_sentence": "彼は彼女を本当に愛している。"
  },
  {
    "entry": "ear",
    "meaning_ja": "〈C〉耳 / 《単数形で》聴覚 / じっと聞くこと",
    "example_sentence": "The ear is a sense organ that helps us hear sound.",
    "translated_sentence": "耳は音を聞くのに役立つ感覚器官です。"
  },
  {
    "entry": "guy",
    "meaning_ja": "〈C〉《米話》男, やつ, 人 /  《米話》 《複数形で》 君たち, 君ら, みんな / 《英》ガイフォークスの人形 / 《英》変てこな服装の人 / 【動/他】（人）をからかう / 【間投】《米話》（驚きを表して）えっ, へぇー",
    "example_sentence": "The guy was standing in the corner of the room.",
    "translated_sentence": "部屋の片隅に立っていた男性だった。"
  },
  {
    "entry": "happen",
    "meaning_ja": "〈自〉（でき事が）起こる, 発生する / たまたま...する / 《~ to ... 》 （出来事が）...に起こる, に降りかかる",
    "example_sentence": "It happened so quickly that we couldn't react.",
    "translated_sentence": "あまりにも急な出来事だったので、私たちは反応できませんでした。"
  },
  {
    "entry": "progress",
    "meaning_ja": "前進する / 進歩する,進展する",
    "example_sentence": "The work is progressing steadily.",
    "translated_sentence": "仕事は着々と進んでいる。"
  },
  {
    "entry": "its",
    "meaning_ja": "《名詞の前で》 それの, その, それに関する",
    "example_sentence": "I found a lost dog and returned it to its owner.",
    "translated_sentence": "迷子の犬を見つけ、飼い主に返しました。"
  },
  {
    "entry": "list",
    "meaning_ja": "〈C〉《...の》表, 一覧表, リスト, 名簿 《of ...》",
    "example_sentence": "I made a list of things I need to do today.",
    "translated_sentence": "今日やるべきことのリストを作った。"
  },
  {
    "entry": "local",
    "meaning_ja": "一地方の / (全体からみて)部分的な / 《米》各駅停車の / 【名】《話》《しばしば複数形で》その土地に住んでいる人々 /  《米話》(新聞の)地方記事 / 《話》(各駅停車の)列車,電車,バス",
    "example_sentence": "I love exploring local markets when I travel.",
    "translated_sentence": "旅行する時は、地元の市場を探検するのが大好きです。"
  },
  {
    "entry": "meal",
    "meaning_ja": "〈C〉(一定の時刻に定められた) 食事, 食事の時間 / (1回分の)食事,(食事1回分の)食べ物",
    "example_sentence": "I'll have dinner at the restaurant for the meal.",
    "translated_sentence": "食事はレストランで食べます。"
  },
  {
    "entry": "many",
    "meaning_ja": "多くの,たくさんの,多数の / 《〜 a(an)…の形で》《文》《単数名詞を従えて》多くの,多数の",
    "example_sentence": "Many people enjoy going to the beach during the summer.",
    "translated_sentence": "多くの人々が夏にビーチに行くことを楽しんでいます。"
  },
  {
    "entry": "minute",
    "meaning_ja": "〈C〉(時間の単位の)分 （1/60時間;《略》m.,min.） / (角度の単位の)分(1/60度;記号は'で,数字の後に付ける) / 〈U〉《しばしばa ~》《話》瞬間,ちょっとの間([[moment]]) / (また[[minute book]])《複数形で》(会議の)議事録",
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "minute",
    "meaning_ja": "【形】ごく小さい,微細な / 精密な,詳しい / ささいな,取るに足りない",
    "example_sentence": "I found a minute insect crawling on the leaf.",
    "translated_sentence": "葉っぱの上をごく小さい昆虫が這っているのを見つけました。"
  },
  {
    "entry": "page",
    "meaning_ja": "〈C〉(本・手紙・新聞などの) ページ / (新聞などの)欄,記事 / 《文》注目すべき事件(時期)",
    "example_sentence": "I printed out the page I needed.",
    "translated_sentence": "私は必要なページを印刷した。"
  },
  {
    "entry": "them",
    "meaning_ja": "彼らを, 彼女らを, それらを, それらに",
    "example_sentence": "Let them come in.",
    "translated_sentence": "彼らを入らせなさい。"
  },
  {
    "entry": "tire",
    "meaning_ja": "〈他〉〈人など〉を疲れさせる / 〈人など〉を飽きさせる, をうんざりさせる / 〈自〉疲れる  / 《...に》飽きる《of ...》",
    "example_sentence": "The long walk tired me.",
    "translated_sentence": "長いこと歩いたので私は疲れた。"
  },
  {
    "entry": "well",
    "meaning_ja": "【名/C】井戸 / 泉 / 【動/自】〈水などが〉わき出る,湧き上がる, 噴出する《out, up》",
    "example_sentence": "He is well-prepared for the exam.",
    "translated_sentence": "彼は試験の準備が整っています。"
  },
  {
    "entry": "story",
    "meaning_ja": "〈C〉(事実に基づいた) 話, 実話 / (架空の)物語 / 〈U〉(小説,詩,劇,映画などの)筋,プロット",
    "example_sentence": "I heard an interesting story from my grandmother.",
    "translated_sentence": "私はおばあちゃんから面白い話を聞いた。"
  },
  {
    "entry": "tire",
    "meaning_ja": "〈C〉（車の）タイヤ",
    "example_sentence": "I need to replace the tire on my car.",
    "translated_sentence": "私は車のタイヤを交換する必要があります。"
  },
  {
    "entry": "wake",
    "meaning_ja": "〈自〉目を覚ます / 〈他〉〈人〉の目を覚まさせる",
    "example_sentence": "I woke up early in the morning.",
    "translated_sentence": "朝早く目が覚めた。"
  },
  {
    "entry": "wide",
    "meaning_ja": "幅の広い / 《修飾語を伴って》幅が…の / 広範囲な / 大きく開いた /",
    "example_sentence": "The road is wide enough for two cars to pass.",
    "translated_sentence": "その道は二台の車が通れるほど幅広いです。"
  },
  {
    "entry": "bowl",
    "meaning_ja": "〈C〉どんぶり,はち, わん,茶わん,ボール / どんぶり(はち)1杯の量 / 《...の》丸くくぼんだ部分《of ...》 / 《米》(はち形の)円形競技場([[stadium]])",
    "example_sentence": "I ate a delicious bowl of ramen for lunch.",
    "translated_sentence": "昼食に美味しいラーメンのどんぶりを食べました。"
  },
  {
    "entry": "yard",
    "meaning_ja": "【名/C】庭, 構内 / 囲い / 《しばしば複合語を作って》作業場",
    "example_sentence": "I spent the afternoon working in the yard.",
    "translated_sentence": "私は午後庭で作業をして過ごしました。"
  },
  {
    "entry": "piano",
    "meaning_ja": "〈C〉ピアノ  /〈U〉ピアノを弾くこと / ピアノ演奏, ピアノ音楽",
    "example_sentence": "I'm playing the piano.",
    "translated_sentence": "私はピアノを弾いています。"
  },
  {
    "entry": "pen",
    "meaning_ja": "〈C〉(インクを用いる筆記具全体をさして) ペン / 〈U〉《the~》文筆,著述",
    "example_sentence": "I bought a new pen.",
    "translated_sentence": "新しいペンを買った。"
  },
  {
    "entry": "policy",
    "meaning_ja": "〈C〉(政府・政党・企業などの)方針, 政策 / 〈U〉処世上の知恵, 抜け目のなさ, 思慮分別",
    "example_sentence": "The company has implemented a new policy to improve employee productivity.",
    "translated_sentence": "会社は従業員の生産性を向上させるために新しい方針を実施している。"
  },
  {
    "entry": "mood",
    "meaning_ja": "〈C〉(ある時の,一時的な) 気分 / (会合・作品などの) 雰囲気",
    "example_sentence": "I'm in a great mood today.",
    "translated_sentence": "今日はとても気分がいいです。"
  },
  {
    "entry": "plane",
    "meaning_ja": "〈C〉平面 / 水準 / 《話》飛行機 /  【動/自】〈飛行機が〉滑空する",
    "example_sentence": "I took a plane to Hawaii.",
    "translated_sentence": "私はハワイへ飛行機で行きました。"
  },
  {
    "entry": "refuse",
    "meaning_ja": "〈他〉を断る, を拒む / 〈自〉拒絶する, 断る",
    "example_sentence": "I refuse to go to the party.",
    "translated_sentence": "私はパーティーに行くのを拒否します。"
  },
  {
    "entry": "shore",
    "meaning_ja": "〈C/U〉(海・湖・河の) 岸, 海岸,湖畔,河岸 / 陸 / 《しばしば複数形で》地方,国",
    "example_sentence": "I love walking along the shore and listening to the sound of the waves.",
    "translated_sentence": "私は浜辺を歩きながら波の音を聞くのが好きです。"
  },
  {
    "entry": "wise",
    "meaning_ja": "(人・行為などが) 賢い；博識な / 《俗》生意気な /",
    "example_sentence": "He is a wise man who always thinks before he speaks.",
    "translated_sentence": "彼は常に話す前に考える賢い人です。"
  },
  {
    "entry": "net",
    "meaning_ja": "〈C〉網, ネット",
    "example_sentence": "He fixed the net.",
    "translated_sentence": "彼は網を張った。"
  },
  {
    "entry": "novel",
    "meaning_ja": "〈C〉(長編の) 小説",
    "example_sentence": "She is reading a novel.",
    "translated_sentence": "彼女は小説を読んでいます。"
  },
  {
    "entry": "pace",
    "meaning_ja": "〈C〉1歩 / 〈U〉〈C〉歩調, 速度",
    "example_sentence": "He walked at a quick pace.",
    "translated_sentence": "彼は速い足取りで歩いた。"
  },
  {
    "entry": "friendship",
    "meaning_ja": "〈U〉友情,親交 / 〈C〉交友,交際",
    "example_sentence": "Friendship is a precious bond that lasts a lifetime.",
    "translated_sentence": "友情は一生続く貴重な絆です。"
  },
  {
    "entry": "pupil",
    "meaning_ja": "〈C〉生徒 / (個人指導を受けている)生徒,門下生,弟子 / 瞳孔",
    "example_sentence": "The pupil raised his hand to ask a question.",
    "translated_sentence": "生徒は手を挙げて質問をする。"
  },
  {
    "entry": "realize",
    "meaning_ja": "...を完全に理解する, に気づく / 〈希望・計画など〉を実現する / 《文》〈ある金額〉をもうける",
    "example_sentence": "I realize that I forgot to bring my wallet.",
    "translated_sentence": "財布を持ってくるのを忘れたことに気づきました。"
  },
  {
    "entry": "rail",
    "meaning_ja": "〈C〉(柵などの)横棒 / 手すり / (鉄道の) レール / 〈U〉鉄道",
    "example_sentence": "The train runs on the rail.",
    "translated_sentence": "電車はレールの上を走ります。"
  },
  {
    "entry": "way",
    "meaning_ja": "《くだけて》はるかに,大いに,ずっと",
    "example_sentence": "The stars are way too far from here.",
    "translated_sentence": "星はここからはるかに遠いです。"
  },
  {
    "entry": "light",
    "meaning_ja": "(重量が)『軽い』 / (程座・量が)軽い,小さい / 『軽快な』 / 軽装の / 肩のこらない, 気軽な / 手軽な / (食べ物が)消化のよい / ふらふらする / アルコール分の少ない / (パンなどが)ふんわりした",
    "example_sentence": "The feather is light.",
    "translated_sentence": "その羽は軽いです。"
  },
  {
    "entry": "pro",
    "meaning_ja": "〈C〉《くだけて》プロの選手, 玄人 / 《an old ~》熟練した人, 手慣れた人",
    "example_sentence": "I am a professional in my field.",
    "translated_sentence": "私は自分の分野でプロです。"
  },
  {
    "entry": "way",
    "meaning_ja": "〈C〉《...へ向かう》道, 通り道, 《...への》道筋《to ...》 / 方向, 方角 / 〈U〉《しばしば形容詞とともに》やり方, 方法, 手段",
    "example_sentence": "We must find a way to succeed.",
    "translated_sentence": "成功する方法を見つけなければなりません。"
  },
  {
    "entry": "pop",
    "meaning_ja": "〈U〉ポピュラー音楽, ポップス / 〈C〉ポップソング",
    "example_sentence": "His music collection includes [[not only rock and jazz, but also|not only]] [[a lot of]] pop.",
    "translated_sentence": "彼の音楽コレクションには、ロックやジャズだけでなく、多くのポップスも含まれています。"
  },
  {
    "entry": "slope",
    "meaning_ja": "〈自〉傾斜する, 坂になる / 〈他〉を傾斜させる, に勾配をつける",
    "example_sentence": "The horse sloped down the hill.",
    "translated_sentence": "馬が丘を斜めに降りていった。"
  },
  {
    "entry": "case",
    "meaning_ja": "〈C〉箱, ケース / 容器 / 戸だな / (戸・窓などの)わく",
    "example_sentence": "I put my clothes in the case.",
    "translated_sentence": "私は服をその箱に入れました。"
  },
  {
    "entry": "race",
    "meaning_ja": "〈C〉人種, 民族 / (動植物の)種類, 品種 / 〈U〉血統,家系 / 〈C〉《…の》仲間, 同類《of ...》",
    "example_sentence": "There are many different races in the world.",
    "translated_sentence": "世界にはいろいろな人種がいる。"
  },
  {
    "entry": "strip",
    "meaning_ja": "〈C〉《布・板・土地などの》 細長い一片 《of ...》 / (飛行機の)滑走路",
    "example_sentence": "The carpenter used furring strips to reinforce the walls.",
    "translated_sentence": "大工は壁を補強するために下地付けを使用しました。"
  },
  {
    "entry": "basic",
    "meaning_ja": "基礎の, 基本的な / 塩基性(アルカリ性)の",
    "example_sentence": "This is a basic course for beginners.",
    "translated_sentence": "これは初心者向けの基礎コースです。"
  },
  {
    "entry": "careful",
    "meaning_ja": "(人が)注意深い, 気をつけている / 《…を》たいせつにしている, 気にかけている《of ...》 / (仕事などが) 入念な, 綿密な",
    "example_sentence": "Be careful with the glass.",
    "translated_sentence": "ガラスに気をつけてください。"
  },
  {
    "entry": "football",
    "meaning_ja": "〈U〉《米》フットボール / 〈C〉フットボール用ボール",
    "example_sentence": "I love playing football.",
    "translated_sentence": "私はサッカーをプレイするのが大好きです。"
  },
  {
    "entry": "ownership",
    "meaning_ja": "【名/U】所有者であること, 所有, 所有権",
    "example_sentence": "She takes great pride in her ownership of the company.",
    "translated_sentence": "彼女は会社の所有権を非常に誇りに思っています。"
  },
  {
    "entry": "probably",
    "meaning_ja": "たぶん, おそらく",
    "example_sentence": "I will probably go to the party tonight.",
    "translated_sentence": "たぶん、今夜パーティーに行くでしょう。"
  },
  {
    "entry": "street",
    "meaning_ja": "〈C〉(両側に歩道と建物のある) 街路,通り / …街, ...通り",
    "example_sentence": "I'm walking down the street.",
    "translated_sentence": "私は通りを歩いています。"
  },
  {
    "entry": "wooden",
    "meaning_ja": "木製の, 木造の / (行動などが)不自然な,ぎごちない  / (表情などが)生気のない,無表情な",
    "example_sentence": "The table is made of wooden planks.",
    "translated_sentence": "そのテーブルは木製の板で作られています。"
  },
  {
    "entry": "worry",
    "meaning_ja": "〈U〉《...の》心配, 悩み 《of ...》",
    "example_sentence": "I have a great deal of worry about my future.",
    "translated_sentence": "将来について大きな不安を抱えている。"
  },
  {
    "entry": "upon",
    "meaning_ja": "《かたく》...の上に, 上で; そのうえに, に際し; にあたり, するにあたり",
    "example_sentence": "Upon arriving at the airport, she realized she had forgotten her passport.",
    "translated_sentence": "空港に到着した時、彼女はパスポートを忘れていることに気づいた。"
  },
  {
    "entry": "wed",
    "meaning_ja": "〈他〉…と結婚する, を妻(夫)にする / 〈自〉結婚する",
    "example_sentence": "I am getting wed next month.",
    "translated_sentence": "私は来月結婚します。"
  },
  {
    "entry": "damage",
    "meaning_ja": "〈U〉損害, 被害",
    "example_sentence": "The storm caused extensive damage to the buildings.",
    "translated_sentence": "嵐が建物に大きな被害をもたらしました。"
  },
  {
    "entry": "piece",
    "meaning_ja": "〈C〉(全体から分離した) 部分, 断片 / 《…の》…個, ...片 《of ...》",
    "example_sentence": "I found a piece of cloth on the floor.",
    "translated_sentence": "床に一枚の布切れを見つけました。"
  },
  {
    "entry": "politician",
    "meaning_ja": "〈C〉政治家 / (利権をあさる)政略家,政治屋",
    "example_sentence": "The politician promised to lower taxes and improve healthcare.",
    "translated_sentence": "政治家は税金を下げ、医療を改善することを約束しました。"
  },
  {
    "entry": "neither",
    "meaning_ja": "(二つのうち) どちらも…ない / 《~ ... nor ...の形で》…でも...でもない / 《否定文に続いて》…もまた…ない",
    "example_sentence": "He [[neither smokes nor drinks|neither ... nor]].",
    "translated_sentence": "彼は煙草も吸わず、酒も飲まない。"
  },
  {
    "entry": "mathematics",
    "meaning_ja": "〈U〉数学 / 《複数扱い》数学的処理,計算",
    "example_sentence": "I enjoy studying mathematics.",
    "translated_sentence": "私は数学の勉強を楽しんでいます。"
  },
  {
    "entry": "somewhat",
    "meaning_ja": "いくぶんか, やや, 少し",
    "example_sentence": "I am somewhat tired after work.",
    "translated_sentence": "仕事の後、いくぶんか疲れています。"
  },
  {
    "entry": "inquiry",
    "meaning_ja": "〈C〉《...についての》質問, 問い合わせ《about ...》 /  《...の》調査, 研究《into, about ...》 / 〈U〉照会",
    "example_sentence": "I have an inquiry about the new product.",
    "translated_sentence": "新製品についての質問があります。"
  },
  {
    "entry": "sufficient",
    "meaning_ja": "十分な",
    "example_sentence": "I have sufficient funds to cover the expenses.",
    "translated_sentence": "私は十分な資金を持っていて、経費をカバーすることができます。"
  },
  {
    "entry": "absolute",
    "meaning_ja": "まったくの,完全な(complete)  / 絶対的な力を持った,絶対の  / 確かな,確固とした(certain)  / 無条件の,制約のない  / (文法で)独立の,単独の",
    "example_sentence": "That's absolute nonsense!",
    "translated_sentence": "それは全く馬鹿げた話だ。"
  },
  {
    "entry": "depth",
    "meaning_ja": "〈U〉〈C〉〈U〉《通例単数形で》 深さ, 奥行き / 〈U〉(知識・知性などの) 深遠さ / (声・音などの調子の)低さ / 〈C〉《複数形で》 奥まった場所",
    "example_sentence": "The depth of the ocean is unknown.",
    "translated_sentence": "海の深さは未知です。"
  },
  {
    "entry": "doubt",
    "meaning_ja": "〈U〉疑い,疑惑",
    "example_sentence": "I have a doubt about the answer.",
    "translated_sentence": "私は答えについて疑問を抱いています。"
  },
  {
    "entry": "educational",
    "meaning_ja": "教育の,教育に関する  / 教育的な,教育のための",
    "example_sentence": "Educational institutions play a crucial role in shaping the future of our society.",
    "translated_sentence": "教育機関は、社会の未来を形作る上で重要な役割を果たしています。"
  },
  {
    "entry": "generally",
    "meaning_ja": "普通は(usually)  / 大部分は  / 概して,一般的に",
    "example_sentence": "Generally, people prefer to eat healthy food.",
    "translated_sentence": "普通は、人々は健康的な食べ物を好む。"
  },
  {
    "entry": "fully",
    "meaning_ja": "十分に, 完全に / まるまる",
    "example_sentence": "She fully understands the importance of education.",
    "translated_sentence": "彼女は教育の重要性を十分に理解しています。"
  },
  {
    "entry": "grow",
    "meaning_ja": "成長する,育つ,〈植物が〉生える,茂る  / (類・量・程などにおいて)増大する,大きくなる  / しだいになる  / …‘を'成長させる,大きくする,育てる  / …から生じる(起こる)",
    "example_sentence": "The flower grows in the garden.",
    "translated_sentence": "花は庭で育つ。"
  },
  {
    "entry": "historic",
    "meaning_ja": "歴史に残る,歴史的,歴史上有名な,歴史上重要な；記録のある,歴史時代の",
    "example_sentence": "The city is known for its historic buildings and landmarks.",
    "translated_sentence": "その都市は歴史的な建物や名所で知られています。"
  },
  {
    "entry": "hour",
    "meaning_ja": "〈C〉(60分としての)1時間(《略》h,H,hr,複hrs)  / 〈C〉(時計で示される)時刻,時  / 〈C〉(ある事をする)特定の時間,定刻  / 〈C〉(一般的な)時,時間  / 《複数形》勤務(営業)時間  / 〈C〉1時間の道のり  / 〈C〉(授業の)1時間,1時限;(大学などの)履習単位(1週間の授業時間数)  / 《the~》現在",
    "example_sentence": "I have only one hour to finish this assignment.",
    "translated_sentence": "この課題を終わらせるのに1時間しかありません。"
  },
  {
    "entry": "lake",
    "meaning_ja": "〈C〉湖, 湖水 / (必要以上の大量の)液体 / 《a ~ of ...》大量の...",
    "example_sentence": "I went fishing at the lake.",
    "translated_sentence": "私は湖で釣りをしました。"
  },
  {
    "entry": "lover",
    "meaning_ja": "愛する人,恋人《複数形で》恋人同士  / (…の)愛好家,(…を)愛する人《+of+名》",
    "example_sentence": "She is my lover.",
    "translated_sentence": "彼女は私の恋人です。"
  },
  {
    "entry": "often",
    "meaning_ja": "しばしば,たびたび,よく  / 何度,何回 / 〜することが多い",
    "example_sentence": "He often visits Tokyo.",
    "translated_sentence": "彼はよく東京を訪れる。"
  },
  {
    "entry": "onto",
    "meaning_ja": "...の上へ, ...の上に / 《米話》…に気づいて",
    "example_sentence": "She jumped onto the bed.",
    "translated_sentence": "彼女はベッドに飛び乗った。"
  },
  {
    "entry": "owner",
    "meaning_ja": "持ち主,所有者",
    "example_sentence": "The owner of the house is my father.",
    "translated_sentence": "家の所有者は私の父です。"
  },
  {
    "entry": "protect",
    "meaning_ja": "(危険・損害などから)…‘を'守る,保護する《+名+from(against)+名(doing)》  / 〈国内産業〉‘を'保護する",
    "example_sentence": "We must protect our environment for future generations.",
    "translated_sentence": "将来の世代のために環境を守らなければなりません。"
  },
  {
    "entry": "report",
    "meaning_ja": "報告書,レポート / 報道、報告",
    "example_sentence": "I need to write a report for my boss.",
    "translated_sentence": "上司に報告書を書かなければなりません。"
  },
  {
    "entry": "singer",
    "meaning_ja": "歌う人,(特に本職の)歌手",
    "example_sentence": "The singer sang a beautiful song.",
    "translated_sentence": "歌手は美しい歌を歌った。"
  },
  {
    "entry": "someone",
    "meaning_ja": "｟かたく｠誰か,ある人",
    "example_sentence": "Someone has to take responsibility for this.",
    "translated_sentence": "これについては誰かが責任を取らなければならない。"
  },
  {
    "entry": "station",
    "meaning_ja": "〈C〉(人・物の定められた)場所,位置,持ち場,部署  / 〈C〉駅,発着所,停留所;駅舎  / 〈C〉(官庁などの)署,局,本部  / 〈C〉(テレビ・ラジオの)放送局  / 〈C〉事業所,研究所  / 〈C〉(軍隊の)駐留地,軍港,基地  / 〈U〉〈C〉《文》身分,社会的地位  /",
    "example_sentence": "The train arrived at the station.",
    "translated_sentence": "列車が駅に到着した。"
  },
  {
    "entry": "suddenly",
    "meaning_ja": "突然に,だしぬけに",
    "example_sentence": "He suddenly stood up and left the room.",
    "translated_sentence": "彼は突然立ち上がって部屋を出た。"
  },
  {
    "entry": "suitable",
    "meaning_ja": "適当な,ふさわしい,好都合な",
    "example_sentence": "This dress is suitable for the occasion.",
    "translated_sentence": "このドレスはその場に適当です。"
  },
  {
    "entry": "teacher",
    "meaning_ja": "先生,教える人,教師",
    "example_sentence": "My teacher teaches me English.",
    "translated_sentence": "私の先生が私に英語を教えてくれています。"
  },
  {
    "entry": "visitor",
    "meaning_ja": "(…からの)訪問者,泊り客,見物人《+from+名》,(…への)訪問者《+to+名》",
    "example_sentence": "The museum welcomes visitors from all over the world.",
    "translated_sentence": "その博物館は世界中からの訪問者を歓迎しています。"
  },
  {
    "entry": "wherever",
    "meaning_ja": "…する所はどこでも  / どこに…でも",
    "example_sentence": "You can find good food wherever you go.",
    "translated_sentence": "どこに行っても美味しい食べ物を見つけることができます。"
  },
  {
    "entry": "worker",
    "meaning_ja": "仕事をする人,勉強をする人  / (暮らしのために働く)労働者  / 努力家,働き者  / 働きバチ,働きアリ",
    "example_sentence": "The worker performed the task efficiently.",
    "translated_sentence": "仕事人はタスクを効率的にこなした。"
  },
  {
    "entry": "writer",
    "meaning_ja": "作家,著者([[author]]) / 記者([[journalist]]),筆者",
    "example_sentence": "J.K. Rowling is a famous writer.",
    "translated_sentence": "J.K.ローリングは有名な作家です。"
  },
  {
    "entry": "attraction",
    "meaning_ja": "〈U〉魅力；引きつける力[性質]；〈C〉人を引きつける物[人]； 吸引, 誘引; 引力",
    "example_sentence": "His attraction lies in his character, not his looks.",
    "translated_sentence": "彼の魅力はルックスではなく性格だ。"
  },
  {
    "entry": "committee",
    "meaning_ja": "委員会 / 委員全体",
    "example_sentence": "The committee will meet tomorrow to discuss the new proposal.",
    "translated_sentence": "委員会は明日、新しい提案について話し合うために集まります。"
  },
  {
    "entry": "concentrate",
    "meaning_ja": "(…に)〈光線・注意など〉'を'集中する《+on+名》  / 〈液体など〉'を'濃縮する  / 《副詞[句]を伴って》(…に)集中する  / 専念する《+on+名》  / 濃縮したもの,濃縮液",
    "example_sentence": "She needs to concentrate on her studies.",
    "translated_sentence": "彼女は勉強に集中する必要があります。"
  },
  {
    "entry": "confusion",
    "meaning_ja": "混乱,乱雑(disorder)  / (…と…との)混同《+of+名+with+名》  / 当惑,ろうばい",
    "example_sentence": "There was a lot of confusion during the meeting.",
    "translated_sentence": "会議中には多くの混乱がありました。"
  },
  {
    "entry": "connection",
    "meaning_ja": "〈C〉〈U〉(…と…との)関係,つながり《+of+名+with+名》,(…間の)関係《+between+名》  / 〈C〉〈U〉(…間の)(電車など交通機関の)連絡;(電話などの)接続《+between+名》  / 〈C〉連絡列車(船,飛行機,バス)  / 〈C〉《複数形で》関係先,(宿売の)得意先,顧客  / 〈U〉親類関係;〈C〉親類,縁者;《複数形で》有名な知人,ひき",
    "example_sentence": "The strong connection between them is evident.",
    "translated_sentence": "彼らの間の強い関係は明らかだ。"
  },
  {
    "entry": "cultural",
    "meaning_ja": "文化的な;教養の,文化の  / 栽培上の;培養の",
    "example_sentence": "A cultural heritage is handed down to posterity.",
    "translated_sentence": "文化遺産は後世に伝えられる。"
  },
  {
    "entry": "economy",
    "meaning_ja": "〈U〉〈C〉節約,倹約  / 〈U〉(国家・社会などの)経済,財政;〈C〉経済組織(機構)",
    "example_sentence": "The economy is growing steadily.",
    "translated_sentence": "経済は着実に成長しています。"
  },
  {
    "entry": "dramatic",
    "meaning_ja": "劇の, 演劇の / 劇的な, 感動的な, 印象的な / 芝居がかりの",
    "example_sentence": "The movie had a dramatic ending.",
    "translated_sentence": "その映画は劇的な結末だった。"
  },
  {
    "entry": "female",
    "meaning_ja": "(動植物について)雌の  / (特に性を区別して)女の,女性の  / (ねじ・差し込みなど)雌の",
    "example_sentence": "The female lion is the primary hunter for the pride.",
    "translated_sentence": "ライオンの群れの主なハンターはメスです。"
  },
  {
    "entry": "fruit",
    "meaning_ja": "〈U〉〈C〉果物,(植物の)実,果実  / 《複数形で》農作物(果物・穀物・野菜など)  / 〈U〉〈C〉《しばしば複数形で》成果,結果  /",
    "example_sentence": "I bought some fruits at the store.",
    "translated_sentence": "お店でいくつかのフルーツを買いました。"
  },
  {
    "entry": "magic",
    "meaning_ja": "魔法の  / 手品の,奇術の",
    "example_sentence": "I perform a magic trick at the party.",
    "translated_sentence": "私はパーティーで手品を披露します。"
  },
  {
    "entry": "map",
    "meaning_ja": "(1枚1枚の)地図;天体図",
    "example_sentence": "I need a map to find my way around this city.",
    "translated_sentence": "この街を歩き回るには地図が必要です。"
  },
  {
    "entry": "memory",
    "meaning_ja": "〈C〉〈U〉記憶[力]  / 〈C〉思い出,思い出の人(物,事)  / 〈U〉《the~》記憶している期間  / 〈C〉死後の名声",
    "example_sentence": "I have a good memory.",
    "translated_sentence": "私は記憶力がいいです。"
  },
  {
    "entry": "mental",
    "meaning_ja": "精神の,心の  / 頭脳の,知能の  / 《名詞の前にのみ用いて》精神病の  / 《名詞の前にのみ用いて》頭の中で行う  / 《英話》《補語にのみ用いて》頭のおかしい,気がふれた",
    "example_sentence": "Taking care of your mental health is important.",
    "translated_sentence": "精神の健康に気を使うことは重要です。"
  },
  {
    "entry": "metal",
    "meaning_ja": "〈C〉(個々の)金属;〈U〉(材料としての)金属  / 〈U〉合金(真ちゅう,真銅など)  / 〈U〉気性,気質  / 〈U〉《英》(舗装用・鉄道用の)砕石",
    "example_sentence": "I love listening to metal music.",
    "translated_sentence": "私はメタル音楽を聴くのが好きです。"
  },
  {
    "entry": "southern",
    "meaning_ja": "南の,南[部]にある;南へ向かう  / (風が)南からの  / 《しばしばS-》南部特有の,南部風の;(特に)米国南部の",
    "example_sentence": "I love visiting the southern part of the country.",
    "translated_sentence": "私は南の地域を訪れるのが大好きです。"
  },
  {
    "entry": "struggle",
    "meaning_ja": "もがく,あがく  / 戦う,奮闘する",
    "example_sentence": "They struggle for a better future.",
    "translated_sentence": "彼らはより良い未来のために奮闘しています。"
  },
  {
    "entry": "tank",
    "meaning_ja": "(液体・ガスなどを入れる)タンク  / 戦車,タンク",
    "example_sentence": "The fuel tank of the car is almost empty.",
    "translated_sentence": "車の燃料タンクはほとんど空です。"
  },
  {
    "entry": "tourism",
    "meaning_ja": "観光旅行 / 観光事業,旅行代理業",
    "example_sentence": "Tourism is a major industry in many countries.",
    "translated_sentence": "観光は多くの国で主要な産業です。"
  },
  {
    "entry": "aircraft",
    "meaning_ja": "〈C〉(一般に)航空機",
    "example_sentence": "The aircraft is ready for takeoff.",
    "translated_sentence": "その航空機は離陸の準備ができています。"
  },
  {
    "entry": "chemical",
    "meaning_ja": "化学薬品(製品)",
    "example_sentence": "The chemicals used in this experiment are hazardous.",
    "translated_sentence": "この実験で使用される化学物質は危険です。"
  },
  {
    "entry": "code",
    "meaning_ja": "法典  / (社会・階級・団体などを支配する)規約,おきて,慣例  / 信号法;暗号  / 〈通信など〉'を'暗号(信号)にする",
    "example_sentence": "It is not acceptable to our moral code.",
    "translated_sentence": "それは私たちの道徳的規範には受け入れられない。"
  },
  {
    "entry": "communication",
    "meaning_ja": "〈U〉伝達,通報,報道  / 〈U〉〈C〉《…との》通信,文通,連絡《with ...》  / 〈C〉(伝えられた)情報,消息,手紙,伝言  / 〈U〉〈C〉《しばしば複数形で》交通[機関];(通信・電話・無線などによる)連絡[機関]  / 〈U〉(病気の)伝染,感染",
    "example_sentence": "Effective communication is essential in building strong relationships.",
    "translated_sentence": "効果的なコミュニケーションは強い関係を築く上で不可欠です。"
  },
  {
    "entry": "celebrate",
    "meaning_ja": "(儀式・祝典などを行って)…'を'祝う  / 〈人・行為など〉'を'世に知らせて賞賛する  / 〈儀式・結婚式など〉'を'挙行する,執り行う  / ミサを行う  / 《話》浮かれ騒ぐ",
    "example_sentence": "We will celebrate our success!",
    "translated_sentence": "成功を祝おう！"
  },
  {
    "entry": "clinical",
    "meaning_ja": "臨床の / 病状の / 臨床的な,客観的な態度の",
    "example_sentence": "The drug is undergoing clinical trials.",
    "translated_sentence": "この薬は臨床試験中です。"
  },
  {
    "entry": "delay",
    "meaning_ja": "…'を'延期する,延ばす  / 〈事故などが〉…'を'遅らせる  / ぐずぐずする,手間取る",
    "example_sentence": "The flight was delayed due to bad weather.",
    "translated_sentence": "悪天候のため、フライトが延期されました。"
  },
  {
    "entry": "statistic",
    "meaning_ja": "〈C〉統計値, 統計量",
    "example_sentence": "The statistic shows that the average income has increased by 10%.",
    "translated_sentence": "統計によれば、平均収入は10％増加しています。"
  },
  {
    "entry": "quintillion",
    "meaning_ja": "百京 / クィンティリオン(《米》1に0を18,《英》1に0を30つけた数)",
    "example_sentence": "There are approximately 1 quintillion stars in the universe.",
    "translated_sentence": "宇宙にはおおよそ10の18乗個の星があります。"
  },
  {
    "entry": "though",
    "meaning_ja": "...にもかかわらず, ...だけれども / たとえ...でも / 《補足的に主節の後に置いて》もっとも…ではあるが",
    "example_sentence": "Though it was raining, we still went for a walk.",
    "translated_sentence": "雨が降っていたにもかかわらず、私たちは散歩に行きました。"
  },
  {
    "entry": "approximately",
    "meaning_ja": "約 / おおよそ, だいたい",
    "example_sentence": "I have approximately five hundred books in my library.",
    "translated_sentence": "私の図書館には約500冊の本があります。"
  },
  {
    "entry": "prior",
    "meaning_ja": "(時間・順序が)前の, 先の / (重要さが)優先する",
    "example_sentence": "prior to lightning strike, describe where and how the charges build up",
    "translated_sentence": "落雷の前に、電荷がどこでどのように蓄積されるのかを説明しなさい。"
  },
  {
    "entry": "proud",
    "meaning_ja": "(人が)得意な,誇らしげな / (人が)誇りを持った,自尊心のある / (人が)高慢な,威張った / 《名詞の前にのみ用いて》(物事が)誇るに足る,みごとな",
    "example_sentence": "She is proud of her achievements.",
    "translated_sentence": "彼女は自分の成果に誇りを持っています。"
  },
  {
    "entry": "recent",
    "meaning_ja": "少し前に起こった,つい最近あった  / そんなに離れていない時代の,近代(modern)  / (またHolocene)《R-》(地質時代の)現世の,完新世の  / 現世,完新世(約2万前から現代まで)",
    "example_sentence": "I haven't seen her in recent days.",
    "translated_sentence": "最近彼女に会っていない。"
  },
  {
    "entry": "suggestion",
    "meaning_ja": "提案、忠告 / 示唆",
    "example_sentence": "I have a suggestion for you.",
    "translated_sentence": "あなたに対して、私から提案をします。"
  },
  {
    "entry": "guarantee",
    "meaning_ja": "〈C〉(商品に対する品質・修理・期間などの) 保証 / 保証書",
    "example_sentence": "The company offers a money-back guarantee for all its products.",
    "translated_sentence": "会社は全ての製品に返金保証を提供しています。"
  },
  {
    "entry": "regularly",
    "meaning_ja": "定期的に / 規則的に, 規則正しく",
    "example_sentence": "I regularly go to the gym to stay fit.",
    "translated_sentence": "私は定期的にフィットネスジムに行って健康を保っています。"
  },
  {
    "entry": "reliable",
    "meaning_ja": "信頼できる,あてになる,確実な",
    "example_sentence": "He is a reliable friend.",
    "translated_sentence": "彼は信頼できる友達です。"
  },
  {
    "entry": "space",
    "meaning_ja": "〈U〉空間 / 宇宙 / 〈U/C〉間隔, 距離 / 〈C〉(特定目的のための) 場所",
    "example_sentence": "I love looking at the stars in the night sky. Space is so vast and mysterious.",
    "translated_sentence": "夜空の星を見るのが大好きです。宇宙は広大で神秘的です。"
  },
  {
    "entry": "variable",
    "meaning_ja": "【形】変わりやすい / 変えられる / 【名/C】変化するもの, 変化しやすいもの / (数学で)変数",
    "example_sentence": "Human brain have valuable possibility.",
    "translated_sentence": "人間の脳には貴重な可能性がある。"
  },
  {
    "entry": "intense",
    "meaning_ja": "(感情・性質などが)激しい,強烈な,熱心な",
    "example_sentence": "She had an intense desire to win the competition.",
    "translated_sentence": "彼女は競争に勝つという強烈な欲望を持っていた。"
  },
  {
    "entry": "sort",
    "meaning_ja": "〈C〉種類,部類([[kind]]) / 性格,性質,タイプ / 《おもに英話》《単数形で》(ある)種類の人 /  《コンピューター》 整列, ソート",
    "example_sentence": "There are many different sorts of flowers in the garden.",
    "translated_sentence": "庭にはさまざまな種類の花があります。"
  },
  {
    "entry": "infant",
    "meaning_ja": "(1歳未満の)乳児,乳飲み子  / 《英》(普通7歳未満の)学童  / 未成年者",
    "example_sentence": "The hospital provides specialized care for infants.",
    "translated_sentence": "その病院は乳児のための専門的なケアを提供しています。"
  },
  {
    "entry": "innovation",
    "meaning_ja": "〈U〉革新,刷新 / 〈C〉新機軸,新制度,改革の行為",
    "example_sentence": "Innovation is the key to success in today's competitive market.",
    "translated_sentence": "イノベーションは今日の競争市場で成功の鍵です。"
  },
  {
    "entry": "become",
    "meaning_ja": "...になる / 〈衣類などが〉〈人〉に似合う / にふさわしい",
    "example_sentence": "He became a successful businessman.",
    "translated_sentence": "彼は成功した実業家になった。"
  },
  {
    "entry": "strike",
    "meaning_ja": "〈他〉〈人〉をなぐる / 〈物〉をたたく / 〈人が〉《...に》…をぶつける《on, against ...》 / 〈時計が〉〈時刻〉を打つ / 〈人の心〉を打つ / 〈自〉《…めがけて》打つ《at ...》 / 《…に》ぶつかる《against, upon ...》",
    "example_sentence": "Their ship struck a rock.",
    "translated_sentence": "彼らの船は岩にぶつかった。"
  },
  {
    "entry": "definitely",
    "meaning_ja": "明確に, 確実に / 《話》確かに,そのとおり",
    "example_sentence": "I will definitely finish the project on time.",
    "translated_sentence": "私は間違いなくプロジェクトを予定通りに終わらせます。"
  },
  {
    "entry": "current",
    "meaning_ja": "今の,現在の / 通用している, 流通している",
    "example_sentence": "The current situation is uncertain.",
    "translated_sentence": "現在の状況は不確定です。"
  },
  {
    "entry": "load",
    "meaning_ja": "〈C〉積み荷 / (精神上の)重荷 / 仕事量 / 《複数形で》《俗》たくさんの...《of ...》 /",
    "example_sentence": "I need help carrying this heavy load.",
    "translated_sentence": "この重い荷物を運ぶのを手伝ってください。"
  },
  {
    "entry": "remain",
    "meaning_ja": "残る / 居残る, 留まる / 相変わらず...である, ...のままである",
    "example_sentence": "Only a few minutes remain before the movie starts.",
    "translated_sentence": "映画が始まるまであと数分しかありません。"
  },
  {
    "entry": "late",
    "meaning_ja": "(定刻・通常・予定の時間より)『遅れた』,遅い / (時刻が)『遅い』,遅く始まる,遅くまで続く;夜更けの / (時期が)『遅い』,終りごろの,後期の / 『最近の』,最新の([[recent]]) / 《the~,one's~》『前の』,先の,前任の([[former]]) / 《the~,one's~》『故…』,つい先ごろ死んだ",
    "example_sentence": "He arrived late for the meeting.",
    "translated_sentence": "彼は会議に遅れて到着しました。"
  },
  {
    "entry": "add",
    "meaning_ja": "【他】〈二つ以上のもの〉を合計する《up, together》 / 《…に》…を加える《to , and ...》 / 《 〜 that節》…とつけ加える / 【自】足し算をする,加える",
    "example_sentence": "Please add up the total cost of these items.",
    "translated_sentence": "これらのアイテムの合計費用を計算してください。"
  },
  {
    "entry": "pass",
    "meaning_ja": "〈自〉通り過ぎる / 〈時間が〉過ぎる / (障害・試験などで)通過する, 合格する / 〈他〉を通り過ぎる / 〈試験など〉に合格する /  〈人〉を合格させる / …を手渡す / …を通過させる / 〈ある点・程度など〉を越える / 〈歩行者・車など〉を追い抜く / 〈時〉を過ごす",
    "example_sentence": "I need to pass the exam to graduate.",
    "translated_sentence": "卒業するために試験に合格する必要があります。"
  },
  {
    "entry": "altogether",
    "meaning_ja": "まったく,全然 / 全部で, 全部ひっくるめて / 全体から見て, 概して言えば",
    "example_sentence": "That is not altogether bad.",
    "translated_sentence": "それは決して悪いことではない。"
  },
  {
    "entry": "literature",
    "meaning_ja": "〈U〉文学 / 文献 / 文筆業,著述業 / 《話》〈特に広告,宣伝の》印刷物《on, of ...》",
    "example_sentence": "She studied literature in college.",
    "translated_sentence": "彼女は大学で文学を勉強しました。"
  },
  {
    "entry": "measure",
    "meaning_ja": "《複数形で》手段,方法; 対策,処置 / 〈C〉(インチ・グラムの)度量の単位 / 〈C〉計量器具(物差し,巻き尺,ますなど)  / 〈C〉法案,法令 / 〈U〉(測って得た)寸法, 分量",
    "example_sentence": "There was a discussion on the measures.",
    "translated_sentence": "対策に関する討議が行われた。"
  },
  {
    "entry": "body",
    "meaning_ja": "【名】身体；（生物の）胴体；人",
    "example_sentence": "The doctor examined the patient's body.",
    "translated_sentence": "医者は患者の体を検査した。"
  },
  {
    "entry": "bond",
    "meaning_ja": "〈C〉縛る物 / 《通例複数形で》 束縛 / 《しばしば複数形で》(血縁,義理などの) きずな / 証書, 債券 / 接着;接着剤",
    "example_sentence": "The bond between us is unbreakable.",
    "translated_sentence": "私たちの間の絆は壊れない。"
  },
  {
    "entry": "Sunday",
    "meaning_ja": "日曜日(キリスト教の安息日で週の第1日;《略》Sun.)",
    "example_sentence": "I look forward to Sunday every week.",
    "translated_sentence": "毎週日曜日を楽しみにしています。"
  },
  {
    "entry": "September",
    "meaning_ja": "9月(英米では学校の新学年の始まる月;Sept.,Sep.)",
    "example_sentence": "The weather in September was warm and sunny.",
    "translated_sentence": "9月の気候は暖かく晴れていた。"
  },
  {
    "entry": "Monday",
    "meaning_ja": "月曜日(《略》Mon.)",
    "example_sentence": "Today is Monday.",
    "translated_sentence": "今日は月曜日です。"
  },
  {
    "entry": "October",
    "meaning_ja": "〈U〉〈C〉10月, 《形容詞的に》10月の",
    "example_sentence": "It's October now.",
    "translated_sentence": "今は10月です。"
  },
  {
    "entry": "Thursday",
    "meaning_ja": "木曜日《略》Thu,Thur.,Thurs.)",
    "example_sentence": "I'm looking forward to Thursday.",
    "translated_sentence": "木曜日が楽しみです。"
  },
  {
    "entry": "August",
    "meaning_ja": "8月(《略》Aug.)  / 《形容詞的に》August heat wave{名}〈C〉8月の暑波August vacation{名}〈C〉8月の休暇",
    "example_sentence": "August is my favorite month of the year.",
    "translated_sentence": "8月は私の一番好きな月です。"
  },
  {
    "entry": "set",
    "meaning_ja": "〈他〉(ある場所に)…を置く / 《...に》...をつける《to ...》 /   (課題・模範として)…を課す / を向ける / 《…に》…を配置する《at, around, on ...》 / (ある状態に)…をする / 〈機械・器具など〉を調節する / 〈日時・制限など〉を定める / 〈自〉〈太陽などが〉沈む /",
    "example_sentence": "She set the table with dishes.",
    "translated_sentence": "彼女は皿をテーブルに置いた。"
  },
  {
    "entry": "upset",
    "meaning_ja": "動揺した / 怒っている",
    "example_sentence": "She was upset when she found out she didn't get the job.",
    "translated_sentence": "彼女はその仕事に就けなかったと知って動揺した。"
  },
  {
    "entry": "accurate",
    "meaning_ja": "【形】正確な, 的確な, 精密な",
    "example_sentence": "The information provided by the research team was accurate.",
    "translated_sentence": "研究チームから提供された情報は正確でした。"
  },
  {
    "entry": "comprehensive",
    "meaning_ja": "包括的な,網羅的な,広範囲にわたる；総合的な；はっきりした；完全な；（理解力が）幅広い,理解力のある",
    "example_sentence": "The report provides a comprehensive analysis of the market trends.",
    "translated_sentence": "そのレポートは市場のトレンドの包括的な分析を提供しています。"
  },
  {
    "entry": "accommodation",
    "meaning_ja": "〈U〉宿泊 / 《複数形で》(旅館などの) 宿泊設備 / 《...への》適応, 順応《to ...》 / 〈C〉便宜, 助け / 調停, 和解",
    "example_sentence": "I need to find a suitable accommodation for my vacation.",
    "translated_sentence": "私は休暇のために適切な宿泊先を見つける必要があります。"
  },
  {
    "entry": "soil",
    "meaning_ja": "〈他〉〈衣服など〉を汚す,汚くする / 《比喩(ひゆ)的に》〈名声など〉をけがす / 〈自〉〈衣服などが〉汚れる,きたなくなる",
    "example_sentence": "He soiled his white shirt when he changed the ink cartridge.",
    "translated_sentence": "彼はインクカートリッジを交換していて白いシャツを汚した。"
  },
  {
    "entry": "commitment",
    "meaning_ja": "〈C〉《...の》約束, 誓約, 公約《to ...》 / 《...への》かかわり合い, 傾倒《to ...》〈U〉委託,委任 / 勾留, 収容 / 関与",
    "example_sentence": "She made a commitment to finish the project on time.",
    "translated_sentence": "彼女はプロジェクトを時間通りに終わらせるという約束をしました。"
  },
  {
    "entry": "worth",
    "meaning_ja": "《…するだけの》価値がある《~ doing》/ 《…の》値打ちがある《~ ...》",
    "example_sentence": "This book is worth reading.",
    "translated_sentence": "この本は読む価値がある。"
  },
  {
    "entry": "attribute",
    "meaning_ja": NaN,
    "example_sentence": "The director attributes the film's success to its innovative visual style.",
    "translated_sentence": "監督は映画の成功を、その革新的な映像表現に帰属させている。"
  },
  {
    "entry": "origin",
    "meaning_ja": "〈U〉〈C〉《...の》起源,発端《of ...》 / 〈U〉生まれ, 血統 / 〈U〉〈C〉(数学で,座標の)原点",
    "example_sentence": "The origin of the universe is still a mystery.",
    "translated_sentence": "宇宙の起源はまだ謎です。"
  },
  {
    "entry": "dismiss",
    "meaning_ja": "…を去らせる / 《文》 《...から》〈人〉を解雇する《from ...》 / 《心から》…を追い払う《from ...》 / 〈訴え・上訴など〉を却下する",
    "example_sentence": "The manager decided to dismiss the employee for repeated lateness.",
    "translated_sentence": "マネージャーは遅刻を繰り返した従業員を解雇することに決めた。"
  },
  {
    "entry": "enhance",
    "meaning_ja": "〈他〉...の程度を高める, ...の価値を高める, ...を向上させる",
    "example_sentence": "Regular exercise can enhance your overall well-being.",
    "translated_sentence": "定期的な運動はあなたの総合的な健康を向上させることができます。"
  },
  {
    "entry": "regulate",
    "meaning_ja": "規制する, 統制する, 調整する",
    "example_sentence": "The government plans to regulate the use of plastic bags.",
    "translated_sentence": "政府はプラスチック袋の使用を規制する予定です。"
  },
  {
    "entry": "equivalent",
    "meaning_ja": "【名/C】《...と》 同等のもの, 《...の》 相当語句 《for ,of ...》 / 【形】同等の, 同量の, 同価の, 等価の",
    "example_sentence": "These two books are equivalent in value.",
    "translated_sentence": "これらの2冊の本は価値が同等です。"
  },
  {
    "entry": "reasonable",
    "meaning_ja": "合理的な, 理性的な / 筋の通った, 理にかなった, 公正の / (価格が)手ごろな",
    "example_sentence": "The price of the product is reasonable.",
    "translated_sentence": "商品の価格は手頃です。"
  },
  {
    "entry": "should",
    "meaning_ja": "...すべきである / ...のはずである / 《~ have 過去分詞》 …すべきだったのに； …してしまっているはずだ / 《疑問詞とともに用いて》いったい…かしら / 《現在または未来に反する仮定に対して》…だろうに / 《条件節・譲歩節に用いて》万一…だとしたら / 《感情・判断などの表現に続くthat節に用いて》 …するとは / 《命令・提案・願望などの表現に続くthat節に用いて》 …するように",
    "example_sentence": "You should study for the exam.",
    "translated_sentence": "試験の勉強をすべきである。"
  },
  {
    "entry": "suffer",
    "meaning_ja": "(…に)苦しむ,悩む,心を痛める《+for+名》,(…で)苦しむ《+from+名》  / 〈物事が〉(…のために)損害を受ける,傷つく《+from+名》  / 《suffer from+名》〈人が〉(一時的な病気に)罹る,煩わされる  / 〈苦痛・悲しみなど〉‘を'受ける,〈損害など〉‘を'被る  / 《suffer+名+to do》《古》(…することを)〈人〉‘に'許す  / 《否定文で》…‘を'我慢する",
    "example_sentence": "Many people suffer from allergies during the spring season.",
    "translated_sentence": "春の季節に多くの人々がアレルギーに苦しんでいます。"
  },
  {
    "entry": "moderate",
    "meaning_ja": "中程度の / 穏やかな, 緩やかな、適度の",
    "example_sentence": "Try to be moderate in drinking.",
    "translated_sentence": "酒を飲むのはほどほどにするように。"
  },
  {
    "entry": "suppose",
    "meaning_ja": "(議論のために)…と仮定する / …と思う,と信じる,と想像する / (物事が)…を前提にする / 思う, 考える",
    "example_sentence": "Let's suppose that we have unlimited resources.",
    "translated_sentence": "無限の資源を持っていると仮定しましょう。"
  },
  {
    "entry": "implication",
    "meaning_ja": "〈U〉巻き添え / 〈U/C〉含蓄, 含意 / 裏の意味 / 意味, ほのめかし, かかわりあい",
    "example_sentence": "What was the implication of his remark?",
    "translated_sentence": "彼の発言は含みとして何を言いたかったのですか。"
  },
  {
    "entry": "acknowledge",
    "meaning_ja": "を認める, を認識する / を承認する / を受け取ったことを知らせる / に礼を言う, に感謝する",
    "example_sentence": "I acknowledge that I made a mistake.",
    "translated_sentence": "私は自分が間違いを犯したことを認めます。"
  },
  {
    "entry": "associate",
    "meaning_ja": "(人)を《...の》仲間に加える, 《..に》 を連合させる 《with ...》 / 《...と》 仲間になる, 交際する 《with ...》 / 《...と》 合体する, 連携する 《with ...》 / 関連する, 連想する",
    "example_sentence": "I associate the smell of fresh baked cookies with my grandmother.",
    "translated_sentence": "焼きたてのクッキーの香りは祖母を連想させます。"
  },
  {
    "entry": "justify",
    "meaning_ja": "正当化する, 弁明する",
    "example_sentence": "He tried to justify his actions, but no one believed him.",
    "translated_sentence": "彼は自分の行動を正当化しようとしたが、誰も信じなかった。"
  },
  {
    "entry": "incorporate",
    "meaning_ja": "【動/他】〈事業など〉を法人にする / 《...に》...を合併する, を組み入れる, 含む《in, into ...》 / 《...と》...を合併する《with ...》 / 【動/自】〈団体などが〉《…と》合併する《with ...》 / 【形】法人の / 合併した",
    "example_sentence": "Many companies incorporate sustainability practices into their business strategies.",
    "translated_sentence": "多くの企業は持続可能性の実践を自社のビジネス戦略に取り入れています。"
  },
  {
    "entry": "uniform",
    "meaning_ja": "(状態などが)不変の, 一定の / (形・型などが) 同一の, 画一的な",
    "example_sentence": "All students must wear a uniform to school.",
    "translated_sentence": "全ての生徒は学校で制服を着なければなりません。"
  },
  {
    "entry": "prospect",
    "meaning_ja": "〈C〉(高い位置からの)光景,眺め / 〈U〉《...の》予想《of, for ...》/ 《...の》成功の見込み《of, for ...》/見通し, 見込み, 可能性",
    "example_sentence": "The prospect of winning the lottery excited him.",
    "translated_sentence": "宝くじに当たる見込みが彼を興奮させた。"
  },
  {
    "entry": "inspire",
    "meaning_ja": "引き起こす, 刺激を与える, 活気を与える / を鼓舞する / 《...に》 (考え・感情) を呼び起こす《in ...》 / 《...を》に呼び起こす《with ...》 / 空気を吸う",
    "example_sentence": "Her story inspired me to pursue my dreams.",
    "translated_sentence": "彼女の話を聞いて、私は夢を追い求めるようになった。"
  },
  {
    "entry": "property",
    "meaning_ja": "〈U〉特性, 特質 / 所有物, 財産 / 不動産 / 〈C〉所有地",
    "example_sentence": "Property prices have increased a lot over the past year.",
    "translated_sentence": "不動産価格はここ1年で大幅に上昇している。"
  },
  {
    "entry": "receive",
    "meaning_ja": "〈他〉〈贈与・送付されたもの〉を受け取る, を受ける / 〈自〉受け取る,受ける",
    "example_sentence": "I receive a gift from my friend.",
    "translated_sentence": "私は友達からプレゼントをもらいます。"
  },
  {
    "entry": "schedule",
    "meaning_ja": "〈他〉…のスケジュール(時間表,一覧表)を作る / をスケジュールに入れる",
    "example_sentence": "The meeting is scheduled for tomorrow.",
    "translated_sentence": "会議は明日予定されています。"
  },
  {
    "entry": "mean",
    "meaning_ja": "〈C〉中庸,中道 / (数学で) 平均値, 算術平均,相加平均 / (比例式の)中項,内項",
    "example_sentence": "The mean of the test scores was 65.",
    "translated_sentence": "テストの点数の平均は65だった。"
  },
  {
    "entry": "lack",
    "meaning_ja": "不足；欠乏",
    "example_sentence": "There is a lack of communication in the team.",
    "translated_sentence": "チーム内でのコミュニケーションが不足しています。"
  },
  {
    "entry": "stomach",
    "meaning_ja": "〈C〉胃  / 〈C〉《話》腹,腹部(abdomen)  / 〈U〉《しばしばa~》(…に対する)食欲《+for+名》  / 〈U〉《+for+名》・腹に入れる; 食べる, 消化する; 何とか我慢して飲み下す; （侮辱などを）がまんする",
    "example_sentence": "I have a stomachache after eating too much.",
    "translated_sentence": "食べ過ぎてお腹が痛いです。"
  },
  {
    "entry": "above",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "《方向》《fly,goなどの移動を表す動詞と結びついて》…の上方へ,より高いところへ / 《場所・位置》…の上に,の上方に",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "150",
    "meaning_ja": "2995627",
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "name",
    "meaning_ja": "〈C〉名前 / 《単数形で》名声, 評判",
    "example_sentence": "The name of the game is soccer.",
    "translated_sentence": "ゲームの名前はサッカーです。"
  },
  {
    "entry": "cover",
    "meaning_ja": "《…で》…の表面をおおう,を包む,をかぶせる《with ...》  / (範囲が)…に及ぶ,にわたる  / …に保険を掛ける  / …を報道する,取材する  / 〈要塞・砲などが〉を制圧する  / (ピストルなどで)〈人〉をねらう《with ...》  / (球技などで)〈相手の動きなど〉をふせぐ  / 《…の》代役をする,身代りをする《for ...》",
    "example_sentence": "The blanket covers the bed.",
    "translated_sentence": "毛布がベッドをおおっています。"
  },
  {
    "entry": "access",
    "meaning_ja": "【名/U】《人・物・場所への》 接近 《to ...》/ 《…への》接近の機会, 入場の権利《to ...》 / 【名/C】《…へ》接近する手段(方法)《to ...》",
    "example_sentence": "A bridge gives access to the island.",
    "translated_sentence": "橋でその島へ渡れるようになっている。"
  },
  {
    "entry": "note",
    "meaning_ja": "〈C〉覚え書き,メモ / 注釈 / 短い手紙 / 紙幣 / 〈U〉注目 / 重要性 /",
    "example_sentence": "I wrote a note to myself so I won't forget.",
    "translated_sentence": "私は自分自身にメモを書いて忘れないようにしました。"
  },
  {
    "entry": "boot",
    "meaning_ja": "〈C〉《通例複数形で》(皮・ゴム製の) 長ぐつ /  深ぐつ / 《話》蹴り",
    "example_sentence": "I need to buy a new pair of boots for the winter.",
    "translated_sentence": "冬に新しいブーツを買わなければなりません。"
  },
  {
    "entry": "path",
    "meaning_ja": "〈C〉(自然にできた) 小道 / 《人・物の》通り道《of ...》 / 《...への》道程《to ...》",
    "example_sentence": "The hiker followed the path through the forest.",
    "translated_sentence": "ハイカーは森の中の道を進んだ。"
  },
  {
    "entry": "fire",
    "meaning_ja": "〈U〉火, 炎 / 〈C〉燃えているもの / 〈U〉〈C〉火事, 火災 /",
    "example_sentence": "The fire spread quickly through the forest.",
    "translated_sentence": "森林を駆け巡る炎が急速に広がっていった。"
  },
  {
    "entry": "plenty",
    "meaning_ja": "たくさんの、十分な",
    "example_sentence": "This should be plenty.",
    "translated_sentence": "これで十分なはずです。"
  },
  {
    "entry": "resource",
    "meaning_ja": "〈C〉《複数形で》資源, 物資 / (まさかのときの)最後の手段 / 《…の》源泉 《of ...》",
    "example_sentence": "The company has limited resources to invest in new projects.",
    "translated_sentence": "同社が新規プロジェクトに投資できる資源は限られている。"
  },
  {
    "entry": "premise",
    "meaning_ja": "【名/C】（推理を行う上で結論の根拠となる）前提 / 《the ~s》前述の事項 / 《複数形で》土地建物, 敷地 / 【動/他】を前置きとして述べる / 《 ~ that ...》...ということを前提とする",
    "example_sentence": "The premise of the argument is that all humans are equal.",
    "translated_sentence": "議論の前提は、すべての人間は平等であるということです。"
  },
  {
    "entry": "withdraw",
    "meaning_ja": "《...から》 ...を引っ込める 《from ...》 / よける, 身をかわす / 取り消す, 撤回する",
    "example_sentence": "I need to withdraw some money from the bank.",
    "translated_sentence": "私は銀行からお金を引き出す必要があります。"
  },
  {
    "entry": "nowhere",
    "meaning_ja": "どこにも...ない, どこでも...ない",
    "example_sentence": "The document was nowhere to be found.",
    "translated_sentence": "その書類はどこにも見当たらなかった。"
  },
  {
    "entry": "commission",
    "meaning_ja": "〈U〉〈C〉(任務・職権などの)委任, 委任状 / 〈U〉(委任された) 権限 / 〈C〉(権威筋より発せられた)命令 / 委任された仕事 / 手数料/《集合的に》委員会 /",
    "example_sentence": "He received a commission for his artwork.",
    "translated_sentence": "彼は自分の作品に対して手数料を受け取った。"
  },
  {
    "entry": "sanction",
    "meaning_ja": "【名/U】《支配者・当局の》認可《of ...》 / 《…の》承認《for ...》 / 【名/C】《複数形で》制裁, 処罰 / 【動/他】〈支配者・当局が〉…を認可する",
    "example_sentence": "The United Nations imposed economic sanctions on the country.",
    "translated_sentence": "国連はその国に経済制裁を課した。"
  },
  {
    "entry": "conservative",
    "meaning_ja": "(人・考え方などが) 保守的な / (見積もり,評価などが)控え目の",
    "example_sentence": "He has conservative views on social issues.",
    "translated_sentence": "彼は社会問題について保守的な考えを持っています。"
  },
  {
    "entry": "liability",
    "meaning_ja": "〈U〉(特に債務などに対する) 責任, 義務 / 《...の》傾向があること《to ...》 / 〈C〉不利な点 / 《複数形で》負債",
    "example_sentence": "The company has a liability to pay off its debts.",
    "translated_sentence": "会社は債務を返済する責任があります。"
  },
  {
    "entry": "contain",
    "meaning_ja": "〈物〉を含む /  を入れる容積がある, を収容できる / 〈自分,自分の感情など〉を抑える",
    "example_sentence": "Does the box contain any books?",
    "translated_sentence": "その箱には本が入っていますか？"
  },
  {
    "entry": "suggest",
    "meaning_ja": "〈他〉〈考え・計画など〉を提案する / 〈物事が〉…を連想させる / をそれとなく示す",
    "example_sentence": "I suggest we go to the park for a picnic.",
    "translated_sentence": "私たちはピクニックに公園に行くことを提案します。"
  },
  {
    "entry": "vary",
    "meaning_ja": "〈他〉《...から...に》 変わる 《from ... to ...》 / 《...の点で》 互いに異なる 《in, on ...》 / 〈他〉を変える / に変化をつける",
    "example_sentence": "The weather can vary greatly from day to day.",
    "translated_sentence": "天気は日によって大きく変わることがあります。"
  },
  {
    "entry": "awareness",
    "meaning_ja": "〈U〉自覚, 認識 /  《...に》気づいていること《of ...》, 《...であることに》気づいていること《that節》",
    "example_sentence": "Push marketing attempts to build awareness of a product among the general population.",
    "translated_sentence": "プッシュ・マーケティングは、一般消費者の間で製品の認知度を高めようとするものである。"
  },
  {
    "entry": "carry",
    "meaning_ja": "〈他〉を運ぶ / 《...が身につけて》…を持ち歩く《about, with, on ...》, 〜を取り扱っている、〜を売っている / 〈自〉(ある距離まで) 達する, 届く",
    "example_sentence": "He carried the heavy box for me.",
    "translated_sentence": "彼は私のために重い箱を運んだ。"
  },
  {
    "entry": "forecast",
    "meaning_ja": "〈C〉予想, (天気の)予報",
    "example_sentence": "The weather forecast predicts rain for tomorrow.",
    "translated_sentence": "明日の天気予報では雨が予想されています。"
  },
  {
    "entry": "know",
    "meaning_ja": "知る /  知っている / 見分けがつく",
    "example_sentence": "I know the answer.",
    "translated_sentence": "私は答えを知っています。"
  },
  {
    "entry": "assume",
    "meaning_ja": "(証拠はないが)…を本当のことと思う, を仮定する,推測する / 《かたく》(役目・任務・責任など)を引き受ける, 〈責任〉を負う",
    "example_sentence": "I assume you are coming to the party tonight.",
    "translated_sentence": "あなたが今夜パーティーに来ると思っています。"
  },
  {
    "entry": "quarter",
    "meaning_ja": "〈C〉《...の》4分の1《of ...》 / (時間の) 15分 / 《複数形で》寝泊まりする場所",
    "example_sentence": "I will meet you in a quarter.",
    "translated_sentence": "私はあなたと15分後に会います。"
  },
  {
    "entry": "disorder",
    "meaning_ja": "〈U〉無秩序, 混乱 / 《しばしば複数形で》(社会的・政治的な)粉争,騒動 / 〈C〉〈C〉(肉体的・精神的な)不調,異常",
    "example_sentence": "He has a disorder that affects his ability to concentrate.",
    "translated_sentence": "彼は集中力に影響が出る障害を持っています。"
  },
  {
    "entry": "off",
    "meaning_ja": "から離れて / から離れたところで",
    "example_sentence": "They got off the bus.",
    "translated_sentence": "彼らはバスから降りた。"
  },
  {
    "entry": "provide",
    "meaning_ja": "〈他〉を供給する, を提供する / 《~ that ...》(法律などで)…と規定する /  〈自〉(将来の災害などに) 備える / 《家族などを》扶養する《for ...》",
    "example_sentence": "Can you provide me with some information?",
    "translated_sentence": "いくつかの情報を提供していただけますか？"
  },
  {
    "entry": "how",
    "meaning_ja": "どんなふうに, どんな方法で / どれほど, どのくらい / どんな具合で / 《~ is it ...?で》どんな理由で / 《感嘆文で》なんと",
    "example_sentence": "How do you like your coffee?",
    "translated_sentence": "コーヒーはどんな味にしますか？"
  },
  {
    "entry": "secondly",
    "meaning_ja": "第二に；次に",
    "example_sentence": "Secondly, I would like to discuss the importance of teamwork.",
    "translated_sentence": "第二に、チームワークの重要性について話したいと思います。"
  },
  {
    "entry": "quadrillion",
    "meaning_ja": "〈C〉《米》千兆 / 《英》100万の4乗",
    "example_sentence": "In the distant galaxy, astronomers discovered a star that emitted a quadrillion units of energy every second.",
    "translated_sentence": "天文学者たちは、遠く離れた銀河系で、毎秒1000兆単位のエネルギーを放出する星を発見した。"
  },
  {
    "entry": "burden",
    "meaning_ja": "〈C〉荷物, 積荷 / 《...にとっての》 重荷, 負担 《to , on ...》",
    "example_sentence": "The burden of responsibility weighed heavily on his shoulders.",
    "translated_sentence": "責任の重荷が彼の肩にのしかかった。"
  },
  {
    "entry": "fundamental",
    "meaning_ja": "《...に》基本的な, 根本的な, 不可欠の《to, for ...》",
    "example_sentence": "This book provides a fundamental understanding of the subject.",
    "translated_sentence": "この本はその科目の基本的な理解を提供します。"
  },
  {
    "entry": "resolution",
    "meaning_ja": "〈U〉決定すること / 決意 / 強固な意志 / 《...の》解決,解明《of》 / 《...の》分解《of ...》〈C〉決議；分解",
    "example_sentence": "The new year is a time for setting resolutions and goals.",
    "translated_sentence": "新年は目標や抱負を立てる時です。"
  },
  {
    "entry": "investigate",
    "meaning_ja": "(注意深く)〈問題・事件など〉‘を'調べる,研究する  / (…を)調査する《+into+名》",
    "example_sentence": "The police are investigating the crime.",
    "translated_sentence": "警察はその犯罪を調査しています。"
  },
  {
    "entry": "abuse",
    "meaning_ja": "〈U〉〈C〉乱用, 悪用 / 〈U〉悪口、虐待",
    "example_sentence": "The government has launched a campaign to combat drug abuse.",
    "translated_sentence": "政府は薬物乱用を撲滅するキャンペーンを開始しました。"
  },
  {
    "entry": "coin",
    "meaning_ja": "〈C〉(1枚の) 硬貨 / 〈U〉貨幣 /",
    "example_sentence": "Who coined the word “Internet”?",
    "translated_sentence": "インターネット」という言葉は誰が作ったのか？"
  },
  {
    "entry": "total",
    "meaning_ja": "総計の / 全くの,完全な",
    "example_sentence": "The total cost of the project is $10,000.",
    "translated_sentence": "プロジェクトの総費用は1万ドルです。"
  },
  {
    "entry": "complete",
    "meaning_ja": "…'を'仕上げる,終える  / …'を'完全なものにする,完成する",
    "example_sentence": "I have completed all of my tasks.",
    "translated_sentence": "私は全てのタスクを完了しました。"
  },
  {
    "entry": "context",
    "meaning_ja": "〈C〉(文章の)前後関係,文脈  / 〈U〉(事の)周囲の情況,背景",
    "example_sentence": "Understanding the context is crucial for effective communication.",
    "translated_sentence": "効果的なコミュニケーションのためには、文脈を理解することが重要である。"
  },
  {
    "entry": "star",
    "meaning_ja": "星 / 恒星",
    "example_sentence": "Patsy was the star of the show.",
    "translated_sentence": "パッツィーがショーの主役だった。"
  },
  {
    "entry": "admire",
    "meaning_ja": "...に感嘆する, に感嘆して見とれる / を賞賛する",
    "example_sentence": "I admire your courage and determination.",
    "translated_sentence": "あなたの勇気と決断力に感嘆します。"
  },
  {
    "entry": "yield",
    "meaning_ja": "〈他〉〈利益など〉を生む  / (圧迫・強制などによって)《...に》...を明け渡す / 〈自〉〈土地が〉作物ができてる / 《...に》屈する《to ...》",
    "example_sentence": "The farmer's hard work yielded a bountiful harvest.",
    "translated_sentence": "農夫の努力が豊かな収穫をもたらした。"
  },
  {
    "entry": "take",
    "meaning_ja": "〈他〉を取る / 《...から》を取り上げる《from ...》 / を受け取る / を持って行く / 〈時間など〉を必要とする / 《動作を表す名詞を目的語にして》...をする, を実行する",
    "example_sentence": "I will take the bus to school.",
    "translated_sentence": "学校へはバスに乗るつもりです。"
  },
  {
    "entry": "strange",
    "meaning_ja": "奇妙な；見慣れない；不慣れな",
    "example_sentence": "That is a strange situation.",
    "translated_sentence": "それは奇妙な状況です。"
  },
  {
    "entry": "straight",
    "meaning_ja": "(比較変化なし)『まっすぐに』,一直線に / 『直立して』,垂直に / 『直ちに』,回り道をしないで / 率直に,端的に",
    "example_sentence": "He walked straight to the bus stop.",
    "translated_sentence": "彼はまっすぐにバス停まで歩いた。"
  },
  {
    "entry": "prevent",
    "meaning_ja": "防ぐ / 邪魔をする",
    "example_sentence": "Wearing a mask can help prevent the spread of germs.",
    "translated_sentence": "マスクを着用することで、細菌の感染を防ぐことができます。"
  },
  {
    "entry": "come",
    "meaning_ja": "〈自〉来る,(相手の方へ)行く,やってくる",
    "example_sentence": "I will come to your house tomorrow.",
    "translated_sentence": "明日あなたの家に行きます。"
  },
  {
    "entry": "scope",
    "meaning_ja": "〈U〉〈C〉(物事の及ぶ) 範囲 / (理解・行動する)能力の限界, 視野 / 《...の》余地, 機会《for ...》",
    "example_sentence": "The scope of this project is limited to the development phase.",
    "translated_sentence": "このプロジェクトの範囲は開発フェーズに限定されています。"
  },
  {
    "entry": "intervention",
    "meaning_ja": "〈U〉（…が）間に入ること；（…の）干渉;調停,仲裁《of》",
    "example_sentence": "The government decided to take immediate intervention to resolve the crisis.",
    "translated_sentence": "政府は危機を解決するために直ちに介入することを決定した。"
  },
  {
    "entry": "coach",
    "meaning_ja": "〈C〉コー​チ, 監督 / (箱形・屋根付き) 大型四輪馬車 / 普通客車 / 普通席",
    "example_sentence": "The coach was very encouraging.",
    "translated_sentence": "コーチはとても励ましてくれた。"
  },
  {
    "entry": "favor",
    "meaning_ja": "〈C〉親切な行為 / 〈U〉好意, 支持 / 偏愛, えこひいき /",
    "example_sentence": "Can you do me a favor and pick up some groceries?",
    "translated_sentence": "お願いがあるんだけど、買い物に行ってくれる？"
  },
  {
    "entry": "fix",
    "meaning_ja": "固定する； 直す",
    "example_sentence": "I need to fix my car.",
    "translated_sentence": "私は車を直さなければなりません。"
  },
  {
    "entry": "pilot",
    "meaning_ja": "〈C〉水先案内人 / パイロット / 指導者",
    "example_sentence": "The pilot safely landed the plane.",
    "translated_sentence": "パイロットは無事に飛行機を着陸させました。"
  },
  {
    "entry": "illness",
    "meaning_ja": "(心身の)病気,不健康",
    "example_sentence": "She has been suffering from a serious illness for years.",
    "translated_sentence": "彼女は数年間、重い病気に苦しんでいます。"
  },
  {
    "entry": "quickly",
    "meaning_ja": "速く, すぐに, すみやかに,機敏に,ただちに",
    "example_sentence": "He quickly finished his homework.",
    "translated_sentence": "彼は素早く宿題を終えました。"
  },
  {
    "entry": "certainly",
    "meaning_ja": "確かに, きっと, 間違いなく / 《問いに応えて》承知しました, いいですとも",
    "example_sentence": "I will certainly attend the meeting tomorrow.",
    "translated_sentence": "私は明日、確かに会議に出席します。"
  },
  {
    "entry": "disagree",
    "meaning_ja": "《...と》 一致しない, 食い違う 《with ...》 / 《...と...について》 意見が合わない 《with ... on, about ...》 / (気候・食物などが) 《...に》合わない,適しない,害を与える《with ...》",
    "example_sentence": "I disagree with your opinion.",
    "translated_sentence": "私はあなたの意見に一致しません。"
  },
  {
    "entry": "plate",
    "meaning_ja": "〈C〉(通例各人用の丸い)平皿  / 〈C〉(料理の)1皿[分]《+of+名》  / 〈C〉料理の1人前  / 〈C〉(教会などの)献金皿  / 〈U〉《集合的に》(スプーン・皿など)金(銀)製の食器類  / 〈C〉(金属・ガラス・プラスチックなどの)平板,板金  / 〈C〉(金属・木などの)標札,ナンバープレート  / 〈C〉金属(石,木)版画;(本文と別刷りの)図版  / 〈C〉(印刷方法の)電気版,ステロ版  / 〈C〉(写真の)感光板  / 〈C〉《the~》(野球の)本塁(home plate)  / (…を)…‘に'めっきする《+名+with+名》  / (保護のために)…‘を'板金で覆う",
    "example_sentence": "I placed the cake on a plate.",
    "translated_sentence": "私はケーキを皿に置きました。"
  },
  {
    "entry": "require",
    "meaning_ja": "〈他〉(義務・条件として) ...を必要とする / （物事）を命じる, を強制する / （人）に命じる",
    "example_sentence": "I require your assistance.",
    "translated_sentence": "私はあなたの援助を必要とします。"
  },
  {
    "entry": "appoint",
    "meaning_ja": "《文》《…のために》(日時・場所など) を決める 《for ...》 / (人)を任命する",
    "example_sentence": "The company will appoint a new CEO next month.",
    "translated_sentence": "会社は来月、新しいCEOを任命する予定です。"
  },
  {
    "entry": "continuous",
    "meaning_ja": "(時間的・空間的に)切り目なく続く / 続けざまの,途切れない",
    "example_sentence": "The continuous rainfall caused the river to overflow.",
    "translated_sentence": "連続的な降雨により、川が氾濫しました。"
  },
  {
    "entry": "principle",
    "meaning_ja": "〈C〉原理, 原則 / 主義, 信条, 基本方針",
    "example_sentence": "Honesty is a principle that I live by.",
    "translated_sentence": "正直であることは、私が生きていく上での原則だ。"
  },
  {
    "entry": "meanwhile",
    "meaning_ja": "その間に / 一方では",
    "example_sentence": "Meanwhile, the children were playing in the garden.",
    "translated_sentence": "その間、子供たちは庭で遊んでいました。"
  },
  {
    "entry": "scare",
    "meaning_ja": "〈他〉をおびえさせる, を怖がらせる / 〈自〉おびえる, 驚く",
    "example_sentence": "The horror movie scared me so much that I couldn't sleep.",
    "translated_sentence": "ホラー映画が怖くて眠れなかった。"
  },
  {
    "entry": "stable",
    "meaning_ja": "安定した,しっかりした([[steady]]) / (人・意見などが)着実な,堅実な,信頼できる / (物理的に)安定な,復元力のある / (化学的に)安定した,簡単に分解しない",
    "example_sentence": "The economy is stable.",
    "translated_sentence": "経済は安定しています。"
  },
  {
    "entry": "declare",
    "meaning_ja": "を宣言する, を公表する / を強調する / (課税品・所得額)を申告する / を明らかにする / 《…に反対,賛成を》 表明する 《against, for ...》",
    "example_sentence": "The colony declared independence.",
    "translated_sentence": "その植民地は独立を宣言した。"
  },
  {
    "entry": "increasingly",
    "meaning_ja": "ますます, だんだん",
    "example_sentence": "She is becoming increasingly confident in her abilities.",
    "translated_sentence": "彼女はますます自分の能力に自信を持ってきています。"
  },
  {
    "entry": "initially",
    "meaning_ja": "当初,初め,もともと / 初めは",
    "example_sentence": "Initially, I was hesitant to try new things.",
    "translated_sentence": "当初、新しいことを試すのに躊躇していました。"
  },
  {
    "entry": "presidential",
    "meaning_ja": "大統領の,会長の,社長の",
    "example_sentence": "He is running for presidential office.",
    "translated_sentence": "彼は大統領職を目指しています。"
  },
  {
    "entry": "okay",
    "meaning_ja": "=[[OK]],[[O.K.]]",
    "example_sentence": "The weather today is okay.",
    "translated_sentence": "今日の天気はまあまあです。"
  },
  {
    "entry": "refugee",
    "meaning_ja": "(特に祖国からの)亡命者,逃亡者,難民",
    "example_sentence": "The refugee fled their homeland in search of safety.",
    "translated_sentence": "亡命者は安全を求めて故郷を逃れた。"
  },
  {
    "entry": "surprisingly",
    "meaning_ja": "驚くほどに",
    "example_sentence": "Surprisingly, she won the race.",
    "translated_sentence": "驚いたことに、彼女はレースに勝った。"
  },
  {
    "entry": "temporary",
    "meaning_ja": "一時的な, つかの間の, はかない,仮の",
    "example_sentence": "I need to find a temporary solution to this problem.",
    "translated_sentence": "この問題の一時的な解決策を見つける必要があります。"
  },
  {
    "entry": "split",
    "meaning_ja": "〈他〉を縦に割る, を裂く / (利益など)を分配する / 〈自〉割れる / 壊れる",
    "example_sentence": "I need to split the bill with my friends.",
    "translated_sentence": "私は友達と勘定を割り勘にする必要があります。"
  },
  {
    "entry": "expand",
    "meaning_ja": "《...にまで》 拡大する；膨張する；広がる 《into ...》 / ...を拡大する / を拡大して《...に》 する 《into ...》",
    "example_sentence": "The company plans to expand into new markets.",
    "translated_sentence": "会社は新たな市場に拡大する予定です。"
  },
  {
    "entry": "habit",
    "meaning_ja": "〈U/C〉習慣 / (動・植物の)習性 / 〈C〉(麻薬などの)常用癖 / (僧衣など,特殊な)衣服",
    "example_sentence": "Exercising regularly is a good habit.",
    "translated_sentence": "定期的な運動は良い習慣です。"
  },
  {
    "entry": "launch",
    "meaning_ja": "〈船〉を進水させる / 〈計画・事業など〉を始める / 《…に》〈ロケットなど〉を打ち上げる 《into ...》 / 〈船が〉進水する / 〈航空機などが〉発進する",
    "example_sentence": "They are planning to launch a new product next month.",
    "translated_sentence": "彼らは来月新製品を発売する予定です。"
  },
  {
    "entry": "post",
    "meaning_ja": "〈他〉〈兵士・警官など〉を配置する / 《通例受動態で》《英》《…に》〈人〉を任命する《to ...》",
    "example_sentence": "They posted guards at the entrance.",
    "translated_sentence": "彼らは入口に警備員を配置した。"
  },
  {
    "entry": "dimension",
    "meaning_ja": "〈C〉(長さ・幅・厚さなどの) 寸法 / 《通例複数形で》大きさ,範囲 / 広がり / (数学で)次元",
    "example_sentence": "The dimension of the room is 20 feet by 30 feet.",
    "translated_sentence": "部屋の寸法は20フィート×30フィートです。"
  },
  {
    "entry": "with",
    "meaning_ja": "《随伴・協調》…と, と共に / 《所有・所持》…を持っている / 《道具・手段》…で, を使って / 《財料・供給物》…を与えて /  ...に反対して / …と同時に / …に比べて / 《付帯状競》…して,しながら / …が原因で",
    "example_sentence": "I like to go for a walk with my dog.",
    "translated_sentence": "私は犬と散歩するのが好きです。"
  },
  {
    "entry": "build",
    "meaning_ja": "〈物〉'を'組み立てる,造る,建造する,建築する  / (年月をかけて)〈事〉'を'作り上げる,築き上げる;《受動態で》〈体・性質〉'を'作る",
    "example_sentence": "He built a house on the hill.",
    "translated_sentence": "彼は丘の上に家を建てた。"
  },
  {
    "entry": "primarily",
    "meaning_ja": "第一に, 主として, おもに / 最初に",
    "example_sentence": "She is primarily responsible for the project.",
    "translated_sentence": "そのプロジェクトの主な責任は彼女にあります。"
  },
  {
    "entry": "native",
    "meaning_ja": "《名詞の前にのみ用いて》出生地の,母国の  / 生まれつきの,生来の  / 原産の,土地特有の  / 《名詞の前にのみ用いて》土着の;《今はまれ》原住民の,原住民特有の  / 天然のままの;純粋な  / (…)生まれの人《+of+名》  / (移民・旅行者などと区別して)土着の人;《今はまれ》原住民  / (…に)固有の動物(植物);(…の)原産物《+of+名》",
    "example_sentence": "She is a native of New York.",
    "translated_sentence": "彼女はニューヨーク出身です。"
  },
  {
    "entry": "equal",
    "meaning_ja": "等しい / 平等の / 互角の / 《...する》力量がある《to ...》",
    "example_sentence": "Everybody is equal before the law.",
    "translated_sentence": "すべての人は法の前に平等です。"
  },
  {
    "entry": "allege",
    "meaning_ja": "(十分な証拠なしに,また理由・弁解として)…'を'主張する,申し立てる",
    "example_sentence": "The defendant's lawyer alleged that the evidence was tampered without sufficient proof.",
    "translated_sentence": "被告人の弁護士は、証拠が改ざんされたと十分な立証なしに主張した。"
  },
  {
    "entry": "network",
    "meaning_ja": "〈U〉〈C〉網,網細工  / 〈C〉網状のもの  / 〈C〉(ラジオ・テレビの)放送網",
    "example_sentence": "NET is a public television network in the United States.",
    "translated_sentence": "NETはアメリカの公共テレビネットワークです。"
  },
  {
    "entry": "newspaper",
    "meaning_ja": "(また《話》paper)〈C〉新聞  / 〈C〉新聞社  / 〈U〉新聞印刷用紙(newsprint)",
    "example_sentence": "I read the newspaper every day.",
    "translated_sentence": "毎日新聞を読んでいます。"
  },
  {
    "entry": "nuclear",
    "meaning_ja": "核の,細胞核の  / [原子]核の",
    "example_sentence": "Nuclear power plants generate electricity by using nuclear reactions.",
    "translated_sentence": "核反応を利用して原子力発電所は電力を生成します。"
  },
  {
    "entry": "ocean",
    "meaning_ja": "〈U〉海 / 〈U〉海洋,大洋 / …洋, …海 / 膨大な量(広がり)",
    "example_sentence": "The ocean is vast and mysterious.",
    "translated_sentence": "海は広大で神秘的です。"
  },
  {
    "entry": "offense",
    "meaning_ja": "〈C〉罪 / 《法律・規則などの》違反《against ...》/ 〈U〉人の感情を傷つけること / 攻撃 / 〈C〉(フットボールなどの)攻撃側",
    "example_sentence": "He was charged with a serious offense.",
    "translated_sentence": "彼は重大な犯罪で起訴された。"
  },
  {
    "entry": "official",
    "meaning_ja": "公務の,職務[上]の  / 公式の,正式の(formal);公認の  / お役織式の",
    "example_sentence": "He is an official in the government.",
    "translated_sentence": "彼は政府の公務員です。"
  },
  {
    "entry": "assistance",
    "meaning_ja": "手伝い,助力,援助",
    "example_sentence": "I need your assistance to complete this project.",
    "translated_sentence": "このプロジェクトを完成させるために、あなたの助けが必要です。"
  },
  {
    "entry": "pension",
    "meaning_ja": "〈C〉年金, 恩給 /",
    "example_sentence": "I have been contributing to my pension for over 20 years.",
    "translated_sentence": "私は20年以上、年金に貢献しています。"
  },
  {
    "entry": "opponent",
    "meaning_ja": "(討論・試合などで)(…の)相手;敵対者,反対者《+of+名》",
    "example_sentence": "He faced a tough opponent in the debate.",
    "translated_sentence": "彼は討論で厳しい相手に立ち向かった。"
  },
  {
    "entry": "oppose",
    "meaning_ja": "...に反対する,...に抵抗する,を阻止しようとする([[object to]]) / 《…に》…を対照させる,を対抗させる《to ...》 / と敵対する,に挑む / 反対する",
    "example_sentence": "I oppose the new policy.",
    "translated_sentence": "私は新しい政策に反対します。"
  },
  {
    "entry": "or",
    "meaning_ja": "《等位接続詞》《選択を表し,語句・節を結んで》《肯定文・疑問文で》…または…,…か…  / 《否定文で》…も…もない  / 《命令的表現の後で》さもないと  / 《前出の語を言い換えたり説明したりして》すなわち,言い換えれば",
    "example_sentence": "I'll go to the store or to the library.",
    "translated_sentence": "お店か図書館かどちらかに行くつもりです。"
  },
  {
    "entry": "option",
    "meaning_ja": "選択(肢)；選択権；売買選択権；付加的機能；付属品",
    "example_sentence": "I have the option to choose between two different colors.",
    "translated_sentence": "私には2つの異なる色から選ぶオプションがあります。"
  },
  {
    "entry": "organization",
    "meaning_ja": "〈U〉組織化, 編成 / (ある集合体の) 組織 / 〈C〉(ある目的・仕事のために組織された) 団体, 協会",
    "example_sentence": "The organization is responsible for managing the company's finances.",
    "translated_sentence": "この組織は会社の財務を管理する責任がある。"
  },
  {
    "entry": "organic",
    "meaning_ja": "有機体の, 生物の / (動植物の)器官の /  有機肥料を用いる / 有機的な, 組織的な",
    "example_sentence": "I prefer to buy organic produce.",
    "translated_sentence": "私は有機農産物を買うことを好む。"
  },
  {
    "entry": "performance",
    "meaning_ja": "〈U〉(…の)遂行,実行,履行《+of+名》  / 〈C〉(劇・音楽などの)公演,上演,演奏《+of+名》  / 〈C〉〈U〉(人の)腕前;(機械の)性能  / 〈C〉(…の)(すぐれた)成果,業績《+of+名》",
    "example_sentence": "The performance of the team was outstanding.",
    "translated_sentence": "チームの遂行は素晴らしかった。"
  },
  {
    "entry": "output",
    "meaning_ja": "生産高  / (コンピューターなどの)アウトプット,出力",
    "example_sentence": "The company aims to increase its output by 10% this year.",
    "translated_sentence": "会社は今年、生産高を10%増やすことを目指しています。"
  },
  {
    "entry": "card",
    "meaning_ja": "〈C〉カード / 招待状, 名刺, 入場券 / 《話》おもしろい人 / 《米話》(スポーツ試合などの)好い組み合わせ",
    "example_sentence": "I received a birthday card from my friend.",
    "translated_sentence": "友達からバースデーカードを受け取りました。"
  },
  {
    "entry": "package",
    "meaning_ja": "(あまり大きくない)包み,梱包(こんぽう);詰め合わせ品  / (箱・ケースなど,荷作り用の)容器",
    "example_sentence": "I received a small package in the mail today.",
    "translated_sentence": "今日、郵便で小さな包みを受け取りました。"
  },
  {
    "entry": "bedroom",
    "meaning_ja": "寝室;(列車内の)寝室",
    "example_sentence": "I have a bedroom in my house.",
    "translated_sentence": "私の家には１つ寝室があります。"
  },
  {
    "entry": "pause",
    "meaning_ja": "〈C〉小休止, 中断",
    "example_sentence": "There was a momentary pause in the talk.",
    "translated_sentence": "話がちょっと途切れた。"
  },
  {
    "entry": "personnel",
    "meaning_ja": "《おもに複数扱い》(官庁・学校などの)全職員  / 人事部",
    "example_sentence": "The personnel of the company are highly skilled and dedicated.",
    "translated_sentence": "会社の全職員は高い技術と献身を持っています。"
  },
  {
    "entry": "personal",
    "meaning_ja": "一個人の, 個人的な / 自分自身で行う / 身体の",
    "example_sentence": "She gave me a personal gift.",
    "translated_sentence": "彼女は私に個人的な贈り物をくれました。"
  },
  {
    "entry": "personally",
    "meaning_ja": "自分自身で,本人自ら  / 《文頭に置いて》自分としては  / 一個の人間として,個人的に  / 自分に向けられたものとして,個人に当てつけて",
    "example_sentence": "I personally believe that honesty is the best policy.",
    "translated_sentence": "私は個人的に、正直さが最善の方針だと信じています。"
  },
  {
    "entry": "personality",
    "meaning_ja": "〈C〉〈U〉(他人と区別する)個性, 性格 / 人格 / 〈C〉(特にある方面での)著名人,有名人",
    "example_sentence": "She has a great personality.",
    "translated_sentence": "彼女は素晴らしい性格を持っています。"
  },
  {
    "entry": "luxury",
    "meaning_ja": "〈U〉ぜいたく,おごり  / 〈C〉ぜいたく品  / 〈C〉楽しさ,快楽,満足",
    "example_sentence": "She enjoyed the luxury of staying in a five-star hotel.",
    "translated_sentence": "彼女は５つ星ホテルに泊まるというぜいたくを楽しんだ。"
  },
  {
    "entry": "margin",
    "meaning_ja": "へり,縁,端(edge)  / (ページの)余白,欄外  / (可能の)限界,限度  / (空間・時間・経費・活動などの)余裕,余地  / 利鞘,マージン,販売利益",
    "example_sentence": "The margin of the paper is wide.",
    "translated_sentence": "紙の余白は広いです。"
  },
  {
    "entry": "ice",
    "meaning_ja": "〈U〉氷  / 〈U〉《the~》表面に張った氷,氷面  / 〈C〉《米》氷菓子(シャーベット・フラッペなど)  / 〈U〉(気持ち・態度などの)冷たさ,よそよそしさ",
    "example_sentence": "I like to eat ice cream on a hot day.",
    "translated_sentence": "暑い日にアイスクリームを食べるのが好きです。"
  },
  {
    "entry": "into",
    "meaning_ja": "《運動,動作の方向》…の中へ(に)  / …に突きあたって  / …に加えて,の一員に  / 《状態の変化・結果》…に,…へ  / 《時間の推移》…まで  / 《割算に用いて》…を割って",
    "example_sentence": "He jumped into the pool.",
    "translated_sentence": "彼はプールに飛び込んだ。"
  },
  {
    "entry": "pleasure",
    "meaning_ja": "《…の》喜び,楽しみ《of ...》 / 〈C〉うれしいこと, 楽しいこと / 〈U〉〈C〉(とくに肉体的)快楽,悦楽 / 〈U〉《所有格の次に用いて》(…の)意志,希望，観光",
    "example_sentence": "Finding pleasure in the little things is the key to happiness.",
    "translated_sentence": "小さなことに喜びを見つけることが幸福の鍵です。"
  },
  {
    "entry": "nature",
    "meaning_ja": "〈U〉自然 / 〈C〉〈U〉(人・物事の持っている) 本質, 性質",
    "example_sentence": "I love spending time in nature.",
    "translated_sentence": "私は自然の中で過ごすことが大好きです。"
  },
  {
    "entry": "popular",
    "meaning_ja": "人気がある,評判のよい;好かれている  / 《名詞の前にのみ用いて》一般人の・民衆の,大衆の,人民の  / 《名詞の前にのみ用いて》大衆向きの,俗受けする  / 一般的な,民間に広まった  / 大衆の手の突く,安い",
    "example_sentence": "This restaurant is popular among locals.",
    "translated_sentence": "このレストランは地元の人々に人気があります。"
  },
  {
    "entry": "port",
    "meaning_ja": "〈C〉〈U〉港 / 〈C〉港町, 港市",
    "example_sentence": "The ship arrived at the port.",
    "translated_sentence": "船が港に到着しました。"
  },
  {
    "entry": "possession",
    "meaning_ja": "〈U〉所有,所持 / 〈C〉所有物,財産, 領地 / 〈U〉取り憑かれること",
    "example_sentence": "She takes great pride in her possession of the antique vase.",
    "translated_sentence": "彼女はその骨董品の花瓶を所有していることを誇りに思っています。"
  },
  {
    "entry": "pregnant",
    "meaning_ja": "(比較変化なし)妊娠している  / 《名詞の前にのみ用いて》含みのある  / 《補語にのみ用いて》(…を)いっぱいに含んだ,はらんだ《+with+名》  / 《文》想像(工夫)に富んだ",
    "example_sentence": "She is pregnant with her first child.",
    "translated_sentence": "彼女は初めての子供を妊娠しています。"
  },
  {
    "entry": "prepare",
    "meaning_ja": "〈他〉を準備する,を用意する；《AにBに備えて》心構えをさせる《A for B》〈自〉準備する《for》；心構えをする",
    "example_sentence": "I need to prepare for the exam tomorrow.",
    "translated_sentence": "明日の試験のために準備しなければなりません。"
  },
  {
    "entry": "carefully",
    "meaning_ja": "注意深く,気をつけて",
    "example_sentence": "He opened the door carefully.",
    "translated_sentence": "彼は丁寧にドアを開けた。"
  },
  {
    "entry": "presentation",
    "meaning_ja": "〈U〉〈C〉(…の)贈呈,贈与《+of+名》  / 〈U〉〈C〉(公式の)紹介,披露(ひろう);(劇・影画などの)上演  / (一般に)発表;提出,提示",
    "example_sentence": "I will give a presentation at the conference.",
    "translated_sentence": "私は会議でプレゼンテーションを行います。"
  },
  {
    "entry": "possibility",
    "meaning_ja": "〈C〉可能性, 可能なこと,ありうること / 実現可能な事柄 / （勝利・指名などの）見込みのある人 / 将来性,見込み",
    "example_sentence": "There is a possibility of rain tomorrow.",
    "translated_sentence": "明日は雨の可能性があります。"
  },
  {
    "entry": "privilege",
    "meaning_ja": "特権",
    "example_sentence": "I consider it a privilege to have been able to work with you.",
    "translated_sentence": "あなたと一緒に仕事ができたことを特権と考えています。"
  },
  {
    "entry": "priority",
    "meaning_ja": "〈U〉(時間・順序で)(…より)先(前)であること《+of(to)+名》  / 〈C〉優先するもの(こと)",
    "example_sentence": "Priority should be given to safety in any situation.",
    "translated_sentence": "どんな状況でも安全が最優先されるべきです。"
  },
  {
    "entry": "prisoner",
    "meaning_ja": "(服役中の)囚人;(未決の)拘置人,刑事被告人  / =prisoner of war  / 自由を奪われた人,動きがとれなくなった人(動物)  / 補虜",
    "example_sentence": "The prisoner escaped from the jail last night.",
    "translated_sentence": "囚人は昨夜、刑務所から脱走した。"
  },
  {
    "entry": "celebration",
    "meaning_ja": "祝賀,祝典(儀式)の挙行;〈C〉祝典,祭典,祝賀会",
    "example_sentence": "The party was a celebration of their success.",
    "translated_sentence": "そのパーティーは彼らの成功を祝うものでした。"
  },
  {
    "entry": "procedure",
    "meaning_ja": "手続き / 手順 / 方法 / 工程",
    "example_sentence": "The procedure for applying for a visa is quite complicated.",
    "translated_sentence": "ビザ申請の手続きはかなり複雑です。"
  },
  {
    "entry": "product",
    "meaning_ja": "産物;製品  / 《…の》結果,帰結《of ...》  / (数の)積  / (化学の)生成物",
    "example_sentence": "This new product is highly recommended.",
    "translated_sentence": "この新製品は非常におすすめです。"
  },
  {
    "entry": "revenue",
    "meaning_ja": "〈U〉(企業などの)総収入,収益 / (国･地方自治体の)税収入,歳入 / 〈C〉国税局 / 税務署",
    "example_sentence": "The company's revenue has been steadily increasing over the past year.",
    "translated_sentence": "会社の収益は過去1年間で着実に増加しています。"
  },
  {
    "entry": "prompt",
    "meaning_ja": "…を刺激する,促す,かりたてる / (演劇で)〈俳優〉に陰からせりふをつける",
    "example_sentence": "His curiosity prompted him to ask questions.",
    "translated_sentence": "彼は好奇心に駆られて質問した。"
  },
  {
    "entry": "state",
    "meaning_ja": "を述べる,表明する",
    "example_sentence": "He stated his opinion during the meeting.",
    "translated_sentence": "彼は会議中に自分の意見を述べました。"
  },
  {
    "entry": "quiet",
    "meaning_ja": "静かな,ひっそりした,閑静な  / 音を出さない(立てない),沈黙した(silent)  / 動きのない,静止した  / 平穏な,穏やかな,安らかな  / (色などが)落ち着いた,じみな",
    "example_sentence": "The park was peaceful and quiet.",
    "translated_sentence": "公園は静かで平和な雰囲気がありました。"
  },
  {
    "entry": "ship",
    "meaning_ja": "(おもに大洋を航行する)船,大型船  / (船の)乗組員  / 《話》飛行機,飛行船;宇宙船  / シップ型帆船",
    "example_sentence": "The ship sailed across the Pacific Ocean.",
    "translated_sentence": "その船は太平洋を横断した。"
  },
  {
    "entry": "rat",
    "meaning_ja": "ネズミ  / ひきょう者,裏切り者  / ネズミをつかまえる  / 《話》",
    "example_sentence": "The rat scurried across the floor.",
    "translated_sentence": "そのネズミは床を駆け抜けた。"
  },
  {
    "entry": "rather",
    "meaning_ja": "いくぶん,やや  / それどころか,反対に  / 《話》かなり,相当に  / 《英話》(応答に用いて)確かに,そうですとも(certainly)",
    "example_sentence": "I would rather stay home than go out tonight.",
    "translated_sentence": "今夜は外出するよりも家にいたいです。"
  },
  {
    "entry": "sum",
    "meaning_ja": "〈C〉《the》(数・量の)合計, 総計 /  《形容詞をつけて》《…の》額《of ...》",
    "example_sentence": "The sum of the two numbers is seven.",
    "translated_sentence": "2つの数字の合計は7です。"
  },
  {
    "entry": "recognition",
    "meaning_ja": "〈U〉見て気がつくこと,認識 / 見覚え / 《...の》承認《of》 / 《...の》表彰《of》",
    "example_sentence": "Facial recognition technology is becoming more common in our daily lives.",
    "translated_sentence": "顔認識技術は私たちの日常生活でより一般的になっています。"
  },
  {
    "entry": "concept",
    "meaning_ja": "(特に哲学用語として)(…の)概念,観念《+of+名》,(…という)概念《+that節》",
    "example_sentence": "The concept of time is difficult to grasp.",
    "translated_sentence": "時間の概念は理解しにくいです。"
  },
  {
    "entry": "regulation",
    "meaning_ja": "〈C〉規則,規定;法規,条例  / 〈U〉(…の)規制,調整《+of+名》",
    "example_sentence": "The government implemented new regulations to improve safety standards.",
    "translated_sentence": "政府は安全基準を向上させるために新しい規則を実施しました。"
  },
  {
    "entry": "stone",
    "meaning_ja": "〈U〉(物質としての)石,石材  / 〈C〉小石,岩石の小片  / 〈C〉《複合語を作って》(特定の目的に用いる)石材  / =precious stone  / 〈C〉(形・堅さが)石に似たもの(あられなど)  / 〈C〉(腎臓・膀胱(ぼうこう)などの)結石  / 〈C〉(果実の)種,核  / 〈C〉《英》(体重を表す重量単位の)ストーン(14ポンド(約5.35キログラム)に相当)  / 石造りの,石の・石器製の  /",
    "example_sentence": "The stone was hard and cold to the touch.",
    "translated_sentence": "石は触れた時に硬くて冷たかった。"
  },
  {
    "entry": "confident",
    "meaning_ja": "《...に》自信のある, 《...を》確信している《of ...》",
    "example_sentence": "She is confident in her abilities.",
    "translated_sentence": "彼女は自分の能力に自信があります。"
  },
  {
    "entry": "relatively",
    "meaning_ja": "比較的に, 相対的に  / 《...に》比べて, 《...の》割に《to ...》",
    "example_sentence": "She is relatively tall compared to her friends.",
    "translated_sentence": "彼女は友達と比較して比較的背が高いです。"
  },
  {
    "entry": "relation",
    "meaning_ja": "関係,関連 / 親戚(関係) / 話すこと / 犯罪通報",
    "example_sentence": "She has a close relation with her sister.",
    "translated_sentence": "彼女は姉妹との関係が密接だ。"
  },
  {
    "entry": "relax",
    "meaning_ja": "〈緊張・力など〉‘を'ゆるめる,和らける(loosen)  / 〈規則など〉‘を'緩和する  / 〈人〉‘を'楽にさせる,くつろがせる  / 〈緊張・力などが〉ゆるむ,和らぐ;〈規則などが〉緩和される  / 〈人が〉楽にする,くつろぐ,緊張をほぐす",
    "example_sentence": "I like to relax by reading a book.",
    "translated_sentence": "本を読むことでリラックスするのが好きです。"
  },
  {
    "entry": "consultant",
    "meaning_ja": "専門的助言をする人,顧問,コンサルタント",
    "example_sentence": "The consultant provided expert advice to the company.",
    "translated_sentence": "コンサルタントは企業に専門的な助言を提供しました。"
  },
  {
    "entry": "resort",
    "meaning_ja": "〈自〉《...に...を》やむを得ず訴える, 頼る《to ... for ...》",
    "example_sentence": "Don't resort to violence.",
    "translated_sentence": "暴力に訴えてはいけない。"
  },
  {
    "entry": "response",
    "meaning_ja": "〈C〉《...に対する》返事, 返答《to ...》 / 〈C〉〈U〉《...に対する》反応, 反響《to ...》",
    "example_sentence": "I'm waiting for your response.",
    "translated_sentence": "あなたの返事を待っています。"
  },
  {
    "entry": "rival",
    "meaning_ja": "(…の)競争相手,ライバル,好敵手,匹敵する人(物)《+for+名》,(…における)競争相手《+in+名》",
    "example_sentence": "He is my biggest rival in the competition.",
    "translated_sentence": "彼は競争相手の中で私の最大のライバルです。"
  },
  {
    "entry": "crew",
    "meaning_ja": "〈C〉(船・飛行機の) 乗組員 / (共同の仕事をする)従業員 / 《話》仲間,連中",
    "example_sentence": "The crew worked together to navigate through the storm.",
    "translated_sentence": "乗組員は共に嵐を乗り越えるために働きました。"
  },
  {
    "entry": "roof",
    "meaning_ja": "屋根;屋上;《比喩(ひゆ)的に》家,家庭  / (形・位置・働きが)屋根に似た物  / …‘に'屋根をつける;…‘に'(…の)屋根をつける《+名+with+名》",
    "example_sentence": "The cat is sitting on the roof.",
    "translated_sentence": "猫が屋根に座っています。"
  },
  {
    "entry": "write",
    "meaning_ja": "〈文字・文章・書物など〉'を'書く,記す;〈事〉'を'書く,手紙に書く  / 〈手紙〉'を'書く  / 《話》〈人〉‘に'手紙をお書く  / 《通例受動熊で》(書たいように)…'を'はっきりと示す,明記する,刻みつける  / 字(文章など)を書く  / 手紙を書く,便りをする  / 〈ペンなどが〉書ける",
    "example_sentence": "I wrote a letter to my parents.",
    "translated_sentence": "私は両親への手紙を書きました。"
  },
  {
    "entry": "young",
    "meaning_ja": "若い,幼い,年の行かない  / 年下のほうの  / 若々しい,青年らしい(youthful),元気な(vigorous)  / 新興の,(歴史の)新しい(new);(季節・時間などの)まだ早い(early);新鮮な,生き生きした  / 経験の浅い,未熟な;(…に)不慣れな《+in(at)+名》  / 《通例 the young》《集合的に》若い人たち  / 《集合的に》《単数・複数扱い》(動物・鳥の)子,ひな",
    "example_sentence": "He is a young man.",
    "translated_sentence": "彼は若い男性です。"
  },
  {
    "entry": "zero",
    "meaning_ja": "〈U〉(アラビア数字の)0,零,ゼロ  / 〈U〉(温度計の)零度;(尺度の)零位;零点  / 〈U〉無,空(くう)(nothing)  / 〈U〉最下点,どん低  / 零の,ゼロの  / 〈計器など〉‘を'ゼロの目盛りに合わせる",
    "example_sentence": "There are zero apples on the table.",
    "translated_sentence": "テーブルの上にはりんごがゼロ個あります。"
  },
  {
    "entry": "row",
    "meaning_ja": "〈他〉〈船〉をこぐ  / 《副詞[句]を伴って》〈人・物〉を船をこいで運ぶ  / 〈自〉船をこぐ",
    "example_sentence": "She likes to row on the lake in the morning.",
    "translated_sentence": "彼女は朝、湖でボートを漕ぐのが好きです。"
  },
  {
    "entry": "royal",
    "meaning_ja": "《しばしばR-》王の,女王の,王室の  / 王(女王)に属する,王(女王)に仕える  / 王(女王)から与えられる  / 王(女王)にふさわしい,威厳のある,壮麗な,堂々たる",
    "example_sentence": "The royal family attended the ceremony.",
    "translated_sentence": "王族は式典に出席しました。"
  },
  {
    "entry": "data",
    "meaning_ja": "資料,事実;情報",
    "example_sentence": "I need to gather all the data for the presentation.",
    "translated_sentence": "プレゼンテーションのためにすべての資料を集める必要があります。"
  },
  {
    "entry": "decade",
    "meaning_ja": "10年間",
    "example_sentence": "I have been working in this company for over a decade.",
    "translated_sentence": "私はこの会社で10年以上働いています。"
  },
  {
    "entry": "pollution",
    "meaning_ja": "〈U〉《...を》汚すこと, 《...が》汚されていること《of ...》 / 汚染物質",
    "example_sentence": "The city has a serious problem with pollution.",
    "translated_sentence": "都市は汚染の問題が深刻です。"
  },
  {
    "entry": "deficit",
    "meaning_ja": "〈C〉(金銭の)不足額,赤字 / 不利な条件, 立場",
    "example_sentence": "The government is facing a budget deficit.",
    "translated_sentence": "政府は予算の不足額に直面しています。"
  },
  {
    "entry": "scientific",
    "meaning_ja": "科学の / 学術的な / 体系的な",
    "example_sentence": "Scientific research has led to many advancements in technology.",
    "translated_sentence": "科学的な研究は技術の多くの進歩をもたらしています。"
  },
  {
    "entry": "mystery",
    "meaning_ja": "〈C〉神秘的な物(事)  / 〈C〉好寄心(気がかり)を起こさせる物(事)  / 〈C〉推理小説(劇,映画)  / 〈U〉神秘[性]  / 〈C〉《複数形で》(宗数的)秘法,秘教;(古代ギリシア・ローマの)神秘儀式",
    "example_sentence": "The disappearance of the ancient artifact remains a mystery.",
    "translated_sentence": "古代の遺物の消失は未解決のままです。"
  },
  {
    "entry": "nervous",
    "meaning_ja": "神経の / 神経質な / 心配な, 不安な, 緊張して",
    "example_sentence": "She felt nervous before her big presentation.",
    "translated_sentence": "彼女は大きなプレゼンテーションの前に緊張していました。"
  },
  {
    "entry": "tip",
    "meaning_ja": "〈C〉《...の》先, はし,先端 《of ...》 / 先端に付ける物(部分)",
    "example_sentence": "I attached a sharp tip to the end of the stick.",
    "translated_sentence": "私は棒の先端に鋭い先を付けました。"
  },
  {
    "entry": "secondary",
    "meaning_ja": "第2の,2番目の;(…の)次の《+to+名》  / 派生的な,二次的な,あまり重要でない  / 中等学校[教育]の  / 二次電流の",
    "example_sentence": "He is the secondary character in the story.",
    "translated_sentence": "彼は物語の第2のキャラクターです。"
  },
  {
    "entry": "second",
    "meaning_ja": "〈C〉(時間・角度の) 秒  / 《単数形で》瞬間 (moment)",
    "example_sentence": "I'll be with you in a second.",
    "translated_sentence": "すぐそちらへまいります。"
  },
  {
    "entry": "research",
    "meaning_ja": "…を研究する,調査する  / 《…を》研究する,調査する《into, on ...》",
    "example_sentence": "I am conducting research on the effects of exercise on mental health.",
    "translated_sentence": "私は運動が精神的健康に与える影響についての研究を行っています。"
  },
  {
    "entry": "secretary",
    "meaning_ja": "(個人・会社などの)秘書《+to(of)+名》  / (官公庁などの)書記[官],秘書官  / 《S-》《米》長官;《英》大臣  / (本箱付きの)書き物机",
    "example_sentence": "She works as a secretary to the CEO of a multinational company.",
    "translated_sentence": "彼女は多国籍企業のCEOの秘書として働いています。"
  },
  {
    "entry": "sector",
    "meaning_ja": "扇形  / 軍事作戦地区  / (肉事などの)部門",
    "example_sentence": "The fans in the stadium were arranged in a sector shape.",
    "translated_sentence": "スタジアムのファンは扇形に配置されていました。"
  },
  {
    "entry": "sensitive",
    "meaning_ja": "(五感が)敏感な,感じやすい  / 物事を非常に気にする,神経過敏な  / 感光性の;(器械などが)感度のよい",
    "example_sentence": "She has sensitive hearing and can hear even the faintest sounds.",
    "translated_sentence": "彼女は五感が敏感で、最もかすかな音まで聞くことができる。"
  },
  {
    "entry": "discuss",
    "meaning_ja": "…‘を'論ずる,討議する,検討する",
    "example_sentence": "We discussed the plan for two hours.",
    "translated_sentence": "私たちは２時間計画について話し合いました。"
  },
  {
    "entry": "seventeen",
    "meaning_ja": "〈C〉(数の)17,17の記号(17,XVIIなど)  / 〈U〉(24時間制の)17時;17分;17歳  / 〈U〉《複数扱い》17人,17個  / 17の,17人の,17個の  / 《補語にのみ用いて》17歳の(で)",
    "example_sentence": "I have seventeen books on my shelf.",
    "translated_sentence": "私の本棚には17冊の本があります。"
  },
  {
    "entry": "shell",
    "meaning_ja": "貝がら,貝;(甲虫・卵などの)堅い殻(から),(カメなどの)こうら  / (種子・果実などの)堅い外皮,さや  / 殻に似た物;建物の外郭,骨組  / 《比喩(ひゆ)的に》(心を閉ざした)殻,打ち解けない態度  / 砲弾;《米》薬きょう  / シェル(一人または二,三人でこぐ競漕用ボート)",
    "example_sentence": "Conchology is the study of shells.",
    "translated_sentence": "貝類学は貝殻の研究です。"
  },
  {
    "entry": "mobile",
    "meaning_ja": "動かすことができる,移動できる / 機動力のある /   (心・表情が)次々と移り変わる;表情の豊かな /   (社会・階層が上下に)流動できる",
    "example_sentence": "I bought a new mobile phone.",
    "translated_sentence": "私は新しい携帯電話を買った。"
  },
  {
    "entry": "retail",
    "meaning_ja": "小売り",
    "example_sentence": "Organic food is one of the largest growth areas in food in the UK in retail.",
    "translated_sentence": "オーガニック食品は、英国の小売業における食品分野で最大の成長分野のひとつである。"
  },
  {
    "entry": "sigh",
    "meaning_ja": "(悲しみ・疲れ・安心などで)ため息をつく《+with+名》;(…を)嘆いてため息をつく《+over+名》  / 〈風などが〉ため息をつくような音を立てる  / 《文》(…を)思って(あこがれて)ため息をつく《+for(after)+名》",
    "example_sentence": "She sighed with relief when she heard the good news.",
    "translated_sentence": "彼女は良い知らせを聞いて安心してため息をついた。"
  },
  {
    "entry": "signal",
    "meaning_ja": "(警告・指示・情報などを伝える)信号,合図  / (…の)きっかけ,動機,導火線《+for+名》",
    "example_sentence": "The traffic signal turned red, so I stopped my car.",
    "translated_sentence": "信号が赤に変わったので、私は車を停めました。"
  },
  {
    "entry": "significance",
    "meaning_ja": "〈U〉重要性,重大さ([[importance]]) / 《...の》意味,意義([[meaning]])《of ...》",
    "example_sentence": "The significance of this discovery cannot be overstated.",
    "translated_sentence": "この発見の重要性は言い尽くせない。"
  },
  {
    "entry": "significant",
    "meaning_ja": "重要な / 意味のある / 暗示的な / 有意義な",
    "example_sentence": "This is a significant achievement.",
    "translated_sentence": "これは重要な成果です。"
  },
  {
    "entry": "simply",
    "meaning_ja": "簡単に,分かり易く  / 飾り気なく,簡素に;もったいぶらないで,率直に  / 単に,ただ(merely, only)  / 全く,ほんとうに(really);とても,悲常に(very much)",
    "example_sentence": "You can simply press this button to start the machine.",
    "translated_sentence": "このボタンを簡単に押すだけで、機械を起動することができます。"
  },
  {
    "entry": "sixteen",
    "meaning_ja": "〈C〉(数の)16;16の記号(16,XVIなど)  / 〈U〉(24時間制の)16時,16分,16歳  / 《複数扱い》16人,16個  / 16の,16人の,16個の  / 《補語にのみ用いて》16歳の(で)",
    "example_sentence": "She celebrated her sixteenth birthday with a big party.",
    "translated_sentence": "彼女は大きなパーティーで16歳の誕生日を祝った。"
  },
  {
    "entry": "employee",
    "meaning_ja": "雇われる人,従業員",
    "example_sentence": "The company hired a new employee last week.",
    "translated_sentence": "会社は先週新しい従業員を採用しました。"
  },
  {
    "entry": "emphasize",
    "meaning_ja": "…‘を'強調する,重要視する",
    "example_sentence": "I want to emphasize the importance of teamwork.",
    "translated_sentence": "私はチームワークの重要性を強調したいです。"
  },
  {
    "entry": "environmental",
    "meaning_ja": "環境の;自然環境の",
    "example_sentence": "The world is confronted with the problem of environmental pollution.",
    "translated_sentence": "世界は環境汚染の問題に直面しています。"
  },
  {
    "entry": "soldier",
    "meaning_ja": "(陸軍の)軍人,(特に)下士官,兵士  / (主義・主張のために闘う勇敢な)戦士,闘士  / 軍人になる,軍務に服する",
    "example_sentence": "The soldier fought bravely on the battlefield.",
    "translated_sentence": "その軍人は勇敢に戦場で戦った。"
  },
  {
    "entry": "excellent",
    "meaning_ja": "すぐれた,優秀な;(成績評点の)優の,秀の",
    "example_sentence": "She is an excellent cook.",
    "translated_sentence": "彼女は素晴らしい料理人です。"
  },
  {
    "entry": "species",
    "meaning_ja": "〈C〉(生物分類上の)種(しゅ),種族(「属」(genus)の下の単位)  / 〈C〉(…の)種類《+of+名》  / 《the ~》人類(mankind)",
    "example_sentence": "There are over 8 million species of animals on Earth.",
    "translated_sentence": "地球上には800万種以上の動物が存在しています。"
  },
  {
    "entry": "speed",
    "meaning_ja": "〈U〉(運動・動作の)速いこと,速さ / 〈C〉速度,速力(velocity)  / 〈C〉(自動車などの)変速ギア / 〈U〉〈C〉(写真で)  / (フィルムの)感度,感光性  / レンズの明るさ / シャッター速度 / 覚醒(かくせい)剤,興奮剤",
    "example_sentence": "He ran at a tremendous speed.",
    "translated_sentence": "彼は驚異的な速さで走った。"
  },
  {
    "entry": "biological",
    "meaning_ja": "生物学の,生物学的",
    "example_sentence": "Biological research is essential for understanding the complexities of life.",
    "translated_sentence": "生物学の研究は生命の複雑さを理解するために不可欠です。"
  },
  {
    "entry": "status",
    "meaning_ja": "〈C〉〈U〉地位,身分;資格  / 〈U〉高い地位,  / 〈C〉状態,事態",
    "example_sentence": "She has achieved a high status in her career.",
    "translated_sentence": "彼女はキャリアで高い地位を築いています。"
  },
  {
    "entry": "precisely",
    "meaning_ja": "正確に,ちょうど",
    "example_sentence": "He precisely followed the instructions.",
    "translated_sentence": "彼は正確に指示に従った。"
  },
  {
    "entry": "stress",
    "meaning_ja": "〈U〉〈C〉(精神的・感情的な) 緊張 / 強勢, アクセント / 〈U〉《...に対する》強調《on ...》 / (一般に) 圧迫",
    "example_sentence": "I need to find a way to reduce stress in my life.",
    "translated_sentence": "私は人生でストレスを減らす方法を見つける必要があります。"
  },
  {
    "entry": "strict",
    "meaning_ja": "(人が) 厳しい, 厳格な / 〈規則などが〉厳しい / 厳密な, 正確な",
    "example_sentence": "The teacher was strict with the students.",
    "translated_sentence": "先生は生徒たちに厳しかった。"
  },
  {
    "entry": "sun",
    "meaning_ja": "《the~》太陽,日  / 〈U〉《the~》日光  / 〈C〉恒星",
    "example_sentence": "The sun is shining brightly today.",
    "translated_sentence": "今日は太陽が明るく輝いています。"
  },
  {
    "entry": "supporter",
    "meaning_ja": "支持者,後援者;支え,支える物  / 扶養する人  / (運動選手が使う)サポーター",
    "example_sentence": "She has a strong group of supporters who always stand by her.",
    "translated_sentence": "彼女にはいつも彼女を支えてくれる強力な支持者のグループがいます。"
  },
  {
    "entry": "surgery",
    "meaning_ja": "〈U〉外科,外科医術  / 〈U〉手術  / 〈C〉《英》診察室;〈C〉〈U〉診察時間",
    "example_sentence": "He underwent surgery to remove the tumor.",
    "translated_sentence": "彼は腫瘍を取り除くために手術を受けました。"
  },
  {
    "entry": "tall",
    "meaning_ja": "(背の)高い  / 《補語にのみ用いて》背たけ(高さ)が…の  / 《話》(話などが)大げさな,誇張した  / (程度・量が)法外な,ものすごい",
    "example_sentence": "He is a tall man",
    "translated_sentence": "彼は背が高い男だ"
  },
  {
    "entry": "tea",
    "meaning_ja": "〈U〉茶,(特に)紅茶  / 〈U〉(乾燥した)茶の葉;茶の木  / 〈U〉茶に似た飲料,煎じ茶  / 〈C〉〈U〉午後のお茶  / 〈C〉〈U〉お茶の会(午後の軽食を出すパーティー)",
    "example_sentence": "I'd like to have a cup of tea.",
    "translated_sentence": "私はお茶をいただきたいです。"
  },
  {
    "entry": "gender",
    "meaning_ja": "(名詞・代名詞の)性",
    "example_sentence": "Gender equality is important for a fair society.",
    "translated_sentence": "性の平等は公正な社会にとって重要です。"
  },
  {
    "entry": "television",
    "meaning_ja": "〈U〉テレビ放送(《略》TV)  / (また television set)〈C〉テレビ[受像機]  / 〈U〉テレビ産業;テレビ放送技術",
    "example_sentence": "I bought a new television yesterday.",
    "translated_sentence": "昨日新しいテレビを買った。"
  },
  {
    "entry": "tent",
    "meaning_ja": "テント,天幕 / テント状のもの",
    "example_sentence": "I set up a tent in the backyard for our camping trip.",
    "translated_sentence": "キャンプ旅行のために、私は庭にテントを設置しました。"
  },
  {
    "entry": "tendency",
    "meaning_ja": "〈C〉《...する, ...への》傾向《to, toward ...》 / 性癖, 癖",
    "example_sentence": "She has a tendency to overthink things.",
    "translated_sentence": "彼女は物事を過度に考える傾向があります。"
  },
  {
    "entry": "terrorist",
    "meaning_ja": "テロリスト,暴力主義者,恐怖政治家",
    "example_sentence": "The police arrested a suspected terrorist yesterday.",
    "translated_sentence": "昨日、警察は容疑者のテロリストを逮捕しました。"
  },
  {
    "entry": "theme",
    "meaning_ja": "主題,論題,題[目],テーマ  / (児童・生徒の)作文  / (曲の)主題,主旋律(一曲の中にさまざまに形を変えて繰り返し出てくる旋律)",
    "example_sentence": "The theme of the party is 'Hawaiian Luau'.",
    "translated_sentence": "パーティーの主題は「ハワイアンルアウ」です。"
  },
  {
    "entry": "theory",
    "meaning_ja": "〈C〉(…の)(学問的な)理論,学説《+of+名》  / 〈C〉〈U〉(…の実地に対する)理論《+of+名》  / 〈C〉(…という)推測,憶測;見解,孝え《+that節》",
    "example_sentence": "The theory of relativity revolutionized our understanding of space and time.",
    "translated_sentence": "相対性理論は、私たちの空間と時間に対する理解を一変させた。"
  },
  {
    "entry": "theoretical",
    "meaning_ja": "【形】理論的な / 仮説の / 空論的な",
    "example_sentence": "Theoretical physics is a branch of science that deals with the fundamental principles of the universe.",
    "translated_sentence": "理論物理学は宇宙の基本原理に関わる科学の一分野です。"
  },
  {
    "entry": "clothing",
    "meaning_ja": "〈U〉衣類, 衣料品",
    "example_sentence": "She bought new clothing for the party.",
    "translated_sentence": "彼女はパーティーのために新しい洋服を買いました。"
  },
  {
    "entry": "they",
    "meaning_ja": "彼らは, 彼女らは, それらが, それらは / (一般に) 人々, 世間の人",
    "example_sentence": "They are going to the movies tonight.",
    "translated_sentence": "彼らは今夜映画に行く予定です。"
  },
  {
    "entry": "thirty",
    "meaning_ja": "〈C〉(数の)30;30の記号(30,XXX など)  / 〈C〉30分,30歳  / 《複数扱い》30個;30人《the thirties》(世紀の)30年代  / 30の,30人の,30個の  / 《補語にのみ用いて》30歳(で)",
    "example_sentence": "I have thirty books on my shelf.",
    "translated_sentence": "私の本棚には30冊の本があります。"
  },
  {
    "entry": "thousand",
    "meaning_ja": "1000[人,個など]  / 千の記号(1000,M)  / 1000の,1000人の,1000個の  / 多数の,無数の",
    "example_sentence": "There were a thousand people at the concert.",
    "translated_sentence": "コンサートには1000人の人がいました。"
  },
  {
    "entry": "tissue",
    "meaning_ja": "〈U〉〈C〉(生物体の)組織  / 〈U〉〈C〉薄織物  / 〈U〉〈C〉水を吸収する柔らかな薄紙  / 〈C〉カーボンコピー用薄紙  / 〈C〉《a ~》(…を)織り交ぜて作ったもの《+of+名》  / =tissue paper",
    "example_sentence": "She wiped her tears with a tissue.",
    "translated_sentence": "彼女はティッシュで涙を拭いた。"
  },
  {
    "entry": "tower",
    "meaning_ja": "塔,タワー",
    "example_sentence": "The Eiffel Tower is one of the most recognizable structures in the world.",
    "translated_sentence": "エッフェル塔は世界で最も有名な建造物の1つです。"
  },
  {
    "entry": "treatment",
    "meaning_ja": "〈U〉《...の》取り扱い, 扱い方《of ...》 / 治療 / 〈C〉《...に対する》治療法《for ...》",
    "example_sentence": "The doctor prescribed a new treatment for my condition.",
    "translated_sentence": "医師は私の症状に対して新しい治療法を処方した。"
  },
  {
    "entry": "trigger",
    "meaning_ja": "(銃砲の)引き金  / 《話》敏しような,抜け目のない",
    "example_sentence": "He pulled the trigger and the gun fired.",
    "translated_sentence": "彼は引き金を引いて、銃が発射された。"
  },
  {
    "entry": "twice",
    "meaning_ja": "2回,2度  / 2倍[に]",
    "example_sentence": "I have to go to the store twice today.",
    "translated_sentence": "今日は2回店に行かなければなりません。"
  },
  {
    "entry": "twin",
    "meaning_ja": "双生児の一人;《複数形で》双生児,ふたご  / よく似た人(物)の片方;《複数形で》対",
    "example_sentence": "She is a twin.",
    "translated_sentence": "彼女は双子です。"
  },
  {
    "entry": "universe",
    "meaning_ja": "《the universe,時に the Universe》宇宙(cosmos);森羅万象;[全]人類(humankind)  / 〈C〉世界,領域,分野",
    "example_sentence": "The universe is vast and mysterious.",
    "translated_sentence": "宇宙は広大で神秘的です。"
  },
  {
    "entry": "unique",
    "meaning_ja": "ただ一つしかない, 唯一の / 比類のない / 《話》珍しい, 独特の",
    "example_sentence": "This is a unique opportunity to travel the world.",
    "translated_sentence": "これは世界を旅するためのたった一度のチャンスです。"
  },
  {
    "entry": "user",
    "meaning_ja": "使用者,消費者  / 財産権[の使用]",
    "example_sentence": "The user logged into the system.",
    "translated_sentence": "使用者がシステムにログインしました。"
  },
  {
    "entry": "vast",
    "meaning_ja": "広大な,広範囲な  / (数・量・程度などにおいて)ものすごい,ばく大な",
    "example_sentence": "The Sahara Desert is a vast expanse of sand.",
    "translated_sentence": "サハラ砂漠は広大な砂の広がりです。"
  },
  {
    "entry": "vessel",
    "meaning_ja": "〈C〉船舶 / 容器 / 管,血管",
    "example_sentence": "The vessel sailed across the ocean.",
    "translated_sentence": "その船舶は海を横断しました。"
  },
  {
    "entry": "visible",
    "meaning_ja": "目に見える  / 明らかな,明白な",
    "example_sentence": "The stars are visible in the night sky.",
    "translated_sentence": "夜空には星が目に見える。"
  },
  {
    "entry": "visual",
    "meaning_ja": "視覚の  / 目に見える;目で見た  / 有視界の",
    "example_sentence": "Visual arts are a form of creative expression.",
    "translated_sentence": "視覚芸術は創造的な表現の一形態です。"
  },
  {
    "entry": "instead",
    "meaning_ja": "その代わりとして, それよりも, そうではなく",
    "example_sentence": "I decided to walk instead of taking the bus.",
    "translated_sentence": "バスに乗る代わりに歩くことに決めました。"
  },
  {
    "entry": "interaction",
    "meaning_ja": "相互作用",
    "example_sentence": "There is a strong interaction between the two characters in the movie.",
    "translated_sentence": "映画の中で、二人のキャラクターの間には強い相互作用があります。"
  },
  {
    "entry": "weak",
    "meaning_ja": "(物が)弱い  / (通常よりも)衰えている,力が弱い,勢いがない  / (性格の点で)弱い,意志薄弱な  / 劣っている  / (相場などが)値下がりぎみの  / 水っぽい,薄い  / (音節・母音・語が)強勢のない,弱強勢の;(動詞が)弱変化の",
    "example_sentence": "He is weak and easily gets tired.",
    "translated_sentence": "彼は弱くてすぐに疲れます。"
  },
  {
    "entry": "wealth",
    "meaning_ja": "富,財産  / 《しばしば a wealth》豊富(な…),たくさん(の…)《+of+名》",
    "example_sentence": "He accumulated great wealth through his successful business ventures.",
    "translated_sentence": "彼は成功したビジネスで大きな富を蓄積しました。"
  },
  {
    "entry": "weapon",
    "meaning_ja": "武器,兵器  / 攻撃(防御)手段",
    "example_sentence": "He was arrested for carrying a concealed weapon.",
    "translated_sentence": "彼は秘密裏に武器を持っていたため逮捕された。"
  },
  {
    "entry": "welfare",
    "meaning_ja": "幸福,繁栄  / 福祉[事業],厚生[事業]  / (米政府の)生活保護",
    "example_sentence": "He is working for social welfare.",
    "translated_sentence": "彼は社会福祉のために働いている。"
  },
  {
    "entry": "kind",
    "meaning_ja": "《...に》親切な, 優しい, 思いやりのある《to ...》",
    "example_sentence": "She is a kind person.",
    "translated_sentence": "彼女は親切な人です。"
  },
  {
    "entry": "kind",
    "meaning_ja": "〈C〉〈U〉《…の》種類, 部類([[sort]])《of ...》",
    "example_sentence": "She is a kind person.",
    "translated_sentence": "彼女は親切な人です。"
  },
  {
    "entry": "wrap",
    "meaning_ja": "(人・物に)…‘を'巻きつける,掛ける《+名+around(about)+名〈人・物〉》  / (…で)〈人・物〉‘を'くるむ,包む〈+名〈人・物〉+up(+up+名+in+名》  / 《話》…‘を'終了する《+up+名,+名+up》",
    "example_sentence": "She used a scarf to wrap around her neck.",
    "translated_sentence": "彼女はマフラーを首に巻きつけました。"
  },
  {
    "entry": "your",
    "meaning_ja": "あなた[がた]の,君[たち]の  / 《話》《しばしば非難や軽べつの意を込めて》君[たち]のいう,例の,いわゆる  / 《一般に人を指して》人の  / 《敬称の一部として》",
    "example_sentence": "This is your book.",
    "translated_sentence": "これはあなたの本です。"
  },
  {
    "entry": "youth",
    "meaning_ja": "〈U〉若さ,年の若いこと;若々しさ,元気  / 〈U〉青年時代,青春[期];(時代などの)初期  / 〈C〉《しばしば軽べつして》青年,若者,(特に)若い男  / 〈U〉《集合的に》《単数・複数扱い》《文》青年,若者たち(young people)",
    "example_sentence": "Youth is a time of exploration and discovery.",
    "translated_sentence": "若さは探求と発見の時期です。"
  },
  {
    "entry": "practical",
    "meaning_ja": "実用的な",
    "example_sentence": "The practical application of this theory is still under study.",
    "translated_sentence": "この理論の実用的な適用はまだ研究中です。"
  },
  {
    "entry": "dangerous",
    "meaning_ja": "危険な,危ない;危害を加える,険呑(けんのん)な",
    "example_sentence": "The storm created dangerous conditions for driving.",
    "translated_sentence": "嵐が運転に危険な状況を作り出しました。"
  },
  {
    "entry": "dark",
    "meaning_ja": "暗いやみの  / (毛髪・皮膚・目の)浅黒い,(色の)濃い  / 陰うつな,陰気な(gloomy)  / 腹黒い,悪意のある(evil)  / 隠した,秘密の  / (意味が)明らかでない,なぞめいた  / 未発の;無知の",
    "example_sentence": "The sky was dark.",
    "translated_sentence": "空は暗かった。"
  },
  {
    "entry": "depend",
    "meaning_ja": "〈自〉〈物事が〉 ...次第である, ...にかかっている 《on ...》 / 〈人が〉頼る, 依存する",
    "example_sentence": "I depend on my parents for financial support.",
    "translated_sentence": "私は経済的な支援を親に頼っています。"
  },
  {
    "entry": "dinner",
    "meaning_ja": "〈C〉〈U〉(1日の食事の中で)主要な食事,正餐(せいさん);(現在では,特に)夕食,晩餐  / 〈C〉(公式の)晩餐会  / 晩餐(用)の",
    "example_sentence": "Let's have dinner in a nice restaurant tonight.",
    "translated_sentence": "今夜はナイスなレストランでディナーしましょう。"
  },
  {
    "entry": "dirty",
    "meaning_ja": "汚い,汚れた,不潔な;泥だらけの,泥んこの  / 不正な,卑劣な,下劣な  / 下品な,卑わいな,わいせつな  / 《話》(天気が)荒れ模様の(stormy)  / (原子兵器が)汚れた,放射性降下物の多い,放射能の多い  / …‘を'汚す;〈名誉・名声など〉‘を'汚す,傷つける  / 汚れる",
    "example_sentence": "The room was very dirty.",
    "translated_sentence": "部屋はとても汚かった。"
  },
  {
    "entry": "discover",
    "meaning_ja": "〈今まで知らなかった物・場所〉‘を'発見する,見付ける  / 〈今まで知らなかった事〉‘を'発見する,悟る",
    "example_sentence": "I discover a hidden treasure in the attic.",
    "translated_sentence": "私は屋根裏部屋で隠された宝物を発見する。"
  },
  {
    "entry": "dog",
    "meaning_ja": "犬  / 雄犬;イヌ科の動物(特にイタチ・オオカミ・カワウソ)の雄  / 《話》《形容詞を伴って》やつ  / 《話》くだらない男,下劣なやつ  / 《米俗》粗悪な物,くだらない物  / つかみ道具(氷づかみ,掛けかぎなど)  / 《the dogs》《英》競犬",
    "example_sentence": "The dog barked loudly.",
    "translated_sentence": "犬が大きな声で吠えた。"
  },
  {
    "entry": "door",
    "meaning_ja": "(家・部屋・家具の)扉  / 戸口,出入り口(doorway)  / 1戸,1軒  / 《比喩(ひゆ)的に》(…に至る)入口,出口《+to+名》",
    "example_sentence": "He shut the door behind him.",
    "translated_sentence": "彼は後ろのドアを閉めた。"
  },
  {
    "entry": "degree",
    "meaning_ja": "〈C〉U〉程度,度合  / 〈U〉《古》(社会的)階級,地位,身分  / 〈C〉学位,称号  / 〈C〉(寒暖計の)度  / 〈C〉(角度の)度  / 〈C〉(数学で)次[数]  / 〈C〉(形容詞・副詞の比較の)級  / 〈C〉(犯罪の)等級  / 〈C〉(音階の)度,階  / ちょっと,いくぶん",
    "example_sentence": "She has a high degree of intelligence.",
    "translated_sentence": "彼女は高い知性を持っている。"
  },
  {
    "entry": "discovery",
    "meaning_ja": "〈U〉発見〈C〉発見したもの",
    "example_sentence": "The scientist made a groundbreaking discovery.",
    "translated_sentence": "その科学者は画期的な発見をした。"
  },
  {
    "entry": "eight",
    "meaning_ja": "〈C〉(数の)8;8の記号(18,VIIなど)  / 〈U〉8時,8分;8歳  / 〈U〉《複数扱い》8人,8個  / 〈C〉八つ(8人,8個)一組のもの;8人のボート選手  / 〈C〉(カードの)8の札;〈U〉(スケートの)8字形[滑走](the figure of eight)  / 8の;8人の  / 8個の;《補語にのみ用いて》8歳で",
    "example_sentence": "I have eight pencils.",
    "translated_sentence": "私は8本の鉛筆を持っています。"
  },
  {
    "entry": "eighty",
    "meaning_ja": "〈C〉(数の)80,80の記号(80,LXXXなど)  / 〈U〉80歳  / 〈U〉《複数抜い》80人,80個  / 《the eighties》(世紀の)80年代;  / 80の,80人の,80個の;《補語にのみ用いて》80歳で",
    "example_sentence": "There are eighty students in the class.",
    "translated_sentence": "クラスには80人の生徒がいます。"
  },
  {
    "entry": "else",
    "meaning_ja": "そのほかに,それ以外に  / 《or elseの形をとり接続詞的に》さもないと,そうでないと(otherwise)",
    "example_sentence": "I tried my best, but I failed. Else, I wouldn't be here.",
    "translated_sentence": "私は最善を尽くしたけど失敗した。もし違ったら、ここにはいないだろう。"
  },
  {
    "entry": "engine",
    "meaning_ja": "エンジン,発動機,機関  / 機関車(locomotive)  / 消防ポンプ(fire engine)  / 《古》(一般に)機械装置",
    "example_sentence": "The car's engine is running smoothly.",
    "translated_sentence": "車のエンジンはスムーズに動いています。"
  },
  {
    "entry": "enter",
    "meaning_ja": "…に入る  / …に入り込む([[penetrate]])  / …の一員となる,に参加する  / 《…に》〈人〉を入学させる, 《...に》...を参加させる《in, fof ...》  / 《…に》…を記入する《in, into, on ...》  / 〈新しい生活・局面など〉に入る  / 〈異議など〉を正式に申し出る  / 入る  / 登場する",
    "example_sentence": "I enter the room.",
    "translated_sentence": "私は部屋に入る。"
  },
  {
    "entry": "evening",
    "meaning_ja": "夕方,夕刻,晩(日没から就寝時までの間)  / 《文》末期,晩年  / 夜会,夕べ  / 夕方の,夕暮れの",
    "example_sentence": "I had a wonderful evening.",
    "translated_sentence": "私は素晴らしい夜を過ごしました。"
  },
  {
    "entry": "everybody",
    "meaning_ja": "【くだけた】みんな；誰でも",
    "example_sentence": "Everybody should be treated equally.",
    "translated_sentence": "すべての人が平等に扱われるべきである。"
  },
  {
    "entry": "especially",
    "meaning_ja": "特に / きわだって,著しく / いつもより",
    "example_sentence": "I love all kinds of music, especially classical music.",
    "translated_sentence": "私はあらゆる種類の音楽が大好きですが、特にクラシック音楽が好きです。"
  },
  {
    "entry": "except",
    "meaning_ja": "…を除いて,のほかは",
    "example_sentence": "I didn't tell him anything except that I needed the money.",
    "translated_sentence": "私はお金が必要だということ以外は彼に何も言いませんでした。"
  },
  {
    "entry": "excuse",
    "meaning_ja": "を許す ; を免除する ; の言い訳をする ; の弁明となる",
    "example_sentence": "Nothing will excuse such an act.",
    "translated_sentence": "そのような振る舞いはどんな事があっても許されない。"
  },
  {
    "entry": "expensive",
    "meaning_ja": "費用のかかる,高価な",
    "example_sentence": "This dress is very expensive.",
    "translated_sentence": "このドレスはとても高価なものです。"
  },
  {
    "entry": "explain",
    "meaning_ja": "〈他〉...を説明する / 《...を》説明する《on ...》",
    "example_sentence": "Can you explain how to solve this math problem?",
    "translated_sentence": "この数学の問題を解く方法を説明してもらえますか？"
  },
  {
    "entry": "extra",
    "meaning_ja": "〈C〉付属するもの / 割増し料金",
    "example_sentence": "An air conditioner is available as an optional extra.",
    "translated_sentence": "エアコンは追加料金で選べます"
  },
  {
    "entry": "far",
    "meaning_ja": "《距離》遠くに,遠くへ,はるかに  / 《時間》ずっと後まで(に),ずっと先まで(に)  / 《程度》《形容詞・副詞[句],およびその比較級を修飾して》ずっと,はるかに(much),たいそう",
    "example_sentence": "You are [[going too far|go too far]].",
    "translated_sentence": "言い過ぎですよ。"
  },
  {
    "entry": "farm",
    "meaning_ja": "農場,農園(通例住宅・納屋などを伴い,しばしば家畜も飼育される)  / (家畜の)飼育場,(魚貝の)養殖場",
    "example_sentence": "The farmer takes care of the farm.",
    "translated_sentence": "農家は農場を世話している。"
  },
  {
    "entry": "fat",
    "meaning_ja": "太った,肥満した  / 脂肪の多い  / たっぷりとはいった,分厚い  / もうかる  / (土地が)肥えた  / …‘を'太らせる  / ふとる,肥える",
    "example_sentence": "The fat cat sat on the mat.",
    "translated_sentence": "太った猫がマットに座っていた。"
  },
  {
    "entry": "favorite",
    "meaning_ja": "お気に入りの, 好きな / 得意の",
    "example_sentence": "This is my favorite book.",
    "translated_sentence": "これは私のお気に入りの本です。"
  },
  {
    "entry": "film",
    "meaning_ja": "/ …‘を'薄膜でおおう  / …‘を'フイルムに写す,(映画に)撮影する  / 〈小説など〉‘を'映画化する  / (ほこり・氷などで)うっすらとおおわれる《+over with+名》  / 映画化される",
    "example_sentence": "The car crash scene was filmed in slow motion.",
    "translated_sentence": "車の衝突シーンはスローモーションで撮影されました。"
  },
  {
    "entry": "flower",
    "meaning_ja": "〈C〉(植物の)花;(鑑賞用の)草花  / 〈U〉開花  / 〈U〉《文》(…の)最もすぐれた部分,精髄《+of+名》  / 〈U〉(人生・美しさなどの)盛り(prime)《+of+名》  / 《しばしば複数形で》《単数扱い》華(か)(圧縮や昇華によって得られる細かな粉末)",
    "example_sentence": "The flower is so beautiful.",
    "translated_sentence": "花がとても美しい。"
  },
  {
    "entry": "follow",
    "meaning_ja": "…‘の'後について行く;…‘の'後に続く(来る)  / 〈道など〉‘を'たどる,‘に'沿って行く  / 〈規則など〉‘に'従う  / 〈動きなど〉‘を'じっと見詰める,観察する  / …‘を'理解する(understand)  / …‘を'まねる,模範とする  / 〈職業〉‘に'従事する  / …‘から'起こる(result from)  / 〈人・動物など〉‘を'追跡する,追う  / 後について行く(来る)  / 続いて起こる,次に来る  / (論理的に)…という結論になる,当然の結果として…となる",
    "example_sentence": "I will follow you wherever you go.",
    "translated_sentence": "どこへ行ってもあなたの後をついていきます。"
  },
  {
    "entry": "food",
    "meaning_ja": "〈U〉食物,栄養物  / 〈U〉(飲み物に対して)食べ物  / 〈C〉(特定の種類の)固形食品  / 〈U〉(動植物に)栄養を余えるもの  / 〈U〉《比喩(ひゆ)的に》(心・精神の活動を刺激・奨励する)糧(かて);(思考・反省などの)資料",
    "example_sentence": "I love eating good food.",
    "translated_sentence": "美味しい食べ物を食べるのが大好きです。"
  },
  {
    "entry": "floor",
    "meaning_ja": "〈C〉床 / 階, 層",
    "example_sentence": "The floor is covered in carpet.",
    "translated_sentence": "床にはカーペットが敷かれている。"
  },
  {
    "entry": "watch",
    "meaning_ja": "〈他〉じっと見る,世話する,注意する",
    "example_sentence": "I love to watch movies on the weekends.",
    "translated_sentence": "週末に映画を見るのが大好きです。"
  },
  {
    "entry": "full",
    "meaning_ja": "いっぱいの,満ちた  / (数量が)たくさんある,たっぷりある  / (程度・量・数などが)完全な  / 《名詞の前にのみ用いて》最大限の  / 《名詞の前にのみ用いて》正式の,本格的な  / 《補語にのみ用いて》(…で)(腹・胸・頭が)いっぱいの(で)《+of+名》  / (形・体の一部が)ふっくらした,盛り上がった  / (衣服などが)ゆったりしている  / 《名詞の前にのみ用いて》(声・におい・色が)豊かな,濃い  / まともに  / 非常に(very)  / 全部;十分;絶頂",
    "example_sentence": "The room was full of people.",
    "translated_sentence": "部屋は人でいっぱいだった。"
  },
  {
    "entry": "garden",
    "meaning_ja": "〈C〉庭,庭園  / 〈U〉庭面積  / 〈C〉《しばしば複数形で》公園,遊園  / 《Gardens》《地名の後に置いて》…街,…通り  /  庭で育つ;庭園用の",
    "example_sentence": "I went to the garden to pick some flowers.",
    "translated_sentence": "私は花を摘むために庭に行きました。"
  },
  {
    "entry": "structure",
    "meaning_ja": "〈C〉(建物・橋などの)建造物 / 〈U〉《…の》構造,組織《of ...》/〈C〉構造(構成)体,組織体 /  〈思想など〉を組み立てる,を組織化する",
    "example_sentence": "There are ways to structure the deal that will get around these problems.",
    "translated_sentence": "このような問題を回避するために、取引を構成する方法がある。"
  },
  {
    "entry": "gentle",
    "meaning_ja": "(態度・性質・口調などが)優しい,物柔らかな  / (天候・動作などが)穏やかな,適度の  / (動物などが)おとなしい,なれた  / (傾斜などが)なだらかな  / 《古》生まれ(家柄)のよい  / しつけのよい,上品な",
    "example_sentence": "She has a gentle smile.",
    "translated_sentence": "彼女は優しい笑顔をしています。"
  },
  {
    "entry": "girl",
    "meaning_ja": "女の子,少女,娘,未婚の若い女性  / 女店員,女事務員,お手伝い  / 《one's ~》《話》恋人,ガールフレンド  / (一般的に)女(woman)  / 《話》娘(daughter)",
    "example_sentence": "The girl was playing in the park.",
    "translated_sentence": "少女は公園で遊んでいた。"
  },
  {
    "entry": "grass",
    "meaning_ja": "〈U〉草 / 草地",
    "example_sentence": "The grass is growing in the garden.",
    "translated_sentence": "庭に草が育っています。"
  },
  {
    "entry": "operation",
    "meaning_ja": "〈U〉作用 / 動かすこと / 動いている状態〈C〉手術 / 営業",
    "example_sentence": "The operation was successful.",
    "translated_sentence": "手術は成功しました。"
  },
  {
    "entry": "good",
    "meaning_ja": "(物事の内容・程度などが) よい / (道徳的に) 善良な / (子供が)行儀がよい  / (行動・目的などが)適している / 親切な([[kind]])  / 十分な  / 上手な / 楽しい",
    "example_sentence": "She is a good singer.",
    "translated_sentence": "彼女は上手な歌手です。"
  },
  {
    "entry": "gun",
    "meaning_ja": "銃,砲  / (銃に似た)吹き付け(注入)器具  / (合図・儀礼としての)銃砲の発射;礼砲,祝砲,弔砲  /",
    "example_sentence": "He pointed the gun at the target.",
    "translated_sentence": "彼は銃を的に向けた。"
  },
  {
    "entry": "hard",
    "meaning_ja": "(物体が)『堅い』,(手触りが)堅固な,しっかりした / 『難しい』,努力を要する / 《名詞の前にのみ用いて》(人が)『精力的な』,勤勉な / 激しい,猛烈な / (生活などが)耐え難い,つらい/ 厳しい, 厳格な / (紙幣に対して)硬貨の",
    "example_sentence": "The rock is hard and cannot be broken.",
    "translated_sentence": "その岩は硬くて割れない。"
  },
  {
    "entry": "hate",
    "meaning_ja": "憎しみ,憎悪(hatred)",
    "example_sentence": "Love and hate are opposite emotions.",
    "translated_sentence": "愛情と憎しみは正反対の感情だ。"
  },
  {
    "entry": "heavy",
    "meaning_ja": "重い,重量のある  / (分量・程度・規模・強さなどが)激しい,大きい,  / 厳しい,耐えがたい,つらい  / 悲しい,陰気な  / (動作が)のろい,ぎこちない  / ものうい,だるい  / (空が)曇った,うっとうしい,(海が)荒れた  / (食物が)消化の悪い  / 敵役,悪役",
    "example_sentence": "The heavy box was too much for him to carry.",
    "translated_sentence": "彼には重い箱を持ち運ぶのが難しかった。"
  },
  {
    "entry": "hell",
    "meaning_ja": "〈U〉死者の国,冥土(めいど)  / 〈U〉《しばしばH》地獄  / 〈U〉〈C〉地獄のような場所(状態),苦通,苦悩  / 〈U〉《時にa~》苦労(悩み)の種  / 〈U〉《乱暴な強意語として,特に疑問詞の後に置いて》《俗》いったいぜんたい",
    "example_sentence": "He felt like he was in hell.",
    "translated_sentence": "彼は地獄にいるような気がした。"
  },
  {
    "entry": "hello",
    "meaning_ja": "(電話の応答で)もしもし;(あいさつ・呼びかけ・驚きの声などに用いて)こんにちは,やあ,おい,ちょっと,おや,まあ  / こんにちは(やあ,おいなど)という呼びかけ(あいさつ)",
    "example_sentence": "Good morning, everyone. Let's say 'hello' to start the day.",
    "translated_sentence": "みなさん、おはようございます。一日を始めるために「hello」と言いましょう。"
  },
  {
    "entry": "herself",
    "meaning_ja": "《強意用法》  / 《[代]名詞と同格に用いて》彼女自身,彼女自ら  / 《再帰用法》  / 《動詞・前置詞の目的語として》彼女自身を(に),自分を(に)",
    "example_sentence": "She did it herself.",
    "translated_sentence": "彼女はそれを自分でやった。"
  },
  {
    "entry": "himself",
    "meaning_ja": "《強意用法》  / 《[代]名詞と同格に用いて》彼自身,彼自ら  / 《再帰用法》《動詞・前置詞の目的語として》彼自身を(に)",
    "example_sentence": "He always does everything by himself.",
    "translated_sentence": "彼はいつも自分で何でもやります。"
  },
  {
    "entry": "destroy",
    "meaning_ja": "…‘を'破壊する,打ち壊す  / 〈計画・希望など〉‘を'くじく  / …‘を'殺す",
    "example_sentence": "The earthquake destroyed many buildings.",
    "translated_sentence": "地震が多くの建物を破壊しました。"
  },
  {
    "entry": "honest",
    "meaning_ja": "正直な；信頼できる；誠実さのある；本物の",
    "example_sentence": "He is known for his honest and trustworthy nature.",
    "translated_sentence": "彼は正直で信頼できる性格で知られています。"
  },
  {
    "entry": "horrible",
    "meaning_ja": "恐ろしい,身の毛のよだつ  / 《話》ひどくいやな;ひどい",
    "example_sentence": "The horror movie was so horrible that I couldn't sleep at night.",
    "translated_sentence": "そのホラー映画はとても恐ろしかったので、夜眠れませんでした。"
  },
  {
    "entry": "horse",
    "meaning_ja": "〈C〉馬,(特に成長した)雄馬  / =vaulting horse  / 〈C〉(物を載せたり,支えたりする)脚付き枠(台など),掛け台,のこひき台,きゃたつ  / 〈U〉《集合的に;複数扱い》騎兵,騎兵隊  / 〈人〉‘を'馬に乗せる;〈馬車〉‘に'をつける",
    "example_sentence": "The horse ran around the track quickly.",
    "translated_sentence": "馬はトラックを素早く走り回った。"
  },
  {
    "entry": "hospital",
    "meaning_ja": "病院",
    "example_sentence": "I went to the hospital to get a check-up.",
    "translated_sentence": "私は検査を受けるために病院へ行った。"
  },
  {
    "entry": "human",
    "meaning_ja": "〈C〉《複数形》(動物に怠して)人間(human being)  /　〈U〉《the human》人類",
    "example_sentence": "Humans have the ability to think and reason.",
    "translated_sentence": "人間は思考や推論の能力を持っています。"
  },
  {
    "entry": "hunger",
    "meaning_ja": "〈U〉飢え,空腹  / 〈C〉《単数形で》(…に対する)渇望,熱望《+for(after)+名》",
    "example_sentence": "I couldn't concentrate on my work because of hunger.",
    "translated_sentence": "私は空腹のために仕事に集中できませんでした。"
  },
  {
    "entry": "hurry",
    "meaning_ja": "急ぐ,あわてて行く(する)  / 〈動作など〉‘を'早める,〈事〉‘を'急いでする,急がせる  / 《副詞[句]を伴って》〈人など〉‘を'急がせる,せき立てる  / (…へ)…‘を'急いで動かす(送る,運ぶ)《+名+to+名》",
    "example_sentence": "He was in a hurry to get to the store.",
    "translated_sentence": "彼は店に行くのに急いでいた。"
  },
  {
    "entry": "insurance",
    "meaning_ja": "〈U〉保険 / 保険金 / 〈C〉予防手段, 保護手段",
    "example_sentence": "I need to renew my insurance policy.",
    "translated_sentence": "私は保険契約を更新する必要があります。"
  },
  {
    "entry": "manufacture",
    "meaning_ja": "〈U〉製造 / 〈C〉製品",
    "example_sentence": "The company specializes in the manufacture of electronic devices.",
    "translated_sentence": "その会社は電子機器の製造に特化しています。"
  },
  {
    "entry": "inner",
    "meaning_ja": "内側の,内部の,奥の  / 精神の,心の  / 親密な;内密の",
    "example_sentence": "The inner layer of the cake is filled with chocolate.",
    "translated_sentence": "ケーキの内側の層にはチョコレートが詰まっています。"
  },
  {
    "entry": "important",
    "meaning_ja": "重要な, 重大な / 有力な",
    "example_sentence": "This decision is an important one.",
    "translated_sentence": "この決定は重要なものです。"
  },
  {
    "entry": "inside",
    "meaning_ja": "…の中で(に,へ)  / …以内に",
    "example_sentence": "The cat is sleeping inside the box.",
    "translated_sentence": "猫は箱の中で寝ています。"
  },
  {
    "entry": "island",
    "meaning_ja": "島  / 島に似たもの;(街路上の)安全地帯(《米》safety island,《英》traffic island)",
    "example_sentence": "The island was full of palm trees.",
    "translated_sentence": "島はヤシの木で一杯だった。"
  },
  {
    "entry": "joke",
    "meaning_ja": "冗談,笑い話  / からかい,いたずら  / こっけいなもの,物笑いの種",
    "example_sentence": "It was just a joke.",
    "translated_sentence": "ちょっとした冗談のつもりで言っただけです。"
  },
  {
    "entry": "king",
    "meaning_ja": "王,国王  / 王にたとえられる人(物),…王,大立て者  / (カードの)キング  / (チェスの)キング,王将",
    "example_sentence": "The King was crowned in the Church.",
    "translated_sentence": "国王は教会で戴冠式を行った。"
  },
  {
    "entry": "whereas",
    "meaning_ja": "...であるのに反して,...なのに対して / 《文》...なるがゆえに",
    "example_sentence": "She is very outgoing, whereas her sister is shy.",
    "translated_sentence": "彼女はとても社交的だが、彼女の姉は内向的だ。"
  },
  {
    "entry": "job",
    "meaning_ja": "職、仕事",
    "example_sentence": "I'm looking for a job.",
    "translated_sentence": "私は仕事を探しています。"
  },
  {
    "entry": "kitchen",
    "meaning_ja": "台所,調理場",
    "example_sentence": "She is cooking in the kitchen.",
    "translated_sentence": "彼女はキッチンで調理している。"
  },
  {
    "entry": "large",
    "meaning_ja": "(同じ種類のものと比較して,形・体積・数量などが)大きい,多い,広い  / (考えなどが)広範囲な,幅の広い,寛大な  / 大きく  / 自慢して,誇大に",
    "example_sentence": "The house has a large garden.",
    "translated_sentence": "家には大きな庭があります。"
  },
  {
    "entry": "laugh",
    "meaning_ja": "(声を立てて)〈人が〉笑う  / 〈目・口もとなどが〉うれしそうに笑う  / 〈動物,特にハイエナなどが〉笑い声に似た声(音)を出す  / …‘を'笑って言う  / 《a+形容詞+laughを目的語にして》…‘の'笑い方をする  / 〈人〉‘を'笑う",
    "example_sentence": "She laughed at the joke.",
    "translated_sentence": "彼女はそのジョークに笑った。"
  },
  {
    "entry": "learn",
    "meaning_ja": "〈知識・技術など,習慣・心構えなど〉‘を'習う,学ぶ,身に着ける  / …‘を'覚える(memorize)  / …‘を'聞いて知る  / 習う,学ぶ,覚える  / (…から…について)知る,聞く《+of+名+from+名》",
    "example_sentence": "I'm learning English.",
    "translated_sentence": "私は英語を学んでいます。"
  },
  {
    "entry": "leg",
    "meaning_ja": "(人・動物の)脚  / (ズボン・靴下などの)脚をおおう部分,脚部  / (家具などの)脚,形(機能)が脚に似た物  / (三角形の底辺を除く)一辺  / (旅などの全行程の中の)一区切り,一区間",
    "example_sentence": "He broke his leg in the accident.",
    "translated_sentence": "彼は事故で足を折った。"
  },
  {
    "entry": "life",
    "meaning_ja": "〈U〉(無生物と区別して,生物が持っている)生命,命  / 〈U〉《集合的に》生物,生き物  / 〈U〉(死後の)霊,霊的存在  / 〈C〉人間(person)  / 〈U〉一生,生涯  / 〈C〉寿命,活動(有効,耐久)期間  / 〈U〉人生,現世,世間  / 〈C〉〈U〉生活,暮らし,生き方,暮らし方  / 〈C〉伝記([[biography]])  / 〈U〉生気,活気,元気([[vitality]])",
    "example_sentence": "Life is full of surprises.",
    "translated_sentence": "人生は意外なことがいっぱいあります。"
  },
  {
    "entry": "like",
    "meaning_ja": "…を好む, が好きである / 《しばしば否定文で,また[[would]],《英》[[should]]と共に用いて》…を望む,…したい / 好む, 望む",
    "example_sentence": "I like to eat pizza.",
    "translated_sentence": "私はピザを好む。"
  },
  {
    "entry": "lazy",
    "meaning_ja": "怠惰な / けだるい / 動きがのろい / 《the ~》怠け者",
    "example_sentence": "He is very lazy.",
    "translated_sentence": "彼はとても怠惰だ。"
  },
  {
    "entry": "suspend",
    "meaning_ja": "《...から》をつるす, をぶらさげる《from ...》 / を一時停止する / を停職・停学にする / 一時的に停止する",
    "example_sentence": "The company decided to suspend the project due to budget constraints.",
    "translated_sentence": "会社は予算の制約により、プロジェクトを中止することを決定しました。"
  },
  {
    "entry": "market",
    "meaning_ja": "〈C〉(食糧などが取り引きされる)市場,市(marketplace)  / 〈C〉(食糧品などが売られる)店  / 〈C〉〈U〉(商品が売買できる)市場,販路,取引き先  / 〈C〉(日用必需品の)商売,商取引き  / 〈U〉(物品に対する)需要,要求,売れ口《+for+名》  / 〈C〉〈U〉相場,市況,市価",
    "example_sentence": "I went to the market to buy some fresh vegetables.",
    "translated_sentence": "新鮮な野菜を買うために市場に行きました。"
  },
  {
    "entry": "middle",
    "meaning_ja": "(空間的に)まん中の  / (時間・順序・数量などが)中間の,まん中の  / 平均の,中ぐらいの",
    "example_sentence": "She stood in the middle of the room.",
    "translated_sentence": "彼女は部屋のまん中に立っていた。"
  },
  {
    "entry": "mistake",
    "meaning_ja": "誤り,間違い;誤解,思い違い  /",
    "example_sentence": "I made a mistake on the test.",
    "translated_sentence": "テストで誤りをしました。"
  },
  {
    "entry": "shock",
    "meaning_ja": "〈C〉(衝突・爆発などの)衝撃 / 〈C〉〈U〉(精神的) 打撃,ショック",
    "example_sentence": "The news of his sudden death came as a shock to everyone.",
    "translated_sentence": "彼の突然の死の知らせは、みんなに衝撃を与えた。"
  },
  {
    "entry": "month",
    "meaning_ja": "(またcalendar month)(暦の上の1月から12月までのそれぞれの)月  / (ある日から翌月のその日までの)ひと月,1か月間  / (またlunar month)(太陰暦の)ひと月(月が地球の周りを1公転する期間;太陽暦ではsolar month)",
    "example_sentence": "I will go back home next month.",
    "translated_sentence": "来月に家に帰ります。"
  },
  {
    "entry": "moment",
    "meaning_ja": "〈C〉瞬間 / 《a ~》ちょっと,しばらく / 《通例単数形で》(特定の) 時期  / 〈U〉重要性",
    "example_sentence": "I'm having a moment of clarity.",
    "translated_sentence": "一瞬、物事がはっきりしてきました。"
  },
  {
    "entry": "nation",
    "meaning_ja": "〈C〉《集合的に》国民 / 国家, 国 / 民族",
    "example_sentence": "The United States is a nation founded on the principles of freedom and democracy.",
    "translated_sentence": "アメリカ合衆国は自由と民主主義の原則に基づいて建国された国家です。"
  },
  {
    "entry": "mouth",
    "meaning_ja": "(人・動物の物を食べたり,音を発する)口,口腔  / (口に似た)開口部;(袋・びんなどの)口,(銅穴・峡谷などの)入り口;河口,港口",
    "example_sentence": "She opened her mouth to speak.",
    "translated_sentence": "彼女は口を開けて話し始めた。"
  },
  {
    "entry": "naturally",
    "meaning_ja": "気どらずに,自然に  / 《しばしば文全体を修飾いて》当然,もちろん(of course)  / 生まれつき(by nature)  / 自然の力で,ひとりでに",
    "example_sentence": "She speaks English naturally.",
    "translated_sentence": "彼女は自然に英語を話します。"
  },
  {
    "entry": "neck",
    "meaning_ja": "〈C〉(人間・動物の)首;首の骨  / 〈C〉(衣服の)えり  / 〈C〉首の形をした物  / 〈U〉〈C〉(食品としての)(羊などの)頚肉(けいにく)",
    "example_sentence": "She put a necklace around her neck.",
    "translated_sentence": "彼女は自分の首にネックレスをつけた。"
  },
  {
    "entry": "next",
    "meaning_ja": "(時間・順序が)次の,すぐ後に続く;来…,翌…  / (場所・位置が)いちばん近い,隣の  / 次の人,次のもの",
    "example_sentence": "What are your plans for the next weekend?",
    "translated_sentence": "次の週末の予定は何ですか？"
  },
  {
    "entry": "nine",
    "meaning_ja": "〈C〉(数の)9;9の記号(9,IXなど)  / 〈U〉9時,9分;9歳  / 〈U〉《複数扱い》9人,9個  / 〈C〉9人(9個)一組のもの;野球チームのメンバー  / 〈C〉(カードゲームの)9の札  / 《the N-》9人の学芸の女神(the nine Muses)  / 19の,9人の,9個の  / 《補語にのみ用いて》9歳の(で)",
    "example_sentence": "I have nine apples.",
    "translated_sentence": "私はりんごを9個持っています。"
  },
  {
    "entry": "ninety",
    "meaning_ja": "〈U〉(数の)90;90の記号(90,XCなど)  / 〈U〉90歳  / 〈U〉《複数扱い》90人,90個  / 《the nineties》(世紀の)90年代;(年齢の)90歳代  / 90の,90人の,90個の  / 《補語にのみ用いて》90歳の(で)",
    "example_sentence": "Ninety is the number that comes after eighty-nine.",
    "translated_sentence": "90は89の後に来る数です。"
  },
  {
    "entry": "nobody",
    "meaning_ja": "だれも…ない(not anybody)  / 取るに足らない人,つまらぬ人間",
    "example_sentence": "Nobody likes to be alone.",
    "translated_sentence": "だれも一人でいるのは好きではありません。"
  },
  {
    "entry": "normal",
    "meaning_ja": "正常な,通常の,標準の  / (人が肉体・知能・情緒の発達において)平均的な,年齢相応の  / (線などが)垂直な;(…に)垂直な《+to+名》・普通の;典型的な;直角をなす (to)・（実験動物が）常態の, 未処置［未免疫］の;（濃度が）規定の・常態;垂線, 法線;平均量［値］正常,通常;標準",
    "example_sentence": "He has a normal heart rate.",
    "translated_sentence": "彼の心拍数は正常です。"
  },
  {
    "entry": "nose",
    "meaning_ja": "鼻  / 《単数形で》(…に対する)嗅覚(きゅうかく)《+for+名》  / (鼻のように)突起した部分;船首,機首  / 《単数形で》(…を)かぎつける力《+for+名》",
    "example_sentence": "He has a big nose.",
    "translated_sentence": "彼は大きな鼻を持っている。"
  },
  {
    "entry": "nurse",
    "meaning_ja": "看護人,看護婦  / 子守(dry nurse)  / 乳母(うば)(wet nurse)",
    "example_sentence": "The nurse took care of the patient.",
    "translated_sentence": "ナースは患者の世話をした。"
  },
  {
    "entry": "orange",
    "meaning_ja": "〈C〉オレンジ,柑橘(かんきつ)類",
    "example_sentence": "I ate an orange for breakfast.",
    "translated_sentence": "朝食にオレンジを食べました。"
  },
  {
    "entry": "flexible",
    "meaning_ja": "曲げられる, 曲げやすい / (人・計画などが)柔軟な, 融通のきく",
    "example_sentence": "The yoga instructor demonstrated how flexible she was by effortlessly bending into a pretzel shape.",
    "translated_sentence": "ヨガのインストラクターは、プレッツェルの形に簡単に曲がることで、自分がどれだけ柔軟であるかを示しました。"
  },
  {
    "entry": "variation",
    "meaning_ja": "〈U〉変化すること, 変動すること / 〈C〉}(個々の)変化, 変化の量(程度) /  変形,変わり種;(生物の)変種 / 《…の》変奏曲《on ...》",
    "example_sentence": "The variation in the color patterns of birds helps them [[blend into]] their environment, making it difficult for predators to spot them.",
    "translated_sentence": "鳥の色柄のバリエーションは、環境に溶け込み、捕食者に見つかりにくくする効果があります。"
  },
  {
    "entry": "parent",
    "meaning_ja": "〈C〉親 / 《複数形で》両親",
    "example_sentence": "My parents are very supportive of me.",
    "translated_sentence": "私の両親は私をとても支えてくれています。"
  },
  {
    "entry": "police",
    "meaning_ja": "《the~》警察  / 《複数扱い》警察官(policemen)  / (警察的な組織をもつ)治安隊,保安隊  / (警察力で)…‘を'取り締まる;〈場所〉‘の'治安を保つ  / …‘を'管理する,監視する",
    "example_sentence": "The police are investigating the crime.",
    "translated_sentence": "警察が犯罪を調査しています。"
  },
  {
    "entry": "person",
    "meaning_ja": "(性別・年齢に関係なく)人  / (人間の)体,身体  / 《単数形で》容姿,身なり  / (文法で)人称",
    "example_sentence": "The person is a kind person.",
    "translated_sentence": "その人は親切な人です。"
  },
  {
    "entry": "plus",
    "meaning_ja": "...を加えて,を足して",
    "example_sentence": "I like to drink coffee with milk plus sugar.",
    "translated_sentence": "私はミルクプラス砂糖を加えたコーヒーを飲むのが好きです。"
  },
  {
    "entry": "opposition",
    "meaning_ja": "〈U/C〉反対すること / 《the》野党,反対党",
    "example_sentence": "The opposition is [[calling for|call for]] a vote of no confidence in the government.",
    "translated_sentence": "野党は政府に対して不信任投票を要求しています。"
  },
  {
    "entry": "scheme",
    "meaning_ja": "計画 / 策略",
    "example_sentence": "The government implemented a new scheme to support small businesses.",
    "translated_sentence": "政府は小規模企業を支援するために新しい制度を導入しました。"
  },
  {
    "entry": "surround",
    "meaning_ja": "〈他〉を囲む,を取り巻く / 《...で》に囲いをする《with ...》",
    "example_sentence": "I like to surround myself with positive people.",
    "translated_sentence": "私はポジティブな人々に囲まれるのが好きです。"
  },
  {
    "entry": "poor",
    "meaning_ja": "貧乏な,貧しい  / 貧相な,みすぼらしい  / (一定規準よりも)劣る,落ちる  / 《名詞の前にのみ用いて》哀れな,不運な,かわいそうな  / 《名詞の前にのみ用いて》故人となった,なくなった  / 《名詞の前にのみ用いて》《謙そん,またはおどけて》つまらない,取るに足らない  / 《the~》《名詞的に》《複数扱い》貧しい人々;かわいそうな人々",
    "example_sentence": "The poor man can barely afford his rent.",
    "translated_sentence": "その貧しい男は家賃を払うのがやっとだ。"
  },
  {
    "entry": "position",
    "meaning_ja": "〈C〉位置;場所;所在地  / 〈U〉所定の位置,適所  / 〈C〉姿勢,構え  / 〈U〉有利な地位(立場)  / 〈C〉《通例単数形で》(周囲の状況と関連する)立場,境遇;形勢,情況  / 〈C〉見解,態度  / 〈C〉(…としての)勤め口,職《+as(of)+名》  / 〈C〉(…の中の)地位《+in+名》  / 〈U〉(特に高い)社会的地位  / 《副詞[句]を伴って》…‘を'適当な(特定の)場所に置く",
    "example_sentence": "I am currently in a good position at work.",
    "translated_sentence": "私は現在、仕事で良い位置にいます。"
  },
  {
    "entry": "price",
    "meaning_ja": "値段,価格； 代価,代償",
    "example_sentence": "The price of the product is reasonable.",
    "translated_sentence": "その商品の価格は手頃なものです。"
  },
  {
    "entry": "preparation",
    "meaning_ja": "〈U〉《a ~》《...の》用意 《of ...》 / 〈C〉《複数形で》《…のための》準備《for ...》  / 〈U〉準備されている状態",
    "example_sentence": "I need to do some preparation before the exam.",
    "translated_sentence": "試験前に少し準備をしなければならない。"
  },
  {
    "entry": "problem",
    "meaning_ja": "〈C〉問題, やっかいな事態 / 《単数形で》《話》《…にとって》やっかいな人《to ...》 /",
    "example_sentence": "We have to solve this problem.",
    "translated_sentence": "この問題を解決しなければなりません。"
  },
  {
    "entry": "properly",
    "meaning_ja": "適切に, 妥当に, きちんと, ちゃんと / 基準にかなって,正式に / 厳密に,正確に / 《英話》完全に,ひどく",
    "example_sentence": "She always dresses properly for work.",
    "translated_sentence": "彼女はいつもきちんとした服装で仕事に臨んでいる。"
  },
  {
    "entry": "public",
    "meaning_ja": "《名詞の前にのみ用いて》公の,公共の,公衆の  / 公開の  / 《名詞の前にのみ用いて》公務の,公務に従事する  / 一般に知れ渡っている,周知の",
    "example_sentence": "Sanitary conditions in public places are important for maintaining public health.",
    "translated_sentence": "公共の場所における衛生状態は、公衆の健康を維持するために重要です。"
  },
  {
    "entry": "suspect",
    "meaning_ja": "〈他〉...だろうと思う / を疑う/ 薄々感づく/ を怪しいと思う〈自〉怪しいと疑う",
    "example_sentence": "I suspected he was a liar.",
    "translated_sentence": "私は彼が嘘つきではないかと思った。"
  },
  {
    "entry": "remember",
    "meaning_ja": "〈他〉を思い出す / を覚えている / 《~ to do》 忘れずに…する / (記念として)に贈り物をする / 《話》 《BにAから》よろしくと伝言する 《~ A to B》 / 【動/自】覚えている,記憶している",
    "example_sentence": "I will always remember you.",
    "translated_sentence": "あなたをいつも覚えています。"
  },
  {
    "entry": "red",
    "meaning_ja": "赤い,赤色の  / (顔・目などが)赤くなった;血に染った  / 赤い服を着た;赤毛の  / 《しばしばR-》《話》《軽べつして》共産主義の;過激な",
    "example_sentence": "The sky was a deep red color.",
    "translated_sentence": "空は深い赤色であった。"
  },
  {
    "entry": "reply",
    "meaning_ja": "〈自〉《...に》答える《to ...》 / 《...に》応じる《to ...》 / 〈他〉《...に》...と答える《to ... that ...》",
    "example_sentence": "I will reply to your email as soon as possible.",
    "translated_sentence": "できるだけ早くメールに返信します。"
  },
  {
    "entry": "substitute",
    "meaning_ja": "〈C〉《...の》代わりをするもの、代理人、代用(食)品、補欠者、補欠選手、(劇の)代役、代用語(代名詞やHe sang better than I did. のdidなど)《for ...》",
    "example_sentence": "I need to find a substitute for butter in this recipe.",
    "translated_sentence": "このレシピではバターの代わりになるものを見つける必要があります。"
  },
  {
    "entry": "focus",
    "meaning_ja": "(…に)〈レンズなど〉‘の'焦点を合わせる《+名+on+名》  / (…に)〈注意など〉‘を'集中する《+名+on+名(doing)》  / (…に)〈レンズなどの〉焦点が合う;〈注意などが〉集まる《+on+名》",
    "example_sentence": "I'm trying to focus on my work.",
    "translated_sentence": "私は仕事に集中しようとしている。"
  },
  {
    "entry": "guitar",
    "meaning_ja": "ギター",
    "example_sentence": "He enjoys playing the guitar.",
    "translated_sentence": "彼はギターを演奏するのが好きです。"
  },
  {
    "entry": "seat",
    "meaning_ja": "腰掛け  / 座席,席  / (腰掛けの)腰をおろす部分;(体・ズボン・パンツの)しりの部分,しり  / (権威の)座,地位,身分;(議会における)議席《+in+名》  / (…の)予約席《+for+名》  / (…の)所在地,ありか,中心地《+of+名》  / (馬・自転車などの)乗り方",
    "example_sentence": "I had to take the last seat on the bus.",
    "translated_sentence": "私はバスの一番後ろの席に座らなければならなかった。"
  },
  {
    "entry": "ready",
    "meaning_ja": "用意のできた / 即座の / 《be ~ to do》...しがちで, 今にも...しそうで / ((叙述))（人が）〈…を〉早く欲しがって，しきりに求めて〈for〉",
    "example_sentence": "The project is ready to be launched.",
    "translated_sentence": "プロジェクトは実行準備が整いました。"
  },
  {
    "entry": "tear",
    "meaning_ja": "〈他〉を裂く,を破る / を破って作る / を引き剥がす〈自〉裂ける,破れる / 大急ぎで動く",
    "example_sentence": "We must tear down this house.",
    "translated_sentence": "私たちはこの家を壊さないといけない。"
  },
  {
    "entry": "dish",
    "meaning_ja": "〈C〉(全員分の料理を盛る)大皿,盛り皿,深皿  / 《しばしばthe ~》《複数形で集合的に》(食事に用いる,おもに陶器製の)皿類,食器類(plates,bowls,saucers,cups,knives,forksなどの総称)  / 〈C〉(皿に盛られた)料理,食品  / 〈C〉(…の)皿1杯の分量,一皿分《+of+名》  / 〈C〉《話》可愛い女の子",
    "example_sentence": "I cooked a delicious dish for dinner.",
    "translated_sentence": "夕食用に美味しい料理を作りました。"
  },
  {
    "entry": "send",
    "meaning_ja": "〈他〉〈物〉を送る / 〈人〉を行かせる",
    "example_sentence": "I will send you the document via email.",
    "translated_sentence": "私はメールで文書を送ります。"
  },
  {
    "entry": "shake",
    "meaning_ja": "(前後・上下・左右などに)…‘を'振る,揺り動かす,揺する  / (…から)…‘を'振り落とす《+名+from(out of)+名》  / 〈地震・爆発などが〉…‘を'震動される  / 〈基礎・信念など〉‘を'動揺させる,ぐらつかせる  / 〈人〉‘を'動揺させる,‘を'心をかき乱す  / 〈ちり・病気・悪習・追っ手など〉‘を'振り払う,振り切る,除く《+off+名,+名+off》  / 揺れる,震動する  / (恐布・寒さなどで)振える《+with+名》  / 揺り動かす",
    "example_sentence": "Let's shake the rug.",
    "translated_sentence": "敷物のほこりを払って落とそう。"
  },
  {
    "entry": "shoe",
    "meaning_ja": "靴;《英》短靴  / 靴形の物;(馬の)てい鉄(horseshoe);(杖・棒の)石突き;(自動車の)タイヤの外包み;(ブレーキの )輪止め;(そりの)すべり金",
    "example_sentence": "I bought a new pair of shoes.",
    "translated_sentence": "新しい靴を買った。"
  },
  {
    "entry": "variety",
    "meaning_ja": "〈U〉多様性 / 《a ~ of ...》さまざまな / 〈C〉種類 / 変種, 品種",
    "example_sentence": "There is a variety of fruits at the market.",
    "translated_sentence": "市場にはさまざまな種類の果物があります。"
  },
  {
    "entry": "sleep",
    "meaning_ja": "〈U〉眠り,睡眠[状態]  / 〈C〉《a sleep》一眠り[の時間]  / 〈U〉永眠,死  / 〈U〉(一時的な手足などの)無感覚,しびれ;冬眠(hibernation)  / 〈U〉目やに",
    "example_sentence": "I need to get some sleep.",
    "translated_sentence": "眠らなくちゃ。"
  },
  {
    "entry": "slight",
    "meaning_ja": "(量・程度が)わずかの,少しの  / 取るに足りない,つまらない([[trivial]])  / (人が)ほっそりした,やせた",
    "example_sentence": "She felt a slight breeze as she walked by the beach.",
    "translated_sentence": "彼女はビーチを歩いている間、わずかな風を感じました。"
  },
  {
    "entry": "slow",
    "meaning_ja": "(速度・動作などが)遅い,のろい  / 《補語または名詞の後にのみ用いて》(時計などが)遅れている  / ゆったりした,あわてない  / (人が)理解の遅い,頭の鈍い  / (生活・パーティーなどが)活気のない,おもしろくない",
    "example_sentence": "The tortoise was slow but steady.",
    "translated_sentence": "カメはゆっくりとしていたが着実だった。"
  },
  {
    "entry": "skin",
    "meaning_ja": "〈U〉〈C〉(人・動物の)皮膚,肌  / 〈C〉〈U〉(動物からはいだ)皮,毛皮;皮製品,皮袋  / 〈C〉(果物・野菜の)皮  / 〈U〉〈C〉(液体の表面にできる)薄い膜,上皮  / 〈C〉(枠組み・表面などを覆う)外皮,外被,外板",
    "example_sentence": "She has beautiful skin.",
    "translated_sentence": "彼女は美しい肌をしています。"
  },
  {
    "entry": "special",
    "meaning_ja": "特別な / (他と異なって) 特殊な / (人・物事に)独特の",
    "example_sentence": "He has a special ability.",
    "translated_sentence": "彼には特別な能力がある。"
  },
  {
    "entry": "some",
    "meaning_ja": "《複数名詞または数えられない名詞を伴って》いくらかの,多少の,少しの / 《複数名詞または数えられない名詞を伴って》一部の,中には…もある,…であるものもある / 《単数普通名詞を伴って》ある…,何かの,どこかの  / 《数詞を伴って》約…,…くらいの,…ばかり / 《数量を表す名詞を伴って》相当多い,かなりの / 《話》たいした,相当な,なかなかの",
    "example_sentence": "I have some apples.",
    "translated_sentence": "私はいくつかのりんごを持っています。"
  },
  {
    "entry": "song",
    "meaning_ja": "〈C〉歌,歌曲,唱歌  / 〈C〉〈U〉(歌うための)詩,詩歌  / 〈U〉歌うこと  / 〈U〉〈C〉(鳥・小川などの)歌うような声(音)",
    "example_sentence": "The song he sang was beautiful.",
    "translated_sentence": "彼が歌った歌はとても美しかった。"
  },
  {
    "entry": "sorry",
    "meaning_ja": "《補語にのみ用いて》悲しいと思う,すまないと思う,残念に思う  / 《名詞の前にのみ用いて》くだらない,貧弱な  / 《名詞の前にのみ用いて》哀れな,惨めな  / 《丁重な断り・謝罪・弁解の表現として》すみませんが,悪いけど,ごめんなさい  / 《おもに英》《よく聞きとれなかったときに用いて》おそれいりますが[もう一度]",
    "example_sentence": "He was sorry for his mistake.",
    "translated_sentence": "彼は自分の過ちを後悔した。"
  },
  {
    "entry": "south",
    "meaning_ja": "南の,南部の,南向きの;南からの",
    "example_sentence": "I am planning a trip to the south next month.",
    "translated_sentence": "来月、南への旅行を計画しています。"
  },
  {
    "entry": "speak",
    "meaning_ja": "話す,しゃべる,物を言う,口をきく  / 話をする,うわさをする  / 演説する,講演する,スピーチをする  / 〈物事が〉表す,物語る  / 〈楽器・大砲などが〉音を出す,鳴る  / 〈言葉・意見など〉‘を'言う,話す,述べる  / 〈言語〉‘を'話す,使う  / 〈物事が〉…‘を'表す,物語る,示す  / (海で)〈他船〉‘と'通信する,通話する  / …を表す,であることを示す",
    "example_sentence": "He spoke to the audience.",
    "translated_sentence": "彼は観衆に語りかけた。"
  },
  {
    "entry": "sport",
    "meaning_ja": "〈U〉《集合的に》スポーツ,運動競技  / 〈C〉(個々の)スポーツ,運動競技  / 《複数形で》《英》運動会,競技会  / 〈U〉気晴らし,慰め,娯楽  / 〈C〉《話》スポーツマンらしい人,さっぱりした人,いい人  / 〈C〉(動・植物の)変種(mutant)",
    "example_sentence": "I enjoy doing various kinds of sports.",
    "translated_sentence": "私は様々なスポーツを楽しんでいます。"
  },
  {
    "entry": "maybe",
    "meaning_ja": "たぶん, おそらく,もしかすると, ことによると",
    "example_sentence": "I'll consider it maybe.",
    "translated_sentence": "それは検討してみるかもしれません。"
  },
  {
    "entry": "district",
    "meaning_ja": "(特別な目的のために区分された州・都市などの)地区,区域  / (ある特色・機能をもつ)地域,地方",
    "example_sentence": "The typhoon struck the Kanto district.",
    "translated_sentence": "台風が関東地方に上陸した。"
  },
  {
    "entry": "strip",
    "meaning_ja": "〈他〉を裸にする；《...を》からはぎ取って裸にする《of ...》 / 《...から》を剥ぎ取る,を取り去る《of ...》 / 《Aを》...から奪う《... of A》 / 〈自〉裸になる / (ねじなど)のねじ山をすり減らす",
    "example_sentence": "I need to strip the old paint off the walls.",
    "translated_sentence": "壁から古いペンキを剥がさなければなりません。"
  },
  {
    "entry": "step",
    "meaning_ja": "〈C〉一歩, 歩み / (階段・はしごの)段 /《複数形で》階段 / 《目的・目標への》一歩《to ...》 / 歩調, 足取り / (目標に近づく)手段 /",
    "example_sentence": "She stepped out of the car.",
    "translated_sentence": "彼女は車から降りた。"
  },
  {
    "entry": "study",
    "meaning_ja": "〈他〉を勉強する / を注意してよく見る / を調査する / 〈自〉勉強する",
    "example_sentence": "I study English every day.",
    "translated_sentence": "私は毎日英語を勉強しています。"
  },
  {
    "entry": "subject",
    "meaning_ja": "(思考・議論・研究などの)主題, 話題 / 科目, 教科 / (文法で)主語 /",
    "example_sentence": "The subject of the lecture was the latest trends in technology.",
    "translated_sentence": "講義のテーマは最新のテクノロジーについてでした。"
  },
  {
    "entry": "sudden",
    "meaning_ja": "突然の,だしぬけの  / 急いだ,あわただしい;急な",
    "example_sentence": "I was startled by the sudden noise.",
    "translated_sentence": "突然の音に驚いた。"
  },
  {
    "entry": "summer",
    "meaning_ja": "〈U〉〈C〉夏  / 《the~》《文》盛り  / 《複数形で》《文》年齢  / 夏の,夏向きの",
    "example_sentence": "I'm looking forward to the summer.",
    "translated_sentence": "夏が楽しみです。"
  },
  {
    "entry": "support",
    "meaning_ja": "…‘を'支える  / 〈家族など〉‘を'養う,扶養する  / 〈人・主義など〉‘を'支持する,擁護する  / (精神的に)〈人〉‘を'力づける;(金銭的に)〈人〉‘を'援助する  / 〈見解など〉‘を'立証する,裏書きする  / …‘に'耐える,がまんする  /",
    "example_sentence": "I will always support you.",
    "translated_sentence": "私はいつもあなたを支えます。"
  },
  {
    "entry": "table",
    "meaning_ja": "〈C〉テーブル,食卓;(仕事・遊戯などの)台  / 〈U〉《時にa~》食べ物,料理  / 《集合的に》テーブルを囲む人々,一度の人々  / 〈C〉(文字・数字,情報などの並べた)表,配列表,目録  / =tableland",
    "example_sentence": "The table was made of wood.",
    "translated_sentence": "テーブルは木でできていた。"
  },
  {
    "entry": "tail",
    "meaning_ja": "〈C〉尾,しっぽ  / 〈C〉尾に似た物;(飛行機・車の)尾部  / 〈C〉(…の)後部,末端,終り(底)の部分《+of+名》  / 〈C〉コインの裏側  / 《複数形で》燕尾(えんび)服(tail coat)  / 〈C〉《俗》しり,けつ  / 〈C〉《俗》尾行者  / …‘に'尾をつける  / 《話》〈人〉‘を'尾行する  / 〈物・音が〉しだいに減ってゆく,消えてゆく《+away(off, out)》",
    "example_sentence": "The cat wagged its tail.",
    "translated_sentence": "猫は尾を振った。"
  },
  {
    "entry": "ten",
    "meaning_ja": "〈C〉(数の)10,10の記号(10,Xなど)  / 〈U〉10時,10分;10歳  / 〈U〉《複数扱い》10人,10個  / 〈C〉10(10人,10個)一組のもの  / 〈C〉(カードケームの)10の札  / 10の,10人の,10個の  / 《補語にのみ用いて》10歳の(で)",
    "example_sentence": "I have ten fingers.",
    "translated_sentence": "私は10本の指を持っています。"
  },
  {
    "entry": "than",
    "meaning_ja": "《比較級の後に用いて》…よりも,に比べて  / 《関係代名詞的に用いて》…よりも",
    "example_sentence": "She is taller than her sister.",
    "translated_sentence": "彼女は妹よりも背が高い。"
  },
  {
    "entry": "swear",
    "meaning_ja": "(神などにかけて)誓う《to,by,on》 / 《...を》証言する《to》 / 罰当たりな言葉を使う,《...を》ののしる《at ...》 / ...を誓う / ...だと断言する《that》 / 《...を》...に誓わせる《to ...》",
    "example_sentence": "I swear I will never do that again.",
    "translated_sentence": "もう二度とそれをしないと誓います。"
  },
  {
    "entry": "tend",
    "meaning_ja": "傾向がある",
    "example_sentence": "I tend to overthink things.",
    "translated_sentence": "私は物事を過剰に考えがちです。"
  },
  {
    "entry": "this",
    "meaning_ja": "《近くの人・物・事を指して》これ,この人,こちら  / 《時間・場所を指して》今,現在,今日;ここ  / 《次に述べること・今述べたことを指して》このこと,これ,こういうこと  / 《that と対照的に》  / (that の前者に対して)後者",
    "example_sentence": "I will do this [[by myself|by oneself]].",
    "translated_sentence": "私はこれを自分でやるつもりだ。"
  },
  {
    "entry": "three",
    "meaning_ja": "3;3の記号(3,?など)  / 〈U〉3時,3分;3歳  / 《複数扱い》3人;3個  / 〈C〉三つ(3人,3個)一組のもの  / (カードゲーム・さいころなどの)3の札,3の目  / 3の,3人の,3個の  / 《補語にのみ用いて》3歳の(で)",
    "example_sentence": "I have three cats.",
    "translated_sentence": "私は猫を3匹飼っています。"
  },
  {
    "entry": "tooth",
    "meaning_ja": "歯  / 歯状の物,(くし・のこぎり・歯車・フォークなど)歯の働きをする物  /",
    "example_sentence": "The dentist checked my tooth.",
    "translated_sentence": "歯医者が私の歯を調べた。"
  },
  {
    "entry": "travel",
    "meaning_ja": "(特に遠くへ)旅行する  / 〈セールスマンなどが〉(…の)注文取りに出る,外交をして回る《+for+名》  / 〈視線・気持ちなどが〉移る,移動する  / 《副詞[句]を伴って》〈音・光などが〉伝わる,進む  / (…と)つきあう《+with(in)+名》  / 《俗》すばやく走る,進む  / 〈ある場所〉‘を'旅行する  / 〈ある距離〉‘を'行く,進む",
    "example_sentence": "I travel around the world every year.",
    "translated_sentence": "毎年世界中を旅行しています。"
  },
  {
    "entry": "merely",
    "meaning_ja": "単に",
    "example_sentence": "It's merely a joke.",
    "translated_sentence": "それは単なる冗談だよ。"
  },
  {
    "entry": "mere",
    "meaning_ja": "ほんの,単なる",
    "example_sentence": "That is a mere excuse for idleness.",
    "translated_sentence": "それは怠ける口実にすぎない。"
  },
  {
    "entry": "overall",
    "meaning_ja": "全般的に,全面的に, 端から端まで",
    "example_sentence": "Overall, I think the project was a success.",
    "translated_sentence": "全体的に、私はこのプロジェクトは成功だと思います。"
  },
  {
    "entry": "proceed",
    "meaning_ja": "取りかかる / (一度やめてまた) 《...を》続ける《with》 / (一度止まってまた)《…へ》進む《to ...》 / (事が)進行する",
    "example_sentence": "Let's proceed with the plan.",
    "translated_sentence": "計画を取りかかりましょう。"
  },
  {
    "entry": "transform",
    "meaning_ja": "〈他〉〈自〉変形する, 変換する",
    "example_sentence": "The caterpillar will transform into a butterfly.",
    "translated_sentence": "毛虫は蝶に変態します。"
  },
  {
    "entry": "moreover",
    "meaning_ja": "その上, さらに, おまけに",
    "example_sentence": "Moreover, she is also a talented musician.",
    "translated_sentence": "その上、彼女は才能あるミュージシャンでもある。"
  },
  {
    "entry": "noun",
    "meaning_ja": "名詞",
    "example_sentence": "John is a proper noun.",
    "translated_sentence": "ジョンは固有名詞です。"
  },
  {
    "entry": "normally",
    "meaning_ja": "正常に,普通に,常態では / 標準的に",
    "example_sentence": "He normally wakes up at 7 am.",
    "translated_sentence": "彼は通常、朝7時に起きます。"
  },
  {
    "entry": "ugly",
    "meaning_ja": "(外見・容ぼうが)醜い,ぶかっこうな  / 不快な,いやな(disagreeable)  / (道徳的に)悪い,ひんしゅくを買う  / (天侯・事態などが)険悪な,荒れ模様の  / 《話》不きげんな;気むずかしい;けんか好きな:",
    "example_sentence": "This is an ugly dress.",
    "translated_sentence": "これは醜い服です。"
  },
  {
    "entry": "under",
    "meaning_ja": "《下方の場所・位置》『…の下に』,に覆われて  / 《内部の位置》『…の内側に』,の下に  / (重荷・苦痛など)『を負って』,に圧迫されて  / (支配・保護・影響など)『…を受けて』,のもとで,の状態で  / 《受動状態の継続》『…中』  / (分類項目)『の中に』,に属して  / (地位・数量などが)『…に劣る』,より下の  / (行動などの基準)に従って,基づいて",
    "example_sentence": "The cat is sleeping under the table.",
    "translated_sentence": "猫はテーブルの下で寝ています。"
  },
  {
    "entry": "understand",
    "meaning_ja": "〈事〉‘を'理解する,‘の'意味をつかむ  / 〈人〉‘を'理解する,‘の'気持ち(立場)が分かる  / 〈物事〉‘に'精通している,‘を'よく知っている  / …‘と'推測する,思う:《understand+名+to do旨が…すると思う》  / 《understand+that 節…であると聞いている》  / 理解する,意味をつかむ(が分かる)  / 聞いている  / 人の立場を理解する",
    "example_sentence": "I understand the instructions.",
    "translated_sentence": "私は指示を理解します。"
  },
  {
    "entry": "partly",
    "meaning_ja": "一部分, 部分的に / 少しは, いくぶんか",
    "example_sentence": "I partly agree with your opinion.",
    "translated_sentence": "私はあなたの意見に一部同意します。"
  },
  {
    "entry": "until",
    "meaning_ja": "《継続の期限》...まで, …までずっと  / 《否定語の後に》…まではしない,…になって初めて…する",
    "example_sentence": "Wait until tomorrow morning.",
    "translated_sentence": "明日の朝まで待ちなさい。"
  },
  {
    "entry": "float",
    "meaning_ja": "(液体・気体に)浮く,浮かぶ  / 《副詞[句]を伴って》漂うように移動する;ふわふわと動く  / (眼前・心に)浮かぶ;〈うわさなどが〉広まる  / 〈為替相場が〉変動する  / 《副詞[句]を伴って》(水中・空中に)…‘を'浮かせる,漂わせる  / 〈会社・計画など〉‘を'起こす;〈債券〉‘を'発行する  / 〈為替〉‘を'変動相場制にする",
    "example_sentence": "The boat will float on the water.",
    "translated_sentence": "ボートは水に浮きます。"
  },
  {
    "entry": "include",
    "meaning_ja": "〈他〉を含む / 《...の中に》...を入れる, を込める《in, among, with ...》",
    "example_sentence": "I always include a salad with my dinner.",
    "translated_sentence": "私はいつも夕食にサラダを入れます。"
  },
  {
    "entry": "individual",
    "meaning_ja": "《名詞の前にのみ用いて》個々の,個別の(separate)  / 《名詞の前にのみ用いて》個人的な,一個人の  / 独特の",
    "example_sentence": "This can't be done by individual effort.",
    "translated_sentence": "これは個人の力で出来るものではない。"
  },
  {
    "entry": "indicate",
    "meaning_ja": "…‘を'指し示す,指摘する  / …‘を'簡単に述べる,知らせる",
    "example_sentence": "Can you indicate where the nearest restroom is?",
    "translated_sentence": "最寄りのトイレはどこかを示していただけますか？"
  },
  {
    "entry": "instance",
    "meaning_ja": "〈C〉例, 実例 / 場合",
    "example_sentence": "Can you give me an instance of how to use this software?",
    "translated_sentence": "このソフトウェアの使い方の例を教えてもらえますか？"
  },
  {
    "entry": "grin",
    "meaning_ja": "字《…に》ニヤリと笑う《at ...》；（苦痛・敵意・怒りなどで）《…に》歯をむき出す《at ...》〈C〉にやりとすること",
    "example_sentence": "She gave me a big grin when she saw me.",
    "translated_sentence": "彼女は私に会った時に大きな笑顔をくれた。"
  },
  {
    "entry": "magazine",
    "meaning_ja": "雑誌  / 武器弾薬庫,火薬庫  / (連発銃の)弾倉  / (カメラの)フイルム巻き取り枠",
    "example_sentence": "I bought an interesting magazine in the bookstore.",
    "translated_sentence": "私は書店で面白い雑誌を買った。"
  },
  {
    "entry": "previously",
    "meaning_ja": "以前に,先に / 前もって",
    "example_sentence": "I have previously visited that restaurant.",
    "translated_sentence": "私は以前にそのレストランを訪れたことがあります。"
  },
  {
    "entry": "publisher",
    "meaning_ja": "(書籍などの)出版業者,出版社;《米》新聞発行者",
    "example_sentence": "The publisher released a new book last week.",
    "translated_sentence": "出版業者は先週新しい本を発売しました。"
  },
  {
    "entry": "racial",
    "meaning_ja": "人種[上]の,民族の,種族の",
    "example_sentence": "Racial discrimination is a serious issue that needs to be addressed.",
    "translated_sentence": "人種差別は深刻な問題であり、解決すべきです。"
  },
  {
    "entry": "rapidly",
    "meaning_ja": "速く,すみやかに",
    "example_sentence": "He ran rapidly towards the finish line.",
    "translated_sentence": "彼は速くゴールラインに向かって走った。"
  },
  {
    "entry": "murder",
    "meaning_ja": "〈U〉殺人謀殺,殺害  / 〈C〉殺人行為,殺人事件  / 〈U〉《話》危険なこと,命取りになること",
    "example_sentence": "The detective solved the murder case.",
    "translated_sentence": "探偵は殺人事件を解決した。"
  },
  {
    "entry": "sake",
    "meaning_ja": "〈C〉ため;利益;理由,目的",
    "example_sentence": "He worked hard for the sake of his family's future.",
    "translated_sentence": "彼は家族の未来のために一生懸命働いた。"
  },
  {
    "entry": "Saturday",
    "meaning_ja": "土曜日(Saturn's dayの意;《略》Sat.)",
    "example_sentence": "I'm looking forward to Saturday.",
    "translated_sentence": "土曜日が楽しみです。"
  },
  {
    "entry": "son",
    "meaning_ja": "息子 / 《複数形で》(男子の)子孫 / 《文》《比喩(ひゆ)的に》(場所 / 主義などの)子,後継者 / 《年長者が年少者に呼び掛けて》 / お前さん / 《the S-》イエスキリスト",
    "example_sentence": "My son is a student",
    "translated_sentence": "私の息子は学生です。"
  },
  {
    "entry": "nineteen",
    "meaning_ja": "〈C〉(数の)19;19の記号(19,XIXなど)  / 〈U〉(24時間制で)19時,19分;19歳  / 〈U〉《複数扱い》19人,19個  / 〈U〉19人(19個)一組のもの  / 19の,19人の,19個の  / 《補語にのみ用いて》19歳の(で)",
    "example_sentence": "I have nineteen books on my shelf.",
    "translated_sentence": "私の本棚には19冊の本があります。"
  },
  {
    "entry": "therefore",
    "meaning_ja": "それゆえ,それで;その結果",
    "example_sentence": "He studied hard, therefore he passed the exam.",
    "translated_sentence": "彼は一生懸命勉強した。それゆえ、彼は試験に合格した。"
  },
  {
    "entry": "wall",
    "meaning_ja": "〈C〉(石・れんがなどの)壁,へい  / {U}(胃などの)内壁,内側  / 〈C〉(…の)壁[のようなもの]《+of+名》",
    "example_sentence": "The wall was painted white.",
    "translated_sentence": "壁は白く塗られていた。"
  },
  {
    "entry": "west",
    "meaning_ja": "西の,西部の,西向きの;西からの  /",
    "example_sentence": "I live in the west of the city.",
    "translated_sentence": "私は市の西部に住んでいます。"
  },
  {
    "entry": "wheel",
    "meaning_ja": "車輪  / 《the ~》(自動車の)ハンドル,(船の)舵輪(steering wheel)  / (製陶用の)ろくろ(potter's wheel);紡ぎ車(spinning wheel)  / 《複数形で》(…の)推進力,原動力;機関,機構《of+名》  / 回転[運動],旋回[運動]  / 《複数形で》《俗》足,自動車,車",
    "example_sentence": "The wheel turns round and round.",
    "translated_sentence": "車輪は回り続ける。"
  },
  {
    "entry": "implementation",
    "meaning_ja": "〈U〉履行, 実行, 実施 / 《ソフトウェアなどの》実装, 導入",
    "example_sentence": "Our team is working on the implementation of a new software system that will greatly improve productivity.",
    "translated_sentence": "私たちのチームは、生産性を大幅に向上させる新しいソフトウェアシステムの実装に取り組んでいます。"
  },
  {
    "entry": "admit",
    "meaning_ja": "〈他〉を認める / を入れる,に入ることを許す / を収容できる",
    "example_sentence": "I admit to being careless.",
    "translated_sentence": "僕が不注意なことは認める。"
  },
  {
    "entry": "advertise",
    "meaning_ja": "…を広告する,宣伝する;…を言いふらす  / 《…を求めて》広告を出す《for ...》",
    "example_sentence": "We need to advertise our new product to increase sales.",
    "translated_sentence": "私たちは新製品を広告して売上を増やす必要があります。"
  },
  {
    "entry": "advertisement",
    "meaning_ja": "〈C〉広告,宣伝",
    "example_sentence": "The advertisement for the new product was very appealing.",
    "translated_sentence": "新製品の広告は非常に魅力的だった。"
  },
  {
    "entry": "afford",
    "meaning_ja": "《[[can]],[[could]],be [[able to]]と共に用いて》〈金・時間・もの〉を持てる余裕がある, ...を買う余裕がある, ...を支払う余裕がある  / 《[[can ~ to do|afford to]]》 ...できる余裕がある / 《文》〈物・事が〉…を与える, を供給する([[provide with]])",
    "example_sentence": "I can't afford to buy a new car.",
    "translated_sentence": "私は新しい車を買う余裕がありません。"
  },
  {
    "entry": "across",
    "meaning_ja": "を横切って / と交差して / の向こう側に",
    "example_sentence": "The cat ran quickly across the street.",
    "translated_sentence": "猫は素早く通りを横切った。"
  },
  {
    "entry": "arrival",
    "meaning_ja": "〈U〉(…への)到着《+at(in)+名》  / 〈U〉(目標・目的などへの)到達《+at(in)+名》  / 〈C〉到着した人(物),到着する人(物);生まれた子",
    "example_sentence": "The arrival of the train was delayed due to bad weather.",
    "translated_sentence": "悪天候のため、列車の到着が遅れました。"
  },
  {
    "entry": "white",
    "meaning_ja": "白い,白色の,純白の  / (恐怖で人・顔・唇などが)青白い,血の気のない(pale)  / (皮膚の色の)白い,白人の  / (髪・ひげなどが)銀色の,改色の  / 雪のある,雪の積もった  / 《おもに古》潔白の,罪のない  / 《英》(コーヒーが)ミルク入りの",
    "example_sentence": "The snow was white and sparkly.",
    "translated_sentence": "雪は白くてキラキラしていた。"
  },
  {
    "entry": "beneath",
    "meaning_ja": "...の下に；...の圧力下に,...に支配されて；...より劣って；...に値しない",
    "example_sentence": "The cat is sleeping peacefully beneath the old oak tree.",
    "translated_sentence": "その猫は古いオークの木の下で平和に眠っています。"
  },
  {
    "entry": "blood",
    "meaning_ja": "血,血液  / 流血(bloodshed);殺人  / 気質,気性,血気,血潮  / 血統,血縁(kinship);生まれ,家柄;《the~》王家の血統  / (人種・出身国の)系",
    "example_sentence": "The sight of blood makes me faint.",
    "translated_sentence": "血を見ると気が遠くなる。"
  },
  {
    "entry": "venture",
    "meaning_ja": "〈U〉〈C〉危険な企て,冒険 / 〈C〉冒険に賭けた物",
    "example_sentence": "He started his own venture and became a successful entrepreneur.",
    "translated_sentence": "彼は自分のベンチャーを始めて成功した起業家になった。"
  },
  {
    "entry": "beside",
    "meaning_ja": "《位置・場所》…のそばに,のわきに,の横に / …と比較して([[compared with]]) / (要点など)をはずれて([[apart from]])",
    "example_sentence": "He was sitting beside me.",
    "translated_sentence": "彼は私の隣に座っていた。"
  },
  {
    "entry": "modern",
    "meaning_ja": "現代の,今の  / (ルネッサンス以後の)近代の,(中世に続く)近世の  / (服装・設備などが)現代的な,モダンな(up-to-date)  / 現代人  / (考え方・生き方などの面で)現代的な人",
    "example_sentence": "I love the modern design of this house.",
    "translated_sentence": NaN
  },
  {
    "entry": "module",
    "meaning_ja": "【名】(建築・機械工作などの)測定基準;基準単位(寸法)； モジュール",
    "example_sentence": "This module provides a set of measurement standards for architectural and mechanical works.",
    "translated_sentence": "このモジュールは、建築や機械工作の測定基準のセットを提供します。"
  },
  {
    "entry": "election",
    "meaning_ja": "選挙  / 当選",
    "example_sentence": "The election is scheduled for next month.",
    "translated_sentence": "選挙は来月予定されています。"
  },
  {
    "entry": "agent",
    "meaning_ja": "代理人 / 周旋人  / 働き(作用)を起こすもの / 作用物,薬剤  / (政府機関,特にFBI,CIAなどの)部員,機関員",
    "example_sentence": "The agent signed the contract on behalf of the company.",
    "translated_sentence": "代理人は会社を代表して契約書に署名した。"
  },
  {
    "entry": "anywhere",
    "meaning_ja": "《疑問文・条件節で》どこかへ(に),《否定文で》どこへも(にも)  / 《肯定文で》どこにでも,どこへでも  / (数量が)(…から…まで)ぐらい,(ざっと…)ぐらい",
    "example_sentence": "Can we go anywhere for our vacation?",
    "translated_sentence": "私たちは休暇にどこかへ行くことができますか？"
  },
  {
    "entry": "apartment",
    "meaning_ja": "アパート,マンション / 豪華な居室 / 部屋 / 貸し室",
    "example_sentence": "I live in a small apartment in the city.",
    "translated_sentence": "私は都市の小さなアパートに住んでいます。"
  },
  {
    "entry": "anxious",
    "meaning_ja": "《...を》心配している, 気になる《about ...》 / 《be ~ to do》 ...を切望して",
    "example_sentence": "She was anxious about her upcoming job interview.",
    "translated_sentence": "彼女はこれからの就職面接について心配していました。"
  },
  {
    "entry": "argument",
    "meaning_ja": "〈U〉〈C〉議論, 口論 / 〈C〉論拠, 理由 /  《文》(本・詩などの)要旨, 概要",
    "example_sentence": "I had a heated argument with my friend yesterday.",
    "translated_sentence": "昨日、友達と激しい口論をしました。"
  },
  {
    "entry": "arrange",
    "meaning_ja": "を整理する, を整える / (前もって)…を手配する,を準備する  / を編曲する /  手配する,準備する / 《Aと...について》打ち合わせる, 取り決める 《~ with A about ...》",
    "example_sentence": "Please arrange the books on the shelf in alphabetical order.",
    "translated_sentence": "本をアルファベット順に棚に並べてください。"
  },
  {
    "entry": "arrangement",
    "meaning_ja": "〈U〉《...の》整理,配置《of》 / 〈C〉整理したもの / 整理の仕方 / 《...の》準備, 手配《for ...》 / 《U/C》取り決め / 和解",
    "example_sentence": "I need to make an arrangement of my documents before the meeting.",
    "translated_sentence": "会議前に私の書類の整理をしなければなりません。"
  },
  {
    "entry": "arrest",
    "meaning_ja": "(…の罪で)…'を'逮捕する,検挙する《+名+for+名》  / 〈進歩など〉'を'止める  / 〈注意など〉'を'ひく",
    "example_sentence": "The police had to arrest him for his involvement in the robbery.",
    "translated_sentence": "彼が強盗事件に関与していたため、警察は彼を逮捕しなければならなかった。"
  },
  {
    "entry": "asset",
    "meaning_ja": "価値のあるもの,宝  / 《複数形で》資産,財産",
    "example_sentence": "This painting is not just a decoration, it's an asset.",
    "translated_sentence": "この絵はただの装飾ではなく、価値のあるものです。"
  },
  {
    "entry": "badly",
    "meaning_ja": "悪く, まずく, 下手に / 大いに, ひどく",
    "example_sentence": "He played the piano badly.",
    "translated_sentence": "彼はピアノを下手に弾いた。"
  },
  {
    "entry": "belt",
    "meaning_ja": "ベルト,バンド,帯  / (特徴のある)地帯,地方  / (機械の)ベルト  / ベルト状のもの  / 《話》ピシャリとたたくと  /",
    "example_sentence": "I need to tighten my belt.",
    "translated_sentence": "私はベルトを締める必要があります。"
  },
  {
    "entry": "belief",
    "meaning_ja": "〈U〉信念 / 《...への》信頼《in ...》 / (あるものの真実性・存在を)信じること,容認《in ...》 / 〈U〉〈C〉《...への》信仰《in ...》",
    "example_sentence": "His belief in himself has led him to success.",
    "translated_sentence": "彼自身への信念が彼を成功に導いた。"
  },
  {
    "entry": "blue",
    "meaning_ja": "青い,あい色の  / 青黒い  / 《話》陰気な,憂うつな",
    "example_sentence": "The sky is blue.",
    "translated_sentence": "空は青いです。"
  },
  {
    "entry": "borrow",
    "meaning_ja": "(…を担保として…から)…'を'借りる《+名+from+名+on+名》  / 〈言葉・思想・方法など〉'を'借りてまねる,模倣(もほう)する  / 借りる,借金する",
    "example_sentence": "I borrowed a book from the library.",
    "translated_sentence": "私は図書館から本を借りました。"
  },
  {
    "entry": "bore",
    "meaning_ja": "《…で》をうんざりさせる,退屈させる《with,by ...》",
    "example_sentence": "This novel bores me.",
    "translated_sentence": "この小説は退屈だ。"
  },
  {
    "entry": "branch",
    "meaning_ja": "枝を出す,枝を広げる  / (川・道・鉄道などが)分岐する",
    "example_sentence": "The waterways branch out across the plain.",
    "translated_sentence": "平野を横切って水路が枝分かれしている。"
  },
  {
    "entry": "campaign",
    "meaning_ja": "(ある目的を持った一定地域での)軍事行動,作戦,戦闘  / (政治的・社会的・商業的などの目的で行われる)(…の)運動,(特に)宣伝戦,選挙運動《+against(for)+名》  / (…の)運動に参加する,選挙運動をする《+against(for)+名》",
    "example_sentence": "The military launched a campaign to secure the border.",
    "translated_sentence": "軍事は国境を確保するためのキャンペーンを開始しました。"
  },
  {
    "entry": "ceremony",
    "meaning_ja": "〈C〉儀式,式典,式【U】(社交上の)礼儀,礼式,作法；形式ばること；うわべだけの行為",
    "example_sentence": "The graduation ceremony was held in the school auditorium.",
    "translated_sentence": "卒業式は学校の講堂で行われました。"
  },
  {
    "entry": "chamber",
    "meaning_ja": "【名/C】空間 / 薬室 / 部屋 / 会議場【動/他】に部屋を設ける / を部屋に入れる / (弾)を薬室に込める",
    "example_sentence": "The musician entered the chamber to practice his music.",
    "translated_sentence": "音楽家は音楽を練習するために室内に入った。"
  },
  {
    "entry": "characteristic",
    "meaning_ja": "〈C〉特徴,特性",
    "example_sentence": "That is a characteristic inherent in him.",
    "translated_sentence": "それが彼本来の性格なのだ。"
  },
  {
    "entry": "chat",
    "meaning_ja": "〈C〉〈U〉《話》(…との)雑談,談笑《+with+名》  / 〈C〉ツグミ類の鳥",
    "example_sentence": "Let's have a chat over coffee.",
    "translated_sentence": "コーヒーを飲みながら雑談しましょう。"
  },
  {
    "entry": "cite",
    "meaning_ja": "(作家・作品から)〈文章・句〉'を'引用する(quote)《+名+from+名》  / …'を'召喚する,呼び出す(summon)  / (証拠・確認などのために)…'を'引き合いに出す  / …‘に'感謝状を出す,'を'表彰する",
    "example_sentence": "She decided to cite a famous quote from the book in her presentation.",
    "translated_sentence": "彼女はプレゼンテーションでその本から有名な引用を引用することに決めました。"
  },
  {
    "entry": "climate",
    "meaning_ja": "〈U〉〈C〉気候  / 〈C〉(ある特定の気候をもっている)地方,風土  / 〈U〉〈C〉(地域,時代の)傾向,風潮",
    "example_sentence": "The climate in this region is very hot and humid.",
    "translated_sentence": "この地域の気候は非常に暑く湿度が高いです。"
  },
  {
    "entry": "common",
    "meaning_ja": "(二つ以上のものに)共通の,共同の,共有の  / 一般の,公共の,公衆の  / 普通の,ありふれた  / 慢凡な,並みの  / 品のない,粗野な,野卑な(vulgar)  / (数式で)共通の,公約の通約の・ (文法で)通性の,通格の(男性・女性どちらの格も用いることができる)",
    "example_sentence": "Having common interests is important in a relationship.",
    "translated_sentence": "恋愛関係において共通の趣味を持つことは重要です。"
  },
  {
    "entry": "complex",
    "meaning_ja": "いくつかの部分から成る,複合の,合成の  / 複雑な,入りくんだ,こみいった(complicated)",
    "example_sentence": "The human brain is a complex organ.",
    "translated_sentence": "人間の脳は複雑な器官です。"
  },
  {
    "entry": "content",
    "meaning_ja": "〈C〉《複数形で》(容器などにはいっている) 中身,内容物 / 含有量,(容器の)容量 / 〈U〉(書物・演説などの)趣旨",
    "example_sentence": "The content of the book was very interesting.",
    "translated_sentence": "本の内容はとても興味深かった。"
  },
  {
    "entry": "contract",
    "meaning_ja": "(売買,請負などの)契約,約定(agreement),請負  / 契約書",
    "example_sentence": "The contract was signed yesterday.",
    "translated_sentence": "契約は昨日署名されました。"
  },
  {
    "entry": "correct",
    "meaning_ja": "事実に合った,正しい,正確な  / 標準(因習)に合った,妥当な,適切な(proper)",
    "example_sentence": "The answer is correct.",
    "translated_sentence": "その答えは正解です。"
  },
  {
    "entry": "definition",
    "meaning_ja": "〈C〉定義,語義の記述  / 〈C〉(本質・特徴を)明確にすること《+of+名》  / 〈U〉(映像・音声などの)鮮明度",
    "example_sentence": "Can you give me the definition of this word?",
    "translated_sentence": "この単語の定義を教えてもらえますか？"
  },
  {
    "entry": "proportion",
    "meaning_ja": "〈C〉《...に対する...の》 割合, 比率 《of ... to ...》 / 〈U〉《...との》 調和 《to ...》",
    "example_sentence": "The proportion of students who passed the exam is quite high.",
    "translated_sentence": "試験に合格した学生の割合はかなり高いです。"
  },
  {
    "entry": "proposal",
    "meaning_ja": "〈U〉提案すること / 〈C〉提案されたこと / 結婚の申し込み",
    "example_sentence": "He made a proposal to his girlfriend.",
    "translated_sentence": "彼は彼女にプロポーズした。"
  },
  {
    "entry": "defeat",
    "meaning_ja": "を負かす, を打ち破る",
    "example_sentence": "It’s important to learn from defeat and keep moving forward.",
    "translated_sentence": "敗北から学び、前進し続けることが重要です。"
  },
  {
    "entry": "deeply",
    "meaning_ja": "深く  / (色が)濃く  / (声が)太く,(音調が)低く  / (程度が)非常に,深く",
    "example_sentence": "She is deeply in love with him.",
    "translated_sentence": "彼女は彼に深く恋をしている。"
  },
  {
    "entry": "density",
    "meaning_ja": "〈U〉密集 / 密度, 濃さ",
    "example_sentence": "The density of the population in the city is very high.",
    "translated_sentence": "都市の人口密度は非常に高いです。"
  },
  {
    "entry": "deposit",
    "meaning_ja": "〈C〉(銀行への) 預金 / 担保 / (自然の作用による)堆積物",
    "example_sentence": "I need to make a deposit at the bank.",
    "translated_sentence": "私は銀行で預金をする必要があります。"
  },
  {
    "entry": "desire",
    "meaning_ja": "願望,欲望;要望,要求  / 《通例単数形で》望みのもの  / 〈C〉〈U〉(…に対する)性的欲望《+for+名》",
    "example_sentence": "I have a strong desire to travel the world.",
    "translated_sentence": "私は世界を旅することを切望しています。"
  },
  {
    "entry": "deserve",
    "meaning_ja": "(賞罰・評価など)に値する, を受ける価値がある / 《...を》 受けるに足る 《of ...》",
    "example_sentence": "He deserves the prize.",
    "translated_sentence": "彼はその賞に値する。"
  },
  {
    "entry": "develop",
    "meaning_ja": "(今まではなかったが)…‘を'生じさせる,‘を'現す  / …‘を'発展させる,伸ばす,成長させる  / 〈病気・悪習など〉‘に'だんだん感染する,かかりはじめる,‘を'発病させる  / 〈資源など〉‘を'開発する  / …‘を'十分に考える,〈議論・主題など〉‘を'展開する  / 〈フイルム〉‘を'現像する  / 〈ないもの・隠れているものが〉現れる,明らかになる  / (…から…に)発展する,発育する《+from+名+into+名》  / 〈フイルムが〉現像される",
    "example_sentence": "The new technology will help develop innovative solutions.",
    "translated_sentence": "新しい技術は革新的な解決策を生み出すのに役立つでしょう。"
  },
  {
    "entry": "differ",
    "meaning_ja": "違う,異なる；意見を異にする",
    "example_sentence": "Their opinions differ on the best way to solve the problem.",
    "translated_sentence": "問題を解決する最善の方法について、彼らの意見は異なる。"
  },
  {
    "entry": "dominate",
    "meaning_ja": "…‘を'支配する,‘に'君臨する  / …‘で'優位を占める,幅を利かす  / …‘を'見下ろす位置にある;…‘の'上にそびえ立つ  / (…を)支配する,威圧する《+over+名》  / 《副詞[句]を伴って》優勢である",
    "example_sentence": "The lion is known to dominate the savannah.",
    "translated_sentence": "ライオンはサバンナの支配者であることで知られています。"
  },
  {
    "entry": "early",
    "meaning_ja": "(時間・時期的に)早く  / (予定・ふだんより)早く",
    "example_sentence": "He arrived early this morning.",
    "translated_sentence": "彼は今朝早く到着しました。"
  },
  {
    "entry": "education",
    "meaning_ja": "(一般に)教育  / (身につけた)教育,教養,知識  / 教育学,教授法",
    "example_sentence": "Education is the key to success.",
    "translated_sentence": "教育は成功の鍵です。"
  },
  {
    "entry": "eighteen",
    "meaning_ja": "〈C〉(数の)18;18の記号(18,XVIIIなど)  / 〈U〉(24里間制で)18時,18分;18歳  / 〈U〉《複数扱い》18人,18個  / 〈C〉18(18人,18個)一組のもの  / 18の,18人の,18個の  / 《補語にのみ用いて》18歳で",
    "example_sentence": "She celebrated her eighteenth birthday with a big party.",
    "translated_sentence": "彼女は大きなパーティーで18歳の誕生日を祝った。"
  },
  {
    "entry": "electric",
    "meaning_ja": "《名詞の前にのみ用いて》電気の;電気が引き起こす  / 《名詞の前にのみ用いて》電気で動く,電動の;電気を起こす,発電の  / 興奮させる,はらはら(ぞくぞく)させる",
    "example_sentence": "I need to charge my electric car.",
    "translated_sentence": "私は電気自動車を充電する必要があります。"
  },
  {
    "entry": "employment",
    "meaning_ja": "〈U〉(人の)雇用  / 〈U〉(物・能力・時間の)使用《+of+名》  / 〈U〉〈C〉職,職業,仕事",
    "example_sentence": "He is seeking employment.",
    "translated_sentence": "彼は職を求めている。"
  },
  {
    "entry": "entire",
    "meaning_ja": "《名詞の前にのみ用いて》全体の, 全部の(whole) / 壊れていない,無傷の / 《名詞の前にのみ用いて》無条件の, 完全な, 全くの",
    "example_sentence": "The entire team worked together to complete the project.",
    "translated_sentence": "チーム全体で協力してプロジェクトを完成させました。"
  },
  {
    "entry": "entertainment",
    "meaning_ja": "〈U〉娯楽,気晴らし,楽しみ  / 〈C〉催し物,余興,演芸  / 〈U〉客呼び,もてなし,歓待",
    "example_sentence": "I enjoy going to the theater for entertainment.",
    "translated_sentence": "私は娯楽のために劇場に行くのが好きです。"
  },
  {
    "entry": "enterprise",
    "meaning_ja": "企業",
    "example_sentence": "The enterprise is expanding its operations to new markets.",
    "translated_sentence": "その企業は新たな市場に事業を拡大しています。"
  },
  {
    "entry": "entertain",
    "meaning_ja": "〈人〉を楽しませる / をもてなす / 客を呼ぶ, 客をもてなす",
    "example_sentence": "She knows how to entertain a crowd with her singing.",
    "translated_sentence": "彼女は歌で人々を楽しませる方法を知っています。"
  },
  {
    "entry": "essay",
    "meaning_ja": "(ある論題・問題に関する)小論,評論;随筆,エッセイ《+on(upon)+名》  / 《文》試み[ること],企て(attempt)  / …‘を'試みる;…しようとする《+to do》",
    "example_sentence": "I need to write an essay on the topic of climate change.",
    "translated_sentence": "私は気候変動のトピックについての小論を書かなければなりません。"
  },
  {
    "entry": "evil",
    "meaning_ja": "邪悪な / 不吉な",
    "example_sentence": "He is an evil person.",
    "translated_sentence": "彼は邪悪な人物です。"
  },
  {
    "entry": "evolve",
    "meaning_ja": "〈他〉を徐々に発展させる / を進化させる / 〈自〉徐々に発展する / 進化する",
    "example_sentence": "Technology continues to evolve at a rapid pace.",
    "translated_sentence": "テクノロジーは急速に進化し続けています。"
  },
  {
    "entry": "excess",
    "meaning_ja": "〈U〉超過,過剰 / 不節制〈C〉度を超えた行為 / 暴食",
    "example_sentence": "In a buyers market, there is an excess of goods and prices are lowered, making it advantageous for buyers.",
    "translated_sentence": "買い手市場では、商品が過剰で価格が下がり、買い手にとって有利になります。"
  },
  {
    "entry": "excitement",
    "meaning_ja": "〈U〉興奮,動揺  / 〈C〉興奮させるもの(事),刺激物",
    "example_sentence": "I could feel the excitement in the air as the concert started.",
    "translated_sentence": "コンサートが始まると空気中に漂う興奮を感じることができました。"
  },
  {
    "entry": "exhibit",
    "meaning_ja": "〈感情・性質など〉‘を'表す,示す  / …‘を'出品する,陳列する  / 出品物,陳列品  / 《米》展覧会,展示会(exhibition)  / (法律上の)証拠書類(物件)",
    "example_sentence": "Her smile exhibits her happiness.",
    "translated_sentence": "彼女の笑顔は彼女の幸せを表しています。"
  },
  {
    "entry": "exist",
    "meaning_ja": "存在する,実在する  / 生在する,生きている  / 生じる,見られる,起こる",
    "example_sentence": "Many different species of animals exist in the world.",
    "translated_sentence": "世界には多くの異なる種類の動物が存在しています。"
  },
  {
    "entry": "executive",
    "meaning_ja": "実行の, 執行力のある / 行政上の",
    "example_sentence": "The executive decision was made to proceed with the project.",
    "translated_sentence": "プロジェクトを進めるために、経営陣による決定がなされました。"
  },
  {
    "entry": "expenditure",
    "meaning_ja": "〈U〉《…に対する時・金・労力などの》消費,支出《of ... on ...》 / 〈C〉〈U〉《…に》消費(支出)されたもり,《…の》費用,経費《on, for ...》",
    "example_sentence": "The government has increased its expenditure on education.",
    "translated_sentence": "政府は教育への支出を増やしました。"
  },
  {
    "entry": "expense",
    "meaning_ja": "〈U〉支出, 費用 / 犠牲 / 〈C〉出費の原因",
    "example_sentence": "I need to keep track of my monthly expenses.",
    "translated_sentence": "私は毎月の支出を記録する必要があります。"
  },
  {
    "entry": "explanation",
    "meaning_ja": "〈U〉〈C〉(…の)説明,解説,弁明《+of+名》  / 〈C〉(…の)説明(弁明)となる事(物)《+of(for)+名》",
    "example_sentence": "Can you give me an explanation for your behavior?",
    "translated_sentence": "あなたの行動の説明をしてもらえますか？"
  },
  {
    "entry": "experiment",
    "meaning_ja": "〈C〉《...の》実験, 試み《in, on, with ...》",
    "example_sentence": "I conducted a scientific experiment to test my hypothesis.",
    "translated_sentence": "私は仮説を検証するために科学実験を行いました。"
  },
  {
    "entry": "experimental",
    "meaning_ja": "実験の,実験に基づく:  / 実験に使われる,実験用の  / 実験的な,試験的な",
    "example_sentence": "The scientist conducted an experimental study to test the new drug.",
    "translated_sentence": "科学者は新薬をテストするために実験的な研究を行った。"
  },
  {
    "entry": "explore",
    "meaning_ja": "〈他〉を探検する / を詳しく調べる〈自〉探検する",
    "example_sentence": "I love to explore new places and discover hidden gems.",
    "translated_sentence": "私は新しい場所を探検し、隠れた名所を発見するのが大好きだ。"
  },
  {
    "entry": "export",
    "meaning_ja": "(外国へ)〈商品〉‘を'輸出する《+名+to+名》",
    "example_sentence": "The company plans to export their products to foreign markets.",
    "translated_sentence": "その会社は自社製品を外国市場に輸出する予定です。"
  },
  {
    "entry": "fantastic",
    "meaning_ja": "異様な, 風変わりな / 想像上の, 根拠のない / 《話》とてもすばらしい",
    "example_sentence": "The view from the top of the mountain was fantastic.",
    "translated_sentence": "山の頂上からの景色は異様に素晴らしかった。"
  },
  {
    "entry": "federal",
    "meaning_ja": "連邦の",
    "example_sentence": "The federal government is responsible for national defense.",
    "translated_sentence": "連邦政府は国防に責任を持っています。"
  },
  {
    "entry": "fee",
    "meaning_ja": "〈C〉料金,報酬,手数料《for》〈U〉領地",
    "example_sentence": "There is a fee for using the gym.",
    "translated_sentence": "ジムの利用には料金がかかります。"
  },
  {
    "entry": "forever",
    "meaning_ja": "永久に,永遠に  / 常に,絶えず",
    "example_sentence": "Love is forever.",
    "translated_sentence": "愛は永久に続く。"
  },
  {
    "entry": "format",
    "meaning_ja": "(書籍の)体裁,型,判  / (ラジオ・テレビ番組などの)構成",
    "example_sentence": "The format of the book is very user-friendly.",
    "translated_sentence": "この本の体裁はとても使いやすいです。"
  },
  {
    "entry": "formation",
    "meaning_ja": "〈U〉(…の)形成,構成,育成《+of+名》  / 〈C〉形成されたもの,構成物;(その)構造,組織  / 〈U〉〈C〉隊形,陣形",
    "example_sentence": "The formation of the new committee was announced today.",
    "translated_sentence": "新しい委員会の設立が今日発表されました。"
  },
  {
    "entry": "former",
    "meaning_ja": "《名詞の前にのみ用いて》かつての,以前の  / 《the ~》(二つのうちの)前者(の)",
    "example_sentence": "The former president of the company retired last year.",
    "translated_sentence": "会社の前社長は去年引退しました。"
  },
  {
    "entry": "fortune",
    "meaning_ja": "〈U〉運,運勢,運命  / 〈U〉〈C〉幸運;《F-》運命の女神  / 〈U〉富(とみ),財産(riches, wealth);〈C〉大金,巨万の富",
    "example_sentence": "She had the good fortune to win the lottery.",
    "translated_sentence": "彼女は宝くじに当たるという幸運を得た。"
  },
  {
    "entry": "friend",
    "meaning_ja": "〈C〉友人,友だち  / 〈C〉味方,支持者  / 〈C〉役に立つもりの  / 〈C〉《F-》フレンド派(Society of Friends)の人,クエーカー教徒(Quaker)  / 《丁重な呼びかけ》友よ",
    "example_sentence": "My best friend is always there for me.",
    "translated_sentence": "親友はいつも私のそばにいてくれる。"
  },
  {
    "entry": "frighten",
    "meaning_ja": "(突然)…‘を'ひどく驚かせる,おびえさせる  / ひどく怖がる,おびえる",
    "example_sentence": "The loud noise frightened me.",
    "translated_sentence": "大きな音が私をびっくりさせました。"
  },
  {
    "entry": "genuine",
    "meaning_ja": "本物の / 真性の / 誠実な",
    "example_sentence": "She has a genuine smile that lights up the room.",
    "translated_sentence": "彼女は部屋を明るくする本物の笑顔を持っています。"
  },
  {
    "entry": "gaze",
    "meaning_ja": "〈自〉《...を》じっと見つめる,凝視する《at,into,on ...》",
    "example_sentence": "She gazed out the window, lost in thought.",
    "translated_sentence": "彼女は窓の外を見つめ、考えにふけっていた。"
  },
  {
    "entry": "guilty",
    "meaning_ja": "罪を犯した  / 有罪の宣告を受けた  / やましい,身に覚えのある",
    "example_sentence": "He was found guilty of the crime.",
    "translated_sentence": "彼はその犯罪で有罪とされた。"
  },
  {
    "entry": "knee",
    "meaning_ja": "ひざ,ひざがしら  / (洋服の)ひざの部分 / ひざのように曲がった物",
    "example_sentence": "I twisted my knee while I was playing soccer.",
    "translated_sentence": "サッカーをしているときに膝をひねってしまった。"
  },
  {
    "entry": "ideal",
    "meaning_ja": "理想的な,申し分のない / (実在ではなく)観念的な,頭の中だけの",
    "example_sentence": "This is an ideal job for me.",
    "translated_sentence": "これは私にとって理想の仕事です。"
  },
  {
    "entry": "illustration",
    "meaning_ja": "〈C〉(説明などのための)例,実例(example)  / 〈U〉(実例・図版・表などによる)(…の)説明,例証《+of+名》  / 〈C〉挿絵,説明図,図版,イラスト",
    "example_sentence": "This book contains beautiful illustrations.",
    "translated_sentence": "この本には美しいイラストが含まれています。"
  },
  {
    "entry": "index",
    "meaning_ja": "(本・雑誌などの)索引;図書目録  / 指し示すもの,印  / (計器などの)指針  / 指数・虜  / 《the I-》(カトック教会の)禁所目録  / 〈本など〉‘に'索引をつける  / 〈語など〉‘を'索引に載せる",
    "example_sentence": "I couldn't find the information I needed, so I checked the index of the book.",
    "translated_sentence": "必要な情報が見つからなかったので、本の索引を調べました。"
  },
  {
    "entry": "industry",
    "meaning_ja": "〈U〉(一般に)産業  / 〈C〉(特定分野の)事業,実業,生事業  / 〈U〉勤勉",
    "example_sentence": "The automotive industry is a major contributor to the economy.",
    "translated_sentence": "自動車産業は経済に大きく貢献しています。"
  },
  {
    "entry": "install",
    "meaning_ja": "〈装置など〉を取り付ける, を設備する / 〈人〉を就任させる, ...の就任式を行う  / ...を席につかせる",
    "example_sentence": "I need to install a new software on my computer.",
    "translated_sentence": "私はコンピュータに新しいソフトウェアをインストールする必要があります。"
  },
  {
    "entry": "institution",
    "meaning_ja": "〈U〉設立 / 慣例, 慣習 / 公共機関 / 施設",
    "example_sentence": "The institution was established in 1990.",
    "translated_sentence": "その機関は1990年に設立されました。"
  },
  {
    "entry": "intelligence",
    "meaning_ja": "知能, 知性, 情報部,謀報機関",
    "example_sentence": "He works in the intelligence department.",
    "translated_sentence": "彼は情報部で働いています。"
  },
  {
    "entry": "intellectual",
    "meaning_ja": "知的な / 理性的な",
    "example_sentence": "She is known for her intellectual prowess.",
    "translated_sentence": "彼女は知的な才能で知られています。"
  },
  {
    "entry": "invent",
    "meaning_ja": "…‘を'発明する,考え出す  / …‘を'でっち上げる",
    "example_sentence": "He was able to invent a new device.",
    "translated_sentence": "彼は新しい装置を発明することができました。"
  },
  {
    "entry": "investment",
    "meaning_ja": "〈U〉〈C〉(…を…へ)投資すること,出資《+of+名+in+名》  / 〈C〉(…への)投下資本,投資金《+in+名》  / 〈C〉投資の対象",
    "example_sentence": "He made a wise investment in the stock market.",
    "translated_sentence": "彼は株式市場で賢明な投資をした。"
  },
  {
    "entry": "invitation",
    "meaning_ja": "〈U〉〈C〉招待,案内  / 〈C〉(…への)招待状《+to+名》  / 〈C〉(…を)勧誘(誘惑)するもの《+to+名》",
    "example_sentence": "I received an invitation to the party.",
    "translated_sentence": "私はパーティーの招待状を受け取りました。"
  },
  {
    "entry": "jury",
    "meaning_ja": "〈C〉陪審,陪審員団 / （コンテストなどの）審査員",
    "example_sentence": "The jury reached a unanimous decision.",
    "translated_sentence": "陪審団は満場一致の決定を下した。"
  },
  {
    "entry": "justice",
    "meaning_ja": "〈U〉正義,正しさ;公平,公正 / 〈U〉正当性,妥当性 / 〈U〉司法,裁判 / 〈C〉裁判官([[judge]]),判事,《英》最高法院の判事,《米》最高裁判所判事",
    "example_sentence": "Justice prevailed in the courtroom.",
    "translated_sentence": "法廷で正義が勝利した。"
  },
  {
    "entry": "kill",
    "meaning_ja": "〈人・動物〉‘を'殺す,死亡させる  / 〈植物〉‘を'枯らす  / …‘を'だめにする,失わせる  / 《話》…‘を'ひどく痛ませる(疲れさせる,不快にさせる)  / 〈時間〉‘を'つぶす  / 〈記事など〉‘を'没にする,握りつぶす  / 人殺しをする",
    "example_sentence": "The hunter killed the deer.",
    "translated_sentence": "猟師は鹿を殺した。"
  },
  {
    "entry": "latter",
    "meaning_ja": "(ある期間のうち)後半の,後のほうの",
    "example_sentence": "I prefer the latter half of the year.",
    "translated_sentence": "私は年の後半を好みます。"
  },
  {
    "entry": "law",
    "meaning_ja": "〈U〉《the ~》《集合的に》(法律・法規を総称して)法  / 〈U〉〈C〉(個々の)法律,法規  / 〈U〉法の[統制]力  / 〈U〉法律学  / 〈U〉弁護士[業]  / 〈U〉《the law》警察[力],警官(police)  / 〈U〉法の適用(発動);訴訟(legal action)  / 〈C〉(科学・芸術などでの)法則,きまり  / 〈C〉〈U〉(一般に従うべき)おきて,ならわし,規則",
    "example_sentence": "He studied law at Harvard University.",
    "translated_sentence": "彼はハーバード大学で法学を勉強しました。"
  },
  {
    "entry": "layer",
    "meaning_ja": "《複合語を作って》(物を)積む人(物),置く人(物)  / 卵を産む鶏・層;(ペンキなどの)一塗り;一皮  / (園芸で)取り木",
    "example_sentence": "The outermost layer of the cake is decorated with frosting.",
    "translated_sentence": "ケーキの最も外側の層はフロスティングで飾られています。"
  },
  {
    "entry": "leader",
    "meaning_ja": "指導者,先導者,主将  / 《英》(またleading article)(新聞などの)社説,論説)editorial)  / 《米》(釣り針を釣り糸に連結する)はりす  / 《米》合唱団の指揮者;《英》(オーケストラの)首席第1バイオリン奏者",
    "example_sentence": "The leader of the team was very inspiring.",
    "translated_sentence": "チームのリーダーは非常に刺激的でした。"
  },
  {
    "entry": "legislation",
    "meaning_ja": "〈U〉法律 / 法律制定",
    "example_sentence": "The government is working on new legislation to protect the environment.",
    "translated_sentence": "政府は環境を保護するための新しい法律を作成しています。"
  },
  {
    "entry": "library",
    "meaning_ja": "図書館,図書室  / (個人の)書斎,読書室  / 蔵書  / 双書",
    "example_sentence": "I went to the library to borrow some books.",
    "translated_sentence": "私は本を借りるために図書館に行った。"
  },
  {
    "entry": "letter",
    "meaning_ja": "手紙 / 文字",
    "example_sentence": "I received a letter from her yesterday.",
    "translated_sentence": "昨日彼女からの手紙を受け取った。"
  },
  {
    "entry": "license",
    "meaning_ja": "〈他〉〈法機関が〉…に許可を与える",
    "example_sentence": "The restaurant is licensed to serve alcohol.",
    "translated_sentence": "そのレストランは酒類の提供を許可されている。"
  },
  {
    "entry": "likely",
    "meaning_ja": "《補語にのみ用いて》…しそうな,らしい  / 《名詞の前にのみ用いて》ほんとうらしい,ありそうな  / 適切な,あつらえ向きの  / たぶん,おそらく(probably)",
    "example_sentence": "She is likely to win the competition.",
    "translated_sentence": "彼女は競技に勝つ可能性が高いです。"
  },
  {
    "entry": "limit",
    "meaning_ja": "〈C〉限界；境界；許容量,制限",
    "example_sentence": "There is a limit to how much you can eat.",
    "translated_sentence": "食べられる量には限りがある。"
  },
  {
    "entry": "logic",
    "meaning_ja": "論理学  / 論理,論法  / 《話》いやおうを言わせぬ力,必然性  / 《話》もっともな考え",
    "example_sentence": "Logic is the study of reasoning and argumentation.",
    "translated_sentence": "論理学は推論と論証の研究です。"
  },
  {
    "entry": "literary",
    "meaning_ja": "文学の / 文学に通じた / 文語の, 書き言葉の",
    "example_sentence": "She has a deep appreciation for literary works.",
    "translated_sentence": "彼女は文学作品に対して深い感謝の気持ちを持っています。"
  },
  {
    "entry": "maintenance",
    "meaning_ja": "〈U〉《...の》維持, 保守管理《of ...》 / 《...の》維持された状態《of ...》 / 維持費,生活費",
    "example_sentence": "Regular maintenance is essential to keep your car running smoothly.",
    "translated_sentence": "定期的なメンテナンスは、車をスムーズに走らせるために必要です。"
  },
  {
    "entry": "management",
    "meaning_ja": "〈U〉《…の》管理,運営《of ...》  / 〈U〉《人の》上手な取り扱い,操縦術《of ...》  / 〈U〉〈C〉《the~》《集合的に》経営者側",
    "example_sentence": "Effective management is crucial for the success of any organization.",
    "translated_sentence": "効果的な管理は、どんな組織の成功にも重要です。"
  },
  {
    "entry": "manager",
    "meaning_ja": "(商迭・会社・興行などの)支配人,経営者(団体・チームなどの)監督,部長  / 《形容詞を伴って》(仕事・家事を)やりくりする人,切り回す人",
    "example_sentence": "The manager of the company is responsible for overseeing the operations and making important decisions.",
    "translated_sentence": "会社の支配人は、業務の監督や重要な決定を行う責任があります。"
  },
  {
    "entry": "million",
    "meaning_ja": "100万  / (貨幣単位の)100万  / 《復数形で》(…の)多数,たくさん《+of+名》  / 100万の  / 多数の",
    "example_sentence": "He earned a million dollars last year.",
    "translated_sentence": "彼は去年100万ドルを稼いだ。"
  },
  {
    "entry": "establish",
    "meaning_ja": "を設立する / を安定させる / を制定する / を確立する / を証明する",
    "example_sentence": "They establish a new company.",
    "translated_sentence": "彼らは新しい会社を設立する。"
  },
  {
    "entry": "credit",
    "meaning_ja": "〈U〉信用  / 〈U〉信望,名声  / 〈U〉(…に対する)賞賛,名誉《+for+名》  / 〈C〉《通例a~》(…にとって)名誉となるもの(人)《+to+名》  / 〈U〉信用貸し,掛け売り,信用取引,クレジット  / 〈U〉支払い猶予期間  / 〈U〉(人の経済的)信用度  / 〈U〉〈C〉(銀行の)預金[額];債権  / 〈C〉貸し方  / 〈C〉《米》(科目の)単位  /",
    "example_sentence": "She has good credit and is able to get a loan easily.",
    "translated_sentence": "彼女は信用があり、簡単にローンを借りることができます。"
  },
  {
    "entry": "curious",
    "meaning_ja": "好奇心の強い,物を知りたがる  / 奇妙な,不思議な;珍しい",
    "example_sentence": "She is always curious about new things.",
    "translated_sentence": "彼女は常に新しいことに好奇心を持っています。"
  },
  {
    "entry": "originally",
    "meaning_ja": "もともと, 元来は / 独創的に,斬新に",
    "example_sentence": "She originally wanted to be a doctor, but she changed her mind and became a teacher.",
    "translated_sentence": "彼女は元々医者になりたかったが、考えを変えて教師になった。"
  },
  {
    "entry": "debt",
    "meaning_ja": "〈U〉〈C〉借金;負債  / 〈C〉恩義,義理(obligation)",
    "example_sentence": "He is struggling to pay off his debt.",
    "translated_sentence": "彼は借金を返済するのに苦労している。"
  },
  {
    "entry": "deny",
    "meaning_ja": "…‘を'否定する,否認する  / 《deny+名+名=deny+名+to+名》〈人・自分〉‘に'…‘を'与えない(許さない)",
    "example_sentence": "I deny the accusation.",
    "translated_sentence": "私はその告発を否定します。"
  },
  {
    "entry": "describe",
    "meaning_ja": "…‘を'描写する,‘の'特徴を述べる  / 〈図形など〉‘を'描く,‘の'輪郭をかく",
    "example_sentence": "I will describe the situation to you.",
    "translated_sentence": "あなたに状況を説明します。"
  },
  {
    "entry": "design",
    "meaning_ja": "〈構造など〉‘を'設計する  / …‘の'下絵を描く,図案を描く  / …‘を'計画する,頭の中で考える(plan)  / …‘を'予定する",
    "example_sentence": "He designed the car.",
    "translated_sentence": "彼がその車を設計した。"
  },
  {
    "entry": "currently",
    "meaning_ja": "現在は",
    "example_sentence": "I am currently studying for my exams.",
    "translated_sentence": "私は現在、試験勉強をしています。"
  },
  {
    "entry": "hypothesis",
    "meaning_ja": "〈C〉仮説, 仮定 / (議論の) 前提",
    "example_sentence": "Scientists are testing a new hypothesis about the origin of the universe.",
    "translated_sentence": "科学者たちは宇宙の起源に関する新しい仮説をテストしています。"
  },
  {
    "entry": "president",
    "meaning_ja": "《しばしばPresident》米国大統領;(一般に共和国の)大統領  / 《時にPresident》(組織体の)会長,総裁,長官  / 《時にPresident》《米》社長  / 《しばしばPresident》(大学の)学長,総長  / 《米》議長,司会",
    "example_sentence": "The president of the United States is the head of state and the head of government.",
    "translated_sentence": "アメリカ合衆国の大統領は国家元首であり、政府の長です。"
  },
  {
    "entry": "purchase",
    "meaning_ja": "…‘を'買う,購入する  / (苦難・犠牲により)…‘を'手に入れる,獲得する",
    "example_sentence": "I need to purchase a new laptop.",
    "translated_sentence": "新しいノートパソコンを買う必要があります。"
  },
  {
    "entry": "defense",
    "meaning_ja": "〈U〉《...に対する》 防御, 守備 《aginst ...》 / 〈C〉《…に対する》防御物,防御施設《against ...》 / 〈U〉(スポーツで)守備;〈C〉《米で単数扱い;英で単数・複数扱い》守備側のチーム / 〈U〉(被告側の)弁護,抗弁;〈C〉《米で単数扱い;英で単数・複数扱い》被告側",
    "example_sentence": "The defense attorney presented strong evidence in court.",
    "translated_sentence": "弁護士は法廷で強力な証拠を提示した。"
  },
  {
    "entry": "purpose",
    "meaning_ja": "〈C〉(人の抱く) 目的, 目標 / (物事の) 用途 /",
    "example_sentence": "The purpose of this meeting is to discuss the new project.",
    "translated_sentence": "この会議の目的は、新しいプロジェクトについて話し合うことです。"
  },
  {
    "entry": "pride",
    "meaning_ja": "〈U〉自尊心,自尊  / 〈U〉得意,自慢,誇り  / 〈U〉高慢,うぬぼれ,思い上がり  / 〈C〉《単数形で》(…の)自慢の種,誇りにする物《+of+名》  / 〈C〉(特にライオン・クジャクの)群れ《+of+名》  / 《prideoneselfon(upon)+名(doing)》…‘を'自慢する",
    "example_sentence": "She took great pride in her accomplishments.",
    "translated_sentence": "彼女は自分の業績に大きな誇りを持っていた。"
  },
  {
    "entry": "refer",
    "meaning_ja": "(情報・援助などを得るため)(…に)〈人〉‘を'差し向ける,行かせる(send, direct)  / (委員会などに)〈問題など〉‘を'委託する,持ち込む  / 《まれ》〈物事〉‘を'(…の)せいにする  / (…に)話を及ぼす,ふれる  / (…に)関係する,当てはまる  / (辞書・メモなどを)参照する;引用する;(人に)問い合わせる",
    "example_sentence": "I will refer you to the customer service department for assistance.",
    "translated_sentence": "援助のために、お客様サービス部門にご案内いたします。"
  },
  {
    "entry": "region",
    "meaning_ja": "(地理的な)地域,地帯;(特に広大な)地方  / 《複数形で》(宇宙などの)区分,界,属  / (身体の)部分  / (学問などの)分野,領域  / 《複数形で》(都会から離れた)地方",
    "example_sentence": "The Amazon rainforest is located in the South American region.",
    "translated_sentence": "アマゾンの熱帯雨林は南アメリカ地域に位置しています。"
  },
  {
    "entry": "salt",
    "meaning_ja": "〈U〉塩,食塩  / 〈U〉(化学で)塩  / 《複数形で》薬用塩類(Epsom salt[s],smelling salts)  / 〈U〉生気(刺激,興趣)を与えるもの  / 〈C〉《話》(特に老練な)水夫  / 塩の,塩を含んでいる;塩気のある,塩辛い  / 塩漬けにした  / (土地が)塩につかった  / 塩信でできた,塩水の中で育つ  / 〈食べ物〉‘を'塩で味をつける;〈肉・魚など〉‘を'塩漬けにして保存する《+名+down,+down+名》  / 《受動態で》(…で)〈言葉・話など〉‘を'ぴりっとさせる,‘に'味をつける《+名+with+名》",
    "example_sentence": "I need to add some salt to the soup.",
    "translated_sentence": "スープに少し塩を加える必要があります。"
  },
  {
    "entry": "sand",
    "meaning_ja": "〈U〉砂  / 《複数形で》砂地,砂浜,砂漠  / 《複数形で》時刻,時間",
    "example_sentence": "I love walking on the warm sand at the beach.",
    "translated_sentence": "私はビーチで温かい砂の上を歩くのが好きです。"
  },
  {
    "entry": "row",
    "meaning_ja": "〈C〉《人や物の》(特にまっすぐな)列, 並び《of ...》 / (劇場・教室などの)座席の列 / (両側に建物の並んだ) 通り, 《しばしば町名として》…通り",
    "example_sentence": "The children sat in a row.",
    "translated_sentence": "子供たちは一列に並んで座った。"
  },
  {
    "entry": "register",
    "meaning_ja": "〈C〉登録 / 登録簿,名簿",
    "example_sentence": "Could you please sign the register?",
    "translated_sentence": "登録簿に署名していただけますか？"
  },
  {
    "entry": "satisfy",
    "meaning_ja": "〈他〉〈物事が〉〈人〉を満足させる,を喜ばせる / 〈欲望・条件など〉を満たす / 〈借金〉を返済する / 〈自〉満足を与える",
    "example_sentence": "I always strive to satisfy my customers.",
    "translated_sentence": "いつもお客様を満足させるよう努めています。"
  },
  {
    "entry": "scale",
    "meaning_ja": "規模,尺度,スケール",
    "example_sentence": "The weighing scale showed that the bag weighed 20 kg.",
    "translated_sentence": "計量器によると、バッグの重さは20kgだった。"
  },
  {
    "entry": "respect",
    "meaning_ja": "〈U〉(…に対する)尊敬,敬意《+for(to)+名》  / 〈U〉(…に対する)尊重,注意,関心《+for(to)》+名》  / 《pay one's respectsで》尊敬の表現,よろしくとの伝言  / 〈C〉(特定の)点,箇所(point)  / 〈U〉(…との)関係,関連(relation)《+to+名》",
    "example_sentence": "He is the man for whom we all [[have respect|have respect for]].",
    "translated_sentence": "彼は私達みんなが尊敬している人物です。"
  },
  {
    "entry": "scene",
    "meaning_ja": "(ある行為・事件の起こる)現場,場所  / (物語・劇・映画などの)場面,舞台,背景  / (劇・映画などの)場  / (物語・劇・映画などの)挿話(そうわ),エピソード  / ながめ,光景,風景  / 《話》(人前で感情をむき出しにする)大さわぎ,醜態  / 《単数形で》活動分野,…界",
    "example_sentence": "The police arrived at the scene of the crime.",
    "translated_sentence": "警察が犯罪現場に到着しました。"
  },
  {
    "entry": "scream",
    "meaning_ja": "(恐怖・苦痛などで)〈人が〉悲鳴をあげる,金切り声を出す  / 〈鳥・気笛などが〉かん高い音を出す  / どなる,わめく,金切り声で言う  / …‘を'金切り声で言う,大声で叫ぶ",
    "example_sentence": "She screamed and fainted.",
    "translated_sentence": "彼女は金切り声を上げて、気絶した。"
  },
  {
    "entry": "shadow",
    "meaning_ja": "〈U〉陰,暗がり,物陰;《the shadows》夕やみ  / 〈C〉(輪郭のはっきりした)影,人影,影法師  / 〈U〉(絵課の)陰影,暗部  / 〈C〉幻, 幻影;幽霊,亡霊  / 〈C〉(…の)かすかな影(気配)《+of+名》  / 《おもに否定文で》《a~》ごくわずか(の…)《+of+名〈抽象名詞〉》  / 〈C〉影のようにつきまとう人,尾行者,探偵  / 〈C〉《比喩的に》(悲しみ・憂うつ・不幸などの)暗影",
    "example_sentence": "The shadow of the tree stretched across the lawn.",
    "translated_sentence": "木の陰が芝生に伸びていた。"
  },
  {
    "entry": "ski",
    "meaning_ja": "スキーで滑走する  / …‘を'スキーで滑る",
    "example_sentence": "I love to ski in the mountains.",
    "translated_sentence": "私は山でスキーするのが大好きです。"
  },
  {
    "entry": "specifically",
    "meaning_ja": "特に,具体的に",
    "example_sentence": "She specifically asked us not to discuss the surprise party in front of her sister.",
    "translated_sentence": "彼女は特に、妹の前でサプライズパーティーについて話さないようにと私たちに頼みました。"
  },
  {
    "entry": "sponsor",
    "meaning_ja": "(…の)保証人《+for+名》  / (提案などの)主唱者,発起人;支持者,後援者  / 教父,教母,(洗礼のとしの)名付け親  / (商業放送の)スポンサー,番組提供者,広告主",
    "example_sentence": "The sponsor is responsible for the payment.",
    "translated_sentence": "保証人は支払う責任があります。"
  },
  {
    "entry": "string",
    "meaning_ja": "〈C〉〈U〉ひも,糸  / 〈C〉結びひも,リボン  / 〈U〉(…の)一つなぎ,一連《+of+名》  / 〈C〉(人や物事の)一続き,一列,一連《+of+名》  / 《複数形で》《話》付帯条件,ひも  / 〈C〉(ギター・バイオリン・ピアノなどの)弦  / 《the strings》《集合的に》(特にオーケストラの)弦楽器[奏者]  / 〈C〉(能力別に分けられた運動競技者の)段階,組,級  / 〈C〉(植物の)繊維,筋  / 〈ビーズなど〉‘を'ひも(糸)に通す  / 〈楽器・ラケット・弓など〉‘に'弦を付ける  / 〈ひも・糸など〉‘を'張り渡す  / …‘を'一列に並べる,一続きに配列する《+out+名,+名+out》",
    "example_sentence": "I tied the string around the package.",
    "translated_sentence": "私はひもをパッケージの周りに結んだ。"
  },
  {
    "entry": "style",
    "meaning_ja": "〈C〉〈U〉(服装などの)流行[型],スタイル  / 〈C〉(衣服・物腰・ふん囲気などの)優雅さ,上品  / 〈C〉〈U〉(個人・集団・時代などに特有の)様式,型;文体,口調  / 〈C〉(商品などの)種類,形式  / 〈C〉称号,肩書き,呼び名  / 〈C〉鉄筆(stylus)  / 〈C〉(植物の)花柱  / 〈U〉〈C〉印刷様式,体裁  / 〈服装・家具など〉‘を'流行に合わせてデザインする(作る)  / (特定の印刷様式に合わせるため)〈原稿など〉‘に'手を加える  / 《style+名+名〈補〉》(…と)…‘を'呼ぶ,称する",
    "example_sentence": "Her style is always on trend.",
    "translated_sentence": "彼女のスタイルは常にトレンドに乗っています。"
  },
  {
    "entry": "sheet",
    "meaning_ja": "〈C〉敷布, シーツ / 《 紙など薄いものの》1枚 《of ...》/ (火・水などの) 一面の広がり",
    "example_sentence": "I need to change the bed sheet.",
    "translated_sentence": "ベッドシーツを変える必要があります。"
  },
  {
    "entry": "everyone",
    "meaning_ja": "【かたく】みんな；誰でも",
    "example_sentence": "Everyone should do their best.",
    "translated_sentence": "皆が自分のベストを尽くすべきだ。"
  },
  {
    "entry": "independence",
    "meaning_ja": "(…からの)独立,自立,独立心《+of(from)+名》",
    "example_sentence": "The country fought for its independence from colonial rule.",
    "translated_sentence": "その国は植民地支配からの独立を求めて戦った。"
  },
  {
    "entry": "switch",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "ticket",
    "meaning_ja": "切符,乗車券;入道券;(宝くじなどの)券,礼  / 正礼,値札,(品質・サイズなどの)表示札  / 《米》(政党の)公認候補者名簿  / 《話》交通違反者の呼び出し状  / 《the~》《 話》必要なもの  / 《the ~》《古・話》正しいこと,適なこと",
    "example_sentence": "I bought a ticket for the train.",
    "translated_sentence": "私は電車の切符を買った。"
  },
  {
    "entry": "tone",
    "meaning_ja": "〈C〉(高さ・音色・長さ・音量の点から見た)音  / 〈C〉〈U〉音質  / 〈C〉楽音;全音程  / 〈C〉《しばしば複数形で》言い方,書き方,口調,語調  / 〈C〉支配的な(一般的な)風潮(傾向)  / 〈U〉(筋肉などの緊張の)正常な状態  / 〈C〉色調,色合い,濃淡,明暗  / (音・色などで)…‘に'ある調子(口調,色合い)をつける  / …‘の'色を変える,色を補正する",
    "example_sentence": "She adjusted the tone of her voice to sound more confident.",
    "translated_sentence": "彼女は自信を持ったように聞こえるように声のトーンを調整しました。"
  },
  {
    "entry": "tour",
    "meaning_ja": "旅行 / 巡業 / 見学,視察",
    "example_sentence": "I went on a tour of Europe last summer.",
    "translated_sentence": "去年の夏、ヨーロッパの旅行に行きました。"
  },
  {
    "entry": "trade",
    "meaning_ja": "商業 / 貿易 / 〜業界",
    "example_sentence": "The global trade has been affected by the pandemic.",
    "translated_sentence": "世界の貿易はパンデミックによって影響を受けています。"
  },
  {
    "entry": "upper",
    "meaning_ja": "(場所・位置が)上のほうの,上部の  / 上級の,上位の  / 奥地の,上流の",
    "example_sentence": "The upper floor of the building offers a stunning view of the city.",
    "translated_sentence": "建物の上階からは、市内の素晴らしい景色が見えます。"
  },
  {
    "entry": "vegetable",
    "meaning_ja": "〈C〉《複数形で》野菜,青物;野菜の食用になる部分  /〈U〉植物  / 〈C〉植物人間(脳の機能が冒され,呼吸・消化・排出機能などだけが健全に人間)  / 植物の,植物性の  / 野菜の  / 植物のような,単調な,活気のない",
    "example_sentence": "I love eating fresh vegetables.",
    "translated_sentence": "新鮮な野菜を食べるのが大好きです。"
  },
  {
    "entry": "victim",
    "meaning_ja": "(…の)犠牲者,被害者(物)《+of+名》  / だまされる人;(…の)食いもの,えじき《+of+名》  / (神にささげる)いけにえ",
    "example_sentence": "The victim of the crime was a young woman.",
    "translated_sentence": "犯罪の犠牲者は若い女性でした。"
  },
  {
    "entry": "village",
    "meaning_ja": "〈C〉村,村落  / 《the~》《集合的に;複数扱い》村の人々,村民",
    "example_sentence": "The village is located in a beautiful valley.",
    "translated_sentence": "その村は美しい谷に位置しています。"
  },
  {
    "entry": "violent",
    "meaning_ja": "暴力による,乱暴な  / 激しい,猛烈な,すさまじい",
    "example_sentence": "The violent storm caused widespread damage.",
    "translated_sentence": "暴風雨が広範囲の被害を引き起こしました。"
  },
  {
    "entry": "vote",
    "meaning_ja": "〈C〉票 / 投票 / 《...に関する》(投票・挙手などによる）決定《on, about ...》 / 投票権",
    "example_sentence": "We all have an equal right to vote.",
    "translated_sentence": "私たちは皆、投票するという平等な権利を持っている。"
  },
  {
    "entry": "penalty",
    "meaning_ja": "〈C〉罰、罰金、報い",
    "example_sentence": "The referee awarded a penalty to the opposing team.",
    "translated_sentence": "審判は相手チームにペナルティを与えた。"
  },
  {
    "entry": "democracy",
    "meaning_ja": "〈U〉民主政治,民主主義,民主政体,民主社会  / 〈C〉民主主義国,民主国",
    "example_sentence": "Democracy is a system of government in which power is vested in the people.",
    "translated_sentence": "民主主義は、権力が人民に委ねられた政治体制です。"
  },
  {
    "entry": "permanent",
    "meaning_ja": "永久の, 不変の / 常設の,常置の",
    "example_sentence": "She has a permanent job at the company.",
    "translated_sentence": "彼女はその会社で正社員として働いている。"
  },
  {
    "entry": "encounter",
    "meaning_ja": "(偶然の,特に敵意を含んだ)(…との)思いがけない出会い,遭遇《+with+名》  / 遭遇戦",
    "example_sentence": "I had a chance encounter with my old friend at the grocery store.",
    "translated_sentence": "スーパーマーケットで偶然に昔の友人に出会った。"
  },
  {
    "entry": "paragraph",
    "meaning_ja": "(文章の一つの)区切り,節,項,段落  / (新聞などの)小記事,小論説  / 段落記号",
    "example_sentence": "The essay was composed of several paragraphs.",
    "translated_sentence": "エッセイはいくつかの段落で構成されていた。"
  },
  {
    "entry": "passage",
    "meaning_ja": "〈C〉 節,句 / 通路〈U〉通過すること / 通行の許可",
    "example_sentence": "I read a passage from the book.",
    "translated_sentence": "私は本から一節を読みました。"
  },
  {
    "entry": "abandon",
    "meaning_ja": "を捨て去る / を断念する",
    "example_sentence": "The crew abandoned the ship.",
    "translated_sentence": "乗組員は船を放棄した。"
  },
  {
    "entry": "dialog",
    "meaning_ja": "〈U〉対話 / 〈C〉対話体の作品",
    "example_sentence": "Can we have a dialog about this issue?",
    "translated_sentence": "この問題について対話できますか？"
  },
  {
    "entry": "phase",
    "meaning_ja": "段階,局面,様相",
    "example_sentence": "This project is in the final phase.",
    "translated_sentence": "このプロジェクトは最終段階にあります。"
  },
  {
    "entry": "wing",
    "meaning_ja": "(鳥の)翼,(昆虫の)羽  / (飛行機・風車などの)翼,羽  / (建物の)翼(よく),そで  / (政党などの)分派,…翼  / 《複数形で》(舞台の)そで,たもと(観客から見えない部分)  / (サッカーなどの)ウィング,ウィングの選手  / (部隊・艦隊の左右の)翼,側面部隊;(空軍の)飛行大隊  / 《複数形で》パイロット記章  / 《英》=fender 1",
    "example_sentence": "The bird spread its wings and flew away.",
    "translated_sentence": "鳥は翼を広げて飛び立った。"
  },
  {
    "entry": "wire",
    "meaning_ja": "〈U〉〈C〉針金,金属線  / 〈C〉電線,ケーブル;金網  / 《おもに米》〈U〉〈C〉電報(telegram)",
    "example_sentence": "I need to buy some wire for my project.",
    "translated_sentence": "私はプロジェクトのために針金を買う必要があります。"
  },
  {
    "entry": "inflation",
    "meaning_ja": "インフレーション,インフレ,通貨膨張;物価の暴騰  / ふくらますこと,誇張  / ふくらんだ状態",
    "example_sentence": "The inflation rate in the country has been steadily increasing.",
    "translated_sentence": "その国のインフレ率は着実に上昇しています。"
  },
  {
    "entry": "persuade",
    "meaning_ja": "〈他〉〈人〉を説得する / 〈人〉に信じさせる",
    "example_sentence": "I tried to persuade my friend to go on a trip with me.",
    "translated_sentence": "私は一緒に旅行に行こうと友達を説得しようとしました。"
  },
  {
    "entry": "scholar",
    "meaning_ja": "（人文系の）学者",
    "example_sentence": "The scholar presented his research findings at the conference.",
    "translated_sentence": "学者は学会で自身の研究結果を発表しました。"
  },
  {
    "entry": "provision",
    "meaning_ja": "供給、支給、準備、用意、備え",
    "example_sentence": "The company policy allows for the provision of medical benefits to all its employees.",
    "translated_sentence": "会社の方針では、全ての従業員に医療給付の支給が許可されています。"
  },
  {
    "entry": "platform",
    "meaning_ja": "台,壇　(話者や演技者などが立つ)演壇,演台,舞台　(特に政党の)政策,綱領",
    "example_sentence": "The platform of the political party includes various policies to address the needs of the people.",
    "translated_sentence": "政党の政策には、人々のニーズに対応するためのさまざまな政策が含まれています。"
  },
  {
    "entry": "profit",
    "meaning_ja": "〈U〉〈C〉利益,もうけ,収益  / 〈U〉得(益)になること",
    "example_sentence": "The company made a huge profit last year.",
    "translated_sentence": "会社は昨年、大きな利益を上げました。"
  },
  {
    "entry": "source",
    "meaning_ja": "〈C〉源 / 水源",
    "example_sentence": "The river is the source of life.",
    "translated_sentence": "川は生命の源です。"
  },
  {
    "entry": "psychological",
    "meaning_ja": "《名詞の前にのみ用いて》心理学の,心理学的な  / 精神的な,心理的な",
    "example_sentence": "She is studying psychological theories.",
    "translated_sentence": "彼女は心理学の理論を勉強しています。"
  },
  {
    "entry": "radical",
    "meaning_ja": "急進的な / 根本的な",
    "example_sentence": "She has a radical approach to solving problems.",
    "translated_sentence": "彼女は問題解決に対して根本的なアプローチを持っています。"
  },
  {
    "entry": "reject",
    "meaning_ja": "〈他〉断る / 不採用[不合格]にする /捨てる /受け入れない",
    "example_sentence": "I will reject your proposal.",
    "translated_sentence": "私はあなたの提案を拒否します。"
  },
  {
    "entry": "stain",
    "meaning_ja": "〈他〉《...で》を汚す, にしみをつける / 〈ガラス・木材・布など〉に着色する",
    "example_sentence": "This fabric stains easily.",
    "translated_sentence": "この生地はしみになりやすい。"
  },
  {
    "entry": "slice",
    "meaning_ja": "(…の)(薄く切った平らな)一枚,一切れ《+of+名》・(…の)分け前(share),一部(part)《+of+名》・スライス(野球・ゴルフなどで,打球が打者のきき手の方向に飛ぶこと,またその打球) ・料理用へら,フライ返し  /",
    "example_sentence": "I would like a slice of pizza, please.",
    "translated_sentence": "ピザを一切れください。"
  },
  {
    "entry": "occupy",
    "meaning_ja": "〈他〉〈場所・空間〉を占める",
    "example_sentence": "The protesters occupy the city square.",
    "translated_sentence": "抗議者たちは市の広場を占拠している。"
  },
  {
    "entry": "peer",
    "meaning_ja": "〈自〉《…を》じっと見つめる《at,into,through ...》；見えてくる,一部見える《out》",
    "example_sentence": "He peered at the small print in a newspaper.",
    "translated_sentence": "彼は新聞の小さな活字をじっとみた。"
  },
  {
    "entry": "potential",
    "meaning_ja": "可能性のある, 潜在的な",
    "example_sentence": "He is a potential leader.",
    "translated_sentence": "彼は将来指導者になる可能性がある。"
  },
  {
    "entry": "on",
    "meaning_ja": "《位置・場所》…の上に,の上で,の上の(《文》[[upon]]) / 《運動・動作の方向・対象》…に向かって / 《特定の日時》…に / 《状態》…して,…中で,…すると / …について,…に関して / 《目的》…で",
    "example_sentence": "The book is on the table.",
    "translated_sentence": "本はテーブルの上にあります。"
  },
  {
    "entry": "stake",
    "meaning_ja": "(境界標・植物の支えなどの)くい  / 火刑用の柱;《the~》火刑,火あぶり  / 《しばしば複数形で》(競馬・ゲーム・かけ事などの)かけ金,賞金;(賞金のかかった)レース,(特に)競馬  / (…に対する)(金銭的・感情的な)利害関系《+in+名(doing)》",
    "example_sentence": "She used a stake to support the tomato plant.",
    "translated_sentence": "彼女はトマトの植物を支えるためにくいを使いました。"
  },
  {
    "entry": "vital",
    "meaning_ja": "生命の / 生き生きとした / 極めて重大な / 命に関わる",
    "example_sentence": "Regular exercise is vital for maintaining good health.",
    "translated_sentence": "定期的な運動は健康を維持するために不可欠です。"
  },
  {
    "entry": "submit",
    "meaning_ja": "〈自〉を提出する / 〈自〉屈服する",
    "example_sentence": "Please submit your application by the end of the week.",
    "translated_sentence": "週の終わりまでに申請書を提出してください。"
  },
  {
    "entry": "volume",
    "meaning_ja": "〈C〉(特に分厚い)本,書物  / 〈C〉(シリーズものの)巻,冊(《略》(単数形で)vol.,(複数形で)vols.)  / 〈U〉(…の)体積,容積《+of+名》  / 〈U〉〈C〉)…の)量,かさ《+of+名》  / 〈U〉(…の)音量,音の強さ,ボリューム《+of+名》  / 《複数形で》多量(の…),たくさん(の…)《+of+名》",
    "example_sentence": "I bought a volume of poetry.",
    "translated_sentence": "私は詩集の一冊を買いました。"
  },
  {
    "entry": "whisper",
    "meaning_ja": "ささやく,ひそひそ話す《+about+名》  / 〈風・流れ・木の葉などが〉サラサラ音を立てる  / …‘を'ささやく,ひそひそと言う  / 《しばしば受動態で》〈秘密など〉‘を'言いふらす《+about+名》",
    "example_sentence": "She leaned in close to whisper in his ear.",
    "translated_sentence": "彼女は彼の耳元でささやくために近づいた。"
  },
  {
    "entry": "board",
    "meaning_ja": "…‘に'板を張る,'を'板で囲う《+up(over)+名,+名+up(over)》  / …‘に'食事を出す,'を'まかない付で下宿させる  / …‘に'乗り込む  / (…に)まかない付きで下宿する,食事つきで滞在する《+at+名〈場所〉,+with+名〈人〉》",
    "example_sentence": "We boarded the ship.",
    "translated_sentence": "私達は乗船した。"
  },
  {
    "entry": "assess",
    "meaning_ja": "を評価する, を査定する / 《…に》(税金・料金など)を課する,割り当てる《on ...》",
    "example_sentence": "The teacher will assess the students' performance in the final exam.",
    "translated_sentence": "先生は最終試験での生徒たちのパフォーマンスを評価するでしょう。"
  },
  {
    "entry": "cooperation",
    "meaning_ja": "〈U〉《...との》 協力, 協同 《with ...》",
    "example_sentence": "Cooperation is essential for success.",
    "translated_sentence": "成功するためには協力が不可欠です。"
  },
  {
    "entry": "gradually",
    "meaning_ja": "徐々に, だんだんに",
    "example_sentence": "She gradually became more comfortable speaking in public.",
    "translated_sentence": "彼女は徐々に公の場で話すのが楽になりました。"
  },
  {
    "entry": "briefly",
    "meaning_ja": "手短に,簡単に, 簡潔に",
    "example_sentence": "He briefly explained the situation.",
    "translated_sentence": "彼は状況を簡単に説明しました。"
  },
  {
    "entry": "distinct",
    "meaning_ja": "別の,別個の / 明瞭な, はっきりした / 独特な / 目立つ",
    "example_sentence": "She has a distinct personality.",
    "translated_sentence": "彼女には明確な個性がある。"
  },
  {
    "entry": "extremely",
    "meaning_ja": "極めて, 極端に,非常に過度に",
    "example_sentence": "She is extremely intelligent.",
    "translated_sentence": "彼女は非常に賢いです。"
  },
  {
    "entry": "distant",
    "meaning_ja": "(距離が) 遠い / (時間的に) 離れた",
    "example_sentence": "The mountain peak is visible in the distant horizon.",
    "translated_sentence": "遠い地平線に山の頂が見える。"
  },
  {
    "entry": "patient",
    "meaning_ja": "辛抱強い",
    "example_sentence": "He was patient.",
    "translated_sentence": "彼は辛抱強かった。"
  },
  {
    "entry": "collapse",
    "meaning_ja": "〈U〉(建造物などの) 崩壊／崩壊させる／崩壊する",
    "example_sentence": "The house was on the verge of collapse.",
    "translated_sentence": "その家は倒れかかっていた。"
  },
  {
    "entry": "consequently",
    "meaning_ja": "その結果として, 結果としては（通例悪い意味が続く） / 従って",
    "example_sentence": "He didn't study for the exam; consequently, he failed.",
    "translated_sentence": "彼は試験の勉強をしなかった。その結果として、彼は失敗した。"
  },
  {
    "entry": "difference",
    "meaning_ja": "〈U〉 《…の間の / …における / …との》 違い, 相違点 《between ... / in ... / from ...》 /  差, 差額 / 〈C〉 意見などの食い違い, 意見の不一致",
    "example_sentence": "The difference between these two cars is the price.",
    "translated_sentence": "この２台の車の違いは値段だ。"
  },
  {
    "entry": "imply",
    "meaning_ja": "…をほのめかす,を暗に示す / …の意味を含む,…[の存在]を当然の前提とする",
    "example_sentence": "Her words imply that she knows more than she is letting on.",
    "translated_sentence": "彼女の言葉には、彼女が口にしている以上のことを知っていることが暗示されている。"
  },
  {
    "entry": "lot",
    "meaning_ja": "（同種のものの）一群;たくさんのもの・人；くじ",
    "example_sentence": "I've got lots of homework to do.",
    "translated_sentence": "私はたくさんの宿題をやらなければなりません。"
  },
  {
    "entry": "enjoy",
    "meaning_ja": "‘を'楽しむ  / ‘に'恵まれている,‘を'享受する",
    "example_sentence": "I enjoy playing tennis.",
    "translated_sentence": "テニスをするのが楽しいです。"
  },
  {
    "entry": "possess",
    "meaning_ja": "〈他〉(財産として) ...を所有する / (性質・特性として)…を備えている / (悪霊・悪い考えなどが)(人)にとりつく",
    "example_sentence": "I possess a lot of books in my library.",
    "translated_sentence": "私は自分の書斎にたくさんの本を所有しています。"
  },
  {
    "entry": "fairly",
    "meaning_ja": "公平に, 公正に / かなり, 相当に / 全く, すっかり, まさしく",
    "example_sentence": "She played fairly in the game.",
    "translated_sentence": "彼女はゲームで公平にプレイしました。"
  },
  {
    "entry": "faithfully",
    "meaning_ja": "忠実に,誠実に,正確に",
    "example_sentence": "She faithfully followed her mentor's advice.",
    "translated_sentence": "彼女は忠実に師のアドバイスに従った。"
  },
  {
    "entry": "highlight",
    "meaning_ja": "〈C〉(絵画・写真などの)最も明るい部分 / (事件・勝負・ニュースなどの)最も目立つ部分 見所",
    "example_sentence": "Highlights of the match will be shown after the news.",
    "translated_sentence": "試合のハイライトはニュースの後に放映される。"
  },
  {
    "entry": "ordinary",
    "meaning_ja": "いつもの / 普通の, 平凡な",
    "example_sentence": "She lived an ordinary life.",
    "translated_sentence": "彼女は普通の生活を送っていた。"
  },
  {
    "entry": "perhaps",
    "meaning_ja": "ひょっとしたら, ことによると, おそらく / たぶん",
    "example_sentence": "Perhaps it will rain tomorrow.",
    "translated_sentence": "明日はひょっとしたら雨が降るかもしれません。"
  },
  {
    "entry": "affair",
    "meaning_ja": "〈C〉(個人的に関心・関係のある)事, 事柄 / 事件, 出来事 / 《複数形で》仕事,業務",
    "example_sentence": "The affair of the missing necklace became the talk of the town.",
    "translated_sentence": "行方不明のネックレスの件は町の話題になった。"
  },
  {
    "entry": "amendment",
    "meaning_ja": "〈U/C〉修正,改正 / 改心 / 〈C〉修正案",
    "example_sentence": "The new amendment to the constitution granted citizens additional rights and protections.",
    "translated_sentence": "新たな憲法改正により、国民にさらなる権利と保護が与えられました。"
  },
  {
    "entry": "complain",
    "meaning_ja": "不平を言う, 泣き言を言う, 訴える",
    "example_sentence": "I complain about the service at this restaurant.",
    "translated_sentence": "私はこのレストランのサービスについて文句を言います。"
  },
  {
    "entry": "dependent",
    "meaning_ja": "頼っている,依存している,従属している",
    "example_sentence": "We are dependent on each other.",
    "translated_sentence": "私達は互いに依存しあっている。"
  },
  {
    "entry": "electricity",
    "meaning_ja": "〈U〉電気, 電流 / 電気学 / 極度の緊張(興奮)",
    "example_sentence": "The city experienced a sudden loss of electricity [[due to]] the storm.",
    "translated_sentence": "その都市は嵐のため突然停電に見舞われた。"
  },
  {
    "entry": "extension",
    "meaning_ja": "〈U〉〈C〉《...を》拡大(延長)すること, 拡大(延長)されること《of》 / 〈C〉拡大(延長)された部分 / （電話の）内線",
    "example_sentence": "I need to file for an extension on my taxes.",
    "translated_sentence": "私は税金の延長を申請する必要があります。"
  },
  {
    "entry": "camp",
    "meaning_ja": "〈Ｃ〉(軍隊・登山隊・探検隊などの) 野営地 / 〈Ｃ〉〈U〉野営のテント / 〈U〉野営,キャンプ",
    "example_sentence": "The children went to the camp for the summer holidays.",
    "translated_sentence": "子どもたちは夏休みにキャンプに行った。"
  },
  {
    "entry": "fair",
    "meaning_ja": "公平な, 公正な / (天気が)晴れた / 《古》(特に女性が) 美しい / 相当な,かなりの",
    "example_sentence": "The weather today is fair.",
    "translated_sentence": "今日の天気は良いです。"
  },
  {
    "entry": "count",
    "meaning_ja": "〈C〉〈U〉数えること, 計算",
    "example_sentence": "Start running at the count of three.",
    "translated_sentence": "三つ数えたら、走り出しなさい。"
  },
  {
    "entry": "die",
    "meaning_ja": "〈自〉（人・動物が）死ぬ, （植物が）枯れる / （音・光・風などが）消えてゆく / 《話》《進行形で》死ぬほど望む",
    "example_sentence": "He will die if he doesn't receive medical treatment.",
    "translated_sentence": "彼は医療処置を受けなければ死ぬだろう。"
  },
  {
    "entry": "egg",
    "meaning_ja": "〈C〉卵 / 鳥の卵 / 《英話》《形容詞を伴って》(…な)やつ / 《俗》爆弾,手投げ弾",
    "example_sentence": "I found an egg in the backyard.",
    "translated_sentence": "私は裏庭で卵を見つけた。"
  },
  {
    "entry": "furthermore",
    "meaning_ja": "なお, さらに, そのうえに",
    "example_sentence": "Furthermore, I would like to thank everyone for their support.",
    "translated_sentence": "なお、皆様のご支援に感謝申し上げます。"
  },
  {
    "entry": "atmosphere",
    "meaning_ja": "〈C〉《the ~》(地球を取り巻く)大気 / (特定の場所の) 空気 / 雰囲気, 環境, 周囲の状況",
    "example_sentence": "The atmosphere in the room was tense.",
    "translated_sentence": "部屋の雰囲気は緊張していた。"
  },
  {
    "entry": "fair",
    "meaning_ja": "〈C〉《米》(農産物・家畜などの) 品評会 / (一般に) 博覧会  /  《英》定期市,縁日 / 慈善市",
    "example_sentence": "The city is hosting the fair.",
    "translated_sentence": "その都市はフェアを開催している。"
  },
  {
    "entry": "fast",
    "meaning_ja": "速い,急速な,すばやい,敏速な / (時計が)進んでいる / しっかりした,ぐらつかない / 心の変わらない,忠実な([[faithful]]) / (色が)あせない / 《古》(女性が)身持ちの悪い;《まれに》(生活が)享楽的な / (フイルムが)高感度の,(レンズが)高速撮影用の",
    "example_sentence": "He is a fast runner.",
    "translated_sentence": "彼は速いランナーです。"
  },
  {
    "entry": "glad",
    "meaning_ja": "うれしい / 《be ~ to do》喜んで...する, 進んで...する /  (物事・表情・声などが) 喜ばしい,うれしそうな",
    "example_sentence": "I was glad to see him again.",
    "translated_sentence": "彼と再び会えてうれしかった。"
  },
  {
    "entry": "contribution",
    "meaning_ja": "〈C〉寄付,寄与,貢献",
    "example_sentence": "Her contribution to the project was invaluable.",
    "translated_sentence": "彼女のプロジェクトへの貢献は非常に貴重でした。"
  },
  {
    "entry": "keen",
    "meaning_ja": "(刃物などが)鋭い /  (寒さなどが)厳しい / (痛みなどが)激しい / (感覚・判断力などが)鋭敏な / 《be ~ to do》  〈人が〉…したいと切望して / 《be ~ on, about ...》...が大好きで, ...に熱中して",
    "example_sentence": "She has a keen sense of observation.",
    "translated_sentence": "彼女は鋭い観察力を持っています。"
  },
  {
    "entry": "lie",
    "meaning_ja": "〈C〉うそ,偽り / 〈C〉《the ~》 (置かれている)位置",
    "example_sentence": "She told a lie to her parents.",
    "translated_sentence": "彼女は両親に嘘をついた。"
  },
  {
    "entry": "miss",
    "meaning_ja": "〈他〉〈ボールなど〉を打ち損なう, 〈的など〉を外す / 〈人〉に会い損なう / 〈列車・船など〉を捕まえ損なう / ...を見落とす /  〈物事〉を逃す / …がない(いない)のを残念に思う / 〈自〉的を外れる / 《...で》失敗する《in ...》",
    "example_sentence": "I miss my family so much.",
    "translated_sentence": "私は家族がとても恋しいです。"
  },
  {
    "entry": "lock",
    "meaning_ja": "〈戸など〉に錠をおろす / (錠をかけたように)〈指・腕など〉を締めつける /  拘束する / 錠がかかる /  かみ合う,かみ合って動かなくなる",
    "example_sentence": "I always lock the door before leaving the house.",
    "translated_sentence": "私は家を出る前にいつもドアを施錠します。"
  },
  {
    "entry": "see",
    "meaning_ja": "が見える, を見る / 名所など〉を見物する / を理解する / 見える / 理解する",
    "example_sentence": "I saw the movie last night.",
    "translated_sentence": "昨晩、私はその映画を見た。"
  },
  {
    "entry": "second",
    "meaning_ja": "《通例the~》第2の,2番目の, 二度目の《略》[[2nd]],[[sec.]]) / 《A ~ +名で》もう一つの,別の / 一級(最上)のものに次ぐ,二流の / (自動車の変速機の)第2速の / 低音(声)部の,第2の",
    "example_sentence": "This is my second car.",
    "translated_sentence": "これは私の2台目の車です。"
  },
  {
    "entry": "owe",
    "meaning_ja": "〈他〉を借りている / のおかげをこうむっている / を与える義務がある / 〈自〉《...に対して》 借りがある 《for ...》",
    "example_sentence": "I owe my friend $50.",
    "translated_sentence": "私は友達に50ドル借りています。"
  },
  {
    "entry": "cow",
    "meaning_ja": "〈C〉雌牛, 乳牛 / (鯨・象・サイなどの)雌",
    "example_sentence": "The farmer bought a cow.",
    "translated_sentence": "農夫は牛を買った。"
  },
  {
    "entry": "criterion",
    "meaning_ja": "【名/C】(価値判断の)規準,尺度",
    "example_sentence": "The main criterion for success is hard work.",
    "translated_sentence": "成功の主な基準は努力です。"
  },
  {
    "entry": "desert",
    "meaning_ja": "〈C〉砂ばく, 荒れ地 /",
    "example_sentence": "I visited the desert during my vacation.",
    "translated_sentence": "私は休暇中に砂漠を訪れました。"
  },
  {
    "entry": "diet",
    "meaning_ja": "(日常の)食事, 常食 / (健康・体重調節などのための)規定食 / 〈人〉に規定食を取らせる / 日本などの国会、議会",
    "example_sentence": "I am on a strict diet to lose weight.",
    "translated_sentence": "私は体重を減らすために厳しいダイエットをしています。"
  },
  {
    "entry": "jacket",
    "meaning_ja": "〈C〉上着, (特殊な目的で上半身をおおう)胴着 / 《米》(レコードの)ジャケット, (本の)カバー  / (パイプ・ボイラーなどの)被覆物 / (じゃがいもなどの)皮",
    "example_sentence": "I bought a new jacket at the store.",
    "translated_sentence": "私は店で新しいジャケットを買った。"
  },
  {
    "entry": "band",
    "meaning_ja": "〈C〉帯, バンド, ひも / (色の)すじ,しま  / 周波数",
    "example_sentence": "She used a rubber band to tie her hair into a ponytail.",
    "translated_sentence": "彼女は髪を結ぶために、ゴム製のヘアバンドを使ってポニーテールを作った。"
  },
  {
    "entry": "novel",
    "meaning_ja": "【形】新奇な, ざん新な",
    "example_sentence": "She always comes up with novel ideas.",
    "translated_sentence": "彼女はいつも新奇なアイデアを思いつく。"
  },
  {
    "entry": "blow",
    "meaning_ja": "〈C〉(手・こぶし・武器などによる) 強打,打撃 / 《…への》(精神的な) 打撃,不幸《to ...》 / 一吹き, 《話》さっと吹く風",
    "example_sentence": "The wind blew the leaves off the trees.",
    "translated_sentence": "風が木々から葉を吹き落とした。"
  },
  {
    "entry": "pound",
    "meaning_ja": "〈C〉ポンド（重量の単位; 16オンス） / ポンド（英国・アイルランドなどの貨幣の単位, 100ペンス） / トロイポンド(金・銀の重量単位;12オンス)",
    "example_sentence": "He lifted the heavy weight with one hand.",
    "translated_sentence": "彼は片手で重い重さを持ち上げた。"
  },
  {
    "entry": "can",
    "meaning_ja": "〈C〉缶 / 《米》缶詰",
    "example_sentence": "I can swim.",
    "translated_sentence": "私は泳ぐことができます。"
  },
  {
    "entry": "leave",
    "meaning_ja": "〈U〉許可,許し / (官庁・学校などで正式に許可される) 休暇,暇 / 〈C〉休暇の期間 / 〈U〉別れ,いとまごい",
    "example_sentence": "I will be taking a leave of absence next week.",
    "translated_sentence": "来週、私は休暇を取ります。"
  },
  {
    "entry": "line",
    "meaning_ja": "〈他〉(材料で)〈着物など〉に裏を付ける, に裏打ちする《with ...》 / 《…で》…を満たす, 《…を》…に詰め込む《with ...》",
    "example_sentence": "I lined my coat with a soft, fuzzy material to keep me warm.",
    "translated_sentence": "コートの裏地には、モコモコとした柔らかい素材を使い、暖かく過ごせるようにしました。"
  },
  {
    "entry": "rest",
    "meaning_ja": "《…の》残り, 残与《of ...》 / 〈U〉《the 》《複数扱い》そのほかの物(人)",
    "example_sentence": "I will take care of the rest of the work.",
    "translated_sentence": "残りの仕事は私がやります。"
  },
  {
    "entry": "rock",
    "meaning_ja": "〈U〉〈C〉岩,岩石 / 岩壁 / 〈C〉岩片 / 《米話》石, 小石 / 岩のように強固(堅固)なもの",
    "example_sentence": "I love listening to rock music.",
    "translated_sentence": "私はロック音楽を聴くのが好きです。"
  },
  {
    "entry": "specific",
    "meaning_ja": "特定の / 明確な / 《...に》特有の, 独特の《to ...》",
    "example_sentence": "I need specific instructions on how to assemble the furniture.",
    "translated_sentence": "家具の組み立て方について具体的な指示が必要です。"
  },
  {
    "entry": "firm",
    "meaning_ja": "〈C〉商会  / (一般に)会社,事務所 / (商社名としての)…商会 / 《英》通信販売店",
    "example_sentence": "He works for a prestigious law firm.",
    "translated_sentence": "彼は一流の法律事務所で働いています。"
  },
  {
    "entry": "wind",
    "meaning_ja": "〈C〉〈U〉《しばしば the ~》風 / 強風 / 〈U〉息,呼吸, 肺活量",
    "example_sentence": "The wind was blowing strongly.",
    "translated_sentence": "風が強く吹いていた。"
  },
  {
    "entry": "meter",
    "meaning_ja": "【名/C】(ガス・水・電気などの) 計器, メーター / (時間・速度・距離・強度などを測定,記録する) メーター,計器 / 【動/他】〈ガス･電気などの使用量〉をメーターで計る",
    "example_sentence": "The length of the swimming pool is 25 meters.",
    "translated_sentence": "プールの長さは25メートルです。"
  },
  {
    "entry": "meter",
    "meaning_ja": "〈C〉メートル (メートル法で長さの基本単位, 《略》m）",
    "example_sentence": "The length of the swimming pool is 25 meters.",
    "translated_sentence": "プールの長さは25メートルです。"
  },
  {
    "entry": "mount",
    "meaning_ja": "〈C〉《文》 山  / 《『M-』》《固有名詞の前に付けて》… 山",
    "example_sentence": "They made first ascent of Mount Everest.",
    "translated_sentence": "彼らはエベレストに初登頂した。"
  },
  {
    "entry": "pool",
    "meaning_ja": "【名/C】(ある種のゲームの)総賭け金 / 企業連合,カルテル / 《…の》合同資金, 共同管理(出資)《of ...》 / 共同利用の施設 / 【動/他】を一緒にする / を共同出資する",
    "example_sentence": "In the final round of the game, the pool was incredibly high.",
    "translated_sentence": "ゲームの最終ラウンドでは、プール（総賭け金）が信じられないほど高かった。"
  },
  {
    "entry": "row",
    "meaning_ja": "〈C〉《親しい者との》激しい口論《with ...》，《…に関する》言い争い, 口げんか（[[quarrel]]）《about, over ...》 / 厳しい叱責",
    "example_sentence": "They had a heated row about their future plans.",
    "translated_sentence": "彼らは将来の計画について激しい口論をしました。"
  },
  {
    "entry": "stroke",
    "meaning_ja": "〈他〉(髪・動物など)をなでる,さする / (人)をなだめる《down》",
    "example_sentence": "I gently stroked my cat.",
    "translated_sentence": "私は猫を優しく撫でた。"
  },
  {
    "entry": "tap",
    "meaning_ja": "...に飲み口をつける / 〈たるなどの中の液体〉を出す / 〈幹〉に刻み目をつけ樹液を採る / 〈電話など〉を秘密に接続する,〈人・通話〉を盗聴する / 〈鉱山・土地など〉を開発する",
    "example_sentence": "I need to tap the keg for the party.",
    "translated_sentence": "パーティーのために樽を開ける必要があります。"
  },
  {
    "entry": "net",
    "meaning_ja": "正味の, 掛け値のない / 結局の, 最終的な",
    "example_sentence": "Net profit for the period is estimated at 5 billion yen, largely unchanged from the previous one.",
    "translated_sentence": "当期純利益は５０億円の見込みで、前期とほとんど変わりません。"
  },
  {
    "entry": "spell",
    "meaning_ja": "〈C〉しばらくの間,一時 / (ある天気の) ひと続き  / (病気などの) ひとしきり ,発作 / ひと仕事,(仕事の)交替",
    "example_sentence": "I had a short spell in the hospital.",
    "translated_sentence": "少しの間、入院していました。"
  },
  {
    "entry": "exact",
    "meaning_ja": "(数量など) 正確な / (人が)厳密な",
    "example_sentence": "He gave the exact number of participants.",
    "translated_sentence": "彼は参加者の正確な人数を伝えた。"
  },
  {
    "entry": "power",
    "meaning_ja": "〈U〉力, 能力 / 《...に対する》権力, 支配権 《over ...》 / 〈C〉権力者, 実力者 /",
    "example_sentence": "She has the power to change the world.",
    "translated_sentence": "彼女は世界を変える力を持っています。"
  },
  {
    "entry": "reasonably",
    "meaning_ja": "適度に / 合理的に,妥当に / もっともだ",
    "example_sentence": "She reasonably asked for a raise after working hard for a year.",
    "translated_sentence": "1年間頑張った後、彼女は妥当な昇給を求めた。"
  },
  {
    "entry": "comfortable",
    "meaning_ja": "気持ちのよい, 快適な / (人・状況などが) 安らぎを与える / 《話》(収入などが)十分な",
    "example_sentence": "This bed is very comfortable.",
    "translated_sentence": "このベッドはとても快適です。"
  },
  {
    "entry": "dealer",
    "meaning_ja": "〈C〉商人 / 《...の》業者《in ...》 / (カードゲームの)札の配り手,親",
    "example_sentence": "The car dealer offered a great deal on the new model.",
    "translated_sentence": "車のディーラーは新しいモデルにお得な取引を提供しました。"
  },
  {
    "entry": "disappear",
    "meaning_ja": "〈自〉見えなくなる, 姿を消す, 消える",
    "example_sentence": "The magician made the rabbit disappear.",
    "translated_sentence": "マジシャンはウサギを消した。"
  },
  {
    "entry": "drug",
    "meaning_ja": "〈C〉薬, 薬品 / 麻薬",
    "example_sentence": "He takes a drug to manage his chronic pain.",
    "translated_sentence": "彼は慢性の痛みを管理するために薬を服用しています。"
  },
  {
    "entry": "economic",
    "meaning_ja": "経済の / 経済学の",
    "example_sentence": "The economic situation in the country is improving.",
    "translated_sentence": "国の経済状況が改善しています。"
  },
  {
    "entry": "enough",
    "meaning_ja": "十分に / すっかり",
    "example_sentence": "Is it large enough?",
    "translated_sentence": "その大きさで十分ですか。"
  },
  {
    "entry": "combine",
    "meaning_ja": "を結合する / 《...と》...を兼ね合わせる《with ...》 / 結合する",
    "example_sentence": "I like to combine different flavors when cooking.",
    "translated_sentence": "料理する時には、異なる味を組み合わせるのが好きです。"
  },
  {
    "entry": "county",
    "meaning_ja": "〈C〉《英》 州  / 《米》郡  /  《the ~》州民, 郡民",
    "example_sentence": "I live in a small county in the countryside.",
    "translated_sentence": "私は田舎の小さな郡に住んでいます。"
  },
  {
    "entry": "while",
    "meaning_ja": "...する間に(は) / 《譲歩》…であるが / 《比較・対照》(…だが)一方では",
    "example_sentence": "I like to listen to music while I study.",
    "translated_sentence": "私は勉強する間に音楽を聴くのが好きです。"
  },
  {
    "entry": "attendance",
    "meaning_ja": "〈U〉《...への》出席 《at ...》 / 《...への》出席者 《at ...》 / 《...への》付き添い, 看護 《on ...》",
    "example_sentence": "Your regular attendance at the meetings is crucial for the project's success.",
    "translated_sentence": "プロジェクトの成功のためには、あなたが会議に定期的に出席することが重要です。"
  },
  {
    "entry": "breathe",
    "meaning_ja": "【動/自】呼吸する / 【動/他】〈空気〉を呼吸する",
    "example_sentence": "I'm trying to breathe.",
    "translated_sentence": "私は息をしようとしている。"
  },
  {
    "entry": "brilliant",
    "meaning_ja": "光り輝く, 明るい / 色鮮やかな / 見事な, 優れた / 知性あふれる,才能豊かな",
    "example_sentence": "The sun was shining brilliantly in the clear blue sky.",
    "translated_sentence": "晴れた青空に太陽が輝いていました。"
  },
  {
    "entry": "cheek",
    "meaning_ja": "〈C〉頬, ほお / 〈U〉《話》生意気な言葉, 生意気",
    "example_sentence": "She blushed and her cheeks turned red.",
    "translated_sentence": "彼女は赤面して、頬が赤くなった。"
  },
  {
    "entry": "condition",
    "meaning_ja": "〈U〉状態, 健康状態 / 〈C〉(周囲の) 状況 / 《...の》条件《of ...》",
    "example_sentence": "The weather condition is perfect for a picnic.",
    "translated_sentence": "天候の状態はピクニックに最適です。"
  },
  {
    "entry": "shut",
    "meaning_ja": "〈他〉《...に対して》〈ドア・窓など〉を閉める 《on, to ...》 / 〈本・ナイフなど〉を閉じる, をたたむ",
    "example_sentence": "Please shut the door when you leave.",
    "translated_sentence": "出る時にドアを閉めてください。"
  },
  {
    "entry": "recovery",
    "meaning_ja": "〈U〉《...を》取り戻すこと《of ...》 / 〈C〉《...からの》回復《from ...》",
    "example_sentence": "He is making a good recovery after the surgery.",
    "translated_sentence": "手術後、彼は良い回復をしています。"
  },
  {
    "entry": "ruin",
    "meaning_ja": "〈U〉《...の》破滅, 崩壊 《of ...》 / 〈C〉崩壊したもの / 《複数形で》廃墟",
    "example_sentence": "The ancient ruins were discovered by archaeologists.",
    "translated_sentence": "古代の遺跡が考古学者によって発見されました。"
  },
  {
    "entry": "silence",
    "meaning_ja": "〈U〉静けさ / 沈黙",
    "example_sentence": "The silence in the library was deafening.",
    "translated_sentence": "図書館の静けさは耳をつんざくほどだった。"
  },
  {
    "entry": "northern",
    "meaning_ja": "北の",
    "example_sentence": "I love to visit the northern regions during winter.",
    "translated_sentence": "冬に北の地域を訪れるのが大好きです。"
  },
  {
    "entry": "pretend",
    "meaning_ja": "〈他〉のふりをする,に見せかける / 〈自〉見せかける,取り繕う",
    "example_sentence": "I pretend to be happy even when I'm not.",
    "translated_sentence": "私は嬉しそうに振る舞うふりをする、本当はそうではない時でも。"
  },
  {
    "entry": "profession",
    "meaning_ja": "〈C〉専門職 / (一般に)職業  /《the~》《集合的に》同業者たち / 〈U〉〈C〉《…を》公言すること《of ...》",
    "example_sentence": "What is her profession?",
    "translated_sentence": "彼女の職業は何ですか。"
  },
  {
    "entry": "promise",
    "meaning_ja": "〈C〉約束",
    "example_sentence": "They will keep their promise.",
    "translated_sentence": "彼らは約束を守るでしょう。"
  },
  {
    "entry": "relief",
    "meaning_ja": "〈U〉〈C〉《苦通・悩みなどの》軽減,除去 《from ...》 / 〈C〉《単数形で》ほっとさせるもの / 〈U〉安心  / (難民などへの)救済,救援 / 職務(任務)の交替 / 〈C〉浮き彫り",
    "example_sentence": "The news of the rescue brought relief to the trapped miners.",
    "translated_sentence": "閉じ込められた鉱夫たちに救出のニュースが安心感をもたらしました。"
  },
  {
    "entry": "requirement",
    "meaning_ja": "〈C〉必要なもの / 《...の》必要条件, 要求事項 , 資格《for ...》",
    "example_sentence": "Meeting the customer's requirement is our top priority.",
    "translated_sentence": "お客様の要求を満たすことが私たちの最優先事項です。"
  },
  {
    "entry": "retirement",
    "meaning_ja": "〈U〉《...からの》引退, 退職《from ...》",
    "example_sentence": "He is planning for his retirement.",
    "translated_sentence": "彼は退職の計画を立てています。"
  },
  {
    "entry": "narrative",
    "meaning_ja": "物語,話",
    "example_sentence": "The narrative of the movie was captivating.",
    "translated_sentence": "映画の物語は魅力的でした。"
  },
  {
    "entry": "restrict",
    "meaning_ja": "を制限する, を限定する / ...が《…するのを》制限する 《from doing》",
    "example_sentence": "They restrict access to the building after 6 PM.",
    "translated_sentence": "彼らは午後6時以降に建物へのアクセスを制限します。"
  },
  {
    "entry": "somewhere",
    "meaning_ja": "どこかに, どこかで, どこかへ / およそ,大体",
    "example_sentence": "I want to go somewhere peaceful.",
    "translated_sentence": "私はどこか静かな場所に行きたいです。"
  },
  {
    "entry": "supplement",
    "meaning_ja": "〈C〉補足 / 増補",
    "example_sentence": "I take a daily supplement to support my immune system.",
    "translated_sentence": "私は免疫システムをサポートするために毎日サプリメントを摂取しています。"
  },
  {
    "entry": "tiny",
    "meaning_ja": "とても小さい, ちっぽけな",
    "example_sentence": "I found a tiny kitten in the garden.",
    "translated_sentence": "庭でとても小さい子猫を見つけました。"
  },
  {
    "entry": "tough",
    "meaning_ja": "(物が)丈夫な / (肉などが) 堅い / (体が) 屈強な / 骨の切れる,やっかいな",
    "example_sentence": "He is a tough competitor.",
    "translated_sentence": "彼は強敵だ。"
  },
  {
    "entry": "warn",
    "meaning_ja": "〈他〉〈人〉に警告する / 〈人〉に予告する /",
    "example_sentence": "I want to warn you about the dangers of smoking.",
    "translated_sentence": "喫煙の危険性について警告したいと思います。"
  },
  {
    "entry": "whenever",
    "meaning_ja": "《時の副詞節を導いて》...するときはいつでも, ...するたびに / 《譲歩の副詞節を導いて》いつ...しようとも",
    "example_sentence": "You can call me whenever you need help.",
    "translated_sentence": NaN
  },
  {
    "entry": "critical",
    "meaning_ja": "評論の / 酷評的な / 危機の / 臨界の",
    "example_sentence": "The movie received critical acclaim from both audiences and critics.",
    "translated_sentence": "その映画は観客と評論家の両方から評価されました。"
  },
  {
    "entry": "exception",
    "meaning_ja": "〈C〉《...に対する》例外《to ...》 / 〈U〉《...を》除外すること《of ...》",
    "example_sentence": "I made an exception and let him stay up late.",
    "translated_sentence": "私は例外を作り、彼に遅くまで起きていてもいいと言った。"
  },
  {
    "entry": "poll",
    "meaning_ja": "【名/U】(選挙の) 投票 / 【名/C】世論調査 / 【動/他】〈一定数の投票〉を得る / 【動/自】《…に》投票する《for ...》",
    "example_sentence": "I conducted a poll to gather opinions from the students.",
    "translated_sentence": "生徒たちの意見を集めるためにアンケートを実施しました。"
  },
  {
    "entry": "accept",
    "meaning_ja": "(喜んで)〈物〉'を'受け取る,〈事〉'を'受け入れる  / 〈提案・決定など〉'を'受諾する,〈事態・運命など〉に従う;(特に)…‘に'しかたなく同意する  / 〈弁解・説明・理論など〉'を'認める,容認する  / 〈責任・任務など〉'を'引き受ける  / 〈人〉'を'受け入れる,仲間(身内)に入れる  / 〈手形〉'を'引き受ける",
    "example_sentence": "I gladly accept your generous gift.",
    "translated_sentence": "喜んであなたの寛大な贈り物を受け取ります。"
  },
  {
    "entry": "after",
    "meaning_ja": "《時・順序》…の後に,…後に, …の次に  / …を求めて,の後を追って  / …の名をとって,にならって, …ふうに(の)  / …のことを心配して,に関して  / …だから,…の結果",
    "example_sentence": "I usually go for a walk after dinner.",
    "translated_sentence": "私は普通、夕食の後に散歩に行きます。"
  },
  {
    "entry": "afternoon",
    "meaning_ja": "午後(正午から日没まで) / 《形容詞的に》午後の",
    "example_sentence": "I usually take a walk in the park in the afternoon.",
    "translated_sentence": "私は通常、午後に公園を散歩します。"
  },
  {
    "entry": "again",
    "meaning_ja": "再び,もう一度([[once more]]) / 《否定語とともに用いて》二度と(…しない)  / また元の所へ,元のように  / さらにそれだけ,…の倍も  / 《しばしば[[then]], [[and then]]に続いて》その上に([[besides]]),さらに([[furthermore]])  / 《しばしばand, and thenに続いて》また一方,ところが",
    "example_sentence": "I will try again tomorrow.",
    "translated_sentence": "私は明日再び試します。"
  },
  {
    "entry": "age",
    "meaning_ja": "〈U〉(一般に)年齢,寿命;〈C〉(個々の)年齢,年  / 〈U〉成年(おとなとしての資格・権利を得る年齢;通例18または21歳)  / 〈U〉老齢,《集合的に》老人たち  / 〈U〉(人生の)一時期 / 〈C〉世代([[generation]])  / 〈U〉〈C〉《しばしばA-》(歴史上の)時代  / 〈C〉《話》長い間",
    "example_sentence": "My age is not a barrier to my dreams.",
    "translated_sentence": "私の夢にとって年齢は障害ではない。"
  },
  {
    "entry": "air",
    "meaning_ja": "空気　",
    "example_sentence": "The radio station will air the concert live.",
    "translated_sentence": "そのラジオ局はコンサートを生放送する。"
  },
  {
    "entry": "amount",
    "meaning_ja": "〈U〉《the ~》総計,総額,総数(sum)  / (ある)量,額  / 〈U〉真意;要旨",
    "example_sentence": "The total amount comes to $500.",
    "translated_sentence": "合計金額は500ドルになります。"
  },
  {
    "entry": "alone",
    "meaning_ja": "ひとりで, 単独で, ただ…だけで",
    "example_sentence": "I decided to travel alone.",
    "translated_sentence": "私はひとりで旅行することに決めました。"
  },
  {
    "entry": "cake",
    "meaning_ja": "〈U〉〈C〉ケーキ,洋菓子  / 〈C〉平たい焼きパン(パンケーキなど)  / 〈C〉一定の形の塊にした食物  / 〈C〉(…の)ケーキ状の塊《+of+名》",
    "example_sentence": "I bought a cake for my friend's birthday.",
    "translated_sentence": "友達の誕生日にケーキを買いました。"
  },
  {
    "entry": "alright",
    "meaning_ja": "=[[all right]] / （事が）かまわない / 《...にとって》都合がいい 《for ...》 / うまく行っている",
    "example_sentence": "Everything is alright, don't worry.",
    "translated_sentence": "何も問題ない、心配しないで。"
  },
  {
    "entry": "besides",
    "meaning_ja": "...に加えて, ...のほかにも / 《否定文・疑問文で》 ...を除いて, ...以外にも",
    "example_sentence": "Besides studying, I also work part-time.",
    "translated_sentence": "勉強に加えて、私はアルバイトもしています。"
  },
  {
    "entry": "along",
    "meaning_ja": "《動作や状態の継続を強めて》前へ,進んで / (人を)連れて;(物を)持って / 沿って,並んで",
    "example_sentence": "We walked along without saying a word.",
    "translated_sentence": "私たちは何も言わずに前へと歩き続けました。"
  },
  {
    "entry": "and",
    "meaning_ja": "《等位接続詞》《語・句・節を対等に結んで》…と…,…や…,および  / 《数詞を結合して》…足す…,…に加えて  / …しかも…,…して,同時に…  / 《時間的に》そして,それから,すると([[and then]])  / 《当然の帰結として》…ので,…だから([[and so]])  / 《おもに話》《命令文などの後で》そうすれば,そうしたら  / 《追加・強調して》それに,しかも  / 《対照的な内容を導いて》ところが,しかし([[but]])  / 《譲歩的に》それなのに,それでいながら / 《話》《文頭に置いて驚き・疑念・非難などを表して》ほんとうに;…なのに",
    "example_sentence": "I like apples and oranges.",
    "translated_sentence": "私はリンゴとオレンジが好きです。"
  },
  {
    "entry": "angry",
    "meaning_ja": "怒った, 腹を立てた / (波・風などが)怒ったような, 激しい / (傷が)炎症を起こした",
    "example_sentence": "He was angry because he missed the bus.",
    "translated_sentence": "彼はバスに乗り遅れたから怒っていた。"
  },
  {
    "entry": "animal",
    "meaning_ja": "(植物に対して)動物  / (人間以外の)動物,けだもの  / (魚・鳥などに対して)哺乳動物([[mammal]])  / けだもの(野獣)のような人  / (比較変化なし)《名詞の前にのみ用いて》動物の,動物性の,動物質の  / (知的・精神的に対して)動物的な;肉欲的な",
    "example_sentence": "The zoo is a place where you can see various kinds of animals.",
    "translated_sentence": "動物園は、さまざまな種類の動物を見ることができる場所です。"
  },
  {
    "entry": "anybody",
    "meaning_ja": "【代】｟くだけて｠（疑問文で）誰か，（否定文で）誰も，（肯定文で）誰でも",
    "example_sentence": "Anybody can do that.",
    "translated_sentence": "誰でもそれができる。"
  },
  {
    "entry": "apparently",
    "meaning_ja": "《推測》どうも…らしい / 《疑念》外見上は, 一見したところ…らしい / 《矛盾》（思っていたことと違い）実は / 《確信》明白に",
    "example_sentence": "Apparently, he missed the last train home.",
    "translated_sentence": "どうやら彼は最終電車に乗り遅れたようだ。"
  },
  {
    "entry": "arrive",
    "meaning_ja": "着く,到着する《at, in, on ...》 / (ある目標・過程・断階などに)達する 《at ...》 / （時が）来る",
    "example_sentence": "The train arrives at the station at 8 PM.",
    "translated_sentence": "電車は午後8時に駅に到着します。"
  },
  {
    "entry": "at",
    "meaning_ja": "《場所・位置のある一点》…で,…に  / 《時間・年齢・目盛りなどの一点》…に,…で  / …の最中で,に出席して  / …の状態に(で)  / …を目指して,に向かって  / 《移動の経路》…を通って,…から  / 《動作・感情などの原因・理由・動機》…によって,…を見て(聞いて,知って)  / 《運動・動作の方法・様態》…で,…のやり方で  / 《数量・割合・率》…で,…に  / 《能力・性質などの存在場所》…が,…の点で",
    "example_sentence": "I'm meeting him at the park.",
    "translated_sentence": "彼と公園で会っています。"
  },
  {
    "entry": "speaker",
    "meaning_ja": "〈C〉話す人;演説者  / 《the S-》(議会の)議長  / 〈C〉拡声器(loudspeaker)",
    "example_sentence": "The speaker captivated the audience with his powerful speech.",
    "translated_sentence": "話者は力強いスピーチで聴衆を魅了した。"
  },
  {
    "entry": "bath",
    "meaning_ja": "入浴;水浴び  / (また《おもに米》bathtub,《話》tub)浴槽(よくそう),ふろ[がま]  / 浴室(bathroom);  / 《複数形で》(古代の)大浴場  / (化学作用を与えるための)浴液;電解そう",
    "example_sentence": "I'm going to take a bath.",
    "translated_sentence": "私はお風呂に入ります。"
  },
  {
    "entry": "beat",
    "meaning_ja": "(連続して)…をたたく,打つ([[pound]])  / 《…に》…をたたきつける,打ちつける《against ...》  / 《…に》…をたたいて作る《into ...》;〈金属〉を打ち延ばす  / …を勢いよくかき混ぜる  / 〈リズム・拍子〉を手をたたいてとる  / 〈道〉を踏み固めて作る  / 《話》〈人〉を困らせる  / 〈風・雨・波などが〉《…に》打ちつける《at, against,in,on ...》  / 〈心臓・脈が〉鼓動する,脈打つ  / ドンドン鳴る  / 〈船が〉風に逆らってジグザグに進む  / 打ち負かす",
    "example_sentence": "He beat the drum continuously.",
    "translated_sentence": "彼は連続してドラムをたたいた。"
  },
  {
    "entry": "beautiful",
    "meaning_ja": "美しい,きれいな  / 《話》みごとな,すばらしい  / 《名詞的に;the~》《単数扱い》美(beauty)  / 《名詞的に;the~》《複数扱い》美しい人たち(beautiful people);美しいもの",
    "example_sentence": "She has a beautiful voice.",
    "translated_sentence": "彼女は美しい声を持っている。"
  },
  {
    "entry": "bed",
    "meaning_ja": "〈C〉〈U〉ベット,寝台  / 〈U〉睡眠,宿泊  / 〈C〉花壇,苗床…養殖場  / 〈C〉(海・川などの)床,水底  / 〈C〉地層;(一般に)土台",
    "example_sentence": "I slept in a comfortable bed last night.",
    "translated_sentence": "昨晩は快適なベッドで寝ました。"
  },
  {
    "entry": "begin",
    "meaning_ja": "始まる,開始する  / 発生する,起こる  / …'を'始める,‘に'着手する  / …'を'起こす,創始する",
    "example_sentence": "I began to learn a new language.",
    "translated_sentence": "私は新しい言語を学び始めた。"
  },
  {
    "entry": "below",
    "meaning_ja": "【前置詞】《[[fly]],[[go]],[[sink]] など移動を表す動詞と結びつき方向を表して》…の下方へ,より低い位置へ / 《位置》…の下方で,より低い位置に / (上手・先方に対して)…より下手に,より手前に / (度合・地位・数量などが)…より以下で(の) / …にふさわしくない,にさえ値しない",
    "example_sentence": "The bird is flying below the clouds.",
    "translated_sentence": "鳥は雲の下を飛んでいます。"
  },
  {
    "entry": "bill",
    "meaning_ja": "…に《…の》勘定書(請求書)を送る《for ...》 / ポスター(ビラ)で宣伝する",
    "example_sentence": "Please bill us separately.",
    "translated_sentence": "別々に払います。"
  },
  {
    "entry": "between",
    "meaning_ja": "《場所・空間・期間》...の間に, ...の間で / 《数量・程度など》...の中間に / 《分配》…の間で / 《選択》...のいずれかを / 《関係》…の間に / 《協力》...と協力して / 《理由》...やら...やらで",
    "example_sentence": "The cat is sleeping between the two sofas.",
    "translated_sentence": "猫は二つのソファの間で寝ています。"
  },
  {
    "entry": "black",
    "meaning_ja": "黒い,黒色の  / 暗い,まっ暗な([[dark]])  / (特にアフリカ系)黒人の  / 汚い([[dirty]]),汚れた([[soiled]])  / 陰気な([[gloomy]]);不吉な;見通しの暗い  / 怒った([[angry]]);不きげんな([[sullen]])  / 腹黒い,邪悪な([[wicked]], [[evil]])  / 《文》不名誉な  / (コーヒーに)クリーム(牛乳)を入れない,ブラックの",
    "example_sentence": "She wore a black dress to the party.",
    "translated_sentence": "彼女はパーティーに黒いドレスを着て行った。"
  },
  {
    "entry": "bloody",
    "meaning_ja": "出血している(bleeding)  / 血まみれの,血でよごれた  / 血なまぐさい,残酷な  / 《英俗》ひどい,忌まわしい(damned)",
    "example_sentence": "The cut on his hand was bloody.",
    "translated_sentence": "彼の手の切り傷は出血していた。"
  },
  {
    "entry": "boat",
    "meaning_ja": "小型の船,小舟,ボート  / 《話》(大小に関係なく一般に)船,汽船  / 舟形の容器",
    "example_sentence": "The children went on a boat ride.",
    "translated_sentence": "子どもたちはボート乗りをした。"
  },
  {
    "entry": "brown",
    "meaning_ja": "褐色の,茶色の  / 日に焼けた  / 褐色,茶色,トビ色",
    "example_sentence": "The brown fox jumped over the fence.",
    "translated_sentence": "茶色いキツネがフェンスを越えてジャンプした。"
  },
  {
    "entry": "business",
    "meaning_ja": "〈U〉(生計のための)職業,商売;任務,仕事 / 〈C〉店,会社,商社 / 〈U〉商取引,商売 / 〈C〉事,事柄([[matter]],[[affair]]);用事,用件 / 《おもに否定文・疑問文で》(個人的)関心事,責任のある事",
    "example_sentence": "He has been in the business for 15 years.",
    "translated_sentence": "彼は15年間そのビジネスに従事してきました。"
  },
  {
    "entry": "busy",
    "meaning_ja": "《...で》忙しい,多忙な《with ...》  / 《...するのに》忙しい《~ doing》 / (場所が)にぎやかな  / 《米》(電話が)使用中の(《英》engaged)",
    "example_sentence": "The office is busy today.",
    "translated_sentence": "今日のオフィスは忙しいです。"
  },
  {
    "entry": "energy",
    "meaning_ja": "〈U〉(一般的な力としての)精力, 気力,元気  / (個人の)精力,活動力 / エネルギー",
    "example_sentence": "Renewable energy is the future of sustainable development.",
    "translated_sentence": "再生可能エネルギーは持続可能な開発の未来です。"
  },
  {
    "entry": "book",
    "meaning_ja": "(座席・切符・部屋などの)予約をする《+『for』+『名』》",
    "example_sentence": "I booked a flight to Tokyo.",
    "translated_sentence": "東京へのフライトを予約しました。"
  },
  {
    "entry": "care",
    "meaning_ja": "気にする,心配する,関心がある  / …したいと思う,欲する,好む",
    "example_sentence": "When he lost his watch he didn't seem to care.",
    "translated_sentence": "時計を無くしても彼は気にしていない様子だった。"
  },
  {
    "entry": "center",
    "meaning_ja": "《通例the center, the centre》(…の)中心,中央,中核《+of+名》  / (…の)中心地,中心施設《+of+名》  / (興味・感情などが)集中する所《+of+名》  / (スポーツなどで守備位置の)センター,中堅  / 《しばしばthe Center, the Centre》中道派(the Left(左派),the Right(右波)に対する)",
    "example_sentence": "The center of the city is always busy.",
    "translated_sentence": "都市の中心はいつも賑やかです。"
  },
  {
    "entry": "central",
    "meaning_ja": "中心の,中央の,中心からの  / 主要な,中心的な(main)  / (音声が)中舌音の  / 電話交換局(《英》[telephone]exchange)",
    "example_sentence": "The central park is a popular spot for picnics.",
    "translated_sentence": "中央公園はピクニックの人気スポットです。"
  },
  {
    "entry": "chair",
    "meaning_ja": "　〈C〉いす(通例1人用の4脚で背のあるもの;armchair, easy chair, rocking chair, swivel chairも含めていう) / 《the chair》権威のある座(教授・裁伴官・司教・知事・市長などの地位)  / 《the chair》議長(chairperson)  / 《the chair》《米》(死刑用の)電気いす",
    "example_sentence": "I sat on the chair.",
    "translated_sentence": "私は椅子に座った。"
  },
  {
    "entry": "every",
    "meaning_ja": "《数えられる単数名詞と共に》すべての,どの…も  / 毎…,…ごと[に]  / 《数えられる単数名詞と共に》可能な限りの,あらゆる",
    "example_sentence": "Every student needs to study hard.",
    "translated_sentence": "すべての学生は一生懸命勉強する必要があります。"
  },
  {
    "entry": "case",
    "meaning_ja": "〈C〉《...の》実例, 事例 《of ...》 / 《the ~》実情 / 〈C/U〉場合 / 〈C〉訴訟事件, 判例",
    "example_sentence": "In this case, you should consult a lawyer.",
    "translated_sentence": "この場合、弁護士に相談するべきです。"
  },
  {
    "entry": "chance",
    "meaning_ja": "〈C〉〈U〉 偶然, 偶然の出来事, 運 / (何かが起こる) 公算, 見込み / 〈C〉好機, 機会",
    "example_sentence": "I hope I get a chance to meet him.",
    "translated_sentence": "彼に会うチャンスがあるといいな。"
  },
  {
    "entry": "cheap",
    "meaning_ja": "値段が安い,料金が安い,安く売る  / 安っぽい,安物の,質の悪い,価値のない  / 下品な,野卑な  / 簡単に手に入る  / 《おもに米》(人が)けちな,けちくさい(stingy)  / 安く  / 安っぽく",
    "example_sentence": "I found a cheap hotel for our vacation.",
    "translated_sentence": "私は私たちの休暇のために安いホテルを見つけました。"
  },
  {
    "entry": "chicken",
    "meaning_ja": "〈C〉ひよこ,(一般に)ひな鳥  / 〈C〉《米》(一般に)鶏《英》fowl)  / 〈U〉ひな鳥の肉,鶏肉  / 〈C〉《米話》青二才;小娘  / 〈C〉《俗》おくびょう者  / 鶏肉の  / 小さい  / 《俗》おくびょうな",
    "example_sentence": "I ate chicken for dinner.",
    "translated_sentence": "夕食にチキンを食べました。"
  },
  {
    "entry": "child",
    "meaning_ja": "(おとなに対して)子供,幼児,児童;(小学・中学・高校の)児童  / (親に対して)子,子孫;息子,娘  / (ある環鏡・時代の)影響を受けて生まれた人,(…の)申し子《+of+名》  / (頭脳・空想などが)産み出したものの,所産《+of+名》",
    "example_sentence": "The mother held her child in her arms.",
    "translated_sentence": "母親は腕に子供を抱いていた。"
  },
  {
    "entry": "chip",
    "meaning_ja": "薄切り,欠け目,傷,かけら",
    "example_sentence": "I ordered a bag of potato chips.",
    "translated_sentence": "私はポテトチップスの袋を注文しました。"
  },
  {
    "entry": "choice",
    "meaning_ja": "〈C〉〈U〉(…を)選択,えり好み《+of+名》  / 〈U〉選択権,宣択の機会,宣択力  / 〈C〉選ばれた物(人)  / 〈C〉えり抜きの物,最上等品  / えり抜きの,精選した",
    "example_sentence": "I had no choice but to accept the job offer.",
    "translated_sentence": "私は仕事のオファーを受け入れる以外に選択肢がありませんでした。"
  },
  {
    "entry": "clean",
    "meaning_ja": "汚れのない,清潔な  / 綺麗好きな / 使っていない  / 不純物がはいっていない,純粋な([[pure]])  / 清らかな,潔白な  / ゆがみのない,すっきりした  / 公正な([[fair]]),規則に従った  / 空白の;書き入れてない  / 完全な,全くの  / 鮮やかな,みごとな  / 放射能のない",
    "example_sentence": "The house is clean and tidy.",
    "translated_sentence": "家はきれいで整頓されています。"
  },
  {
    "entry": "company",
    "meaning_ja": "〈C〉会社 / 《...の》団体《of ...》 /  〈U〉仲間, 友達 / 来客 /",
    "example_sentence": "I work for a multinational company.",
    "translated_sentence": "私は多国籍企業で働いています。"
  },
  {
    "entry": "climb",
    "meaning_ja": "〈他〉をよじ登る《up》 / 〈自〉《...に》よじ登る《to ...》 / 上がっている",
    "example_sentence": "I will go on a climb tomorrow.",
    "translated_sentence": "明日登山に行くつもりです。"
  },
  {
    "entry": "coffee",
    "meaning_ja": "〈U〉コーヒー[飲料];〈C〉《話》(1杯の)コーヒー  / 〈U〉コーヒー豆,コーヒーの粉末  / 〈C〉=coffee tree  / 〈U〉コーヒー色,濃褐色",
    "example_sentence": "I like to drink coffee in the morning.",
    "translated_sentence": "朝はコーヒーを飲むのが好きです。"
  },
  {
    "entry": "cold",
    "meaning_ja": "寒い,冷たい;冷えた,冷やした  / (性格・態度などが)冷たい,冷淡な,熱意のない;無情な,冷酷な  / (物事が)人をがっかりさせる,つまらない  / (色調が)冷たい,寒色の  / (獲物のにおい臭が)かすかな,弱い  / 《話》(打撃などで)意識を失った,失神した",
    "example_sentence": "The weather is cold today.",
    "translated_sentence": "今日は天気が寒いです。"
  },
  {
    "entry": "collection",
    "meaning_ja": "〈U〉〈C〉(…を)集めること,(…の)収集,採集;(税金などの)徴集,集金《+of+名》  / 〈C〉(…の)収集物,収蔵物,コレクション《+of+名》  / 〈U〉募金,〈C〉寄付金,献金  / 〈C〉(水・ちりなどの)堆積,集積,たまり《+of+名》",
    "example_sentence": "I have a large collection of stamps.",
    "translated_sentence": "私は多くの切手を集めている。"
  },
  {
    "entry": "college",
    "meaning_ja": "《しばしば冠詞をつけず単数形で》(一般に)大学,カレッジ  / 単科大学,教養課程大学　《米》(総合大学 universityの)学部  / 《英》(Oxford・Cambridge 大学などの)学寮(university の一部で,教師・外生・研究育で自治組織を作っている)  / (特定の)パブリックスクール(public school)  / 《英》(universityに併設の)専門学校  / (共通の特権・目的などを持つ人々の)団体,協会,学会",
    "example_sentence": "I'm planning on going to college next year.",
    "translated_sentence": "来年大学に行くつもりです。"
  },
  {
    "entry": "color",
    "meaning_ja": "〈C〉〈U〉色,色採,色調  / 《複数形で》絵の具([[paint]])  / 〈U〉《しばしばa ~》顔色;顔の赤み  / 〈U〉(有色人種,特に黒人の)皮膚の色  / 〈C〉〈U〉外見,見せかけ;〈U〉もっともらしさ,粉飾  / 〈U〉特色,特性,持ち味  / 《複数形で》軍旗;(特定団体の)記章の色,クラブ色,(学校の標識となる)校色",
    "example_sentence": "The sky is a beautiful color.",
    "translated_sentence": "空は美しい色です。"
  },
  {
    "entry": "coat",
    "meaning_ja": "〈C〉上着; コート/ 塗り",
    "example_sentence": "I bought a new coat for winter.",
    "translated_sentence": "私は冬のために新しいコートを買いました。"
  },
  {
    "entry": "cost",
    "meaning_ja": "〈C〉代価 / 《しばしば複数形で》経費,費用 / 《the ~》犠牲",
    "example_sentence": "The cost of living in this city is very high.",
    "translated_sentence": "この都市の生活費は非常に高いです。"
  },
  {
    "entry": "course",
    "meaning_ja": "〈C〉進路,道筋,方向,水路  / 《単数形で》(時・事態の)経過,推移,成り行き,進行《+of+名》  / 〈C〉(行動の)方針,方向;やり方  / 〈C〉(競技の)コース,走路  / 〈C〉(講議などの)課程,講座《+of+名》  / 〈C〉(順々に出される)料理,一品",
    "example_sentence": "I am taking a course on computer science.",
    "translated_sentence": "コンピューターサイエンスのコースを受講しています。"
  },
  {
    "entry": "consider",
    "meaning_ja": "(決定・決意のために)…'を'よく考える,熟慮する  / …'を'みなす,思う(進行形にできない)  / …'を'考慮に入れる,心にとめる  / …'を'重んじる,尊重する;…‘に'注意(注目)する  / 熟慮する,考えてみる",
    "example_sentence": "I will consider your proposal before making a decision.",
    "translated_sentence": "私は決定する前にあなたの提案をよく考えます。"
  },
  {
    "entry": "cook",
    "meaning_ja": "料理人,コック",
    "example_sentence": "The cook prepared a delicious meal for the guests.",
    "translated_sentence": "料理人はお客様のために美味しい食事を準備しました。"
  },
  {
    "entry": "court",
    "meaning_ja": "〈C〉中庭 / (テニスなどの)コート / 〈C〉〈U〉宮廷 / 法廷",
    "example_sentence": "The judge made a ruling in the court.",
    "translated_sentence": "裁判官が裁判所で判決を下しました。"
  },
  {
    "entry": "couple",
    "meaning_ja": "(同種類の物が)2個《+of+名》  / 夫婦,男女一組  / 《話》(…の)いくらか,少数《+of+名》  /",
    "example_sentence": "I bought a couple of apples at the grocery store.",
    "translated_sentence": "私はスーパーでりんごを2個買いました。"
  },
  {
    "entry": "crime",
    "meaning_ja": "〈C〉(事律上の)犯罪,罪  / 〈U〉(一般に)犯罪[行為]  / 〈C〉《a~》よくない行為,ばかげた行為",
    "example_sentence": "He was arrested for committing a crime.",
    "translated_sentence": "彼は犯罪を犯したため逮捕された。"
  },
  {
    "entry": "eat",
    "meaning_ja": "…‘を'食べる;〈食事〉‘を'する;〈スープ〉‘を'飲む  / …‘を'常食にする(進行形にできない)  / 〈金属〉‘を'腐食する;〈水,水の流れが〉…‘を'浸食する《+away+名,+名+away》  / 〈穴など〉‘を'腐食(浸食)してあける  / 食べる,食事をする",
    "example_sentence": "I eat lunch everyday.",
    "translated_sentence": "毎日昼ご飯を食べます。"
  },
  {
    "entry": "conversation",
    "meaning_ja": "(…との打ち解けた)会話,談話,座談《+with+名》",
    "example_sentence": "We had a pleasant conversation over dinner.",
    "translated_sentence": "ディナーを楽しみながら素敵な会話をしました。"
  },
  {
    "entry": "darkness",
    "meaning_ja": "暗さ,やみ  / 徳黒さ  / 無知,無学  / 邪悪,腹黒さ  / 不明りょう,あいまいさ",
    "example_sentence": "The darkness enveloped the room.",
    "translated_sentence": "暗さが部屋を包み込んだ。"
  },
  {
    "entry": "day",
    "meaning_ja": "〈U〉〈C〉昼間,日中  / 〈C〉1日,1昼夜,日  / 〈C〉(労働や勉強の単位の)1日  / 〈C〉(物事が予定された)日・期日;《しばしばD-》祝日  / 〈C〉《しばしば複数形で》(過去・現在・未来いずれかの)時代;現代  / 〈C〉《しばしば複数形で》一生,生涯;《所有格の旧詞・代名詞とともに槻数形で》(…の)全先宗代,活動期  / 〈U〉《the ~》戦い,勝負",
    "example_sentence": "Today is a beautiful day.",
    "translated_sentence": "今日は素晴らしい日です。"
  },
  {
    "entry": "differently",
    "meaning_ja": "《…と》異なって,違って,さまざまに《from, than ...》",
    "example_sentence": "She approached the problem differently than her colleagues.",
    "translated_sentence": "彼女は同僚とは違う方法で問題に取り組んだ。"
  },
  {
    "entry": "difficult",
    "meaning_ja": "(物事が)難しい,困難な,骨の折れる  / (人が)気難しい,つきあいにくい,扱いにくい",
    "example_sentence": "This problem is so difficult.",
    "translated_sentence": "この問題はとても難しい。"
  },
  {
    "entry": "difficulty",
    "meaning_ja": "〈U〉難しさ,困難  / 〈C〉困難なこと,難事,障害  / 〈C〉《通例複数形で》困難な状況,(特に)財政困難  / 〈C〉〈U〉(…との)不和,仲たがい《+with(between)+名》  / 〈C〉苦情,反対",
    "example_sentence": "I had difficulty understanding the instructions.",
    "translated_sentence": "説明を理解するのが難しかったです。"
  },
  {
    "entry": "dig",
    "meaning_ja": "〈地面・穴など〉‘を'掘る  / …‘を'掘り出す《+up+名,+名+up》  / (…から)…‘を'見つけ出す,探り出す《+名+from+名》  / …‘を'突く;(…に)…‘を'突っ込む《+名+in(into)+名》  / 《俗》…‘を'理解する,好む  / 地面を掘る,掘り返す  / 《話》(資料などを)丹念に調べる《+at+名》",
    "example_sentence": "Badgers dig deep holes.",
    "translated_sentence": "アナグマは深い穴を掘る。"
  },
  {
    "entry": "employ",
    "meaning_ja": "《しばしば受動態で》(…として)〈人〉‘を'雇う(hire)《+名+as+名》  / 《文》(…として)〈物・能力など〉‘を'使う(use)《+名+as+名》  / 《文》(…に)〈時間・精力など〉‘を'費やす,〈自分〉‘の'身をささげる《+名+in(for, on)+名(doing)》  / (…の)雇用《+of+名》",
    "example_sentence": "They employ him as a manager.",
    "translated_sentence": "彼らは彼をマネージャーとして雇っています。"
  },
  {
    "entry": "empty",
    "meaning_ja": "からの,中に何もない(だれも居ない)  / 空虚な,なんの意味もない  / 《話》腹ぺこの  / 〈容器など〉‘を'空にする  / (容器などから)〈中身〉‘を'出して空にする《+名+out of+名》;(…に)〈中身〉‘を'全部出す《+名+into(onto)+名》  / 空になる;(…に)全部出て空になる《+into+名》  / 空き箱,空きびん",
    "example_sentence": "I received a gift from him.",
    "translated_sentence": "彼からプレゼントをもらいました。"
  },
  {
    "entry": "deal",
    "meaning_ja": "と取引する； を分配する,を分ける / 《…に》（打撃・仕打ちなど）を加える《at, to ...》",
    "example_sentence": "He deals in furniture.",
    "translated_sentence": "彼は家具屋だ。"
  },
  {
    "entry": "dream",
    "meaning_ja": "夢  / 白昼夢,幻想(daydream)  / 抱負,強い希望,夢  / 《話》夢のように美しいもの,魅力のあるもの",
    "example_sentence": "I had a strange dream last night.",
    "translated_sentence": "昨夜、奇妙な夢を見た。"
  },
  {
    "entry": "drink",
    "meaning_ja": "〈U〉〈C〉飲み物,飲料  / 〈U〉酒;飲酒  / 〈C〉(飲み物の)ひと飲み,1杯",
    "example_sentence": "I need a drink.",
    "translated_sentence": "飲み物が必要です。"
  },
  {
    "entry": "drop",
    "meaning_ja": "〈自〉したたる / 落ちる / ばったり倒れる / 下落する / 《~ in,by, over, round》 《...に》ちょっと立ち寄る《at ...》 / 〈他〉をしたたらせる / を落とす / やめる / 中断する",
    "example_sentence": "He dropped the book on the floor.",
    "translated_sentence": "彼は本を床に落とした。"
  },
  {
    "entry": "driver",
    "meaning_ja": "(動物を)追う人,牛追い,馬方  / (一般に)車を運転する人,(職業としての自動車の)運転手  / ドライバー(ゴルフで最長打を飛ばすために用いるクラブ)  / (くいなどの)打ち込み機",
    "example_sentence": "The driver was waiting for us at the station.",
    "translated_sentence": "駅で私たちを待っていたドライバーがいました。"
  },
  {
    "entry": "dry",
    "meaning_ja": "『乾いた』,乾燥した  / 『雨の降らない』,日照り続きの  / 水のかれた,干上がった  / (家畜などが)乳の出ない  / 涙の出ない  / 液状でない,固形の  / のどが乾く,のどが乾いた  / (パンが)バター(ジャム)などのついていない;(パン・ケーキが)古い,固くなった  / ありのままの,飾りけのない,そっけない  / (ユーモア・皮肉などが)さりげない  / (ぶどう酒などが)辛口の  / 禁酒の,禁酒法実施の",
    "example_sentence": "The air in the room was dry.",
    "translated_sentence": "部屋の空気は乾燥していた。"
  },
  {
    "entry": "earth",
    "meaning_ja": "《the》地球  / 〈U〉(天,空に対して)地,地面  / 〈U〉土([[soil]])  / 《the~》世界;全世界の人々  / 〈C〉土類(金属酸化物)  / 〈C〉《英》アース,接地線  / 〈C〉《おもに英》(キツネなどの)穴",
    "example_sentence": "The earth is the third planet from the sun.",
    "translated_sentence": "地球は太陽から3番目の惑星です。"
  },
  {
    "entry": "expectation",
    "meaning_ja": "〈U〉《時に複数形で》(…を)期待(予期,予想)すること《+of+名》  / 《複数形で》(成功・幸運などの)見込み;遺産相続の見込み",
    "example_sentence": "My expectation for the new movie is very high.",
    "translated_sentence": "私は新しい映画に対する期待が非常に高いです。"
  },
  {
    "entry": "fact",
    "meaning_ja": "〈C〉事実,実際にある(あった)事  / 〈U〉真相,真実(truth)  / 《the~》(法律用語で)犯行",
    "example_sentence": "It is a well-known fact that smoking is harmful to your health.",
    "translated_sentence": "喫煙が健康に悪いことはよく知られている事実です。"
  },
  {
    "entry": "father",
    "meaning_ja": "〈C〉父,父親  / 《one's fathers》(男の)祖先,父祖(forefather)  / 〈C〉(…の)創始者,生みの親,始祖,元組(founder)《+of+名》  / 《複数形で》(市町村議会などの)長老,元老  / 《[the]F-,Our F-》神,天帝,造物主  / 《敬称として)神父,教父,…師",
    "example_sentence": "My father is a doctor.",
    "translated_sentence": "私の父は医者です。"
  },
  {
    "entry": "fear",
    "meaning_ja": "〈C〉〈U〉恐れ,恐怖(dread)  / 〈C〉〈U〉不安,心配,気づかい(anxiety)  / 〈U〉(神に対する)おそれ,崇敬(awe)",
    "example_sentence": "She couldn't overcome her fear of spiders.",
    "translated_sentence": "彼女はクモの恐怖を克服することができなかった。"
  },
  {
    "entry": "feed",
    "meaning_ja": "〈人・動物〉‘に'食物を与える,‘を'養う;《英》(…で)〈人・動物〉‘を'育てる,飼育する《+名+on+名》  / 《米》(人・動物に)〈食物〉‘を'与える《+名+to+名》  / 〈食物ず〉…‘の'食事となる,‘を'まかなう  / (必要なものを)…‘に'供給する《+名+with+名》  / (…に)〈必要なもの〉‘を'供給する,送り込む《+名+into(to)+名》  / 〈動物が〉食べる,《話》〈人が〉食べる",
    "example_sentence": "I feed my dog twice a day.",
    "translated_sentence": "私は毎日犬に２回ご飯をあげます。"
  },
  {
    "entry": "few",
    "meaning_ja": "《aをつけて背定的に》(…の)少数の人(物)《+of+名〈複数〉》  / 《aをつけないで否定的に》(…の)少数の人(物)[しかない]《+of+名〈複数形〉》  / 《the~》少数の人たち,選ばれた人たち",
    "example_sentence": "Give me a few.",
    "translated_sentence": "私に少しください。"
  },
  {
    "entry": "field",
    "meaning_ja": "〈C〉『野原』;田野,田畑  / 〈C〉(鉱物などの)産出地,埋蔵地  / 〈C〉『戦場』([[battlefield]])  / 〈C〉(スポーツの)『競技場』  / 〈C〉(ある用途の)場,地面  / 〈C〉(研究・活動などの)『分野』,領域",
    "example_sentence": "She loves to run and play in the field.",
    "translated_sentence": "彼女は野原で走ったり遊んだりするのが大好きです。"
  },
  {
    "entry": "fifteen",
    "meaning_ja": "〈C〉(数の)15;15記号(15,XVなど)  / 〈U〉(24時間制の)15時,15分;15歳  / 〈U〉《複数扱い》15人,15個  / 〈C〉15(15人,15個)一組のもの;ラグビーチームのメンバー  / 15の,15個の,15人の  / 《補語にのみ用いて》15歳の(で)",
    "example_sentence": "There are fifteen students in the classroom.",
    "translated_sentence": "教室には15人の生徒がいます。"
  },
  {
    "entry": "five",
    "meaning_ja": "〈C〉(数の)5;5の記号(5,Vなど)  / 〈C〉5時,5分;5歳  / 〈U〉《複数扱い》5人,5個  / 〈C〉5人(5個)1組のもの  / 〈C〉(カードの)5の札  / 5の,5個の;5人の  / 《補語にのみ用いて》5歳の(で)",
    "example_sentence": "I have five apples.",
    "translated_sentence": "私はりんごを5つ持っています。"
  },
  {
    "entry": "foot",
    "meaning_ja": "〈C〉(人間・動物の)足(くるぶしから先の部分);(生物体の)足状の部分  / 〈C〉《通例the~》(高い物・長い物の)足部,下部,低部《+of+名》  / 〈C〉《通例the foot》(階級・地位などの)最下位《+of+名》  / 〈U〉〈C〉歩み,足取り  / 〈C〉フィート(長さの単位で12インチ,30.48センチ)  / 〈C〉詩脚(詩における韻律の単位)  / 〈C〉《通例単数形で》(靴下の)足の部分",
    "example_sentence": "I hurt my foot while playing soccer.",
    "translated_sentence": "サッカーをしている最中に足を痛めました。"
  },
  {
    "entry": "force",
    "meaning_ja": "〈U〉力 / 暴力 / 影響力 / 〈C〉軍隊",
    "example_sentence": "The police used force to subdue the suspect.",
    "translated_sentence": "警察は容疑者を制圧するために力を使った。"
  },
  {
    "entry": "form",
    "meaning_ja": "〈C〉〈U〉(色・材質に対して)『形』,形状,姿 / 〈C〉『人体』,体つき  / 〈C〉〈U〉『外観』,格好,人影 / 〈C〉〈U〉(ものの現れる)『形態』,形式 / 〈C〉(生物などの)『種類』,品種",
    "example_sentence": "The form of the sculpture is abstract.",
    "translated_sentence": "彫刻の形は抽象的です。"
  },
  {
    "entry": "forward",
    "meaning_ja": "前方へ / 将来へ /",
    "example_sentence": "He looked forward to the weekend.",
    "translated_sentence": "彼は週末を楽しみにしていた。"
  },
  {
    "entry": "four",
    "meaning_ja": "〈C〉(数の)4;4ノ記号(4,IVなど)  / 〈U〉4時,4分;4歳  / 〈U〉《複数扱い》4人,4個  / 〈C〉4個(4人)1組のもの;フォア(4本オールのボートおよびその選手)  / 〈C〉(カードの)4の札  / 4の;4人の;4個の  / 《補語にのみ用いて》4歳の(で)",
    "example_sentence": "There are four apples on the table.",
    "translated_sentence": "テーブルの上にはりんごが4つあります。"
  },
  {
    "entry": "noise",
    "meaning_ja": "〈C〉〈U〉(特に,大きなまたは不快な)音,物音  / 〈C〉〈U〉(街・往来などの)ざわめき,騒音,騒々しい声  / 〈C〉(一般に)物音  / 〈U〉(ラジオ・テレビなどの)ノイズ,雑音  / …‘を'広める,言い触らす《+名+about(abroad, around)》  / 音を立てる;大声で話す《+about(around, abroad)》",
    "example_sentence": "The noise from the construction was unbearable.",
    "translated_sentence": "施工からのノイズは耐えられなかった。"
  },
  {
    "entry": "freedom",
    "meaning_ja": "〈U〉〈C〉自由  / 〈U〉〈C〉(束縛・義務・不安などからの)解放,免除《+from+名》  / 〈U〉自由自在,のびのびしていること〈C〉なれなれしさ,無遠慮  / 《the~》(市民権・会員権などの)権利享有権(権物などへの)出入りの自由,(…の)自由使用権《+of+名》",
    "example_sentence": "Freedom is a fundamental human right.",
    "translated_sentence": "自由は基本的な人権です。"
  },
  {
    "entry": "general",
    "meaning_ja": "全体的な / 世間一般の / 一般的な / 大体の",
    "example_sentence": "The general situation is advantageous to us.",
    "translated_sentence": "全般的な状況はわれわれに有利だ。"
  },
  {
    "entry": "front",
    "meaning_ja": "《the~》(物の)『前面』,表;(玄関を含む建物の)正面;《…の》最前部《of ...》  / 《the~》(本などの)最初の部分  / 〈U〉《しばしばa~》(物事に対する)態度  / 〈C〉(共通目的のための)共同戦線,運動,提携  / 〈C〉(街路・川・湖に面した)土地;《英》(海岸の)遊歩道  / 〈C〉戦線  / 《話》〈C〉世間の目をそらすための人(物);(…の)隠れみの《+for+名》  / 〈C〉(気象上の)前線  / 〈C〉前部に位置する(ある)もの(ワイシャツの胸当て,前頭部など)",
    "example_sentence": "The car's front is dented.",
    "translated_sentence": "車の前面がへこんでいる。"
  },
  {
    "entry": "gently",
    "meaning_ja": "優しく / 穏やかに",
    "example_sentence": "She spoke gently to the child.",
    "translated_sentence": "彼女は子供に優しく話しました。"
  },
  {
    "entry": "gas",
    "meaning_ja": "〈U〉〈C〉気体,ガス  / 〈U〉(灯用・燃料用)ガス  / 〈U〉《米話》=gasoline  / 〈U〉(麻酔用の)亜酸化窒素,笑気(laughing gas);毒ガス(mustard gas, tear gasなど)  / 〈U〉《話》むだ話,ばか話  / 〈C〉《単数形で》とても楽しいこと  / 〈敵など〉‘を'毒ガスで攻撃する  / 《米話》〈車〉‘に'ガソリンを入れる《+up+名,+名+up》  / 長々とむだ話をする",
    "example_sentence": "Natural gas is used for heating and cooking.",
    "translated_sentence": "天然ガスは暖房や料理に使われています。"
  },
  {
    "entry": "fresh",
    "meaning_ja": "新鮮な / はつらつとした / (印象・色などが)鮮やかな",
    "example_sentence": "I bought some fresh vegetables from the market.",
    "translated_sentence": "私は市場で新鮮な野菜を買いました。"
  },
  {
    "entry": "further",
    "meaning_ja": "さらに遠く / もっと進んで / そのうえ",
    "example_sentence": "I need to go further to reach my destination.",
    "translated_sentence": "私は目的地に到達するためにもっと遠くに行かなければなりません。"
  },
  {
    "entry": "glass",
    "meaning_ja": "〈U〉ガラス  / 〈C〉(ガラス製の)コップ,グラス  / 〈C〉(…の)コップ(グラス)1杯[の量](glassful)《+of+名》  / 〈U〉《集合的に》ガラス製品,ガラス器(glassware)  / 〈C〉《英話》鏡(looking glass)  / 〈C〉レンズ;望遠鏡;顕微鏡  / 《複数形で》眼鏡(eyeglasses, spectacles)  / 〈C〉晴雨計(barometer)  / 〈C〉《英》砂時計(sandglass)  /",
    "example_sentence": "I put the glass on the table.",
    "translated_sentence": "テーブルの上にグラスを置きました。"
  },
  {
    "entry": "golden",
    "meaning_ja": "金の,金製の  / 金色の,黄金色の  / (金のように)貴重な,すばらしい",
    "example_sentence": "She wore a beautiful golden necklace.",
    "translated_sentence": "彼女は美しい金のネックレスを身に着けていた。"
  },
  {
    "entry": "green",
    "meaning_ja": "緑の,緑色の,青々とした  / (季節が)新緑の;(木々の緑が残って)温暖な  / (果物が)うれていない;(酒・チーズなどが)熟成していない  / 未経験の  / (食物・木材・皮などが)生の;調理して(乾燥して,なめして)ない  / 青野菜の;青草の  / 活気のある,元気な;若い  / (記億などが)生々しい  /",
    "example_sentence": "The grass is green.",
    "translated_sentence": "芝生は緑色だ。"
  },
  {
    "entry": "growth",
    "meaning_ja": "〈U〉成長,発展,発達,増大,増加,栽培,培養 (of) / 〈C〉生長物,発生物 〈草木・ひげ・つめなど〉 / 腫瘍",
    "example_sentence": "The company experienced rapid growth in the past year.",
    "translated_sentence": "会社は昨年急速な成長を経験しました。"
  },
  {
    "entry": "hall",
    "meaning_ja": "会館,公会堂,集会場;本部,事務所  / (大きな建物の一部となっている)大広間,ホール  / (また《おもに米》hallway)玄関の広間(玄関のドアを入った所とそこから各部屋の前まで通じる廊下)  / 《米》(学校・ビルなどの)廊下,通路  / 学校内の特別の用途のための建物(校舎,寄宿舎,集会所,大食堂など)  / 《おもに英》地方の大地主の邸宅",
    "example_sentence": "The kids ran and shouted in the hall.",
    "translated_sentence": "子供達がホールで走り回りながら叫んでいた。"
  },
  {
    "entry": "government",
    "meaning_ja": "〈C〉政府 / 〈U〉政体, 政治体制 / 《...の》統治 《of ...》",
    "example_sentence": "The government is responsible for making and enforcing laws.",
    "translated_sentence": "政府は法律を制定し、執行する責任があります。"
  },
  {
    "entry": "plan",
    "meaning_ja": "計画,案,プラン,設計  / 設計図,図面;(小区域の)地図,市街図",
    "example_sentence": "I made a plan for the future.",
    "translated_sentence": "将来のための計画を立てました。"
  },
  {
    "entry": "left",
    "meaning_ja": "左の, 左方の / (政治上の)左翼の,左派の",
    "example_sentence": "The left shoe was too small for her.",
    "translated_sentence": "彼女のための左の靴は小さすぎた。"
  },
  {
    "entry": "healthy",
    "meaning_ja": "(人・身心などが)健康な,健全な  / 健康によい,健康を増進する",
    "example_sentence": "He is a healthy person.",
    "translated_sentence": "彼は健康な人です。"
  },
  {
    "entry": "hear",
    "meaning_ja": "〈音〉‘が'聞こえる,‘を'聞く(進行形にできない)  / 〈人の言うこと〉‘に'耳を傾ける,‘を'注意深く聞く(listen);(裁判官などが)…の申し立てを聞く  / 〈うわさ・ニュースなど〉‘を'耳にしている,聞いている  / 耳が聞こえる  / 《しばしば命令形で》耳を傾ける,注意を向ける  / うわさ(消息)を聞く",
    "example_sentence": "I heard the sound of the bell.",
    "translated_sentence": "私はベルの音を聞いた。"
  },
  {
    "entry": "help",
    "meaning_ja": "〈他〉〈人が〉〈人〉を手伝う,を助ける / 〈物事が〉〈人・事〉に役立つ",
    "example_sentence": "He helped me with my homework.",
    "translated_sentence": "彼は私の宿題を手伝ってくれた。"
  },
  {
    "entry": "hit",
    "meaning_ja": "〈C〉打撃",
    "example_sentence": "Their concert was a big hit.",
    "translated_sentence": "彼らのコンサートは大当たりだった。"
  },
  {
    "entry": "handle",
    "meaning_ja": "に手で触れる / を扱う / (自動車などが) 操縦できる",
    "example_sentence": "I know how to handle difficult situations.",
    "translated_sentence": "難しい状況を処理する方法を知っています。"
  },
  {
    "entry": "hardly",
    "meaning_ja": "ほとんど...ない / おそらく...ない / 《遠回しに》少しも(全く)…ない",
    "example_sentence": "I hardly ever go to the gym.",
    "translated_sentence": "私はほとんどジムに行かない。"
  },
  {
    "entry": "hole",
    "meaning_ja": "(壁などにあいた)穴,割れ目;(衣類などの)破れ穴,裂け目;(道路などにできた)くぼみ,へこみ  / (動物の住む)巣穴  / 《話》あばら家  / (議論・計画などの)欠点(fault)  / 《話》窮地,苦境  / ホール(ゴルフで球を打ち込む穴);(球をホールに入れた)得点",
    "example_sentence": "The rabbit jumped into the hole.",
    "translated_sentence": "ウサギが穴に飛び込んだ。"
  },
  {
    "entry": "holiday",
    "meaning_ja": "休日,休業日,祝祭日,公休日  / 《しばしば複数形で》《英》長い休暇  / (宗教上の)聖日  / 休暇をとる,休暇を過ごす(《米》vacation)",
    "example_sentence": "I'm going on a holiday next month.",
    "translated_sentence": "来月休暇を取るつもりです。"
  },
  {
    "entry": "home",
    "meaning_ja": "〈C〉〈U〉《おもに米》(家族の住む)『家』,住居,わが家  / 〈U〉〈C〉『家庭』,家庭生活  / 〈U〉『生まれ故郷』,長く住んでいる所;故国,本国  / 〈C〉(動物の)生息地,(植物の)原産地;(物・思想などの)発祥地,本場  / 〈C〉《家のない人・病人などの》『収容施設』,ホーム《for ...》  / 〈U〉〈C〉決勝点,ゴール;(野球で)本塁,ホーム",
    "example_sentence": "I love coming home after a long day at work.",
    "translated_sentence": "仕事の長い一日の後に家に帰るのが大好きです。"
  },
  {
    "entry": "house",
    "meaning_ja": "家,住宅  / 家庭,家族,世帯  / 《しばしば複合語を作って》(ある特定の目的に用いる)建物  / (劇場などの)観客,聴衆  / 《しばしばthe H-》議会,立法府,議院  / 《しばしばH-》(王侯貴族の)家系,…家  / 〈人〉‘に'住居を提供する;〈人〉‘を'泊める,収容する  / 〈品物〉‘を'しまう,蓄える  / 家の  / (特定の会社などの)社員向けの",
    "example_sentence": "My house is very big.",
    "translated_sentence": "私の家はとても大きいです。"
  },
  {
    "entry": "hunt",
    "meaning_ja": "狩り,狩猟;《英》キツネ狩り  / 狩猟隊(会)  / (…の)捜索;追求《+for+名》",
    "example_sentence": "They had a good hunt.",
    "translated_sentence": "彼らはいい狩りができた。"
  },
  {
    "entry": "idea",
    "meaning_ja": "〈C〉(心に浮かんだ) 考え / (はっきりとした)意見 / 案, 計画,",
    "example_sentence": "I have an idea.",
    "translated_sentence": "私にはアイデアがある。"
  },
  {
    "entry": "no less",
    "meaning_ja": "同じだけ、同様に、(実に)…ほども、まさしく、確かに",
    "example_sentence": "I worked hard, no less than before.",
    "translated_sentence": "私は以前と同様に、決して努力を惜しまなかった。"
  },
  {
    "entry": "seventy",
    "meaning_ja": "〈C〉(数の)70,70の記号(70,LXXなど)  / 〈U〉70歳  / 〈U〉《複数扱い》70人,70固  / 《the seventies》(世紀の)70年代;《one's seventies》(年齢の)70代  / 70の,70人の,70個の  / 《補語にのみ用いて》70歳の(で)",
    "example_sentence": "I have seventy dollars in my wallet.",
    "translated_sentence": "私の財布には70ドルあります。"
  },
  {
    "entry": "huge",
    "meaning_ja": "巨大な,莫大な",
    "example_sentence": "The elephant is huge.",
    "translated_sentence": "象は巨大です。"
  },
  {
    "entry": "holder",
    "meaning_ja": "〈C〉保持者, 所持者 / 支える物, 入れて持つ物",
    "example_sentence": "She is the holder of the highest score in the competition.",
    "translated_sentence": "彼女は競技で最高得点を持つ人です。"
  },
  {
    "entry": "impossible",
    "meaning_ja": "不可能な,できない  / (人・物事が)我慢ならない,耐えがたい  / ほんとうとは思えない,信じがたい",
    "example_sentence": "Achieving that goal seems impossible.",
    "translated_sentence": "その目標を達成することは不可能のようだ。"
  },
  {
    "entry": "insure",
    "meaning_ja": "を保証する / に保険をかける",
    "example_sentence": "I will insure my car against theft.",
    "translated_sentence": "私は車を盗難から保証します。"
  },
  {
    "entry": "interest",
    "meaning_ja": "《...に》〈人〉に興味を持たせる《in ...》",
    "example_sentence": "The teacher tried to interest the students in current events.",
    "translated_sentence": "先生は学生に時事問題に興味を持たせようとした。"
  },
  {
    "entry": "it",
    "meaning_ja": "《すでに述べられた物・事または幼児,動物などを指して》それは(を),そのものは(を),そのことは(を)  / 《その場の状況で相手に何であるか分かるような物・事または人を指して》それは(を),そのことは(を)",
    "example_sentence": "It is already mentioned.",
    "translated_sentence": "それはすでに言及されています。"
  },
  {
    "entry": "join",
    "meaning_ja": "〈二つ以上のもの〉をつなぐ,結合する《together, up》 / 《…に》…をつなぐ《to, onto ...》 / 〈会など〉に加入する  / 《…で》〈人〉の仲間に入る, といっしょになる《in, for ...》  / 《〈人〉と〈事〉に》加わる《in 〈事〉 with 〈人〉》  / 《〈人〉と…を》ともにする《with 〈人〉 in ...》  / 〈川・道などが〉いっしょになる",
    "example_sentence": "Let's join the party tonight.",
    "translated_sentence": "今夜のパーティーに参加しましょう。"
  },
  {
    "entry": "membership",
    "meaning_ja": "〈U〉(団体の)一員(成員,メンバー)であること  / 〈C〉《単数形で》(団体・組織の)全会員  / 《単数形で》(団体・組織の)構成員の数,会員数",
    "example_sentence": "I applied for a membership at the local gym.",
    "translated_sentence": "私は地元のジムに会員申請をしました。"
  },
  {
    "entry": "judge",
    "meaning_ja": "を裁判する / を審判する / を判断する,を評価する",
    "example_sentence": "The court judged the case.",
    "translated_sentence": "法廷はその訴訟に判決を下した。"
  },
  {
    "entry": "knock",
    "meaning_ja": "(音がするくらい強く)…‘を'たたく,打つ,なぐる  / (…に)〈体・体の一部〉‘を'ぶつける《+名+against(on)+名》  / 《副詞[句]を伴って》…‘を'打って(ある状態などに)する  / 〈穴など〉‘を'打ってあける  / 《俗》…‘を'けなす,こきおろす  / 《英俗》…‘を'びっくりさせる,‘に'ショックを与える  / (…を)コツコツとたたく《+on(at)+名》  / (…に)ぶつかる,衝突する《+against(into)+名》  / (故障などで)〈エンジンなどが〉ガタガタいう,ノッキングを起こす",
    "example_sentence": "He knocked on the door.",
    "translated_sentence": "彼はドアをノックした。"
  },
  {
    "entry": "land",
    "meaning_ja": "〈U〉(海・川・湖に対して)陸,陸地  / 〈U〉(性質・用途から見た)土地,土壌(ground, soil)  / 〈C〉国,国土(country)  / 〈C〉(特定の)地域の住民,国民  / 《the lands》(特定の)地域,地帯  / 〈U〉〈C〉(財産としての)土地,所有地",
    "example_sentence": "The ship approached the land after a long journey at sea.",
    "translated_sentence": "船は長い航海の後、陸地に近づいた。"
  },
  {
    "entry": "last",
    "meaning_ja": "最後の / 《時を表す語につけて》すぐ前の / 最新の / 《the ~ A to do / that ...》最も...しそうにないA, 最も...でないA",
    "example_sentence": "This is the last chance.",
    "translated_sentence": "これが最後のチャンスです。"
  },
  {
    "entry": "neighborhood",
    "meaning_ja": "〈C〉近所,近隣 / 街区,住宅地 / 近隣社会",
    "example_sentence": "I love my neighborhood because it's quiet and friendly.",
    "translated_sentence": "私の住んでいる地域は静かで親しみやすいので気に入っている。"
  },
  {
    "entry": "lead",
    "meaning_ja": "を導く / の先頭になる / を率いる / （人が）案内する / 《...に》（道などが）通じている 《to ...》",
    "example_sentence": "This road leads to the airport.",
    "translated_sentence": "この道は空港に通じている。"
  },
  {
    "entry": "line",
    "meaning_ja": "〈C〉『線』, 筋 / (色・縫い目などの)『線』,しま, (顔・手などの)しわ([[wrinkle]]) / (物・人の)『列』,行列([[row]]) / 『綱』,糸,針金 / 電線,電話線 / （文章・詩の）『行』 / 《しばしばa~》《話》短い手紙([[note]]) / (鉄道・バスなどの)路線 / 《複数形で》せりふ",
    "example_sentence": "The line for the concert tickets was incredibly long.",
    "translated_sentence": "コンサートのチケットの列は信じられないほど長かった。"
  },
  {
    "entry": "little",
    "meaning_ja": "小さい",
    "example_sentence": "The little girl was afraid of the dark.",
    "translated_sentence": "その小さな女の子は暗闇が怖かった。"
  },
  {
    "entry": "love",
    "meaning_ja": "〈C〉(テニスで)零点  / …を愛する  / 〈物事〉‘が'大好きである  / …‘に'恋する,ほれる  / 愛する;恋する",
    "example_sentence": "I love playing tennis.",
    "translated_sentence": "私はテニスをするのが大好きです。"
  },
  {
    "entry": "man",
    "meaning_ja": "〈C〉(成人の) 男 / 〈U〉人類, 人 /",
    "example_sentence": "The old man walked slowly down the street.",
    "translated_sentence": "老人はゆっくりと通りを歩いていった。"
  },
  {
    "entry": "marriage",
    "meaning_ja": "〈U〉〈C〉結婚,縁組  / 〈U〉結婚[している状態],結婚生活;(…との)結婚生活《+with+名》  / 〈C〉結婚式,婚礼(wedding)  / 〈U〉〈C〉(…の)結合,融合《+of+名》",
    "example_sentence": "Marriage is a lifelong commitment.",
    "translated_sentence": "結婚は一生の約束です。"
  },
  {
    "entry": "marry",
    "meaning_ja": "…‘と'結婚する,‘を夫(妻)にする;《しばしば比喩(ひゆ)的に》〈金・人の財産など〉‘と'結婚する  / 〈牧師などが〉…‘を'結婚させる  / 〈特に両親が〉(…に)…‘を'嫁にやる,嫁がせる《+off+名+to+名》  / 〈いくつかの…〉‘を'結合させる,融合させる;(…と)…‘を'結びつける《+名+with+名》  / 結婚する",
    "example_sentence": "She wants to marry him.",
    "translated_sentence": "彼女は彼と結婚したいと思っています。"
  },
  {
    "entry": "more",
    "meaning_ja": "(数・量・程度などが)《…より》いっそう大きい,もっと多く,ずっと高い《+than…》  / 《しばしば数詞,[[any]],[[some]],[[no]],[[a,few]],[[a little]]などを伴って》それ以上の,もっと多くの",
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "move",
    "meaning_ja": "〈自〉動く / 《...から...へ》引っ越す《from, out of ... to ....》 / 行動を起こす / 〈他〉を動かす / 《しばしば受動態で》〈人〉を感動させる",
    "example_sentence": "I need to make a move.",
    "translated_sentence": "移動しなければなりません。"
  },
  {
    "entry": "movie",
    "meaning_ja": "(またmotion picture, moving picture)《米》映画;《しばしばthe movies》《集合的に》映画(《英》cinema);映画の上映  / 《複数形で》映画館(《英》cinema)  / 《複数形で》映画産業",
    "example_sentence": "I saw a movie last night.",
    "translated_sentence": "昨晩、私は映画を見ました。"
  },
  {
    "entry": "mind",
    "meaning_ja": "〈U〉心, 精神 / 〈C〉知性 / 意見,考え方",
    "example_sentence": "He has a sharp mind.",
    "translated_sentence": "彼は鋭い知性を持っている。"
  },
  {
    "entry": "musical",
    "meaning_ja": "《名詞の前にのみ用いて》音楽の;音楽を伴う,音楽に合わせた  / (声などが)音調の美しい音楽的な  / (人が)音楽好きの;音楽の才のある  / =musical comedy  / =musical film",
    "example_sentence": "I love going to musicals.",
    "translated_sentence": "私はミュージカルを見に行くのが大好きです。"
  },
  {
    "entry": "must",
    "meaning_ja": "《義務・必要》…ねばならない,すべきである  / 《命令・強制》…ねばならない,…せよ;《否定文では禁止》…してはいけない  / …にちがいない,きっと…のはずだ;《「~ have 過去分詞」の形で》…であったに違いない,きっと…であったはずだ  / 必ず…する,…は避けられない  / どうしても…しないと承知しない  / 《話》《過去のあいにくのでき事》あいにく…した",
    "example_sentence": "You must finish your homework before you can go out to play.",
    "translated_sentence": "遊びに行く前に宿題を終わらせなければなりません。"
  },
  {
    "entry": "my",
    "meaning_ja": "私の  / 《親しみをこめた呼び掛けに用いて》  / 《驚きを表して》おや,まあ",
    "example_sentence": "This is my car.",
    "translated_sentence": "これは私の車です。"
  },
  {
    "entry": "national",
    "meaning_ja": "国民の / 国家の  / 国立の,国有の  / 全国的な  / 《修飾語を伴って》(特定国の)市民,国民",
    "example_sentence": "The national anthem is sung before every game.",
    "translated_sentence": "試合前には国歌が歌われます。"
  },
  {
    "entry": "nearby",
    "meaning_ja": "近くの",
    "example_sentence": "Is there a nearby branch of a Japanese bank?",
    "translated_sentence": "この近くに日本の銀行の支店はありますか。"
  },
  {
    "entry": "necessarily",
    "meaning_ja": "必ず,必然的に / 《not ~ A》必ずしもAでない",
    "example_sentence": "I don't necessarily agree with his decision.",
    "translated_sentence": "彼の決断に必ずしも同意するわけではありません。"
  },
  {
    "entry": "necessary",
    "meaning_ja": "必要な,不可欠な,なくてはならない；必然的な,避けられない【名/C】必需品,必要なもの；必要なこと（金）",
    "example_sentence": "Water is necessary for survival.",
    "translated_sentence": "生存には水が必要です。"
  },
  {
    "entry": "much",
    "meaning_ja": "(量・程度などが)多くの, 多量の, たくさんの / 《否定を伴って》それほど, あまり",
    "example_sentence": "She didn't eat much dinner.",
    "translated_sentence": "彼女は晩ご飯をあまり食べませんでした。"
  },
  {
    "entry": "obvious",
    "meaning_ja": "(一見して)明白な,明らかな,すぐ分かれる;見えすいた",
    "example_sentence": "It is obvious that she is upset.",
    "translated_sentence": "彼女が動揺しているのは明らかだ。"
  },
  {
    "entry": "offer",
    "meaning_ja": "申し出,提案  / 付け値",
    "example_sentence": "This is a one-time offer.",
    "translated_sentence": "これは一度きりのお試しの機会です。"
  },
  {
    "entry": "office",
    "meaning_ja": "〈C〉事務所,事務室;営業所,会社  / 《集合的に》《単数扱い》事務所(営業所)の全員  / 〈C〉〈U〉(特に政府・会社などの)公職,官職,職務  / 〈C〉(一般に)任務,務め,役目(duty)  / 〈C〉官庁,役所;〈U〉《O-》《米》局,《英》省  / 〈C〉《複数形で》(…の)尽力,親切,世話《+of+名》  / 〈C〉《時にO-》(宗教上の)儀会,葬会;(定められた時間の)礼拝",
    "example_sentence": "I went to the office to pick up some documents.",
    "translated_sentence": "オフィスに文書を取りに行った。"
  },
  {
    "entry": "old",
    "meaning_ja": "年とった,老齢の  / 年上の,年長の  / ある年月(年齢)の,…歳の  / (物事が)古い,古くさい,新しくない  / 《名詞の前にのみ用いて》昔なじみの,昔なつかしい  / 《名詞の前にのみ用いて》古代の,大昔の  / 《名詞の前にのみ用いて》(現在に対して)以前の,もとの  / (衣服など)使い古した  / (人が)経験のある,老練な  / 《話》《呼び掛けで親しみなどをこめて》  / 《話》《名詞の前にのみ用い,前の形容詞を強めて》非常な,すばらしい  / 昔",
    "example_sentence": "This is an old book.",
    "translated_sentence": "これは古い本です。"
  },
  {
    "entry": "only",
    "meaning_ja": "《数量に関して》たった,わずか  /  《他を排除して》…だけ, …のみ / 《名詞の後で》…に限る; …専用 / ただ…だけ,単に…に過ぎない, ほんの...に過ぎない /  《通例[[can]], [[could]]と共に》（最適・十分ではないが）…しかできない / 《通例[[will]], [[would]]と共に》かえって…するだけ",
    "example_sentence": "I can only stay for an hour.",
    "translated_sentence": "私は1時間しか滞在できません。"
  },
  {
    "entry": "other",
    "meaning_ja": "《no,one,some,anyなどを伴って》別の,ほかの,違った  / 《other thanの形で補語に用いて》…とは違った,…とは別の   / 《other thanの形で》(…と)別の方法では,(…)ではなく",
    "example_sentence": "The other students all got higher scores than me.",
    "translated_sentence": "他の学生は皆私よりも高い点数を取った。"
  },
  {
    "entry": "out",
    "meaning_ja": "(ある位置・状態から)外へ, 外で / (隠れた所から表面に)現れ出て, 世に出て / 無くなって,消えて  / 最後まで,すっかり",
    "example_sentence": "She stepped out of the car.",
    "translated_sentence": "彼女は車から外に出た。"
  },
  {
    "entry": "picture",
    "meaning_ja": "〈C〉絵,絵画  / 〈C〉写真  / 〈C〉映画;《the pictures》《おもに英》(興行としての)映画  / 〈C〉生き生きとした叙述(描写)  / 〈C〉《単数形で》絵のように美しい人(物,風景)  / 〈U〉《the~》(人の)生き写し;(ある性質・気分などを)絵にしたようなもの;(…の)見本,化身(embodiment)《+of+名》  / 〈C〉《単数形で》(…の)像,心像;画像,画面《+of+名》  / 〈U〉《the~》状況,事態",
    "example_sentence": "I have a picture of my family.",
    "translated_sentence": "私は家族の写真を持っています。"
  },
  {
    "entry": "pair",
    "meaning_ja": "(二つで一つに用いられる物の)組,対《+of+名》  / (対になる部分からなる物の)1個《+of+名》  / 《集合的に》《複数扱い》夫婦,婚約中の男女;(動物の)つがい《+of+名》  / 《集合的に》《複数扱い》(同種または何かの関係のある物の)二人(二つ,2頭など)の組《+of+名》",
    "example_sentence": "He bought a new pair of shoes.",
    "translated_sentence": "彼は新しい靴を一足買った。"
  },
  {
    "entry": "past",
    "meaning_ja": "(場所)を通り越して,の先に  / (時刻)を過ぎて;(年齢)を過ぎて  / (能力・限度など)を越えて,の及ばない  / (ある数・量)を越えて,…以上",
    "example_sentence": "I walked past the park.",
    "translated_sentence": "私は公園を通り越して歩きました。"
  },
  {
    "entry": "perfect",
    "meaning_ja": "完全な,欠点のない,申し分のない  / (必要なものが)完全にそろった  / (写しなどが原物に)正確な  / 《名飼の前にのみ用いて》全くの  / (文法で)完了の  / 《the ~》完了時制  / 〈C〉完了形(完了時制の動詩形)  / …‘を'完鮮にする",
    "example_sentence": "She has a perfect score on the test.",
    "translated_sentence": "彼女はテストで満点を取った。"
  },
  {
    "entry": "pack",
    "meaning_ja": "包み, 束 / 《...の一つの》 包み 《of ...》 / 《...の》 群れ, 隊 《of ...》",
    "example_sentence": "I need to pack my suitcase for the trip.",
    "translated_sentence": "旅行のためにスーツケースに荷物を詰める必要があります。"
  },
  {
    "entry": "phone",
    "meaning_ja": "〈他〉に電話をかける  / 〈自〉電話する",
    "example_sentence": "I'll phone you later",
    "translated_sentence": "後であなたに電話します"
  },
  {
    "entry": "plant",
    "meaning_ja": "(動物に対して)植物 / 草木,(樹木に対して)草,草本(そうほん) ( 木部があまり発達せず地上部が一年で枯れる植物) / 苗,苗木 / 生産設備,工場,プラント設備,装置 / 《俗》(人をおとしいれる)わな,おとり",
    "example_sentence": "The rabbit eats plants for food.",
    "translated_sentence": "ウサギは食べ物として植物を食べます。"
  },
  {
    "entry": "proper",
    "meaning_ja": "（目的に）適切な, ふさわしい / 正式の",
    "example_sentence": "It is proper to dress formally for a job interview.",
    "translated_sentence": "仕事の面接では正装するのが適切です。"
  },
  {
    "entry": "pretty",
    "meaning_ja": "(女・子供などが)きれいな, かわいらしい / (目・耳・心に) 快い,楽しい / 《話》(数量・規模・範囲などが) かなり大きい,相当な /",
    "example_sentence": "The girl had a pretty dress on.",
    "translated_sentence": "彼女はきれいなドレスを着ていた。"
  },
  {
    "entry": "program",
    "meaning_ja": "(催し物,テレビ・ラジオなど全体の)『プログラム』,『番組表』 / 『番組』, (特に)ラジオ番組,テレビ番組 / (行動の)『計画』,予定[表] / 手順,段取り / (学校の)教科課程[表] / (政党の)綱領,政策要綱 / (コンピューターの）プログラム",
    "example_sentence": "I attended a program at the local community center.",
    "translated_sentence": "私は地元のコミュニティセンターで催し物に参加しました。"
  },
  {
    "entry": "pull",
    "meaning_ja": "《しばしば副詞[句]を伴って》〈物〉‘を'引く,引っ張る,引いて動かす  / 〈人・人の体の一部・衣服など〉‘を'ぐいと引っ張る,強く引く  / …‘を'引き抜く,引き離す,取りはずす  / 《副詞[句]を伴って》〈布など〉‘を'引き裂く,引きちぎる  / 〈筋肉など〉‘を'引っ張って痛める,引きつらせる  / 《話》〈観客・支持者など〉‘を'引きつける,集める  / 《話》(…に向かって)〈ナイフ・ピストルなど〉を引き抜く《+名+on+名》  / 《米話》〈悪事・策略・冒険など〉‘を'やってのける  / 引っ張る,引く  / 引っ張られる,引ける  / 引きずるように動く  / こぐ,こいで進む",
    "example_sentence": "He pulled the heavy suitcase up the stairs.",
    "translated_sentence": "彼は重いスーツケースを引いて階段を上がった。"
  },
  {
    "entry": "river",
    "meaning_ja": "川  / (水以外のものの)流れ,多量の流出《+of+名》",
    "example_sentence": "The river was so beautiful that it captivated my heart.",
    "translated_sentence": "その川はとても美しくて、私の心を惹きつけた。"
  },
  {
    "entry": "pop",
    "meaning_ja": "ポンとはじける, ポンと音がする / …をポンと鳴らす",
    "example_sentence": "The balloon popped when I sat on it.",
    "translated_sentence": "私が座った時に風船がポンとはじけた。"
  },
  {
    "entry": "radio",
    "meaning_ja": "ラジオ[放送]  / 〈C〉ラジオ[受信機]  / 〈U〉無線電信 / 〈C〉無線による通信  / ラジオの;無電(無線)の",
    "example_sentence": "I bought a radio for my bedroom.",
    "translated_sentence": "私は自分の部屋用にラジオを買った。"
  },
  {
    "entry": "rain",
    "meaning_ja": "《通例itを主語にして》雨が降る  / 雨のように降る  / (…に)…‘を'雨のように降らす《+名+on(upon)+名》",
    "example_sentence": "I hope it doesn't rain tomorrow.",
    "translated_sentence": "明日雨が降らないことを願います。"
  },
  {
    "entry": "question",
    "meaning_ja": "〈C〉質問, 問い, 質疑 / (討論・考慮すべき)問題 / 〈U〉疑問",
    "example_sentence": "What is the question?",
    "translated_sentence": "どんな質問なのですか？"
  },
  {
    "entry": "quite",
    "meaning_ja": "《英》(平均・期待と比べて) 割と, 比較的に / 全く, 完全に / 《米》《形容詞・副詞を修飾して》かなり, 相当に / ほんとうに",
    "example_sentence": "She is quite tall for her age.",
    "translated_sentence": "彼女は年齢の割にかなり背が高い。"
  },
  {
    "entry": "rich",
    "meaning_ja": "金持ちの, 富んだ / ぜいたくな / 豊かな / 濃い / 《話》非常におもしろい,こっけいな",
    "example_sentence": "He is a rich man.",
    "translated_sentence": "彼は金持ちの男です。"
  },
  {
    "entry": "raise",
    "meaning_ja": "〈他〉を上げる / (倒れたものを)を起こす/ を高める,を増やす, を向上させる / を育てる / を募る /を提起する【名】昇給(額)；上げること",
    "example_sentence": "She asked her boss for a raise.",
    "translated_sentence": "彼女は上司に昇給を求めた。"
  },
  {
    "entry": "road",
    "meaning_ja": "道路；…通り,…街,…街道",
    "example_sentence": "I live on a quiet road.",
    "translated_sentence": "私は静かな道沿いに住んでいます。"
  },
  {
    "entry": "responsible",
    "meaning_ja": "責任がある,信頼できる / 《...の》原因である《for》",
    "example_sentence": "She is responsible for managing the project.",
    "translated_sentence": "彼女はプロジェクトの管理を担当しています。"
  },
  {
    "entry": "rid",
    "meaning_ja": "〈他〉《 AからBを》除去する / 解放する《 A of B 》",
    "example_sentence": "He rid himself of all his bad habits.",
    "translated_sentence": "彼は自分自身の悪い習慣をすべて断ち切った。"
  },
  {
    "entry": "rock",
    "meaning_ja": "〈他〉(前後あるいは左右に)を揺り動かす, を振動させる / 〈自〉揺れ動く, 震動する",
    "example_sentence": "The boat rocked back and forth on the rough sea.",
    "translated_sentence": "船は荒れた海で前後に揺れた。"
  },
  {
    "entry": "room",
    "meaning_ja": "〈C〉部屋,室  / 〈U〉(人・物の占める)場所,空間(space)  / 〈U〉(事を)受け人れる余地《+for+名(doing)  / 《the room》《集合的に》部屋にいる人々,同席している人たち  / 〈C〉《複数形で》(一部屋または数部屋ある)貨し間,下宿",
    "example_sentence": "I will go to the room.",
    "translated_sentence": "私は部屋に行きます。"
  },
  {
    "entry": "rough",
    "meaning_ja": "(表面が)粗い,ざらざらした,きめの粗い / でこぼこの  / (動きなどが)荒っぽい;(空・海などが)荒れた  / (人・態度などが)粗野な,荒々しい,無作法な  / おおよその,あらましの  / (ダイヤモンドなど)自然のままの,未加工の  / 《話》困難な,つらい,ひどい;(…に)ひどい,むごい《+on+名》  / (生活が)非文化的な,不便な  / 毛深い,毛むくじゃらの,毛が刈ってない",
    "example_sentence": "The surface of the table is rough.",
    "translated_sentence": "テーブルの表面は粗いです。"
  },
  {
    "entry": "rule",
    "meaning_ja": "〈C〉規則,規定;法則  / 〈C〉慣例,慣習;通例,通則  / 〈U〉支配,統治;統治期間;統治権  / 〈C〉ものさし,定規(ruler)",
    "example_sentence": "The school has a strict rule about attendance.",
    "translated_sentence": "学校には出席に関する厳しいルールがある。"
  },
  {
    "entry": "run",
    "meaning_ja": "走る,駆ける / 〈人が〉(…に)急ぐ,突進する《+for(to)+名》  / さっと逃げる,走り去る  / 急いで(とょっと)出かける(尋ねる)  / 〈乗り物が〉走る,(定期的に)運行する  / 自由に動く(動き回る)  / (…に)立候補する《+for+名》  / (進行形にできない)(ある方向へ)延びている,続いている  / (ある方向へ)〈植物が〉伸びている,はい延びている  / 〈物事が〉動く,機能を働かせる  / 〈事が〉続く,継続する  / (ある状態,特に困った状態に)なる,陥る,達する  / 〈記憶・考えなどが〉さっと頭(心)に浮かぶ,脳裏を走る",
    "example_sentence": "I usually run in the morning for exercise.",
    "translated_sentence": "私は通常、運動のために朝に走ります。"
  },
  {
    "entry": "safe",
    "meaning_ja": "安全な,危険のない  / 《come,arrive,bring,keepなどの補語にのみ用いて》無事な(に)  / 危険を引き起こさない,危害を加えない  / 安全を心がける,危険をおかさない  / 確かな,まちがいのない  / (野球で)セーフの  / 金庫  / (食料などを入れる)安全戸棚,貯蔵容器",
    "example_sentence": "It is important to always wear a helmet while riding a bike to stay safe.",
    "translated_sentence": "自転車に乗る際には常にヘルメットを着用して安全を確保することが重要です。"
  },
  {
    "entry": "something",
    "meaning_ja": "何か,あるもの,あること  / (…を)いくらか,多少,いささか《+of+名》  / 重要なこと(もの,人),かなりのもの,相当な人  / 何か現実のもの;実在するもの,実在  / 何か食べ物(飲み物)  / 何々,これこれ  / いくぶん,多少",
    "example_sentence": "I don't know what it is, but I'll find out something.",
    "translated_sentence": "それが何なのかは分かりませんが、何かはわかるでしょう。"
  },
  {
    "entry": "roughly",
    "meaning_ja": "手荒く,乱暴に,ぞんざいに / おおよそ,概略",
    "example_sentence": "He roughly estimated the cost of the project.",
    "translated_sentence": "彼はプロジェクトのコストをおおよそ見積もった。"
  },
  {
    "entry": "science",
    "meaning_ja": "〈U〉科学;(特に)自然科学  / 〈C〉(個々の)科学,学問  / 〈U〉〈C〉(修練を要する)技術,わざ",
    "example_sentence": "Science is the study of the natural world.",
    "translated_sentence": "科学とは自然界の研究である。"
  },
  {
    "entry": "sea",
    "meaning_ja": "〈U〉海,海洋；〖形容詞的に〗海の；...海；波；海岸",
    "example_sentence": "The sea is beautiful.",
    "translated_sentence": "海は美しい。"
  },
  {
    "entry": "seem",
    "meaning_ja": "(進行形にできない)(…のように)見える,思われる",
    "example_sentence": "You seem tired.",
    "translated_sentence": "疲れているように見える。"
  },
  {
    "entry": "self",
    "meaning_ja": "(他人と区別して)自己,自分,自身  / 〈C〉(人・物の)本質,個性;性格の一面  / 〈U〉私利,私欲,私心  / 同じ材料でできた,共ぎれの",
    "example_sentence": "I am true to myself.",
    "translated_sentence": "自分自身に忠実である。"
  },
  {
    "entry": "seriously",
    "meaning_ja": "真剣に,まじめに,本気で / (事態・問題が)重大に,深刻で / 慎重に / 《話》 本気かい？ / 《話・文修飾》 真面目な話だけど",
    "example_sentence": "I seriously need to finish this project by tomorrow.",
    "translated_sentence": "明日までにこのプロジェクトを終わらせなければならない。"
  },
  {
    "entry": "server",
    "meaning_ja": "奉仕者 / サーバー",
    "example_sentence": "The server brought us our drinks.",
    "translated_sentence": "店員が私たちのドリンクを運んできました。"
  },
  {
    "entry": "sense",
    "meaning_ja": "〈C〉(五感による)感覚;(…の)感覚《+of+名》  / 〈U〉《しばしばa~》(…の)感じ,気持ち《+of+名》  / 〈U〉《a~,one's~》(…の)理解(認識)力,観念,センス《+of+名》  / 《one's senses》正常な感覚,正気  / 〈C〉《しばしば冠詩をつけないで》分別,良識  / 〈C〉(行動・発言・文などの)意義,意味(meaning)《+of(in)+名(doing)》  / 〈U〉(…の)(全体的な)意向,動向《+of+名》",
    "example_sentence": "I have a keen sense of smell.",
    "translated_sentence": "私は嗅覚が鋭いです。"
  },
  {
    "entry": "seven",
    "meaning_ja": "〈C〉(数の)7;7の記号(7,VIIなど)  / 〈U〉7時,7分;7歳  / 〈C〉(カードの)7の札  / 〈C〉七つ(7人,7個)一組のもの  / 〈U〉《複数扱い》7人,7個  / 71の,7人の,7個の  / 《補語にのみ用いて》7歳の(で)",
    "example_sentence": "There are seven days in a week.",
    "translated_sentence": "週には7日あります。"
  },
  {
    "entry": "soon",
    "meaning_ja": "間もなく,近いうちに  / 早く,早目に  / 速やかに,さっさと",
    "example_sentence": "I will finish it soon.",
    "translated_sentence": "それはすぐに終わります。"
  },
  {
    "entry": "short",
    "meaning_ja": "急に,突然",
    "example_sentence": "He stopped short when he saw the car coming towards him.",
    "translated_sentence": "彼は車が近づいてくるのを見て急に止まった。"
  },
  {
    "entry": "sick",
    "meaning_ja": "(人が)病気の / 《補語にのみ用いて》《…に》うんざりして,あきあきして《of ...》 / 《補語にのみ用いて》《…に》がっかりして《at, about ...》",
    "example_sentence": "She looks sick and needs to see a doctor.",
    "translated_sentence": "彼女は病気のようで、医者に診てもらう必要があります。"
  },
  {
    "entry": "sign",
    "meaning_ja": "(ある事実・状態・感情などの)表れ,印,気配,徴侯(indication);(…の)こん跡,計跡《+of+名》・身ぶり,手まね,合図  / 標識,看板  / (数学・音楽などの)記号  / (…の)象徴,シンボル(symbol)《+of+名》 / 《文》(…の)前兆,きざし《+of+名》 / 宮(きゅう)(黄道12区分の一つ)",
    "example_sentence": "I saw a sign on the wall.",
    "translated_sentence": "壁に看板があるのを見た。"
  },
  {
    "entry": "sister",
    "meaning_ja": "(父母,またその一方が同じ)~,妹,女のきょうだい  / (姉妹のように)親しい女の友(仲間)  / (教会・クラブなどの)婦人会員  / (カトリック教会の)修道女,尼僧,シスター  / 《英》看護婦長  / 姉妹のような関係にある",
    "example_sentence": "My sister is very kind.",
    "translated_sentence": "私の姉はとても優しい。"
  },
  {
    "entry": "share",
    "meaning_ja": "〈他〉を共にする〈自〉《...の》分配にあずかる《 in ...》",
    "example_sentence": "We shared the secret among us.",
    "translated_sentence": "私たちの間でその秘密を共有した。"
  },
  {
    "entry": "situation",
    "meaning_ja": "(人の)立場,状態,境遇  / (事の)事態,形勢,情況  / 位置,環境  / 《文》就職口,勤め口",
    "example_sentence": "In this situation, it is important to consider the other person's perspective.",
    "translated_sentence": "この立場では、相手の視点を考慮することが重要です。"
  },
  {
    "entry": "sixty",
    "meaning_ja": "〈C〉(数の)60;60の記号(60,LXなど)  / 〈U〉60歳  / 《複数扱い》60人,60個  / 《the sixties》(世紀の)60年代;《one's sixties》(年齢の)60代  / 60の,60人の,60個の  / 《補語にのみ用いて》60歳の(で)",
    "example_sentence": "There are sixty students in the class.",
    "translated_sentence": "クラスには60人の生徒がいます。"
  },
  {
    "entry": "slowly",
    "meaning_ja": "遅く,ゆっくり",
    "example_sentence": "He walked slowly towards the park.",
    "translated_sentence": "彼は遅く公園に向かって歩いた。"
  },
  {
    "entry": "small",
    "meaning_ja": "(大きさが)小さい,小形の;(量が)少ない,わずかな  / 取るに足りない,ささいな(trivial)  / 《名詞の前にのみ用いて》(仕事・活動などが)小規模の,ささやかな  / 心が狭い,利己的な  / (音・声が)弱い,小さい  / (文字が)小型の,小文字の  / 《the~》小さいもの;(…の)細い部分《+of+名》  / 《複数形で》《英》(衣類・ハンカチなどの)小物,小間物  / 小さく,細かく  / (声などが)低く,弱く  / 小規模に,こぢんまりと",
    "example_sentence": "The room was small.",
    "translated_sentence": "部屋は小さかった。"
  },
  {
    "entry": "situate",
    "meaning_ja": "【動/他】(ある状態・境遇に)...を置く / を位置させる",
    "example_sentence": "The hotel is situated in a beautiful location overlooking the ocean.",
    "translated_sentence": "ホテルは海を見下ろす美しい場所に位置しています。"
  },
  {
    "entry": "soft",
    "meaning_ja": "(押されて形を変えるほど)柔らかい  / (木材・金属などが,同種の中で比較的)柔らかい  / (斤ざわりの)なめらかな,すべすべした  / (声・音が)穏やかな,低い,静かな  / (見た目に)どぎつくない,落ち着いた  / (天候・気候が)穏やかな,温和な  / (心・言動が)優しい,もの柔らかな  / (体または精神などが)軟弱な,虚弱な  / (市況・相場が)弱気の,下がり気味の  / (水が)軟性の  / (水音が)軟音の  / アルコール分を含まない  / 柔らかに  / 静かに",
    "example_sentence": "The pillow is so soft that it changes shape when pressed.",
    "translated_sentence": "枕は押されると形を変えるほど柔らかいです。"
  },
  {
    "entry": "smoke",
    "meaning_ja": "〈U〉煙,霧 〈C〉喫煙",
    "example_sentence": "The sky was filled with a thick smoke from the fire.",
    "translated_sentence": "空は火事による濃い煙で満たされていた。"
  },
  {
    "entry": "spring",
    "meaning_ja": "〈C〉〈U〉春 / 〈C〉跳ぶこと / バネ / 《複数形で》 泉 / 〈U〉《...の》弾力 《of, in ...》 /",
    "example_sentence": "The birds are singing in the spring.",
    "translated_sentence": "春になると鳥たちが歌い始める。"
  },
  {
    "entry": "square",
    "meaning_ja": "正方形;四角な物;(チェス・チェッカーなどの盤の,正方形の)目,ます目  / (四角い)広場(街路の交差点にあって,しばしば中央に植木や芝などが植えてあり,小公園になっている);《おもに英》広場の回りの建物(街路)(《略》Sq.)  / (四方を街路で囲まれた方形の)一区画,ブロック  / 直角定規,かね尺  / (数の)2乗,平方(《略》sq.)  / 《俗》旧式な人  /",
    "example_sentence": "The park has a beautiful square with a fountain in the center.",
    "translated_sentence": "公園には中央に噴水のある美しい広場があります。"
  },
  {
    "entry": "telephone",
    "meaning_ja": "〈C〉電話機  / 〈U〉電話(《話》phone)  /",
    "example_sentence": "I need to check the telephone number I wrote down yesterday.",
    "translated_sentence": "昨日書いた電話番号を確認しないといけない。"
  },
  {
    "entry": "tell",
    "meaning_ja": "…‘を'話す,語る,言う;〈人〉‘に'話す  / 《tell+名〈人〉+to do》(…するように)〈人〉‘に'命じる  / …‘を'見分ける,識別する  / …‘が'分かる,‘を'知る  / …‘を'表す  / 《古》…‘の'数を勘定する,‘を'数える　語る　(…を)物語る,示す《+of+名》  / (人のことを)告げ口する,密告する《+on+名》  / 《can, be able to などを伴う否定文・疑問文で用いて》(…について)分かる,知る《+about+名》  / (…に)力を発揮する,効きめがある,影響する《+on(against)+名》",
    "example_sentence": "I will tell you the truth.",
    "translated_sentence": "あなたに真実を話します。"
  },
  {
    "entry": "steal",
    "meaning_ja": "(…から)〈物〉‘を'盗む《+名〈物〉+from+名》  / (…から)…‘を'こっそり取る,うまく手に入れる+名+from+名》  / (野球で)〈塁〉‘を'盗む,‘に'盗塁する  / 盗みをする  / 《方向・場所を表す副詞[句]を伴って》こっそり動く  / 〈U〉《米話》こっそりと盗むこと;〈C〉盗品  / 〈C〉《単数形で》《米話》格安品,掘り出し物  / 〈C〉(野球で)盗塁",
    "example_sentence": "He tried to steal money from the bank.",
    "translated_sentence": "彼は銀行からお金を盗もうとした。"
  },
  {
    "entry": "stop",
    "meaning_ja": "〈動いているもの〉‘を'止める  / 〈供給など〉‘を'停止する  / …‘を'阻止する,やめさせる  / 〈自分がしていること〉‘を'やめる,中断する  / 〈穴・口など〉‘を'ふさぐ,〈びんなど〉‘に'せんをする  / 〈動いているものが〉止まる,停止する  / 〈仕事・話などが〉中断する;〈雨などが〉やむ  / 〈人が〉仕事(話など)をやめる,手を休める",
    "example_sentence": "Please stop the car.",
    "translated_sentence": "車を止めてください。"
  },
  {
    "entry": "terrible",
    "meaning_ja": "恐ろしい,怖い  / ひどい,すさまじい  / 《話》ひどく悪い,不愉快な",
    "example_sentence": "The weather was terrible yesterday.",
    "translated_sentence": "昨日の天気は最悪だった。"
  },
  {
    "entry": "thank",
    "meaning_ja": "(…のことで)〈人〉‘に'感謝する,礼を言う《+名+for+名(doing)》",
    "example_sentence": "I thanked her for her help.",
    "translated_sentence": "彼女の助けに感謝した。"
  },
  {
    "entry": "test",
    "meaning_ja": "〈C〉(人の能力などの)試験, テスト / 《物事の》 試験 《of ...》 / 化学分析",
    "example_sentence": "I need to take a test.",
    "translated_sentence": "テストを受けなくてはなりません。"
  },
  {
    "entry": "sure",
    "meaning_ja": "《補語にのみ用いて》(人が)確信して,自信をもって  / 《補語にのみ用いて》(物事が)確実な  / (修事が)確固とした,確実な  / (人が)信頼のおける,安心のできる",
    "example_sentence": "The sure way to success is to keep trying.",
    "translated_sentence": "成功への確かな道は、努力を続けることです。"
  },
  {
    "entry": "surprise",
    "meaning_ja": "《しばしば受動態で》…‘を'驚かす,びっくりさせる  / …‘を'不意をつく,虚をつく  / …‘を'急襲する,寄襲する",
    "example_sentence": "They surprised the enemy at dawn.",
    "translated_sentence": "彼らは夜明けに敵を急襲した。"
  },
  {
    "entry": "sweet",
    "meaning_ja": "(砂糖のように)甘い;砂糖の入った  / 心地よい,香りのよい,美しい,おいしい  / 新鮮な,腐っていない  / (性質などが)人好きのする,気だてのよい,優しい,親切な  / (酒が)甘口の  /",
    "example_sentence": "The sweet aroma of flowers filled the room.",
    "translated_sentence": "花の香りが部屋を満たしていた。"
  },
  {
    "entry": "swim",
    "meaning_ja": "泳ぐ,水泳をする  / (水上・空中などに)浮かぶ  / (水などの液体で)いっぱいになる,あふれる《+with+名》・(…に)浸る《+in+名》  / 〈物ず〉ぐるぐる回るように見える;〈頭などが〉くらくらする  / 〈河など〉‘を'泳いで渡る,〈ある距離〉‘を'泳ぐ /《副詞[句]を伴って》〈人など〉‘を'泳がせる;〈船〉‘を'浮かせる",
    "example_sentence": "I love to swim in the ocean.",
    "translated_sentence": "私は海で泳ぐのが大好きです。"
  },
  {
    "entry": "talk",
    "meaning_ja": "『話す』,しゃべる,物を言う,口を利く  / (考えなどを伝えるために)《〈人〉と〈事〉について》『語る』, 話し合う,論ずる《to, with 〈人〉 about, of, on 〈事〉》  / うわさ話をする;秘密をもらす  / (言語以外の方法で)話す,合図する  / …をことを話す,を論ずる  / 〈言語・方言〉を話す,を使う  / 〈人〉に話す",
    "example_sentence": "I love to talk about books.",
    "translated_sentence": "私は本について話すのが好きです。"
  },
  {
    "entry": "taste",
    "meaning_ja": "〈U〉〈C〉味覚 / 《...の》味, 風味《of ...》 / 《…の》好み, 趣味《in, for ...》",
    "example_sentence": "The cake has a delicious taste.",
    "translated_sentence": "ケーキは美味しい味がする。"
  },
  {
    "entry": "team",
    "meaning_ja": "(スポーツの)チーム  / (共に仕事などをする)一団,一組  / (荷車を引く2頭以上の牛馬などの)一組  /",
    "example_sentence": "I am a member of the basketball team.",
    "translated_sentence": "私はバスケットボールチームのメンバーです。"
  },
  {
    "entry": "that",
    "meaning_ja": "《人・物・事・時などを指して,あるいは述べたこと全体を受けて》あれ,それ,あの(その)こと(人,物,時)  / 《前に述べた語・句・節を繰り返すことを避けて》(…の)それ  / 《後に述べる語・句・節を指して》  / 《this と対照させて二つのもののうち遠いほうを指して》あれ,そちら,あちら;(this の後者に対して)前者  / 《関係代名詞 which の先行詞に用いて》(…するところの)もの,こと",
    "example_sentence": "I'm not sure if I can do that.",
    "translated_sentence": "それはできるかどうかあやふやです。"
  },
  {
    "entry": "symbol",
    "meaning_ja": "(…の)象徴,シンボル《+of+名》  / (化学・数学・音楽などに用いられる)(…を表す)記号,符号《+for+名》",
    "example_sentence": "The Statue of Liberty is a symbol of freedom.",
    "translated_sentence": "自由の女神は自由の象徴である。"
  },
  {
    "entry": "thirteen",
    "meaning_ja": "〈C〉(数の)13;13の記号  / 〈U〉(24時間制の)13時,13分,13歳  / 《複数扱い》13人,13個  / 13の,13人の,13個の  / 《補語にのみ用いて》13歳の(で)",
    "example_sentence": "There are thirteen students in the classroom.",
    "translated_sentence": "教室には13人の生徒がいます。"
  },
  {
    "entry": "those",
    "meaning_ja": "それら, あれら, あの人たち  / 《複数名詞の反復を避けて》《…の》それ《of ...》  / 《[[those who…|those who]]の形で》(…である,…する)人たち",
    "example_sentence": "Those are my books.",
    "translated_sentence": "それらは私の本です。"
  },
  {
    "entry": "throw",
    "meaning_ja": "…を投げる,をほうる  / 《…に》…を投げつける,〈ミサイル・弾丸など〉を発射する《at ...》 / 《…に》〈光・影〉を浴びせる《on, over ...》",
    "example_sentence": "He likes to throw the ball.",
    "translated_sentence": "彼はボールを投げるのが好きです。"
  },
  {
    "entry": "time",
    "meaning_ja": "〈U〉《冠詞をつけずに》(空間に対しての)時間,時 / 〈U〉(時計で示される)時刻 / 〈U〉(ある方式で決められる)標準時 / 〈C〉〈U〉(特定の)時,頃 / 〈U〉《しばしば A ~》(ある長さの)期間 / 《しばしば複数形で》(歴史上の)時代 / 〈C〉…回,度 / 〈C〉…倍",
    "example_sentence": "I don't have enough time to finish my homework.",
    "translated_sentence": "宿題を終わらせるのに十分な時間がありません。"
  },
  {
    "entry": "together",
    "meaning_ja": "いっしょに,共に,連れ立って  / 一団(一体)となるように  / 互いに(…し合う)  / 協力して,一致して,調和して  / ひっくるめて,総合して  / 同時に,一度に",
    "example_sentence": "We worked together to finish the project.",
    "translated_sentence": "プロジェクトを完成するために一緒に働きました。"
  },
  {
    "entry": "track",
    "meaning_ja": "《しばしば複数形で》(車・船などの)通った跡,(人・動物の)足跡  / (人・獣などが通ってできた)小道  / 進路,航路  / (行動において)採るべき道,方針,人生航路  / 線路  / (競走のために設けられた)走走路,トラック;《集合的に》トラック競技  / (録音テープの)音帯  /",
    "example_sentence": "The track of the car was clearly visible on the muddy road.",
    "translated_sentence": "車の通った跡が泥だらけの道路にはっきりと見えました。"
  },
  {
    "entry": "Tuesday",
    "meaning_ja": "火曜日({略}Tu.,Tues.)",
    "example_sentence": "I'm looking forward to Tuesday.",
    "translated_sentence": "私は火曜日を楽しみにしています。"
  },
  {
    "entry": "trip",
    "meaning_ja": "旅行,出張；外出；つまづき；",
    "example_sentence": "I'm planning a trip to the beach.",
    "translated_sentence": "私はビーチへの旅行を計画しています。"
  },
  {
    "entry": "truly",
    "meaning_ja": "偽りなく,心から  / まことに,全く(indeed);ほんとうに,実に(really)  / 正確に,寸分違わず(exactly)",
    "example_sentence": "I truly believe in you.",
    "translated_sentence": "私はあなたを本当に信じています。"
  },
  {
    "entry": "truth",
    "meaning_ja": "〈U〉(物事の)真実,事実,真相  / 〈U〉真実性,真実味,ほんとうのこと  / 〈C〉真理,原理  / 〈U〉誠実さ,実直さ,正直",
    "example_sentence": "The truth will always come out eventually.",
    "translated_sentence": "真実はいつか必ず明るみに出る。"
  },
  {
    "entry": "try",
    "meaning_ja": "…‘に'努力する,‘を'努める  / …‘を'試す,してみる,使って(食べて,飲んで)みる  / 〈戸・窓など〉‘を'開けようとする  / 〈人〉‘を'裁く;〈事件〉‘を'裁判する  / 〈人〉‘を'つらい目に会わせる,悩ます  / …‘を'酷使する,疲れさせる  / 試みる,やってみる,努力する  /",
    "example_sentence": "I'm going to give it a try.",
    "translated_sentence": "試してみます。"
  },
  {
    "entry": "unable",
    "meaning_ja": "(…することが)できない",
    "example_sentence": "I am unable to attend the meeting tomorrow.",
    "translated_sentence": "明日の会議に出席することができません。"
  },
  {
    "entry": "unclear",
    "meaning_ja": "はっきりしない",
    "example_sentence": "The instructions were unclear.",
    "translated_sentence": "指示がはっきりしなかった。"
  },
  {
    "entry": "unemployment",
    "meaning_ja": "失業,失職  / 失業者[数]",
    "example_sentence": "In the discussion the accent was on unemployment.",
    "translated_sentence": "討論での重点は失業問題であった。"
  },
  {
    "entry": "unless",
    "meaning_ja": "もし…でなければ,…でないかぎり",
    "example_sentence": "I will go to the party unless I have to work late.",
    "translated_sentence": "もし遅くまで仕事がなければ、パーティーに行きます。"
  },
  {
    "entry": "us",
    "meaning_ja": "《we の目的格》我々を(に),私たちを(に)",
    "example_sentence": "We are proud of us.",
    "translated_sentence": "私たち自身を誇りに思っている。"
  },
  {
    "entry": "useful",
    "meaning_ja": "役に立つ,有益な,助けとなる；〖it is ～(for A) to do〗 Aが…するのは役に立つ",
    "example_sentence": "This app is very useful for learning languages.",
    "translated_sentence": "このアプリは言語学習にとても役に立ちます。"
  },
  {
    "entry": "very",
    "meaning_ja": "《副詞・形容詞・分詞形容詞を強めて》非常に,とても,たいへん,きわめて  / 《否定語と共に用いて》あまり,さほど,たいして(…でない)  / 《same, opposite, [one's]ownなどの前で》真に,まったく,ほんとうに  / 《古》まったくの,本物の,真の",
    "example_sentence": "He spoke very quietly.",
    "translated_sentence": "彼はとても静かに話した。"
  },
  {
    "entry": "visit",
    "meaning_ja": "〈人〉'を'訪問する,尋ねる  / …'を'見物に行く,見に行く  / 〈人〉‘の'客となる,家に滞在する  / (視察などのため)〈場所〉'を'訪れる,‘に'行く  / 《受動態で》《文》〈病気.災害などが〉…‘を'襲う,‘に'降り掛かる;〈考えなどが〉…〈に〉浮かぶ  / (…を)訪問する,見物する;《米》(…に)滞在する《+at(in)+名〈場所〉,+with +名〈人〉》  / 《米》(人と)おしゃべりする,雑談をする《+with+名〈人〉》",
    "example_sentence": "I want to visit my friend tomorrow.",
    "translated_sentence": "明日は友達に会いに行きたいです。"
  },
  {
    "entry": "volunteer",
    "meaning_ja": "(…の)志願者,有志《+for+名(doing)》  / 志願兵,義勇兵",
    "example_sentence": "They are in need of volunteers.",
    "translated_sentence": "彼らはボランティアを必要としている。"
  },
  {
    "entry": "wait",
    "meaning_ja": "待つ  / 〈事が〉そのままにしておける,延期できる  / (期待して)〈機会・合図など〉‘を'待ち受ける,待機する  / 《話》(人や物を待って)…‘を'遅らせる",
    "example_sentence": "I will wait for you here.",
    "translated_sentence": "私はここであなたを待ちます。"
  },
  {
    "entry": "angle",
    "meaning_ja": "〈C〉かど,すみ / 角度 / 観点",
    "example_sentence": "One of the angles of the triangle is 90 degrees.",
    "translated_sentence": "三角形の 1 つの角は 90 度です。"
  },
  {
    "entry": "war",
    "meaning_ja": "〈U〉戦争,戦争状態;交戦期間;〈C〉(個々の)戦争  / 〈U〉(ある特定の目的のための)争い,戦い,闘争;〈C〉(個々の)争い  / (…と)戦争をする,戦う,争う《+with(against)+名》",
    "example_sentence": "The war caused a lot of destruction.",
    "translated_sentence": "戦争は多くの破壊をもたらしました。"
  },
  {
    "entry": "wash",
    "meaning_ja": "…‘を'洗う,洗濯する  / 〈汚れ・しみなど〉‘を'洗い落とす《+名+away(off, out),+away(off, out)+名》;(…から)…‘を'洗い落とす《+名+off(out of)+名》  / 〈人・舟・家屋など〉‘を'洗い流す,押し流す《+名+away(along,down,up),+away(along,down,up)+名》,(…から)…‘を'洗い流す《+名+off(away from)+名》  / 〈波などが〉〈岸など〉‘を'洗う,‘に'打ち寄せる;〈雨などが〉…‘を'ぬらす,うるおす  / (塗料などで)…‘を'薄く塗る;…‘を'メッキする《+名+with+名》",
    "example_sentence": "I wash my clothes every week.",
    "translated_sentence": "私は毎週洗濯物を洗います。"
  },
  {
    "entry": "waste",
    "meaning_ja": "(…に)〈金・時間・路力など〉‘を'むだに使う,浪費する《+名+on+名》  / 〈好機など〉‘を'利用しそこなう  / 〈体力など〉‘を'消耗させる,衰えさせる  / 《しばしば受動態で》〈国土など〉‘を'破壊する,  / 《米俗》…‘を'殺す(kill)  / 〈体が〉(だんだん)衰える,やせる,弱る《+away》  / 《まれ》〈物が〉(少しずつ)減る,少なくなる",
    "example_sentence": "Don't waste your time on meaningless tasks.",
    "translated_sentence": "無駄な仕事に時間を使わないでください。"
  },
  {
    "entry": "which",
    "meaning_ja": "《疑問代名詞》《しばしば「of+複数名詞」を伴って》(一定数の人・物・事のうちで)どちら, どれ / 《関係代名詞》《制限用法》(…する,…した)ところの / 《関係代名詞》《非制限用法》(a)そしてそれは(を),それは…だが, (b)《副詞的な挿入節を導いて》…なことには",
    "example_sentence": "Which book do you want to read?",
    "translated_sentence": "どの本を読みたいですか？"
  },
  {
    "entry": "want",
    "meaning_ja": "〈他〉を欲する, を望む / ...したいと思う / ...を必要とする / 〈人・物が〉…を欠いている / 〈自〉困窮する / 《…に》欠ける, 必要とする《for ...》 /",
    "example_sentence": "I want a new car.",
    "translated_sentence": "私は新しい車が欲しい。"
  },
  {
    "entry": "whole",
    "meaning_ja": "《the ~,one's ~ の形で名詞の前に用いて》全体の,全部の,全…  / 《名詞の前にのみ用いて》(時間・距離などが)まる…,満…  / (物が)完全な,欠けていない;《名詞の後に置いて》丸ごとで,ひとかたまりに  / 《冠詞をつけずに複数名詞の前に用いて》ひじょうに多くの  / 《古》(人が)無傷の,(肉体的に)健康な  / 整数の,分数を含まない",
    "example_sentence": "I ate the whole pizza by myself.",
    "translated_sentence": "私は一人でピザを全部食べました。"
  },
  {
    "entry": "yesterday",
    "meaning_ja": "きのう,昨日  / 昨今,近ごろ;《古》過去  / きのうは,昨日は  / 昨今,近ごろ  / きのうの,昨今の",
    "example_sentence": "I saw her yesterday.",
    "translated_sentence": "昨日彼女を見ました。"
  },
  {
    "entry": "whilst",
    "meaning_ja": "【接続詞】《主に英・かたい書》～の間に（＝while）",
    "example_sentence": "I like to listen to music whilst I study.",
    "translated_sentence": "私は勉強する間に音楽を聴くのが好きです。"
  },
  {
    "entry": "window",
    "meaning_ja": "窓 / (銀行などの)窓口 / (店の)飾り窓  / 窓ガラス([[windowpane]])  / 窓状の物 / (封筒のあて名を見えるようにした)窓",
    "example_sentence": "I opened the window to let some fresh air in.",
    "translated_sentence": "私は新鮮な空気を入れるために窓を開けました。"
  },
  {
    "entry": "wine",
    "meaning_ja": "〈U〉〈C〉ワイン,ぶどう酒  / 〈U〉〈C〉(種々の)果実酒  / ワインカラー,赤紫色  / 〈人〉‘を'ワインでもてなす  / ワインカラーの,赤紫色の",
    "example_sentence": "I enjoy a glass of wine with dinner.",
    "translated_sentence": "夕食時にワインを楽しんでいます。"
  },
  {
    "entry": "winter",
    "meaning_ja": "冬,冬季  / 冬の,冬に適した,冬用の",
    "example_sentence": "The winter has come and snow is falling.",
    "translated_sentence": "冬がやってきて雪が降っている。"
  },
  {
    "entry": "within",
    "meaning_ja": "…以内に  / 《距離》  / 《期間・時間》  / 《範囲・制限》  / 《おもに文・古》《場所》…の内部に,の中に  / …の心の中に(で)  / 中に,内側に  / 内部",
    "example_sentence": "I will finish the report within the deadline.",
    "translated_sentence": "私は締め切りまでにレポートを終わらせます。"
  },
  {
    "entry": "without",
    "meaning_ja": "…なしに,を持たないで,を使わないで  / 《条件を表す句を作って》もし…がなければ  / 《動名詞を伴って》…しないで[は],せずに  / 《付帯状況のないこと》…しないで  / 《古》《場所》…を外に  / 《限度》…[の限度]を越えて  / 外に,外部に  / 外部  / もし…でなければ(unless)",
    "example_sentence": "I can't live without you.",
    "translated_sentence": "君なしでは生きられない。"
  },
  {
    "entry": "world",
    "meaning_ja": "《the world》世界,地球  / 《the world》(特定の時代・特徴・地域に限られた)世界,《one's world》(個人の生活・経験などの)世界  / 《the world》宇宙  / 〈C〉(特に生物がいる)天体  / 《the world》世界の人たち,世間の人たち  / 《the world》世間,世の中,現世;《文》世俗,俗事  / 《修飾語を伴って》《the world》(特定のグループの作る)世界,(動植物の生存する)界  / 《a world, the world》大量(の…),たくさん(の…)《+of+名》",
    "example_sentence": "The world is full of different cultures.",
    "translated_sentence": "世界はさまざまな文化で溢れている。"
  },
  {
    "entry": "wrong",
    "meaning_ja": "正しくない,間違っている,誤った  / (道徳的に)悪い,不正の  / 適当でない,ふさわしくない  / 《補語にのみ用いて》(…が)ぐあいが悪い,調子が悪い,故障した《+with+名》  / 裏の,逆の",
    "example_sentence": "The solution is wrong.",
    "translated_sentence": "その解答は間違っている。"
  },
  {
    "entry": "year",
    "meaning_ja": "〈C〉(グレゴリオ暦で1月1日に始まり12月31日に終わる)年,暦年(calendar year)  / 〈C〉(任意の時からの)1年間,12か月  / 〈C〉年度;(特定の)1年  / 〈C〉…歳;《複数形で》年齢  / 《複数形で》老齢(old age)  / 《複数形で》長い年月,長月,多年  / 《複数形で》時代  / 〈C〉(天文学上の)暦年",
    "example_sentence": "This year has been very difficult.",
    "translated_sentence": "今年はとても苦しいものだった。"
  },
  {
    "entry": "yes",
    "meaning_ja": "《肯定の問いに》『はい』,そうです  / 《否定の問いに》いいえ,違います  / 《呼びかけに答えて》はい  / 《相手に同意を示して》そうです,そうだ  / 《自分の言うことを強めて,しばしば yes, and(or)…の形で》いやそのうえ,しかも  /  《普通疑問の上昇調で》《相手の話の先を促して》そう,そうですか,それから  / 《相手の言葉に疑いを含めて》まさか,ほんとうですか  / 《待っている人などに対して》でご用は,でお話は  / 《自分の述べた言葉のあとで》ね,分かるかね,いいかね",
    "example_sentence": "Yes, I can definitely help you with that.",
    "translated_sentence": "はい、そのことなら間違いなくお手伝いできます。"
  },
  {
    "entry": "win",
    "meaning_ja": "〈自〉(競争・競技などで)《…に》勝つ, 優勝する《at, in ...》  / 〈他〉〈戦争・競技など〉に勝つ / 〈賞・名声など〉を勝ち取る",
    "example_sentence": "He won the competition.",
    "translated_sentence": "彼はコンペに勝った。"
  },
  {
    "entry": "characterize",
    "meaning_ja": "...の特性を示す / ...の特徴をなす / ...を特徴づける / 《...であると》...の特徴を述べる《as》",
    "example_sentence": "The careful analysis of the painting helped to characterize the artist's unique style and use of color.",
    "translated_sentence": "絵画を注意深く分析することで、画家独自のスタイルや色使いを特徴づけることができました。"
  },
  {
    "entry": "yet",
    "meaning_ja": "《否定文で》まだ / 《疑問文で》もう / 今なお",
    "example_sentence": "I haven't decided yet.",
    "translated_sentence": "まだ決めていません。"
  },
  {
    "entry": "announce",
    "meaning_ja": "…'を'発表する,公表する  / …‘の'来訪(到着,出席)を大声で告げる;〈食事〉‘の'用意ができたことを大声で知らせる  / 〈物事が〉…'を'示す  / (ラジオ・テレビで)〈試合など〉‘の'アナウンスをする  / アナウンサーとして勤める(働く)",
    "example_sentence": "The company will announce its annual financial results next week.",
    "translated_sentence": "その会社は来週、年間の財務結果を発表する予定です。"
  },
  {
    "entry": "approach",
    "meaning_ja": "〈U〉〈C〉(…に)接近,近づくこと《+to+名》  / 《しばしば複数形で》(ある目的で)(人に)近づくこと,取り入ること《+to+名》  / 〈U〉(…との)近似,類似《+to+名》  / 〈C〉(…へ)近づく道,(…への)入り口《+to+名》  / 〈C〉(問題・作品などの)扱い方,手引き;(…の)学習(研究)法《+to+名》",
    "example_sentence": "Let's try another approach to the matter.",
    "translated_sentence": "その問題に別な取り組み方をしてみよう。"
  },
  {
    "entry": "article",
    "meaning_ja": "(新聞・雑誌などの)(…についての)記事,論説《+on+名》  / (条約・契約などの)条項,箇条;《複数形で》契約  / 《複数形で》(またarticles of apprenticeship)徒弟年季契約  / (同種の物の)一個,一品,品物,商品《+of+名》  / 冠詞",
    "example_sentence": "This article explains the benefits of exercise.",
    "translated_sentence": "この記事は運動の効果を説明しています。"
  },
  {
    "entry": "you",
    "meaning_ja": "あなた[がた]は(を),君[たち]は(を)  / 《命令文》君[たち],皆さん  / 《呼び掛け》君[たち],おまえ[たち]  / 《一般に人を指して》人は(を)",
    "example_sentence": "What do you think?",
    "translated_sentence": "あなたは何を考えていますか？"
  },
  {
    "entry": "anger",
    "meaning_ja": "怒り,立腹",
    "example_sentence": "His anger was evident in his tone.",
    "translated_sentence": "彼の怒りは彼の口調に明らかだった。"
  },
  {
    "entry": "argue",
    "meaning_ja": "《...と...について》 議論する, 言い争う 《with ... about, on, over ...》 / ...を議論する / 《...するように》 ...を説得する 《into ...》",
    "example_sentence": "They often argue about politics and social issues.",
    "translated_sentence": "彼らはよく政治や社会問題について議論します。"
  },
  {
    "entry": "automatically",
    "meaning_ja": "自動的に  / 無意識に,機械的に",
    "example_sentence": "The doors will automatically close after you exit.",
    "translated_sentence": "あなたが出ると、ドアは自動的に閉まります。"
  },
  {
    "entry": "available",
    "meaning_ja": "利用できる, 役に立つ / (品物・情報などが) 手にはいる / (人が)手があいている / (法律が)効力のある",
    "example_sentence": "The room is available for rent.",
    "translated_sentence": "その部屋は賃貸で利用できます。"
  },
  {
    "entry": "background",
    "meaning_ja": "(景色・絵などの)背景,遠景  / (模様などの)地  / (事件などの)背景  / (人の)経歴,前歴",
    "example_sentence": "The background of the painting was a beautiful sunset.",
    "translated_sentence": "その絵の背景は美しい夕日だった。"
  },
  {
    "entry": "battle",
    "meaning_ja": "〈C〉(個々の)戦闘,戦い;〈U〉戦争  / 〈C〉闘争  / 〈U〉《the~》勝利;成功",
    "example_sentence": "The battle was fierce and lasted for hours.",
    "translated_sentence": "その戦闘は激しく、何時間も続いた。"
  },
  {
    "entry": "avoid",
    "meaning_ja": "を避ける,を回避する / (契約など)を無効にする",
    "example_sentence": "We should avoid eating too much junk food.",
    "translated_sentence": "私たちはジャンクフードを食べすぎるのを避けるべきです。"
  },
  {
    "entry": "benefit",
    "meaning_ja": "〈C〉〈U〉ためになること(もの),利益,恩恵  / 〈C〉(国家などにより支払われる)給付金,手当  / 〈U〉慈善興行,募金興行",
    "example_sentence": "Regular exercise has many benefits for our health.",
    "translated_sentence": "定期的な運動は私たちの健康に多くの利益をもたらします。"
  },
  {
    "entry": "beer",
    "meaning_ja": "〈U〉ビール / 〈C〉コップ1杯(びん1本)のビール / 発酵性飲料",
    "example_sentence": "I enjoy drinking beer with my friends.",
    "translated_sentence": "私は友達とビールを飲むのが楽しいです。"
  },
  {
    "entry": "blind",
    "meaning_ja": "目の見えない,盲目の(sightless)  / 《補語にのみ用いて》(…を)見る目がない,気がついていない《+to+名》  / 盲目的な,めくらめっぽうの(reckless)  / (特に車の運転者に)隠れて見えない  / (通りなどが)行き止まりの,出口のない;(建築物が)窓のない",
    "example_sentence": "The blind man crossed the street with the help of his guide dog.",
    "translated_sentence": "その目の見えない男性は、盲導犬の助けを借りて通りを渡りました。"
  },
  {
    "entry": "bind",
    "meaning_ja": "...を縛る, を束ねる / を巻く, を巻きつける / (人)を束縛する",
    "example_sentence": "She used a rope to bind the firewood together.",
    "translated_sentence": "彼女はロープを使って薪を一緒に縛りました。"
  },
  {
    "entry": "ease",
    "meaning_ja": "〈U〉(精神的な)気楽さ, (肉体的に)楽であること / 容易さ",
    "example_sentence": "The new software is designed to ease the process of data analysis.",
    "translated_sentence": "新しいソフトウェアはデータ分析のプロセスを簡素化するために設計されています。"
  },
  {
    "entry": "block",
    "meaning_ja": "(木・石などの,通例平らな面のある)『かたまり』  / 《米》『区画』,街区  / 『妨害物』,障害物([[obstacle]]);(障害によって生じた)停滞,渋滞",
    "example_sentence": "The city block was [[filled with]] people.",
    "translated_sentence": "街区は人で埋め尽くされていた。"
  },
  {
    "entry": "bomb",
    "meaning_ja": "爆弾",
    "example_sentence": "The police found a bomb in the abandoned building.",
    "translated_sentence": "警察は放棄された建物で爆弾を見つけました。"
  },
  {
    "entry": "brand",
    "meaning_ja": "(商品などの)種類,品質《+of+名》  / 商標,銘柄  / (家蓄・商品などに付けて所有主・品質などを示す)焼き印,焼きごて  / (昔罪人に押した)烙印(らくいん);汚名  / 《文》燃えさし",
    "example_sentence": "This store offers a wide variety of brands.",
    "translated_sentence": "この店舗では様々なブランドの商品が取り扱われています。"
  },
  {
    "entry": "cap",
    "meaning_ja": "(縁のない)帽子,制帽  / (形・用途が)帽子に似たもの;万年筆のキャップ,時計の中ぶた,びんのふた,キノコのかさなど  / (銃弾の)雷管;おもちゃのピストル玉  / 頂上,最高",
    "example_sentence": "He was wearing a red cap.",
    "translated_sentence": "彼は赤いキャップをかぶっていた。"
  },
  {
    "entry": "calculate",
    "meaning_ja": "…'を'見積もる,算定する  / 《受動態で》(ある目的で)…'を'意図する(intend)  / (推理・常識・体験によって)…'を'予想する,判断する,‘と'思う  / 見積もる;計算する",
    "example_sentence": "I need to calculate the cost of the project.",
    "translated_sentence": "私はプロジェクトの費用を見積もる必要があります。"
  },
  {
    "entry": "calm",
    "meaning_ja": "(海・湖などが)穏やかな,静かな;(天候などが)穏やかな  / (心・態度などが)平静な,落ち着いた(composed)",
    "example_sentence": "The lake was calm and peaceful.",
    "translated_sentence": "湖は穏やかで平和だった。"
  },
  {
    "entry": "camera",
    "meaning_ja": "カメラ,写真機  / テレビ[用]カメラ",
    "example_sentence": "I bought a new camera yesterday.",
    "translated_sentence": "昨日新しいカメラを買いました。"
  },
  {
    "entry": "carpet",
    "meaning_ja": "(部屋いっぱいに敷く)じゅうたん,もうせん  / 《比喩(ひゆ)的に》一面をおおうもの,辺りいっぱいに広がるもの",
    "example_sentence": "I need to buy a new carpet for my living room.",
    "translated_sentence": "リビングルームに新しいじゅうたんを買わなければなりません。"
  },
  {
    "entry": "cent",
    "meaning_ja": "〈C〉セント(1ドルの1/100;米国・カナダの貨幣単位;《略》￠)  / 〈C〉1セント銅貨  / 〈U〉(単位としての)100",
    "example_sentence": "I found a penny on the street.",
    "translated_sentence": "私は通りで1セント硬貨を見つけました。"
  },
  {
    "entry": "chain",
    "meaning_ja": "鎖;(装飾用の)鎖  / 《複数形で》束縛,拘束;囚人をつなぐ鎖  / (物事の)連続,つながり《+of+名》  / (商店・銀行・ホテルなどの)チェーン(一連の店が同一資本のもとで連携して経営される方式;その店)  / チェーン(測量で用いられる単位;約21.7m)  /",
    "example_sentence": "He used a chain to secure his bike.",
    "translated_sentence": "彼は自転車を固定するために鎖を使った。"
  },
  {
    "entry": "cable",
    "meaning_ja": "〈C〉〈U〉 (麻・針金をより合わせた) 太綱 /  (電信などの) ケーブル線 /〈C〉海底電信, 外国電報 /",
    "example_sentence": "I need to buy a new cable for my phone.",
    "translated_sentence": "私は携帯電話用の新しいケーブルを買う必要があります。"
  },
  {
    "entry": "chest",
    "meaning_ja": "胸；肺；(頑丈な)収納箱；〖a ～ of A〗Aの1箱分；金庫",
    "example_sentence": "He kept his valuable possessions in a chest.",
    "translated_sentence": "彼は貴重品を収納箱に保管していた。"
  },
  {
    "entry": "chocolate",
    "meaning_ja": "〈U〉〈C〉チョコレート;《複数形で》チョコレート菓子  / 〈U〉チョコレート飲料  / 〈U〉チョコレート色  / チョコレート製の,チョコレト入りの  / チョコレート色の",
    "example_sentence": "I love eating chocolate.",
    "translated_sentence": "私はチョコレートを食べるのが大好きです。"
  },
  {
    "entry": "circumstance",
    "meaning_ja": "〈C〉状況；環境；事情；経済状況；境遇 ; 通例",
    "example_sentence": "I am not able to control the circumstances, but I can control my reaction to them.",
    "translated_sentence": "私は状況をコントロールすることはできませんが、それに対する反応はコントロールできます。"
  },
  {
    "entry": "cloud",
    "meaning_ja": "雲  / (…の)雲状のもの《+of+名》  / (昆虫・鳥・飛行機などの)大群,大集団《+of+名》  / (疑惑・苦悩などの)暗い影《+of+名》  / (鏡・ガラスなどの)くもり",
    "example_sentence": "The sky was full of clouds today.",
    "translated_sentence": "今日は空が雲でいっぱいだった。"
  },
  {
    "entry": "comment",
    "meaning_ja": "(…についての)論評,解説,注釈,意見《+on(upon)+名》  / うわさ,世評",
    "example_sentence": "I would like to make a comment on this issue.",
    "translated_sentence": "この問題について論評したいと思います。"
  },
  {
    "entry": "contact",
    "meaning_ja": "〈U〉(体・物などの)(…との)接触,(…と)触れること《+with+名》  / 〈U〉(…との)連絡,接続《+with+名》  / 〈U〉〈C〉(…との)つきあい,関係,交際《+with+名》  / 〈C〉《話》縁故,つて  / 〈U〉(電気の)接触,接続  / 〈C〉(患者と接触した)保菌容疑者  /",
    "example_sentence": "Please avoid contact with the hot stove.",
    "translated_sentence": "熱いコンロとの接触は避けてください。"
  },
  {
    "entry": "contribute",
    "meaning_ja": "(…に)〈金銭など〉'を'寄付する,〈時間・努力など〉'を'ささげる《+名+to(toward, for)+名(doing)》  / (新聞・雑誌に)〈作品など〉'を'寄稿する《+名+to+名》  / (…に)寄付する,ささげる,寄与する《+to(toward, for)+名(doing)》  / (…の)一因となる《+to+名(doing)》  / (新聞・雑誌に)寄稿する《+to+名》",
    "example_sentence": "I want to contribute to the charity organization.",
    "translated_sentence": NaN
  },
  {
    "entry": "cough",
    "meaning_ja": "せきをする,せき払いする  / せきのような音を出す  / …'を'せきをして吐き出す《+up(out)+名,+名+up(out)》",
    "example_sentence": "My cough is getting worse.",
    "translated_sentence": "私の咳はひどくなりつつあります。"
  },
  {
    "entry": "effect",
    "meaning_ja": "〈C〉〈U〉結果  / 〈C〉〈U〉(…への)効果,効きめ,影響《+on(upon)+名》  / 〈C〉(色・音・形などの)印象,感銘  / 《複数形で》品物;身の回り品;動産,財産",
    "example_sentence": "The medication had a positive effect on her health.",
    "translated_sentence": "その薬は彼女の健康に良い結果をもたらしました。"
  },
  {
    "entry": "emotional",
    "meaning_ja": "感情の,の情緒の  / 感情的な,感動しやすい  / (またemotive)感情に訴える",
    "example_sentence": "The lawyer made an emotional appeal to the jury.",
    "translated_sentence": "弁護士は陪審員に感情的な訴えをした。"
  },
  {
    "entry": "culture",
    "meaning_ja": "〈U〉教養;修養;教化  / 〈C〉〈U〉文化(主として精神面をさし,生活・習慣・物の考え方などを含む)Greek cultureギリシア文化  / 〈U〉(…の)耕作;栽培,養殖,培養《+of+名》",
    "example_sentence": "The culture of this country is very unique.",
    "translated_sentence": "この国の文化は非常に独特です。"
  },
  {
    "entry": "customer",
    "meaning_ja": "(店の)お客,得意先,顧客  / 《話》《形容詞を伴って》(…な)やつ,男",
    "example_sentence": "The customer asked for assistance with finding a specific product.",
    "translated_sentence": "その顧客は、特定の製品を見つけるための支援を求めた。"
  },
  {
    "entry": "duty",
    "meaning_ja": "義務；仕事；関税；従順さ",
    "example_sentence": "It is our duty to help those in need.",
    "translated_sentence": "困っている人々を助けるのは私たちの義務です。"
  },
  {
    "entry": "decision",
    "meaning_ja": "〈C〉(問題・疑義などの)決定,解決;結論《+of+名》  / 〈U〉決心,決断  / 〈C〉(法廷での)判決;判定  / 〈U〉決断力",
    "example_sentence": "I have made a decision.",
    "translated_sentence": "私は決定を下しました。"
  },
  {
    "entry": "depression",
    "meaning_ja": "うつ病、憂鬱、不景気、低気圧",
    "example_sentence": "The global economy is showing signs of depression.",
    "translated_sentence": "世界経済は不況の兆しを見せている。"
  },
  {
    "entry": "designer",
    "meaning_ja": "設計者,デザイナー",
    "example_sentence": "The designer created a beautiful logo for the company.",
    "translated_sentence": "デザイナーは会社のために美しいロゴを作りました。"
  },
  {
    "entry": "dare",
    "meaning_ja": "あえて...する / 《~ to do》思い切って…する, ...する勇気がある/ 〈危険など〉立ち向かう / 〈人〉に挑む",
    "example_sentence": "Who dares wins.",
    "translated_sentence": "勇気ある者が勝つ。"
  },
  {
    "entry": "direction",
    "meaning_ja": "〈C〉〈U〉方向,方角;方面  / 〈C〉(思想・行動の)傾向,(事態が向かう)方向,(情報の)線  / 〈U〉監督,管理;指揮,指導  / 〈C〉《通例複数形で》(…についての)指示,指図,命令《+for(about)+名/+asto名(wh-句)》  / 〈U〉(音楽・演劇・映画などの)指揮,演出,監督",
    "example_sentence": "Can you give me directions to the nearest train station?",
    "translated_sentence": "最寄りの駅への道順を教えていただけますか？"
  },
  {
    "entry": "disturb",
    "meaning_ja": "…をかき乱す, を騒がしくする  / 〈人〉を不安にする,を心配させる / 〈人・行動・安眠など〉を邪魔をする, を妨害する([[bother]])",
    "example_sentence": "The loud noise from the construction site disturbed my concentration.",
    "translated_sentence": "建設現場からの大きな音が私の集中力をかき乱しました。"
  },
  {
    "entry": "drag",
    "meaning_ja": "〈重い物〉‘を'引きずる(haul)  / 《副詞[句]を判って》…‘を'引っ張ってゆく  / (網などで)(…を捜して)〈川・湖など〉‘の'底をさらう《+名+for+名》  / …‘を'だらだらと引き延ばす《+out+名,+out》  / (地面に)引きずる《+along》  / 〈物が〉重そうに動く;のろのろ進む  / だらだらと長引く《+on(out)》",
    "example_sentence": "He had to drag the heavy box up the stairs.",
    "translated_sentence": "彼は重い箱を引きずって階段を上らなければならなかった。"
  },
  {
    "entry": "delivery",
    "meaning_ja": "〈U〉〈C〉《...への》配達《for ...》 / 話しぶり, 話し方 / 出産 / 〈U〉《文》《…からの》釈放,解放《from ...》",
    "example_sentence": "The delivery of the package was delayed due to bad weather.",
    "translated_sentence": "荷物の配達が悪天候のため遅れました。"
  },
  {
    "entry": "determine",
    "meaning_ja": "を特定する,を明らかにする,を突き止める / を決定する / を決心する / 《...することを》...に決心させる《 to do 》 / を左右する / を測定する",
    "example_sentence": "I need to determine the best course of action.",
    "translated_sentence": "私は最善の行動を決定する必要があります。"
  },
  {
    "entry": "engineer",
    "meaning_ja": "技師,技術家  / 《米》(特に鉄道の)機関士  / 巧みに事を処理する人,手腕家  / (陸軍の)工兵;(海軍の)機関士官",
    "example_sentence": "He is a talented engineer who specializes in software development.",
    "translated_sentence": "彼はソフトウェア開発を専門とする才能あるエンジニアです。"
  },
  {
    "entry": "envelope",
    "meaning_ja": "封筒  / 包むもの",
    "example_sentence": "I put the letter in the envelope.",
    "translated_sentence": "私は手紙を封筒に入れました。"
  },
  {
    "entry": "extreme",
    "meaning_ja": "《名詞の前にのみ用いて》極度の,はなはだしい  / いちばん端の,最も遠い  / 極端な,過激な  / 月並みでない,異常な",
    "example_sentence": "They are the extreme cases.",
    "translated_sentence": "それは極端な場合だ。"
  },
  {
    "entry": "examine",
    "meaning_ja": "を調べる / を診察する / に《...の》試験をする《ln,on ...》 / を尋問する",
    "example_sentence": "I need to examine the evidence before making a decision.",
    "translated_sentence": "決定する前に証拠を調査する必要があります。"
  },
  {
    "entry": "fail",
    "meaning_ja": "失敗する / 《~ to do》...し損なう / 衰える / (いざというときに)〈人〉の役にたたない / 〈学科・試験など〉に落第する",
    "example_sentence": "I tried my best, but I failed the exam.",
    "translated_sentence": "一生懸命頑張ったけど、試験に落ちちゃった。"
  },
  {
    "entry": "exchange",
    "meaning_ja": "《...と》...を取り替える《for ...》 / 《人と》…を取り交わす《with ...》",
    "example_sentence": "I need to exchange this shirt for a smaller size.",
    "translated_sentence": "このシャツを小さいサイズと交換しなければなりません。"
  },
  {
    "entry": "fashion",
    "meaning_ja": "〈U〉流行；やり方；様式〈C〉流行しているもの；社交界",
    "example_sentence": "She has a great sense of fashion.",
    "translated_sentence": "彼女はファッションセンスが素晴らしいです。"
  },
  {
    "entry": "fancy",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "fence",
    "meaning_ja": "フェンス，囲い　",
    "example_sentence": "The dog jumped over the fence.",
    "translated_sentence": "犬はフェンスを飛び越えた。"
  },
  {
    "entry": "furniture",
    "meaning_ja": "(特にテーブル・いす・ベッドなどの動かせる)家具・(集合的) 家具 (a piece of ～ 家具一点); 備品; 調度.",
    "example_sentence": "I need to buy some new furniture for my living room.",
    "translated_sentence": "リビングルームのために新しい家具を買う必要があります。"
  },
  {
    "entry": "future",
    "meaning_ja": "〈U〉〈C〉未来,将来  / 〈C〉将来の可能性,(有望な)将来性  / 《the ~》(文法で)未来時制,未来形  / 《複数形で》先物[契約]",
    "example_sentence": "The future is full of possibilities.",
    "translated_sentence": "未来は可能性に満ちている。"
  },
  {
    "entry": "gain",
    "meaning_ja": "手に入れる,身につける；〈利益など〉を得る / 増す",
    "example_sentence": "She worked hard to gain the trust of her colleagues.",
    "translated_sentence": "彼女は同僚の信頼を得るために一生懸命働きました。"
  },
  {
    "entry": "gate",
    "meaning_ja": "(…への)門,通用門《+to(of)+名》;(門の)とびら  / (ダム・運河などの)水門  / (競技場・劇場などの)[有料]入場者数  / (またgate money)総入場料",
    "example_sentence": "The gate to the park is closed.",
    "translated_sentence": "公園への門は閉まっています。"
  },
  {
    "entry": "gear",
    "meaning_ja": "〈C〉(動力を伝動する)歯車,ギヤ  / 〈U〉歯車装置,伝動装置,ギヤ  / 〈U〉(特定の機能を果たす)装置  / 〈U〉(ある仕事・活動のための)道具一式  / …‘に'ギヤ(伝動装置)を取り付ける  / (…に)…‘を'かみ合わせる,連係させる《+名+to+名》  / (…に)ギヤがかみ合う《+into+名》",
    "example_sentence": "I need to replace the gear in my car.",
    "translated_sentence": "私は車の歯車を交換する必要があります。"
  },
  {
    "entry": "grab",
    "meaning_ja": "…‘を'ぎゅっとつかむ,ひったくる / (…を)ひっつかむ《+at+名》;(…に)さっと手を伸ばす《+for+名》 / 不意につかむ / 取り込む / 横取りする / 逮捕する / (人の心)をとらえる,〈人に〉強い印象を与える / を軽く飲み(食い)する / 〈...を〉大急ぎで取る,利用する",
    "example_sentence": "I grab the book from the shelf.",
    "translated_sentence": "私は本を棚からぎゅっとつかむ。"
  },
  {
    "entry": "grade",
    "meaning_ja": "《米》(小・中・高校の)学年(小学校から12年まで通算する)  / 《おもに米》(学業の)成績,評点  / (位階・品質・価値などの)階級,等級  / 《米》(道路・線路などの)傾斜,勾配(こうばい)(《英》gradient)  /",
    "example_sentence": "My grade was highest in the class.",
    "translated_sentence": "クラスで一番高い点数だった。"
  },
  {
    "entry": "grand",
    "meaning_ja": "壮大な / 威厳のある / 最高の / 重大な / 全部の / 《話》 素敵な / 《米俗》 1,000ドル",
    "example_sentence": "The grand palace stood proudly at the center of the city.",
    "translated_sentence": "壮大な宮殿が市の中心に誇らしげに立っていました。"
  },
  {
    "entry": "introduction",
    "meaning_ja": "〈U〉〈C〉(…に人を)紹介すること《+of+名〈人〉+to+名》  / 〈U〉(…に物・事を)紹介すること,取り入れること《+of+名+into(to, among)+名》  / 〈C〉(本論・主題に入る前の)序論,序説  / 〈C〉(…への)入門[書]《+to+名》",
    "example_sentence": "Let me give you a brief introduction of John to Mary.",
    "translated_sentence": "メアリーに、私からジョンの簡単な紹介をさせてください。"
  },
  {
    "entry": "flow",
    "meaning_ja": "流れ / 勢い / 流動",
    "example_sentence": "There is a constant flow of traffic on this road.",
    "translated_sentence": "この通りは車の流れが絶えない。"
  },
  {
    "entry": "immediately",
    "meaning_ja": "ただちに,即座に,すぐに / 直接に,じかに / ...するや否や",
    "example_sentence": "He responded immediately to my request.",
    "translated_sentence": "彼は私のリクエストにただちに応じました。"
  },
  {
    "entry": "harm",
    "meaning_ja": "〈U〉害,損害 / 悪意 / 不都合",
    "example_sentence": "I mean no harm.",
    "translated_sentence": "私には悪意はありません。"
  },
  {
    "entry": "height",
    "meaning_ja": "〈U〉(物の)高さ《+of+名》  / 〈U〉《時にa~》(一定の平面からの)高さ,海抜,標高  / 〈U〉〈C〉身長  / 〈C〉《しばしば複数形で単数扱い》高い所,高台  / 〈C〉《the~》絶頂,極致,まっ最中",
    "example_sentence": "The height of the building is impressive.",
    "translated_sentence": "建物の高さは感動的です。"
  },
  {
    "entry": "hero",
    "meaning_ja": "(偉業・勇敢な行為などで名を知られた)英雄,勇士,ヒーロー  / (詩・小説・映画などの)主人公,主役  / 《米話》=hero sandwich",
    "example_sentence": "He is considered a hero for his brave actions during the war.",
    "translated_sentence": "彼は戦争中の勇敢な行動により英雄とされています。"
  },
  {
    "entry": "instrument",
    "meaning_ja": "〈C〉(主として精密な) 器具 / 楽器 / 手段",
    "example_sentence": "He plays a musical instrument.",
    "translated_sentence": "彼は楽器を演奏します。"
  },
  {
    "entry": "ignore",
    "meaning_ja": "…‘を'無視する,顧みない",
    "example_sentence": "Please ignore the noise and focus on your work.",
    "translated_sentence": "騒音を無視して仕事に集中してください。"
  },
  {
    "entry": "ill",
    "meaning_ja": "《補語にのみ用いて》病気で,気分が悪い(sick)  / 《名詞の前にのみ用いて》不十分な,好ましくない;正常でない  / 《名詞の前にのみ用いて》不運な,不吉な  / 《名詞の前にのみ用いて》(道徳的に)悪い,邪悪な,敵意(悪意)のある;不きげんな  / 《名詞の前にのみ用いて》有害な,悪い,損害を与える  / 悪く,不正に;残酷に  / 意地悪く,不親切に;不満足に,不十分に  / ほとんど…ない(scarcely)  / 《分詞と共に複合語を作って》悪く,まずく,不完全に  / 〈U〉  / 悪,罪悪  / 〈U〉危害,災難  / 〈C〉《しばしば複数形》苦しみ(悩み)の種,不幸,病気",
    "example_sentence": "She is ill and cannot come to work today.",
    "translated_sentence": "彼女は病気で今日は仕事に来れません。"
  },
  {
    "entry": "industrial",
    "meaning_ja": "産業(工業)の,産業(工業)による  / 高度に発達した産業(工業)を持つ  / 産業(工業)用の",
    "example_sentence": "The industrial sector is experiencing rapid growth.",
    "translated_sentence": "産業部門は急速な成長を遂げています。"
  },
  {
    "entry": "injury",
    "meaning_ja": "負傷,損害,損傷  / (名誉などを)傷つけること,侮辱《+to+名》",
    "example_sentence": "He suffered a serious injury during the game.",
    "translated_sentence": "彼は試合中に重傷を負った。"
  },
  {
    "entry": "impress",
    "meaning_ja": "〈他〉《…で》…を感銘させる,に印象づける《with》；を銘記させる；《…に》をつける,刻み込む《on》；（印などを）…につける《with》",
    "example_sentence": "She always impresses me with her intelligence.",
    "translated_sentence": "彼女はいつも知性で私を感心させます。"
  },
  {
    "entry": "interview",
    "meaning_ja": "(就職のためなどの)面接,面会  / (取材のための)(…との)会見,インタビュー《+with+名》  / 訪問記事,インタビュー放送",
    "example_sentence": "I had an interview with a famous actor yesterday.",
    "translated_sentence": "昨日、有名な俳優にインタビューをしました。"
  },
  {
    "entry": "introduce",
    "meaning_ja": "〈人〉を紹介する  / 《…に》…を初めて取り入れる, を導入する《to, into ...》  / 《…を》〈人〉に手ほどきする,初めて経験させる《to ...》  / 《…に》〈議案など〉を提出する《into ...》  / 《…に》…を持ち込む《into ...》  / 《…で》…を始める《with ...》",
    "example_sentence": "I will introduce you to my friends.",
    "translated_sentence": "私は友達にあなたを紹介します。"
  },
  {
    "entry": "intention",
    "meaning_ja": "〈U〉〈C〉意図 / 〈C〉意図したもの",
    "example_sentence": "She had no intention of going to the party.",
    "translated_sentence": "彼女はパーティーに行くつもりはなかった。"
  },
  {
    "entry": "identify",
    "meaning_ja": "〈他〉〈人・物〉を見分ける, /《...と》を同じものと考える",
    "example_sentence": "Can you identify the person in this photo?",
    "translated_sentence": "この写真の人物を特定できますか？"
  },
  {
    "entry": "mission",
    "meaning_ja": "《…への》使節団, 派遺団《to ...》 / (派遺される人または団体の)任務,使命",
    "example_sentence": "The mission was sent to negotiate a peace treaty.",
    "translated_sentence": "使節団は平和条約の交渉のために派遣されました。"
  },
  {
    "entry": "journey",
    "meaning_ja": "旅行,旅  / 旅程,行程  / 《比喩(ひゆ)的に》旅路;(…への)道程,道《+to+名》  / 旅行する",
    "example_sentence": "I am planning a journey to Japan next month.",
    "translated_sentence": "来月、私は日本への旅行を計画しています。"
  },
  {
    "entry": "language",
    "meaning_ja": "〈U〉言語,言葉  / 〈C〉(一国家・一民族の持つ)国語,…語  / 〈U〉(文字・話し言葉為外の)伝達記号,人工言語;(動物の)伝達手段(鳴き声・身ぶりなど)  / 〈U〉(個人・特定のグループなどの)言葉遣い,語法,(専門の)用語,術語  / 〈U〉語学,言語学(linguistics)",
    "example_sentence": "English is my favorite language.",
    "translated_sentence": "私の好きな言語は英語です。"
  },
  {
    "entry": "minority",
    "meaning_ja": "〈C〉《単数形で》(ある集団または全体を構成する,多数に対する)少数,(過半数に対する)半数以下  / (またminority group)〈C〉(人種・宗教・政治の点で)少数派,少数グループ,少数民族  / 〈U〉未成年;未成年期",
    "example_sentence": "The rights of the minority should be protected.",
    "translated_sentence": "少数派の権利は保護されるべきです。"
  },
  {
    "entry": "mirror",
    "meaning_ja": "…‘を'鏡に映す;〈鏡が〉…‘を'映す  / (鏡に映すように)…‘を'映し出す,描き出す",
    "example_sentence": "She looked at herself in the mirror.",
    "translated_sentence": "彼女は鏡で自分自身を見た。"
  },
  {
    "entry": "mix",
    "meaning_ja": "〈複数のもの〉‘を'混ぜ合わせる,混合する,混同する  / …‘を'混ぜ合わせて作る,調合して作る  / …‘を'寄せ集める,まとめる  / 〈物が〉(…と)混ざる,混合する《+with+名》  / 〈人が〉(他の人と)交わる,交際する《+with+名》",
    "example_sentence": "I like to mix different colors together when painting.",
    "translated_sentence": "絵を描く時に、異なる色を混ぜ合わせるのが好きです。"
  },
  {
    "entry": "iron",
    "meaning_ja": "〈U〉鉄 / 鉄のようなこと〈C〉鉄製の器具 / アイロン / 手かせ,足かせ",
    "example_sentence": "Iron is a strong and durable metal.",
    "translated_sentence": "鉄は強くて丈夫な金属です。"
  },
  {
    "entry": "manner",
    "meaning_ja": "マナー / 方法 / 様式 / 態度,物腰 / 行儀,礼儀 / 風習",
    "example_sentence": "He has good manners.",
    "translated_sentence": "彼はマナーが良い。"
  },
  {
    "entry": "moon",
    "meaning_ja": "《the~》(天体の)月  / 〈U〉《しばしばa~》(さまざまに形を変える)月  / 〈C〉(惑星の)衛星(satellite)  / 〈C〉《複数形で》(特に太陰暦の)ひと月  / 〈U〉月光(moonlight)  /",
    "example_sentence": "The moon is shining brightly.",
    "translated_sentence": "月が明るく輝いている。"
  },
  {
    "entry": "motor",
    "meaning_ja": "(電気の)モーター,電動機  / エンジン,(特に)内燃機関  / 《英》自動車(motorcar)",
    "example_sentence": "The motor of the car stopped working.",
    "translated_sentence": "車のモーターが動かなくなりました。"
  },
  {
    "entry": "mouse",
    "meaning_ja": "ハツカネズミ(英米の家によく出没する小型のネズミ;ほが国の家に出没する大型のネズミはrat)  / 《話》臆病者,内気な人",
    "example_sentence": "The mouse ran from the cat.",
    "translated_sentence": "ネズミは猫から逃げた。"
  },
  {
    "entry": "peace",
    "meaning_ja": "〈U〉平和 / 《しばしばP-》講和, 講和条約 / 《通例the ~》(社会の)治安, 秩序 / 静けさ,穏やかさ",
    "example_sentence": "We hope for peace.",
    "translated_sentence": "私たちは平和を願っています。"
  },
  {
    "entry": "narrow",
    "meaning_ja": "(幅の) 狭い / 範囲(種類)が限られた / 厳密な,正確な / やっとの,かろうじての",
    "example_sentence": "The road is too narrow for two cars to pass.",
    "translated_sentence": "道路は二台の車が通るには狭すぎます。"
  },
  {
    "entry": "operate",
    "meaning_ja": "〈機械・身体器官などが〉動く,作動する  / 〈薬などが〉(…に)利く,効果を表す,作用する,影響する《+on(upon)+名》  / (人に…の)手術をする《+on(upon)+名〈人〉+for+名》  / (…に対して)軍事行動をする《+against+名》  / 〈機械・装置など〉‘を'動かす  / …‘を'経営する,運営する;〈株など〉‘を'売買する",
    "example_sentence": "The machine is easy to operate.",
    "translated_sentence": "その機械は操作が簡単です。"
  },
  {
    "entry": "occasion",
    "meaning_ja": "〈C〉(事が起こる,特定の)時 / 出来事 / 〈U〉〈C〉機会 / 理由",
    "example_sentence": "I bought a new dress for a special occasion.",
    "translated_sentence": "特別な場合に新しいドレスを買いました。"
  },
  {
    "entry": "organize",
    "meaning_ja": "〈他〉〈物事〉を系統だてる, を組織的にまとめる / 〈団体など〉を組織する",
    "example_sentence": "I need to organize my closet.",
    "translated_sentence": "私はクローゼットを整理する必要があります。"
  },
  {
    "entry": "panic",
    "meaning_ja": "〈C〉〈U〉慌てふためき,恐慌,狼狽 / 〈C〉経済恐慌,パニック  / 《単数形で》《米俗》とてもおかしなもの,珍無類なもの",
    "example_sentence": "The crowd was in a panic.",
    "translated_sentence": "群集はあわてふためいた。"
  },
  {
    "entry": "partner",
    "meaning_ja": "(いっしょに活動する)相手,仲間  / 共同経営者,共同出資者  / (二人以上が組んで敵に対するゲーム・競技の)味方,パートナー  / (ダンスの)相手  / 夫または妻,配偶者",
    "example_sentence": "My partner and I have been married for four years.",
    "translated_sentence": "私とパートナーは4年間結婚しています。"
  },
  {
    "entry": "occasionally",
    "meaning_ja": "たまに, ときどき, 時折に",
    "example_sentence": "I occasionally go for a run in the morning.",
    "translated_sentence": "朝、時々ランニングに行きます。"
  },
  {
    "entry": "percent",
    "meaning_ja": "パーセント,100につき(…の割),100分(の…)《+of+名》《記号》%;《略》p.c.)  / …パーセントだけ",
    "example_sentence": "The price of rice rose by three percent.",
    "translated_sentence": "米の値段が３パーセント上がった。"
  },
  {
    "entry": "operator",
    "meaning_ja": "〈C〉(機械・装置を) 運転する人 / 《米》(電話の)交換手 / (会社などの)経営者 / 《話》ずるがしこい人",
    "example_sentence": "The operator of the machine is responsible for its maintenance.",
    "translated_sentence": "機械のオペレーターは、そのメンテナンスに責任を持っています。"
  },
  {
    "entry": "planet",
    "meaning_ja": "惑星,遊星",
    "example_sentence": "There are eight planets in our solar system.",
    "translated_sentence": "私たちの太陽系には8つの惑星があります。"
  },
  {
    "entry": "poem",
    "meaning_ja": "(1編の)詩,詩歌 / 詩的な文,美文 / 詩情豊かな物",
    "example_sentence": "She wrote a beautiful poem about love.",
    "translated_sentence": "彼女は愛についての美しい詩を書いた。"
  },
  {
    "entry": "poetry",
    "meaning_ja": "〖集合的に〗詩,詩歌；(ジャンルとしての)詩,詩歌；韻文；詩的な美しさ",
    "example_sentence": "She enjoys reading poetry in her free time.",
    "translated_sentence": "彼女は暇な時間に詩を読むことを楽しんでいます。"
  },
  {
    "entry": "positive",
    "meaning_ja": "肯定した,同意の  / 実際的な,積極的な,建設的な  / 《補語にのみ用いて》確信のある,自信のある  / (事が)疑問の余地がない,明確な;(言葉が)はっきりした  / 《名詞の前にのみ用いて》《話》全くの,文字どおりの  / (生体の反応が)陽性の  / (数が)正の,プラスの;(気電が)陽の;(写真で)陽画の  / (形容詞・副詞の比較変化で)原級の",
    "example_sentence": "I received positive feedback on my presentation.",
    "translated_sentence": "私のプレゼンテーションに肯定的なフィードバックを受けました。"
  },
  {
    "entry": "practice",
    "meaning_ja": "『…を練習する』 / (習慣的に)『…を実行する』,を実践する / 〈弁護士・医師〉を開業する / 《…を》練習する,けいこをする《at, on, with ...》 / 《弁護士・医者として》開業する,開業している《as ...》",
    "example_sentence": "I practice playing the piano every day.",
    "translated_sentence": "私は毎日ピアノを演奏する練習をします。"
  },
  {
    "entry": "pleasant",
    "meaning_ja": "(物事が)人に喜びを与える, 楽しい, 心地よい",
    "example_sentence": "The weather today is pleasant.",
    "translated_sentence": "今日の天気は快適です。"
  },
  {
    "entry": "pressure",
    "meaning_ja": "〈U〉押すこと,押しつけること,圧搾,圧縮;〈C〉〈U〉圧力,圧力の強さ  / 〈U〉圧迫,強制  / 〈U〉(不快な)圧迫感  / 〈C〉〈U〉(精神的な)重荷,苦脳;(時間・金銭的)切迫  / 〈U〉多忙,あわただしさ  / 《おもに米》…‘に'圧力をかける,強制する(《英》pressurise)",
    "example_sentence": "I feel a lot of pressure to succeed in my career.",
    "translated_sentence": "私は自分のキャリアで成功するために多くのプレッシャーを感じています。"
  },
  {
    "entry": "print",
    "meaning_ja": "…‘を'印刷する  / 〈原稿・本など〉‘を'出版する  / …‘を'活字体で書く  / 〈写真〉‘を'焼きつける,〈印画〉‘を'つくる  / (…に)…‘を'押してつける;(心に)…‘を'刻みつける,印象づける《+名+on+名》  / (印刷・焼きつけなどによって)〈活字・模様・写真などが〉現れる,写る;〈紙などが〉印刷できる  / 〈機械が〉印刷する  / 活字体で書く",
    "example_sentence": "I need to print this document.",
    "translated_sentence": "この文書を印刷する必要があります。"
  },
  {
    "entry": "produce",
    "meaning_ja": "生産する / 作る / 育てる / 生み出す / 提供する",
    "example_sentence": "The factory produces thousands of cars every day.",
    "translated_sentence": "その工場は毎日何千台もの車を生産しています。"
  },
  {
    "entry": "prefer",
    "meaning_ja": "《Bよりむしろ》Aのほうを好む, を選ぶ 《A to B》 / (法廷などに)…を提出する / 《文》(特に教会などで) 《...に》...を昇進させる《to ...》",
    "example_sentence": "I prefer tea over coffee.",
    "translated_sentence": "コーヒーよりもお茶を好む。"
  },
  {
    "entry": "pub",
    "meaning_ja": "パブ(public house)",
    "example_sentence": "I went to the pub with my friends last night.",
    "translated_sentence": "昨夜、私は友達とパブに行きました。"
  },
  {
    "entry": "protest",
    "meaning_ja": "(…に対する)抗議,異議の申し立て;(少し軽い意味で,…への)反対,不満《+against+名》",
    "example_sentence": "The instigator of the protest was arrested.",
    "translated_sentence": "抗議の扇動者は逮捕されました。"
  },
  {
    "entry": "rarely",
    "meaning_ja": "《文を修飾する副詞として》めったに(まれにしか)…しない(seldom)  / 《文》まれなほど,とても(unusually)",
    "example_sentence": "I rarely eat fast food.",
    "translated_sentence": "私はめったにファストフードを食べません。"
  },
  {
    "entry": "anticipate",
    "meaning_ja": "を予想する / を期待する / 〈事〉に前もって対処する / 〈人〉より先に行う",
    "example_sentence": "I anticipate that the meeting will end early today.",
    "translated_sentence": "私は今日の会議が早く終わると予想しています。"
  },
  {
    "entry": "regional",
    "meaning_ja": "地域の / 地方に特有の, 局地的な",
    "example_sentence": "She enjoys exploring regional cuisine.",
    "translated_sentence": "彼女は郷土料理を探索するのが好きです。"
  },
  {
    "entry": "regular",
    "meaning_ja": "いつもの / 規則正しい / 定まった, 定期的な / 正規の",
    "example_sentence": "I have a regular exercise routine.",
    "translated_sentence": "私はいつもの運動習慣があります。"
  },
  {
    "entry": "researcher",
    "meaning_ja": "研究者,調査員",
    "example_sentence": "The researcher conducted experiments to test their hypothesis.",
    "translated_sentence": "研究者は仮説を検証するために実験を行った。"
  },
  {
    "entry": "role",
    "meaning_ja": "(役者が演じる)役  / (一般に)役割,任務",
    "example_sentence": "She assumed a leadership role in the team.",
    "translated_sentence": "彼女はチームでリーダーシップの役割を担いました。"
  },
  {
    "entry": "salary",
    "meaning_ja": "給料,俸給",
    "example_sentence": "I received my salary today.",
    "translated_sentence": "今日、私は給料をもらいました。"
  },
  {
    "entry": "screen",
    "meaning_ja": "…に網戸をつける,金網を付ける  / 《しばしば受動態で》…を隠す,保護する  / 《…から》…を仕切る《off, out, from ...》  / 〈じゃり・砂など〉をふるいにかける  / (ふるいにかけるように)…を除去する,濾過(ろか)する《out》  / 《しばしば受動態で》…をえり分ける,選別(選抜)する",
    "example_sentence": "The hiring manager will screen the applicants thoroughly to ensure the best fit for the job.",
    "translated_sentence": "採用担当者は、最適な人材を確保するために応募者を徹底的に選考します。"
  },
  {
    "entry": "represent",
    "meaning_ja": "を表す, を象徴する / を代表する, の代理をする / を描写する",
    "example_sentence": "Symbols can represent complex ideas.",
    "translated_sentence": "シンボルは複雑なアイデアを表すことができます。"
  },
  {
    "entry": "slide",
    "meaning_ja": "滑る,滑って進む《+on(down)+名》  / (ある場所から)(バランスを崩して)〈人が〉つるりと滑る,〈物が〉するっと動く《+from(out of)+名》 / (ある状態・習慣などに)いつの間にか陥る《+into+名》 / 〈時が〉いつの間にか過ぎ去る《+by(past)》 / (…に,…から)(滑るように)そっと動く,人目に立たないように動く《+into(out of,from)+名(doing)》 / (野球で,走者がタッチを避けようとして,ベースに)滑り込む《+in(into)+名》 / 《副詞[句]を伴って》…‘を'滑らせる  / (…に)…‘を'そっと入れる,滑り込ませる《+名+into(under)+名》",
    "example_sentence": "Be careful not to slide on the wet floor.",
    "translated_sentence": "濡れた床で滑らないように注意してください。"
  },
  {
    "entry": "standard",
    "meaning_ja": "〈C〉〈U〉標準,基準,水準,規範  / 〈C〉(度量衡の)基本単位  / 〈U〉〈C〉(貨幣制度の)本位  / 〈C〉旗,軍旗;(主義・主張などの)旗じるし  / 〈C〉支桂,ランプ台,しょく台",
    "example_sentence": "This is the standard size for a t-shirt.",
    "translated_sentence": "これはTシャツの標準サイズです。"
  },
  {
    "entry": "survival",
    "meaning_ja": "〈U〉(…が)生き残ること,(…の)生存,残存《+of+名》  / 〈C〉生存者,残存者;残存物,遺物",
    "example_sentence": "Survival is the key to success.",
    "translated_sentence": "成功の鍵は生き残ることです。"
  },
  {
    "entry": "survive",
    "meaning_ja": "…の後まで生きる, …より長生きする; 助かる; 耐える・生き残る; 残存する",
    "example_sentence": "He managed to survive until the end.",
    "translated_sentence": "彼はなんとか最後まで生き延びた。"
  },
  {
    "entry": "stir",
    "meaning_ja": "〈他〉をかき混ぜる / 〈物事〉をかき立てる / 〈自〉(特に,かすかに) 動く",
    "example_sentence": "She used a spoon to stir the soup.",
    "translated_sentence": "彼女はスプーンを使ってスープをかき混ぜました。"
  },
  {
    "entry": "successfully",
    "meaning_ja": "首尾よく,うまく,みごとに,成功して",
    "example_sentence": "He successfully completed the project.",
    "translated_sentence": "彼はプロジェクトを首尾よく完了した。"
  },
  {
    "entry": "technology",
    "meaning_ja": "科学技術,工業技術・科学(工業)技術的な方法(過程)・文明の環境利用(開発)・応用科学; 専門用語",
    "example_sentence": "The use of technology is becoming increasingly important in our daily lives.",
    "translated_sentence": "テクノロジーの使用が、私たちの日常生活でますます重要になっている。"
  },
  {
    "entry": "teenager",
    "meaning_ja": "ティーンエージャー(13歳から19歳までの少年・少女)",
    "example_sentence": "She is a talented teenager who excels in both academics and sports.",
    "translated_sentence": "彼女は学業とスポーツの両方で優れた才能を持つティーンエージャーです。"
  },
  {
    "entry": "thin",
    "meaning_ja": "薄い  / 細い  / やせた,やつれた  / (液体・気体が)薄い,希薄な  / まばらな,密集していない  / 内容のない,見え透いた  / (音・声が)か細い  / 薄く,細く,まばらに  / …‘を'薄くする,細くする,まばらにする  / 薄くなる,細くなる,まばらになる",
    "example_sentence": "She is very thin.",
    "translated_sentence": "彼女はとても細いです。"
  },
  {
    "entry": "tool",
    "meaning_ja": "(金づち・スパナー・のこぎりなど大工・指物仕事をするための)道具,工具  / (機械の部品を切削・加工する)動力機械(器具)  / (2の)切削(加工)部分  / 道具に使われる人,手先  / 《比喩的に》(一般に)道具,手段  /",
    "example_sentence": "I bought a new tool for my work.",
    "translated_sentence": "私は仕事用に新しい道具を買った。"
  },
  {
    "entry": "tradition",
    "meaning_ja": "〈U〉〈C〉(昔から伝えられてきた)しきたり,伝統・ 〈C〉伝説・慣例,文化遺産",
    "example_sentence": "It is a tradition to exchange gifts during the holiday season.",
    "translated_sentence": "休日シーズンに贈り物を交換するのはしきたりです。"
  },
  {
    "entry": "traffic",
    "meaning_ja": "(車・船・人などの)往来,交通,通行;(鉄道・船などによる)輸送,運輸  / 《集合的に》交通量,輸送量  / 売買,商売(trade),(特に不正な)取り引き  / 運輸業,[旅客]輸送業  / (特に不正に)(…と…の)取り引きをする《+in+名+with+名》",
    "example_sentence": "The traffic in the city was heavy during rush hour.",
    "translated_sentence": "ラッシュアワーに都市の交通は混雑していました。"
  },
  {
    "entry": "transfer",
    "meaning_ja": "(…から…へ)〈人・物〉‘を'移す,移転させる,乗り換えさせる《+名〈人・物〉+from+名+to+名》  / (…から…へ)〈権利・財産など〉‘を'譲り渡す,移転する《+名〈権利・財産〉+from+名+to+名》  / 〈絵画・デザインなど〉‘を'写す,転写する  / 〈人が〉(ある人・場所から他の人・場所などへ)移る,移される;転任する,転任させられる《+from+名+to+名》  / (…から…へ)列車(バスなど)を乗り換える《+from+名+to+名》",
    "example_sentence": "I need to transfer the files from my computer to a USB drive.",
    "translated_sentence": "私はコンピュータからUSBドライブにファイルを移す必要があります。"
  },
  {
    "entry": "trap",
    "meaning_ja": "(獲物をとる)わな  / (人を陥れる)わな,計略,策略  / 防臭弁(水をためて臭気を防ぐ排水管のUまたはS字刑の部分)  / トラップ(クレイ射撃で標的の粘土のハトを飛ばす装置)  / (犬の競走で)犬の飛び出し口  / 《おもに英》軽二輪馬車  / 《俗》口  / 《複数形で》打楽器[類]",
    "example_sentence": "The hunter set a trap to catch his prey.",
    "translated_sentence": "ハンターは獲物を捕まえるためにわなを仕掛けました。"
  },
  {
    "entry": "tune",
    "meaning_ja": "(音楽の)曲,節(ふし),メロディー(melody)  / 〈楽器〉‘の'調子を合わせる,‘を'調律する《+up+名,+名+up》  / 〈エンジンなど〉‘を'調整する《+up+名,+名+up》  / (…に)〈受信機〉‘を'同調させる,‘の'波長を合わせる《+名+to+名》",
    "example_sentence": "I love the tune of this song.",
    "translated_sentence": "この曲の曲調が好きだ。"
  },
  {
    "entry": "traditional",
    "meaning_ja": "伝説の,慣習の  / 伝統に従った,伝統的な",
    "example_sentence": "The traditional dance is performed during the festival.",
    "translated_sentence": "祭りの間に伝統的な踊りが披露されます。"
  },
  {
    "entry": "threaten",
    "meaning_ja": "を脅す / を言って脅す / をおびやかす / の前兆となる",
    "example_sentence": "He threatened to expose her secret.",
    "translated_sentence": "彼は彼女の秘密を暴露すると脅した。"
  },
  {
    "entry": "tongue",
    "meaning_ja": "〈C〉舌 / 言葉, 言語 / 言葉遣い, 言い回し",
    "example_sentence": "He stuck out his tongue at me.",
    "translated_sentence": "彼は私に舌を出した。"
  },
  {
    "entry": "adopt",
    "meaning_ja": "採用する / 取り入れる / 養子にする",
    "example_sentence": "Many companies are looking to adopt innovative technologies to improve their services.",
    "translated_sentence": "多くの企業が、サービスを改善するために革新的な技術を採用することを検討しています。"
  },
  {
    "entry": "version",
    "meaning_ja": "(…の)翻訳,訳文(translation)《+of+名》;《しばしば Version》(聖書の)翻訳,欽定訳  / (…についての)[個人的な]説明,所見,解釈《+of+名》  / (ある物の)変形,脚色,…版《+of+名》",
    "example_sentence": "This is the latest version of the software.",
    "translated_sentence": "これはソフトウェアの最新バージョンです。"
  },
  {
    "entry": "achievement",
    "meaning_ja": "〈U〉(…の)成就(じょうじゅ),達成《+of+名》  / 〈U〉業績,功績,達成されたこと",
    "example_sentence": "His achievement in the field of science is remarkable.",
    "translated_sentence": "科学の分野における彼の功績は目覚ましい。"
  },
  {
    "entry": "adjustment",
    "meaning_ja": "〈U〉(…の)調停,調整,調節《+of+名》, (…への)適応《+to+名》  / 〈C〉調整装置",
    "example_sentence": "The company made an adjustment to resolve the conflict between the two departments.",
    "translated_sentence": "会社は2つの部門間の対立を解決するための調整を行いました。"
  },
  {
    "entry": "specify",
    "meaning_ja": "〈他〉〈物事〉を明細に述べる / (明細書の中などで)…を指定する,  ...の名をあげる",
    "example_sentence": "Please specify the product you want to order.",
    "translated_sentence": "ご注文される商品を指定してください。"
  },
  {
    "entry": "analyze",
    "meaning_ja": "〈状況など〉'を'分析する,詳細に検討する  / 〈物質など〉'を'(…に)分析する,分解する《+名+into+名》;(数学で)…'を'解析する  / 《米》〈人〉'を'精神分析する(psychoanalyze)  / 〈文〉'を'[文法的に]分解する",
    "example_sentence": "We need to analyze the current situation to make the best decision.",
    "translated_sentence": "最善の決定を下すためには、現状を分析する必要があります。"
  },
  {
    "entry": "twist",
    "meaning_ja": "〈他〉〈糸・なわなど〉をよる / 《…に》…を巻きつける《around ...》 / …をねじる",
    "example_sentence": "She twisted her ankle while running.",
    "translated_sentence": "彼女は走っている最中に足首を捻挫した。"
  },
  {
    "entry": "typically",
    "meaning_ja": "典型的に,代表的に  / 典型的な場合に  / 特徴的に",
    "example_sentence": "The workweek in Japan is typically 40 hours.",
    "translated_sentence": "日本の週の労働時間は通常40時間です。"
  },
  {
    "entry": "accomplish",
    "meaning_ja": "（仕事・目的など）を成し遂げる, 仕上げる；（旅などを）終える；（年齢など）に達する",
    "example_sentence": "This plan is impossible to accomplish.",
    "translated_sentence": "この計画は達成不可能だ。"
  },
  {
    "entry": "valley",
    "meaning_ja": "谷,谷間  / 《修飾語を伴って》《通例単数形で》(大河の)流域",
    "example_sentence": "The hikers walked through the beautiful valley.",
    "translated_sentence": "ハイカーたちは美しい谷を歩きました。"
  },
  {
    "entry": "voter",
    "meaning_ja": "投票者 / 有権者",
    "example_sentence": "The voter turnout in the election was higher than expected.",
    "translated_sentence": "選挙の投票者数は予想よりも高かった。"
  },
  {
    "entry": "weakness",
    "meaning_ja": "〈U〉(体・心・性格か)弱いこと《+of+名》  / 〈C〉弱点,短所  / 〈C〉(特に良くないものに対する)特別な好み,愛好《+for+名》",
    "example_sentence": "He admitted his weakness in public.",
    "translated_sentence": "彼は公に自分の弱点を認めた。"
  },
  {
    "entry": "welcome",
    "meaning_ja": "〈人〉を出迎える,〈人〉に出迎えのあいさつをする / 《...へ》〈人〉を歓迎する,喜んで迎える《to ...》 / 〈提案など〉を受け入れる",
    "example_sentence": "Welcome to our home!",
    "translated_sentence": "私たちの家へようこそ！"
  },
  {
    "entry": "western",
    "meaning_ja": "西の;西へ向かう;(風などが)西からの  / 《しばしば Western》西洋の  / 《しばしば Western》西部の,(特に)米国西部の  / 《通例 Western》(共産圏に対して)西側の  / 西部劇;米国の開拓時代を描いた小説",
    "example_sentence": "I love watching western movies.",
    "translated_sentence": "私は西洋の映画を見るのが好きです。"
  },
  {
    "entry": "wipe",
    "meaning_ja": "〈物など〉‘を'ふく,ふぐう  / 〈よごれなど〉‘を'ふき取る,ぬぐい去る《+away(off)+名,+名+away(off)》;(…から)…‘を'ふき取る《+名+off(from, out of)+名》  / (…に)〈布など〉‘を'こすりつけてふく(ぬぐう)《+名+over(across)+鳴》  / ふくこと,ぬぐうこと",
    "example_sentence": "Please wipe the table with a cloth.",
    "translated_sentence": "テーブルを布でふいてください。"
  },
  {
    "entry": "unite",
    "meaning_ja": "〈他〉《...と》を結合させる《with ...》 / を団結させる / 【動/自】団結する,協力する / 《...と》結合する《with ...》",
    "example_sentence": "The students decided to unite and form a study group.",
    "translated_sentence": "学生たちは団結して研究グループを結成することにした。"
  },
  {
    "entry": "anxiety",
    "meaning_ja": "〈U〉《...について》心配, 不安《about / for》 / 〈C〉心配事 / 〈U〉切望 / 〈C〉切望する事",
    "example_sentence": "I struggle with anxiety every day.",
    "translated_sentence": "私は毎日不安に苦しんでいます。"
  },
  {
    "entry": "appropriate",
    "meaning_ja": "《...に》適切な,ふさわしい《for, to ...》 / 《...に》特有な《to ...》",
    "example_sentence": "It's appropriate to wear formal attire to the event.",
    "translated_sentence": "そのイベントにはフォーマルな服装を着るのが適切です。"
  },
  {
    "entry": "barrier",
    "meaning_ja": "(通行を阻む)柵,障壁;関門;《ふざけて》改札口  / (…の)難関,障害《+to+名》",
    "example_sentence": "The barrier was put up to prevent unauthorized access.",
    "translated_sentence": "そのバリアは、不正なアクセスを防ぐために設置されました。"
  },
  {
    "entry": "arise",
    "meaning_ja": "〈問題・事件などが〉起こる,現れる /《Aから》生じる《from A》",
    "example_sentence": "If any problems arise, please contact me immediately.",
    "translated_sentence": "何か問題が起こったら、すぐに私に連絡してください。"
  },
  {
    "entry": "conclusion",
    "meaning_ja": "〈C〉〈U〉終わり,終結,結末  / 〈C〉結論,決定,判断;(三段論法の)断案  / 〈U〉〈C〉(条約などの)締結,妥結",
    "example_sentence": "The conclusion of the story was unexpected.",
    "translated_sentence": "物語の結末は予想外だった。"
  },
  {
    "entry": "audience",
    "meaning_ja": "聴衆、観客",
    "example_sentence": "The audience was captivated by the stunning performance.",
    "translated_sentence": "聴衆はその見事なパフォーマンスに魅了されました。"
  },
  {
    "entry": "behave",
    "meaning_ja": "ふるまう / 行儀よくする",
    "example_sentence": "You should behave properly in public places.",
    "translated_sentence": "公共の場所では適切に振る舞うべきです。"
  },
  {
    "entry": "bias",
    "meaning_ja": "【名/C】(布地の裁断や縫い目の)斜線 / 【名/C/U】《…に対する》心理的傾向, 先入観, 偏見《toward, against, for ...》 / 【形】斜めの / 【動/他】《…に対して》〈人〉に偏見を抱かせる《against, toward, in favor of ...》",
    "example_sentence": "The news article was filled with bias.",
    "translated_sentence": "そのニュース記事は偏見で満ちていた。"
  },
  {
    "entry": "confirm",
    "meaning_ja": "を確かめる,を確証する / 《~ to A that ...》(Aに)...ということを確認する / 《~ A in ...》(Aの)...を強める, (...の点で)Aに確信を持たせる",
    "example_sentence": "Please confirm your reservation.",
    "translated_sentence": "ご予約を確認してください。"
  },
  {
    "entry": "derive",
    "meaning_ja": "《...から》 を引き出す,を得る《from》 / 《...から》派生する / 《...に》由来する",
    "example_sentence": "Scientists derive new theories from existing data.",
    "translated_sentence": "科学者は既存のデータから新しい理論を引き出します。"
  },
  {
    "entry": "constitute",
    "meaning_ja": "《しばしば受動体で》〈物〉を構成する/ を成り立たせる/ を組織する / 《〜 +〈目〉+ 〈補〉》〈人〉を(役目・職務など)に任命する / 〈制度など〉を制定する",
    "example_sentence": "These elements constitute a perfect equation.",
    "translated_sentence": "これらの要素は完全な方程式を構成します。"
  },
  {
    "entry": "consult",
    "meaning_ja": "(…についての意見,情報などを)…‘に'頼る,求める,相談する《+名+about(on,for)+名》  / 〈人の感情・都合・利害など〉'を'考慮に入れる  / (…について…と)相談する,協議する《+with+名+about(for)+名》  / (会社などの)顧問(コンサルタント)として働く《+for+名》",
    "example_sentence": "I need to consult with my lawyer before making a decision.",
    "translated_sentence": "決定する前に弁護士に相談する必要があります。"
  },
  {
    "entry": "curve",
    "meaning_ja": "〈C〉曲線 / 曲がり / (野球で投球の) カーブ",
    "example_sentence": "It's a long road with no curves.",
    "translated_sentence": "それは曲り角のない長い道である。"
  },
  {
    "entry": "correspond",
    "meaning_ja": "一致する, 調和する / 《...と》 一致する 《with, to ...》 / (性質・機能などの点で) 《...に》 相当する 《to ...》 / 《...と》 文通する 《with ...》",
    "example_sentence": "The results of the experiment correspond to the predicted outcomes.",
    "translated_sentence": "実験の結果は予測された結果と一致する。"
  },
  {
    "entry": "craft",
    "meaning_ja": "〈U〉技能,技巧  / 〈C〉手先の技術を要する仕事;工芸  / 〈C〉《集合的に》同業者;同業組合  / 〈U〉(悪い意味で)巧妙さ,悪だくみ  / 《集合的に》船,飛行機,宇宙船",
    "example_sentence": "She is skilled in the craft of pottery.",
    "translated_sentence": "彼女は陶芸の技能に長けています。"
  },
  {
    "entry": "crop",
    "meaning_ja": "〈C〉《しばしば服数形で》作物,収穫物  / 〈C〉(一地域で一期にとれる農作物の)収穫[高],生産[高],作柄  / 〈U〉作付け,植う付け,耕作  / 〈C〉《通例単数形で》(同時に,または続々と出てくる人・物の)群れ《+of+名》  / 〈C〉《通例単数形で》(髪の)刈込み,いがぐり頭  / 〈C〉(鳥の)え袋,そのう  / 〈C〉(動物の耳を切って目じるしにする)耳じるし  / 〈C〉乗馬むち;むちの柄",
    "example_sentence": "Farmers are harvesting their crops.",
    "translated_sentence": "農民たちは作物を収穫しています。"
  },
  {
    "entry": "custom",
    "meaning_ja": "〈U〉〈C〉(社会の) 習慣, 風習 / (個人の) 習慣 / 〈U〉(客の商人に対する)ひいき,  《集合的に》得意先  / 《複数形で》関税",
    "example_sentence": "I ordered a custom-made dress for the wedding.",
    "translated_sentence": "私は結婚式のためにオーダーメイドのドレスを注文しました。"
  },
  {
    "entry": "decrease",
    "meaning_ja": "〈U〉〈C〉《...の》 減少 《in ...》",
    "example_sentence": "The drawdown in the company's profits was due to a decrease in sales.",
    "translated_sentence": "会社の利益の減少は売上の減少によるものでした。"
  },
  {
    "entry": "demonstration",
    "meaning_ja": "〈U/C〉論証, 《...であることの》実証《that節》 / 実物説明, 実演 / 《感情の》表示,表明《of ...》/ 示威運動,デモ",
    "example_sentence": "The demonstration was peaceful and well-organized.",
    "translated_sentence": "デモは平和でよく組織されていました。"
  },
  {
    "entry": "display",
    "meaning_ja": "〈物〉を展示する,を陳列する([[exhibit]])  / 〈感情など〉を表に出す / 〈能力など〉を発揮する  / …を見せびらかす,を誇示する([[show off]])",
    "example_sentence": "The museum will display the artwork next month.",
    "translated_sentence": "その美術館は来月、作品を展示します。"
  },
  {
    "entry": "diversity",
    "meaning_ja": "相違,差違  / (…の)種々さまざま,多様性《+of+名》",
    "example_sentence": "Diversity is important for fostering creativity and innovation.",
    "translated_sentence": "多様性は創造性とイノベーションを育むために重要です。"
  },
  {
    "entry": "division",
    "meaning_ja": "〈U〉分けること,分割,分離;分配  / 〈C〉(分割された)部分  / 〈U〉(意見・感情の相違による)分裂,不一致,不和  / 〈U〉割り算  / 〈C〉仕切り;境界線  / 〈C〉(官庁・会社の)部門;(大学の)学部  / 〈C〉《集合的に》(陸軍で)師団;(海軍で)分艦隊  / 〈C〉(英議会の)票決,採決",
    "example_sentence": "The division of labor is essential for efficient teamwork.",
    "translated_sentence": "効率的なチームワークには分業が不可欠です。"
  },
  {
    "entry": "ensure",
    "meaning_ja": "〈物事が〉〈成功など〉を保証する,を確実にする / 《…から》〈人〉を守る,を安全にする《against ...》",
    "example_sentence": "I will ensure that the project is completed on time.",
    "translated_sentence": "私はプロジェクトが時間通りに完了することを保証します。"
  },
  {
    "entry": "emergency",
    "meaning_ja": "非常の場合,緊急の場合",
    "example_sentence": "In case of an emergency, please dial 911.",
    "translated_sentence": "緊急の場合は911におかけください。"
  },
  {
    "entry": "domestic",
    "meaning_ja": "家庭の / 国内の",
    "example_sentence": "I prefer domestic travel over international travel.",
    "translated_sentence": "私は国内旅行の方が海外旅行よりも好きです。"
  },
  {
    "entry": "eliminate",
    "meaning_ja": "《...から》を排除する、取り除く《from》 / を考慮に入れない",
    "example_sentence": "We need to eliminate all unnecessary expenses from our budget.",
    "translated_sentence": "予算から不要な経費を排除する必要があります。"
  },
  {
    "entry": "era",
    "meaning_ja": "(重要な出来事や人物により特徴づけられる)時代,時期,年代；(歴史上の)…時代；紀元,紀年法",
    "example_sentence": "The Renaissance era was known for its cultural and artistic achievements.",
    "translated_sentence": "ルネサンス時代はその文化的な成果と芸術的な業績で知られていました。"
  },
  {
    "entry": "error",
    "meaning_ja": "〈C〉誤り,まちがい  / 〈U〉思い違い,誤解  / 〈U〉〈C〉過ち,過失  / 〈U〉(計数の)誤差  / 〈C〉(野球で)エラー,失策",
    "example_sentence": "There was an error in the code.",
    "translated_sentence": "コードに誤りがありました。"
  },
  {
    "entry": "extract",
    "meaning_ja": "《…から》〈物〉を引き抜く,抜き取る《from ...》  / 《…から》〈金・情報・約束など〉を引き出す《from ...》  / (圧搾・蒸留などが)《…から》〈成分など〉を絞り出す,抽出する《from ...》  / 《…から》〈喜び・慰めなど〉を引き出す,得る《from, out of ...》  / (本などから)〈語句〉を抜粋する,抜き出す《from, out of ...》",
    "example_sentence": "He used a pair of tweezers to extract the splinter from his finger.",
    "translated_sentence": "彼はピンセットを使って指から木片を引き抜いた。"
  },
  {
    "entry": "factory",
    "meaning_ja": "工場,製作所",
    "example_sentence": "The factory produced 10,000 cars last month.",
    "translated_sentence": "先月、この工場は10,000台の車を生産しました。"
  },
  {
    "entry": "fiction",
    "meaning_ja": "〈C〉〈U〉作り話,作り事,虚構  / 〈U〉(文学様式の)小説,創作",
    "example_sentence": "She loves reading fiction novels.",
    "translated_sentence": "彼女はフィクションの小説を読むのが好きです。"
  },
  {
    "entry": "fuel",
    "meaning_ja": "燃料",
    "example_sentence": "There was a shortage of fuel.",
    "translated_sentence": "燃料が不足していた。"
  },
  {
    "entry": "emerge",
    "meaning_ja": "(水中・暗やみなどから)出てくる,現れる《from, out of ...》 / (問題・事実などが)出てくる  / 《逆境などから》浮かび上がる《from ...》",
    "example_sentence": "Fish emerge from the depths of the ocean.",
    "translated_sentence": "魚が海の深いところから現れます。"
  },
  {
    "entry": "entrance",
    "meaning_ja": "〈C〉《建物・場所などへの》 入り口 《to ...》 / 〈U〉〈C〉《...へ》入ること,入場《to, into, on ...》 /  〈U〉《新しい生活・職務などに》つくこと《on, upon,into ...》 / 《...へ》入る権利（資格）《to, into ...》 /",
    "example_sentence": "I stood at the entrance of the building, waiting for my friends.",
    "translated_sentence": "私は友達を待っている間、建物の入り口に立っていました。"
  },
  {
    "entry": "journal",
    "meaning_ja": "〈C〉日誌, 日記 / 議事録,議事日誌 / 専門誌  (学会・専門職業などの)定期刊行物, 雑誌 / 新聞, (特に)日刊新聞",
    "example_sentence": "I write in my journal every night.",
    "translated_sentence": "私は毎晩日記を書きます。"
  },
  {
    "entry": "host",
    "meaning_ja": "【名/C】主人,主人役；《…の》主人（役）《to》；寄生動（植）物の宿主；【動/他】の主人役を務める；を主催する",
    "example_sentence": "The host welcomed the guests to the party.",
    "translated_sentence": "ホストはゲストをパーティーに歓迎しました。"
  },
  {
    "entry": "initiative",
    "meaning_ja": "取り組み / 主導権 / 自主性",
    "example_sentence": "The company launched a new initiative to promote sustainability.",
    "translated_sentence": "会社は持続可能性を促進するための新しい取り組みを開始しました。"
  },
  {
    "entry": "grateful",
    "meaning_ja": "感謝している / 感謝を表す / 快い",
    "example_sentence": "I am grateful for all the support I have received.",
    "translated_sentence": "私は受けたすべてのサポートに感謝しています。"
  },
  {
    "entry": "incentive",
    "meaning_ja": "刺激,動機,誘因",
    "example_sentence": "The company offers various incentives to motivate its employees.",
    "translated_sentence": "会社は従業員を刺激するためにさまざまなインセンティブを提供しています。"
  },
  {
    "entry": "independent",
    "meaning_ja": "(他に)頼らない,依存しない  / 独立したほかの支配(影響)を受けない  / 関係(関連)がない,独自の  / (収入・資産が)働かなくても暮らせるだけの",
    "example_sentence": "She is an independent woman who doesn't rely on others.",
    "translated_sentence": "彼女は他に頼らない自立した女性です。"
  },
  {
    "entry": "initial",
    "meaning_ja": "(語の)最初の文字  / 《複数形で》(姓名の)かしら文字,イニシャル",
    "example_sentence": "The lovers engraved the oak tree with their initials.",
    "translated_sentence": "恋人たちは自分たちの頭文字をかしの木に刻んだ。"
  },
  {
    "entry": "invest",
    "meaning_ja": "(…に)〈金など〉‘を'投資する《+名+in+名》  / (…に)〈時間・努力など〉‘を'つぎ込む《+名+in+名(doing)》  / 《しばしば受動態で》(権力などを)〈人〉‘に'付与する《+名+with+名》  / 〈人〉‘を'就任させる  / (性質・特質などを)〈人・物〉‘に'帯びさせる《+名+with+名》;(人・物に)〈性質・特質など〉‘を'付与する《+名+in+名》  / 《文》〈軍隊が〉…‘を'包囲する  / (…に)投資する,(…を)買う《+in+名》",
    "example_sentence": "I want to invest in stocks.",
    "translated_sentence": "私は株に投資したいです。"
  },
  {
    "entry": "interior",
    "meaning_ja": "〈C〉室内,屋内 / 内部,内側 / 内陸部",
    "example_sentence": "The interior of the house was beautifully decorated.",
    "translated_sentence": "家の内部は美しく飾られていました。"
  },
  {
    "entry": "label",
    "meaning_ja": "(品名・製造元などを示す)はり札,ラベル;(小包などの)荷札  / (団体・運動・政党支持者などの特徴を示す)短い文句,通り名;(辞書の見出し語などにつける)ラベル([物理][化学]など)  / …‘に'ラベルをはる,荷札をつける;《比喩(ひゆ)的》〈人〉‘に'レッテルをはる",
    "example_sentence": "Please check the label for the product information.",
    "translated_sentence": "製品情報はり札を確認してください。"
  },
  {
    "entry": "moral",
    "meaning_ja": "《名詞の前にのみ用いて》(人・行為などが)道徳的な,道徳を守る;(人が)善悪の区別がつく  / 《名詞の前にのみ用いて》倫理(道徳)上の,道徳の(ethical)  / 教訓的な,道徳を教うる  / 精神的な",
    "example_sentence": "He always tries to make moral decisions.",
    "translated_sentence": "彼は常に道徳的な決断をしようと努力しています。"
  },
  {
    "entry": "jail",
    "meaning_ja": "〈C〉刑務所,牢獄,拘置所  / 〈U〉入獄,拘置",
    "example_sentence": "He was sentenced to five years in jail.",
    "translated_sentence": "彼は刑務所に５年間の刑を宣告された。"
  },
  {
    "entry": "liberal",
    "meaning_ja": "(政治・宗教上の)自由主義の  / 寛大な,偏見のない,心の広い  / 気前がよい,物惜しみをしない  / (物が)豊富な  / (翻訳などが)字句通りでない  / 自由主義者  / 《またL-》自由党員",
    "example_sentence": "She has a liberal approach to politics.",
    "translated_sentence": "彼女は政治に対して自由主義的なアプローチを持っています。"
  },
  {
    "entry": "hint",
    "meaning_ja": "ほのめかし、ヒント",
    "example_sentence": "She subtly hinted at her disapproval.",
    "translated_sentence": "彼女は微妙に彼女の不承認をほのめかしました。"
  },
  {
    "entry": "peer",
    "meaning_ja": "〈C〉同等の人,同輩 / 貴族",
    "example_sentence": "I often seek advice from my peers when I have a problem.",
    "translated_sentence": "私は問題がある時に、同僚からアドバイスを求めることがよくあります。"
  },
  {
    "entry": "museum",
    "meaning_ja": "博物館;美術館",
    "example_sentence": "I visited the museum yesterday and learned a lot about history.",
    "translated_sentence": "昨日、私は博物館を訪れて、歴史についてたくさん学びました。"
  },
  {
    "entry": "multiple",
    "meaning_ja": "多数の, 多数の部分から成る, 複合の / 倍数の / 〈C〉倍数",
    "example_sentence": "There are multiple options to choose from.",
    "translated_sentence": "選ぶための多数のオプションがあります。"
  },
  {
    "entry": "negative",
    "meaning_ja": "否定の,反対の  / 消極的な,控えめの  / 陰電気の;(数値が)負の,マイナスの(minus);(写真が)陰画の,ネガの;(医学検査結果が)陰性の  / 否定,拒否,「いやだ」と言うこと  / 否定語[句]  / 《the~》(特に討論会の)反対者側,反対派  / (電気分解に用いる)陰極板  / (数値の)負数  / (写真の)陰画,ネガ  / 《しばしば受動態に用いて》…‘に'反対投票をする  / =negate",
    "example_sentence": "The test results came back negative.",
    "translated_sentence": "テストの結果は陰性でした。"
  },
  {
    "entry": "negotiation",
    "meaning_ja": "〈U〉〈C〉《しばしば複数形で》(物事についての人との)取り決め,交渉,話し合い《+with(between)+名〈人〉+about(for,on,over)+名》  / 〈U〉(手形などの)換金,譲渡  / 〈U〉《話》(障害・困難などの)克服",
    "example_sentence": "The negotiation between the two countries lasted for several weeks.",
    "translated_sentence": "2つの国の間の交渉は数週間続きました。"
  },
  {
    "entry": "opera",
    "meaning_ja": "オペラ,歌劇",
    "example_sentence": "I saw an opera last night.",
    "translated_sentence": "昨晩オペラを見た。"
  },
  {
    "entry": "outcome",
    "meaning_ja": "〈C〉（会議や活動などの）最終的な結果,結論,成果",
    "example_sentence": "The outcome of the meeting was a success.",
    "translated_sentence": "会議の結果は成功だった。"
  },
  {
    "entry": "mutual",
    "meaning_ja": "相互の / 共通の",
    "example_sentence": "They have a mutual understanding.",
    "translated_sentence": "彼らは相互の理解を持っています。"
  },
  {
    "entry": "passion",
    "meaning_ja": "〈U〉〈C〉激しい感情,情念,熱情  / 〈U〉《しばしばa passion》(…に対する)熱中,熱,強い好み《+for+名(doing)》  / 〈C〉熱中の対象,大好物  / 〈U〉(;に対する)恋愛感情,松情;情欲《+for+名》  / 〈U〉《しばしばa~》突然の激しい怒り,激怒,かんしゃく  / 《the P-》キリストの受難;福音書のキリスト受難の物語;受難(キリストの受難の物語に曲をつけたもの)",
    "example_sentence": "She pursued her passion for painting with unwavering determination.",
    "translated_sentence": "彼女は揺るぎない決意で絵画への情熱を追求しました。"
  },
  {
    "entry": "overseas",
    "meaning_ja": "海外の,外国の, 外国向けの",
    "example_sentence": "Their colleague was transferred to an overseas branch.",
    "translated_sentence": "彼らの同僚は海外の支店に転勤になった。"
  },
  {
    "entry": "permission",
    "meaning_ja": "許可,承諾",
    "example_sentence": "May I have your permission to leave early today?",
    "translated_sentence": "今日早退してもよろしいですか？"
  },
  {
    "entry": "permit",
    "meaning_ja": "〈人が〉…‘を'許可する  / 〈物事が〉…‘の'機会を与える,‘を'可能にする  / 〈事が〉許す",
    "example_sentence": "They permit smoking in designated areas.",
    "translated_sentence": "指定された場所で喫煙を許可しています。"
  },
  {
    "entry": "phenomenon",
    "meaning_ja": "現象",
    "example_sentence": "The aurora borealis is a beautiful natural phenomenon.",
    "translated_sentence": "オーロラは美しい自然現象です。"
  },
  {
    "entry": "philosophy",
    "meaning_ja": "〈U〉哲学  / 〈C〉哲学体系  / 〈U〉(学問・知識などの)原理,理論《+of+名》  / 〈U〉〈C〉人生哲学,人生観;信条  / 〈U〉冷静,沈着;悟り,達観/ 考え方、方針、主義",
    "example_sentence": "Philosophy explores fundamental questions about the nature of existence and knowledge.",
    "translated_sentence": "哲学は存在や知識の本質についての根本的な問いを探求します。"
  },
  {
    "entry": "phrase",
    "meaning_ja": "〈C〉(文法で)句(2語以上の語の集まりで,節(clause)と違って「主語+述語動詞」の構造を持たず,文中で一つの品詞の働きをするもの)  / 〈C〉成句,熟語,慣用句;語群,連語  / 〈C〉〈U〉言葉づかい,言い回し  / 〈C〉簡潔な言葉;名言,寸言,警句  / 〈C〉(メロディーの一単位を構成する)楽句",
    "example_sentence": "I quoted some famous phrases in my book.",
    "translated_sentence": "私は自分の本に有名な言葉を引用した。"
  },
  {
    "entry": "primary",
    "meaning_ja": "主要な / 第一位の,初期の,最初の.原始的な",
    "example_sentence": "The primary goal of the project is to increase efficiency.",
    "translated_sentence": "プロジェクトの主要な目標は効率を向上させることです。"
  },
  {
    "entry": "protein",
    "meaning_ja": "蛋白(たんばく)質",
    "example_sentence": "Protein is essential for muscle growth.",
    "translated_sentence": "蛋白質は筋肉の成長に不可欠です。"
  },
  {
    "entry": "principal",
    "meaning_ja": "第1の,主要な,主な",
    "example_sentence": "The principal reason for his success is hard work.",
    "translated_sentence": "彼の成功の第1の理由は努力です。"
  },
  {
    "entry": "session",
    "meaning_ja": "〈C〉(議会・裁判所などの)会議 /〈U〉(議会・法廷などの)開会,開廷 / 〈C〉会期,開廷期 / 〈C〉《おもに米》(大学の)受業時間;学期 / 〈C〉《米》(一般にある目的・活動のための)集まり,活動期間 / 《複数形で》《英》裁判所の定期会議",
    "example_sentence": "The session will begin at 9 am.",
    "translated_sentence": "会議は午前9時に始まります。"
  },
  {
    "entry": "recruit",
    "meaning_ja": "(軍隊・団体などに)〈新兵・新会員など〉‘を'入れる,募る《+名+for+名》  / 《古》〈健康・元気など〉‘を'回復する / 新兵(新会員)を募集する",
    "example_sentence": "They recruit new members every year.",
    "translated_sentence": "彼らは毎年新しいメンバーを募集しています。"
  },
  {
    "entry": "rescue",
    "meaning_ja": "(危険などから)…‘を'救う,救助(救出)する《+名+from+名(doing)》",
    "example_sentence": "The firefighters rescued the trapped hikers from the mountain.",
    "translated_sentence": "消防士たちは山で閉じ込められたハイカーたちを救出しました。"
  },
  {
    "entry": "reward",
    "meaning_ja": "〈U〉〈C〉《...に対する》報酬, お礼《for ...》 / 〈C〉《...に対する》報奨金《for, of ...》",
    "example_sentence": "I received a reward for my hard work.",
    "translated_sentence": "私は頑張りに対して報酬を受け取りました。"
  },
  {
    "entry": "scan",
    "meaning_ja": "…‘を'じっと見る,詳しく調べる;〈広い区域〉‘を'端から端までよく見る  / …‘に'さっと目を通す,‘を'ざっと読む  / 〈詩〉‘の'韻律を調べる,‘を'詩脚に分ける  / (テレビ・レーダーで)〈映像〉‘を'走査する  / 詩の韻律を調べる;〈詩行が〉韻律の法則に合う,音脚が合う  / (テレビ・レーダーで)走査をする",
    "example_sentence": "I scan the room for any signs of movement.",
    "translated_sentence": "私は部屋に何か動いた形跡がないか目を凝らす。"
  },
  {
    "entry": "segment",
    "meaning_ja": "(容易に区別できる)部分,区分",
    "example_sentence": "The segment of the population that is most affected by climate change is the elderly.",
    "translated_sentence": "気候変動の影響を最も受ける人口の部分は高齢者です。"
  },
  {
    "entry": "restriction",
    "meaning_ja": "〈U〉《...を》制限すること《of ...》 / 制限されていること / 〈C〉《...に対する》制限事項,制約《on, against ...》",
    "example_sentence": "There is a restriction on the number of guests allowed in the hotel.",
    "translated_sentence": "ホテルに許可されるゲストの数に制限があります。"
  },
  {
    "entry": "routine",
    "meaning_ja": "〈U〉いつもの手順, 決まりきった仕事 / 〈C〉(喜劇・踊りの)型どおりの演技",
    "example_sentence": "I have a daily routine of waking up at 6 am and going for a run.",
    "translated_sentence": "私は毎日6時に起きてランニングに行くという日課があります。"
  },
  {
    "entry": "summarize",
    "meaning_ja": "…‘を'要約する,手短に述べる",
    "example_sentence": "Can you summarize the main points of the presentation?",
    "translated_sentence": "プレゼンテーションの要点を要約していただけますか？"
  },
  {
    "entry": "summary",
    "meaning_ja": "(…の)要約,摘要 概要《+of+名》  / 用約した,かいつまんだ;手短の  / (裁判などか)略式の,即決の",
    "example_sentence": "Can you give me a summary of the book?",
    "translated_sentence": "その本の要約を教えてもらえますか？"
  },
  {
    "entry": "substantial",
    "meaning_ja": "かなりの/ 実在する / 実質上の /大きな / 重要な / 実質的な",
    "example_sentence": "The company made a substantial profit this year.",
    "translated_sentence": "会社は今年、かなりの利益を上げました。"
  },
  {
    "entry": "respectively",
    "meaning_ja": "(述べられた順番で)それぞれに,めいめいに,別々に",
    "example_sentence": "They arrived at the party and danced respectively.",
    "translated_sentence": "彼らはパーティーに到着し、それぞれダンスをした。"
  },
  {
    "entry": "tender",
    "meaning_ja": "(筋肉などが)柔らかい / (体質などが)きゃしゃな,ひ弱な / 幼い /穏やかな / 心の優しい,思いやりのある / 触ると痛い,敏感な / 同情的な",
    "example_sentence": "The steak was so tender that it practically melted in my mouth.",
    "translated_sentence": "ステーキはとても柔らかかったので、口の中で溶けるようでした。"
  },
  {
    "entry": "virtually",
    "meaning_ja": "事実上, 実質的には, おおよそ / 仮想的に",
    "example_sentence": "He virtually lives at the office; he’s there from morning until late at night.",
    "translated_sentence": "彼は事実上オフィスに住んでいるようなものだ。朝から夜遅くまでそこにいるからね。"
  },
  {
    "entry": "talent",
    "meaning_ja": "〈U〉〈C〉(特に生まれながらの優れた)(…の)才能,技量《+for+名(doing)》  / 〈C〉《おもに米》才能のある人;タレント  / 〈U〉《集合的に》才能のある人々,人材  / 〈C〉タレント(古代ギリシア・ローマなどの,重量・貨幣の単位)",
    "example_sentence": "She has a natural talent for singing.",
    "translated_sentence": "彼女は生まれつき歌う才能がある。"
  },
  {
    "entry": "target",
    "meaning_ja": "〈C〉標的 / 攻撃目標 / 的 / 目標 / 到達目標",
    "example_sentence": "The archer aimed at the target and released the arrow.",
    "translated_sentence": "弓使いは的を狙って矢を放った。"
  },
  {
    "entry": "task",
    "meaning_ja": "課題、仕事、任務　",
    "example_sentence": "I have a lot of tasks to complete today.",
    "translated_sentence": "今日はたくさんの課題を完成させなければなりません。"
  },
  {
    "entry": "technique",
    "meaning_ja": "〈U〉(科学・芸術などの)技巧,技術  / 〈C〉(技術・技巧を示す)手法,表現方法;腕前",
    "example_sentence": "He used advanced techniques to create his masterpiece.",
    "translated_sentence": "彼は傑作を作るために高度な技巧を使った。"
  },
  {
    "entry": "translate",
    "meaning_ja": "(ある言語から他の言語へ)〈話・文章〉‘を'翻訳する《+名+from+名+into+名》  / …‘を'他の言葉で説明する;(…に)…‘を'言い換える《+名+into+名》  / 《文》(…に)…‘の'性質(状態など)を変える,‘を'変化させる《+名+into+名》  / 翻訳する,翻訳者を務める  / 〈文章などが〉(…に)翻訳できる《+into+名》",
    "example_sentence": "I need to translate this document from English into Japanese.",
    "translated_sentence": "この文書を英語から日本語に翻訳する必要があります。"
  },
  {
    "entry": "transportation",
    "meaning_ja": "《おもに米》輸送,運送;輸送(交通)機関  / 《米》運送料;運賃  / (昔の罪人の)追放刑,流罪;流罪の期間",
    "example_sentence": "The transportation of goods is essential for the economy.",
    "translated_sentence": "貨物の輸送は経済にとって不可欠です。"
  },
  {
    "entry": "unlike",
    "meaning_ja": "似ていない,異なる",
    "example_sentence": "Unlike her sister, she prefers to stay at home.",
    "translated_sentence": "彼女は姉と違って、家にいることを好む。"
  },
  {
    "entry": "veteran",
    "meaning_ja": "〈C〉老練者,古つわもの,ベテラン / 古参兵,老兵 / 退役軍人,在郷軍人兵 / 使い古したもの,中古品",
    "example_sentence": "He is a veteran in the field of medicine.",
    "translated_sentence": "彼は医学の分野でのベテランです。"
  },
  {
    "entry": "victory",
    "meaning_ja": "(…に対する)勝利,戦勝《+over(in)+名》",
    "example_sentence": "They celebrated their victory with a parade.",
    "translated_sentence": "彼らはパレードで勝利を祝った。"
  },
  {
    "entry": "vision",
    "meaning_ja": "〈U〉視力,視覚 / （将来への）見通し / 〈C〉心に描くもの / 考え / 幻",
    "example_sentence": "My vision has improved since I started wearing glasses.",
    "translated_sentence": "メガネをかけ始めてから、私の視力が向上しました。"
  },
  {
    "entry": "voluntary",
    "meaning_ja": "(強制ではなく)自由意志でなされる  / (報酬なしで)みずから進んでする,自発の  / (生理学で)随意の  / 《名詞の前にのみ用いて》篤志によってできた,任意寄付で維持される  / (教会の礼拝前後の)オルガン独奏",
    "example_sentence": "Voluntary work is a great way to give back to the community.",
    "translated_sentence": "ボランティア活動は地域に恩返しする素晴らしい方法です。"
  },
  {
    "entry": "undertake",
    "meaning_ja": "に着手する / 請け負う, を引き受ける, 始める / ...であることを保証する《that...》",
    "example_sentence": "I will undertake the project next week.",
    "translated_sentence": "来週、私はそのプロジェクトに着手します。"
  },
  {
    "entry": "development",
    "meaning_ja": "〈U〉〈C〉発達,発展,発育,成長;開発;進化  / 〈U〉(写真の)現像  / 〈C〉発達(発展)の結果できたもの  / 〈C〉開発した土地(地区);(特に)住宅団地(housing development)  / 〈C〉(最近の)でき事,新事実",
    "example_sentence": "The development of technology has greatly improved our lives.",
    "translated_sentence": "技術の発達により、私たちの生活は大きく向上しました。"
  },
  {
    "entry": "for",
    "meaning_ja": "《時間・距離》…の間  / 《利益・貢献》…のために  / 《適応・用途》…向けに  / 《目的・意向》…のために  / 《敬意・記念》…を記念して  / 《獲得・追求》…を得るために  / 《行く先・方向》…あてに;…行きの  / 《交換・報償など》…に対して / 《原因・理由》…のために  / 《代理・代表》…の代わりに  / 《形容詞の後に用いて》…にとって / 《比較級の後に用いて》…の結果として  / 《対比》…としては / 《関連》…について / 《資格・属性》…として / 《賛成・支持》…に賛成して / 《傾向・好み》…に対する",
    "example_sentence": "I'm studying English for my future.",
    "translated_sentence": "将来のために英語を勉強しています。"
  },
  {
    "entry": "giant",
    "meaning_ja": "巨大な,ものすごく大きい",
    "example_sentence": "I've never seen such a giant watermelon!",
    "translated_sentence": "こんな大きなスイカは見たことがない。"
  },
  {
    "entry": "great",
    "meaning_ja": "(規模・範囲などが)大きい,巨大な  / 多数の;多量の  / 偉大な,すぐれた;《the Great》《称号・肩書に用いて》  / (身分・地位などの)高い  / 気高い,崇高な  / 《名詞の前にのみ用いて》重要な,重大な  / 《人を表す名詞の前にのみ用いて》大の,たいへんな  / 《話》すてきな,すばらしい  / 《名詞的に》《the great》偉大な人たち,重要人物  / とても,すごく  / とてもよく(very well)  / 大物,花形",
    "example_sentence": "He is a great athlete.",
    "translated_sentence": "彼はすごいアスリートだ。"
  },
  {
    "entry": "half",
    "meaning_ja": "〈C〉〈U〉半分,2分の1;約半分  / 〈U〉《時刻を表す数詞と共に用いて》半,30分  / 〈C〉《おもに英》(2学期制の学校での)前(後)期  / 〈C〉(競技などの)前(後)半;(野球で1イニングの)表(裏)  / 〈C〉=halfback",
    "example_sentence": "I ate half of the cake.",
    "translated_sentence": "私はケーキの半分を食べた。"
  },
  {
    "entry": "verb",
    "meaning_ja": "動詞",
    "example_sentence": "She loves to dance.",
    "translated_sentence": "彼女は踊ることが大好きです。"
  },
  {
    "entry": "weigh",
    "meaning_ja": "〈他〉重さを量る, 熟考する, 比較検討する, 押し下げる, 圧迫する 〈自〉重さである, 重要である, 圧迫する",
    "example_sentence": "Can you weigh this package for me?",
    "translated_sentence": "この荷物の重さを量ってもらえますか？"
  },
  {
    "entry": "zone",
    "meaning_ja": "(何らかの目的・特徴などによって他の地域と区別された)地帯,地域,地区(belt, area)  / (気候によって地球を大別した)帯(たい)  / 《米》(交通・郵便などの)同一料金区域;(郵便番号で分けた)郵便区  / (環状の)ベルト,輪,帯",
    "example_sentence": "This area is known as the danger zone.",
    "translated_sentence": "この地域は危険地帯として知られています。"
  },
  {
    "entry": "software",
    "meaning_ja": "ソフトウェア(コンピューターに関係するプログラム・手順・規則などの文書類の総称)",
    "example_sentence": "I need to install the latest software update on my computer.",
    "translated_sentence": "私はコンピューターに最新のソフトウェアのアップデートをインストールする必要があります。"
  },
  {
    "entry": "type",
    "meaning_ja": "〈C〉(…の)型,タイプ,類型,種類(kind)《+of+名》  / 〈C〉(その種類の特質を最もよく表している)典型,手本,模範《+of+名》  / 〈U〉《集合的に》活字;〈C〉(1個の)活字  / 〈U〉(印刷された)字体,活字  / 〈C〉(貨幣・メダルなどの)模様,図柄  / 〈C〉血液型(blood group)",
    "example_sentence": "There are many types of music.",
    "translated_sentence": "音楽の種類はいろいろあります。"
  },
  {
    "entry": "update",
    "meaning_ja": "…を最新のものにする",
    "example_sentence": "I need to update my phone to the latest version.",
    "translated_sentence": "私は私の電話を最新バージョンに更新する必要があります。"
  },
  {
    "entry": "read",
    "meaning_ja": "〈他〉を読む / を読み上げる / 〈事〉を読んで知る / 〈隠れた意味など〉を読み取る / 〈自〉本を読む / 《...に》音読する, 読み上げる《to ...》",
    "example_sentence": "I read a book yesterday.",
    "translated_sentence": "昨日本を読んだ。"
  },
  {
    "entry": "vice",
    "meaning_ja": "〈U》悪徳 / 〈C〉悪徳行為 / 《話》悪癖",
    "example_sentence": "He was accused of being involved in various vices.",
    "translated_sentence": "彼はさまざまな悪徳に関与していると非難された。"
  },
  {
    "entry": "show",
    "meaning_ja": "〈物・姿・感情など〉を見せる,示す / …を示して教える / …を明らかにする,証明する /《副詞[句]を伴って》〈人〉を案内する / …を展示する;〈映画,劇など〉を上映する / 見える,姿を見せる / (ある状態に)見える《+形〈補〉》(進行形にできない) /《話》〈人が〉展示会を催す;商品を陳列する;〈映画・撃などが〉上映される",
    "example_sentence": "I showed him my house.",
    "translated_sentence": "私は彼に私の家を見せた。"
  },
  {
    "entry": "suit",
    "meaning_ja": "〈C〉スーツ  / 〈C〉《複合語を作って》(…用の)服  / 〈C〉訴訟,告訴(lawsuit)  / 〈C〉(カードゲームで)同種のカードの一組;同種のカードの持ち札  / 〈U〉〈C〉嘆願,懇願  / 〈U〉《古》求愛,求婚;嘆願  / 〈C〉(…の)一組,一そろい《+of+名》",
    "example_sentence": "He always wears a suit to work.",
    "translated_sentence": "彼はいつも仕事にスーツを着ています。"
  },
  {
    "entry": "surface",
    "meaning_ja": "(物の)表面,外面;水面  / 《比喩的に》うわべ,見かけ",
    "example_sentence": "The surface of the table is smooth.",
    "translated_sentence": "テーブルの表面は滑らかです。"
  },
  {
    "entry": "e-mail",
    "meaning_ja": "〈U〉（伝達手段としての）電子メール,Eメール / 〈C〉（個々の）電子メール",
    "example_sentence": "I received an e-mail from my boss this morning.",
    "translated_sentence": "今朝、上司から電子メールを受け取りました。"
  },
  {
    "entry": "tear",
    "meaning_ja": "〈C〉涙 / 泣くこと / 悲嘆 / しずく",
    "example_sentence": "She wiped away a tear from her eye.",
    "translated_sentence": "彼女は目から涙を拭いた。"
  },
  {
    "entry": "expression",
    "meaning_ja": "〈U/C〉《思想・意見・考えなどを》言葉で表すこと, 《…の》表現《of ...》  / 〈C〉《考え・気持ちなどの》あらわれ, 印《of ...》  / 《考え・気持ちなどを表す》顔つき, 表情《of ...》",
    "example_sentence": "He has a very expressive face.",
    "translated_sentence": "彼はとても表情豊かな顔をしています。"
  },
  {
    "entry": "lose",
    "meaning_ja": "〈物〉を失う,なくす,〈人・道など〉を見失う,〈仕事・権利・命など》を失う / 〈勝負事など〉に負ける / ...を保てなくなる / ...を逃す / 〈時計が〉〈ある時間〉だけ遅れる",
    "example_sentence": "I don't want to lose the game.",
    "translated_sentence": "私はゲームに負けたくない。"
  },
  {
    "entry": "aside",
    "meaning_ja": "わきへ, わきに / 別にしておいて / 考慮しないで / 《名詞の後で》...はさておき",
    "example_sentence": "He stepped aside to let her pass.",
    "translated_sentence": "彼は彼女が通るためにわきへと一歩退いた。"
  },
  {
    "entry": "observe",
    "meaning_ja": "観察する,監視する,守る,順守する",
    "example_sentence": "I like to observe nature and learn about different plants and animals.",
    "translated_sentence": "私は自然を観察して異なる植物や動物について学ぶのが好きです。"
  },
  {
    "entry": "promotion",
    "meaning_ja": "〈U〉〈C〉昇給, 進級 / 〈U〉《...を》押し進めること, 促進《of ...》 /〈C〉宣伝商品",
    "example_sentence": "She received a promotion at work.",
    "translated_sentence": "彼女は仕事で昇進を受けました。"
  },
  {
    "entry": "revise",
    "meaning_ja": "改訂する",
    "example_sentence": "I need to revise the document before the meeting.",
    "translated_sentence": "会議の前に文書を改訂する必要があります。"
  },
  {
    "entry": "thing",
    "meaning_ja": "〈C〉(形のある)物,物体;(生物に対しての)無生物  / 〈C〉(形のない)もの,事,事柄,でき事  / 《複数形で》事情,事態,状勢,状況  / 《複数形で》(すべての)事物,事柄  / 《通例 the~》(努力・活動などの)目的,目標  / 〈C〉衣服,衣類・《one's things》持ち物,所持品,身の回り品  / 《複数形で》道具,用具・〈C〉《親愛・哀れみ・軽べつなどの感情をこめて》人,者,やつ  / 《the~》《話》(…の)流行《+in+名》",
    "example_sentence": "I have a thing for you.",
    "translated_sentence": "君に用があるんだ。"
  },
  {
    "entry": "vehicle",
    "meaning_ja": "〈C〉(車・そりなどの) 乗り物 / (思想・感情・情報などの)伝達手段 / 〈U〉展色剤",
    "example_sentence": "I saw a vehicle parked on the street.",
    "translated_sentence": "私は通りに駐車された乗り物を見ました。"
  },
  {
    "entry": "ever",
    "meaning_ja": "《疑問文・否定文,また比較級・最上級の文で》かつて, 今まで / 《条件節,未来時制で》いつか,いずれ / 《疑問詞を強調して》《話》いったいぜんたい / 《肯定文に用いて》いつも,常に",
    "example_sentence": "Have you ever been to Japan?",
    "translated_sentence": "日本に行ったことがありますか？"
  },
  {
    "entry": "function",
    "meaning_ja": "〈C〉(人・物の果たすべき) 働き, 機能, 役目 / 《しばしば複数形で》職務 / (公式の)儀式 ,《話》大きな催し(集まり),式典/ (数学で)関数",
    "example_sentence": "He fulfilled the functions of a statesman.",
    "translated_sentence": "彼は政治家の職務をはたした。"
  },
  {
    "entry": "compute",
    "meaning_ja": "…'を'計算する,見積もる  / 計算する,算定する",
    "example_sentence": "I need to compute the total cost of the project.",
    "translated_sentence": "私はプロジェクトの総費用を計算する必要があります。"
  },
  {
    "entry": "hire",
    "meaning_ja": "を雇う / を借りる",
    "example_sentence": "They decided to hire a new employee.",
    "translated_sentence": "彼らは新しい従業員を雇うことを決めました。"
  },
  {
    "entry": "main",
    "meaning_ja": "《名詞の前にのみ用いて》おもな,主要な",
    "example_sentence": "The main purpose of this project is to improve efficiency.",
    "translated_sentence": "このプロジェクトの主な目的は効率を改善することです。"
  },
  {
    "entry": "mention",
    "meaning_ja": "〈他〉を簡単に述べる / の名を挙げる",
    "example_sentence": "I would like to mention that the meeting has been rescheduled.",
    "translated_sentence": "会議の日程が変更されたことをお伝えしたい。"
  },
  {
    "entry": "participate",
    "meaning_ja": "〈自〉《...に》 参加する, 加わる 《in, with ...》",
    "example_sentence": "I will participate in the marathon next month.",
    "translated_sentence": "来月、私はマラソンに参加します。"
  },
  {
    "entry": "prison",
    "meaning_ja": "〈C〉〈U〉刑務所,監獄,拘置所  / 〈C〉〈U〉(一般に)閉じ込めておく場所,幽閉所  / 〈U〉監禁",
    "example_sentence": "He was sentenced to five years in prison.",
    "translated_sentence": "彼は刑務所に５年入る刑を宣告された。"
  },
  {
    "entry": "sex",
    "meaning_ja": "〈U〉〈C〉性,性別  / 《the~》《形容詞を伴い集合的に》男性,女性  / 〈U〉(男女(雌雄)間の)相違[の意識]  / 〈U〉性に関する事柄(情報)  / 〈U〉性交",
    "example_sentence": "Sex education is important for young people.",
    "translated_sentence": "若者にとって性教育は重要です。"
  },
  {
    "entry": "witness",
    "meaning_ja": "〈C〉目撃者 / 証人",
    "example_sentence": "I was a witness to the accident.",
    "translated_sentence": "私はその事故の目撃者でした。"
  },
  {
    "entry": "implement",
    "meaning_ja": "実行する / 実施する / 実装する",
    "example_sentence": "The company plans to implement a new software system next month.",
    "translated_sentence": "会社は来月新しいソフトウェアシステムを導入する予定です。"
  },
  {
    "entry": "either",
    "meaning_ja": "《~ A or B》AかBかいずれか / 《否定文・文尾》 ...もまた(...ない)",
    "example_sentence": "I don't know what to do either.",
    "translated_sentence": "私もどうしたらいいのか分かりません。"
  },
  {
    "entry": "affect",
    "meaning_ja": "影響を与える",
    "example_sentence": "The heavy rain affected the traffic.",
    "translated_sentence": "激しい雨が交通に影響を与えました。"
  },
  {
    "entry": "burst",
    "meaning_ja": "破裂する, 爆発する / 急に...する  / を破裂させる",
    "example_sentence": "The balloon burst when it hit the sharp object.",
    "translated_sentence": "風船は鋭い物に当たった時に破裂した。"
  },
  {
    "entry": "safety",
    "meaning_ja": "〈U〉(…からの)安全,無事《+from(against)+名》  / (またsafety catch)〈U〉(銃などの)安全装置  / 〈C〉(アメリカンフットボールで)セーフティー(クォータバックなどのボールを持っている選手が自軍のエンド・ゾーン内にタックルされること。2得点。)",
    "example_sentence": "Safety is our top priority.",
    "translated_sentence": "安全は私たちの最優先事項です。"
  },
  {
    "entry": "participant",
    "meaning_ja": "参加者",
    "example_sentence": "The participant won first place in the competition.",
    "translated_sentence": "その参加者は競技で一位になりました。"
  },
  {
    "entry": "party",
    "meaning_ja": "〈C〉パーティー / 社交的な集まり / 一団 / 政党 / 関係者 / 当事者",
    "example_sentence": "We had a great party last night.",
    "translated_sentence": "昨晩はとても楽しいパーティーを開いた。"
  },
  {
    "entry": "poverty",
    "meaning_ja": "〈U〉貧困 / 不足",
    "example_sentence": "Poverty is a major issue in many developing countries.",
    "translated_sentence": "貧困は多くの発展途上国で重要な問題です。"
  },
  {
    "entry": "pursue",
    "meaning_ja": "(獲物・犯人など)を追う / (計画・勧告など)に従う / (目的・快楽など)を追求する",
    "example_sentence": "The detective pursued the suspect through the crowded streets.",
    "translated_sentence": "探偵は混雑した通りを犯人を追いかけた。"
  },
  {
    "entry": "communicate",
    "meaning_ja": "〈他〉を伝える / を伝染させる / 〈自〉《...と》通信する, 連絡する《with ...》",
    "example_sentence": "Effective communication is key to building strong relationships.",
    "translated_sentence": "効果的なコミュニケーションは強い関係を築くための鍵です。"
  },
  {
    "entry": "compromise",
    "meaning_ja": "〈U〉〈C〉《...との》 妥協, 和解 《with ...》 / 〈C〉妥協案, 折衷案",
    "example_sentence": "Finding a compromise is essential in any negotiation.",
    "translated_sentence": "どんな交渉でも妥協を見つけることが重要です。"
  },
  {
    "entry": "embrace",
    "meaning_ja": "抱きしめる、受け入れる",
    "example_sentence": "We need to embrace change to move forward.",
    "translated_sentence": "前進するためには変化を受け入れる必要があります。"
  },
  {
    "entry": "integrate",
    "meaning_ja": "〈他〉《...に》 を統合する, をまとめる 《into , with ...》 / (学校など)の人種差別をなくす",
    "example_sentence": "It is important to integrate new employees into the company culture.",
    "translated_sentence": "新入社員を会社の企業文化に溶け込ませることは重要です。"
  },
  {
    "entry": "satisfaction",
    "meaning_ja": "〈U〉《...を》 満足させること 《of ...》 / 《...に》 満足すること 《at, with ...》 / 〈C〉満足させるもの",
    "example_sentence": "Customer satisfaction is our top priority.",
    "translated_sentence": "お客様の満足度は私たちの最優先事項です。"
  },
  {
    "entry": "survey",
    "meaning_ja": "〈C〉〈U〉《…の》(詳細な)調査《of ...》 / 〈C〉《…を》見渡すこと《of ...》",
    "example_sentence": "We conducted a survey to find out the needs of our customers.",
    "translated_sentence": "私たちは顧客のニーズを探るために調査を実施した。"
  },
  {
    "entry": "transport",
    "meaning_ja": "〈他〉を輸送する",
    "example_sentence": "Oil is transported by tanker.",
    "translated_sentence": "石油はタンカーで運ばれる。"
  },
  {
    "entry": "sustain",
    "meaning_ja": "を持続する / を元気づける / (家族など)を養う / 《文》(物が下から)…を支える / (損害・傷害など)を受ける",
    "example_sentence": "We need to sustain our efforts to protect the environment.",
    "translated_sentence": "私たちは環境を保護するための取り組みを持続する必要があります。"
  },
  {
    "entry": "capture",
    "meaning_ja": "〈U〉(…を)つかまえること,(…の)捕獲,逗捕《+of+名》  / 〈C〉捕虜;捕獲した物(動物)",
    "example_sentence": "He managed to evade capture by the police.",
    "translated_sentence": "彼は警察の捕縛から逃れることに成功した。"
  },
  {
    "entry": "locate",
    "meaning_ja": "の位置を突き止める / (ある位置・場所に)…を置く",
    "example_sentence": "Can you help me locate my keys?",
    "translated_sentence": "私の鍵の場所を教えてもらえますか？"
  },
  {
    "entry": "mixture",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "nowadays",
    "meaning_ja": "(特に過去と比べて)今日では,このごろは",
    "example_sentence": "Nowadays, technology plays a crucial role in our daily lives.",
    "translated_sentence": "今日では、テクノロジーが私たちの日常生活で重要な役割を果たしています。"
  },
  {
    "entry": "obligation",
    "meaning_ja": "〈U〉(法律・社会・道徳上の) 義務 / 〈C〉恩義",
    "example_sentence": "It is our obligation to follow the rules and regulations.",
    "translated_sentence": "ルールと規則に従うことは私たちの義務です。"
  },
  {
    "entry": "prime",
    "meaning_ja": "最も重要な, 主要な / 最上の /",
    "example_sentence": "Prime Minister is the most important position in the government.",
    "translated_sentence": "首相は政府で最も重要な地位です。"
  },
  {
    "entry": "remark",
    "meaning_ja": "〈C〉感想,意見,発言 / 注記 / 〈U〉注目",
    "example_sentence": "She made a sarcastic remark about his outfit.",
    "translated_sentence": "彼女は彼の服装に皮肉な発言をした。"
  },
  {
    "entry": "select",
    "meaning_ja": "〈他〉(最適のものとして)を選ぶ, を精選する / 〈自〉選ぶ,精選する",
    "example_sentence": "I will select the best candidate for the job.",
    "translated_sentence": "私はその仕事のために最適な候補者を選びます。"
  },
  {
    "entry": "similarly",
    "meaning_ja": "類似して / 《文修飾語に用いて》同様に",
    "example_sentence": "Similarly, the chef added a pinch of salt to each dish to ensure consistent seasoning.",
    "translated_sentence": "同様に、シェフが一品一品に塩をひとつまみ加え、味付けを統一しています。"
  },
  {
    "entry": "undergo",
    "meaning_ja": "(変化・検査など)を受ける,を経験する / (困難など)に耐える",
    "example_sentence": "Many patients undergo medical tests to diagnose their condition.",
    "translated_sentence": "多くの患者は自分の状態を診断するために医学的な検査を受けます。"
  },
  {
    "entry": "urge",
    "meaning_ja": "〈他〉を駆り立てる / を強く促す / を力説する",
    "example_sentence": "I urge you to reconsider your decision.",
    "translated_sentence": "あなたに決定を再考するように促します。"
  },
  {
    "entry": "via",
    "meaning_ja": "...を経由して / ...によって",
    "example_sentence": "I traveled to Japan via Hong Kong.",
    "translated_sentence": "私は香港を経由して日本に旅行しました。"
  },
  {
    "entry": "distinction",
    "meaning_ja": "〈U〉〈C〉《...の間の》 区別, 差異, 相違 《between ...》 / 〈U〉(区別となる)特徴",
    "example_sentence": "This is such a critical distinction.",
    "translated_sentence": "これは非常に重要な違いだ。"
  },
  {
    "entry": "plot",
    "meaning_ja": "〈C〉小区画の土地 / (小説・劇などの) 筋 / 陰謀, たくらみ",
    "example_sentence": "The plot of the movie was full of twists and turns.",
    "translated_sentence": "その映画のストーリーは紆余曲折に満ちていた。"
  },
  {
    "entry": "request",
    "meaning_ja": "〈他〉(物事) を頼む, を要請する / (人) に頼む",
    "example_sentence": "Can you please request a meeting with the client?",
    "translated_sentence": "クライアントに会議のリクエストをしていただけますか？"
  },
  {
    "entry": "pattern",
    "meaning_ja": "〈C〉(壁紙・織物などの)模様 / 模範,手本 / 原型 / (行動・性資の) 型",
    "example_sentence": "The wallpaper has a beautiful pattern.",
    "translated_sentence": "壁紙には美しい模様があります。"
  },
  {
    "entry": "perceive",
    "meaning_ja": "(五感,特に目で)…に気がつく, を知覚する / を理解する, を悟る",
    "example_sentence": "I perceive a sense of calmness when I'm in nature.",
    "translated_sentence": "自然にいると落ち着きを感じます。"
  },
  {
    "entry": "sequence",
    "meaning_ja": "〈U/C〉(時間の上の,また因果関係のつながりによる)連続,続き / 〈C〉《a ~》 《...の》 一連のもの 《of ...》 / 《...に対する》 結果 《to ...》 / 〈U〉(起こる) 順序",
    "example_sentence": "The sequence of events was unexpected.",
    "translated_sentence": "一連の出来事は予想外だった。"
  },
  {
    "entry": "conventional",
    "meaning_ja": "従来の, 型にはまった / 慣例の, 因襲的な  / (核兵器に対して)通常兵器の",
    "example_sentence": "The company decided to stick with conventional methods for the project.",
    "translated_sentence": "その会社はプロジェクトにおいて従来の方法を使い続けることを決めた。"
  },
  {
    "entry": "apologize",
    "meaning_ja": "〈自〉《...に...について》 わびる, 謝罪する《to ... for, about ...》 / 弁解する, 言い訳する / 《...を》 弁護する 《for ...》",
    "example_sentence": "I must apologize for my late arrival.",
    "translated_sentence": "私の遅刻について謝らなければなりません。"
  },
  {
    "entry": "equation",
    "meaning_ja": "等式; 方程式",
    "example_sentence": "The equation is not correct.",
    "translated_sentence": "式が正しくありません。"
  },
  {
    "entry": "perception",
    "meaning_ja": "(五感で)《…に》 気付くこと《of ...》, 知覚 / 《…を》 知覚する力, 洞察力《of ...》",
    "example_sentence": "Her keen perception of people's emotions made her an excellent counselor.",
    "translated_sentence": "人々の感情に対する彼女の鋭い洞察力により、彼女は優れたカウンセラーとなった。"
  },
  {
    "entry": "resident",
    "meaning_ja": "〈C〉居住者",
    "example_sentence": "I am a resident of this city.",
    "translated_sentence": "私はこの都市の住民です。"
  },
  {
    "entry": "restore",
    "meaning_ja": "回復する / (元の状態に)…を復活させる, を復帰させる 《to ...》 / (元の形に) ...を修復する, を復元する / (盗品など)を返す,を返却する",
    "example_sentence": "He is working hard to restore the old house.",
    "translated_sentence": "彼は古い家を修復するために一生懸命働いています。"
  },
  {
    "entry": "council",
    "meaning_ja": "〈C〉諮問会, 協議会, 評議会 / 会議,協議  / (州・市・町議会など)地方自治体の議会",
    "example_sentence": "The council meeting was held to discuss important issues.",
    "translated_sentence": "重要な問題を議論するために、評議会の会議が開かれました。"
  },
  {
    "entry": "entitle",
    "meaning_ja": "(本など)に表題をつける / (人)に権利を与える, に資格をあたえる",
    "example_sentence": "The author can entitle their book with any name they choose.",
    "translated_sentence": "著者は自分が選んだ名前で本に表題をつけることができます。"
  },
  {
    "entry": "entry",
    "meaning_ja": "〈C/U〉入ること, 入場 / 〈C〉記載事項, 項目 / 《...の》 記入 《of ...》 / 参加者",
    "example_sentence": "There were fifty entries for the race.",
    "translated_sentence": "そのレースには５０人の参加者がいた。"
  },
  {
    "entry": "typical",
    "meaning_ja": "典型的な, 代表的な / 特色をよく示す,特徴的な",
    "example_sentence": "He is a typical example of a hardworking student.",
    "translated_sentence": "彼は勤勉な学生の典型的な例です。"
  },
  {
    "entry": "convince",
    "meaning_ja": "...を納得させる, ...を確信させる",
    "example_sentence": "I will convince him to join our team.",
    "translated_sentence": "私は彼を私たちのチームに参加させるように納得させます。"
  },
  {
    "entry": "construction",
    "meaning_ja": "〈U〉《...の》組立て, 建造《of ...》 / 構造, 造り / 〈C〉建築物",
    "example_sentence": "The construction of the new building is almost complete.",
    "translated_sentence": "新しい建物の組立てはほぼ完了しています。"
  },
  {
    "entry": "landscape",
    "meaning_ja": "〈C〉(土地の) 風景, 景色 / 風景画 / 〈U〉風景画法 /",
    "example_sentence": "The landscape of the countryside is breathtaking.",
    "translated_sentence": "田舎の風景は息をのむほど美しいです。"
  },
  {
    "entry": "preference",
    "meaning_ja": "〈U〉〈C〉好み / 好みの物を選ぶ権利,優先権 / 〈C〉好みのもの / 〈U〉〈C〉選好",
    "example_sentence": "I have a preference for spicy food.",
    "translated_sentence": "私は辛い食べ物が好きです。"
  },
  {
    "entry": "shine",
    "meaning_ja": "〈自〉光る, 輝く / 〈他〉《...に》…の光を向ける《on ...》 / 〈靴・銀器など〉をみがいて光らせる / 【名/U】《時にa~》 光",
    "example_sentence": "The sun shines brightly in the sky.",
    "translated_sentence": "太陽が空に明るく輝いています。"
  },
  {
    "entry": "shout",
    "meaning_ja": "〈自〉叫ぶ, 大声を出す《out》 / 〈他〉...を大声で言う, を叫ぶ《out》",
    "example_sentence": "He shouted at the top of his lungs.",
    "translated_sentence": "彼は全力で叫んだ。"
  },
  {
    "entry": "dollar",
    "meaning_ja": "〈C〉ドル (米国の貨幣単位で100セント;記号は$,$)  / 1ドル紙幣",
    "example_sentence": "I bought a cup of coffee with a dollar.",
    "translated_sentence": "私は1ドルでコーヒーを買った。"
  },
  {
    "entry": "instruction",
    "meaning_ja": "〈U〉《...の》 指導；教育 《in ...》 / 命令,指図",
    "example_sentence": "The teacher gave clear instructions to the students.",
    "translated_sentence": "先生は生徒たちに明確な指示を与えました。"
  },
  {
    "entry": "photo",
    "meaning_ja": "〈C〉《くだけて》写真",
    "example_sentence": "She took a photo of the sunset.",
    "translated_sentence": "彼女は夕焼けの写真を撮りました。"
  },
  {
    "entry": "strength",
    "meaning_ja": "〈U〉力, 体力 / (物の) 耐久力, 抵抗力, 影響力",
    "example_sentence": "She showed great strength in overcoming her fears.",
    "translated_sentence": "彼女は自分の恐怖心を克服するために大きな力を示しました。"
  },
  {
    "entry": "emphasis",
    "meaning_ja": "〈U〉《...に対する》強調, 重要視《on ...》 / 〈U〉〈C〉(音節・語・句などに置く)強勢,強調",
    "example_sentence": "He put emphasis on equality in his speech.",
    "translated_sentence": "彼は自分のスピーチの中で平等を強調した。"
  },
  {
    "entry": "fade",
    "meaning_ja": "衰える / 〈植物が〉しぼむ / しだいに消えてゆく《away》 / …を衰えさせる",
    "example_sentence": "The colors of the sunset slowly fade away.",
    "translated_sentence": "夕焼けの色が徐々に薄れていく。"
  },
  {
    "entry": "faith",
    "meaning_ja": "〈U〉信頼, 信用 / 誠実 / 《...への》信仰《in ...》 / 〈C〉教義, 信条",
    "example_sentence": "Having faith in oneself is important for personal growth.",
    "translated_sentence": "自分自身を信じることは、個人の成長にとって重要です。"
  },
  {
    "entry": "material",
    "meaning_ja": "〈U〉〈C〉材料, 原料 / 生地 / 〈U〉《小説・社会調査などの》資料《for ...》",
    "example_sentence": "The material used for this dress is silk.",
    "translated_sentence": "このドレスに使用されている素材はシルクです。"
  },
  {
    "entry": "recommendation",
    "meaning_ja": "〈U〉《...を》推薦すること《of ...》 / 〈C〉推薦状 / 長所",
    "example_sentence": "Do you have any recommendations for me about the best restaurants in town?",
    "translated_sentence": "街でおすすめのレストランがあれば教えてくれませんか？"
  },
  {
    "entry": "colleague",
    "meaning_ja": "〈C〉(会社・学校などの) 同僚 / (専門職業の) 仲間, 同業者",
    "example_sentence": "I have a meeting with my colleague tomorrow.",
    "translated_sentence": "明日、同僚と会議があります。"
  },
  {
    "entry": "divorce",
    "meaning_ja": "〈U〉〈C〉離婚",
    "example_sentence": "She filed for divorce after years of unhappiness in her marriage.",
    "translated_sentence": "彼女は結婚生活の数年間の不幸せの後、離婚を申請しました。"
  },
  {
    "entry": "manufacturer",
    "meaning_ja": "〈U〉(大規模な) 製造業者",
    "example_sentence": "The manufacturer produces high-quality products.",
    "translated_sentence": "そのメーカーは高品質な製品を生産しています。"
  },
  {
    "entry": "minister",
    "meaning_ja": "〈C〉聖職者, 牧師 / (英国・欧州諸国・日本の) 大臣 / 《…駐在》公使《to ...》",
    "example_sentence": "The prime minister addressed the nation in a televised speech.",
    "translated_sentence": "首相はテレビ演説で国民に対応しました。"
  },
  {
    "entry": "odd",
    "meaning_ja": "奇妙な, 変な / (対・組のうちの) 片方の / 余分の / 奇数の",
    "example_sentence": "It's odd that he didn't show up to the meeting.",
    "translated_sentence": "彼が会議に現れなかったのは奇妙だ。"
  },
  {
    "entry": "certain",
    "meaning_ja": "確信している / 碓かな / 必ず～する / 明白である / 若干の / ある,ある一定の",
    "example_sentence": "I am certain that I will pass the exam.",
    "translated_sentence": "私は試験に合格すると確信しています。"
  },
  {
    "entry": "deliver",
    "meaning_ja": "《...に》〈手紙・荷物など〉を配達する《to ...》 / 《…に》〈打撃・攻撃など〉を加える《to ...》 / 〈意見など〉を述べる / 《…から》〈人〉を救い出す《from ...》",
    "example_sentence": "The courier will deliver the package to your doorstep.",
    "translated_sentence": "宅配業者が荷物を玄関先に配達します。"
  },
  {
    "entry": "surely",
    "meaning_ja": "確かに, 疑いもなく / 《否定文で用いて》まさか, よもや / 《強意に用いて》きっと / 《おもに米》(返答で)いいとも,もちろん",
    "example_sentence": "Surely, you can't be serious.",
    "translated_sentence": "確かに、君は真剣ではないはずだ。"
  },
  {
    "entry": "glance",
    "meaning_ja": "〈C〉《...を》ちらりと見ること《at ...》",
    "example_sentence": "She took a quick glance at the clock before leaving the room.",
    "translated_sentence": "彼女は部屋を出る前に時計をちらっと見た。"
  },
  {
    "entry": "message",
    "meaning_ja": "〈C〉(文書・言葉・信号などによる)伝書, 通信 / 〈U〉《the ~》要旨,意図 / お告げ,神託",
    "example_sentence": "I received an important message from my boss.",
    "translated_sentence": "私は上司から重要なメッセージを受け取りました。"
  },
  {
    "entry": "silent",
    "meaning_ja": "音がしない, 静かな / 沈黙の",
    "example_sentence": "The library was silent, with only the sound of pages turning.",
    "translated_sentence": "図書館は静かで、ページがめくられる音だけが聞こえた。"
  },
  {
    "entry": "invite",
    "meaning_ja": "〈他〉《...に》〈人〉を招待する, を招く《to ...》 / …を丁重に依頼する /  〈物事が〉…を誘い起こす,を誘発する",
    "example_sentence": "I would like to invite you to my birthday party.",
    "translated_sentence": "私はあなたを私の誕生日パーティーに招待したいと思います。"
  },
  {
    "entry": "there",
    "meaning_ja": "そこで(に,へ) / その時に / その点で / 《文頭に置いて》そら,あれ / 《その場にいる人に》そこの人 / 《名詞の後に用いて》そこの,あそこの / 《~ is, are ...》…がある",
    "example_sentence": "We can find the answer if we look there.",
    "translated_sentence": "そこを見れば答えが見つかる。"
  },
  {
    "entry": "secret",
    "meaning_ja": "秘密の",
    "example_sentence": "He was charged with a secret mission.",
    "translated_sentence": "彼は極秘任務を与えられた。"
  },
  {
    "entry": "establishment",
    "meaning_ja": "〈U〉《...の》設立《of ...》 / (確立された) 制度 / 《the E-》体制",
    "example_sentence": "The establishment of the company was a significant milestone.",
    "translated_sentence": "会社の設立は重要な節目でした。"
  },
  {
    "entry": "online",
    "meaning_ja": "オンラインの",
    "example_sentence": "I prefer to shop online rather than going to the store.",
    "translated_sentence": "私は店に行くよりもオンラインで買い物する方が好きです。"
  },
  {
    "entry": "push",
    "meaning_ja": "〈他〉(動かすために)…を押す / 〈提案・要求など〉を押し進める / 〈人〉に押しつける / 〈自〉 押す",
    "example_sentence": "I push the door open.",
    "translated_sentence": "私はドアを押して開ける。"
  },
  {
    "entry": "expect",
    "meaning_ja": "〈他〉を予期する, 予想する / (当然のこととして)…を要求する / 〈物・事〉を期待する",
    "example_sentence": "I expect to receive the package tomorrow.",
    "translated_sentence": "明日、荷物を受け取ることを期待しています。"
  },
  {
    "entry": "unfortunately",
    "meaning_ja": "《...にとって》不幸にも, 運悪く, あいにく,  残念ながら《for ...》",
    "example_sentence": "Unfortunately, I missed the bus.",
    "translated_sentence": "不幸にも、私はバスに乗り遅れました。"
  },
  {
    "entry": "city",
    "meaning_ja": "〈C〉(特に行政権を持っている)都市, 都会 / 《米》市 / 《集合的に》都市の全市民,",
    "example_sentence": "I live in a big city.",
    "translated_sentence": "私は大きな都市に住んでいます。"
  },
  {
    "entry": "loud",
    "meaning_ja": "(音・声が) 大きい / 騒々しい, 派手な",
    "example_sentence": "The music at the concert was so loud that my ears were ringing.",
    "translated_sentence": "コンサートの音楽はとてもうるさかったので、耳鳴りがしました。"
  },
  {
    "entry": "reference",
    "meaning_ja": "〈U〉《...へ》言及すること《to ...》 / 《...を》参照すること《to ...》 / 〈C〉(本などの)出典 / 言及した事柄 / (人物・才能などの)証明書 / 〈他〉〈本･著者など〉を参考文献として引用する",
    "example_sentence": "I need to check the reference book for more information.",
    "translated_sentence": "もっと詳しい情報を得るために参考書を調べる必要があります。"
  },
  {
    "entry": "since",
    "meaning_ja": "...以後ずっと, ...以来ずっと / ...なので, ...だから",
    "example_sentence": "I have been studying English since I was in high school.",
    "translated_sentence": "私は高校の時からずっと英語を勉強しています。"
  },
  {
    "entry": "hair",
    "meaning_ja": "〈C〉(人間・動物の1本の) 毛 /〈U〉《集合的に》髪の毛 / 《a~》1本の毛ほどの量, ごくわずか",
    "example_sentence": "She has long, beautiful hair.",
    "translated_sentence": "彼女は長くて美しい髪を持っています。"
  },
  {
    "entry": "here",
    "meaning_ja": "《場所・位置》ここで, ここで / 《関連》この点で, この場合",
    "example_sentence": "Come here!",
    "translated_sentence": "ここに来て！"
  },
  {
    "entry": "mess",
    "meaning_ja": "〈U〉雑然としていること, 混乱 /〈C〉ごちゃごちゃになった物",
    "example_sentence": "Don't make a mess in your room.",
    "translated_sentence": "部屋を散らかさないでください。"
  },
  {
    "entry": "wave",
    "meaning_ja": "揺れる / うねる / 手を振る",
    "example_sentence": "She smiled, waving her hand.",
    "translated_sentence": "彼女は手を振りながらにっこり笑った。"
  },
  {
    "entry": "monitor",
    "meaning_ja": "〈C〉(人の行為についての)監視役 / 学級委員 / 監視装置 / モニター(新聞・ラジオに感想・批評を提供する人)",
    "example_sentence": "I need to buy a new monitor for my computer.",
    "translated_sentence": "私はコンピューター用の新しいモニターを買う必要があります。"
  },
  {
    "entry": "hope",
    "meaning_ja": "を望む, を期待する / 《I ~ that節》〈私は〉…だと思う / 《...を》望む, 期待する《for ...》",
    "example_sentence": "He hopes he'll win and I hope so too.",
    "translated_sentence": "彼は勝てると思っており、私もそう願っている。"
  },
  {
    "entry": "need",
    "meaning_ja": "《疑問文・否定文,また疑問・否定の内容を表す文で》…する必要がある,しなければならない / 《~ not have doneの形で》…する必要はなかったのに",
    "example_sentence": "It needs to be repaired.",
    "translated_sentence": "それは修理しなくちゃだめだよ。"
  },
  {
    "entry": "real",
    "meaning_ja": "(想像でなく)現実の / (まがいものでなく)本物の / 不動産の",
    "example_sentence": "He is living in the real world.",
    "translated_sentence": "彼は現実の世界で生活している。"
  },
  {
    "entry": "keep",
    "meaning_ja": "〈他〉〈物〉をずっと持っている / 〈物〉を保存しておく / 〈ある状態〉を保ち続ける / 〈約束・規則・慣習など〉を守る / の管理をする / 《…から》…を守る《from ...》 / 〈自〉保つ / (ある場所に)ずっといる",
    "example_sentence": "I will keep my promise.",
    "translated_sentence": "私は約束を守ります。"
  },
  {
    "entry": "all",
    "meaning_ja": "《単数形,または数えられない名詞につけて》(ある一つのものについて,その)全体の,全…,…じゅう,…全体 / 《複数形につけて》(個々を一つにまとめて)全部の,すべての / 《複数形,または数えられない名詞につけて》(ある全体の中の)いずれの,およそどの,あらゆる / 《数えられない名詞につけて》できる限りの,最大の",
    "example_sentence": "All the books on this shelf are mine.",
    "translated_sentence": "この棚にある本はすべて私のものです。"
  },
  {
    "entry": "regardless",
    "meaning_ja": "《...に》無頓着な《of ...》, 不注意な",
    "example_sentence": "She is regardless of her appearance.",
    "translated_sentence": "彼女は身なりを気にしていない。"
  },
  {
    "entry": "guess",
    "meaning_ja": "(十分な根拠なしに)…を推測する /  (正確な推測で)…を言い当てる / 《~ that》《米》…と思う / 《...を》推測する《at, about ...》",
    "example_sentence": "Can you guess the answer?",
    "translated_sentence": "答えを推測できますか？"
  },
  {
    "entry": "now",
    "meaning_ja": "今, 現在は / 《rightを伴って》ただちに, すぐに / さて, ところで, さあ",
    "example_sentence": "I will finish this work now.",
    "translated_sentence": "今この仕事を終えます。"
  },
  {
    "entry": "people",
    "meaning_ja": "〈U〉《複数扱い》(一般に) 人々 / 《複数扱い》世間の人 / 《複数扱い》(国家・自治体の) 住民 / 〈C〉国民, 民族",
    "example_sentence": "People are gathering in the park.",
    "translated_sentence": "公園に人々が集まっている。"
  },
  {
    "entry": "recommend",
    "meaning_ja": "〈他〉を推薦する / 《...することを》〈人〉に勧める《to do》 /〈事〉を勧める, を勧告する",
    "example_sentence": "I recommend this book to anyone who loves mystery novels.",
    "translated_sentence": "この本はミステリー小説が好きな人におすすめです。"
  },
  {
    "entry": "remove",
    "meaning_ja": "取り去る / 移す / 解任する",
    "example_sentence": "Please remove your shoes before entering the house.",
    "translated_sentence": "家に入る前に靴を脱いでください。"
  },
  {
    "entry": "stupid",
    "meaning_ja": "(人が)馬鹿な, 愚かな  / (言葉などが)馬鹿な, 非常識な / (物事が)面白くない,退屈な",
    "example_sentence": "He made a stupid mistake.",
    "translated_sentence": "彼は愚かな間違いをした。"
  },
  {
    "entry": "these",
    "meaning_ja": "これら,これ,こちら",
    "example_sentence": "These are the rules we must follow.",
    "translated_sentence": "これらは我々が守らなければならないルールです。"
  },
  {
    "entry": "god",
    "meaning_ja": "〈C〉(ギリシア・ローマ神話や多神教などの) 神 / 神像 / 〈U〉(キリスト教など一神教の) 神",
    "example_sentence": "God is always watching over us.",
    "translated_sentence": "神はいつも私たちを見守っています。"
  },
  {
    "entry": "pure",
    "meaning_ja": "(金など)混じりけのない, 純粋の / (水など)汚れていない, きれいな / 《名詞の前にのみ用いて》《話》全くの / 《名詞の前にのみ用いて》(応用的に対して)理論的な",
    "example_sentence": "She has pure intentions.",
    "translated_sentence": "彼女は純粋な意図を持っています。"
  },
  {
    "entry": "frame",
    "meaning_ja": "〈C〉(建造物・機械などの)骨組み / (戸・窓などの) 枠 / 体格",
    "example_sentence": "The picture looks better with a frame.",
    "translated_sentence": "絵は額縁に入れるとより良く見えます。"
  },
  {
    "entry": "luck",
    "meaning_ja": "〈U〉運, 巡り合わせ  / 幸運",
    "example_sentence": "I need luck to pass the exam.",
    "translated_sentence": "試験に合格するために運が必要だ。"
  },
  {
    "entry": "dedicate",
    "meaning_ja": "《...に》を奉納する / をささげる《to》 / に専念する",
    "example_sentence": "He dedicates himself to research.",
    "translated_sentence": "彼は研究に専念する。"
  },
  {
    "entry": "happy",
    "meaning_ja": "幸せな / 嬉しい",
    "example_sentence": "He was so happy that he smiled all the time.",
    "translated_sentence": "彼はとても幸せなので、いつも笑っていた。"
  },
  {
    "entry": "shelter",
    "meaning_ja": "〈U〉(雨・風,攻撃などからの) 保護,避難 / 《...からの》避難所《from ...》",
    "example_sentence": "I found shelter from the rain under a tree.",
    "translated_sentence": "私は木の下で雨宿りする場所を見つけました。"
  },
  {
    "entry": "we",
    "meaning_ja": "私たちは",
    "example_sentence": "We are going to the park today.",
    "translated_sentence": "今日は私たちは公園に行く予定だ。"
  },
  {
    "entry": "administration",
    "meaning_ja": "統治 / 管理 / 管理者 / 当局者 / 執行 / (しばしばthe A~) 政府、内閣",
    "example_sentence": "The administration of this company is very efficient.",
    "translated_sentence": "この会社の管理は非常に効率的です。"
  },
  {
    "entry": "a",
    "meaning_ja": "【冠詞】《oneの弱い意味で》一つの / 《~ certain》ある / 《同種類のものを代表してany, eachの弱い意味で》…というものは / 《単位を表す語につけて》…につき",
    "example_sentence": "I need a pen to write a letter.",
    "translated_sentence": "ペンが必要です/手紙を書くには"
  },
  {
    "entry": "about",
    "meaning_ja": "…について,に関して  / 《英》…の回りに(を),の周囲を(で)(《米》[[around]])  / 《英》…のあちこちに(で,を),に点々と(《米》[[around]])  / 《英》…のあたりに(を),の近くに([[near]])(《米》[[around]])  / …の身の回りに,を手もとに  / …の身辺に,のどこかに  / …に従事して,にかかわって",
    "example_sentence": "I am writing a report about the environmental issues.",
    "translated_sentence": "私はレポートを書いています/環境問題についての"
  },
  {
    "entry": "abroad",
    "meaning_ja": "海外へ(で),外国に(で)  / 《古》戸外へ  / 広く;(うわさなどが)広まって",
    "example_sentence": "I am planning to study abroad next year.",
    "translated_sentence": "私は来年、海外で勉強する予定です。"
  },
  {
    "entry": "abstract",
    "meaning_ja": "抽象的な / 理論的な",
    "example_sentence": "The concept of love is quite abstract.",
    "translated_sentence": "愛の概念はかなり抽象的です。"
  },
  {
    "entry": "absolutely",
    "meaning_ja": "絶対的に, 完全に / 無条件に / 《話》(返事や合いの手として)そのとおり,まったく",
    "example_sentence": "You are absolutely right.",
    "translated_sentence": "全くおっしゃる通りです。"
  },
  {
    "entry": "acceptable",
    "meaning_ja": "受け入れられる,認められる / 人に喜ばれる",
    "example_sentence": "Your proposal is perfectly acceptable.",
    "translated_sentence": "あなたの提案は完全に受け入れられます。"
  },
  {
    "entry": "account",
    "meaning_ja": "〈C〉口座 / 報告 / 理論 / 記述; 会計記録 / つけ / 取引",
    "example_sentence": "I need to create a new account on this website.",
    "translated_sentence": "このウェブサイトで新しいアカウントを作成する必要があります。"
  },
  {
    "entry": "accompany",
    "meaning_ja": "【動/他】(人など)に同行する / に付随して起こる / (歌・歌手)の伴奏をする",
    "example_sentence": "I'll accompany you to the airport.",
    "translated_sentence": "空港までお伴しましょう。"
  },
  {
    "entry": "act",
    "meaning_ja": "行動する,行う  / 《様態を表す副詞[句]を伴って》わざとふるまう,見せかける  / 〈人・物が〉(…として)動く,役割をはたす《+as+名》  / 〈薬が〉作用する,きく  / 舞台に立つ,出演する  / 〈…の役〉'を'演ずる;〈劇〉'を'上演する  / …‘に'ふさわしくふるまう  / …‘に'見せかける,‘の'ふりをする",
    "example_sentence": "The soldier acted bravely.",
    "translated_sentence": "その兵士は勇敢に振る舞った。"
  },
  {
    "entry": "ad",
    "meaning_ja": "〈C〉｟くだけて｠ 広告",
    "example_sentence": "I saw an interesting ad in the newspaper today.",
    "translated_sentence": "今日、新聞で面白い広告を見ました。"
  },
  {
    "entry": "acquire",
    "meaning_ja": "取得する",
    "example_sentence": "The company plans to acquire a new software to improve their system.",
    "translated_sentence": "その会社は、システムを改善するために新しいソフトウェアを取得する予定です。"
  },
  {
    "entry": "acquisition",
    "meaning_ja": "〈U〉《...を》獲得すること, 習得すること 《of ...》 / 〈C〉取得したもの, 《...に》 加わったもの(人) 《to ...》",
    "example_sentence": "The acquisition of a new language can be a challenging but rewarding process.",
    "translated_sentence": "新しい言語の習得は、困難だが見返りのあるプロセスになるでしょう。"
  },
  {
    "entry": "action",
    "meaning_ja": "〈U〉行動, 活動, 精力的な活動 / 〈C〉行為, 行い, 《複数形で》日常の行動, ふるまい / 〈U〉(機械などの) 働き, 機能 / (薬・化学薬品などの) 作用",
    "example_sentence": "Your action has consequences.",
    "translated_sentence": "あなたの行動には結果が伴います。"
  },
  {
    "entry": "addition",
    "meaning_ja": "〈U〉付け加えること / 追加 / 足し算〈C〉加えられた物",
    "example_sentence": "The addition of these two numbers equals ten.",
    "translated_sentence": "これら 2 つの数字を足すと 10 になります。"
  },
  {
    "entry": "adjust",
    "meaning_ja": "〈他〉を調整する / 《...に》 を合わせる 《to ...》 / を調停する / 〈自〉《...に》順応する, 適応する《to ...》",
    "example_sentence": "I need to adjust the settings of my computer.",
    "translated_sentence": "私はコンピュータの設定を調整する必要があります。"
  },
  {
    "entry": "advantage",
    "meaning_ja": "利点,長所,強み；有利,優位,好都合",
    "example_sentence": "The advantage of living in the city is the convenience of public transportation.",
    "translated_sentence": "都市に住む利点は公共交通の利便性です。"
  },
  {
    "entry": "advise",
    "meaning_ja": "〈他〉を忠告する, を助言する, を勧める / 〈自〉《...について》 忠告する 《on ...》",
    "example_sentence": "I advise you to take a break.",
    "translated_sentence": "あなたには休憩を取ることを勧めます。"
  },
  {
    "entry": "against",
    "meaning_ja": "...に対して, に逆らって / 《保護を表す動詞と共に》…から / ...にぶつかって / ...にもたれて / ...に備えて / ...を背景として",
    "example_sentence": "She stood up against the injustice.",
    "translated_sentence": "彼女は不公平に対して立ち上がった。"
  },
  {
    "entry": "agency",
    "meaning_ja": "〈C〉代理店 / (政府の)機関 / 〈U〉(事の達成を助ける)力,働き / 仲介, 媒介, 世話",
    "example_sentence": "I work for a travel agency that specializes in international tours.",
    "translated_sentence": "私は国際ツアーを専門とする旅行代理店で働いています。"
  },
  {
    "entry": "agree",
    "meaning_ja": "〈人が〉意見が一致する,合意する;同意する,賛成する  / 〈物事が〉《…と》合致する,一致する《with ...》  / 《…と》いっしょにうまくやる《with ...》  / (文章で)〈人称・性・数・格が〉一致する  / …に意見が一致する,同意する",
    "example_sentence": "I completely agree with your opinion on this matter.",
    "translated_sentence": "私はこの問題についてのあなたの意見に完全に同意します。"
  },
  {
    "entry": "aid",
    "meaning_ja": "〈U〉助力,援助；手当て〈C〉助けとなるもの",
    "example_sentence": "The Red Cross provides aid to disaster victims.",
    "translated_sentence": "赤十字は災害被災者に援助を提供しています。"
  },
  {
    "entry": "alarm",
    "meaning_ja": "〈C〉警報, 警報機 / 〈C〉(不意に危険を感じた時の)恐怖,驚愕",
    "example_sentence": "There is no cause for undue alarm.",
    "translated_sentence": "過度に心配する必要はない。"
  },
  {
    "entry": "aim",
    "meaning_ja": "目的、目標、狙い",
    "example_sentence": "My aim is to become a successful entrepreneur.",
    "translated_sentence": "私の目標は、成功した起業家になることです。"
  },
  {
    "entry": "airline",
    "meaning_ja": "〈C〉定期航空, 定期航空路 / (空港・航空機などの)定期航空設備 / 定期航空会社",
    "example_sentence": "I booked my flight with a popular airline.",
    "translated_sentence": "私は人気のある航空会社でフライトを予約しました。"
  },
  {
    "entry": "ally",
    "meaning_ja": "同盟(連合)させる",
    "example_sentence": "The two nations decided to ally for mutual defense.",
    "translated_sentence": "二つの国は相互防衛のために同盟を結ぶことを決定した。"
  },
  {
    "entry": "alongside",
    "meaning_ja": "...のそばに, ...と並んで",
    "example_sentence": "The boat was alongside the quay.",
    "translated_sentence": "そのボートは波止場につながれていた。"
  },
  {
    "entry": "already",
    "meaning_ja": "《肯定文で》もう,すでに  / 《驚き・意外の意を表して》《疑問文で》もう,早くも;《否定文で》まさか",
    "example_sentence": "I have already finished my homework.",
    "translated_sentence": "私はもう宿題を終えました。"
  },
  {
    "entry": "alter",
    "meaning_ja": "〈他〉（形・性質などの点で）を変える,改める / 〈自〉変わる,改まる",
    "example_sentence": "The tailor had to alter the dress to fit me.",
    "translated_sentence": "仕立て屋は私に合うようにドレスを直さなければなりませんでした。"
  },
  {
    "entry": "alternative",
    "meaning_ja": "二者択一の / 代わりの / 普通とは違った",
    "example_sentence": "You have to make an alternative choice between studying abroad or finding a job.",
    "translated_sentence": "あなたは留学するか仕事を見つけるかという二者択一の選択をしなければなりません。"
  },
  {
    "entry": "although",
    "meaning_ja": "...ではあるが, ...だが",
    "example_sentence": "Although it was raining, we decided to go for a walk.",
    "translated_sentence": "雨が降っていたが、私たちは散歩に行くことに決めた。"
  },
  {
    "entry": "among",
    "meaning_ja": "...の間に / 《おもに最上級と共に》…の中の一つ / 《分配を表す動詞と共に》…の間で",
    "example_sentence": "She was among the first to arrive at the party.",
    "translated_sentence": "彼女はパーティーに最初に到着した人々の中にいました。"
  },
  {
    "entry": "analyst",
    "meaning_ja": "(状況などの)分析者,解説者  / (科学・経済・政治の)分析者  / 《米》精神分析家(医)(psychoanalyst)",
    "example_sentence": "The analyst carefully analyzed the situation and provided a detailed report.",
    "translated_sentence": "分析者は状況を注意深く分析し、詳細なレポートを提供しました。"
  },
  {
    "entry": "analysis",
    "meaning_ja": "〈U〉(内容・状況などの)分析,分解, 解剖 / (詳細な)検討 / (化学・物理で)分析,《米》(心理学で)[精神]分析;(数学で)解析",
    "example_sentence": "The analysis of the data revealed some interesting trends.",
    "translated_sentence": "データの分析がいくつかの興味深いトレンドを明らかにした。"
  },
  {
    "entry": "another",
    "meaning_ja": "もう一つの,もう一人の  / 別の,ほかの(different)  / もう一つ,もう一人  / 別のもの(人),違ったもの(人)  / 似たもの,同類",
    "example_sentence": "Let's try another restaurant for lunch today.",
    "translated_sentence": "今日の昼食は別のレストランにしましょう。"
  },
  {
    "entry": "announcement",
    "meaning_ja": "〈C〉《...についての》発表,公表 《about ...》 / 布告,告示",
    "example_sentence": "The company made an announcement about the new product launch.",
    "translated_sentence": "その会社は新製品の発売についての発表をしました。"
  },
  {
    "entry": "answer",
    "meaning_ja": "〈C〉(質問・要求に対する)答え,回答([[reply]]),(手紙に対する)返事《to ...》 / 《…に対する》応報, 仕返し 《to ...》/ (問題に対する)解答,正解《to ...》 / (一般に)《…に対する》解答,説明,(被告人の)答弁,申し開き《to, for ...》",
    "example_sentence": "\"[[Right on]], that's the right answer!\"",
    "translated_sentence": "「その通り、正解だ！」"
  },
  {
    "entry": "any",
    "meaning_ja": "《疑問文・条件節で》いくらかの,何か,だれか /《否定文で》少しも,何も,だれも / 《肯定文で,単数名詞につけて》どんな…でも",
    "example_sentence": "Is there any chance you could help me with this?",
    "translated_sentence": "これを手伝ってくれる可能性は何かありますか？（これを手伝っていただけたりしますか？）"
  },
  {
    "entry": "anything",
    "meaning_ja": "《疑問文・条件節で》何か / 《否定文で》何も,どんなことも / 《肯定文で》なんでも, どんなものでも",
    "example_sentence": "I will give you anything you want.",
    "translated_sentence": "君が欲しいものを何でもあげるよ。"
  },
  {
    "entry": "apparent",
    "meaning_ja": "明白な, はっきりした / 外見上の,見かけの, うわべの",
    "example_sentence": "Her disappointment was apparent to everyone.",
    "translated_sentence": "彼女の失望は誰の目にも明白だった。"
  },
  {
    "entry": "appeal",
    "meaning_ja": "(助力などの)訴え;哀願《+for+名》  / (権威などへの)訴え《+to+名》  / 控訴,上告  / (…に)訴える魅力《+to+名》",
    "example_sentence": "There was a look of appeal in her eyes.",
    "translated_sentence": "彼女の目には訴えるような表情があった。"
  },
  {
    "entry": "apply",
    "meaning_ja": "〈他〉《...に》 を適応する 《to ...》 / 《...に》 を当てる 《to ...》 / 《...に》 (心・努力など) を傾ける 《to ...》 / 〈自〉《...に》 適用される 《to ...》 / 《...に...を》 申し込む, 出願する 《to ... for ...》",
    "example_sentence": "I decided to apply for the job after much consideration.",
    "translated_sentence": "よく考えた結果、その仕事に応募することにしました。"
  },
  {
    "entry": "April",
    "meaning_ja": "4月(《略》Apr.)",
    "example_sentence": "April is the month of blooming flowers.",
    "translated_sentence": "4月は花が咲く月です。"
  },
  {
    "entry": "appreciate",
    "meaning_ja": "〈他〉(よさ・価値など)を認める / (作品など) を味わう、観賞する / (好意など)をありがたく思う, 感謝する / 〈自〉価値(価格, 評価)が上がる",
    "example_sentence": "I really appreciate your help.",
    "translated_sentence": "あなたの助けを本当に感謝しています。"
  },
  {
    "entry": "application",
    "meaning_ja": "〈U〉《...の...への》 適用, 応用 《of ... to ...》 / 〈U〉〈C〉《...への》申し込み, 申請《for, to ...》 / 〈U〉《...に》 専心すること 《to ...》",
    "example_sentence": "Jane filled out an application.",
    "translated_sentence": "ジェーンは申込書に必要事項を書き入れた。"
  },
  {
    "entry": "area",
    "meaning_ja": "〈U〉〈C〉面積  / 〈C〉地域,地方(region, district)  / 〈C〉(活動・研究・興味などの及ぶ)範囲,領域(range)《+of+名》  / 〈C〉《英》=areaway 1",
    "example_sentence": "The area of this room is 20 square meters.",
    "translated_sentence": "この部屋の面積は20平方メートルです。"
  },
  {
    "entry": "architecture",
    "meaning_ja": "〈U〉建築術, 建築学 / 〈U〉〈C〉(ある時代・国などの)建築様式 / (一般に)構成",
    "example_sentence": "The architecture of the building is stunning.",
    "translated_sentence": "建物の建築は見事です。"
  },
  {
    "entry": "arm",
    "meaning_ja": "《…で》…を武装させる《with ...》 / 《必要・有用なもので》〈人〉を防備させる,を堅固にする《with ...》 / 《…に》武装して備える《for, against ...》 / 《...で》防備する《with ...》",
    "example_sentence": "He wrapped a bandage around his forearm to arm himself in advance.",
    "translated_sentence": "彼は前もって武装するために腕に包帯を巻いた。"
  },
  {
    "entry": "army",
    "meaning_ja": "《ときにA-》陸軍  / 《the A-》軍隊;(一国の全)軍隊  / (共通の主義・主張のために組織された)(…の)団体,集団《+of+名》  / (人・動物などの)大群《+of+名》",
    "example_sentence": "The army is preparing for the upcoming battle.",
    "translated_sentence": "陸軍は、今後の戦闘のために準備をしています。"
  },
  {
    "entry": "art",
    "meaning_ja": "〈U〉〈C〉芸術, 芸術作品 / 〈C〉技術, 技法 / 〈U〉《複数形で・単数扱い》人文科学",
    "example_sentence": "She enjoys visiting art galleries and museums.",
    "translated_sentence": "彼女は美術館や博物館を訪れることを楽しんでいます。"
  },
  {
    "entry": "ashamed",
    "meaning_ja": "恥じて, 恥ずかしく思って / 《補語にのみ用いて》《...するのを》 ためらって, 気後れして 《to do》",
    "example_sentence": "I felt ashamed of my behavior.",
    "translated_sentence": "私は自分の行動に恥ずかしさを感じました。"
  },
  {
    "entry": "assign",
    "meaning_ja": "〖A to B/BA〗AをBに割り当てる,課す,配分する；指定する；譲渡する",
    "example_sentence": "I will assign you a new task.",
    "translated_sentence": "新しいタスクをあなたに割り当てます。"
  },
  {
    "entry": "association",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "assist",
    "meaning_ja": "を手伝う, 助ける / 《...を》 手伝う, 助ける 《in, with ...》",
    "example_sentence": "I will assist you in completing your project.",
    "translated_sentence": "私はあなたがプロジェクトを完成させるのを手伝います。"
  },
  {
    "entry": "attachment",
    "meaning_ja": "〈U〉《...への》取り付け, 付着《to ...》〈C〉《...の》付属品《to/for ...》 / 《...への》愛着, 愛情《for ...》",
    "example_sentence": "Please check the attachment for more details.",
    "translated_sentence": "詳細は添付ファイルをご確認ください。"
  },
  {
    "entry": "attack",
    "meaning_ja": "〈U〉〈C〉(…に対する)攻撃;(ゲームの)攻め;非難《+on(upon, against)+名》  / 〈C〉発病,発作  / 〈U〉(仕事への)着手,開始",
    "example_sentence": "The bear suddenly attacked the campers.",
    "translated_sentence": "その熊は突然キャンパーたちを襲った。"
  },
  {
    "entry": "attempt",
    "meaning_ja": "を企てる, を試みる",
    "example_sentence": "I will attempt to finish the project by tomorrow.",
    "translated_sentence": "私は明日までにプロジェクトを終えることを試みます。"
  },
  {
    "entry": "attend",
    "meaning_ja": "に出席する  / の世話をする / 《...に》注意する《to》/ 《...に》励む《to》",
    "example_sentence": "I will attend the meeting tomorrow.",
    "translated_sentence": "私は明日、会議に出席します。"
  },
  {
    "entry": "attention",
    "meaning_ja": "〈U〉(…に対する)注意,注意力《+to+名》  / 〈U〉世話,思いやり(consideration)  / 《複数形で》親切,(特に婦人に対する)心づかい  / 〈U〉「気をつけ」の号令,気をつけの姿勢",
    "example_sentence": "Please pay attention to the traffic signals.",
    "translated_sentence": "交通信号に注意してください。"
  },
  {
    "entry": "attitude",
    "meaning_ja": "〈U〉《人・物に対する》態度, 姿勢《toward, to, on ...》 /",
    "example_sentence": "Your attitude towards work is commendable.",
    "translated_sentence": "あなたの仕事に対する態度は称賛に値します。"
  },
  {
    "entry": "author",
    "meaning_ja": "著者,作者,作家,著作者  / (…の)創始者,創造者,張本人《+of+名》  / (ある著者の)著書,作品",
    "example_sentence": "The author of this book is very famous.",
    "translated_sentence": "この本の著者はとても有名です。"
  },
  {
    "entry": "autumn",
    "meaning_ja": "〈C〉〈U〉秋",
    "example_sentence": "The beauty of autumn leaves is breathtaking.",
    "translated_sentence": "秋の紅葉の美しさは息をのむほどだ。"
  },
  {
    "entry": "award",
    "meaning_ja": "(審査して) 《...に》 〈賞など〉を与える,を授ける 《to ...》",
    "example_sentence": "The film was awarded the best picture at the festival.",
    "translated_sentence": "その映画は、フェスティバルで最優秀作品賞を受賞しました。"
  },
  {
    "entry": "away",
    "meaning_ja": "離れて",
    "example_sentence": "She walked away from the accident scene.",
    "translated_sentence": "彼女は事故現場から歩いて立ち去った。"
  },
  {
    "entry": "bad",
    "meaning_ja": "悪い,不良の;不正な  / 適当でない,欠陥のある  / 《補語にのみ用いて》《…に》有害な《for ...》  / 病気の  / ひどい,激しい,重い  / 腐敗した,腐った  / 不快な,いやな  / へたな,まずい  / 《補語にのみ用いて》《話》《…を》悪いと(残念に)思っている《about ...》",
    "example_sentence": "The food was bad.",
    "translated_sentence": "その食べ物はおいしくなかった。"
  },
  {
    "entry": "bag",
    "meaning_ja": "袋  / 袋状の物  / (女性の)ハンドバッグ;旅行かばん,スーツケース  / (…の)1袋分の量《+of+名》  / (野球の)走塁ベース  / 獲物入れ;(猟の)獲物",
    "example_sentence": "I'm going to buy a bag.",
    "translated_sentence": "私はバッグを買うつもりです。"
  },
  {
    "entry": "back",
    "meaning_ja": "後方へ,後ろに([[backward]]) / (場所・状態が)もとへ,帰って,返して / (時間的に)さかのぼって,今から…前に([[ago]])",
    "example_sentence": "He looked back and saw a car approaching.",
    "translated_sentence": "彼は後ろを振り返り、車が近づいてくるのを見ました。"
  },
  {
    "entry": "balance",
    "meaning_ja": "〈C〉天秤,はかり〈U〉〈C〉釣り合い,均衡 / 調和, 残高",
    "example_sentence": "The balance of nature is very fragile.",
    "translated_sentence": "自然界のバランスはとてもこわれやすい。"
  },
  {
    "entry": "ball",
    "meaning_ja": "〈C〉球, ボール / 〈U〉球技, 野球 / 〈C〉弾丸 / 球状のもの / 《俗》睾丸(こうがん) /",
    "example_sentence": "I bought a new ball.",
    "translated_sentence": "私は新しいボールを買った。"
  },
  {
    "entry": "band",
    "meaning_ja": "【名/C】《人の》一隊, 一団《of ...》 / 楽隊,バンド / 【動/他】…を一隊(一団)にする / 【動/自】団結する《together》 / 《…と》一団になる《with ...》",
    "example_sentence": "I love listening to live music from my favorite band.",
    "translated_sentence": "私はお気に入りのバンドのライブ音楽を聴くのが大好きです。"
  },
  {
    "entry": "bank",
    "meaning_ja": "【名/C】土手,堤 / 川岸 / (土手のように)長く盛り上がったもの  / 傾斜 / 【動/他】を土手で囲う / …に土手を築く / …を土手のように積み上げる《up》 / 【動/自】積み重なる,層を成す《up》",
    "example_sentence": "I need to go to the bank to withdraw some money.",
    "translated_sentence": "私はお金を引き出すために銀行に行く必要があります。"
  },
  {
    "entry": "bank",
    "meaning_ja": "〈C〉銀行 / 貯金箱 / 貯蔵",
    "example_sentence": "I deposited my money in the bank.",
    "translated_sentence": "私は私のお金を銀行に預金しました。"
  },
  {
    "entry": "base",
    "meaning_ja": "〈C〉基礎, 根拠 / 基部 / 本拠地, 基地",
    "example_sentence": "The base of the tower is made of concrete.",
    "translated_sentence": "塔の基礎はコンクリートでできています。"
  },
  {
    "entry": "basis",
    "meaning_ja": "〈C〉《考えなどの》 基礎 《of, for ...》 / 基準, ...制 / (議論などの) 根拠 / (混合物の)主成分",
    "example_sentence": "The basis of his argument was fundamentally flawed.",
    "translated_sentence": "彼の議論の基礎は根本的に欠陥があった。"
  },
  {
    "entry": "barely",
    "meaning_ja": "ほとんど...ない / かろうじて, わずかに, やっと / むきだしに, あからさまに",
    "example_sentence": "I barely managed to catch the last train.",
    "translated_sentence": "私はかろうじて最後の電車に乗ることができました。"
  },
  {
    "entry": "beach",
    "meaning_ja": "浜,海岸  / 海水浴場  / 〈ボートなど〉'を'浜に引き上げる",
    "example_sentence": "We had a great day at the beach.",
    "translated_sentence": "私たちはビーチで素晴らしい一日を過ごしました。"
  },
  {
    "entry": "bear",
    "meaning_ja": "〈C〉熊 / 〈C〉乱暴者 / (株式で)売り方",
    "example_sentence": "The bear ran across the field.",
    "translated_sentence": "熊は野原を走っていった。"
  },
  {
    "entry": "because",
    "meaning_ja": "(なぜならば)…だから,…ゆえに  / 《否定文の主節とともに用い》…であるからといって  / 《おもに話》《名詞節を導いて》…ということ",
    "example_sentence": "I went to the store because I needed milk.",
    "translated_sentence": "牛乳が必要だから店に行ったんだ。"
  },
  {
    "entry": "before",
    "meaning_ja": "《場所・位置》前へ(に),前方へ(に),先へ(に)  / 《時》以前に,すでに([[already]]);今までに,その時までに  / (予定より)早く,前に",
    "example_sentence": "Please step before.",
    "translated_sentence": "前へ進んでください。"
  },
  {
    "entry": "behind",
    "meaning_ja": "過ぎ去って,過去に  / 《場所・位置》後ろに,陰に[隠れて]  / 《leave,remain,stayなどの動詞と共に用いて》後に  / (定められた時刻に)遅れて;(知識・仕事・進歩などが)遅れて",
    "example_sentence": "The days of our youth are now far behind.",
    "translated_sentence": "私たちの若い日々は今や遠く過ぎ去っています。"
  },
  {
    "entry": "bell",
    "meaning_ja": "鐘,釣り鐘;鈴,ベル,りん  / 〈U〉鐘(鈴,ベル)の音  / 〈C〉鐘(ベル)状のもの  / 〈C〉点鐘(船の当直交替を0時から4時間ごとに区切り,その間を30分ごとに1‐8点鐘で時を報じる.例えば2つ鳴らすことを2点鐘といい,午前または午後の1時,5時,9時を指す.8点鐘は当直交替の時間)",
    "example_sentence": "The bell rang at 8 o'clock.",
    "translated_sentence": "8時にベルが鳴った。"
  },
  {
    "entry": "bend",
    "meaning_ja": "〈他〉を曲げる / 《...に》を従わせる《to ...》 / 《...に》(関心など)を向ける《to ...》〈自〉曲がる / 身をかがめる / 従う",
    "example_sentence": "Can you bend your knees?",
    "translated_sentence": "あなたは膝を曲げることができますか？"
  },
  {
    "entry": "bet",
    "meaning_ja": "〈金・物〉'を'かける  / (かけ事・ゲームなどで)〈人〉‘と'かけをする《+名〈人〉+on+名》  / (…に)かける《+on(against)+名(one's doing)》",
    "example_sentence": "I wouldn't bet on his success in the competition.",
    "translated_sentence": "私は彼が大会で成功することに賭けるつもりはない。"
  },
  {
    "entry": "beyond",
    "meaning_ja": "《場所》…を越えて,の向こうに(へ)  / 《数詞つきの句とともに》…から[いくつ目]  / 《時間》…を過ぎて,よりも遅く  / 《程度・範囲》…の限度を越えて;…以上に(above)  / 《通例否定文・疑問文で》…よりほかには,以外に  / 向こうに,かなたに  / 《the~》かなた,果て  / 《the [great]~》あの世",
    "example_sentence": "The park is just beyond that building.",
    "translated_sentence": "その建物を越えたところに公園があります。"
  },
  {
    "entry": "big",
    "meaning_ja": "(大きさ・高さ・広さ・数量・容積などについて)大きい  / 成長した(grown-up),成熟した;年長の(older)  / 《話》重要な  / 尊大な,ごう慢な  / 寛大な,心の大きい  / 《補語にのみ用いて》(…に)満ちて《+with+名》  / 《補語にのみ用いて》(子を)宿して《+with+名》",
    "example_sentence": "The house was big.",
    "translated_sentence": "その家は大きかった。"
  },
  {
    "entry": "bid",
    "meaning_ja": "《文》(権威をもって)〈人〉に命じる / 《...に》〈あいさつ・祝福などの言葉〉を言う《to ...》 / (競売などで)《…に》〈値〉をつける《for, on ...》",
    "example_sentence": "The king bid his subjects to prepare for the upcoming war.",
    "translated_sentence": "王は、その臣民に来るべき戦争の準備を命じた。"
  },
  {
    "entry": "bit",
    "meaning_ja": "〈C〉《...の》小片,少量,少し 《of ...》 / 《a~》《話》わずかの時間,しばらく / ちよっと,少し",
    "example_sentence": "I need a bit of sugar for this recipe.",
    "translated_sentence": "このレシピには少し砂糖が必要です。"
  },
  {
    "entry": "bite",
    "meaning_ja": "をかむ, をかじる / かむ",
    "example_sentence": "The dog tried to bite the intruder.",
    "translated_sentence": "その犬は侵入者に噛みつこうとした。"
  },
  {
    "entry": "blame",
    "meaning_ja": "〈U〉責任；非難",
    "example_sentence": "He tried to put the blame on me.",
    "translated_sentence": "彼は私に責任を押し付けようとした。"
  },
  {
    "entry": "blow",
    "meaning_ja": "〈風が〉吹く /  風で動く,なびく / 〈風が〉…を吹く, を吹き動かす",
    "example_sentence": "The wind began to blow strongly.",
    "translated_sentence": "風が強く吹き始めた。"
  },
  {
    "entry": "bone",
    "meaning_ja": "〈C〉骨  / 〈U〉骨を作っている物質,骨質  / 《複数形で》骨格;死骸(がい)",
    "example_sentence": "He found a bone in the garden.",
    "translated_sentence": "彼は庭に骨を見つけた。"
  },
  {
    "entry": "boom",
    "meaning_ja": "〈C〉〈遠雷・砲声・波などが〉とどろく音 / にわか景気,急な人気",
    "example_sentence": "The sudden boom in the economy has led to an increase in job opportunities.",
    "translated_sentence": "急激な経済のブームが、雇用機会の増加につながっている。"
  },
  {
    "entry": "boost",
    "meaning_ja": "後押し / 増加",
    "example_sentence": "Regular exercise can boost your energy levels.",
    "translated_sentence": "定期的な運動はエネルギーレベルを増加させることができます。"
  },
  {
    "entry": "border",
    "meaning_ja": "ヘリ,縁(ふち)端(はし);端に沿った部分  / (衣服・絵画などの)縁飾り,縁取り  / 国境,境界;国境地方,辺境;《the B-》《米》米国とメキシコとの国境地方;《英》イングランドとスコットとの国境地方",
    "example_sentence": "The soldiers patrolled the border to ensure security.",
    "translated_sentence": "兵士たちはセキュリティを確保するために国境を巡回した。"
  },
  {
    "entry": "bother",
    "meaning_ja": "やっかい",
    "example_sentence": "What is all this bother about?",
    "translated_sentence": "この騒ぎはどうしたの。"
  },
  {
    "entry": "bottom",
    "meaning_ja": "(物の)底《+of+名》  / (海・川・湖・井戸などの)底《+of+名》  / (…の)下部,底部,根元《+of+名》  / (…の)根底,基礎;(…の)心底,奥底《+of+名》  / 船底,船腹;(一般に)船,船舶  / 《話》しり(posterior)  / 《複数形で》川沿いの低地(低い牧草地)  / 最低の;最後の  / 底の;根底の",
    "example_sentence": "The cat was sleeping on the bottom of the bed.",
    "translated_sentence": "猫はベッドの下で眠っていた。"
  },
  {
    "entry": "boss",
    "meaning_ja": "〈C〉ボス,上役, 上司, 親方 /",
    "example_sentence": "My boss is very strict.",
    "translated_sentence": "私の上司はとても厳しいです。"
  },
  {
    "entry": "boy",
    "meaning_ja": "少年,男の子  / 《しばしば所有格を伴って》むすこ  / 《しばしば複数形で》青年,若い男  / 《話,特に米南部方言》(年齢に関係なく)男,仲間  / 給仕,下男  / 《the boys》飲み(遊び,仕事)仲間  / 《米話》やあ(その他,歓喜・驚きを表す時に用いられる)",
    "example_sentence": "The boy ran around the park.",
    "translated_sentence": "男の子は公園を駆け回った。"
  },
  {
    "entry": "brain",
    "meaning_ja": "脳,脳髄  / 《しばしば複数形で》頭脳,知力  / 《話》秀才,知的指導者",
    "example_sentence": "The brain is a complex organ.",
    "translated_sentence": "脳は複雑な臓器です。"
  },
  {
    "entry": "break",
    "meaning_ja": "…を壊す / …を役に立たなくする / 〈法律・規則・約束など〉を破る / 《…に》…を打ち明ける《to ...》 / …を破産させる / 《しばしば副詞[句]を伴って》壊れる /",
    "example_sentence": "She broke the window with a rock.",
    "translated_sentence": "彼女は岩を使い窓を壊した。"
  },
  {
    "entry": "breath",
    "meaning_ja": "〈U〉息,呼吸;UC〉1回の吸気(め気)  / 〈C〉(風の)そよぎ;(…の)かすかなかおり《+of+名》  / 〈C〉(…の)ささやき(whisper)《+of+名》",
    "example_sentence": "Take a deep breath and relax.",
    "translated_sentence": "深呼吸をしてリラックスしてください。"
  },
  {
    "entry": "bright",
    "meaning_ja": "輝いている,びかびかの(shining)  / うららかな,晴れた  / 生き生きした,元気のよい(cheerful)  / 未望な(promising)  / (色が)鮮やかな,鮮明な(clear)  / りこうな(clever),気のきいた(smart)  / 明るく,輝いて(brightly)",
    "example_sentence": "The sky was a bright blue.",
    "translated_sentence": "空は明るい青色だった。"
  },
  {
    "entry": "breast",
    "meaning_ja": "〈C〉胸, 胸部 / 乳房 / 《文》胸中",
    "example_sentence": "She felt a lump in her breast and immediately went to see a doctor.",
    "translated_sentence": "彼女は乳房にしこりを感じ、すぐに医者に診てもらいました。"
  },
  {
    "entry": "bridge",
    "meaning_ja": "〈Ｃ〉橋 / 鼻柱 / (めがねの)ブリッジ",
    "example_sentence": "We crossed the bridge to reach our destination.",
    "translated_sentence": "私たちは目的地に到達するために橋を渡りました。"
  },
  {
    "entry": "bring",
    "meaning_ja": "〈物〉‘を'持ってくる  / 〈人が〉(…に)〈人〉‘を'連れてくる《+名〈人〉+to+名》  / 〈物事が〉(…に)〈人〉‘を'来させる,引き寄せる《+名+to+名》  / 〈物事〉をもたらす,引き起こす  / (ある状態・結果・動作などに)…‘を'する  / (…に対して)〈訴訟〉を起こす《+名+for(against)+名》",
    "example_sentence": "He brought a cake to the party.",
    "translated_sentence": "彼はパーティーにケーキを持ってきた。"
  },
  {
    "entry": "brother",
    "meaning_ja": "兄弟,兄,弟  / 同僚,仲間;同業者  / 《文》同胞;同一教会員,同じ信仰の友  / (失望・不快・驚きを表して)いまいましい,ちきしょう",
    "example_sentence": "My brother and I are going to the movies.",
    "translated_sentence": "私の兄弟と私は映画に行く予定だ。"
  },
  {
    "entry": "budget",
    "meaning_ja": "〈C〉《...の》予算, 予算案《for ...》",
    "example_sentence": "I need to create a budget for my upcoming trip.",
    "translated_sentence": "私は今度の旅行のために予算を作成する必要があります。"
  },
  {
    "entry": "brush",
    "meaning_ja": "…にブラシをかける, をブラシでこする(みがく,払う) / (ブラシをかけるようにして,手で)…を払いのける / (通りすがりに)…をかする, に軽く触れる / 《…を》かすめて通る,かする《past, by, against ...》",
    "example_sentence": "I brush my hair every morning.",
    "translated_sentence": "毎朝、私は髪にブラシをかけます。"
  },
  {
    "entry": "bunch",
    "meaning_ja": "〈C〉《...の》 束, ふさ 《a ~ of ...》 / 《話》《…の》 群れ 《of ...》 / 《米》 多数の..., 大量の... 《a ~ of ...》",
    "example_sentence": "I bought a bunch of flowers for my mom's birthday.",
    "translated_sentence": "私は母の誕生日に花束を買いました。"
  },
  {
    "entry": "burn",
    "meaning_ja": "燃える,焼ける / 焦げる / 光を出す, 熱を出す / を燃やす, を焼く",
    "example_sentence": "Don't touch the hot stove, you might burn yourself.",
    "translated_sentence": "熱いコンロに触らないで、自分を火傷するかもしれません。"
  },
  {
    "entry": "bury",
    "meaning_ja": "〈他〉死体) を埋める, を埋葬する / (見えないように)…をおおい隠す / を深く突っ込む / 《...に》 (人)を没頭させる 《in ...》",
    "example_sentence": "He decided to bury the treasure in the backyard.",
    "translated_sentence": "彼は宝を裏庭に埋めることに決めた。"
  },
  {
    "entry": "buy",
    "meaning_ja": "〈他〉…を買う / (ある金額で) …が買える / (代償を払って)…を獲得する",
    "example_sentence": "I will buy a new car.",
    "translated_sentence": "新しい車を買おう。"
  },
  {
    "entry": "buyer",
    "meaning_ja": "買い手,購入者  / (小売店などの)仕入れ係,バイヤー",
    "example_sentence": "The buyer was impressed with the quality of the product.",
    "translated_sentence": "バイヤーは製品の品質に感銘を受けた。"
  },
  {
    "entry": "call",
    "meaning_ja": "〈他〉を呼ぶ / 〈人〉に電話をかける / 〈自〉《...を》訪問する《on, at ...》",
    "example_sentence": "I'm going to make a call to my friend.",
    "translated_sentence": "友達に電話をかけるつもりだ。"
  },
  {
    "entry": "can",
    "meaning_ja": "《能力》...することができる / 《話》《許可・軽い命令》…してもよい; 《疑問文で》…してくれませんか / 《平叙文で》《可能性・推量》…であり得る, ...しうる / 《否定文で》…のはずがない,ではあり得ない / 《疑問文で》いったい…だろうか　",
    "example_sentence": "I can swim.",
    "translated_sentence": "私は泳ぐことができます。"
  },
  {
    "entry": "capability",
    "meaning_ja": "〈U/C〉能力,才能,手腕；素質,可能性",
    "example_sentence": "She has the capability to solve complex problems.",
    "translated_sentence": "彼女は複雑な問題を解決する能力を持っています。"
  },
  {
    "entry": "capable",
    "meaning_ja": "能力がある / 有能な",
    "example_sentence": "She is a capable leader who can handle any challenge.",
    "translated_sentence": "彼女はどんな挑戦も乗り越えられる、能力のあるリーダーです。"
  },
  {
    "entry": "capacity",
    "meaning_ja": "〈U〉(建物などの) 収容力,(容器などの) 容量, 容積 / 〈U〉(人の) 能力 / 〈C〉《...の》資格, 地位《of, as ...》",
    "example_sentence": "The stadium has a capacity of 50,000 people.",
    "translated_sentence": "そのスタジアムの収容人数は5万人です。"
  },
  {
    "entry": "capital",
    "meaning_ja": "首都 / 大文字 / 資本",
    "example_sentence": "Tokyo is the capital of Japan.",
    "translated_sentence": "東京は日本の首都です。"
  },
  {
    "entry": "career",
    "meaning_ja": "〈C〉生涯,(一生の)経歴  / 〈C〉(特に専門的訓練を要する)職業  / 〈U〉進展,進行;速力;疾走  / 疾走する,全速力で走る",
    "example_sentence": "She has had a successful career in finance.",
    "translated_sentence": "彼女は金融業界で成功したキャリアを築いてきた。"
  },
  {
    "entry": "cat",
    "meaning_ja": "猫;(ライオン,トラ,ヒョウなどの)ネコ科の動物",
    "example_sentence": "The cat is sleeping in the bed.",
    "translated_sentence": "猫はベッドで寝ています。"
  },
  {
    "entry": "category",
    "meaning_ja": "(論理学・哲学で)範疇(はんちゅう)(ある体系の中でその内容特質に応じて分けた部門)",
    "example_sentence": "Logic is a category in philosophy.",
    "translated_sentence": "論理学は哲学の範疇です。"
  },
  {
    "entry": "cause",
    "meaning_ja": "〈他〉の原因となる, を引き起こす / 〈人〉に...させる《someone to do》",
    "example_sentence": "Smoking can cause lung cancer.",
    "translated_sentence": "喫煙は肺がんの原因となる可能性があります。"
  },
  {
    "entry": "cell",
    "meaning_ja": "細胞；独房,監房；電池；通話可能区域；携帯電話；(大組織内の)小グループ",
    "example_sentence": "He was locked in a small cell for days.",
    "translated_sentence": "彼は数日間、小さな独房に閉じ込められていた。"
  },
  {
    "entry": "century",
    "meaning_ja": "1世紀,100年間  / (古代ローマ軍隊の)百人隊;百人組(古代ローマの選挙単位);100の1組  / 《米話》100ドル,100ドル紙幣  / (クリケットで)100点(100runs)",
    "example_sentence": "The invention of the printing press in the 15th century revolutionized the way information was disseminated.",
    "translated_sentence": "15世紀の印刷機の発明は、情報の伝達方法を革命的に変えました。"
  },
  {
    "entry": "chairman",
    "meaning_ja": "〈C〉議長, 委員長 / (会社の)会長 / (大学の)学部長",
    "example_sentence": "The chairman called the meeting to order.",
    "translated_sentence": "議長が会議の開会を宣言した。"
  },
  {
    "entry": "challenge",
    "meaning_ja": "〈U〉〈C〉挑戦 / 手ごたえのある事",
    "example_sentence": "I love taking on a new challenge.",
    "translated_sentence": "新しい挑戦をするのが好きです。"
  },
  {
    "entry": "champion",
    "meaning_ja": "チャンピオン；優勝者",
    "example_sentence": "He is a tennis champion.",
    "translated_sentence": "彼はテニスの優勝者です。"
  },
  {
    "entry": "character",
    "meaning_ja": "〈U〉〈C〉(人の)性格, 人格 / 〈C〉(物事が持っている)特質,特性 / (小説・劇などの)登場人物 / (意味を表す)文字,記号,字体",
    "example_sentence": "He has a strong character.",
    "translated_sentence": "彼は強い性格を持っている。"
  },
  {
    "entry": "charge",
    "meaning_ja": "〈C〉《...の》費用《for ...》 / 〈U〉監督, 管理 / 〈C〉《...に対する》非難, 告発, 告訴《against ...》 / 〈U〉〈C〉充填  / 〈U〉〈C〉突撃",
    "example_sentence": "Will there be an extra charge for that?",
    "translated_sentence": "それには追加料金がかかりますか。"
  },
  {
    "entry": "charity",
    "meaning_ja": "〈U〉博愛 / 慈善, 施し / 〈C〉《通例複数形で》慈善事業,慈善施設",
    "example_sentence": "She always donates generously to charity.",
    "translated_sentence": "彼女はいつも慈善団体に寛大に寄付をしています。"
  },
  {
    "entry": "charm",
    "meaning_ja": "魅力，魅了、味がある",
    "example_sentence": "She has a natural charm that captivates everyone around her.",
    "translated_sentence": "彼女は周りの人々を魅了する自然な魅力を持っています。"
  },
  {
    "entry": "chart",
    "meaning_ja": "図表",
    "example_sentence": "The chart illustrates how the body works.",
    "translated_sentence": "その図は体の働きを説明している。"
  },
  {
    "entry": "cheese",
    "meaning_ja": "チーズ",
    "example_sentence": "I love cheese!",
    "translated_sentence": "私はチーズが大好きです！"
  },
  {
    "entry": "choose",
    "meaning_ja": "(多数の中から)〈人・物〉'を'選択する,選ぶ  / 〈事〉‘に'決める  / (…の中から)選択をする,選ぶ《~between(from)+名》  / 欲する,望む",
    "example_sentence": "I chose the red one.",
    "translated_sentence": "私は赤いのを選んだ。"
  },
  {
    "entry": "church",
    "meaning_ja": "〈C〉(特に,キリスト数の)教会,教会堂  / 〈U〉(教会で行う)礼拝  / 〈U〉《しばしばC-》教派  / 《the ~》全キリスト教徒  / 《the ~,the C-》聖職,牧師の職  / 《集合的に》(同じ建物で礼拝する,または会衆(congregation)を構成する)キリスト教徒たち",
    "example_sentence": "The church was filled with people.",
    "translated_sentence": "教会には人々でいっぱいだった。"
  },
  {
    "entry": "cigarette",
    "meaning_ja": "紙巻きたばこ",
    "example_sentence": "He smokes a cigarette after dinner.",
    "translated_sentence": "彼は夕食後に紙巻きたばこを吸います。"
  },
  {
    "entry": "circle",
    "meaning_ja": "円を描く,旋回する  / …'を'円で囲む;…'を'取り囲む  / …‘の'回りを回る",
    "example_sentence": "A helicopter circled over us.",
    "translated_sentence": "ヘリコプターが我々の上を一周した。"
  },
  {
    "entry": "civilian",
    "meaning_ja": "【名/C】(軍人・警官などに対して) 一般市民,民間人,文民 / 【形】民間の, 一般市民の / (武官に対して)文官の",
    "example_sentence": "The government is working to protect the rights of civilians.",
    "translated_sentence": "政府は市民の権利を保護するために取り組んでいます。"
  },
  {
    "entry": "classic",
    "meaning_ja": "(一つの分野の中で)規範となる,典型的な;第1級の  / 伝統的な,由緒のある(traditional)  / (型・様式などについて)単純で洗練された  / 古典の;古典的な(classical)",
    "example_sentence": "Classic literature often serves as a benchmark for other works in the same genre.",
    "translated_sentence": "古典文学はしばしば同じジャンルの他の作品の基準となります。"
  },
  {
    "entry": "considerable",
    "meaning_ja": "考慮に値する / かなりの",
    "example_sentence": "He is under considerable stress.",
    "translated_sentence": "彼はかなりのストレスを感じている。"
  },
  {
    "entry": "clearly",
    "meaning_ja": "はっきりと / 疑いもなく,明らかに / 《返事として》もちろんそのとおり,いかにも",
    "example_sentence": "She spoke clearly and confidently during the presentation.",
    "translated_sentence": "彼女はプレゼン中にはっきりと自信を持って話しました。"
  },
  {
    "entry": "clock",
    "meaning_ja": "〈C〉置き時計; 掛け時計",
    "example_sentence": "I set my alarm clock for 5am.",
    "translated_sentence": "私は5時に目覚まし時計をセットした。"
  },
  {
    "entry": "close",
    "meaning_ja": "…を閉じる,を閉める([[shut]]) / …をふさぐ([[fill]]) / 〈仕事・話など〉を終える,を済ませる / 〈通路・施設など〉を一時的に閉じる / (一つにまとまるように)…をつめる / 〈ドア・目・花などが〉閉じる,閉まる / 〈話・相談・契約などが〉終わる,終了する,〈店などが〉休業する / くっつく,接近する([[come together]])",
    "example_sentence": "Please close the door.",
    "translated_sentence": "ドアを閉めてください。"
  },
  {
    "entry": "club",
    "meaning_ja": "こん棒  / (ゴルフなどの)クラブ,打球棒  / (社交・スポーツなどの)クラブ,同好会;クラブ室,クラブ会館  / (カードで)クラブのマーク;クラブの札;《複数形で》《単数・複数扱い》クラブの組  / ナイトクラブ  / …'を'こん棒でなぐる",
    "example_sentence": "I went to the club last night.",
    "translated_sentence": "昨晩私はクラブに行った。"
  },
  {
    "entry": "closely",
    "meaning_ja": "ぴったりと, きっちりと / 詳しく, じっくりと / 近く",
    "example_sentence": "She watched closely as the magician performed his tricks.",
    "translated_sentence": "彼女はマジシャンがトリックを披露するのをじっくり見た。"
  },
  {
    "entry": "cluster",
    "meaning_ja": "【名/C】《花・果実などの》ふさ《of ...》 /  《密集した人・物などの》集団, 群れ / 【動/自】《...のまわりに》群がる《around ...》",
    "example_sentence": "The data points are grouped into a cluster based on their similarities.",
    "translated_sentence": "データポイントは類似性に基づいてクラスタにグループ化されます。"
  },
  {
    "entry": "close",
    "meaning_ja": "《...に》(距離・時間・関係が)近い,接近している《to ...》 / 《名詞の前にのみ用いて》親密な,親しい / ぎっしり詰まった,密集した / きめの細かい / 綿密な,厳重な([[strict]])  / 息がつまる,重苦しい([[stuffy]]) / 厳重に隠された,秘密の / ほとんど同等の,匹敵する / 《補語にのみ用いて》(金銭が)乏しい;《…に》けちな([[stingy]])《with ...》 / (音声が)閉鎖音の",
    "example_sentence": "The store is close to my house.",
    "translated_sentence": "その店は私の家に近いです。"
  },
  {
    "entry": "coal",
    "meaning_ja": "〈U〉石炭 / 〈C〉(一個の)石炭 / 燃えている燃料",
    "example_sentence": "Coal is a fossil fuel that is used for power generation and heating.",
    "translated_sentence": "石炭は発電や暖房に使用される化石燃料です。"
  },
  {
    "entry": "coast",
    "meaning_ja": "海岸, 沿岸",
    "example_sentence": "This road extends to the coast.",
    "translated_sentence": "この道路は海岸まで伸びている。"
  },
  {
    "entry": "column",
    "meaning_ja": "(柱頭・台座のついた)円柱  / (…の)円柱状の物,柱《+of+名》  / (新聞などの)欄,段;(積み重ねた数字の)縦行;(印刷の)縦段  / コラム(署名した筆者による定期的寄稿欄)  / (軍隊の)縦隊;(艦船・飛行機などの)縦列",
    "example_sentence": "The ancient temple had a beautiful column with intricate carvings.",
    "translated_sentence": "古代の寺院には、複雑な彫刻が施された美しい円柱がありました。"
  },
  {
    "entry": "combination",
    "meaning_ja": "〈U〉(…の)結合,組み合わせ;〈C〉(…の)組み合わされたもの,結合体《+of+名》  / 〈U〉(…との)連合,団結,共同,提携;〈C〉連合体,共同体,組合《+with+名》  / 〈C〉=combination lock  / 《複数形で》(また《話》coms)コンビネーション(上下続きの肌着)",
    "example_sentence": "The combination of flavors in this dish is amazing.",
    "translated_sentence": "この料理の味の組み合わせは素晴らしいです。"
  },
  {
    "entry": "command",
    "meaning_ja": "〈C〉命令〈U〉指揮 / 抑制",
    "example_sentence": "He issued a command to his troops.",
    "translated_sentence": "彼は部隊に命令を出した。"
  },
  {
    "entry": "commit",
    "meaning_ja": "〈罪・過失など〉を犯す / 《…に》…を委託する《to ...》 / 《しばしば受動態で》に専念する / を約束する",
    "example_sentence": "He committed a crime.",
    "translated_sentence": "彼は犯罪を犯しました。"
  },
  {
    "entry": "community",
    "meaning_ja": "〈C〉(文化的・歴史的遺産を共有する)共同会社,地域会社・共同体;(共通の特質・利害を持つ人たちによる)社会,…界  / 《the ~》一般社会,公衆(the pubic)  / 〈U〉(財産などの)共用,共有(思想・利害などの)共通,一致《+of+名》  / 〈C〉(植物の)軍落,(動物の)群生",
    "example_sentence": "The community came together to celebrate their shared cultural heritage.",
    "translated_sentence": "コミュニティの人々は、共通の文化遺産を祝うために集まりました。"
  },
  {
    "entry": "comparison",
    "meaning_ja": "《...と...との》 比較 《of ... with ...》, 《…間の》比較《between ...》 / 《…を…に》たえること《of ... with, to ...》 / (形容詞・副詞の)比較変化",
    "example_sentence": "The comparison of their performance showed that Jane was a more effective leader than Mark.",
    "translated_sentence": "彼らのパフォーマンスを比較すると、ジェーンの方がマークよりも有能なリーダーであることがわかりました。"
  },
  {
    "entry": "complexity",
    "meaning_ja": "複雑さ,〈C〉複雑なもの",
    "example_sentence": "Understanding the complexity of the human brain is a challenging task.",
    "translated_sentence": "人間の脳の複雑さを理解することは困難な課題です。"
  },
  {
    "entry": "complicate",
    "meaning_ja": "...を複雑にする",
    "example_sentence": "Your refusal to help complicated matters.",
    "translated_sentence": "君が援助を断ったので、事態がややこしくなった。"
  },
  {
    "entry": "computer",
    "meaning_ja": "コンピューター / 計算機 / 電子計算機 / PC（personal computer）",
    "example_sentence": "I bought a new computer.",
    "translated_sentence": "私は新しいコンピューターを買った。"
  },
  {
    "entry": "compound",
    "meaning_ja": "〈C〉混合物,化合物 / 複合語",
    "example_sentence": "Alumina is a white crystalline compound.",
    "translated_sentence": "アルミナは白色の結晶化合物です。"
  },
  {
    "entry": "compose",
    "meaning_ja": "を構成する / 〈詩など〉を作る,を書く, 〈曲〉を作る, 〈絵の構図〉を作る / 〈自分,自分の気持ち〉を静める / 〈活字〉を組む, …を活字に組む / 〈争いなど〉を解決する,を調停する / 詩を作る, 作曲する",
    "example_sentence": "The committee is composed of members from different departments.",
    "translated_sentence": "その委員会は、異なる部署のメンバーで構成されている。"
  },
  {
    "entry": "confidence",
    "meaning_ja": "〈U〉信頼 / 《...を》信頼すること《in ...》 / (自分の思想・能力・行動などに対する) 確信,自信 / 〈C〉打ち明け話",
    "example_sentence": "She spoke with confidence during the presentation.",
    "translated_sentence": "彼女はプレゼン中に自信を持って話しました。"
  },
  {
    "entry": "connect",
    "meaning_ja": "〈2個の物〉'を'連結する,結びつける;(…と)…'を'結合する電話でつなぐ《+名+with(to)+名》  / 《受動態で》(…と)…'を'関係させる,親類関係にする《+名+with+名》  / (…で)…'を'連想する,結びつけて考える《+名+with+名》  / 〈物・事柄などが〉(…と)関連している,つながる《+with+名(wh-節)》  / 〈交通機関が〉(…と)連絡(接続)している《+with+名》",
    "example_sentence": "I need to connect two pieces of wood.",
    "translated_sentence": "私は2つの木材を連結する必要があります。"
  },
  {
    "entry": "consideration",
    "meaning_ja": "〈U〉《...の》 考慮, 熟慮 《to ...》 / 〈C〉考慮すべきこと / 〈U〉《...への》 思いやり , 配慮《for ...》 / 〈C〉報酬,心づけ,償い / 〈U〉《まれ》重要さ,重大さ;尊敬,丁重",
    "example_sentence": "I appreciate your consideration.",
    "translated_sentence": "あなたの配慮に感謝しています。"
  },
  {
    "entry": "consumer",
    "meaning_ja": "(…の)消費者 ; (…を)消費(浪費)する物(事)《+of+名》",
    "example_sentence": "In general, consumers prefer quantity to quality.",
    "translated_sentence": "一般的に、消費者は質よりも量を選ぶ。"
  },
  {
    "entry": "consistent",
    "meaning_ja": "矛盾のない / (主義・考え方などが)不変の, 一貫した, (人が)節操のある / 《...と》一致した《with ...》",
    "example_sentence": "His actions are consistent with his words.",
    "translated_sentence": "彼の行動は、彼の言動と一致している。"
  },
  {
    "entry": "constant",
    "meaning_ja": "不変の, 一定の / 絶え間のない, 不断の /",
    "example_sentence": "His constant complaining is such a botheration.",
    "translated_sentence": "彼の絶え間ない不平は本当にうるさい。"
  },
  {
    "entry": "construct",
    "meaning_ja": "(一定の計画・設計に従って)…を組み立てる, を建てる",
    "example_sentence": "The workers are busy constructing a new building.",
    "translated_sentence": "労働者たちは新しい建物を建設するのに忙しいです。"
  },
  {
    "entry": "contest",
    "meaning_ja": "〈C〉争い, 競争, コンテスト",
    "example_sentence": "The students had a contest to see who could solve the math problem the fastest.",
    "translated_sentence": "学生たちは数学の問題を一番速く解くのを競うコンテストを行った。"
  },
  {
    "entry": "continue",
    "meaning_ja": "〈物事〉'を'続ける,持続する;(中断後)…'を'また始める,継続する  / 《しばしば受動態で》《副詞[句]を伴って》(ある位置・状態に)<人>'を'とどませる  / 続く,継続する  / 《副詞[句]を伴って》(ある地位・状態などに)とどまる  / (話を一度中断してまた)続ける",
    "example_sentence": "I will continue studying until I pass the exam.",
    "translated_sentence": "試験に合格するまで勉強を続けます。"
  },
  {
    "entry": "contrast",
    "meaning_ja": "〈他〉(違いを示すために)〈二つのもの〉を対照させる,を対比させる / 〈自〉《...と》対照する《with ...》 /",
    "example_sentence": "There is a stark contrast between the two paintings.",
    "translated_sentence": "二つの絵の間には鮮明な対比があります。"
  },
  {
    "entry": "controversial",
    "meaning_ja": "物議を醸す, 論争の余地のある / 議論好きの",
    "example_sentence": "The executive assumed responsibility for the scandal caused by his controversial remarks.",
    "translated_sentence": "その幹部は、物議を醸した発言によって引き起こされたスキャンダルの責任を負った。"
  },
  {
    "entry": "convention",
    "meaning_ja": "(政治、宗教などの)大会 / 条約 / 慣習",
    "example_sentence": "The convention was signed by all participating countries.",
    "translated_sentence": "その条約は、参加するすべての国々によって署名されました。"
  },
  {
    "entry": "cool",
    "meaning_ja": "涼しい / 冷静な / (態度・感情などが) 冷淡な",
    "example_sentence": "He is so cool.",
    "translated_sentence": "彼はかっこいいね。"
  },
  {
    "entry": "copy",
    "meaning_ja": "〈C〉写す,複写,(絵などの)模写,複製;謄本,抄本  / 〈C〉(同一書籍・雑誌・新聞などの)部,冊  / 〈U〉(印刷の)原稿,草稿  / 〈U〉ニュースねた,原稿材料  /",
    "example_sentence": "I made a copy of the book.",
    "translated_sentence": "私は本のコピーを作りました。"
  },
  {
    "entry": "corporate",
    "meaning_ja": "法人[組織]の  / 共同の,団体の  / 《時に名詞の後に用いて》集団になった,統合した",
    "example_sentence": "The corporate sector plays a vital role in the economy.",
    "translated_sentence": "法人セクターは経済において重要な役割を果たしています。"
  },
  {
    "entry": "corner",
    "meaning_ja": "〈C〉かど, すみ / 町かど /苦しい立場,窮地  (株・商品などの)買い占め《+『on』+『名』》",
    "example_sentence": "She was waiting for him in the corner of the room.",
    "translated_sentence": "彼女は部屋の隅で彼を待っていた。"
  },
  {
    "entry": "could",
    "meaning_ja": "…することができた / 《仮定法》できるならば / できていたならば / できるだろうに / できただろうに / 《控え目な表現・丁寧な表現》もしかすると…かもしれない",
    "example_sentence": "I could swim when I was younger.",
    "translated_sentence": "私は若い頃に泳ぐことができました。"
  },
  {
    "entry": "counter",
    "meaning_ja": "に逆らう / (ボクシングなどで)打ち返す",
    "example_sentence": "He quickly countered with a riposte after dodging his opponent's thrust.",
    "translated_sentence": "彼は相手の突きをかわした後、素早く反撃して反撃した。"
  },
  {
    "entry": "country",
    "meaning_ja": "国 / 祖国 / 田舎、田園地方",
    "example_sentence": "I love traveling to different countries.",
    "translated_sentence": "私は異なる国々への旅行が大好きです。"
  },
  {
    "entry": "crash",
    "meaning_ja": "ガラガラ,ドシン(物が倒れたり砕けたりするときの音)  / (飛行機の)墜落, (車の)衝突  / (事業などの)崩壊,破産,（相場の）暴落",
    "example_sentence": "The crash of the waves against the rocks was deafening.",
    "translated_sentence": "波が岩にぶつかる音は耳をつんざくほどだった。"
  },
  {
    "entry": "crazy",
    "meaning_ja": "狂気の,気違いの  / (物事が)途方もない,実行不可能な  / 《補語にのみ用いて》熱中している,夢中の",
    "example_sentence": "He is acting crazy.",
    "translated_sentence": "彼は狂気じみた行動をしている。"
  },
  {
    "entry": "cream",
    "meaning_ja": "〈U〉クリーム(牛乳の上部に沙まる脂肪分)  / 〈C〉〈U〉クリーム菓子,クリーム製食品,クリーム状の食品  / 〈C〉〈U〉化床クリーム;クリーム状の薬品  / 《the cream》(…の)最上の部分,真髄,粋《+of+名》  / 〈U〉クリーム色",
    "example_sentence": "I had some cream with my cake.",
    "translated_sentence": "私はケーキにクリームをつけました。"
  },
  {
    "entry": "create",
    "meaning_ja": "(神・自分などが)…'を'創造する,産み出す  / (思考力・想像力によって)…'を'創作する  / ''を'引き起こす  / 《create+名〈目〉+名〈補〉》〈人〉'を'(…に)任じる,…‘に'(爵位を)授ける  / 怒って騒ぎたてる",
    "example_sentence": "God created the universe.",
    "translated_sentence": "神は宇宙を創造した。"
  },
  {
    "entry": "creation",
    "meaning_ja": "〈U〉(…の)創造,創作,創設《+of+名》  / 〈U〉神が作ったもの,天地,万物  / 〈C〉創作品  / 《the C-》天地創造  / 〈C〉最新の衣服(帽子)",
    "example_sentence": "The artist's creation was admired by many.",
    "translated_sentence": "その芸術家の創造物は多くの人に称賛されました。"
  },
  {
    "entry": "critic",
    "meaning_ja": "(特に文学・美術・音楽の)評論家,批評家  / あら捜しをする人,酷評する人",
    "example_sentence": "The critic praised the artist's latest work.",
    "translated_sentence": "評論家はその芸術家の最新作を称賛した。"
  },
  {
    "entry": "criticism",
    "meaning_ja": "〈U〉〈C〉(文学・芸術・一般的な事の)批評;〈C〉批評文,評論  / 〈U〉〈C〉酷評,非難,あら捜し",
    "example_sentence": "He couldn't handle the criticism and gave up on his dreams.",
    "translated_sentence": "彼は批評に耐えられず、夢を諦めてしまった。"
  },
  {
    "entry": "criticize",
    "meaning_ja": "…'を'非難する,酷評する  / …'を'批評する,批判する  / 酷評する;あら捜しをする",
    "example_sentence": "I don't like it when people criticize others without knowing the full story.",
    "translated_sentence": "私は物事の全体像を知らずに他人を非難する人が嫌いです。"
  },
  {
    "entry": "cross",
    "meaning_ja": "十字架",
    "example_sentence": "She wore a necklace with a cross pendant.",
    "translated_sentence": "彼女は十字架のペンダントが付いたネックレスを身に着けていました。"
  },
  {
    "entry": "crowd",
    "meaning_ja": "(秩序・統制のない)(…の)群衆,人こみ《+of+名》  / 《the+》一般大衆,庶民  / (…の)たくさん寄り集まっているもの《+of+名》  / 《話》(特定の)グルーパ,連中  / 群らがる,大勢集まる  / 《副詞句を伴って》群らがって押し進む(押し寄せる)  / (…に)〈人・物〉'を'詰め力む,押し力む《+名+into+名》  / (…で)〈場所〉'を'いっぱいにする,(…を)…‘に'詰め込む《+名+with+名》  / 《話》せがむ,強要する",
    "example_sentence": "The crowd became unruly and started pushing and shoving.",
    "translated_sentence": "群衆は秩序を乱し、押し合いへし合いを始めた。"
  },
  {
    "entry": "cry",
    "meaning_ja": "〈C〉叫び声, 鳴き声 / 声をあげて泣くこと",
    "example_sentence": "The little girl was in tears, her cry echoing in the room.",
    "translated_sentence": "小さな女の子は涙を流していて、彼女の泣き声が部屋に響いていた。"
  },
  {
    "entry": "cup",
    "meaning_ja": "(紅茶・コーヒー用の)茶わん  / 茶わん1杯(の…)《+of+名》  / カップ(容量の単位,約240,)  / 賞杯  / 《修飾語を伴って》(悲しみ・楽しみなど)人生の経験  / 《複数形で》酒・飲酒",
    "example_sentence": "I put some coffee into the cup.",
    "translated_sentence": "私はコーヒーをカップに入れました。"
  },
  {
    "entry": "cut",
    "meaning_ja": "〈他〉...を切る, を切断する / 〈像・文様など〉を刻む, を彫る / 《...から》を削除する《from, out of ...》 / 〈自〉切れる",
    "example_sentence": "I will cut the cake into four pieces.",
    "translated_sentence": "ケーキを4つに切り分けるつもりです。"
  },
  {
    "entry": "cycle",
    "meaning_ja": "周期,循環期;一巡り  / 周波,サイクル  / (英雄・伝説などを扱った)一連の詩(物語)  / 自転車;三輪車;オートバイ",
    "example_sentence": "The economy is at peak of a business cycle at present.",
    "translated_sentence": "経済は今景気循環の頂点にある。"
  },
  {
    "entry": "daily",
    "meaning_ja": "毎日の, 日々の",
    "example_sentence": "I have a daily routine of exercising in the morning.",
    "translated_sentence": "私は毎朝の運動の日課があります。"
  },
  {
    "entry": "damn",
    "meaning_ja": "〈他〉をけなす, を酷評する / 〈神が〉〈人〉を地獄に落とす /を破滅させる",
    "example_sentence": "His actions damned him.",
    "translated_sentence": "彼は自分の行いのために身を滅ぼした。"
  },
  {
    "entry": "dance",
    "meaning_ja": "《…に合わせて》踊る,舞う,ダンスをする《to ...》 / 《副詞[句]を判って》こおどりする,跳ね回る / 〈木の葉・光の影などが〉舞う,揺れる / 〈ダンス〉を踊る / 〈赤ん坊〉を上下に揺すってあやす / 《副詞[句]を判って》…を踊って《…のように》する(言う)",
    "example_sentence": "She loves to dance to the rhythm of the music.",
    "translated_sentence": "彼女は音楽のリズムに合わせて踊るのが大好きです。"
  },
  {
    "entry": "date",
    "meaning_ja": "〈C〉日付 / 〈U〉(歴史上の) 時代",
    "example_sentence": "The date of the meeting is next Wednesday.",
    "translated_sentence": "会議の日付は来週水曜日です。"
  },
  {
    "entry": "dead",
    "meaning_ja": "死んだ,死んでいる  / 生命を持っていない  / 死んだような;(死んだように)無感覚な  / 効力を失った  / 活動していない,働いていない,通用していない(no longer active)  / 《名詞の前にのみ用いて》全くの,完全な(complete)  / (色が)さえない;(音が)鈍い  / 《補語にのみ用いて》《話》疲れきった;(…で)疲れ果てた《+from+名》  / 《話》絶対に,完全に(completely)  / (動作・行動などの停止について)ぱったり,突然  / 《話》まっすぐに(straight)  / (暗さ・寒さなどの)最中,まっただ中《+of+名》",
    "example_sentence": "He found a dead bird in his backyard.",
    "translated_sentence": "彼は裏庭で死んだ鳥を見つけた。"
  },
  {
    "entry": "death",
    "meaning_ja": "〈U〉〈C〉死,死亡;死に方,死にざま  / 〈U〉死んだ[ような]状体  / 《the~》(…の)絶滅,破滅《+of+名》  / 《the~》(…の)死の原因,命取り《+of+名》  / 《通例D-》死神(手に鎌(かマ)を持った黒装束の骸骨(がいこつ)で表される)",
    "example_sentence": "The news of his death shocked everyone.",
    "translated_sentence": "彼の死の知らせはみんなを驚かせた。"
  },
  {
    "entry": "daughter",
    "meaning_ja": "〈C〉娘 / 女の子孫 /  (娘のように)生み出されたもの",
    "example_sentence": "My daughter is an excellent student.",
    "translated_sentence": "私の娘は優秀な生徒です。"
  },
  {
    "entry": "deep",
    "meaning_ja": "(表面から下方または内部へ)深い  / (程度が)非常な,深い  / 奥行きの深い,奥まった  / 奥深くて測りしれない,深遠な  / 《補語にのみ用いて》(…の)奥深いところにいる(ある)《+in+名》  / (思想・感情などが)深い,強い  / (色が)濃い  / (音・声が)低い,太い",
    "example_sentence": "The ocean is deep.",
    "translated_sentence": "海は深いです。"
  },
  {
    "entry": "decide",
    "meaning_ja": "〈他〉〈人が〉を決心する / を決定する / 〈人が〉〈論争・問題など〉を解決する / 〈自〉決定する",
    "example_sentence": "I need to decide which movie to watch tonight.",
    "translated_sentence": "今夜何の映画を見るか決めなければならない。"
  },
  {
    "entry": "defend",
    "meaning_ja": "(…から)…'を'守る,保護する《+名+against(from)+名(doing)》  / (言論などで)…'を'擁護する,支持する  / (法廷で)〈被告〉'を'弁護する  / 防御する,身を守る",
    "example_sentence": "They defended their country.",
    "translated_sentence": "彼らは祖国を守った。"
  },
  {
    "entry": "delight",
    "meaning_ja": "〈U〉大喜び,歓喜 / 〈C〉楽しみ",
    "example_sentence": "The children's faces were filled with delight as they opened their presents.",
    "translated_sentence": "子供たちの顔は、プレゼントを開ける喜びで満たされていました。"
  },
  {
    "entry": "depress",
    "meaning_ja": "【動/他】の元気をなくさせる / 〈力・活動など〉を弱める,を衰えさせる / …を押し下げる / 〈相場・市場など〉を下落させる,を不景気にする",
    "example_sentence": "She felt depressed after losing her job.",
    "translated_sentence": "彼女は仕事を失った後、落ち込んだ気持ちになった。"
  },
  {
    "entry": "demand",
    "meaning_ja": "〈C〉要求 / 〈U〉《...の》需要《for ...》",
    "example_sentence": "The company is experiencing high demand for its products.",
    "translated_sentence": "会社は製品の需要が高まっています。"
  },
  {
    "entry": "demonstrate",
    "meaning_ja": "(真理・学説など) を論証する, を証明する / (実例・実験などによって)…を説明して見せる,を実証する",
    "example_sentence": "Scientists use experiments to demonstrate their theories.",
    "translated_sentence": "科学者は実験を使って自分たちの理論を論証します。"
  },
  {
    "entry": "desert",
    "meaning_ja": "〈人・地位・場所など〉を見捨てる,を放棄する / 〈軍務・持ち場など〉から逃げる / (勇気・自信・希望などが)〈人〉から抜け去る / 〈軍人などが〉《…から》脱走する《from ...》/ 《…に》投降する《to ...》",
    "example_sentence": "He decided to desert his post and run away.",
    "translated_sentence": "彼は職を捨てて逃亡することを決意した。"
  },
  {
    "entry": "diet",
    "meaning_ja": "【名/C】(日本・デンマーク・スウェーデンなどの) 議会,国会（The  〜）",
    "example_sentence": "The Diet was in pandemonium yesterday.",
    "translated_sentence": "昨日の国会は大荒れだった。"
  },
  {
    "entry": "direct",
    "meaning_ja": "を指揮する / に命令する/ に道を教える / を向ける",
    "example_sentence": "Use only as directed.",
    "translated_sentence": "指示に従って使用すること。"
  },
  {
    "entry": "disaster",
    "meaning_ja": "(突然の大きな)災害,災難・不幸",
    "example_sentence": "The earthquake was a devastating disaster.",
    "translated_sentence": "その地震は壊滅的な災害だった。"
  },
  {
    "entry": "discount",
    "meaning_ja": "(手形・商品の)割引[額]",
    "example_sentence": "They are offering a discount on all products.",
    "translated_sentence": "彼らはすべての商品に割引を提供しています。"
  },
  {
    "entry": "disease",
    "meaning_ja": "〈U〉(体の) 病気, 疾患 / (精神・道徳などの)病気,病弊",
    "example_sentence": "He was diagnosed with a rare disease.",
    "translated_sentence": "彼は珍しい病気と診断されました。"
  },
  {
    "entry": "discipline",
    "meaning_ja": "〈U〉(組織的な)訓練 / (訓練による) 規律正しさ, 統制 / 〈C〉学科, 学問分野",
    "example_sentence": "Discipline is the key to success.",
    "translated_sentence": "規律は成功の鍵です。"
  },
  {
    "entry": "distance",
    "meaning_ja": "〈U〉(二つの物・場所の間の) 距離, 間隔 / 遠方, 離れた地点",
    "example_sentence": "The distance between the two cities is 200 kilometers.",
    "translated_sentence": "二つの都市の距離は200キロメートルです。"
  },
  {
    "entry": "dispute",
    "meaning_ja": "論争, 紛争",
    "example_sentence": "There was a dispute between the two neighbors over the property boundary.",
    "translated_sentence": "隣人同士の土地の境界に関して論争がありました。"
  },
  {
    "entry": "divide",
    "meaning_ja": "(部分・断片・グループなどに)…‘を'分ける,分割する《+名+into+名》  / (人と)…‘を'分け合う《+名+with+名》;(人人の間で)…‘を'分配する《+名+among(between)+名》  / (…から)…‘を'分離する,切り離す,区切る《+名+from+名》  / (…に)〈時間など〉‘を'割り当てる《+名+between+名》  / (感情的に・考え方の上で)〈人〉‘を'対立させる,分裂させる  / (…で)…‘を'割る《+名+by+名》;(…を)…‘で'割る《+名+into+名》  / 分かれる,分岐する  / (…で)分かれて対立する,分裂する《+on(over)+名》",
    "example_sentence": "Please divide the cake into equal parts.",
    "translated_sentence": "ケーキを均等な部分に分けてください。"
  },
  {
    "entry": "do",
    "meaning_ja": "『…をする』,行う,果たす / 《通例have ~,時にbe ~の形で》…を終える / …を処理する / 〈学課〉を勉強する / 〈人〉に役立つ([[serve]]) / 《…を》 終える 《with ...》 / 〈事が〉運ぶ / 《...に》間に合う《for ...》",
    "example_sentence": "What do you want to do today?",
    "translated_sentence": "今日は何をしたいですか？"
  },
  {
    "entry": "double",
    "meaning_ja": "(数量・強さ・重さ・価値などが)2倍の,倍の  / 二重の,二様の;複の,対の,2人用の  / 表裏のある,二心ある  / (意味が)二様にとれる,あいまいな  / (花が)八重の,重弁の",
    "example_sentence": "He paid double fare.",
    "translated_sentence": "彼は二倍の運賃を払った。"
  },
  {
    "entry": "down",
    "meaning_ja": "(高い所から)下へ, 降りて / (価格・品質・温度などが) 下がって / (健康・風の勢いなどが) 衰えて",
    "example_sentence": "She walked down the street.",
    "translated_sentence": "彼女は通りを歩いていった。"
  },
  {
    "entry": "draft",
    "meaning_ja": "〈C〉下絵,スケッチ,設計図;草稿,草案  / 〈C〉為替(かわせ)手形  / 〈C〉(特に部屋などの)すきま風,通風  / 〈C〉(ストーブ・煙突の)通気  / 〈U〉(車などを)引くこと  / 〈C〉網で引っぱること,一網;一網の漁獲高  / 〈U〉《米》徴兵,徴募;《集合的に》徴集兵,選抜隊,分遣隊;その選抜  / 〈U〉(特にスポーツで人を)引き抜くこと;ドラフト制  / 〈U〉(液体を容器から)つぎ出すこと,(酒などの)たる抜き  / 〈C〉一飲み[の量],一吸い[の量],(水薬などの)1回の服用量  / 〈C〉(船の)喫水  / 牽引(けんいん)用の  / たる出しの,生の  / 下絵の;草案の",
    "example_sentence": "I need to make a draft before starting the final artwork.",
    "translated_sentence": "最終作品を始める前に下絵を作る必要があります。"
  },
  {
    "entry": "dress",
    "meaning_ja": "〈U〉衣服 / 〈C〉(ワンピースの) 婦人服, 子供服",
    "example_sentence": "She bought a new dress for the party.",
    "translated_sentence": "彼女はパーティー用に新しいドレスを買った。"
  },
  {
    "entry": "due",
    "meaning_ja": "支払われるべき, 支払期日が来ている / 〈敬意などが〉《...に》与えられるべき《to ...》 / 当然の / 《...に》到着予定で《at ...》",
    "example_sentence": "The flowers are due to bloom soon.",
    "translated_sentence": "もうすぐ花が咲く時期です。"
  },
  {
    "entry": "during",
    "meaning_ja": "(ある期間)の間ずっと,…の間じゅう  / (しばらく続く時間・期間)の間[のある間]に,…中に",
    "example_sentence": "I studied hard during the summer vacation.",
    "translated_sentence": "夏休みの間ずっと一生懸命勉強しました。"
  },
  {
    "entry": "each",
    "meaning_ja": "おのおのの,めいめいの,それぞれの, 各…",
    "example_sentence": "Each student must bring their own lunch.",
    "translated_sentence": "各生徒は自分のランチを持ってこなければならない。"
  },
  {
    "entry": "easy",
    "meaning_ja": "簡単な, 容易な / 心配のない, 気楽な / ゆったりとした /",
    "example_sentence": "This task is easy.",
    "translated_sentence": "このタスクは簡単です。"
  },
  {
    "entry": "edge",
    "meaning_ja": "〈C〉縁,端;(峰などの)背  / 〈C〉(刃物の)刃;〈U〉(刃の)鋭利さ  / 〈U〉(欲望などの)強さ,激しさ",
    "example_sentence": "He stood on the edge of the cliff, looking down at the vast ocean below.",
    "translated_sentence": "彼は崖の縁に立ち、下に広がる広大な海を見下ろしていた。"
  },
  {
    "entry": "elect",
    "meaning_ja": "〈他〉(投票で)〈議長・議員など〉を選ぶ, を選挙する",
    "example_sentence": "She decided to elect him as the new president.",
    "translated_sentence": "彼女は彼を新しい社長に選ぶことに決めた。"
  },
  {
    "entry": "eleven",
    "meaning_ja": "〈C〉(数の)11;11を表す記号(11,XIなど)  / 〈U〉11時;11歳  / 〈U〉《複数扱い》11人,11個  / 〈U〉《単数扱い》(フットボールのチームなどの)11人(11個)一組  / 11の,11人の,11個の  / 《補語にのみ用いて》11歳の",
    "example_sentence": "I have eleven apples.",
    "translated_sentence": "私はりんごを11個持っています。"
  },
  {
    "entry": "element",
    "meaning_ja": "〈C〉(基本的な) 要素, 成分 / (物質を構成する)元素",
    "example_sentence": "Education is a critical element.",
    "translated_sentence": "教育は重要な要素である。"
  },
  {
    "entry": "empire",
    "meaning_ja": "〈C〉帝国  / 〈U〉帝権,絶対支配力  / 〈C〉(強大な社会・経済組織としての)…帝国  / 《帝国》ナポレオンの帝政期(1804‐15)",
    "example_sentence": "The Roman Empire was one of the most powerful empires in history.",
    "translated_sentence": "ローマ帝国は歴史上最も強力な帝国の一つでした。"
  },
  {
    "entry": "end",
    "meaning_ja": "〈C〉終わり / (細いものの)端, 先端 / (物事・期間の)最後 / 《しばしば複数形で》目的",
    "example_sentence": "The end of the story was a surprise.",
    "translated_sentence": "物語の結末が驚きだった。"
  },
  {
    "entry": "engage",
    "meaning_ja": "取り組む / 従事する / 婚約する / 引きつける",
    "example_sentence": "I engage in various activities to support the community.",
    "translated_sentence": "私は地域を支援するためにさまざまな活動に携わっています。"
  },
  {
    "entry": "episode",
    "meaning_ja": "挿話的なでき事(人生の特殊な経験など)  / (小説・劇などの中の本筋と直接関係のない)挿話的な事件",
    "example_sentence": "The camping trip was definitely an episode to remember.",
    "translated_sentence": "キャンプ旅行は間違いなく忘れられないエピソードとなった。"
  },
  {
    "entry": "enormous",
    "meaning_ja": "巨大な, ばく大な",
    "example_sentence": "The elephant is enormous.",
    "translated_sentence": "その象は巨大です。"
  },
  {
    "entry": "escape",
    "meaning_ja": "《Aから》逃げ出す,脱走する《from, out of A》； 《Aから》免れる《from A(doing)》； 《Aから》流出する,漏れる《from, out of A》 ;（未然に）をうまくかわす；を免れる,を逃れる；に忘れられる,の注意を引かない；（言葉・ため息などが）（人）から思わず出る；",
    "example_sentence": "He managed to escape from the prison.",
    "translated_sentence": "彼はなんとか刑務所から脱出した。"
  },
  {
    "entry": "equipment",
    "meaning_ja": "〈U〉《...のための》 備品, 装備 《for ...》 / 《...を》 装備すること 《with ...》 / 《...に》 必要な知識, 必要な能力 《for ...》",
    "example_sentence": "I need to buy some new equipment for my gym.",
    "translated_sentence": "私はジムのために新しい機器を買う必要があります。"
  },
  {
    "entry": "estate",
    "meaning_ja": "〈C〉地所 / 〈U〉財産",
    "example_sentence": "He inherited a large estate from his grandfather.",
    "translated_sentence": "彼は祖父から大きな不動産を相続しました。"
  },
  {
    "entry": "estimate",
    "meaning_ja": "を見積る,概算する / を評価する",
    "example_sentence": "He roughly estimated the cost of the project.",
    "translated_sentence": "彼はプロジェクトのコストをおおよそ見積もった。"
  },
  {
    "entry": "ethnic",
    "meaning_ja": "(共通の言語・文化・歴史を持つ)民族の",
    "example_sentence": "She is proud of her ethnic heritage.",
    "translated_sentence": "彼女は自分の民族的な遺産に誇りを持っています。"
  },
  {
    "entry": "evaluate",
    "meaning_ja": "〈財産・資料・能力〉…を評価する,の数量を見積る /  （関数などの）値を求める",
    "example_sentence": "I need to evaluate the performance of my employees.",
    "translated_sentence": "私は従業員のパフォーマンスを評価する必要があります。"
  },
  {
    "entry": "everywhere",
    "meaning_ja": "いたるところに, いたるところで / 《接続詞的に》どこで...しても",
    "example_sentence": "The wind was blowing everywhere.",
    "translated_sentence": "風はどこにでも吹いていた。"
  },
  {
    "entry": "evidence",
    "meaning_ja": "証拠,証拠物件  / 印,徴侯,形跡(indication)・(証拠をあげて)…‘を'証明する・「in evidence」で「証拠(証人)として」",
    "example_sentence": "There is no evidence to support his claim.",
    "translated_sentence": "彼の主張を裏付ける証拠はありません。"
  },
  {
    "entry": "exactly",
    "meaning_ja": "正確に, きちんと / まさしく / 《否定文で》正確なところ,必ずしも(…でない)  / 《返事で》《yesの代わりに》全くそうです,そのとおりです / 《not ~の形で否定して》必ずしもそうではない",
    "example_sentence": "He followed the instructions exactly.",
    "translated_sentence": "彼は指示を正確に従った。"
  },
  {
    "entry": "examination",
    "meaning_ja": "〈C〉(…の)試験《+in(on)+名ofを用いない》  / 〈U〉〈C〉(…の)調査,検討《+into(of)+名》  / 〈C〉〈U〉診察,診断  / 〈C〉詩験問題[用紙];詩験答案[用紙]",
    "example_sentence": "I have an examination tomorrow.",
    "translated_sentence": "明日試験があります。"
  },
  {
    "entry": "example",
    "meaning_ja": "(…の)例,実例(instance);(…の)見本,標本《+of+名》  / (…にとっての)手本,模範(model)《+to+名》  / (…への)見せしめ,戒め《+for(to)+名》",
    "example_sentence": "This is an example.",
    "translated_sentence": "これは例です。"
  },
  {
    "entry": "excite",
    "meaning_ja": "〈他〉を刺激する；を興奮させる / 《...へ / ...するように》を駆り立てる《to, to do》",
    "example_sentence": "The thrilling roller coaster ride excited the crowd.",
    "translated_sentence": "スリリングなジェットコースターの乗り物は人々を興奮させました。"
  },
  {
    "entry": "exercise",
    "meaning_ja": "〈他〉(手足など)を働かせる / ...に《...の》 訓練させる《in ...》 / 〈自〉練習する / 運動する",
    "example_sentence": "I exercise every day.",
    "translated_sentence": "毎日運動している。"
  },
  {
    "entry": "exhaust",
    "meaning_ja": "〈他〉を疲れ果てさせる / を使い果たす",
    "example_sentence": "I feel exhausted after running a marathon.",
    "translated_sentence": "マラソンを走った後は疲労を感じる。"
  },
  {
    "entry": "exhibition",
    "meaning_ja": "〈U〉《an~》(感情などを)表すこと,示すこと,(能力などの)発揮《+of+名》  / 〈C〉(…の)展覧会,展示会《+of+名》  / 〈C〉《英》奨学金",
    "example_sentence": "I visited an art exhibition last weekend.",
    "translated_sentence": "先週末、私は美術展に行きました。"
  },
  {
    "entry": "eye",
    "meaning_ja": "〈C〉(人・動物の器官としての)目  / 〈C〉(まぶた・まつ毛・まゆ毛などを含めて,外側からみえる)目,目の周り  / 〈C〉視力,視覚  / 〈C〉《単数形で》視線,まなざし",
    "example_sentence": "She has beautiful blue eyes.",
    "translated_sentence": "彼女は美しい青い目をしています。"
  },
  {
    "entry": "facility",
    "meaning_ja": "施設 / 設備 / 機能",
    "example_sentence": "The facility is equipped with state-of-the-art technology.",
    "translated_sentence": "その施設は最新の技術で設備されています。"
  },
  {
    "entry": "extend",
    "meaning_ja": "《...まで》〈距離・期間など〉を延ばす《to ...》 / を伸ばす / 【動/自】《…まで》広がる, 伸びる《to ...》",
    "example_sentence": "I need to extend my stay in the hotel.",
    "translated_sentence": "ホテルでの滞在を延長する必要があります。"
  },
  {
    "entry": "failure",
    "meaning_ja": "〈U〉《...における》 失敗, 不成功《in ...》 / 《...の》 衰弱, 減退 《in, of ...》 / 〈C〉失敗者, 落伍者 / 失敗した企て, 不出来なもの / 〈U/C〉怠慢, 不履行 / 《...の》 不足, 欠乏 《of ...》 / 《...の》 破産 《of ...》",
    "example_sentence": "Failure is not the opposite of success; it's part of success.",
    "translated_sentence": "失敗は成功の対義語ではなく、成功の一部です。"
  },
  {
    "entry": "familiar",
    "meaning_ja": "よく知られている, 見慣れた / 《be ~》よく知っている, 《...に》精通している《with ...》 / 親しい",
    "example_sentence": "He is a familiar face in the neighborhood.",
    "translated_sentence": "彼は近所ではよく知られた顔です。"
  },
  {
    "entry": "family",
    "meaning_ja": "《集合的に》家族,家庭  / 〈U〉《時にa family》(一家の)子供たち  / 〈C〉(血縁に関係ある)親族,身内,一族,一門  / 〈U〉家柄;(特に)名門  / 〈C〉(関係ある人・物の)一団,一群,(生物分類の)科《+of+名》",
    "example_sentence": "My family lives in Tokyo.",
    "translated_sentence": "私の家族は東京に住んでいます。"
  },
  {
    "entry": "fan",
    "meaning_ja": "【名/C】うちわ / 扇状のもの / 扇風機 / 【動/他】〈空気〉をうちわなどで動かす / 〈感情など〉をあおる / …を扇形に広げる / 【動/自】扇形に広がる《out》 / (野球で)三振する",
    "example_sentence": "I am a big fan of basketball.",
    "translated_sentence": "私はバスケットボールの大ファンです。"
  },
  {
    "entry": "farmer",
    "meaning_ja": "農場経営者,農場主  / 農業労働者,耕作する人",
    "example_sentence": "The farmer harvested his wheat last week.",
    "translated_sentence": "先週農夫は彼の小麦を収穫した。"
  },
  {
    "entry": "fault",
    "meaning_ja": "〈C〉欠点 / 誤り / 〈U〉(過失の) 責任",
    "example_sentence": "It's not my fault that the car broke down.",
    "translated_sentence": "車が故障したのは私のせいではありません。"
  },
  {
    "entry": "feel",
    "meaning_ja": "(手・指で)…に触れる / 《進行形にできない》(身体で)…を感じる / (心で)…を感じる, を意識する / …と思う,と堅く信じる / 〈人が〉感じる,思う / 《~ 形》〈物が〉《…の》感じがする,《…の》手触りがする",
    "example_sentence": "I feel the softness of the fabric.",
    "translated_sentence": "私はその生地の柔らかさを感じる。"
  },
  {
    "entry": "feature",
    "meaning_ja": "〈C〉特徴 / 容貌 / 呼びもの、<V>出演させる",
    "example_sentence": "This new smartphone has a unique feature that allows you to unlock it using facial recognition.",
    "translated_sentence": "この新しいスマートフォンには、顔認識を使ってロックを解除することができるユニークな機能があります。"
  },
  {
    "entry": "fifty",
    "meaning_ja": "〈C〉(数の)50;50記号(50,Lなど)  / 〈U〉50分;50歳  / 〈U〉《複数扱い》50人,50個  / 《the fifties》(世紀の)50年代;(年齢の)50代  / 50の,50個の,50人の  / 《補語にのみ用いて》50歳の(で)",
    "example_sentence": "I have fifty dollars in my wallet.",
    "translated_sentence": "私の財布には50ドルあります。"
  },
  {
    "entry": "fight",
    "meaning_ja": "〈両者・数人が〉『戦う』,格闘する;激しく口論する  / 『…と戦う』  / 〈戦い〉を交える,〈決闘など〉を戦う  / …を制圧しようとする  / 〈犬など〉を戦わせる  / 〈軍艦・軍隊など〉を指揮する,操縦する",
    "example_sentence": "They fight each other every day.",
    "translated_sentence": "彼らは毎日互いに戦います。"
  },
  {
    "entry": "fill",
    "meaning_ja": "〈他〉をいっぱいにする / を占める / を満たす / 〈自〉《...で》 いっぱいになる 《with ...》",
    "example_sentence": "The balloon was filled with helium.",
    "translated_sentence": "風船はヘリウムで満たされていた。"
  },
  {
    "entry": "financial",
    "meaning_ja": "財政上の;財界の;金融上の:",
    "example_sentence": "The government is facing financial challenges due to the economic downturn.",
    "translated_sentence": "経済の低迷により、政府は財政上の課題に直面しています。"
  },
  {
    "entry": "flat",
    "meaning_ja": "〈C〉アパート,マンション, フラット / 《米》安アパート / 〈C〉平面 / 《おもに米》空気の抜けたタイヤ",
    "example_sentence": "He lives in a flat.",
    "translated_sentence": "彼はアパートに住んでいる。"
  },
  {
    "entry": "finger",
    "meaning_ja": "(手の)指  / 指の形をしたもの;(手袋の)指;(メーターなどの)指針  / 指幅(びん入りの酒の量を測るときなど)",
    "example_sentence": "I accidentally cut my finger while chopping vegetables.",
    "translated_sentence": "野菜を切っている最中に指を誤って切ってしまった。"
  },
  {
    "entry": "first",
    "meaning_ja": "(順序・時間的に)第1の,1番目の;最初の / (階級・等級・重要度などが)1番の,第一級の,首席の,最も重要な",
    "example_sentence": "He is the first person to arrive at the party.",
    "translated_sentence": "彼はパーティーに到着した最初の人です。"
  },
  {
    "entry": "firstly",
    "meaning_ja": "(事柄を列挙して) 第一に,まず第一に",
    "example_sentence": "Firstly, let's discuss the importance of time management.",
    "translated_sentence": "まずは、時間管理の重要性について話しましょう。"
  },
  {
    "entry": "firm",
    "meaning_ja": "しっかりした",
    "example_sentence": "He has a firm grip on the situation.",
    "translated_sentence": "彼は状況をしっかりと把握している。"
  },
  {
    "entry": "flash",
    "meaning_ja": "ぱっと光る,(反射して)きらめく  / 〈目などが〉きらりと(ぎらっと)光る  / (心に)〈言葉・考えなどが〉ひらめく《+through(into, across)+名》  / 《副詞[句]を伴って》〈人・車などが〉さっと通り過ぎる  / …‘を'ぱっと照らす;〈火・光〉‘を'ぱっと発する  / …‘を'ちらり(ぴかり,ぎらり)とさせる  / (…に)〈サイン・視線など〉‘を'すばやく送る,さっと送る《+名+at+名》",
    "example_sentence": "The lightning flashed.",
    "translated_sentence": "稲妻が光った。"
  },
  {
    "entry": "fit",
    "meaning_ja": "（意図・目的など）...に合う / 《...に》...を合わせる 《to, in, on ...》/ 適する, ぴったり合う",
    "example_sentence": "This dress doesn't fit me well.",
    "translated_sentence": "このドレスは私には合わない。"
  },
  {
    "entry": "flight",
    "meaning_ja": "【名/U】飛ぶこと / 【名/C】飛行, 飛行距離 / (飛行機の)定期便 / 《a ~》(鳥・昆虫・飛行機などの) 一団となって飛ぶ群れ / 《a ... of stairs》(階と階,または踊り場と踊り場の間の) 一続きの階段",
    "example_sentence": "I booked a flight to Tokyo.",
    "translated_sentence": "東京へのフライトを予約しました。"
  },
  {
    "entry": "forest",
    "meaning_ja": "〈C〉〈U〉(広い地域にわたる)森林,山林  / 〈C〉《通例単数形で》(…の)林《+of+名》",
    "example_sentence": "I love hiking in the forest.",
    "translated_sentence": "私は森林でハイキングするのが大好きです。"
  },
  {
    "entry": "fool",
    "meaning_ja": "馬鹿, ばか者 / 道化師",
    "example_sentence": "He is such a fool.",
    "translated_sentence": "彼は本当にばかだ。"
  },
  {
    "entry": "formula",
    "meaning_ja": "〈C〉決まった言い方 / 《...の》解決策 / 決まった方法《for》 / 《...の》製法,処方箋《for》 / 《...の》公式《for》",
    "example_sentence": "The chemical formula for water is H2O.",
    "translated_sentence": "水の化学式はH2Oです。"
  },
  {
    "entry": "forth",
    "meaning_ja": "(空間的に) 前へ, 先へ / 外へ, 表へ / (時間的に)先, 今後,",
    "example_sentence": "He stepped forth into the unknown.",
    "translated_sentence": "彼は未知の世界に進んだ。"
  },
  {
    "entry": "fourteen",
    "meaning_ja": "〈C〉(数の)14;14の記号(14,XIVなど)  / 〈U〉(24時間制の)14時,14分;14歳  / 〈U〉《複数扱い》14人,14個  / 〈C〉14(14人,14個)1組のもの  / 14の;14個の;14人の  / 《補語にのみ用いて》14歳の(で)",
    "example_sentence": "I have fourteen books on my shelf.",
    "translated_sentence": "私の本棚には14冊の本があります。"
  },
  {
    "entry": "found",
    "meaning_ja": "【動/他】...を創設する, を設立する / 《...の上に》（建物など）を建てる《on, upon ...》 / 《...に》...の基礎を置く《on, upon ...》",
    "example_sentence": "They founded the company last year.",
    "translated_sentence": "彼らは去年その会社を設立した。"
  },
  {
    "entry": "fragment",
    "meaning_ja": "〈C〉《...の》破片, 断片《of ...》",
    "example_sentence": "I found a fragment of a broken vase on the floor.",
    "translated_sentence": "床の上に割れた花瓶の破片を見つけました。"
  },
  {
    "entry": "frequently",
    "meaning_ja": "しばしば, たびたび, 頻繁に",
    "example_sentence": "I frequently go to the gym to exercise.",
    "translated_sentence": "私はしばしば運動するためにジムに行きます。"
  },
  {
    "entry": "friendly",
    "meaning_ja": "好意的な,友情のこもった,親切な / 友好的,仲の良い / 役に方つ;受け入ける",
    "example_sentence": "She is very friendly and always willing to help others.",
    "translated_sentence": "彼女はとてもフレンドリーで、いつも進んで他の人を助けます。"
  },
  {
    "entry": "Friday",
    "meaning_ja": "金曜日(《略》Fr.,Fri.)",
    "example_sentence": "I always look forward to Friday.",
    "translated_sentence": "金曜日を楽しみにしています。"
  },
  {
    "entry": "from",
    "meaning_ja": "《場所・時》…から / 《起源》...出身の / 《原因》...によって / 《区別》...と違って / 《抑制・妨害》…することを《~ doing》",
    "example_sentence": "I am coming from the store.",
    "translated_sentence": "私は店から来ています。"
  },
  {
    "entry": "fulfill",
    "meaning_ja": "(命令・約束など)を果たす / (要求・希望など)を満たす / (期限・仕事など)を完了する",
    "example_sentence": "He always fulfills his promises.",
    "translated_sentence": "彼はいつも約束を果たします。"
  },
  {
    "entry": "gallery",
    "meaning_ja": "回廊,歩廊  / (広間などの上部に突き出た)さじき,(特に)(劇場の)天井さじき;(議場などの)傍聴席  / 《the ~》《集合的に》天井さじきの見物人,大向こう  / 画廊,美術品陳列場(室)  / 《集合的に》(ゴルフ試合などの)見物人;(国会などの)傍聴人  / (鉱山の)坑道",
    "example_sentence": "I visited the art gallery and admired the beautiful paintings.",
    "translated_sentence": "私は美術館を訪れ、美しい絵画を称賛しました。"
  },
  {
    "entry": "game",
    "meaning_ja": "〈C〉遊び / 競技 /",
    "example_sentence": "He likes to play games.",
    "translated_sentence": "彼はゲームをしたがるのが好きです。"
  },
  {
    "entry": "gap",
    "meaning_ja": "〈C〉《壁・へいなどの》割れ目, すきま《in ...》 / 《連続するものの》途切れ《in ...》 / 《意見・性格などの》大きなずれ《between ...》",
    "example_sentence": "There is a gap between the two buildings.",
    "translated_sentence": "2つの建物の間に隙間があります。"
  },
  {
    "entry": "gentleman",
    "meaning_ja": "〈C〉紳士(名誉を重んじ,礼儀正しく,思いやりのある男性);君子  / 〈C〉上流階級の男性  / 〈C〉(manの敬称として)男の方  / 《複数形で》(複数の男性へ呼びかけて)諸君,皆さん",
    "example_sentence": "He is a true gentleman.",
    "translated_sentence": "彼は本当の紳士だ。"
  },
  {
    "entry": "gesture",
    "meaning_ja": "〈U〉〈C〉(気持ちや考えを表現するときの)身ぶり,手まね,しぐさ  / 〈C〉《修飾語[句]を伴って》(うわべにせよ,心からにせよ,礼儀・尊敬・友情などを表す)行為,しぐさ,印",
    "example_sentence": "She made a gesture of apology.",
    "translated_sentence": "彼女は謝罪の身ぶりをした。"
  },
  {
    "entry": "gift",
    "meaning_ja": "〈C〉(…への)贈り物,寄贈品,寄付金《+to(for)+名》  / 〈C〉(…に対する)生まれつきの才能,天賦の才《+for(of)+名(doing)》  / 〈U〉《古》与えること,贈与;(権力者などが持つ地位などを)与える権限",
    "example_sentence": "She gave him a gift on his birthday.",
    "translated_sentence": "彼の誕生日に彼にプレゼントをあげた。"
  },
  {
    "entry": "give",
    "meaning_ja": "(無償で)〈物〉を与える / 〈物〉を渡す / 〈代金〉を支払う / 《抽象的なことを目的語にして》…を与える,を授ける / 《…に》物を与える,寄付する《to ...》",
    "example_sentence": "I give my time to help others.",
    "translated_sentence": "私は他人を助けるために自分の時間を提供します。"
  },
  {
    "entry": "gold",
    "meaning_ja": "**金の**,金製の",
    "example_sentence": "The golden sunset was beautiful.",
    "translated_sentence": "黄金色の夕日が美しかった。"
  },
  {
    "entry": "govern",
    "meaning_ja": "(国・国民)を治める, を統治する / (学校など)を管理する / (行動など)を左右する, に影響を与える / 治める",
    "example_sentence": "The government has the power to govern the country.",
    "translated_sentence": "政府は国を統治する権力を持っています。"
  },
  {
    "entry": "governor",
    "meaning_ja": "〈C〉(米国の州の) 知事 / (植民地・属領などの) 総督 / (協会・銀行などの)総裁,理事",
    "example_sentence": "The governor of California signed a new bill into law.",
    "translated_sentence": "カリフォルニア州の知事が新しい法案に署名しました。"
  },
  {
    "entry": "graduate",
    "meaning_ja": "卒業生",
    "example_sentence": "She is a college graduate.",
    "translated_sentence": "彼女は大学を出ている。"
  },
  {
    "entry": "grain",
    "meaning_ja": "〈C〉《穀類の》粒《of ...》 / 〈U〉《集合的に》穀物, 穀類 / 〈C〉《おもに否定文で》ごく少量,ほんの少し《の…》《of ...》",
    "example_sentence": "I bought a bag of grain from the store.",
    "translated_sentence": "私は店から一袋の穀物を買いました。"
  },
  {
    "entry": "gray",
    "meaning_ja": "灰色の,ねずみ色の,鉛色の  / (顔色が)青白い([[pale]])  / (空が)曇った  / (気持ちなどが)陰気な,寂しい([[gloomy]])  / しらがの多い",
    "example_sentence": "The sky was gray and cloudy.",
    "translated_sentence": "空は灰色で曇っていました。"
  },
  {
    "entry": "group",
    "meaning_ja": "(…の)群れ,集まり,小集団《+of+名》  / (主義・系統・種類などを同じくする人・物の)派,団体  / (ポミュラーソング歌手の)グループ  / (動・植物分類上の)群;(化学の)基,原子団;(地質学上の)界;(数学の)群;(言語学上の)語派",
    "example_sentence": "We formed a group to discuss the project.",
    "translated_sentence": "プロジェクトについて話し合うためにグループを作りました。"
  },
  {
    "entry": "hand",
    "meaning_ja": "手(手首から先の部分)  / (時計・計器の)針  / 《単数形で》筆跡  / 側,方([[side]])  / 《a~》《…への》援助,手助け《with, at, to ...》  / 職工,職人,人手  / 乗組員  / 《前に形容詞を置いて》《…するのが》(じょうずな・へたな)人(at ...》  / 《単数形》技量,腕前;《…の》やり方,扱い方《at, with ...》  / 《単数形で》拍手かっさい",
    "example_sentence": "He held her hand to comfort her.",
    "translated_sentence": "彼は彼女を慰めるために彼女の手を握った。"
  },
  {
    "entry": "hang",
    "meaning_ja": "《通例副詞[句]を伴って》(…に)…‘を'掛ける,下げる,つるす  / (ちょうつがいなどで)〈ドアなど〉‘を'取り付ける《+名+on+名》  / …‘を'絞殺する;(犯罪で)…‘を'絞首刑にする  / 《話》《damnの遠回しな語として,ののしりの言葉や強意表現に用いて》  / 〈頭など〉‘を'垂れる  / (絵などで)〈部屋・壁など〉‘を'飾る,覆う《+名+with+名》;〈壁紙など〉‘を'壁に張る  / 《副詞[句]を伴って》(…に)掛かる,垂れる,ぶら下がる  / (ちょうつがいなどで)〈戸などが〉取り付けられている《+on+名》  / 首をつる,首つり自殺をする;(犯罪で)絞首刑になる《+for+名(doing)》",
    "example_sentence": "I hang my clothes on the clothesline.",
    "translated_sentence": "私は物干し竿に洗濯物を干す。"
  },
  {
    "entry": "harbor",
    "meaning_ja": "〈U〉港 / 避難所,隠れ場所",
    "example_sentence": "The harbor is bustling with activity as ships come and go.",
    "translated_sentence": "港は船が出入りして活気に満ちています。"
  },
  {
    "entry": "head",
    "meaning_ja": "(顔を含めた)頭, 頭部 / 頭脳  / 長,指導者  / (ある物の)上部, 先頭  / (川・泉の)源  / (人・動物の)頭数  / 首席,首位  / 《複数形で》(頭像のある)貨幣の表  / 項目,(新聞の)見出し  / 《米俗》マリファナ常用者  / 《名詞の前で形容詞的に》長の,指導者の",
    "example_sentence": "The elephant has a large head.",
    "translated_sentence": "象は大きな頭を持っている。"
  },
  {
    "entry": "health",
    "meaning_ja": "健康,健全  / (体の)状態,調子  / 《To one's health!》(健康を祝しての)乾杯",
    "example_sentence": "Exercising regularly is good for your health.",
    "translated_sentence": "運動を定期的に行うと健康に良いです。"
  },
  {
    "entry": "he",
    "meaning_ja": "彼は, 彼が / 《指す人の性別が分からないか,または分かる必要のない場合に》その人,あの人 / 《~ who(that)の形で》《文》…するものはだれでも / (動物の)オス",
    "example_sentence": "He is my father.",
    "translated_sentence": "彼は私の父です。"
  },
  {
    "entry": "helpful",
    "meaning_ja": "助けになる / 役立つ / 親切である",
    "example_sentence": "The helpful neighbor helped me carry my groceries.",
    "translated_sentence": "親切な隣人が食料品を運ぶのを手伝ってくれました。"
  },
  {
    "entry": "her",
    "meaning_ja": "《[[she]]の目的格》彼女に  / 《口語》《[[be]] の補語に用いて》 彼女",
    "example_sentence": "I gave her a gift for her birthday.",
    "translated_sentence": "彼女の誕生日に彼女にプレゼントをあげました。"
  },
  {
    "entry": "hesitate",
    "meaning_ja": "ためらう,ちゅうちょする  / 口ごもる,どもる",
    "example_sentence": "I hesitate to ask for help.",
    "translated_sentence": "助けを求めることにためらいます。"
  },
  {
    "entry": "hi",
    "meaning_ja": "《話》(あいさつとして)やあ,こんにちは  / 《英》(注意を促す発声として)おい,ちょっと(hey)",
    "example_sentence": "Hi, how are you?",
    "translated_sentence": "こんにちは、お元気ですか？"
  },
  {
    "entry": "high",
    "meaning_ja": "高い,高い所にある  / 《数の後に置いて》高さが…ある  / (数量・程度などが標準より)高い,大きい,激しい  / (身分・地位が)高い,高貴な  / 気高い,高潔な  / (声の調子が)高い,鋭い  / 値段の高い,金の掛かる,ぜいたくな  / 楽しい,陽気な,上得意の  / (時・季節が)盛りの,たけなわの  / (色が)濃い,赤い  / 《話》(酒・麻薬などに)酔って  /",
    "example_sentence": "The mountain is high.",
    "translated_sentence": "山が高いです。"
  },
  {
    "entry": "hide",
    "meaning_ja": "〈他〉を隠す / 〈自〉隠れる, 潜む /",
    "example_sentence": "The cat hid under the bed.",
    "translated_sentence": "猫はベッドの下に隠れた。"
  },
  {
    "entry": "hill",
    "meaning_ja": "〈C〉丘, 小山 / (特に道路の)傾斜,坂",
    "example_sentence": "We climbed the hill and enjoyed the beautiful view.",
    "translated_sentence": "私たちは丘を登って美しい景色を楽しんだ。"
  },
  {
    "entry": "hold",
    "meaning_ja": "〈他〉(手などに)…を持つ,を持っている / ...を押しとどめる / (ある位置・状態に) ...を保つ / (容器などが) ...を入れている / 〈自〉しっかりと付いている / 《...に》しっかりつかまっている 《to ...》 / 《 ~ 形容詞》《...の》ままである /",
    "example_sentence": "I have a hold on the situation.",
    "translated_sentence": "私は状況を把握している。"
  },
  {
    "entry": "honor",
    "meaning_ja": "〈U〉(人から受ける) 尊敬 / (広く世間から受ける) 名誉 /",
    "example_sentence": "It is an honor to meet you.",
    "translated_sentence": "お会いできて光栄です。"
  },
  {
    "entry": "hopefully",
    "meaning_ja": "願わくば, うまくいけば / 希望を持って",
    "example_sentence": "Hopefully, the weather will be nice for our picnic.",
    "translated_sentence": "願わくば、ピクニックのために天気が良いことを願っています。"
  },
  {
    "entry": "hotel",
    "meaning_ja": "ホテル,旅館",
    "example_sentence": "I'm staying at a hotel.",
    "translated_sentence": "私はホテルに泊まっています。"
  },
  {
    "entry": "however",
    "meaning_ja": "しかしながら, それにもかかわらず  / どんなに…でも / 《話》(いったい)どんなふうに / 【接】どのように...しても",
    "example_sentence": "However, I still managed to finish the project on time.",
    "translated_sentence": "しかし、それでも何とか時間内にプロジェクトを終えることができた。"
  },
  {
    "entry": "humor",
    "meaning_ja": "〈U〉ユーモア, おかしさ / 〈C〉《…の》気分《for ...》",
    "example_sentence": "She has a great sense of humor.",
    "translated_sentence": "彼女はユーモアのセンスが素晴らしいです。"
  },
  {
    "entry": "illegal",
    "meaning_ja": "不法の,違法の",
    "example_sentence": "Engaging in illegal activities can result in severe consequences.",
    "translated_sentence": "違法行為に従事すると深刻な結果を招く可能性があります。"
  },
  {
    "entry": "image",
    "meaning_ja": "(鏡に映った)像,(レンズによる)映像  / (心に浮かぶ)像,心像,イメージ  / (絵・彫刻などによる人・動物などの)像,肖像;偶像《+of+名》  / (…に)そっくりの人(物)《+of+名》  / (…の)典型;(…の)化身《+of+名》  / (直喩(ちょくゆ)・隠喩などの)比喩  / …‘の'像を描く;…‘を'思い描く",
    "example_sentence": "I saw my image in the mirror.",
    "translated_sentence": "私は鏡に映った自分の像を見ました。"
  },
  {
    "entry": "impression",
    "meaning_ja": "〈C〉〈U〉(…に与える)印象,感銘《+on(upon)+名》  / 〈C〉〈U〉(人・物についての)感じ《+of+名》  / 〈U〉(漠然とした)感じ,考え  / 〈C〉(圧力などでできた)(…の)跡,刻印,印(mark)《+of+名》  / 〈C〉(…の)まね《+of+名》  / 〈C〉印刷,刷り;(原版の)…刷",
    "example_sentence": "Her smile left a lasting impression on me.",
    "translated_sentence": "彼女の笑顔が印象に残っている。"
  },
  {
    "entry": "inch",
    "meaning_ja": "インチ(尺度の単位で1/12foot,2.54cm;《略》in.,in)  / わずかな距離,少量,少額,少し  / 《まれ》《複数形で》身長,背たけ",
    "example_sentence": "He measured the length of the table in inches.",
    "translated_sentence": "彼はテーブルの長さをインチで測った。"
  },
  {
    "entry": "income",
    "meaning_ja": "〈U〉(一定の) 収入, 所得",
    "example_sentence": "My income has increased significantly this year.",
    "translated_sentence": "私の収入は今年大幅に増加しました。"
  },
  {
    "entry": "indeed",
    "meaning_ja": "《文全体または前の語を強調して》実に,全く, 本当に / 《前に言ったことを確認あるいは強調して》実は, 事実はそれどころか, 実はむしろ / 《譲歩を表して》なるほど,いかにも / 《話》まさか,まあ,ほんとうかい",
    "example_sentence": "Indeed, it was a beautiful day.",
    "translated_sentence": "実に、それは美しい日でした。"
  },
  {
    "entry": "infection",
    "meaning_ja": "〈U〉伝染 / 感染〈C〉伝染病",
    "example_sentence": "The infection spread rapidly throughout the community.",
    "translated_sentence": "感染はコミュニティ全体に急速に広がった。"
  },
  {
    "entry": "innocent",
    "meaning_ja": "(人が)無罪の, 潔白な / (心の)純潔な,無邪気な",
    "example_sentence": "It is believed that he was innocent.",
    "translated_sentence": "彼は無実だと信じられている。"
  },
  {
    "entry": "intend",
    "meaning_ja": "...を意図する, のつもりである",
    "example_sentence": "I intend to go to the gym tomorrow.",
    "translated_sentence": "明日、ジムに行くつもりです。"
  },
  {
    "entry": "internal",
    "meaning_ja": "内側の,内部にある  / 国内の(domestic)  / 内からとる,内用の",
    "example_sentence": "The internal structure of the building is well-designed.",
    "translated_sentence": "建物の内部構造はよく設計されています。"
  },
  {
    "entry": "interpretation",
    "meaning_ja": "〈U〉《...の》解明, 説明《of ...》 / 《芸術作品・夢などの》解釈《of ...》  / 通訳",
    "example_sentence": "The interpretation of the data is crucial for understanding the results.",
    "translated_sentence": "データの解釈は結果を理解するために重要です。"
  },
  {
    "entry": "investigation",
    "meaning_ja": "〈C〉〈U〉《...の》調査, 取り調べ, 研究《of, into ...》",
    "example_sentence": "The police are conducting an investigation into the robbery.",
    "translated_sentence": "警察は強盗事件について捜査を行っています。"
  },
  {
    "entry": "involvement",
    "meaning_ja": "〈U〉《...への》関与,かかわり合い《in, with ...》 / 〈U/C〉《...への》熱中,没頭《in, with ...》",
    "example_sentence": "Her involvement in the project was crucial for its success.",
    "translated_sentence": "彼女のプロジェクトへの関与は成功に不可欠でした。"
  },
  {
    "entry": "item",
    "meaning_ja": "事項 / 項目、品目",
    "example_sentence": "The store has a wide variety of items.",
    "translated_sentence": "店には多種多様な商品があります。"
  },
  {
    "entry": "joint",
    "meaning_ja": "共同の",
    "example_sentence": "I have a joint bank account with my spouse.",
    "translated_sentence": "私は配偶者と共同の銀行口座を持っています。"
  },
  {
    "entry": "journalist",
    "meaning_ja": "ジャーナリスト、記者",
    "example_sentence": "The journalist interviewed the politician for the news article.",
    "translated_sentence": "ジャーナリストはニュース記事のために政治家にインタビューしました。"
  },
  {
    "entry": "jump",
    "meaning_ja": "《副詞を伴って》(地面などから)跳ぶ,跳躍する  / 急に(さっと)立ち上がる  / (驚き・恐怖などで)《…に》ぎくっ(ぎょっ)として跳び上がる《at ...》  / 〈金額・数量が〉急増する,急上昇する  / …を跳び越える / 〈人・動物〉を跳躍させる,を急に動かす  / 《話》…に急に襲いかかる",
    "example_sentence": "She can jump really high.",
    "translated_sentence": "彼女は本当に高く跳べる。"
  },
  {
    "entry": "kick",
    "meaning_ja": "…をける,をけ飛ばす / (フットボールで)〈ゴール〉にキックで球を入れる / 《…を》ける《at ...》 / (フットボールで)キックする / 〈発射した銃などが〉反動を与える,はね返る / 《話》《…に》文句を言う,はねつける《at, against ...》",
    "example_sentence": "He kicked the ball into the goal.",
    "translated_sentence": "彼はボールをゴールにけった。"
  },
  {
    "entry": "key",
    "meaning_ja": "《…の》鍵, かぎ《to ...》/ 《the 〜》《達成・理解・解決などの》手がかり,秘訣《to doing》 / (練習問題などの)解答の手引き / (辞書・地図などの)略語解 / 《the 〜》 / 《…への》重要地点, 《…にとって》重要な人(物)《to ...》 / (ぜんまいを巻く)ねじ / (楽器などの)キー,鍵 / (音楽で長短)調 / (声の)調子",
    "example_sentence": "I can't find the key to my car.",
    "translated_sentence": "私は車の鍵が見つからない。"
  },
  {
    "entry": "kid",
    "meaning_ja": "〈C〉《おもに米話》《複数形で》子供,若者 / 子ヤギ / 〈U〉子ヤギの皮",
    "example_sentence": "The kids are playing in the park.",
    "translated_sentence": "子供たちは公園で遊んでいます。"
  },
  {
    "entry": "kiss",
    "meaning_ja": "口づけ,キス  / 軽く触れること  / (1個ずつ紙・銀紙に包まれたチョコレートなどの)小さなキャンデー",
    "example_sentence": "He gave her a kiss on the cheek.",
    "translated_sentence": "彼は彼女の頬にキスをした。"
  },
  {
    "entry": "lady",
    "meaning_ja": "(教養・礼儀を身につけ,洗練された趣味をもつ)淑女,貴婦人  / 《女性(woman)に対する丁寧な言い方として》婦人  / 《L-》《英》…夫人,…令夫人(SirまたはLordの称号をもつ貴族の夫人,また公(侯,伯)爵の令嬢に対する敬称)  / (一般に)女性,婦人(woman)",
    "example_sentence": "The lady in the dress is beautiful.",
    "translated_sentence": "ドレスを着たお嬢さんは美しい。"
  },
  {
    "entry": "last",
    "meaning_ja": "(時間的に) 続く,継続する / （物が）使用に耐える /  …の間をもちこたえる, 〈ある期間〉を生き続ける",
    "example_sentence": "Despite the numerous challenges, she managed to last till the end of the journey.",
    "translated_sentence": "数多くの困難にもかかわらず、彼女は旅の終わりまで持ちこたえることができました。"
  },
  {
    "entry": "lay",
    "meaning_ja": "【他動詞】を置く,を横たえる / をきちんと並べる / を用意する / 《...に》 （重荷・責任など）を負わせる 《on ...》 / (特によくない状態に)…を置く / 卵を産む",
    "example_sentence": "She decided to lay down and take a nap.",
    "translated_sentence": "彼女は横になって昼寝することに決めた。"
  },
  {
    "entry": "leap",
    "meaning_ja": "《しばしば副詞[句]を伴って》ぴょんと飛ぶ,はねる,躍る  / 《副詞[句]を伴って》(飛ぶように)急に(す早く)動く,ぴょんと動く  / 〈人・動物などが〉…‘を'飛び越える  / (…を)〈動物など〉‘に'飛び越えさせる《+名+over(across)+名》",
    "example_sentence": "A fish leaped out of the water.",
    "translated_sentence": "魚が水面から飛び上がった。"
  },
  {
    "entry": "lecture",
    "meaning_ja": "(…についての)講義,講演(speech)《+on+名》  / (…についての)(長い)説教,訓戒《+on(for)+名(doing)》",
    "example_sentence": "I attended a lecture on artificial intelligence.",
    "translated_sentence": "私は人工知能についての講義に出席しました。"
  },
  {
    "entry": "length",
    "meaning_ja": "〈U〉〈C〉(空間・時間の)長さ  / 〈U〉〈C〉長いこと,長い状態  / 〈C〉単位となる長さ;(競馬・競艇の)1馬身,1艇身  / 〈C〉ある長さの物(部分)",
    "example_sentence": "The length of the river is 500 kilometers.",
    "translated_sentence": "その川の長さは500キロメートルです。"
  },
  {
    "entry": "lesson",
    "meaning_ja": "《しばしば複数形で》授業,けいこ  / (教科書などの)課  / 《複数形で》(授業に伴う)勉強  / 教訓,教え,戒め  / (礼拝の時に読む)聖書の一節",
    "example_sentence": "I learned a lot in the lesson.",
    "translated_sentence": "レッスンでたくさん学びました。"
  },
  {
    "entry": "let",
    "meaning_ja": "〈他〉〈人・動物など〉に...させる, ...に...させておく, ...を...するままにしておく《~ ... do》/ 《~ us do》...しよう / 《英》〈土地・家など〉を貸す",
    "example_sentence": "Let's have a party tonight.",
    "translated_sentence": "今夜パーティーを開こう！"
  },
  {
    "entry": "lift",
    "meaning_ja": "(上の位置まで)…‘を'持ち上げる,引き上げる《+up+名,+名+up》  / …‘を'上に向ける《+up+名,+名+up》  / (上の程度・段階まで)…‘を'高める,上げる《+up+名,+名+up》  / 〈禁止令・税金など〉‘を'徹廃する;〈封鎖・妨害など〉‘を'解除する  / 《話》(…から)…‘を'失敬する《+名+from+名》  / 〈雲・霧などが〉晴れる",
    "example_sentence": "He used his strength to lift the heavy box.",
    "translated_sentence": "彼は力を使って重い箱を持ち上げた。"
  },
  {
    "entry": "lie",
    "meaning_ja": "〈人が〉うそを言う, 偽る / 《…に》うそを言う《to ...》/ 《…について》うそを言う《 about ... 》 / 〈物事が〉欺く / 《 ~ oneself out ...》嘘を言って...から逃れる / 《場所を表す副詞を伴って》横たえる / 《状態を表す副詞を伴って》置かれている, ある / 《場所を表す副詞を伴って》 (ある場所に)位置する",
    "example_sentence": "I lied to him and he lied to me in turn.",
    "translated_sentence": "私が彼に嘘をつくと、今度は彼が私に嘘をついた。"
  },
  {
    "entry": "like",
    "meaning_ja": "(外観・性質などが)『…に似た』,のような, みたいな / (やり方,程度などが)『…と同じように』 / 『…らしい』,にふさわしい / 《おもに話》たとえば…のような",
    "example_sentence": "She looks like her mother.",
    "translated_sentence": "彼女は母親に似ている。"
  },
  {
    "entry": "link",
    "meaning_ja": "〈C〉(鎖の) 輪 / 《...と》つなぐもの, 《...との》絆, つながり《with, to ...》",
    "example_sentence": "There's a vital link between the two.",
    "translated_sentence": "２つの間には重要なつながりがある。"
  },
  {
    "entry": "liquid",
    "meaning_ja": "液体,流体",
    "example_sentence": "I spilled the liquid on the floor.",
    "translated_sentence": "私は床に液体をこぼしました。"
  },
  {
    "entry": "listen",
    "meaning_ja": "〈自〉(聞こうとして) 聞く / 《忠告・理性などに》耳をかす, 従う《to ...》",
    "example_sentence": "I always listen to my parents' advice.",
    "translated_sentence": "私はいつも両親の助言に耳を傾けている。"
  },
  {
    "entry": "location",
    "meaning_ja": "〈U〉(…の)位置(場所)を捜し出すこと《+of+名》  / 〈C〉位置,場所  / 〈C〉(映画などの)野外撮影地;〈U〉ロケーション",
    "example_sentence": "I need to find the location of the meeting.",
    "translated_sentence": "私は会議の場所を見つける必要があります。"
  },
  {
    "entry": "log",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "live",
    "meaning_ja": "〈自〉生きている / 〈人などが〉生き続ける / 〈物事が〉長く続く / 〈人などが〉住む / 生活する",
    "example_sentence": "I live in a small town.",
    "translated_sentence": "私は小さな町に住んでいます。"
  },
  {
    "entry": "long",
    "meaning_ja": "長い / 長く続く / 長さが…の / 長々しい,あきあきする / 多い / やせてひょろ長い",
    "example_sentence": "She has long hair.",
    "translated_sentence": "彼女は髪が長いです。"
  },
  {
    "entry": "long",
    "meaning_ja": "【動/自】Aをしきりに望む,待ちわびる《for A》；Aにしてほしいと切望する《for A to do》【動/他】...したがる；...することを切望する《to do》",
    "example_sentence": "Students are [[longing for|long for]] the vacation.",
    "translated_sentence": "学生は休暇を待ち焦がれている。"
  },
  {
    "entry": "loss",
    "meaning_ja": "〈U〉(…を)失うこと,紛失《+of+名》  / 〈C〉(…の)損害,損失;損失額《+of+名》  / 〈U〉〈C〉(…に)負けること,(…の)敗北;失敗《+of+名》  / 〈U〉(状態・程度の)減少,低下  / 《複数形で》(戦場における)(人の)損害,此傷者数",
    "example_sentence": "I experienced a great loss when my grandmother passed away.",
    "translated_sentence": "祖母が亡くなった時、私は大きな喪失感を経験しました。"
  },
  {
    "entry": "low",
    "meaning_ja": "低い / (人格・行為などが)卑しい / 《補語にのみ用いて》(体が) 弱った / 《供給が》不十分な, 《...が》乏しい 《in, on ...》",
    "example_sentence": "The temperature is low today.",
    "translated_sentence": "今日は気温が低いです。"
  },
  {
    "entry": "machine",
    "meaning_ja": "機械  / 自動車,飛行機,自転車  / 加えられた力を強めたり方向を変えたりする機械(器具);てこ,滑車,くさび,斜面など  / 組織,(特に)派閥  / (自主性も意欲もない)機械のような人,機械的に働く人",
    "example_sentence": "The company produces machines for industrial use.",
    "translated_sentence": "会社は産業用の機械を製造しています。"
  },
  {
    "entry": "mainly",
    "meaning_ja": "おもに, もっぱら / 大部分は",
    "example_sentence": "I mainly eat vegetables for dinner.",
    "translated_sentence": "夕食は主に野菜を食べます。"
  },
  {
    "entry": "major",
    "meaning_ja": "大きい(多い)ほうの,いっそう重要な  / (音階が)長調の,長音階の  / 《英》《昔の学校で同姓または兄弟生徒を区別するために姓の後につけて》年長の,兄の",
    "example_sentence": "The Seine is a major river in France.",
    "translated_sentence": "セーヌ川はフランスの主要な川です。"
  },
  {
    "entry": "majority",
    "meaning_ja": "大多数,過半数",
    "example_sentence": "The majority of the students voted in favor of the new school policy.",
    "translated_sentence": "生徒の大多数が新しい学校の方針に賛成票を投じました。"
  },
  {
    "entry": "make",
    "meaning_ja": "〈他〉を作る / を整える / 《行為・動作を表す名詞を目的語にして》…をする, を行う / (ある状態・形態に)…をする / ...になる",
    "example_sentence": "I'm making a cake.",
    "translated_sentence": "私はケーキを作っています。"
  },
  {
    "entry": "manage",
    "meaning_ja": "を管理する, を運営する / 〈道具・機械など〉をうまく扱う / 《~ to do》なんとか...する / 管理する, 運営する / なんとかやっていく",
    "example_sentence": "I manage my time effectively.",
    "translated_sentence": "私は時間を効果的に管理しています。"
  },
  {
    "entry": "male",
    "meaning_ja": "男性の、(動物の)雄の",
    "example_sentence": "He is a male student.",
    "translated_sentence": "彼は男子学生です。"
  },
  {
    "entry": "mass",
    "meaning_ja": "〈C〉《…の》かたまり《of》 / 多数《の…》《of ...》 / 《the ~》大部分《の…》 / 〈U〉一般大衆 / 質量",
    "example_sentence": "The mass of the object is measured in kilograms.",
    "translated_sentence": "物体の質量はキログラムで測定されます。"
  },
  {
    "entry": "mate",
    "meaning_ja": "〈C〉《対をなすものの》片方 《to, of ...》 / 配偶者 / 《英》《しばしば複合語を作って》仲間, 友達",
    "example_sentence": "I'm meeting my mate for lunch.",
    "translated_sentence": "昼食に友達と会っています。"
  },
  {
    "entry": "mean",
    "meaning_ja": "(品質・価値・才能などが) 劣った,つまらない / (人・行為などが) 卑劣な / 《米話》(動物が)御しにくい, (一般に)扱いにくい",
    "example_sentence": "She is a mean person.",
    "translated_sentence": "彼女は意地悪な人だ。"
  },
  {
    "entry": "method",
    "meaning_ja": "〈C〉(特に秩序だった)《…の》方法, 方式《of ...》 /〈C〉〈U〉(思考・行動の) 几帳面さ, 秩序",
    "example_sentence": "I learned a new method for solving math problems.",
    "translated_sentence": "私は数学の問題を解くための新しい方法を学びました。"
  },
  {
    "entry": "might",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "milk",
    "meaning_ja": "(雌の哺乳(ほにゅう)動物が分泌する)乳,(特に食料としての)牛乳,ミルク  / (植物の)乳汁,乳剤,乳液",
    "example_sentence": "I drink a glass of milk every day.",
    "translated_sentence": "毎日牛乳を１杯飲んでいます。"
  },
  {
    "entry": "mine",
    "meaning_ja": "私のもの / 《... of ~》私の...",
    "example_sentence": "This book is mine.",
    "translated_sentence": "この本は私のものです。"
  },
  {
    "entry": "mine",
    "meaning_ja": "〈C〉鉱山, 鉱床 / 《a~》《…の》豊富な資源, 宝庫《of ...》 / 坑道 / 地雷,機雷",
    "example_sentence": "This diamond mine produces some of the world's most valuable gems.",
    "translated_sentence": "このダイヤモンド鉱山は世界で最も価値のある宝石を生産しています。"
  },
  {
    "entry": "minor",
    "meaning_ja": "小さいほうの,少ない  / (階級・地位・重要性などが)劣ったほうの,重要でない  / 重大ではない  / 未成年の  / (音楽で)短調の",
    "example_sentence": "He is nothing but a minor artist.",
    "translated_sentence": "彼は二流の芸術家にすぎない。"
  },
  {
    "entry": "Miss",
    "meaning_ja": "〈C〉未婚婦人 /《複数形で》少女 / 《M-》《未婚婦人の姓・姓名の前に付けて》…嬢,…さん / 《生徒が女の先生に対して》…先生",
    "example_sentence": "She is a miss.",
    "translated_sentence": "彼女は未婚婦人です。"
  },
  {
    "entry": "mode",
    "meaning_ja": "【名/U】《...の》方法《of》  / 流行",
    "example_sentence": "I prefer to drive in manual mode.",
    "translated_sentence": "私はマニュアルモードで運転する方が好きです。"
  },
  {
    "entry": "model",
    "meaning_ja": "〈C〉《...の》模型《of ...》 / 《...の》模範, 手本《of, for ...》 / モデル,ファッションモデル",
    "example_sentence": "She is a successful model.",
    "translated_sentence": "彼女は成功したモデルです。"
  },
  {
    "entry": "modify",
    "meaning_ja": "〈他〉(部分的に)を修正する, を変更する / (条件など)を緩和する / (語・句・節が)を修飾する / 〈自〉修正される",
    "example_sentence": "I need to modify my schedule for next week.",
    "translated_sentence": "来週の予定を変更する必要があります。"
  },
  {
    "entry": "money",
    "meaning_ja": "〈U〉金(かね),金銭;通貨  / 〈U〉(金銭的な)利益,もうけ;富,財産  / 《複数形で》(政府・公共事業などの)財源,基金(funds)",
    "example_sentence": "I saved a lot of money this month.",
    "translated_sentence": "今月はたくさんお金を節約した。"
  },
  {
    "entry": "most",
    "meaning_ja": "《the ~》(数・量・程度などが)最も多い,最高の,最大の  / 《theをつけないで》たいていの,大概の  /",
    "example_sentence": "Most of the people were happy.",
    "translated_sentence": "ほとんどの人々は幸せでした。"
  },
  {
    "entry": "motion",
    "meaning_ja": "〈U〉動くこと,運動,運行,移動  / 〈C〉動作;身ぶり,合図  / 〈C〉(議会などの)動議,提案;（法廷での）申請,申し立て  /",
    "example_sentence": "The motion of the waves was mesmerizing.",
    "translated_sentence": "波の動きは魅了的でした。"
  },
  {
    "entry": "mountain",
    "meaning_ja": "山  / 《the…Mountains》…山脈  / 《a~》山(のような…),(…の)山《+of+名》  / 《a~》多数(の…),多量(の…)《+of+名》",
    "example_sentence": "We climbed the mountain.",
    "translated_sentence": "僕たちは山を登りました。"
  },
  {
    "entry": "mortgage",
    "meaning_ja": "〈C〉抵当, 担保, 住宅ローン",
    "example_sentence": "I need to apply for a mortgage to buy a house.",
    "translated_sentence": "家を買うために住宅ローンを申し込む必要があります。"
  },
  {
    "entry": "mount",
    "meaning_ja": "...を登る / (馬・車)に乗る / を乗せる / 《...の上に》を載せる《on ...》 / 登る / 馬に乗る",
    "example_sentence": "She loves to mount the horse and go for a ride.",
    "translated_sentence": "彼女は馬に乗って散歩するのが大好きです。"
  },
  {
    "entry": "movement",
    "meaning_ja": "〈U〉《…の》運動,動き;移動《of ...》 /  〈C〉動作,身振り / 〈C〉《複数形で》行動,活動 / 〈C〉《…に向かう》(事態の)成り行き,動向《toward ...》 / 〈C〉(政治などの)運動 / 〈C〉(集団の)移動,移住 / 〈C〉(主に交響楽の)楽章 / 〈C〉(時計などの)機械装置,動く仕掛け",
    "example_sentence": "Regular movement is important for maintaining a healthy lifestyle.",
    "translated_sentence": "健康的な生活を維持するためには、定期的な運動が重要です。"
  },
  {
    "entry": "music",
    "meaning_ja": "音楽  / 音楽作品,楽曲  / 楽譜(musical score)  / 美しい調べ,快い音",
    "example_sentence": "I love listening to music.",
    "translated_sentence": "私は音楽を聴くのが大好きです。"
  },
  {
    "entry": "natural",
    "meaning_ja": "自然の / 天然の / 自然な",
    "example_sentence": "The natural beauty of the forest was breathtaking.",
    "translated_sentence": "森の自然な美しさは息をのむほどだった。"
  },
  {
    "entry": "near",
    "meaning_ja": "(空間的・時間的に)…に近く,の近くに / (状態などが)…に近く,…しそうで",
    "example_sentence": "The grocery store is near my house.",
    "translated_sentence": "スーパーマーケットは私の家の近くにあります。"
  },
  {
    "entry": "new",
    "meaning_ja": "(その状態になってまだ時間がたっていなくて)新しい;《名詞の前にのみ用いて》新しく発見(発明)された,新しく来た  / 《名詞の前にのみ用いて》目新しい,初めて聞く,なじみのない  / 《補語にのみ用いて》(人が)(…に)まだ慣れていない,(…を)よく知らない《to+名》  / 《補語にのみ用いて》(人が)(…から)出てきたばかりの《+from+名》  / 《名詞の前にのみ用いて》まだ着た(使った)ことがない,新品の  / 新たに始まる;(肉体的・精神的に)一新した  / 《おもに複合語を作って》最近(recently);新たに,新しく(newly)",
    "example_sentence": "This is a new phone.",
    "translated_sentence": "これは新しい携帯電話です。"
  },
  {
    "entry": "nerve",
    "meaning_ja": "〈C〉神経  / 〈C〉《複数形で》神経過敏,いらだち  / 〈U〉勇気,度胸(courage)  / 〈U〉《時にa ~》厚かましさ,ずぶとさ;無礼  / 〈C〉葉脈;(昆虫の)翅脈(しみゃく)",
    "example_sentence": "It took a lot of nerve to stand up and speak in front of that large audience.",
    "translated_sentence": "あの大勢の観衆の前で立ち上がって話すには、相当な勇気が必要だったよ。"
  },
  {
    "entry": "negotiate",
    "meaning_ja": "(人と)〈物事〉‘を'取り決める,協定する《+名+with+名〈人〉》  / 〈小切手・手形・証券など〉‘を'売却する,換金する  / 《話》〈障害・困難〉‘を'うまく乗り越える,切り抜ける  / (人と物事について)取り決める,協定する《+with+名〈人〉+about(for,on,over)+名》",
    "example_sentence": "They need to negotiate a new contract.",
    "translated_sentence": "彼らは新しい契約を取り決める必要があります。"
  },
  {
    "entry": "never",
    "meaning_ja": "《文の否定》 一度も...しない, 全く...ない, 決して...ない / 《次に来る語句の否定》少しも…ない / 《驚き》まさか,とんでもない",
    "example_sentence": "I will never forget this day.",
    "translated_sentence": "この日は決して忘れない。"
  },
  {
    "entry": "night",
    "meaning_ja": "〈C〉〈U〉夜,晩,夜間  / 〈U〉(夜の)暗やみ,夜蔭  / 〈U〉《文》(精神的に)まっ暗な状態(時),やみ  / 〈C〉(特定の行事・目的に当てられる)晩,夜  / 夜の,夜間[用]の;夜勤の;夜行[性]の",
    "example_sentence": "I love the quietness of the night.",
    "translated_sentence": "夜の静けさを愛している。"
  },
  {
    "entry": "nice",
    "meaning_ja": "(物事が)良い, 気持ちよい / (人が) 親切な / 十分満足のできる, 質のいい",
    "example_sentence": "She has a nice personality.",
    "translated_sentence": "彼女は優しい性格を持っている。"
  },
  {
    "entry": "none",
    "meaning_ja": "《~ of ...》...のどれも...でない / 少しも...ない / 《文》《主語として単独で用いて》だれも…ない",
    "example_sentence": "None of them are mine.",
    "translated_sentence": "どれも私のものではありません。"
  },
  {
    "entry": "north",
    "meaning_ja": "北の,北部の,北向きの / 北からの",
    "example_sentence": "I live in the north of the city.",
    "translated_sentence": "私は市の北に住んでいます。"
  },
  {
    "entry": "not",
    "meaning_ja": "《助動詞,be動詞,時にhaveと共に,また一般動詞にはdoを添えて文の否定を表して》…でない,しない  / 《語・句・節を否定して》…でなく /《不定詞・分詞・動名詞を否定して》…しない  / 《[[all]], [[every]]などとともに用いて部分否定を表して》(全部が…なのでは)ない,(必ずしも…では)ない  / 《[[any]], [[either]]などに伴って全面否定を表して》(全然…)しない,(どちらも…)しない  / 《省略文でnotを含む句・節の代用として》そうではない",
    "example_sentence": "I do not want to go to the party.",
    "translated_sentence": "私はパーティーに行きたくない。"
  },
  {
    "entry": "notion",
    "meaning_ja": "〈C〉心に思うこと,考え,意見 / 〈C〉意図,望み,思いつき / 〈C〉概念,観念 /《複数形で》《米》小間物(針,糸,リボンなど)",
    "example_sentence": "I have a notion that everything will work out in the end.",
    "translated_sentence": "最終的にはすべてがうまくいくという考えを持っている。"
  },
  {
    "entry": "nor",
    "meaning_ja": "《neither…nor,で》…も,も…ない,また…ない(or not)  / 《not,no,neverなどを含む否定節の後で,さらに次に続く内容を否定して》…もまた…ない  / 《肯定文の後,または文頭に置いて,次に続く内容を否定して》そしてまた…ない(and not)",
    "example_sentence": "I can neither sing nor dance.",
    "translated_sentence": "私は歌うことも踊ることもできません。"
  },
  {
    "entry": "number",
    "meaning_ja": "〈U〉〈C〉(数えて得られる)数,数量  / 〈C〉(概念としての)数,数字  / 〈C〉番号 / 〈C〉電話番号",
    "example_sentence": "I have a large number of books in my collection.",
    "translated_sentence": "私のコレクションにはたくさんの本があります。"
  },
  {
    "entry": "observation",
    "meaning_ja": "〈U〉〈C〉(…を)観察(注意)すること;(…の)(特に,科学的)観察《+of+名》  / 〈U〉観察力,注意力  / 《複数形で》(…について)観察されたもの,(…の)観察記録《+of(on)+名》  / 〈C〉(観察に基づく)発言,意見《 on(about)+名…についての意見》",
    "example_sentence": "I enjoy the observation of nature.",
    "translated_sentence": "私は自然の観察を楽しんでいます。"
  },
  {
    "entry": "objective",
    "meaning_ja": "〈C〉目標,目的 / 目的格",
    "example_sentence": "Setting clear objectives is important for achieving success.",
    "translated_sentence": "明確な目標を設定することは成功を達成するために重要です。"
  },
  {
    "entry": "of",
    "meaning_ja": "《所有・所属》…の / 《材料・要素》…でできた / 《部分》…の中の / 《原因・動機》…で / 《主格関係》…による / 《目的格関係》…を / 《同格関係》…という / 《関係・関連》…についての",
    "example_sentence": "He gave me a book of [[fairy tales|fairy tale]].",
    "translated_sentence": "彼は私に童話の本をくれた。"
  },
  {
    "entry": "open",
    "meaning_ja": "…‘を'開く,開ける;…‘の'ふた(おおい)をとる  / …‘を'切り開いて作る,開拓する;…‘を'全開通させる《+名+up,+名+up》  / …‘を'広げる《+up+(out)+名,+名+up(out)》  / …‘を'始める  / …‘を'開業する,開店する,開場する  / (人に)〈心など〉‘を'打ち明ける,〈秘密など〉‘を'漏らす《+名+to+名》  / (新思想などに)〈心・目〉‘を'開く《+名+to+名》  / 〈戸などが〉開く,あく  / 〈花・つぼみが〉開く《+out》  / 〈学校などが〉始まる;〈店などが〉開く  / 〈道路などが〉開通する",
    "example_sentence": "I open the door.",
    "translated_sentence": "私はドアを開けます。"
  },
  {
    "entry": "opinion",
    "meaning_ja": "〈C〉意見,見解《複数形で》所信  / 〈C〉《good,bad;high,lowなどの修飾語を伴って》(人・物事に対する)評仮《+of+名》  / 〈U〉世論;(あるグループ全体の)意見",
    "example_sentence": "In my opinion, the movie was fantastic.",
    "translated_sentence": "私の意見では、その映画は素晴らしかったです。"
  },
  {
    "entry": "opposite",
    "meaning_ja": "(動く方向が)反対の  / (性質上)正反対の,相入れない",
    "example_sentence": "The store is located on the opposite side of the street.",
    "translated_sentence": "その店は道の向こう側に位置しています。"
  },
  {
    "entry": "opportunity",
    "meaning_ja": "〈C〉〈U〉《...する》機会, 好機, きっかけ, チャンス《to do》",
    "example_sentence": "I believe this job will provide me with a great opportunity to grow professionally.",
    "translated_sentence": "私はこの仕事が私にとって大きな成長の機会を提供してくれると信じています。"
  },
  {
    "entry": "original",
    "meaning_ja": "以前にはなかった,新しい  / 独創的な  / 《名詞の前にのみ用いて》最初の,原始の,本来の",
    "example_sentence": "This is an original idea.",
    "translated_sentence": "これはオリジナルのアイデアです。"
  },
  {
    "entry": "ought",
    "meaning_ja": "【助動詞】するべきだ",
    "example_sentence": "You ought to study for the exam.",
    "translated_sentence": "試験の勉強をすべきだ。"
  },
  {
    "entry": "our",
    "meaning_ja": "我々の,私たちの  / 《社説・評論などでmyの代りに用いて》我々の,我が社の;当…の  / 《話題の人を指して》例の,我が  / 《君主が公式の場でmyの代りに用いて》我が,余の",
    "example_sentence": "This is our house.",
    "translated_sentence": "こちらは私たちの家です。"
  },
  {
    "entry": "outline",
    "meaning_ja": "〈C〉《...の》 輪郭 《of ...》 / 概要",
    "example_sentence": "The artist sketched the outline of the landscape.",
    "translated_sentence": "芸術家は風景の輪郭をスケッチしました。"
  },
  {
    "entry": "over",
    "meaning_ja": "…を越えた向こうに / 《数詞を伴って》…以上に / ...の一面に / ...について / ...しながら / 《期間》…の間ずっと",
    "example_sentence": "The bird flew over the house.",
    "translated_sentence": "鳥は家の上を飛んだ。"
  },
  {
    "entry": "pain",
    "meaning_ja": "〈C〉〈U〉(肉体のある部分の)苦痛,痛み  / 〈U〉(精神的な)苦痛,心痛  / 《複数形で》骨折り,苦労,努力  / 〈C〉不快感,いやな感じ;うんざりさせるもの,やっかい者",
    "example_sentence": "I have been experiencing a lot of pain in my back lately.",
    "translated_sentence": "最近、私の背中がとても痛いです。"
  },
  {
    "entry": "paint",
    "meaning_ja": "…‘を'絵の具でかく  / …‘に'ペンキ(塗料)を塗る  / …‘を'言葉で描き出す  / (薬・化粧品などを)〈傷口・顔など〉‘に'塗る《+名+with+名》  / 〈人が〉ペンキ(塗料)を塗る,絵の具で絵をかく  / 〈物が〉よく塗れる,絵の具がよくつく  / 《しばしば軽べつして》化粧する",
    "example_sentence": "She loves to paint beautiful landscapes.",
    "translated_sentence": "彼女は美しい風景を描くことが大好きです。"
  },
  {
    "entry": "panel",
    "meaning_ja": "はめ板,鏡板,仕切り板,パネル(壁・天井・ドアなどを装飾する板)  / (板・プラスチックなどの薄い)1枚板,合板  / (絵画の)画板,パネル画;(写真の)パネル版  / (飛行機・自動車などの)パネル,計器板  / (スカート・ドレスなどに縫いつける)別布,パネル  / 《集合的に》(討論会などの)討論者団,審査団,参加者の一団  / (…で)…‘に'パネルをはめる,はめ板を張る《+名+with(in)+名》",
    "example_sentence": "The panel on the wall is made of wood.",
    "translated_sentence": "壁のパネルは木製です。"
  },
  {
    "entry": "paper",
    "meaning_ja": "〈U〉紙  / 〈C〉(1枚の)紙  / 〈C〉論文,研究論文(口頭で発表するものをさす);(学生の)レポート  / 〈C〉試験問題[用紙];答案[用紙]  / 〈C〉《話》新聞(newspaper)  / 《複数形で》書類,文書;(身分・資格などを示す)証明書  / 〈U〉紙幣(paper money);手形類  / 〈C〉〈U〉壁紙(wallpaper)  / 紙[製]の  / 紙の上だけの,実祭には存在しない  / 新聞[用]の",
    "example_sentence": "I need some paper to write on.",
    "translated_sentence": "私は書くのに紙が必要です。"
  },
  {
    "entry": "particular",
    "meaning_ja": "(ほかでなく)特にこの, あの, 特定の / 特有の",
    "example_sentence": "I don't have any particular preference.",
    "translated_sentence": "特に好みはありません。"
  },
  {
    "entry": "pay",
    "meaning_ja": "〈金・税金・負債など〉‘を'支払う;…‘に'支払う  / (収益・利潤として)〈物事が〉…‘を'もたらす,支払う  / 〈物事が〉…‘の'利益になる,役に立つ  / 〈注意・敬意など〉‘を'払う;〈あいさつ・訪問など〉‘を'する  / (…の)支払い(償い)をする《+for+名(doing)》  / 利益がある,役に立つ",
    "example_sentence": "I need to pay my bills by the end of the month.",
    "translated_sentence": "月末までに請求書を支払わなければなりません。"
  },
  {
    "entry": "payment",
    "meaning_ja": "〈U〉(…の)支払い,納入《+for(of)+名》  / 〈C〉(…の)支払金,支払物《+for(of)+名》  / 〈U〉《時にa payment》(善または悪の)報い,報酬,罰《+for+名》",
    "example_sentence": "I made the payment for my order.",
    "translated_sentence": "私は注文の支払いをしました。"
  },
  {
    "entry": "per",
    "meaning_ja": "...につき,  ...ごとに / 《文》…によって",
    "example_sentence": "How much is the rent per month?",
    "translated_sentence": "家賃は月いくらですか。"
  },
  {
    "entry": "perform",
    "meaning_ja": "〈困難なことなど〉を成し遂げる / 〈義務・約束など〉を果たす / 〈劇など〉を上演する,を演奏する, を披露する",
    "example_sentence": "I perform a magic trick at the party.",
    "translated_sentence": "私はパーティーで手品を披露します。"
  },
  {
    "entry": "perspective",
    "meaning_ja": "〈U〉〈C〉(広い視野からの)観点, 視点 / 〈U〉(距離の遠近による)物の見え方, 遠近感 / 遠近法, 透視図法 / 【形】遠近法の",
    "example_sentence": "From my perspective, the situation seems quite different.",
    "translated_sentence": "私の視点からすると、状況はかなり異なって見えます。"
  },
  {
    "entry": "pink",
    "meaning_ja": "桃色の / 左翼的な",
    "example_sentence": "The sky is so pink tonight.",
    "translated_sentence": "今夜の空はとてもピンク色です。"
  },
  {
    "entry": "pig",
    "meaning_ja": "〈C〉ブタ",
    "example_sentence": "The pig squealed when it was touched.",
    "translated_sentence": "豚は触られると鳴いた。"
  },
  {
    "entry": "pile",
    "meaning_ja": "〈C〉《...の》積み重ね《of ...》 / 《話》 《of ...》多数の...",
    "example_sentence": "I have a pile of books on my desk.",
    "translated_sentence": "私の机の上に本の山があります。"
  },
  {
    "entry": "place",
    "meaning_ja": "〈C〉場所, 位置 / 地域 / 地位 / 職",
    "example_sentence": "That is a good place to live.",
    "translated_sentence": "そこは住むのによい場所だ。"
  },
  {
    "entry": "plastic",
    "meaning_ja": "〈U〉プラスチック;〈C〉プラスチック製品",
    "example_sentence": "Plastic is a versatile material that is used in many industries.",
    "translated_sentence": "プラスチックは多くの産業で使用される多目的な材料です。"
  },
  {
    "entry": "play",
    "meaning_ja": "〈他〉を競技する / （ゲームなど）をする / を演奏する / を演じる〈自〉遊ぶ",
    "example_sentence": "I love to play soccer with my friends.",
    "translated_sentence": "私は友達とサッカーをするのが大好きです。"
  },
  {
    "entry": "pocket",
    "meaning_ja": "(洋服の)ポケット  / ポケットに似た物  / 所持金;資力  / (異質の物に囲まれた)(…の)小地域,小グループ《+of+名》  / ポケット(プール式ビリヤードで四隅と横に設けた玉の落ちる穴)  / =air pocket  / (鉱石を一時ためておく)土中の穴  / 携帯用の,小型の",
    "example_sentence": "I put the keys in my pocket.",
    "translated_sentence": "私はキーをポケットに入れた。"
  },
  {
    "entry": "political",
    "meaning_ja": "《名詞の前にのみ用いて》国家の,政府の;政治の,政治上の:  / 《名詞の前にのみ用いて》国家(政府)に有害な  / 政治好きの,政治活動する  / 政略的な",
    "example_sentence": "The political situation in the country is unstable.",
    "translated_sentence": "国内の政治情勢は不安定です。"
  },
  {
    "entry": "portion",
    "meaning_ja": "〈C〉部分 / 一人前《of》 / 運命",
    "example_sentence": "I would like a smaller portion, please.",
    "translated_sentence": "少なめの量でお願いします。"
  },
  {
    "entry": "possible",
    "meaning_ja": "可能な；ありうる；起こりうる /〈U〉《the ~》 可能性 〈C〉可能性のある人(物)",
    "example_sentence": "It is possible to achieve your dreams if you work hard.",
    "translated_sentence": "努力すれば夢を叶えることが可能です。"
  },
  {
    "entry": "possibly",
    "meaning_ja": "ひょっとしたら, ことによると / 《canと共に用いて》《肯定文で》なんとかして,できる限り / 《疑問文で》なんとか,どうにかして / 《否定文で》どうしても",
    "example_sentence": "I will possibly go to the party tonight.",
    "translated_sentence": "今夜、ひょっとしたらパーティーに行くかもしれません。"
  },
  {
    "entry": "post",
    "meaning_ja": "〈U〉《英》 郵便, 郵便制度 / 《英》(郵便物の1回の) 集配, 配達 / 《the ~》《英》郵便局（[[~ office|post office]]）/ 郵便箱",
    "example_sentence": "I need to send a post today.",
    "translated_sentence": "今日、郵便を出さなければなりません。"
  },
  {
    "entry": "praise",
    "meaning_ja": "〈U〉《...を》ほめること, 《...の》称賛した《of ...》",
    "example_sentence": "The novel is worthy of praise.",
    "translated_sentence": "その小説は賞賛に値する。"
  },
  {
    "entry": "pour",
    "meaning_ja": "《副詞[句]を伴って》〈液体〉‘を'注ぐ,つぐ,流す  / (…に)…‘を'注ぎかける,溶びせる,〈努力など〉‘を'注ぐ《+out(forth)+名,+名+out(forth)》  / 《副詞[句]を伴って》〈水・煙などが〉流れる;《比喩(ひゆ)的に》〈人・物が〉流れ出る  / 〈雨が〉激しく降る《+down》  / 《話》(レセプションなどで)〈婦人が〉お茶(コーヒーなど)をつぐ,接待役をする  / どしゃ降り",
    "example_sentence": "She poured the milk into a glass.",
    "translated_sentence": "彼女はミルクをグラスに注ぎました。"
  },
  {
    "entry": "pray",
    "meaning_ja": "(神に…を)祈る《to+名〈神〉+for+名》  / 《話》(物事を)心から望む《+for+名》  / 〈神〉‘に'祈願する,祈る  / 《pray+that節》…であることを心から望む  / 《文》…‘を'懇願する,請う  / 《改まった命令文で》どうか(please);《疑問文で》ねえ,もし",
    "example_sentence": "I pray for world peace.",
    "translated_sentence": "世界の平和を祈っています。"
  },
  {
    "entry": "pound",
    "meaning_ja": "《…で》…を強く打つ, を連打する《with ...》 / 《…になるまで》…を打ち砕く,をたたきつぶす《into, to ...》 / 《…を》強く打つ, 連打する《at, on, against ...》 / 〈心臓などが〉激しく鼓動する / 《副詞を伴って》ドスンドスンと歩く",
    "example_sentence": "He pounds the table in frustration.",
    "translated_sentence": "彼はイライラしてテーブルを強く打つ。"
  },
  {
    "entry": "present",
    "meaning_ja": "《...に》出席している,居合わせている《at, in ...》 / 《...に》ある《in ...》 / 現在の,今の",
    "example_sentence": "In the present moment, we need to focus on what we can achieve together.",
    "translated_sentence": "現在、この瞬間に、私たちは一緒に何を達成できるかに集中する必要があります。"
  },
  {
    "entry": "presence",
    "meaning_ja": "〈U〉居ること,あること / 出席",
    "example_sentence": "Her presence in the room was undeniable.",
    "translated_sentence": "彼女の存在感は部屋において明白だった"
  },
  {
    "entry": "press",
    "meaning_ja": "〈他〉を押す, を圧する / 〈自〉《...を》押す, 圧する 《on, against ...》",
    "example_sentence": "She pressed the button to start the machine.",
    "translated_sentence": "彼女はボタンを押して機械を起動させた。"
  },
  {
    "entry": "presumably",
    "meaning_ja": "たぶん,おそらく,推定上,推定されるように",
    "example_sentence": "He presumably left early.",
    "translated_sentence": "彼はおそらく早く出たのだろう。"
  },
  {
    "entry": "process",
    "meaning_ja": "〈U〉〈C〉(自然の) 作用, 過程 / (物事の)手順, 方法",
    "example_sentence": "The manufacturing process involves several steps.",
    "translated_sentence": "製造プロセスにはいくつかのステップが含まれています。"
  },
  {
    "entry": "private",
    "meaning_ja": "私的な；個人的な；私有の；内密の【名】二等兵",
    "example_sentence": "He has a private office at work.",
    "translated_sentence": "彼は仕事場に個室がある。"
  },
  {
    "entry": "prize",
    "meaning_ja": "〈C〉賞, 賞品 / (努力して手に入れる) 価値あるもの",
    "example_sentence": "She won the first prize in the competition.",
    "translated_sentence": "彼女はコンテストで一等賞を獲得しました。"
  },
  {
    "entry": "production",
    "meaning_ja": "〈U〉(…を)生み出すこと,(…の)生産,産出,製造《+of+名》  / 〈U〉生産高,産出額(量)  / 〈C〉産物,製品  / 〈U〉(…の)提出,提示《+of+名》  / 〈C〉(劇・映画などの)製作;(文学などの)作品",
    "example_sentence": "The production of goods has increased significantly in the past year.",
    "translated_sentence": "昨年度において、商品の生産は大幅に増加しました。"
  },
  {
    "entry": "profile",
    "meaning_ja": "横顔,プロフィール  / (彫象などの)側面  / (背景をパックにした)輪郭,外形  / (通例,図やグラフで示す)分折,分ジ違表  / (新物・雑誌などの)人物紹介  / …‘の'横顔を書く  / 《受動体で》(…を背景に)…‘の'輪郭を描く《+名+against+名》・犯人像を描く",
    "example_sentence": "I updated my profile picture.",
    "translated_sentence": "私はプロフィール写真を更新しました。"
  },
  {
    "entry": "project",
    "meaning_ja": "…‘を'計画する,企画する  / (ねらって)…‘を'投げる;…‘を'発射する  / (…に)〈光・影・映像など〉‘を'投げかける,投影する,映写する;〈声〉‘を'かける《+名+on(onto)+名》  / (他の人に〈‘自分の考え・気持ち〉‘を'投げかけて伝える《+名+on(upon)+名》  / (想像して,…の時間・場所・情況などの中へ)…‘を'置いてみる《+名+in(into)+名》  / (得られた情報らよって)…‘を'予報する,予測する  / 突き出る,出っ張る / 「見積もる」、「提示する」",
    "example_sentence": "A new dictionary has been projected.",
    "translated_sentence": "１冊の新しい辞書の発行が計画されている。"
  },
  {
    "entry": "protection",
    "meaning_ja": "〈U〉(…から)保護すること,守ること;保護されていること《+from(against)+名》  / 《単数形で》(…を)防いでくれる人(物),保護者《+from(against)+名》",
    "example_sentence": "Wearing a helmet is important for the protection of your head.",
    "translated_sentence": "ヘルメットをかぶることは、頭部の保護に重要です。"
  },
  {
    "entry": "put",
    "meaning_ja": "《副詞を伴って》(ある場所・位置に)…を置く / 《状態を表す副詞を伴って》(ある状態に)…を置く / 《仕事・任務・目的などに》...を向ける,を用いる《to ...》 / 《物事に》〈解釈・価値など〉を与える《on, upon ...》 / 《…に》〈考えなど〉を表現する,述べる《into ...》",
    "example_sentence": "I put the book on the table.",
    "translated_sentence": "私は本をテーブルの上に置きました。"
  },
  {
    "entry": "qualify",
    "meaning_ja": "〈才能・技術などが〉〈人〉に資格を与える / 《...の》資格を得る,検定を取る 《for ...》",
    "example_sentence": "She must qualify for the scholarship.",
    "translated_sentence": "彼女は奨学金の資格を得なければなりません。"
  },
  {
    "entry": "quality",
    "meaning_ja": "〈C〉《...の》特質,特性《of》 / 〈U〉《...の》本質《of》 / 質,品質 / 優秀性 / 高い身分",
    "example_sentence": "The quality of this product is excellent.",
    "translated_sentence": "この製品の品質は優れています。"
  },
  {
    "entry": "quick",
    "meaning_ja": "(動作などが)速い,急速な,素早い;(人が)敏しょうな,機敏な  / (進行・経過などが)瞬間の,短時間内の,すぐ終わる  / (人,人の頭が)理解の早い,りこうな,利発な;(感覚などが)鋭敏な,鋭い  / せっかちな,気の短い  / 《古》命のある,生きている(living)  / (爪の下・傷口などの)最も敏感なところ;(感情の)いちばん痛いところ  / 素早く,急いで  / 《複合語を作って》「早く(…する)」の意を表す",
    "example_sentence": "He has a quick reflex.",
    "translated_sentence": "彼は反射神経が速いです。"
  },
  {
    "entry": "quote",
    "meaning_ja": "引用 / 見積価格",
    "example_sentence": "I'd like a quote on the following.",
    "translated_sentence": "下記に対して価格を提示してください。"
  },
  {
    "entry": "race",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "彼女はわずかな差でレースに勝った。",
    "meaning_ja": NaN,
    "example_sentence": NaN,
    "translated_sentence": NaN
  },
  {
    "entry": "range",
    "meaning_ja": "〈U〉《a ~》(知識などの)範囲,広がり / 〈U〉《a~》(価格・気温などの変動の)幅 / 〈U〉《a ~》(ミサイルなどの)着弾距離,射程 / 〈U〉《a~》(航空機などの)航続距離 / 〈C〉(銃砲の)射撃場 / 〈C〉《米》放牧地域 / 〈C〉(山などの)列,連なり  / 〈C〉(料理用の)レンジ / 〈U〉《a~》(動植物の)生息区域",
    "example_sentence": "The price range for these shoes is $50 to $100.",
    "translated_sentence": "これらの靴の価格の範囲は$50から$100です。"
  },
  {
    "entry": "rapid",
    "meaning_ja": "速い,すばやい,敏速な  / (坂などが)急な,険しい",
    "example_sentence": "The progress of civilization is very rapid.",
    "translated_sentence": "文明の進歩がとても速い。"
  },
  {
    "entry": "rate",
    "meaning_ja": "〈C〉速度 / 割合 / 比率 / 値段 / 〈U〉等級",
    "example_sentence": "The interest rate on the loan is very high.",
    "translated_sentence": "ローンの利率は非常に高いです。"
  },
  {
    "entry": "raw",
    "meaning_ja": "(食物が)生の,料理されていない  / (物が)原料のままの,加工されていない  / (皮膚が)赤むけの,傷口のあいた;(…で)赤むけの《+with+名》  / (人が)経験のない,未熟な;(…に)不慣れの《+to+名》  / 湿気があって寒い  / 《話》ひどい",
    "example_sentence": "I prefer to eat raw vegetables.",
    "translated_sentence": "私は生野菜を食べるのが好きです。"
  },
  {
    "entry": "reason",
    "meaning_ja": "〈C〉〈U〉理由,わけ,根拠  / 〈U〉理性,判断力;道理",
    "example_sentence": "I'm asking for a reason.",
    "translated_sentence": "なぜかを尋ねています。"
  },
  {
    "entry": "recently",
    "meaning_ja": "人ごろ,最近,このごろ",
    "example_sentence": "I recently met a lot of people.",
    "translated_sentence": "最近、たくさんの人に会いました。"
  },
  {
    "entry": "record",
    "meaning_ja": "〈C〉《...の》記録 / 《...を》記録すること《of》 / 経歴 / 最高記録",
    "example_sentence": "I will break the record.",
    "translated_sentence": "私は記録を打ち破るつもりだ。"
  },
  {
    "entry": "recover",
    "meaning_ja": "〈他〉〈失ったもの〉を取り戻す, を回復する / 〈損失など〉を埋め合わせる / 《...から》正常な状態に戻る, 回復する《from ...》",
    "example_sentence": "After the long illness, she worked hard to recover her strength.",
    "translated_sentence": "長い病気の後、彼女は体力を回復するために懸命に努めた。"
  },
  {
    "entry": "reduce",
    "meaning_ja": "〈他〉《...まで》〈数量など〉を減らす《to ...》 / 〈程度・地位など〉を下げる / 《ある状態・形に》…をする, を変える",
    "example_sentence": "Regular exercise can help reduce the risk of heart disease.",
    "translated_sentence": "定期的な運動は心臓病のリスクを減らすのに役立ちます。"
  },
  {
    "entry": "reflect",
    "meaning_ja": "〈光・熱・音など〉‘を'反射する,はね返す  / 〈鏡などが〉〈人・物の姿〉‘を'映す,反映する  / …‘を'表す,示す  / 〈行為・でき事が〉(人などに)〈名誉・不名誉など〉‘を'もたらす,招く《+名+on(upon)+名》  / 《reflect+that(wh-節・句)》…であると(…かどうか)よく考える,悟る  / (…を)よく考える,熟考する《+on(upon)+名(doing)》  / 〈物事が〉(…に)非難をもたらす,(…の)不名誉となる《+on(upon)+名》",
    "example_sentence": "The mirror can reflect light.",
    "translated_sentence": "鏡は光を反射することができます。"
  },
  {
    "entry": "reflection",
    "meaning_ja": "〈U〉(光・熱などの) 反射 / 〈C〉(鏡・水面などに映った) 映像 / 〈U〉《…についての》熟考《on, upon ...》",
    "example_sentence": "The reflection of the sunlight on the water was breathtaking.",
    "translated_sentence": "水面に反射する太陽の光は息をのむほど美しかった。"
  },
  {
    "entry": "regret",
    "meaning_ja": "…‘を'後悔する;…‘を'残念に思う  / 〈人が〉〈失われたもの〉‘を'惜しむ,悲しむ  /",
    "example_sentence": "I regret not studying harder for the exam.",
    "translated_sentence": "試験のためにもっと一生懸命勉強しなかったことを後悔しています。"
  },
  {
    "entry": "relationship",
    "meaning_ja": "〈C〉関係,間柄,仲 / 親密な関係,交際 / 〈U〉親戚関係",
    "example_sentence": "Building a strong relationship takes time and effort.",
    "translated_sentence": "強い関係を築くには時間と努力が必要です。"
  },
  {
    "entry": "religious",
    "meaning_ja": "宗教の",
    "example_sentence": "She practices a religious lifestyle, attending church every Sunday.",
    "translated_sentence": "彼女は宗教的な生活を送り、毎週日曜日に教会に通っています。"
  },
  {
    "entry": "remind",
    "meaning_ja": "〈人〉‘に'思い出させる,念を押す:",
    "example_sentence": "I need to remind my mom to buy groceries.",
    "translated_sentence": "私は母に食料品を買うように思い出させる必要があります。"
  },
  {
    "entry": "relevant",
    "meaning_ja": "《補語にのみ用いて》《主題・当面の問題などに》関連のある《to ...》 / 《...に》適切な, 妥当な《to ...》",
    "example_sentence": "This book is relevant to the topic we are discussing.",
    "translated_sentence": "この本は私たちが話しているトピックに関連しています。"
  },
  {
    "entry": "reporter",
    "meaning_ja": "報告者,申告者  / 報道員,探訪記者  / 判決記録係",
    "example_sentence": "The reporter wrote an article about the scandal.",
    "translated_sentence": "レポーターはスキャンダルの記事を書いた。"
  },
  {
    "entry": "representative",
    "meaning_ja": "代表する / 典型的な / 象徴する",
    "example_sentence": "The artist's latest sculpture, a fragmented stone face, is a powerful representative image of the city's struggle with gentrification.",
    "translated_sentence": "アーティストの最新の彫刻である断片化された石の顔は、都市の高級化との闘いを力強く象徴するイメージである。"
  },
  {
    "entry": "rent",
    "meaning_ja": "〈U〉《...に対する》 借用料, 家賃 《for ...》 /",
    "example_sentence": "I need to pay my rent by the end of the month.",
    "translated_sentence": "月末までに家賃を支払わなければならない。"
  },
  {
    "entry": "respond",
    "meaning_ja": "返事する / 反応する / ...であると答える",
    "example_sentence": "I will respond to the email [[as soon as possible]].",
    "translated_sentence": "できるだけ早く、そのメールに返信します。"
  },
  {
    "entry": "reserve",
    "meaning_ja": "〈他〉《...のために》...を別にしておく, を取っておく, を予約する《for ...》 / 《...のために》 を残しておく 《for ...》",
    "example_sentence": "I would like to reserve a table for two.",
    "translated_sentence": "二人用のテーブルを予約したいです。"
  },
  {
    "entry": "rest",
    "meaning_ja": "【名/U/C】休息【動/自】休む,休息する / 安心する / 《...に》載っている,支えられている《on, upon》【動/他】を休息させる",
    "example_sentence": "I need to rest after a long day of work.",
    "translated_sentence": "仕事の長い一日の後は休息が必要です。"
  },
  {
    "entry": "return",
    "meaning_ja": "(…から元の場所・状態などに)帰る,戻る《+from+名+to+名》  / 再び起こる,再発する  / (元の持ち主・場所・状態に)…‘を'返す,戻す《+名+to+名》  / (同じようなやり方で)(…に対して)…‘を'お返しする,…‘で'こたえる《+名+for+名》  / …‘を'公式に報告する,答申する  / 〈利子・利益など〉‘を'生む,生ずる  / (国会議員などに)…‘を'選出する  / 《しばしば引用節を従えて》…‘と'言葉を返す,返答する",
    "example_sentence": "I will return home after work.",
    "translated_sentence": "仕事の後、家に帰ります。"
  },
  {
    "entry": "reverse",
    "meaning_ja": "(位置・方向・順序などにおいて)逆の;裏側の  / 逆に動かす(動く),バックの",
    "example_sentence": "The reverse side of that coin has a picture of an eagle.",
    "translated_sentence": "そのコインの反対側にはワシの絵が描かれています。"
  },
  {
    "entry": "revolution",
    "meaning_ja": "〈U〉〈C〉(…に対する)(政治的な)革命《+against(in)+名》  / 〈C〉(一般に)(…の)大変革《+in+名》  / 〈U〉回転運動;〈C〉一回転  / 〈U〉〈C〉(天体の)運行,公転《+of+名》  / 〈U〉〈C〉(季節などの)循環,周期《+of+名》",
    "example_sentence": "The French Revolution was a turning point in history.",
    "translated_sentence": "フランス革命は歴史の転換点でした。"
  },
  {
    "entry": "ride",
    "meaning_ja": "《...に》乗って行く, 乗っている《on, in ...》 / 〈乗り物など〉に乗って行く",
    "example_sentence": "I love to ride my bike to work every day.",
    "translated_sentence": "毎日自転車で仕事に乗って行くのが大好きです。"
  },
  {
    "entry": "right",
    "meaning_ja": "右の, 右側の / (政治上)右派の,保守的な / (道徳的に)正しい,正当な,正義の / (人の判断・意見などが)間偉いのない / (事実に合って)正確な  /",
    "example_sentence": "She is the right person for the job.",
    "translated_sentence": "彼女はその仕事に最適な人材です。"
  },
  {
    "entry": "ring",
    "meaning_ja": "指輪 / 輪, 円形 / (円形の)サーカス演技場,公演場,競技場 / 【動/他】を円形に囲む《about, around ...》 / 【動/自】環状に動く,輪を描く",
    "example_sentence": "She wore a beautiful diamond ring on her finger.",
    "translated_sentence": "彼女は指に美しいダイヤモンドの指輪をつけていました。"
  },
  {
    "entry": "roll",
    "meaning_ja": "〈球などが〉転がる,転がって行く;〈車輪などが〉回る  / 〈車が〉動く,進む  / 〈人・動物などが〉転がり回る  / 〈波などが〉うねる,〈煙などが〉漂う,立ち上る  / 〈時が〉過ぎ去る《+by(away)》  / 〈目が〉ぐるぐる回る  / 〈船などが〉横ゆれする  / 〈雷・太鼓などが〉ごろごろ鳴る,とどろく  / 《話》始める(start)  / 〈球など〉‘を'転がす;〈車輪など〉‘を'回転させる  / 〈車など〉‘を'転がせる;〈家具など〉‘を'ころで動かす,転がして運ぶ  / …‘を'丸める,巻く《+up+名,+名+up》  / (…に)…‘を'包む,くるむ《+名+up in+名》",
    "example_sentence": "The ball began to roll down the hill.",
    "translated_sentence": "ボールは丘を転がり始めた。"
  },
  {
    "entry": "romantic",
    "meaning_ja": "ロマンチックな, 伝記物語的な / 空想的な / 〈C〉空想的な人, ロマンチックな人 / 《複数形で》空想的な考え",
    "example_sentence": "He planned a romantic dinner for two.",
    "translated_sentence": "彼は二人だけのロマンチックなディナーを計画した。"
  },
  {
    "entry": "sail",
    "meaning_ja": "《副詞[句]を伴って》〈船が〉航海する  / (…から…へ)出航する《+from+名+for(to)+名》  / 《副詞[句]を伴って》〈人が〉船で旅をする,航海する  / ヨットを操る,帆走する  / 《副詞[句]を伴って》すべるように進む(飛ぶ);〈人が〉さっそうと歩く  / 〈人・船などが〉〈海・川など〉‘を'渡る  / 〈船〉‘を'操る,走らせる",
    "example_sentence": "The ship sailed onshore.",
    "translated_sentence": "船は陸に向かって航行しました。"
  },
  {
    "entry": "sale",
    "meaning_ja": "〈U〉〈C〉(…の)販売,売却,売れ行き,需要《+of(for)+名》  / 〈C〉特売,安売り  / 《複数形で》販売[の仕事];売り上げ[高]",
    "example_sentence": "The sale will start in two hours.",
    "translated_sentence": "2時間後にセールが開始します。"
  },
  {
    "entry": "say",
    "meaning_ja": "《直接話法で》「…」と言う;《人に》「…」と言う《to 〈人〉》 / (意見として)…を言う,を述べる / 〈時計などが〉〈時刻など〉を示している;〈本・新聞などが〉…と言っている / 言う,話す,断言する",
    "example_sentence": "She didn't say anything.",
    "translated_sentence": "彼女は何も言わなかった。"
  },
  {
    "entry": "save",
    "meaning_ja": "〈他〉(危害・損失・危機などから)を救う / （金など）を残しておく / を節約する / を安全に保つ / 〈自〉《...のために》貯金する《up for ...》 / 《...を》節約する《on ...》",
    "example_sentence": "I saved the document to my computer.",
    "translated_sentence": "ドキュメントをコンピューターに保存しました。"
  },
  {
    "entry": "scientist",
    "meaning_ja": "科学者,自然科学者",
    "example_sentence": "The scientist conducted extensive research on the subject.",
    "translated_sentence": "科学者はそのテーマに関して広範な研究を行った。"
  },
  {
    "entry": "school",
    "meaning_ja": "〈C〉(施設としての) 学校 / (大学の) 学部 / 校舎 / (学問・芸術などの) 派, 流派 /〈U〉《冠詞をつけないで》 授業, 授業時間 /",
    "example_sentence": "I'm going to school.",
    "translated_sentence": "私は学校に行きます。"
  },
  {
    "entry": "security",
    "meaning_ja": "〈U〉安全,無事(safety)  / 〈U〉安心  / 〈U〉(犯罪・被害などに対する)警備,防衛(保護)手段《+against(from)+名》  / 〈U〉〈C〉(…に対する)担保,低当[物件]《+for(against)+名》  / 〈C〉》複数形で》株券,有価証券",
    "example_sentence": "There is no one but longs for peace and security.",
    "translated_sentence": "平和と安全を切望しない人はいない。"
  },
  {
    "entry": "search",
    "meaning_ja": "〈他〉《...を求めて》 （ある場所など）をくまなく捜す 《for ...》 / を綿密に調査する / 〈自〉《...を》綿密に調査する《into ...》 / 《...を求めて...を》くまなく捜す 《through ... for ...》",
    "example_sentence": "I need to search for a new job.",
    "translated_sentence": "新しい仕事を探さなければなりません。"
  },
  {
    "entry": "selection",
    "meaning_ja": "〈U〉選ぶこと, 《...から》選び出すこと《from, out of, among ...》 / 〈C〉《...から》選び抜かれた人(もの) 《from, of ...》 / 《単数形で》(商店などの)品揃え / 〈U〉淘汰",
    "example_sentence": "The department store offers a wide selection of [[choice goods]].",
    "translated_sentence": "その百貨店では、選りすぐりの商品を幅広く取り揃えています。"
  },
  {
    "entry": "sell",
    "meaning_ja": "〈他〉を売る / を販売する",
    "example_sentence": "I'm selling my car.",
    "translated_sentence": "私は車を売っています。"
  },
  {
    "entry": "senior",
    "meaning_ja": "年上の / 上級の",
    "example_sentence": "She is my senior at work.",
    "translated_sentence": "彼女は私の仕事の先輩です。"
  },
  {
    "entry": "separate",
    "meaning_ja": "…‘を'分離する,引き分ける;(…から)…‘を'引き分ける《+名+from+名》  / (…に)〈一つの物〉‘を'分割する,分ける《+名+into+名》  / 〈人が〉別れる;別れて(…に)なる《+into+名》  / (…から)分離する,離れる《+from+名》",
    "example_sentence": "I need to separate the colors from the whites before doing the laundry.",
    "translated_sentence": "洗濯をする前に色物と白物を分ける必要があります。"
  },
  {
    "entry": "sentence",
    "meaning_ja": "文章 / 判決,(刑の)宣",
    "example_sentence": "The sentence is grammatically correct.",
    "translated_sentence": "文法的に正しい文です。"
  },
  {
    "entry": "serious",
    "meaning_ja": "まじめな, 厳粛な  / 本気の, 真剣な / (物事が)重大な, 深刻な",
    "example_sentence": "He is a serious student who always studies hard.",
    "translated_sentence": "彼はいつも熱心に勉強する真面目な学生です。"
  },
  {
    "entry": "settle",
    "meaning_ja": "を決定する,〈問題など〉を解決する   / を安定させる / 〈神経・胃など〉を静める / 《...に》定住する《in ...》",
    "example_sentence": "I need to settle on a decision.",
    "translated_sentence": "私は決断をする必要があります。"
  },
  {
    "entry": "settlement",
    "meaning_ja": "〈U〉〈C〉《...の》解決《of》 / 定住 / 〈U〉入植〈C〉入植地 / 調停",
    "example_sentence": "The settlement of the dispute was reached after months of negotiations.",
    "translated_sentence": "紛争は数ヶ月の交渉の末に解決しました。"
  },
  {
    "entry": "sharp",
    "meaning_ja": "(刃・先端が)鋭い,よく切れる,よく突きささる  / (頂上などが)先がとがっている  / (道路などが)急な,急カーブの,急こう配の  / (言葉などが)厳しい,辛らつな  / (痛みが)鋭い,激しい;(寒さなどが)激しい,身を切るような  / (食物が)ぴりっとする,辛い  / (音が)鋭い,高い  / (輪郭などが)はっきりした,くっきりした  / (感覚・頭が)鋭い  / 抜け目のない,すばしこい  / 油断のない,用心深い  / (動作が)速い,機敏な,きびきびした  / (身なりの)いきな,スマートな  / 《名詞の後にのみ用いて》(音が)シャープの,嬰(えい)音の;調[記]号がシャープ(#)の",
    "example_sentence": "The knife is not sharp.",
    "translated_sentence": "このナイフは良く切れない。"
  },
  {
    "entry": "shape",
    "meaning_ja": "〈U〉〈C〉形, 形状",
    "example_sentence": "The artist used different shapes to create a unique sculpture.",
    "translated_sentence": "芸術家は異なる形状を使ってユニークな彫刻を作りました。"
  },
  {
    "entry": "she",
    "meaning_ja": "彼女は,彼女が  / 《月・船・汽車・都市・国などを指して》それは,それが  / 女,婦人;(動物の)雌",
    "example_sentence": "She is a beautiful girl",
    "translated_sentence": "彼女は美しい少女です"
  },
  {
    "entry": "shoot",
    "meaning_ja": "(…に)〈銃・大砲〉‘を'撃つ,発射する,〈弓など〉‘を'射る,〈弾丸・矢など〉‘を'放つ《+名+at(toward)+名》・〈人・物〉‘を'撃つ,射る・(…に)〈質問・用葉・考えなど〉‘を'矢つぎばやに出す,浴びせかける《+名+at(on)+名》  / (…に)〈光・視線・微笑など〉‘を'放つ,向ける《+名+at(on)+名》・〈手・足など〉‘を'突き出す,〈芽・枝など〉‘を'出す《out+名,+名+out》・〈急流など〉‘を'矢のように下る  / 〈かんぬきなど〉‘を'すっとはめる(はずす) ・《おもに受動態で》(違ったものを)…‘に'織り込む・差し込む,すっと入れる《+名+with+名》・〈写真・映画・テレビ〉‘を'取る,撮影する",
    "example_sentence": "He aimed and shot the target.",
    "translated_sentence": "彼は狙ってターゲットを撃った。"
  },
  {
    "entry": "shop",
    "meaning_ja": "〈C〉《おもに英》小売店,商店(《米》store)  / 《米》(百貨店などの中にある)小さい専門店  / 〈C〉(サービス業の)店  / 〈C〉仕事場,作業場",
    "example_sentence": "I went to the shop to buy some food.",
    "translated_sentence": "私は食料品を買うためにお店に行きました。"
  },
  {
    "entry": "shoulder",
    "meaning_ja": "肩;《複数形で》(両肩を含む)上背部  / 《複数形で》(責任・重荷を負う)双肩,責任を負う能力  / 肩に似た部分 / (服の)肩[の部分] / (山などの)肩 / (道路の)肩  / 肩肉",
    "example_sentence": "He put his hands on his shoulders to stretch.",
    "translated_sentence": "彼は体を伸ばすために肩に手を置いた。"
  },
  {
    "entry": "shower",
    "meaning_ja": "《しばしば複数形で》にわか雨,にわか雪(あられ)  / (涙 / 弾丸 / 祝福 / 批判などの)雨,(…の)洪水《+of+名》 / 《米》共同して金を集めてお祝いのプレゼントを贈ること,祝い品贈呈会(特に結婚や出産を控えた婦人を祝って贈物をするパーティー)  / (またshower bath)  / シャワー",
    "example_sentence": "I took a shower this morning.",
    "translated_sentence": "朝、シャワーを浴びました。"
  },
  {
    "entry": "side",
    "meaning_ja": "〈C〉(物体の) 面 / (物体の) 側面, わき / (中心線・分離線から見た) 片側 / (中心部分から見て)…側 / 《単数形で》(人の) そば",
    "example_sentence": "The side of the mountain was steep.",
    "translated_sentence": "山の斜面は険しかった。"
  },
  {
    "entry": "sight",
    "meaning_ja": "〈U〉視力,視覚(vision) / 〈U〉《時にa ~》(…を)見ること《+of+名》 / 〈U〉見える範囲,視野,視界 / 〈C〉景色,光景,眺め / 《the sights》名所 / 〈U〉見解 / 〈C〉《しばしば複数形で》(望遠鏡などの)照準器,照尺,照星 / 〈C〉《a ~》《話》ひどいもの / 《a ~》多数(の…),多量(の…)《+of+名》;《副詞的に用いて》うんと,ずっと:a sight of money多額の金 /",
    "example_sentence": "My sight is getting worse and worse.",
    "translated_sentence": "私の視力は徐々に悪くなっている。"
  },
  {
    "entry": "silver",
    "meaning_ja": "銀(金属元素;化学記号はAg)  / (商品・通貨基準としての)銀  / 銀貨(一般に銀白色の)硬貨  / 《集合的に》銀(銀めっき)の食器類,銀器",
    "example_sentence": "Silver is a precious metal.",
    "translated_sentence": "銀は貴重な金属です。"
  },
  {
    "entry": "simple",
    "meaning_ja": "簡単な / 単純な / 純然たる / 飾り毛のない / もったいぶらない",
    "example_sentence": "This is a simple task.",
    "translated_sentence": "これは簡単な仕事です。"
  },
  {
    "entry": "sing",
    "meaning_ja": "歌う;(…に)歌って聞かせる《+to(for)+名》;(楽器に合わせて)歌う《+to+名》 / 〈小鳥 / 虫などが〉鳴く,さえずる  / 《文》(…を)詩(歌)にする,(詩(歌)を詠んで)賛美する《+of+名》 / 〈小川 / 風 / 弾丸 / 湯沸かし / 耳などが〉歌うように鳴る / 《米語》自白する;密告する / 〈歌〉‘を'歌う / 《副詞[句]を伴って》歌って…‘を'(…に)する / …‘を'唱える,詠唱する / 《文》…‘を'詩(歌)にする,(詩(歌)に詠んで)賛美する / 合唱の集い",
    "example_sentence": "I sing a song every night before bed.",
    "translated_sentence": "毎晩、私は寝る前に歌を歌います。"
  },
  {
    "entry": "single",
    "meaning_ja": "たった一つの, 一人の / 一人用の / 独身の",
    "example_sentence": "This is the single most important decision of your life.",
    "translated_sentence": "これはあなたの人生でたった一つの最も重要な決定です。"
  },
  {
    "entry": "sir",
    "meaning_ja": "《時にS-》《冠詞なしで》《男性の目上の人・見知らぬ人・店の客・上官・先生・議長などに対する敬った丁寧な呼び掛け語として》あなた,だんな,先生,(警官などが男性を呼び止めて)おい,君  / 《S-》〈U〉サー  / 《しばしばS-》〈C〉《手紙の書き出しのあいさつに用いて》拝啓",
    "example_sentence": "Sir, I need your help.",
    "translated_sentence": "サー、あなたの助けが必要です。"
  },
  {
    "entry": "size",
    "meaning_ja": "〈U〉〈C〉(人や物の) 大きさ / 〈C〉(帽子・靴・シャツなどの) サイズ, 寸法",
    "example_sentence": "The size of the room is very large.",
    "translated_sentence": "部屋の大きさはとても大きいです。"
  },
  {
    "entry": "site",
    "meaning_ja": "【名】(特別な目的を持って使用される)土地,敷地 / (重大な出来事が起こった)場所,跡地 /",
    "example_sentence": "I visited the famous site yesterday.",
    "translated_sentence": "昨日、その有名な場所を訪れた。"
  },
  {
    "entry": "six",
    "meaning_ja": "〈C〉(数の)6;6の記号(6,VIなど)  / 〈U〉6時,6分;6歳  / 《複数扱い》6人,6個  / 〈C〉六つ(6人,6個)一組のもの  / 〈C〉(カード・さいころなどの)6の札(目)  / 6の,6人の,6個の  / 《補語にのみ用いて》6歳の(で)",
    "example_sentence": "There are six apples on the table.",
    "translated_sentence": "テーブルの上にはりんごが6つあります。"
  },
  {
    "entry": "sit",
    "meaning_ja": "〈自〉《...に》座る, 座っている《at, on, in ...》 / 《場所の副詞を伴って》(ある場所に) 位置する",
    "example_sentence": "I'm going to sit here for a while.",
    "translated_sentence": "ここにしばらく座っています。"
  },
  {
    "entry": "skirt",
    "meaning_ja": "(女性用の)スカート  / (コート・ドレスなどの腰から下の)すそ  / (車両・機械などの)すそ部,覆い,スカート  / 《複数形で》(…の)周辺,はずれ,郊外《+of+名》  / 《俗》女,娘(特にa bit of skirt,a piece of skirtの形で快楽の対象としてふざけて)",
    "example_sentence": "She wore a long black skirt.",
    "translated_sentence": "彼女は長い黒いスカートを着ていた。"
  },
  {
    "entry": "slip",
    "meaning_ja": "〈自〉滑る / 〈他〉〈物〉を滑らせる",
    "example_sentence": "I slipped on the wet floor.",
    "translated_sentence": "私は濡れた床で滑って転んだ。"
  },
  {
    "entry": "smell",
    "meaning_ja": "(調べたりするために)…‘を'かぐ,‘の'においをかぐ  / …‘を'においで気づく,‘の'においに感づく  / …‘に'感づく,‘を'かぎ出す《+out+名,+名+out》  / 〈物が〉においがする,におう  / 〈人・動物が〉においがわかる;(…の)においをかぐ《+at+名》  / (特に)いやなにおいがする  / 〈物事が〉何かにおう,(…の)感じがする《+of+名(doing)》",
    "example_sentence": "I can smell something burning in the kitchen!",
    "translated_sentence": "台所で何か焦げているにおいがする！"
  },
  {
    "entry": "smile",
    "meaning_ja": "ほほえむ,にっこりする / 〈好運・神などが〉(…に)好意を示す《+on(upon)+名》 / 《a+形容詞+smileを目的語にして》…‘な'笑い方をする / …‘を'ほほえんで示す / 〈人〉‘に'ほほえみかけて(…)させる(させない)《+名〈人〉+into(out of)+名(doing)》",
    "example_sentence": "He smiled and left.",
    "translated_sentence": "彼は微笑んで去っていった。"
  },
  {
    "entry": "smart",
    "meaning_ja": "(頭の働きが)気のきいた,抜け目のない, 賢い / (動作が)機敏な,てきぱきした / 現代風の / (人・服装などが)きちんとした",
    "example_sentence": "He is a smart boy.",
    "translated_sentence": "彼は賢い少年です。"
  },
  {
    "entry": "snow",
    "meaning_ja": "〈U〉雪  / 〈C〉《単数形で》降雪;《複数形で》積雪  / 〈U〉〈C〉雪のような物;(特に)コカイン,ヘロイン",
    "example_sentence": "The snow was cold and crisp.",
    "translated_sentence": "雪は冷たくてキリッとしていた。"
  },
  {
    "entry": "soil",
    "meaning_ja": "〈U〉(植物の成長に適する) 土, 土壌 / 〈U〉〈C〉《気取って》国,地方 / 《the~》土地,農地",
    "example_sentence": "The soil in this garden is very fertile.",
    "translated_sentence": "この庭の土壌は非常に肥沃です。"
  },
  {
    "entry": "somebody",
    "meaning_ja": "｟くだけて｠ 誰か, ある人",
    "example_sentence": "Somebody left their umbrella in the office.",
    "translated_sentence": "誰かがオフィスに傘を置いていきました。"
  },
  {
    "entry": "soul",
    "meaning_ja": "〈C〉〈U〉魂,霊魂;心,精神(spirit)  / 〈U〉情,感情,情緒  / 〈U〉(物事の)生命,精髄;《話》生気,迫力  / 〈C〉人,人間  / 〈C〉(…の)権化,典型,化身《+of+名》  / 〈C〉(…の)指導者,中心人物《+of+名》",
    "example_sentence": "She has a beautiful soul.",
    "translated_sentence": "彼女は美しい心の持ち主です。"
  },
  {
    "entry": "sometimes",
    "meaning_ja": "ときどき / ときには（...なことがある, ...な時がある, ...なこともある）",
    "example_sentence": "I sometimes go to the park on weekends.",
    "translated_sentence": "週末にときどき公園に行きます。"
  },
  {
    "entry": "sound",
    "meaning_ja": "(物が) 傷んでいない / (心身が) 健全な,健康な / (財政的に) 安定した,堅実な / (論理・判断などが)的確な,もっともな / (睡眠が)深い",
    "example_sentence": "A sound mind dwells in a sound body.",
    "translated_sentence": "健全な精神は健全な肉体に宿る。"
  },
  {
    "entry": "spin",
    "meaning_ja": "〈他〉〈糸など〉を紡ぐ / （クモ・カイコなどが）〈糸〉を吐く / をくるくる回す /〈自〉糸を紡ぐ / くるくる回る",
    "example_sentence": "She watched the wheel spin round and round.",
    "translated_sentence": "彼女は車輪がぐるぐる回るのを見ていた。"
  },
  {
    "entry": "spot",
    "meaning_ja": "場所 / 斑点",
    "example_sentence": "The cat is sleeping at the spot behind the couch.",
    "translated_sentence": "猫はソファーの後ろの場所で寝ています。"
  },
  {
    "entry": "spread",
    "meaning_ja": "〈たたんだ物など〉‘を'広げる,伸ばす《+out+名,+名+out》  / (…に)…‘を'薄く塗る;(…に)…‘を'かける,かぶせる《+名+on(over)+名》  / (…を)…‘に'薄く塗る;(で)…‘を'おおう《+名+with+名》  / …‘を'引き離す,押し広げる  / 《しばしば副詞[句]を伴って》(…に)…‘を'まき散らす;〈知識・ニュースなど〉‘を'広める;〈病気など〉‘を'まん延させる《+名+over(among)+名》  / 〈仕事・支払いなど〉‘を'引き延ばす《+名+out,+out+名》;(ある期間に)〈支払いなど〉‘を'わたらせる《+名+over(for)+名》  / …‘を'広げて見せる,展示する",
    "example_sentence": "She spread the blanket on the grass.",
    "translated_sentence": "彼女はブランケットを草の上に広げました。"
  },
  {
    "entry": "stage",
    "meaning_ja": "〈C〉舞台 / (発達などの)段階",
    "example_sentence": "The play was performed on a large stage.",
    "translated_sentence": "芝居は大きな舞台で上演された。"
  },
  {
    "entry": "start",
    "meaning_ja": "始め；開始",
    "example_sentence": "The start of the race was delayed due to bad weather.",
    "translated_sentence": "レースの開始が悪天候のため遅れました。"
  },
  {
    "entry": "state",
    "meaning_ja": "〈C〉(人・物事の) 状態, 様子 / 〈C〉〈U〉《しばしばS-》国家, 国, 政府 / (アメリカ・オーストラリアなどの)州 / 《話》米国 / 【形】国家の / 《米》州の / 公式の",
    "example_sentence": "The state of California is known for its beautiful beaches.",
    "translated_sentence": "カリフォルニア州は美しいビーチで知られています。"
  },
  {
    "entry": "stay",
    "meaning_ja": "〈自〉《副詞を伴って》とどまる, いる / 《...に》滞在する, 泊まる 《at, in ...》 / じっとしている / 《~ ...（名, 形, 過分）》...のままでいる",
    "example_sentence": "I will stay here for the night.",
    "translated_sentence": "私は今夜ここに滞在する。"
  },
  {
    "entry": "stick",
    "meaning_ja": "〈他〉《...で》…を刺す, を突く 《with ...》 / 《...に》 を突き刺す 《in, through ...》 / 《AでBに》...を刺して留める 《~ ... on B with A》 /《のりなどで》《...に》...をはる, をくっつける《~ ... on ... with ...》 /  ...を動けなくする / 〈自〉《...に》突き刺さる《in ...》 / くっついて離れない",
    "example_sentence": "Stick a notice on the board.",
    "translated_sentence": "掲示板に注意事項を貼ります。"
  },
  {
    "entry": "stock",
    "meaning_ja": "〈C〉〈U〉(…の)在庫品,仕入れ品,ストック《+of+名》  / 〈C〉〈U〉(…の)貯蔵,蓄え《+of+名》  / 〈U〉《集合的に》家畜  / 〈U〉血統,家系,家柄  / 〈U〉〈C〉(動植物の)種属  / 〈U〉(スープ種・ソース種などに用いる)煮出し汁  / 〈U〉〈C〉《おもに米》(株式会社の)株,株式;〈C〉株券,《英》国債,地方債  / 〈U〉原料  / 〈C〉《複数形で》(刑罰用の昔の)さらし台  / 〈C〉(銃の)台じり  / 〈C〉(接ぎ木の)台木  / 〈C〉(接ぎ穂をとる)親株  / 〈C〉(植物の)幹,茎  / 〈C〉(錨(いかり)のリングの下の)横棒  / 〈C〉(劇場の)専属劇団[のレパートリー]",
    "example_sentence": "I need to check the stock before placing an order.",
    "translated_sentence": "注文をする前に在庫を確認する必要があります。"
  },
  {
    "entry": "storm",
    "meaning_ja": "あらし,暴風[雨],荒天  / (感情・言動などの)あらし,激発《+of+名》  / (一般に)激動,波乱,騒動  / (弾丸などが)雨あられと飛ぶこと《+of+名》  /",
    "example_sentence": "The storm was so powerful that it knocked down trees and caused power outages.",
    "translated_sentence": "あまりにも強力な嵐で、木々が倒れ、停電が発生しました。"
  },
  {
    "entry": "store",
    "meaning_ja": "店舗 / 貯蔵 / 格納 / 店",
    "example_sentence": "I need to go to the store to buy some groceries.",
    "translated_sentence": "私は食料品を買うために店に行く必要があります。"
  },
  {
    "entry": "storage",
    "meaning_ja": "〈U〉(倉庫などに)貯蔵すること, 保管 / 貯蔵所, 倉庫 / 保管料",
    "example_sentence": "The nethermost level of the building is used for storage.",
    "translated_sentence": "建物のいちばん下の階は倉庫として使用されています。"
  },
  {
    "entry": "stranger",
    "meaning_ja": "(…の)見知らぬ人《+to+名》  / よそから来た人,外部の人,新しく来た人;外国人  / (…に)経験のない人,慣れていない人《+to+名》",
    "example_sentence": "I was approached by a stranger on the street.",
    "translated_sentence": "私は見知らぬ人に道で声をかけられました。"
  },
  {
    "entry": "stretch",
    "meaning_ja": "〈手足・翼など〉‘を'いっぱいに伸ばす(広げる)《+out+名,+名+out》  / 〈手など〉‘を'差し出す《+out+名,+名+out》  / (一方から一方へ)〈なわなど)‘を'張る,渡す,<じゅうたんなど>‘を'敷く《+名+out, out+名》  / 〈神経など〉‘を'極度に緊張させる,ぎりぎりまで使う(働かせる)  / 〈意味・法律など〉‘を'拡大解釈する,誇張する  / (無理に)〈靴など〉‘を'広げる,長くする,引っ張る  / 〈訪問など〉‘を'引き延ばす,長びかせる  / 〈人が〉長々と横になる(寝べる)《+out》  / 〈人が〉手足をいっぱいに伸ばす《+out》  / 《副詞[句]を伴って》伸びている,広がっている",
    "example_sentence": "I like to stretch my arms and legs in the morning.",
    "translated_sentence": "朝になると、私は腕や足を伸ばすのが好きです。"
  },
  {
    "entry": "strengthen",
    "meaning_ja": "〈他〉を強くする / 〈自〉強くなる",
    "example_sentence": "Regular exercise can help strengthen your muscles.",
    "translated_sentence": "定期的な運動は筋肉を強化するのに役立ちます。"
  },
  {
    "entry": "subsequently",
    "meaning_ja": "【副】後で, 次に, 続いて / (前の記述を受けて)その後, 結果として",
    "example_sentence": "He finished his work and subsequently left the office.",
    "translated_sentence": "彼は仕事を終えて、後でオフィスを出た。"
  },
  {
    "entry": "stroke",
    "meaning_ja": "〈C〉(こぶし・武器・金づちなどの) 一打ち, 一撃 / 《鐘・時計などの》 打つ音 《of ...》 / (繰り返される動作・運動の) 一動作, 一工程 / (ペン・鉛筆・筆などの)筆の運び, 筆致",
    "example_sentence": "He suffered a stroke and was rushed to the hospital.",
    "translated_sentence": "彼は脳卒中を起こし、病院に急送されました。"
  },
  {
    "entry": "strong",
    "meaning_ja": "(身体的に)力の強い  / (身体が)じょうぶな,健康な  / 勢力(権力)のある,有力な  / (物が)がんじょうな,堅固な  / (精神的・道徳的に)強い  / 説得力のある,効果的な  / (味・においが)いやな,不快な  / (動きが)激しい,速い  / (程度が)強い,強烈な,濃い  / アルコール分の多い  / 《数詞の後に用いて》…の人員の  / 強く,強力に;激しく,盛んに",
    "example_sentence": "He is a strong man.",
    "translated_sentence": "彼は強い男だ。"
  },
  {
    "entry": "studio",
    "meaning_ja": "(画家・写真家などの)仕事場,アトリエ  / (音楽・ダンス・演技などの)練習場  / 《しばしば複数形で》映画撮影所,スタジオ  / (ラジオ・テレビの)放送室,放送スタジオ",
    "example_sentence": "She works in a small studio.",
    "translated_sentence": "彼女は小さなスタジオで働いています。"
  },
  {
    "entry": "stuff",
    "meaning_ja": "〈U〉材料 / 《話》 (ばく然と) 物 ／ 詰め込む",
    "example_sentence": "I have a lot of stuff in my room.",
    "translated_sentence": "私の部屋にはたくさんの物があります。"
  },
  {
    "entry": "substance",
    "meaning_ja": "〈U〉物質,物 / 〈U〉《the~》《…の》趣旨,本音《of ...》 / 〈U〉(スープなどの)濃さ,こく,中身[の詰まっていること] / 〈U〉実質,実 / 〈U〉《古》財産,資産",
    "example_sentence": "Water is a substance that is essential for life.",
    "translated_sentence": "水は生命にとって不可欠な物質です。"
  },
  {
    "entry": "sugar",
    "meaning_ja": "〈U〉砂糖 / 《話》(恋人に対して呼び掛けて)ねえ",
    "example_sentence": "I love the sweet taste of sugar.",
    "translated_sentence": "私は砂糖の甘い味が大好きです。"
  },
  {
    "entry": "sweep",
    "meaning_ja": "…‘を'掃く,掃除する  / (ほうきで掃くなどして)〈ごみなど〉‘を'取る,集める《away(up)+名》;(…から)…‘を'取る《+《away(up)+名+from(off)+名》  / (掃くように)…‘の'上をさっと通る,…‘を'さっとなでる(吹き抜ける);《副司句を伴って》…‘を'掃くように動かす  / …‘を'押し流す,吹き飛ばす《+along(away, off)+名》;(…から)…‘を'押し流す《+名+  / off(from)+名》  / 〈選挙など〉‘に'全面的に勝利をおさめる  / 掃く,掃除をする  / 《副詞[句]を伴って》(掃くように)さっと通る(動く)  / 《副詞[句]を伴って》〈山などが〉弓なりに伸びる",
    "example_sentence": "I need to sweep the floor before guests arrive.",
    "translated_sentence": "ゲストが到着する前に床を掃かなければなりません。"
  },
  {
    "entry": "swing",
    "meaning_ja": "揺り動かす,振り回す",
    "example_sentence": "She loves to swing on the playground.",
    "translated_sentence": "彼女は遊び場でブランコに乗るのが大好きです。"
  },
  {
    "entry": "tackle",
    "meaning_ja": "〈U〉(スポーツなどの) 道具 / 〈U〉〈C〉滑車装置 / 〈C〉(ラグビーの) タックル",
    "example_sentence": "Before the fishing trip, she carefully organized her tackle.",
    "translated_sentence": "釣り旅行の前に、彼女は釣り道具を丁寧に整理しました。"
  },
  {
    "entry": "tennis",
    "meaning_ja": "テニス,庭球",
    "example_sentence": "I enjoy playing tennis.",
    "translated_sentence": "私はテニスを楽しんでいます。"
  },
  {
    "entry": "territory",
    "meaning_ja": "〈C〉〈U〉(広い)地域,地方  / 〈C〉〈U〉(領海を含む)領土,領地  / 〈C〉〈U〉(セールスマン・代理店などの)受け持ち区域,担当区域;縄張り  / 〈C〉〈U〉(学問などの)領域,分野  / 〈C〉《T-》(アメリカ・カナダなどの)準州",
    "example_sentence": "The country expanded its territory through colonization.",
    "translated_sentence": "その国は植民地化によって領土を拡大した。"
  },
  {
    "entry": "thick",
    "meaning_ja": "厚い / 太い / 濃い / 密な",
    "example_sentence": "The thick book is difficult to carry.",
    "translated_sentence": "厚い本は持ち運びが難しい。"
  },
  {
    "entry": "think",
    "meaning_ja": "〈他〉を考える / ...と思う《~ that ...》 / ...を企てる / 〈自〉考える",
    "example_sentence": "I think the answer is correct.",
    "translated_sentence": "私は答えが正しいと思う。"
  },
  {
    "entry": "thirst",
    "meaning_ja": "〈U〉〈C〉のどの渇き / 《a ~》《…に対する》渇望, 熱望《for ...》",
    "example_sentence": "I quenched my thirst with a cold glass of water.",
    "translated_sentence": "私は冷たいグラスの水で喉の渇きを癒した。"
  },
  {
    "entry": "threat",
    "meaning_ja": "〈U〉〈C〉脅し,脅迫 /  〈C〉《...の》(悪い)きざし,前兆《of》 / 《...にとっての》危険なもの《to》",
    "example_sentence": "The police received a threat about a bomb in the building.",
    "translated_sentence": "警察は建物内に爆弾が仕掛けられているという脅迫を受けた。"
  },
  {
    "entry": "tie",
    "meaning_ja": "(縄・ひも・包帯などで…に)…を縛る,結わえる,縛り付ける《+名+up+(+up+名)+to+名+with+名》  / 〈ひも・ネクタイ・リボンなど〉‘を'結ぶ;〈衣類など〉‘の'ひもを結ぶ  / 〈結び目・ちょう結びなど〉‘を'結んで作る  / (仕事・時間・場所などに)〈人〉‘を'縛り付けたようにする,束縛する《+名+up(+up+名)+to(at)+名》  / (競技などで)〈相手・相手の得点・記録〉‘と'同じになる,タイになる  / 〈同じ高さの2音符〉‘を'タイ(連結線)で結ぶ  / 結べる,結び目を作る,縛られる  / (…と)同じになる《+with+名》",
    "example_sentence": "He tied the dog to a tree.",
    "translated_sentence": "彼は犬を木につないだ。"
  },
  {
    "entry": "till",
    "meaning_ja": "《継続を表す動詞と共に用いて》～までずっと / 《否定表現に続けて》…までは（...しない）",
    "example_sentence": "Wait till six.",
    "translated_sentence": "６時まで待ちなさい。"
  },
  {
    "entry": "tight",
    "meaning_ja": "きっちり締まった / すきまのない / ピンと張った / (衣服などが) きつい / (時間的・空間的に)余裕のない",
    "example_sentence": "The rope was tightened around the package, making it look very tight.",
    "translated_sentence": "ロープがパッケージの周りをしっかり締められていて、非常にきつく見えた。"
  },
  {
    "entry": "today",
    "meaning_ja": "きょう[は],本日[は]  / 現代では,今日では",
    "example_sentence": "I am meeting a friend for lunch today.",
    "translated_sentence": "今日、昼食に友達と会います。"
  },
  {
    "entry": "title",
    "meaning_ja": "〈C〉 《....の》 題名 《of, to ...》 / 肩書き / 〈U〉〈C〉(家屋・土地の) 所有権",
    "example_sentence": "The book's title is 'The Great Gatsby'.",
    "translated_sentence": "その本のタイトルは『グレート・ギャツビー』です。"
  },
  {
    "entry": "to",
    "meaning_ja": "《方向》...へ / 《適用範囲》...に対して / 《程度・範囲》...まで / 《比較・対比・割合》…と比べて / 《一致・適合》…に合わせて / 《目的・意図》…のために",
    "example_sentence": "I am going to the park.",
    "translated_sentence": "私は公園に行きます。"
  },
  {
    "entry": "toward",
    "meaning_ja": "《運動の方向》…のほうへ,に向かって  / 《位置の方向》…のほうに,に面して  / 《時間・数量の接近》…近く  / 《関係》…に対して  / 《目的・貢献》…のために  / まさに起ころうとして,間近に迫って  / 進行中で",
    "example_sentence": "I saw a man walking towards the railroad station.",
    "translated_sentence": "私は一人の男が駅に向かって歩いているのを見た。"
  },
  {
    "entry": "touch",
    "meaning_ja": "〈他〉〈人が〉(手・指などで)…をさわる / ...を感動させる / 《文》〈事が〉…に影響する",
    "example_sentence": "He touched me on the cheek.",
    "translated_sentence": "彼は私のほおに触った。"
  },
  {
    "entry": "town",
    "meaning_ja": "〈C〉町  / 《the~;一つの町を指して言うとき a~》(田舎と区別して)都会;都会生活  / 《冠詞をつけずに》都心,(商店の立ち並ぶ)下町  / 《冠詞をつけずに》(ある地域の)主要な町(市);(一国の)首都  / 《the~》《集合的に;単数扱い》町の人たち,町民",
    "example_sentence": "I went to the town yesterday.",
    "translated_sentence": "昨日町に行きました。"
  },
  {
    "entry": "trace",
    "meaning_ja": "〈U〉〈C〉跡, 形跡",
    "example_sentence": "Is there any trace of the missing child?",
    "translated_sentence": "行方不明の子供の足跡はありますか。"
  },
  {
    "entry": "trail",
    "meaning_ja": "〈他〉の後について行く / を追跡する / を引きずる / 〈自〉引きずる",
    "example_sentence": "The hunters trailed the deer over the mountain.",
    "translated_sentence": "狩猟者たちは山を越えてシカの跡を追った。"
  },
  {
    "entry": "trick",
    "meaning_ja": "〈C〉芸当 / たくらみ / いたずら",
    "example_sentence": "He played a trick on his friends during the party.",
    "translated_sentence": "彼はパーティー中に友達にいたずらをした。"
  },
  {
    "entry": "tree",
    "meaning_ja": "木,樹木;(潅木)(bush, shrub),低木に対し)喬木,高木  / (低木や草質植物でも形が高木に似ている)木;  / 木製具  / 枝分かれした図;系統図;(特に)家系図(family tree)",
    "example_sentence": "The tree was very tall.",
    "translated_sentence": "その木はとても高かった。"
  },
  {
    "entry": "trend",
    "meaning_ja": "(…に向かう)傾向,すう勢,流行《+toward+名》  / (川・道路などの)向き",
    "example_sentence": "The current trend in fashion is towards minimalism.",
    "translated_sentence": "現在のファッションの傾向はミニマリズムに向かっています。"
  },
  {
    "entry": "trouble",
    "meaning_ja": "〈U〉苦難, 悩み / 骨折り, めんどう / 〈C〉苦労の種, 心配事 / 〈C〉(政治的・社会的)紛争,騒動",
    "example_sentence": "I had trouble finding my keys this morning.",
    "translated_sentence": "今朝、鍵を見つけるのに苦労しました。"
  },
  {
    "entry": "truck",
    "meaning_ja": "〈C〉運搬車,トロッコ；トラック,貨物自動車",
    "example_sentence": "The truck was loaded with supplies.",
    "translated_sentence": "トラックには補給品が積まれていた。"
  },
  {
    "entry": "true",
    "meaning_ja": "ほんとうの,真実の  / 本物の,正真正銘の([[real]])  / 誠実な,忠実な,忠誠な([[faithful]])  / 心からの,うそ偽りのない  / 寸分違わない,正確に一致する,適合する  / 正当な,適正な,正しい([[proper]])  / 間違いない,確実な  / 〈機械・器具などが〉正確にできた,正しい位置にある / 〈声などが〉正しい調子の",
    "example_sentence": "This is a true story.",
    "translated_sentence": "これはほんとうの話です。"
  },
  {
    "entry": "turn",
    "meaning_ja": "…を回す,を回転させる / 〈角など〉を曲がる / …をひっくり返す / …の向きを変える / …を変化させる / (何かを軸・中心にして)回る,回転する / 《…に》進路を変える《to, toward ...》",
    "example_sentence": "Please turn off the lights before leaving.",
    "translated_sentence": "出る前に、電気を消してください。"
  },
  {
    "entry": "twenty",
    "meaning_ja": "〈C〉(数の)20;20の記号 / 〈U〉(24時間制の)20時,20分;20歳  / 〈U〉《複数扱い》20人,20個  / 〈C〉20(20人,20個)一組のもの  / 《the twenties》(世紀の)20年代;《one's twenties》(年齢の)20代  / 20の,20人の,20個の  / 《補語にのみ用いて》20歳の(で)",
    "example_sentence": "There are twenty students in the classroom.",
    "translated_sentence": "教室には20人の生徒がいます。"
  },
  {
    "entry": "two",
    "meaning_ja": "〈C〉(数の)2,2の記号  / 〈U〉2時,2分;2歳  / 《複数扱い》二人;2個  / 〈C〉二つ(二人,2個)1組のもの  / 〈C〉(カードゲーム)2の札,(さいころの)2の目  / 2の;二人の;二つの,2個の  / 《補語にのみ用いて》2歳の(で)",
    "example_sentence": "I have two cats.",
    "translated_sentence": "私は猫を2匹飼っています。"
  },
  {
    "entry": "twelve",
    "meaning_ja": "〈C〉(数の)12;12の記号(12,XIIなど) / 〈U〉12時,12分,12歳 / 《複数扱い》12人,12個 / 〈C〉12(12人,12個)一組のもの / 《the ~》(また[[Twelve Apostles]])キリストの12使徒 / 12の,12人の,12個の / 《補語にのみ用いて》12歳の(で)",
    "example_sentence": "There are twelve students in the classroom.",
    "translated_sentence": "教室には12人の生徒がいます。"
  },
  {
    "entry": "union",
    "meaning_ja": "〈U〉(…の,の間の)結合,合同,合併;調和,一致《+of(between)+名》  / 〈C〉結合したもの,結合体,統一組識  / 《the U-》アメリカ合衆国;(南北戦争時に)連邦政府側についた北部諸州  / 《the U-》英連合王国(1706年イングランドとスコットランドが合併)  / 〈C〉『労働組合同盟』,ユニオン  / 〈C〉〈U〉結婚[生活]  / 〈C〉連合旗章(米国国旗の白星;英国国旗の3本十字の三国連合旗章など)  / 〈C〉(機械の部品をくなぐ)接合管",
    "example_sentence": "The union negotiated a new contract for the workers.",
    "translated_sentence": "労働組合は労働者のために新しい契約を交渉しました。"
  },
  {
    "entry": "universal",
    "meaning_ja": "すべての人々の,万人共通の;全世界の  / 普遍的な,一般的な,全般的な",
    "example_sentence": "Education is a universal right.",
    "translated_sentence": "教育はすべての人々の権利です。"
  },
  {
    "entry": "van",
    "meaning_ja": "〈C〉有蓋トラック, (家具・商品・家畜などの運搬用に使われる)ほろつきトラック",
    "example_sentence": "I rented a van for our road trip.",
    "translated_sentence": "私は私たちのドライブ旅行のためにバンを借りました。"
  },
  {
    "entry": "up",
    "meaning_ja": "《上への動作》上へ,上のほうへ / 《上の位置》上に, 上のほうで / 起こして / (地図・紙面などの)上へ, 上に / (遠くから)近くへ,中心へ / (大きさ・量などが)上のほうへ / (話者,話題の場所へ)近づいて / 活動して / すっかり,完全に",
    "example_sentence": "She looked up at the sky.",
    "translated_sentence": "彼女は空を見上げた。"
  },
  {
    "entry": "various",
    "meaning_ja": "互いに異なる, いろいろな, さまざまな / 《名詞の前にのみ用いて》いくつかの",
    "example_sentence": "There are various options for entertainment in the city.",
    "translated_sentence": "市内にはさまざまな娯楽の選択肢がある。"
  },
  {
    "entry": "video",
    "meaning_ja": "〈U〉テレビの映像  / 〈C〉テレビ  / テレビ映像に関する  / ビデオテープの",
    "example_sentence": "I watched an interesting video last night.",
    "translated_sentence": "昨晩面白い動画を見ました。"
  },
  {
    "entry": "view",
    "meaning_ja": "〈U〉〈C〉《...を》見ること《of ...》 / 〈U〉《...の》視界《of ...》 / 《...の》ながめ《of ...》 / 〈C〉見方, 考え方",
    "example_sentence": "The view from the top of the mountain is breathtaking.",
    "translated_sentence": "山の頂上からの景色は息をのむようだ。"
  },
  {
    "entry": "voice",
    "meaning_ja": "〈U〉(人間の)声  / 〈U〉声を出す力,物を言う力  / 〈C〉〈U〉声の質,声の状態(調子)  / 〈C〉(人の声を思わせる)(…の)音《+of+名》  / 〈C〉(人の声にたとえた)(…の)音《+of+名》  / 〈U〉〈C〉発言権,選択権,投票権  / 〈U〉表現,表明;意見  / 〈C〉(声楽の)声  / 〈C〉(文法で)態  / 〈気持ちなど〉‘を'言い表す,口に出す  / 〈音〉‘を'有声音で発音する",
    "example_sentence": "Her voice is so beautiful.",
    "translated_sentence": "彼女の声はとても美しいです。"
  },
  {
    "entry": "walk",
    "meaning_ja": "歩くこと,歩行  / 散歩,遠足  / 歩行距離,道のり  / 歩道,散歩道,遊歩道  / (特徴をもった)湾き方,歩きぶり",
    "example_sentence": "I enjoy taking a walk in the park every morning.",
    "translated_sentence": "毎朝公園で散歩するのが楽しいです。"
  },
  {
    "entry": "wage",
    "meaning_ja": "〈C〉賃金 / (罪などの)報い /",
    "example_sentence": "The minimum wage in this country is $15 per hour.",
    "translated_sentence": "この国の最低賃金は時給15ドルです。"
  },
  {
    "entry": "water",
    "meaning_ja": "〈U〉水  / 《しばしば複数形で》海(湖,川)の水  / 《複数形で》流れる水;《海・川・湖などの》波立つ水《of ...》  / 《複数形で》(特定の)水域,領海,近海  / 〈U〉潮位,水位;《the》水面  / 〈U〉分泌液(涙・汗・尿など)  / 〈U〉溶液,…水  / 《複数形で》(飲用の)鉱泉水  / 〈U〉(織物・金属などの)波紋",
    "example_sentence": "I drank a glass of water.",
    "translated_sentence": "私はコップ一杯の水を飲みました。"
  },
  {
    "entry": "weather",
    "meaning_ja": "天気, 天候 / あらし, 悪天候 /",
    "example_sentence": "The weather today is sunny.",
    "translated_sentence": "今日の天気は晴れです。"
  },
  {
    "entry": "weight",
    "meaning_ja": "〈U〉重さ,重量,目方;体重;《a weight》(…の)重さ《+of+名》  / 〈U〉重さ(重力が物体に及ぼす力)  / 〈U〉衡法(重量を示す体係)  / 〈C〉重量単位  / 〈C〉(はかりの)おもり,分銅;(一般に)重いもの,おもし  / 〈U〉重要性,価値  / 〈U〉《しばしば a weight》精神的な重荷,負担  / (…で)…‘に'重荷を負わせる;…‘を'圧迫する;苦しめる《+名+with+名》  / …‘を'重くする",
    "example_sentence": "I can't believe how much weight I've gained.",
    "translated_sentence": "こんなに体重が増えたなんて信じられない。"
  },
  {
    "entry": "wealthy",
    "meaning_ja": "(人が)富裕な, 裕福な / 豊富に持っている / 《...に》富んだ《in ...》",
    "example_sentence": "She comes from a wealthy family.",
    "translated_sentence": "彼女は裕福な家庭の出身です。"
  },
  {
    "entry": "where",
    "meaning_ja": "《疑問副詞》どこに(で,へ),どういう状態に,どんな点で  / 《関係副詞》  / 《制限用法》(…する,した)ところの  / 《非制限用法》そしてそこで,するとその点で  / 《先行詞を含んで》…する(…である)ところ",
    "example_sentence": "Where did you go?",
    "translated_sentence": "どこに行ったの？"
  },
  {
    "entry": "whatever",
    "meaning_ja": "...するものは何でも / いかに…でも / 《驚きを表して》いったい何が / 《話・単体で》なんでも構わない, どうでもいいよ",
    "example_sentence": "You can do whatever you want.",
    "translated_sentence": "好きなことを何でもできます。"
  },
  {
    "entry": "whether",
    "meaning_ja": "《名詞節(句)を導いて》...かどうか / ...かそれとも...か / 《~ …or…の形で,譲歩の副詞節(句)を導いて》…であろうと…であろうと",
    "example_sentence": "I don't know whether he will come to the party or not.",
    "translated_sentence": "彼がパーティーに来るかどうかわからない。"
  },
  {
    "entry": "whom",
    "meaning_ja": "《疑問代名詞》だれを(に),どんな人を(に)  / 《関係代名詞》  / 《制限用法》(…する,…した)ところの  / 《非制限用法》そしてその人を(に)",
    "example_sentence": "To whom did you give the book?",
    "translated_sentence": "あなたは誰にその本をあげましたか？"
  },
  {
    "entry": "widely",
    "meaning_ja": "広く；広範囲に；大いに",
    "example_sentence": "The internet is widely used for communication and research.",
    "translated_sentence": "インターネットはコミュニケーションや研究に広く利用されています。"
  },
  {
    "entry": "wild",
    "meaning_ja": "(植物・果実・はちみつなどが)野生の  / (鳥獣などが)野生の,飼い慣らされていない  / (人・気性などが)乱暴な,無法な,手に負えない  / 《おもに補語に用いて》気違いじみた,熱狂的な,ひどく興奮した  / 《補語にのみ用いて》熱望して;夢中になって  / (天候・海・時勢などが)荒れた,激しい  / (人・種族などが)未開の  / (土地などが)自然のままの,荒涼とした  / (計画などが)とっぴな,でたらめな  / 的はずれの,見当違いの  / 乱れた,だらしない  / 《話》よい,愉快な  / 乱暴に,やたらに;でたらめに  / 荒野,荒れ地,大自然のままの状態",
    "example_sentence": "I love picking wild berries in the forest.",
    "translated_sentence": "私は森で野生のベリーを摘むのが大好きです。"
  },
  {
    "entry": "will",
    "meaning_ja": "《単純未来》…だろう, ...する予定である / 《疑問文で》…だろうか / 《~ be 現在形》…しているだろう, …することになるだろう, 《~ have 過去分詞》…してしまっているだろう / 《意志未来》…するつもりである, ...しよう,  《穏やかな命令》...しなさい, 《依頼・勧誘》…してくれませんか / 《主語の強い意志・固執》どうしても…しようとする / 《習慣》よく…する / 《習性・傾向》…するものである / 《無生物主語を伴って》《可能・能力》できる",
    "example_sentence": "I will go to the party tomorrow.",
    "translated_sentence": "明日、私はパーティーに行くだろう。"
  },
  {
    "entry": "wind",
    "meaning_ja": "〈自〉〈川・道路などが〉曲がりくねる,曲がる / 〈ツタなどが〉巻きつく,絡みつく / 〈時計などが〉巻かれる / 〈他〉〈糸・ひもなど〉を巻く《up》 / 《…を》…に巻きつける《with ...》",
    "example_sentence": "The path winds through the forest.",
    "translated_sentence": "道は森を曲がりくねって進む。"
  },
  {
    "entry": "woman",
    "meaning_ja": "〈C〉(成人した)女,女性,婦人  / 〈U〉《冠詞をつけずに》女性[全体],女  / 〈C〉《the womanhood》女らしさ,女性特有の感情(性格,言葉づかいなど)  / 〈C〉(主婦の代りに)家事をする女性,お手伝いさん;(女王に仕える)侍女,女官  / 〈C〉《修飾語[句]を伴って》妻,恋人,愛人",
    "example_sentence": "The woman was walking along the street.",
    "translated_sentence": "女性が道路を歩いていた。"
  },
  {
    "entry": "wish",
    "meaning_ja": "〈C〉〈U〉願い / 〈C〉祈願 / 望みの物",
    "example_sentence": "I have a wish to travel around the world.",
    "translated_sentence": "私は世界を旅するという願望があります。"
  },
  {
    "entry": "wonderful",
    "meaning_ja": "驚くべき,不思議な;すばらしい,すてきな",
    "example_sentence": "It's a wonderful day.",
    "translated_sentence": "今日はとても素晴らしい日です。"
  },
  {
    "entry": "wood",
    "meaning_ja": "〈U〉木材,(材料としての)木；薪〈C〉森；林",
    "example_sentence": "The table is made of wood.",
    "translated_sentence": "そのテーブルは木でできています。"
  },
  {
    "entry": "word",
    "meaning_ja": "〈C〉語,単語  / 《しばしば複数形で》(表現された)言葉;(自分の考えに基く)言葉  / 〈C〉《しばしば複数形で》短い会話,ひと言  / 《単数形で;one's word》約束,保証  / 〈U〉《冠詞をつけずに》知らせ,伝言  / 《the word》合い言葉  / 〈C〉《the word, one's》命令,指図  / 《複数形で》口論,論争  / 《the Word》聖書,(聖書に書かれた)神の言葉  /",
    "example_sentence": "The word 'love' has a powerful meaning.",
    "translated_sentence": "「愛」という言葉には強い意味がある。"
  },
  {
    "entry": "work",
    "meaning_ja": "〈U〉(一般的な)『仕事』,労働;努力,勉強 / 〈U〉(実際にやっている具体的な)『作業』, 仕事 /  〈U〉《定冠詞なしで》『仕事の口』,職業,(工場・会社などの)勤め先 / 〈C〉《しばしば複数形で》(文学・芸術の)作品,著作,(ある人の)作品 / 《複数形で》《単数・複数扱い》《しばしば複合語を作って》工場",
    "example_sentence": "I have a lot of work to do today.",
    "translated_sentence": "今日はたくさんの仕事があります。"
  },
  {
    "entry": "yourself",
    "meaning_ja": "《強意用法》《you と同格に用いて》あなた自身,ご自身  / 《再帰用法》《動詞・前置詞の目的語として》あなた自身を(に),自分を(に)",
    "example_sentence": "Take care of yourself.",
    "translated_sentence": "ご自分のことを大切にしてください。"
  },
  {
    "entry": "anymore",
    "meaning_ja": "もはや；これ以上；さらに（…ない、しない） / 《非標準・肯定文・文尾・文頭で》近ごろ, 最近は",
    "example_sentence": "I don't enjoy playing video games anymore.",
    "translated_sentence": "もはやビデオゲームを楽しむことはありません。"
  },
  {
    "entry": "eventually",
    "meaning_ja": "結局,ついに；最後には,ゆくゆくは",
    "example_sentence": "I know it's tough, but eventually you'll succeed.",
    "translated_sentence": "難しいことだとは思うだけど、ゆくゆくは成功するよ。"
  },
  {
    "entry": "listener",
    "meaning_ja": "耳を傾ける人,聞き手;(ラジオ)聴取者",
    "example_sentence": "She is a good listener and always lends an ear when someone needs to talk.",
    "translated_sentence": "彼女は良い聞き手で、誰かが話したいときはいつも耳を傾けてくれます。"
  },
  {
    "entry": "versus",
    "meaning_ja": "(訴訟・競技などで)…対(《略》v.,vs.)(against)  / (比較や二者択一において)…に対して",
    "example_sentence": "The match ended with a score of 3 versus 2.",
    "translated_sentence": "試合は3対2で終わった。"
  },
  {
    "entry": "qualification",
    "meaning_ja": "〈U〉資格を与えること,資格があること,〈U〉資格,能力;《複数形で》免許状,資格証明書  / 〈U〉〈C〉制限;条件;修正",
    "example_sentence": "She has the necessary qualification for the job.",
    "translated_sentence": "彼女はその仕事に必要な資格を持っています。"
  },
  {
    "entry": "clause",
    "meaning_ja": "〈C〉(文法で) 節 / (条約・法律などの)箇条,条項",
    "example_sentence": "This clause states that all employees must wear a uniform.",
    "translated_sentence": "この条項には、全ての従業員は制服を着用しなければならないと記載されています。"
  },
  {
    "entry": "approval",
    "meaning_ja": "〈U〉《...に対する》 賛成, 是認, 承認 《to ...》",
    "example_sentence": "Her approval meant a lot to me.",
    "translated_sentence": "彼女の承認は私にとって非常に大きな意味があった"
  },
  {
    "entry": "extraordinary",
    "meaning_ja": "並はずれた / 異常な / 《名詞の前にのみ用いて》特別の, 臨時の",
    "example_sentence": "She has an extraordinary talent for singing.",
    "translated_sentence": "彼女は歌う才能が並はずれている。"
  },
  {
    "entry": "false",
    "meaning_ja": "正しくない, 誤った / 本物でない, 作りものの",
    "example_sentence": "She gave a false name to the police.",
    "translated_sentence": "彼女は警察に偽名を伝えた。"
  },
  {
    "entry": "frequent",
    "meaning_ja": "しばしば起こる, 頻繁な / 常習的な",
    "example_sentence": "I have frequent headaches.",
    "translated_sentence": "私は頭痛がよく起こります。"
  },
  {
    "entry": "improvement",
    "meaning_ja": "〈C〉《...の》 改良, 改善, 進歩, 上達 《of ...》 / 〈C〉改良点, 改善点",
    "example_sentence": "Continuous improvement is essential for personal growth.",
    "translated_sentence": "個人の成長には継続的な改善が不可欠です。"
  },
  {
    "entry": "injure",
    "meaning_ja": "...を傷つける, ...に損害を与える / (感情・名声など) を傷つける, 害する",
    "example_sentence": "He accidentally injured his hand while chopping vegetables.",
    "translated_sentence": "彼は野菜を切っている最中に手を誤って傷つけました。"
  },
  {
    "entry": "insist",
    "meaning_ja": "...と強く要求する / ...と主張する / 強く要求する / 《...を》 主張する 《on ...》",
    "example_sentence": "She insisted on helping me.",
    "translated_sentence": "彼女は私を助けようと強く主張した。"
  },
  {
    "entry": "rely",
    "meaning_ja": "《...を》 頼りにする, 信頼する, あてにする 《on ...》",
    "example_sentence": "I rely on my friends for support.",
    "translated_sentence": "私は友達に支えてもらっています。"
  },
  {
    "entry": "remarkable",
    "meaning_ja": "注目すべき,目につく / 並々ならぬ, 非凡な",
    "example_sentence": "The remarkable achievement of the team impressed everyone.",
    "translated_sentence": "チームの注目すべき成果は、みんなを感動させました。"
  },
  {
    "entry": "servant",
    "meaning_ja": "〈C〉(家事をする) 召使,使用人  / 公務員,官吏,役人  /  《…に》 仕える者,《…の》 下僕(しもべ) 《of ...》",
    "example_sentence": "The servant brought the tray of food to the table.",
    "translated_sentence": "使用人が食べ物のトレイをテーブルに運んだ。"
  },
  {
    "entry": "detail",
    "meaning_ja": "〈U〉〈C〉(全体の中の個々の) 細部, 細目 / 《複数形で》 詳細 /",
    "example_sentence": "Can you provide more detail about the project?",
    "translated_sentence": "プロジェクトの詳細を提供していただけますか？"
  },
  {
    "entry": "embarrass",
    "meaning_ja": "に恥ずかしい思いをさせる / を困惑させる / を邪魔をする / (人・会社など)を財政困難にする",
    "example_sentence": "I don't want to embarrass him in front of everyone.",
    "translated_sentence": "私は彼をみんなの前で恥ずかしい思いをさせたくない。"
  },
  {
    "entry": "fellow",
    "meaning_ja": "〈C〉《話》 男, やつ / 《話》 (一般に) 人 / 仲間, 同僚 / (学会などの)会員",
    "example_sentence": "I met a fellow traveler at the airport.",
    "translated_sentence": "私は空港で仲間の旅行者に出会いました。"
  },
  {
    "entry": "genetic",
    "meaning_ja": "遺伝学の / 遺伝子の / 起源の",
    "example_sentence": "The genetic makeup of an individual plays a vital role in determining their susceptibility to certain diseases.",
    "translated_sentence": "遺伝子の構成は、特定の病気にかかりやすいかどうかを決定するのに重要な役割を果たします。"
  },
  {
    "entry": "representation",
    "meaning_ja": "〈U〉《...を》 表現すること《of ...》 / 《...が》 表現されていること 《of ...》 / (立法府などの)代表制 / 代表団 / 〈C〉申し立て",
    "example_sentence": "Art is a powerful representation of human emotions.",
    "translated_sentence": "芸術は人間の感情の力強い表現です。"
  },
  {
    "entry": "react",
    "meaning_ja": "(刺激などに)反応する《+to+名》  / (…に)反対する,反抗する《+against+名》  / (…に)影響を与える;(作用するものに)反作用する,はね返る《+on(upon)+名》  / (…と)化学反応を起こす《+with+名》",
    "example_sentence": "I react quickly to stressful situations.",
    "translated_sentence": "私はストレスのある状況に素早く反応します。"
  },
  {
    "entry": "reputation",
    "meaning_ja": "〈C〉(人・物の) 評判,世評  / 名声",
    "example_sentence": "He has a great reputation in the business world.",
    "translated_sentence": "彼はビジネス界で素晴らしい評判を持っています。"
  },
  {
    "entry": "preserve",
    "meaning_ja": "〈他〉《文》 《...から》…を守る,を保護する 《from ...》 / を維持する, を保持する / (食物)を保存する",
    "example_sentence": "It is important to preserve our natural resources for future generations.",
    "translated_sentence": "将来の世代のために自然資源を保護することが重要です。"
  },
  {
    "entry": "quantity",
    "meaning_ja": "〈U〉量 / 〈C〉《...の》量,数,額,高 《of ...》 / 〈C〉多量,多数 / 〈C〉(数学で)量,数量",
    "example_sentence": "She bought a large quantity of apples from the grocery store.",
    "translated_sentence": "彼女はスーパーマーケットで大量のリンゴを買いました。"
  },
  {
    "entry": "spend",
    "meaning_ja": "消費する、（時を）過ごす",
    "example_sentence": "I spent all my money.",
    "translated_sentence": "私は全てのお金を使い切った。"
  },
  {
    "entry": "occur",
    "meaning_ja": "(異状な事が) 起こる / (考えが) 浮かぶ / 在存する,見いだされる",
    "example_sentence": "Unexpected events occur from time to time.",
    "translated_sentence": "予期せぬ出来事が時折起こります。"
  },
  {
    "entry": "spare",
    "meaning_ja": "予備の, (時間・金が)余分の",
    "example_sentence": "I always keep a spare set of keys in case I lose mine.",
    "translated_sentence": "私はいつも予備の鍵を持っています。万が一自分の鍵を失くした場合のために。"
  },
  {
    "entry": "ratio",
    "meaning_ja": "〈C〉比, 比率, 割合 / 比例",
    "example_sentence": "The ratio of boys to girls in the class is 2:3.",
    "translated_sentence": "クラスの男子と女子の比率は2：3です。"
  },
  {
    "entry": "influence",
    "meaning_ja": "影響",
    "example_sentence": "He has influence in politics.",
    "translated_sentence": "彼は政治に影響力を持っている。"
  },
  {
    "entry": "comfort",
    "meaning_ja": "〈U〉慰め / 〈C〉慰めを与えるもの / 〈U〉快適さ, 安楽",
    "example_sentence": "I love the comfort of my cozy bed.",
    "translated_sentence": "私は居心地の良いベッドが大好きです。"
  },
  {
    "entry": "detect",
    "meaning_ja": "(物事の存在) を感知する,気付く, 検出する / (人)の正体を見破る / (電波)を復調する",
    "example_sentence": "The security system can detect any unauthorized access.",
    "translated_sentence": "セキュリティシステムは不正なアクセスを検出することができます。"
  },
  {
    "entry": "beauty",
    "meaning_ja": "美しさ,　美,　美人、利点、長所",
    "example_sentence": "The beauty of the sunset was breathtaking.",
    "translated_sentence": "夕日の美しさは息をのむほどだった。"
  },
  {
    "entry": "gather",
    "meaning_ja": "〈他〉を集める / 〈自〉集める",
    "example_sentence": "We gather every Sunday for a family dinner.",
    "translated_sentence": "私たちは毎週日曜日に家族の夕食のために集まります。"
  },
  {
    "entry": "several",
    "meaning_ja": "いくつかの / 《文》《しばしばone's~》それぞれの /",
    "example_sentence": "There are several books on the shelf.",
    "translated_sentence": "本棚にはいくつかの本があります。"
  },
  {
    "entry": "still",
    "meaning_ja": "まだ / それでも / なおさら",
    "example_sentence": "Despite the setbacks, he is still determined to achieve his goal.",
    "translated_sentence": "逆境にもかかわらず、彼はそれでもなお彼の目標を達成することを決意しています。"
  },
  {
    "entry": "collect",
    "meaning_ja": "〈他〉(趣味として) ...を集める / （税金・代金など）...を徴集する / 〈自〉集まる, 積もる / 集金する",
    "example_sentence": "I collected all the materials necessary for the experiment.",
    "translated_sentence": "私は実験に必要な資料を全て集めました。"
  },
  {
    "entry": "exclude",
    "meaning_ja": "《...から》 ...を除外する 《from ...》 / (可能性・疑いの余地など) を全く許さない",
    "example_sentence": "You should exclude that option from the list.",
    "translated_sentence": "リストからそのオプションを除外するべきです。"
  },
  {
    "entry": "underlie",
    "meaning_ja": "...の下に横たわる / の基礎となる, の根底にある, の根拠になる,",
    "example_sentence": "The principles of physics underlie all natural phenomena.",
    "translated_sentence": "物理学の原理はすべての自然現象の下に横たわっています。"
  },
  {
    "entry": "foundation",
    "meaning_ja": "〈U〉《...を》 設立すること, 《...の》 創立 《of ...》 / 〈U〉〈C〉《...の》 土台, 基礎 《of ...》 / 《...の》 根拠 《of ...》  / 〈C〉施設, 財団協会",
    "example_sentence": "The foundation of the company was laid in 1995.",
    "translated_sentence": "会社の設立は1995年に行われました。"
  },
  {
    "entry": "seek",
    "meaning_ja": "...を探し求める / 《~ to do》 ...しようと努力する / 《...を》 捜す, 求める 《for, after ...》",
    "example_sentence": "I seek knowledge and wisdom.",
    "translated_sentence": "私は知識と知恵を探し求める。"
  },
  {
    "entry": "rise",
    "meaning_ja": "〈自〉立ち上がる《up》 / 起床する / (上から下へ) 上がる",
    "example_sentence": "The sun will rise tomorrow morning.",
    "translated_sentence": "明日の朝、太陽が昇るでしょう。"
  },
  {
    "entry": "valuable",
    "meaning_ja": "(金銭的に) 価値のある, 高価な / 役に立つ,有益な,貴重な",
    "example_sentence": "During my time there I had many valuable experiences.",
    "translated_sentence": "たくさんの貴重な経験をさせていただきました。"
  },
  {
    "entry": "determination",
    "meaning_ja": "〈U〉決心 / 《...の》 決定 《of ...》 / 〈C〉《...の》 判決, 裁決 《of ...》 / 〈U〉《...の》 測定 《of ...》",
    "example_sentence": "She showed great determination in achieving her goals.",
    "translated_sentence": "彼女は目標達成において大きな決心を示しました。"
  },
  {
    "entry": "object",
    "meaning_ja": "〈C〉物体,個体 / 対象, 目的",
    "example_sentence": "I found a beautiful object at the antique shop.",
    "translated_sentence": "私は骨董品店で美しい物を見つけました。"
  },
  {
    "entry": "academic",
    "meaning_ja": "学園の, 大学の / (職業教育に対して)純粋学問の / 理論的な, 非実際的な",
    "example_sentence": "The academic atmosphere in this university is very stimulating.",
    "translated_sentence": "この大学の校風はとても刺激的です。"
  },
  {
    "entry": "composition",
    "meaning_ja": "〈U〉創作, 作文, 作曲 / 《混合物などの》 成分 《of ...》 / 〈C〉混合物, 合成物",
    "example_sentence": "She enjoys composition and spends hours writing songs.",
    "translated_sentence": "彼女は作曲が好きで、曲を書くのに何時間も費やします。"
  },
  {
    "entry": "isolate",
    "meaning_ja": "《...から》 ...を孤立させる, ...を分離させる, ...を隔離する 《from ...》",
    "example_sentence": "The government decided to isolate the infected patients to prevent the spread of the virus.",
    "translated_sentence": "政府はウイルスの拡散を防ぐために、感染者を孤立させることを決定しました。"
  },
  {
    "entry": "lend",
    "meaning_ja": "(金) を貸す / 《...に》 (援助) を与える 《to ...》 / 金を貸す, 融資する",
    "example_sentence": "Can you lend me a pencil?",
    "translated_sentence": "鉛筆を貸してもらえますか？"
  },
  {
    "entry": "sink",
    "meaning_ja": "沈む",
    "example_sentence": "The ship began to sink in the storm.",
    "translated_sentence": NaN
  },
  {
    "entry": "tension",
    "meaning_ja": "〈U〉ピンと張ること / (精神的な) 緊張  / 〈C〉緊張状態",
    "example_sentence": "The tension in the room was palpable.",
    "translated_sentence": "部屋の緊張感が手に取るように感じられた。"
  },
  {
    "entry": "neglect",
    "meaning_ja": "〈他〉を無視する / (不注意で) ...を怠る",
    "example_sentence": "She neglects her responsibilities at work.",
    "translated_sentence": "彼女は仕事の責任を怠っています。"
  },
  {
    "entry": "interpret",
    "meaning_ja": "...を解釈する / を通訳する / 通訳する",
    "example_sentence": "She can interpret languages fluently.",
    "translated_sentence": "彼女は言語を流暢に通訳できます。"
  },
  {
    "entry": "parallel",
    "meaning_ja": "【形】平行な / 対応する, 同様な / 【名/C】平行線 / 【動/他】...に並行している / 《...で》 ...と対応している, に匹敵する 《in ...》",
    "example_sentence": "The two lines are parallel to each other.",
    "translated_sentence": "二つの線は互いに平行です。"
  },
  {
    "entry": "retain",
    "meaning_ja": "を持ち続ける, を保持する / を記憶にとどめる, を覚えている / (報酬を払って)...を抱えておく",
    "example_sentence": "It is important to retain good employees in a company.",
    "translated_sentence": "会社で優秀な社員を維持することは重要です。"
  },
  {
    "entry": "stem",
    "meaning_ja": "〈C〉(草の)茎,(木の)幹 / 茎状のもの / 支柱 / (杯・グラスの) 脚",
    "example_sentence": "She used a stem to hold the flower.",
    "translated_sentence": "彼女は茎を使って花を持ちました。"
  },
  {
    "entry": "succeed",
    "meaning_ja": "(計画などが) 成功する,うまくいく / (人が) 《...に》 成功する, 合格する 《in ...》 / 《...を》 継承する 《to ...》 / 後に来る / ...の後任になる / ...に続く",
    "example_sentence": "She worked hard and finally succeeded in her business venture.",
    "translated_sentence": "彼女は懸命に働き、ついに事業で成功した。"
  },
  {
    "entry": "temperature",
    "meaning_ja": "〈C/U〉温度, 気温 / (人・動物の) 体温",
    "example_sentence": "The temperature outside is very hot.",
    "translated_sentence": "外の気温はとても高いです。"
  },
  {
    "entry": "ban",
    "meaning_ja": "〈C〉(法による)《…に対する》 禁止 《on ...》",
    "example_sentence": "The government issued a ban on smoking in public places.",
    "translated_sentence": "政府は公共の場所での喫煙を禁止する命令を出しました。"
  },
  {
    "entry": "efficiency",
    "meaning_ja": "〈U〉能率,(仕事をする) 能力 /  (機械の) 効率",
    "example_sentence": "Improving efficiency is crucial for success in any business.",
    "translated_sentence": "どんなビジネスでも、効率を向上させることは成功に不可欠です。"
  },
  {
    "entry": "incident",
    "meaning_ja": "〈C〉出来事, 事件, 騒ぎ",
    "example_sentence": "There was a serious incident at the factory yesterday.",
    "translated_sentence": "昨日、工場で重大な事件がありました。"
  },
  {
    "entry": "adapt",
    "meaning_ja": "《...に》 ...を適応させる 《to ...》 / 《...向きに》 ...を脚色する 《for ...》 / 《...に》 適応する, 順応する 《to ...》",
    "example_sentence": "We need to adapt our strategies to the changing market conditions.",
    "translated_sentence": "私たちは、変化する市場状況に対応するために、戦略を適応させる必要があります。"
  },
  {
    "entry": "actually",
    "meaning_ja": "(まさかと思うだろうが) 実際に, 実は / 本当に, マジで / 意外と / やっぱり / 驚くことに",
    "example_sentence": "Actually, I have never been to Paris.",
    "translated_sentence": "実際に、私はパリに行ったことがありません。"
  },
  {
    "entry": "agreement",
    "meaning_ja": "〈U〉《…についての》 一致,調和,同意 《on, about, with ...》 / 〈C〉(2者以上の間で結ばれた) 協定,協約",
    "example_sentence": "They reached an agreement on the terms of the contract.",
    "translated_sentence": "彼らは契約条件に合意しました。"
  },
  {
    "entry": "assessment",
    "meaning_ja": "〈U〉評価, 査定 / (環境などの)状況判定 / 〈C〉評価額, 課税額",
    "example_sentence": "After completing the project, the team gathered to discuss the results and conduct a thorough assessment of their performance.",
    "translated_sentence": "プロジェクトの完了後、チームは結果について話し合い、パフォーマンスの徹底的な評価を行うために集まりました。"
  },
  {
    "entry": "attractive",
    "meaning_ja": "魅力のある, 魅力的な / 引力のある",
    "example_sentence": "She has an attractive personality that everyone loves.",
    "translated_sentence": "彼女は誰もが愛する魅力的な性格を持っています。"
  },
  {
    "entry": "breed",
    "meaning_ja": "動物が子を生む, 繁殖する / (家畜) を飼育する, (植物) を育てる / を生む, を生じさせる",
    "example_sentence": "She decided to breed her dog with a poodle.",
    "translated_sentence": "彼女は自分の犬をプードルと交配することに決めました。"
  },
  {
    "entry": "claim",
    "meaning_ja": "〈C〉《...に対する》 要求, 請求 《for, to ...》 / 〈C〉主張,断言,公言  / 〈U〉(物事を)要求する権利(資格),請求権",
    "example_sentence": "She filed a claim with her insurance company after the accident.",
    "translated_sentence": "彼女は事故後、保険会社に請求を提出しました。"
  },
  {
    "entry": "constraint",
    "meaning_ja": "〈U/C〉《...の》 強制, 無理強い《on ...》 / 《自由などの》 制限, 束縛 《on ...》 / 〈U〉窮屈, 気兼ね, 圧迫感",
    "example_sentence": "The constraint of time prevented us from completing the project.",
    "translated_sentence": "時間の制約があって、私たちはプロジェクトを完了することができませんでした。"
  },
  {
    "entry": "consist",
    "meaning_ja": "《~ of ...》《...から》成る, 《...で》成り立っている, 構成される / 《~ in ...》《...に》含まれている / 《~ with ...》《...と》一致する",
    "example_sentence": "The team will consist of five members.",
    "translated_sentence": "チームは5人のメンバーで成り立つ。"
  },
  {
    "entry": "decline",
    "meaning_ja": "減少する / 断る / 衰退する / 下落する",
    "example_sentence": "The number of students in the school has been declining for the past few years.",
    "translated_sentence": "学校の生徒数は過去数年間減少しています。"
  },
  {
    "entry": "largely",
    "meaning_ja": "主として, 大部分は / 多量に,豊富に,気前よく",
    "example_sentence": "She is largely responsible for the success of the project.",
    "translated_sentence": "彼女はそのプロジェクトの成功において大きな責任を担っている。"
  },
  {
    "entry": "probability",
    "meaning_ja": "〈U〉ありそうなこと, 起こりそうなこと / 〈C〉起こりそうな事件, 起こりそうな結果 / 〈U〉(数学で) 確率 / (哲学で) 蓋然性",
    "example_sentence": "The probability of winning the lottery is very low.",
    "translated_sentence": "宝くじに当選する確率は非常に低いです。"
  },
  {
    "entry": "unit",
    "meaning_ja": "〈C〉構成単位 / (学習の) 単元 / (測定基準としての) 単位",
    "example_sentence": "I need to convert the measurements from pounds to kilograms.",
    "translated_sentence": "ポンドからキログラムへの単位変換が必要です。"
  },
  {
    "entry": "supplier",
    "meaning_ja": "(特に物資の)供給者,補充者",
    "example_sentence": "The supplier delivered the goods on time.",
    "translated_sentence": "供給者は物資を時間通りに配達しました。"
  },
  {
    "entry": "term",
    "meaning_ja": "用語 / 期間 関係、間柄",
    "example_sentence": "This is a term used in biology.",
    "translated_sentence": "これは生物学で使われる用語です。"
  },
  {
    "entry": "reaction",
    "meaning_ja": "〈U〉〈C〉《...に対する》 反応 《to ...》 / 〈U〉《…に対する》(政治的・社会的な) 反動 ,逆コース 《against ...》 / 〈U〉〈C〉化学反応,化学変化；反作用",
    "example_sentence": "His reaction to the news was surprising.",
    "translated_sentence": "彼の反応は驚くべきものだった。"
  },
  {
    "entry": "propose",
    "meaning_ja": "を提案する / を計画する / 《...に》 結婚を申し出る 《to ...》",
    "example_sentence": "I propose a new idea for the project.",
    "translated_sentence": "私はプロジェクトに新しいアイデアを提案します。"
  },
  {
    "entry": "loose",
    "meaning_ja": "結んでいない / 解き放たれた / ゆるい / 散漫な",
    "example_sentence": "She's wearing a loose coat.",
    "translated_sentence": "彼女はだぶだぶの上着を着ている。"
  },
  {
    "entry": "news",
    "meaning_ja": "(新しい)報道,記事;(一般的に)知らせ,たより)  / (耳新しい)事件,でき事  / 《N-》(新聞名として)…新聞",
    "example_sentence": "I read the news every day.",
    "translated_sentence": "毎日ニュースを読んでいます。"
  },
  {
    "entry": "solution",
    "meaning_ja": "〈U〉《...を》解くこと, 解決策《of, for, to ...》 / 〈C〉《...の》解答, 説明《of, to, for ...》 / 〈C/U〉溶液 / 【名/U】溶解",
    "example_sentence": "Finding a solution to this problem is crucial.",
    "translated_sentence": "この問題の解決策を見つけることは重要です。"
  },
  {
    "entry": "recognize",
    "meaning_ja": "〈他〉(それに間違いないと)…を確かに認める / 《...などで》…を見分ける, を認識する《from, by ...》 / (すでに得ている経験・知識などによって)…を認める, を理解する",
    "example_sentence": "The team is nationally recognized for their achievements.",
    "translated_sentence": "そのチームは国家的にその成果が認められている。"
  },
  {
    "entry": "improve",
    "meaning_ja": "〈他〉...をもっと良くする, を改善する / (時間・機会など) を利用する / 〈自〉 《...の点で》 よくなる, 上達する 《in ...》",
    "example_sentence": "Regular exercise can improve your overall health and well-being.",
    "translated_sentence": "定期的な運動はあなたの全体的な健康と幸福感を向上させることができます。"
  },
  {
    "entry": "stream",
    "meaning_ja": "〈C〉小川 / 《気体・液体の》 流れ 《of ...》",
    "example_sentence": "They swam against the stream.",
    "translated_sentence": "彼らは流れに逆らって泳いだ。"
  },
  {
    "entry": "labor",
    "meaning_ja": "〈U〉労働 / 労働者 / 〈C〉(個々の骨の性れる) 仕事",
    "example_sentence": "Labor unions play an important role in protecting workers' rights.",
    "translated_sentence": "労働組合は労働者の権利を守る重要な役割を果たしています。"
  },
  {
    "entry": "distribute",
    "meaning_ja": "《...に》 ...を分配する 《to, among ...》 / 《ある区域・場所に》…を散らばらせる 《over, among ...》",
    "example_sentence": "They distribute food to the homeless every week.",
    "translated_sentence": "彼らは毎週ホームレスに食べ物を分配します。"
  },
  {
    "entry": "concern",
    "meaning_ja": "〈他〉...に関係する / 《しばしば受動態で》(人) に関心を持たせる, を心配させる",
    "example_sentence": "I am concerned about the upcoming deadline.",
    "translated_sentence": "私は迫っている締め切りが心配です。"
  },
  {
    "entry": "channel",
    "meaning_ja": "〈C〉水路 / 海峡 / みぞ / 経路 / ルート/周波数帯",
    "example_sentence": "I changed the channel to watch my favorite show.",
    "translated_sentence": "私はお気に入りの番組を見るためにチャンネルを変えました。"
  },
  {
    "entry": "express",
    "meaning_ja": "(思想・感情など) を表現する / を示す",
    "example_sentence": "I express my feelings through art.",
    "translated_sentence": "私は芸術を通じて自分の気持ちを表現します。"
  },
  {
    "entry": "anyone",
    "meaning_ja": "《かたく》《疑問文・条件節で》だれか / 《否定文で》だれも / 《肯定文で》だれでも",
    "example_sentence": "Anyone can do it if they try hard enough.",
    "translated_sentence": "どなたでも頑張ればできる。"
  },
  {
    "entry": "anyway",
    "meaning_ja": "《通例文頭》さて, それはさておき([[by the way]], [[well]]) / とにかく / いずれにせよ / 《通例文尾》そもそも, だいたい",
    "example_sentence": "Anyway, let's get back to the topic.",
    "translated_sentence": "さて、話題に戻りましょう。"
  },
  {
    "entry": "freeze",
    "meaning_ja": "凍る;冷凍される  / 《itを主語にして》凍るほど寒い;《it・場所を主語にして》氷が張る  / 〈体が〉凍える,《話》冷えきる  / (恐怖・シヨックなどで)〈体などが〉こわばる,〈態度などが〉ぎごちなくなる;ぞっと(ぎょっと)する;〈気持ちなどが〉冷たくなる,ひんやりする  / (霜などで)〈植物が〉枯れる  / 〈物〉‘を'凍らせる,冷凍する  / 〈人〉‘を'凍えさせる,凍死させる  / …‘を'ぞっとさせる;〈体・態度など〉‘を'こわばらせる《+名+up,+up+名》  / 〈気持ちなど〉‘を'冷たくする  / 〈物価など〉‘を'凍結する  / 氷結,凍結状態  / (物価・賃金などの)凍結",
    "example_sentence": "The water will freeze if you leave it outside in the winter.",
    "translated_sentence": "冬に外に置いておくと水は凍ります。"
  },
  {
    "entry": "fun",
    "meaning_ja": "楽しい, おもしろい",
    "example_sentence": "That [[roller coaster]] was so fun!",
    "translated_sentence": "あのジェットコースターは本当に楽しかった！"
  },
  {
    "entry": "fit",
    "meaning_ja": "〈U〉適合 / 〈C〉(病気の) 発作 / (感情などの) 一時的な爆発《of ...》",
    "example_sentence": "It was a perfect fit.",
    "translated_sentence": "服がぴったり合っていた。"
  },
  {
    "entry": "mad",
    "meaning_ja": "気が狂った,気違いの / ばかげた,無謀の,向こう見ずな / 《補語にのみ用いて》《話》《人・物事に》夢中になって,《…を》熱望して《about, for ...》 / 《補語にのみ用いて》《話》怒った,腹を立てた([[angry]]) / 狂ったように興奮した,熱狂した / (イヌが)狂犬病にかかった",
    "example_sentence": "He was mad at me for forgetting his birthday.",
    "translated_sentence": "彼は自分の誕生日を忘れたことに腹を立てていた。"
  },
  {
    "entry": "politics",
    "meaning_ja": "〈U〉政治 / 政治学",
    "example_sentence": "Politics plays a crucial role in shaping the future of a nation.",
    "translated_sentence": "政治は国の未来を形作る上で重要な役割を果たしています。"
  },
  {
    "entry": "description",
    "meaning_ja": "〈U〉〈C〉《...の》記述, 描写, 表現, 説明《of ...》 / 〈C〉人相書き,人相 / 種類,銘柄",
    "example_sentence": "Can you give me a description of the painting?",
    "translated_sentence": "絵の説明を教えていただけますか？"
  },
  {
    "entry": "comprise",
    "meaning_ja": "を含む / 《...の部分》から成る《of ... 》 / を構成する",
    "example_sentence": "The team comprises five members.",
    "translated_sentence": "チームは5人のメンバーで構成されています。"
  },
  {
    "entry": "around",
    "meaning_ja": "...の周りに / …のあちこちに, …のあちこちを / 《米・英話》…を回って",
    "example_sentence": "I like to walk around the park in the morning.",
    "translated_sentence": "私は朝、公園を歩き回るのが好きです。"
  },
  {
    "entry": "success",
    "meaning_ja": "〈U〉成功,好結果,上首尾  / 〈U〉富(地位,名声)を得ること,成功,立身,出世・〈C〉成功した人(物,事)・うまく行くこと・成功者",
    "example_sentence": "Hard work and determination are the keys to success.",
    "translated_sentence": "努力と決意が成功の鍵です。"
  },
  {
    "entry": "broadcast",
    "meaning_ja": "(ラジオ・テレビの)放送番組;放送",
    "example_sentence": "Record the broadcast on tape.",
    "translated_sentence": "その放送をテープに録音(録画)してくれ。"
  },
  {
    "entry": "troop",
    "meaning_ja": "〈C〉《移動中の人・野生の動物の》群れ《of ...》 / 《複数形で》軍隊",
    "example_sentence": "The troop marched in formation.",
    "translated_sentence": "部隊は整列して行進した。"
  }
];