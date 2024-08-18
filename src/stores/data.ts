import { defineStore } from 'pinia';
import resume from '../assets/planet_bg/resume.png';
import minigame from '../assets/planet_bg/minigame.png';
import bms from '../assets/planet_bg/bms.png';
import poker from '../assets/planet_bg/poker.png';
import logviewer from '../assets/planet_bg/logviewer.png';

type Data = {
  /**
   * 連結
   */
  link: string;
  /**
   * 仰起角度
   */
  angel: string;
  /**
   * 旋轉角度
   */
  rotateAngel: string;
  /**
   * 標題
   */
  label: string;
  /**
   * 圖片
   */
  image: string;
}

export const useDataStore = defineStore('data', {
  state: () => <{
    initAngel: number;
    planetRotateAngel: number;
    transition_duration: number;
    isRolling: boolean;
    currentIndex: number;
    data: Data[];
  }>({
    initAngel: 90,
    planetRotateAngel: 90,
    transition_duration: 3000,
    isRolling: false,
    currentIndex: 0,
    data: [
      {
        link: 'https://crazwade.github.io/profile/',
        angel: '0deg',
        rotateAngel: '0deg',
        label: '個人線上履歷',
        image: resume,
      },
      {
        link: 'https://crazwade.github.io/MiniGamePlayground/',
        angel: '0deg',
        rotateAngel: '0deg',
        label: 'Mini Game 遊戲場',
        image: minigame,
      },
      {
        link: 'https://crazwade.github.io/BMS/dist',
        angel: '0deg',
        rotateAngel: '0deg',
        label: 'Demo 後台管理系統',
        image: bms,
      },
      {
        link: 'https://crazwade.github.io/PokerComboAnalyzer/',
        angel: '0deg',
        rotateAngel: '0deg',
        label: '撲克牌 牌型組合與分析',
        image: poker,
      },
      {
        link: 'https://crazwade.github.io/LogViewer/',
        angel: '0deg',
        rotateAngel: '0deg',
        label: 'LogViewer',
        image: logviewer,
      }
    ],
  }),
  getters: {
    getPlanets: (state) => state.data
  },
  actions: {
    initPlanet() {
      this.data = this.data.map((item, index) => ({
        ...item,
        angel: `${(360 / this.data.length) * index}deg`,
        rotateAngel: `${90 + (360 / this.data.length) * index}deg`,
      }));
      document.documentElement.style.setProperty(
        '--transition_duration', `${this.transition_duration}ms`
      );
    },
    rotatePlate(type: 'left' | 'right') {
      if (this.isRolling) return;

      this.currentIndex = type === 'left' ?
        this.currentIndex - 1 === -1 ? this.data.length - 1 : this.currentIndex - 1
        : this.currentIndex + 1 === this.data.length ? 0 : this.currentIndex + 1;

      this.isRolling = true;

      const degree = 360 / this.data.length;
      const newAngle = type === 'left' ? this.initAngel + degree : this.initAngel - degree;

      document.documentElement.style.setProperty('--plateRotate', `${newAngle}deg`);

      this.initAngel = newAngle;

      this.data.forEach((item) => {
        const prevAngle = item.rotateAngel.split('d')[0];
        item.rotateAngel = `${Number(prevAngle) + (type === 'left' ? degree : -degree)}deg`;
      });

      setTimeout(() => {
        this.isRolling = false;
      }, this.transition_duration);
    },
  },
});
