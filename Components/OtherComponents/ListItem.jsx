import PropTypes from 'prop-types';

const ListItem = ({ children }) => (
  <>
    <li>{children}</li>
    <style jsx>
      {`
        li {
          list-style: none;
          background: url(images/marker.svg) no-repeat left / contain;
          text-align: left;
          padding-left: 20px;
        }
      `}
    </style>
  </>
);

ListItem.propTypes = {
  children: PropTypes.node,
};

ListItem.defaultProps = {
  children: '',
};

export default ListItem;
