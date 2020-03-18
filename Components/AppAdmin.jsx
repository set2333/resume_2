import PropTypes from 'prop-types';
import MenuAdmin from './Menu/MenuAdmin';
import getContent from './Contents/getContent';

const AppAdmin = ({ content }) => {
  const Content = getContent(content);
  return (
    <>
      <div id="main">
        <MenuAdmin />
        <Content />
      </div>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Alegreya:400,700|Bad+Script&display=swap');
          /* сброс стилей браузера */
          * {
            box-sizing: border-box;
          }

          html,
          body,
          div,
          span,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            vertical-align: baseline;
          }

          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }

          body {
            line-height: 1.2;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          ol {
            padding-left: 1.4em;
            list-style: decimal;
          }

          ul {
            padding-left: 0;
            list-style: square;
          }

          blockquote,
          q {
            quotes: none;
          }

          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: '';
            content: none;
          }

          /* конец кода сброса стилей браузера */
          /*Классы с одинаковыми рамками и тенью*/

          .content,
          .photo,
          .message,
          .buttonOk,
          .form_message,
          .upPage,
          .downPage {
            border: 1px solid black;
            border-radius: 5px;
            box-shadow: 3px 3px 5px black;
          }

          html {
            font-family: 'Alegreya', serif;
            line-height: 30px;
            font-size: 20px;
          }

          p {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 16px;
          }

          h1 {
            margin-top: 50px;
            font-size: 28px;
          }

          h2 {
            font-size: 20px;
          }

          #main {
            width: 960px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
};

AppAdmin.propTypes = {
  content: PropTypes.element,
};

AppAdmin.defaultProps = {
  content: null,
};

export default AppAdmin;
