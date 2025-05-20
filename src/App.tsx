import React, { useState } from 'react';
import './App.css';
import maedaImage from './maeda.jpg';  // 画像をインポート

// ドリンクデータの型定義
interface Drink {
  id: number;
  displayName: string;
  actualDrink: string;
  description: string;
  image: string;
}

// ドリンクデータ
const drinks: Drink[] = [
  {
    id: 1,
    displayName: "雇用契約ハイボール",
    actualDrink: "ハイボール",
    description: "契約内容に忠実なすっきりドリンク。飲みすぎ注意。",
    image: "hiball.jpg"
  },
  {
    id: 2,
    displayName: "労基レッドワイン",
    actualDrink: "赤ワイン",
    description: "渋みと厳格さのある味。労働時間に配慮を。",
    image: "red.png"
  },
  {
    id: 3,
    displayName: "年金ホワイトワイン",
    actualDrink: "白ワイン",
    description: "穏やかな甘みと安心感。未来への備え。",
    image: "white.jpg"
  },
  {
    id: 4,
    displayName: "社保焼酎",
    actualDrink: "焼酎",
    description: "社会保険のようにじわじわ効く。",
    image: "maou.jpg"
  },
  {
    id: 5,
    displayName: "退職届 純米酒",
    actualDrink: "日本酒",
    description: "飲み切った先に新たな人生が待つ一杯。",
    image: "Sake.jpg"
  },
  {
    id: 6,
    displayName: "解雇通告テキーラ",
    actualDrink: "テキーラ",
    description: "一撃必殺のショット。飲む前に退路の確認を。",
    image: "teki.jpg"
  },
  {
    id: 7,
    displayName: "就業規則ロック",
    actualDrink: "ウイスキーロック",
    description: "規則に厳格なストレートな一杯。",
    image: "rock.jpg"
  }
];

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const startRoulette = () => {
    setIsSpinning(true);
    setSelectedDrink(null);
    
    // 3秒後に結果を表示
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * drinks.length);
      setSelectedDrink(drinks[randomIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>前田マッスルオーダー</h1>
        <h2>～次の一杯は筋肉が決める！～</h2>
      </header>

      <main>
        {!selectedDrink && (
          <div className="start-section">
            {!isSpinning && (
              <button className="start-button" onClick={startRoulette}>
                筋肉ルーレット開始
              </button>
            )}
            <div className={`maeda-image ${isSpinning ? 'shaking' : ''}`}>
              <img src={maedaImage} alt="前田さん" />
            </div>
            {isSpinning && (
              <div className="spinning-animation">
                <p>筋肉が選んでいます...</p>
              </div>
            )}
          </div>
        )}

        {selectedDrink && (
          <div className="result">
            <div className="drink-image">
              <img src={`${process.env.PUBLIC_URL}/${selectedDrink.image}`} alt={selectedDrink.displayName} />
            </div>
            <h3>{selectedDrink.displayName}</h3>
            <p>{selectedDrink.description}</p>
            <button className="restart-button" onClick={startRoulette}>
              もう一度筋肉に聞く
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
