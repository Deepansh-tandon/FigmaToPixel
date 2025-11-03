import Card from "./Card";

export default function CardSlider() {
  const cards = [
    { title: "FitAI", color: "#CDE8FF" },
    { title: "FinSub", color: "#FFE5B4" },
    { title: "BillFlow", color: "#E8D5FF" },
    { title: "FinSu", color: "#CDE8FF" },
  ];

  return (
    <div className="w-full overflow-hidden pb-4 md:pb-8">
      <div className="flex justify-start">
        <div className="inline-flex animate-scroll-infinite gap-4 md:gap-6 items-center">
          {cards.map((card, index) => (
            <Card key={`first-${index}`} title={card.title} color={card.color} />
          ))}
          {cards.map((card, index) => (
            <Card key={`second-${index}`} title={card.title} color={card.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

