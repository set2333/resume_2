const getContent = (WrappedComponent) => () => (
  <div className="content">
    <WrappedComponent />
    <style jsx>
      {`
        .content {
          float: right;
          width: 720px;
          text-align: center;
          margin-top: 25px;
          padding: 20px;
          min-height: 95vh;
          border-top: none;
          background: url(/images/note.svg) repeat-x top left / 36px auto, url(/images/cel.svg);
        }

        @media (min-width: 769px) and (max-width: 956px) {
          .content {
            width: 576px;
          }
        }

        @media (min-width: 421px) and (max-width: 768px) {
          .content {
            width: 420px;
            float: none;
            margin-top: 0;
          }
        }

        @media (max-width: 420px) {
          .content {
            width: 420px;
            float: none;
            margin-top: 0;
          }
        }
      `}
    </style>
  </div>
);

export default getContent;
