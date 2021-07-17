export default [
  {
    id: 1,
    title: 'Call Jenny for dinner',
    active: true,
  },
  {
    id: 2,
    title: 'Master Context API',
    active: true,
  },
  {
    id: 3,
    title: 'Get a job',
    active: false, // completed = true
  },
];

const toastOptions = {
  position: 'bottom-left',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export { toastOptions };
