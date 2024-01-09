import styles from './page.module.css'

export default function Home(){
    return (
        <div className={styles.sections}>
          <div className={styles.first}>
            <h1>Check your financial health</h1>
            <p>Use weathoMeter to get a free report <br />card for your finances- within minutes!</p>
            <button><a href="/validation">Get started</a></button>
          </div>
          <div className={styles.second}>
            <div className={styles.one}>
              <div className={styles.ticks}>
                <img src="checkbox.png" alt="checkbox" />
                <p>Expected Retirement Age</p>
              </div>
              <div className={styles.ticks}>
                <img src="checkbox.png" alt="checkbox" />
                <p>Identify Mistakes</p>
              </div>
            </div>
            <div className={styles.mobile}>
              <img src="screen.png" alt="screen" />
            </div>
            <div className={styles.three}>
              <div className={styles.ticks}>
                  <img src="checkbox.png" alt="checkbox" />
                  <p>Personalsied Road Map</p>
                </div>
                <div className={styles.ticks}>
                  <img src="checkbox.png" alt="checkbox" />
                  <p>Tips to Improve</p>
                </div>
            </div>
          </div>
          <img className={styles.wave} src="wave.png" alt="wave" />
          <div className={styles.third}>
            <h1>How it works?</h1>
            <div className={styles.steps}>
              <img src="pathway.png" alt="steps" />
              <div className={styles.step}>
                <p className='fir'>Answer few <br />questions</p>
                <p className='sec'>Register using <br /> phone and OTP</p>
                <p className='thi'>Get report and <br />personal roadmap</p>
              </div>
            </div>
            <button><a href="/validation">Get started</a></button>
          </div>
        </div>
        
    );
};

