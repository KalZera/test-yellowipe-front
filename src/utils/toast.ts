import toaster from "react-hot-toast";

const toast = {
  success: (message: string) => {
    toaster.success(message, {
      duration: 5000,
    });
  },
  error: (message: string) => {
    toaster.error(message, {
      duration: 5000,
    });
  },
  loading: (message: string) => {
    return toaster.loading(message, {
      duration: 5000,
    });
  },
};

export default toast;
