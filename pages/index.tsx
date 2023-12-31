import style from './index.module.css';
import Image from 'next/image';

function Index() {
  return (
    <div>
      <div className={style.banner}>
        <Image
          src="/0010032_BeADealer (2).png"
          width={1400}
          height={500}
          alt=""
          className={style.bannerimg}
        />
      </div>
    </div>
  );
}
export default Index;
