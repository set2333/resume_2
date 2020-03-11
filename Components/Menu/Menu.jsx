import MenuButton from './MenuButton';

const Menu = () => (
  <>
    <nav>
      <ul>
        <MenuButton label="Главная" path="/" />
        <MenuButton label="О работе" path="/work" />
        <MenuButton label="О жизни" path="/live" />
        <MenuButton label="Контакты" path="/contacts" />
      </ul>
    </nav>
    <style jsx>
      {`
        nav {
          width: 240px;
          position: fixed;
          display: block;
        }
      `}
    </style>
  </>
);

export default Menu;
