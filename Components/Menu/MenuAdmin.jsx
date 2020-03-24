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

        @media (min-width: 769px) and (max-width: 956px) {
          nav {
            width: 192px;
          }
        }

        @media (min-width: 421px) and (max-width: 768px) {
          nav {
            width: 420px;
            height: 80px;
            position: relative;
          }
        }

        @media (max-width: 420px) {
          nav {
            width: 420px;
            height: 80px;
            position: relative;
          }
        }
      `}
    </style>
  </>
);

export default Menu;
