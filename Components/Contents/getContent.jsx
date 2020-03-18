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
      `}
    </style>
  </div>
);

export default getContent;
