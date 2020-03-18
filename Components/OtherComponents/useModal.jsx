import { useReducer } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { ...state, visiblity: true, props: action.props };
    case 'close':
      return { ...state, visiblity: false };
    default:
      throw new Error();
  }
};

const useModal = (WrapModal) => {
  const [state, dispatch] = useReducer(reducer, { visiblity: false, props: {} });
  WrapModal.close = () => dispatch({ type: 'close' });
  const Modal = () => {
    if (!state.visiblity || document === undefined) return null;
    return createPortal(<WrapModal {...state.props} />, document.querySelector('body'));
  };
  return [Modal, (props) => dispatch({ type: 'open', props }), () => dispatch({ type: 'close' })];
};

useModal.propTypes = {
  WpapModal: PropTypes.element,
};

useModal.defaultProps = {
  WpapModal: (
    <div>
      <p>Hook useModal</p>
    </div>
  ),
};

export default useModal;
