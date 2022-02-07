import { Rings } from 'react-loader-spinner';

function Loader() {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={style}>
      <Rings height='200' width='200' color='grey' ariaLabel='loading' />
    </div>
  );
}

export default Loader;
