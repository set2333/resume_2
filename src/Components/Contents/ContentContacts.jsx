import React from "react";
import FormMessage from "../Forms/FormMessage";
import ListItem from "../OtherComponents/ListItem";

const ContentContacts = () => (
  <>
    <h1>Написать мне можно прямо здесь</h1>
    <FormMessage />
    <h2>Ссылки</h2>
    <ul>
      <ListItem>
        Так же можно написать по адресу{" "}
        <a href="mailto:set2333@mail.ru">set2333@mail.ru.</a>
      </ListItem>
      <ListItem>
        Ссылка на мой профиль на{" "}
        <a href="https://infostart.ru/profile/99304/">Инфостарте.</a>
      </ListItem>
      <ListItem>
        Мой <a href="https://habr.com/ru/users/set2333/">Хабр</a> аккаунт.
      </ListItem>
      <ListItem>
        <a href="https://career.habr.com/set2333">Хабр карьера.</a>
      </ListItem>
      <ListItem>
        Аккаунт на <a href="https://github.com/set2333/">Гитхабе.</a>
      </ListItem>
      <ListItem>
        Кстати, исходники этого сайта{" "}
        <a href="https://github.com/set2333/Resume">там же.</a>
      </ListItem>
      <ListItem>
        А вот{" "}
        <a href="https://drive.google.com/open?id=18QpwXxgM2pvLe-SYb5ftMry-rkhhJhLQ">
          сертификат
        </a>{" "}
        с финала Цифрового прорыва 2019
      </ListItem>
    </ul>
    <h2>Ссылки не связанные с ИТ</h2>
    <ul>
      <ListItem>
        <a href="https://vk.com/set2333">ВКонтакте</a>
      </ListItem>
      <ListItem>
        Аккаунт на <a href="https://www.chess.com/member/set2333">Chees.com</a>
      </ListItem>
      <ListItem>
        <a href="http://samlib.ru/editors/t/trofimow_e_s/">Самиздат</a>
      </ListItem>
    </ul>
  </>
);

export default ContentContacts;
