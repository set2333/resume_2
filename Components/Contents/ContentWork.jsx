import React from 'react';
import ListItem from '../OtherComponents/ListItem';

const ContentWork = () => (
  <>
    <h1>О работе</h1>
    <p>
      Начну, пожалуй, со стека технологий. Его я разобью на три списка. В первом будут те языки и
      технологии, которые я использовал в своей рабочей деятельности. Во втором те, с которыми я
      ознакомился просто из интереса. В третьем планы на будущее.
    </p>
    <h2>Основные технологии</h2>
    <ul>
      <ListItem>
        <b>JavaScript (Node.js, React, jQuery)</b>
      </ListItem>
      <ListItem>
        <b>HTML</b>
      </ListItem>
      <ListItem>
        <b>CSS</b>
      </ListItem>
      <ListItem>
        <b>Java</b>
        {' '}
        (разрабатывал приложение под Android)
      </ListItem>
      <ListItem>
        <b>SQL (PostGree, MySQL)</b>
      </ListItem>
      <ListItem>
        <b>MongoDB</b>
      </ListItem>
      <ListItem>
        <b>1С Предприятие 7.7</b>
        {' '}
        (годы жизни)
      </ListItem>
      <ListItem>
        <b>1С Предприятие 8</b>
        {' '}
        (многие-многие годы жизни)
      </ListItem>
    </ul>
    <h2>Дополнительные технологии</h2>
    <ul>
      <ListItem>
        <b>PHP</b>
        {' '}
        (использовал для одного сайта на небольшом уровне)
      </ListItem>
      <ListItem>
        <b>C++</b>
        {' '}
        (на нем изучал ООП)
      </ListItem>
      <ListItem>
        <b>Basic</b>
        {' '}
        (это ещё в школе)
      </ListItem>
      <ListItem>
        <b>Delphi</b>
        {' '}
        (в свое время знатно похулиганил)
      </ListItem>
      <ListItem>
        <b>MQL</b>
        {' '}
        (приходилось писать ботов для Forex-терминалов)
      </ListItem>
      <ListItem>
        <b>Assembler</b>
        {' '}
        (узнавал принципы работы ПК)
      </ListItem>
    </ul>
    <h2>В ближайших планах</h2>
    <ul>
      <ListItem>
        <b>Python</b>
      </ListItem>
      <ListItem>
        <b>Vue.js</b>
      </ListItem>
      <ListItem>
        <b>Angular</b>
      </ListItem>
    </ul>
    <p>
      Теперь небольшое лирическое отступление. Так как у меня нет на руках трудовой книжки, то все
      даты будут примерными.
    </p>
    <p>
      Итак. Началась моя ИТ-карьера в организации под названием Почта России. Это было в период с
      мая 2007г. по август 2008г.
    </p>
    <p>
      Основной задачей было обслуживание программы WinPost, которую использовали операторы в
      отделениях почтовой связи. Там я писал свои первые SQL-скрипты, которые позволяли быстро и без
      ошибок настраивать новые рабочие места.
    </p>
    <p>
      С августа 2008г. по февраль 2009г. я работал в Кызылской ТЭЦ электромонтёром РЗА. Напрямую с
      ИТ работа связана не была, но удалось поучаствовать в установке системы пожаротушения, которая
      была компьютеризирована.
    </p>
    <p>
      Далее, с февраля 2009г. и по декабрь 2011г. я трудился на должности программиста в Тувинской
      горнорудной компании. В начале основной платформой была 1С Предприятие версии 7.7. Позже
      перешли на версию 8. Здесь мне довелось активно поучаствовать в автоматизации процессов
      предприятия. Я писал модули для расчёта зарплаты белазистов и бульдозеристов. Написал
      небольшую конфигурацию для учета ходок, которая заменила очень большой и страшный excel-файл.
      Участвовал в настройке электронных весов, которые завешивают автомобили. Так же производил их
      интеграцию с 1С. Создавал модуль учета прибывшего на погрузку транспорта, с помощью все той же
      1С и сканера штрих кодов.
    </p>
    <p>
      Следующим моим рабочим местом был ООО Альянс (с января 2012г. по декабрь 2013г.). Эта
      организация - официальный партнер 1С. Там вся моя работа была связанна с этой платформой.
      Начиная от установки и обновления конфигураций, заканчивая разработкой отчетов и обработок под
      нужды клиентов. Ну и, конечно же, консультации, хотя это уже не столько ИТ-шные навыки,
      сколько бухгалтерские.
    </p>
    <p>
      С января 2014г. и по май 2017г. я работал в ООО Лаим. Небольшая организация, занимавшаяся
      разработкой чего угодно. Мы делали и системы документооборота, на базе все той же 1С. Писали
      приложение под Android на Java. Программировали Forex-терминалы. Писали игры на GameMaker.
      Разрабатывали систему учета топлива на дизельных электростанциях в отдаленных районах
      республики (смесь 1С, JavaScript, Node.js).Это был, наверное, самый интересный этап моей
      карьеры. Там я получил навыки командной работы. Узнал кучу новых технологий. Наконец-то понял
      всю суть ООП. Но по экономическим обстоятельствам пришлось менять место работы.
    </p>
    <p>
      С мая 2017г. и по сегодняшний день я работаю в Управлении образованием Каа-Хемского кожуна.
      Эта организация занимается централизованным бухучетом примерно 30 организаций. То есть простор
      для автоматизации. Многие задачи уже решены, но имеется куча эникейских функций, которые
      отнимают кучу времени. Хотелось бы отойти от этого, ведь я уверен, что мой потенциал будет,
      мягко говоря, повыше, чем установка ключей ЭЦП и замена бумаги в принтере.
    </p>
    <p>
      Года с 2010, параллельно с основной деятельностью, занимался обслуживанием организаций в
      частном порядке. Написал несколько небольших конфигураций на все той же 1С (например,
      автоматизировал учет в ломбарде). Совсем немножко поучаствовал в проекте медицинской
      информационно системы (проект на C#, кстати, единственный проект в регионе, не на 1С), но
      из-за внутренних разногласий в руководстве, проект пришлось покинуть.
    </p>
    <p>
      Было несколько своих сайтов. Хотел заработать на контекстной рекламе. Доход был, но настолько
      небольшой, что проекты пришлось свернуть.
    </p>
  </>
);

export default ContentWork;
