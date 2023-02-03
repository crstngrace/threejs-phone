import { useEffect, Suspense, useRef, useContext } from 'react';
import gsap from 'gsap';
import { AppContext } from '../context/app-context';
import Phone from './Phone';

const Mesh = ({ state: [isLoaded, setIsLoaded] }) => {
  const { phoneRef, setPhoneRef } = useContext(AppContext);
  const cameraRef = useRef();

  function getPosition() {
    const camera = cameraRef.current;

    if (camera) {
      const pos = camera.aspect < 1.3 ? 1 : 2;

      return window.innerWidth / window.innerHeight + pos;
    }

    return 4;
  }

  useEffect(() => {
    function onResize() {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();

      if (isLoaded) {
        phoneRef.current.position.x = getPosition();
      }
    }

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isLoaded, phoneRef]);

  useEffect(() => {
    function animatePhone() {
      const phone = phoneRef.current;

      if (phone) {
        const tl = gsap.timeline({
          paused: false,
          onComplete: () => {
            setIsLoaded(true);
          }
        });

        tl.to(phone.rotation, { y: 6.4, duration: 1 });
        tl.to(phone.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1 }, '-=1');
        tl.to(phone.position, { x: getPosition() });
        tl.to(phone.rotation, { y: 5.3, duration: 1 });
        tl.to(
          phone.scale,
          { x: 1, y: 1.3, z: 1, duration: 1, ease: 'none' },
          '-=1'
        );
      }
    }

    animatePhone();
  }, [phoneRef]);

  return (
    <>
      <perspectiveCamera
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        position={[0, 0, 0]}
        near={0.1}
        far={100}
        ref={cameraRef}
      >
        <Suspense>
          <ambientLight />
          <pointLight position={[0, 0, 0]} />
          <Phone />
        </Suspense>
      </perspectiveCamera>
    </>
  );
};

export default Mesh;
