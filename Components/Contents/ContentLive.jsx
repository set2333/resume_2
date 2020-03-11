import React from 'react';
import Photo from '../OtherComponents/Photo';
import ButtonAncor from '../OtherComponents/ButtonAncor';
import ListItem from '../OtherComponents/ListItem';

const ContentLive = () => (
  <>
    <h1>О жизни</h1>
    <Photo image="images/photo_1.jpg" />
    <p>
      Родился я в городе Кызыл, Республика Тыва. Произошло это 26.10.1987г. С тех пор так тут и
      живу, и уезжать в другой регион не хочу, но готов к удаленной работе, благо для этого у меня
      есть все условия (в частности личный кабинет, в котором я могу спрятаться от всех домочадцев).
    </p>
    <p>
      Учился в школе №11 и неплохо её закончил. Аттестат за 11 класс получился без троек. Затем была
      армия. Служил в МЧПВ, думал остаться по контракту, но не сложилось. Вернувшись, пробовал
      учиться в автодорожном техникуме, но понял, что это совсем не моё.
    </p>
    <p>
      Кто не учится, тот работает, поэтому пошел работать. Тем более работать я начал ещё в школьное
      время, класса после девятого я уже совмещал учебу с работой. Более подробно о моей рабочей
      деятельности написано в разделе
      {' '}
      <ButtonAncor label="О работе" path="/work" />
      . Здесь лишь
      добавлю, что кроме ИТ профессий я успел поработать кондуктором, столяром, охранником и
      продавцом-консультантом в строительном магазине.
    </p>
    <p>
      Вскоре после армии я женился. Сейчас у меня жена, двое детей. А так же собака, попугай, крыс,
      рыбки и кот, который как раз сейчас мешает набирать мне этот текст.
    </p>
    <h2>Увлечения</h2>
    <p>
      Основным моим увлечением на данный момент является охота. Иногда не прочь и половить рыбу.
      Люблю находиться на природе, сидеть на берегу реки, прогуливаться по тропинке или лезть в
      гору.
    </p>
    <p>
      Люблю музыку. Причем не важно, какого стиля. Главное, чтобы была хорошая. Периодически езжу на
      музыкальные фестивали.
    </p>
    <p>
      Кстати я и сам немного играю на музыкальных инструментах. В моем арсенале гитара, флейта,
      блок-флейта, варган. Хотелось бы ещё клавишные освоить, но пока не хватает времени.
    </p>
    <p>
      Увлекаюсь чтением, причем могу увлечься очень сильно. Поэтому приходится себя немножко
      ограничивать. Раньше читал много фентези: Д.Р.Р.Толкиен, Д.Р.Р.Мартин, Н.Перумов. Сейчас читаю
      либо исторические романы: В.С.Пикуль, либо наших классиков: Л.Н Толстой, Ф.М. Достоевский.
      Иногда и поэзию почитываю, но не часто. Любимым поэтом я бы назвал Р.И.Рождественского.
    </p>
    <p>
      Было время, сам пробовал писать рассказы. Получилось или нет можно оченить на Самиздате
      (ссылка есть в разделе
      {' '}
      <ButtonAncor label="Контакты" path="/contacts" />
      ).
    </p>
    <p>
      Коллекционирую ножи. Есть в них, что-то притягательное. Да и в охотничьих приключениях без
      ножа не обойтись.
    </p>
    <p>Играю с сыном в шахматы. Пока лидирую я, но думаю, что это только пока.</p>
    <p>
      Ну, вот примерно такой я человек. В общем, такой же, как и все остальные, со своими желаниями,
      мыслями, переживаниями. Но так как этот сайт является моим резюме, то добавлю ка я еще список
      своих достоинств и недостатков (не всех конечно, а то интернета не хватит).
    </p>
    <h2>Достоинства</h2>
    <ul>
      <ListItem>Обучаемость.</ListItem>
      <p>Привык постоянно чему-то учиться. Состояние обучения это мое нормальное состояние.</p>
      <ListItem>Увлеченность.</ListItem>
      <p>Если проект мне по душе, то могу полночи просидеть и не заметить.</p>
      <ListItem>Ответственность.</ListItem>
      <p>
        Если проект не по душе, но есть обязательство перед заказчиком, могу и всю ночь просидеть.
        Но этим лучше не злоупотреблять.
      </p>
    </ul>
    <h2>Недостатки</h2>
    <ul>
      <ListItem>Не коммуникабельный</ListItem>
      <p>
        {`Точнее не совсем так. Я могу прекрасно работать в коллективе, где я всех знаю. С этим
        проблем ни когда не было. Но вот общение с незнакомыми людьми для меня всегда в тягость.
        Наверное, если бы меня спросили: "Кем ты не хочешь быть?", я бы ответил:"Оператором в
        call-центре".`}
      </p>
      <ListItem>Идейность</ListItem>
      <p>
        Если я не вижу смысла в своей работе, не понимаю кому и для чего оно нужно, моя
        работоспособность падает. Я не люблю работать работу. Мне нужно видеть результат, осознавать
        свою нужность.
      </p>
      <ListItem>Не умею говорить НЕТ.</ListItem>
      <p>
        Люди часто этим пользуются и начинают заваливать просьбами. Стараюсь прекращать общение с
        такими людьми.
      </p>
    </ul>
  </>
);

export default ContentLive;
