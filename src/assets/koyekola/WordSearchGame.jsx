import { useParams, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { wordSearchCategoryMap } from "@/data/wordsearch/categories";
import { useWordSearchGame } from "@/hooks/useWordSearchGame";
import { formatTime } from "@/utils/time";

import WordGrid from "@/components/wordsearch/WordGrid";
import WordList from "@/components/wordsearch/WordList";
import GameWonModal from "@/components/GameWonModal";
import "./WordSearchGame.scss";

export default function WordSearchGame() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const level = searchParams.get("level") || "medium";

  const data = wordSearchCategoryMap[category];

  const wordData = useMemo(() => {
    if (!data?.words) return [];
    return data.words.map((item) =>
      typeof item === "string" ? item : item.label
    );
  }, [data?.words]);

  const wordObjects = useMemo(() => {
    if (!data?.words) return [];
    return data.words;
  }, [data?.words]);

  const {
    grid,
    words,
    found,
    foundWords,
    foundImages,
    elapsedTime,
    showModal,
    handleWordFound,
    handleReplay,
  } = useWordSearchGame(category, level, wordData, wordObjects);

  return (
    <div className="wordsearch-game">
      <h1 className="h1">Mots cachés – {category}</h1>

      <WordGrid
        grid={grid}
        words={words}
        found={found}
        onWordFound={handleWordFound}
      />

      <WordList words={words} foundWords={foundWords} />

      {/* Show all found images */}
      {foundImages.length > 0 && (
        <div className="found-images-wrapper">
          {foundImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image du mot trouvé ${index + 1}`}
              className="found-image"
            />
          ))}
        </div>
      )}

      {showModal && (
        <GameWonModal
          time={formatTime(elapsedTime)}
          bestTime={null}
          isNewRecord={false}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
}
