import MenuButton from './MenuButton';

const Menu = () => (
  <>
    <nav>
      <ul>
        <MenuButton label="Главная" path="/admin" />
        <MenuButton label="Сообщения" path="/admin/messages" />
        <MenuButton label="Настройки" path="/admin/settings" />
        <MenuButton label="Основной раздел" path="/" />
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
