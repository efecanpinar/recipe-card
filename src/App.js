import "./App.css";
import Card from "./components/Card";
import food from "./assets/food.jpg";

function App() {
  const recipeAuthor = "Efecan";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "8 Haziran 2021, Salı",
    image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const like= 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={like}
        />
      </header>
    </div>
  );
}

export default App;
