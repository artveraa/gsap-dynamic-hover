import Item from "@/app/components/Item";

const Menu = () => {
  const items = [
    "Get back Jamie",
    "Deadly 60",
    "I'm not feeling it",
    "Real Big Hitter",
    "Dog Dribble",
  ];

  return (
    <ul className="content flex flex-col items-center pt-[3vw]">
      {items.map((title, index) => (
        <Item key={index} title={title} />
      ))}
    </ul>
  );
};

export default Menu;
