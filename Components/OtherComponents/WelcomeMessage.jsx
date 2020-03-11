const WelcomeMessage = () => {
  const hour = new Date().getHours();
  if (hour < 4) return <h1>Доброй ночи</h1>;
  if (hour > 3 && hour < 12) return <h1>Доброе утро</h1>;
  if (hour > 15) return <h1>Добрый вечер</h1>;
  return <h1>Добрый день</h1>;
};

export default WelcomeMessage;
