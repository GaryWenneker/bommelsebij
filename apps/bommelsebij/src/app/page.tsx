import BackgroundVideo from './components/background-video/background-video.component';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <BackgroundVideo>
        <div className={styles.page}>
          <div className="wrapper">
            <div className="container">
              <div id="welcome">
              </div>
              <Image
                className='logo'
                src="/images/logo.png"
                alt="alt"
                width={246}
                height={246}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '500px'
                }}
              />
            </div>
          </div>
        </div>
      </BackgroundVideo>

    </>
  );
}
