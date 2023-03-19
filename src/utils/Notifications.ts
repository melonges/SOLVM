import { toast } from 'react-toastify';

export const showSuccessToast = (msg: string) => {
  toast.success(msg || `Compiled`, {
    position: 'bottom-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
export const ErrorNotification = (msg: string) => {
  toast.error(msg || `Something went wrong`, {
    position: 'bottom-center',
    draggable: true,
  });
};
