import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import CheckoutForm from './CheckoutForm';

const CheckoutModal = forwardRef(function Modal({ title, actions, modalId }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      }
    };
  });
  return createPortal(
    <dialog className="absolute inset-0 p-8" ref={dialog}>
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <form method="dialog">
        <CheckoutForm />
        {actions}
      </form>
    </dialog>,
    document.getElementById(modalId),
  )
});

export default CheckoutModal;