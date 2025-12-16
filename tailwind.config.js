/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{pug,html,js,ts}',
    './src/templates/_includes/components/**/*.{pug,html,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'white': {
          50: '#ffffff',
          200: '#F4F4F5',
        },
        'black': {
          50: '#000000',
          100: '#09090B',
          150: '#18181B',
        },
        'gray': {
          50: '#C6D3DC',
          100: '#4D4F69',
          150: '#3A3C55',
          200: '#D4D4D8',
          250: '#A1A1AA',
          300: '#D1D1D1',
          350: '#9D9D9D',
          400: '#FAFAFA',
          500: '#E0E0E0',
          550: '#A8A8A8',
          650: '#E4E4E7',
          700: '#EFF1F5',
          800: '#F6F6F6',
          900: '#71717A',
          1000: '#f4f4f5'
        },
        'blue': {
          50: '#8A5CF4',
          100: '#8A5CF4',
          200: '#E9E8F7',
          250: '#e7f0f7',
          300: '#336695',
          350: '#F7F8FD',
          400: '#5874EE',
          450: '#D3D2E9'
        },
        'green': {
          50: '#EAFFEF',
          100: '#2A6840',
        },
        'orange': {
          50: '#FEEBE4',
          100: '#A05E33',
        },
        'red': {
          50: '#DC2626',
        }
      },
      spacing: {
        0.5: '0.125rem', // 2px
        0.75: '0.1875rem', // 3px
        1: '0.25rem', // 4px
        1.25: '0.3125rem', // 5px
        1.5: '0.375rem', // 6px
        1.75: '0.4375rem', // 7px
        2: '0.5rem', // 8px
        2.25: '0.5625rem', // 9px
        2.5: '0.625rem', // 10px
        3: '0.75rem', // 12px
        3.25: '0.8125rem', // 13px
        3.5: '0.875rem', // 14px
        3.75: '0.9375rem', // 15px
        4: '1rem', // 16px
        4.5: '1.125rem', // 18px
        4.75: '1.1875rem', // 19px
        5: '1.25rem', // 20px
        5.5: '1.375rem', // 22px
        5.75: '1.4375rem', // 23px
        6: '1.5rem', // 24px
        6.5: '1.625rem', // 26px
        7: '1.75rem', // 28px
        7.5: '1.875rem', // 30px
        8: '2rem', // 32px
        8.5: '2.125rem', // 34px
        8.75: '2.1875rem', // 35px
        9: '2.25rem', // 36px
        9.5: '2.375rem', // 38px
        10: '2.5rem', // 40px
        11: '2.75rem', // 44px
        12: '3rem', // 48px
        12.5: '3.125rem', // 50px
        12.75: '3.1875rem', // 51px
        13: '3.25rem', // 52px
        13.5: '3.375rem', // 54px
        14: '3.5rem', // 56px
        14.5: '3.625rem', // 58px
        15: '3.75rem', // 60px
        15.5: '3.875rem', // 62px
        16: '4rem', // 64px
        16.25: '4.0625rem', // 65px
        16.5: '4.125rem', // 66px
        17: '4.25rem', // 68px
        17.5: '4.375rem', // 70px
        18: '4.5rem', // 72px
        18.75: '4.6875rem', // 75px
        19: '4.75rem', // 76px
        19.5: '4.875rem', // 78px
        20: '5rem', // 80px
        21: '5.25rem', // 84px
        22: '5.5rem', // 88px
        22.5: '5.625rem', // 90px
        24: '6rem', // 96px
        25: '6.25rem', // 100px
        26: '6.5rem', // 104px
        27: '6.75rem', // 108px
        28: '7rem', // 112px
        29: '7.25rem', // 116px
        30: '7.5rem', // 120px
        32: '8rem', // 128px
        32.5: '8.125rem', // 130px
        33: '8.25rem', // 132px
        33.5: '8.375rem', // 134px
        34: '8.5rem', // 136px
        34.5: '8.625rem', // 138px
        35: '8.75rem', // 140px
        35.25: '8.8125rem', // 141px
        36: '9rem', // 144px
        37: '9.25rem', // 148px
        37.5: '9.375rem', // 150px
        38: '9.5rem', // 152px
        38.5: '9.625rem', // 154px
        40: '10rem', // 160px
        42: '10.5rem', // 168px
        42.5: '10.625rem', // 170px
        43: '10.75rem', // 172px
        44.5: '11.125rem', // 178px
        47: '11.75rem', // 188px
        48: '12rem', // 192px
        50: '12.5rem', // 200px
        52: '13rem', // 208px
        53: '13.25rem', // 212px
        55: '13.75rem', // 220px
        56: '14rem', // 224px
        57.5: '14.375rem', // 230px
        58.5: '14.625rem', // 234px
        59: '14.75rem', // 236px
        60: '15rem', // 240px
        61.5: '15.375rem', // 246px
        62: '15.5rem', // 248px
        62.5: '15.625rem', // 250px
        64: '16rem', // 256px
        65: '16.25rem', // 260px
        66: '16.5rem', // 264px
        66.5: '16.625rem', // 266px
        67.5: '16.875rem', // 270px
        70: '17.5rem', // 280px
        75: '18.75rem', // 300px
        75.5: '18.875rem', // 302px
        76.5: '19.125rem', // 306px
        77.5: '19.375rem', // 310px
        80: '20rem', // 320px
        87.5: '21.875rem', // 350px
        91.5: '22.875rem', // 366px
        100: '25rem', // 400px
        102: '25.5rem', // 408px
        103: '25.75rem', // 411px
        103.25: '25.8125rem', // 413px
        105: '26.25rem', // 420px
        105.5: '26.375rem', // 422px
        106: '26.5rem', // 424px
        111: '27.75rem', // 444px
        112.5: '28.125rem', // 450px
        113: '28.25rem', // 452px
        117.5: '29.375rem', // 470px
        119: '29.75rem', // 476px
        120: '30rem', // 480px
        125: '31.25rem', // 500px
        130: '32.5rem', // 520px
        127.5: '31.875rem', // 510px
        137: '34.25rem', // 548px
        137.5: '34.375rem', // 550px
        193: '48.25rem', // 772px
        200: '50rem', // 800px
        298.5: '74.625rem', // 1194px
      },
      fontSize: {
        xxss: '0.625rem', // 10px
        xss: '0.8125rem', // 13px
      },
      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
      },
      borderRadius: {
        'sxs': '0.1875rem', // 3px
        'xs': '0.3125rem', // 5px
        'xxs': '0.375rem', // 6px
        'xxss': '0.4375rem', // 7px
        'xss': '0.625rem', // 10px
        'xll': '0.875rem', // 14px
      },
      backgroundImage: {
        'upload-file-img': "url('../images/svg/upload-file.svg')",
        'sidebar-list-item': "url('../images/svg/table-vector.svg')",
        'sidebar-list-item-last': "url('../images/svg/table-vector-last.svg')",
        'tab-corner': "url('../images/svg/tab-corner.svg')",
        'tab-corner-blue': "url('../images/svg/tab-corner-blue.svg')",
        'calendar-picker': "url('../images/svg/calendar.svg')",
        'analytics-decoration': "url('../images/svg/analytics-decoration.svg')",
        'sidebar-fill': 'linear-gradient(180deg, #E7E9EF 0%, #FAFBFF 87%)',
      },
      boxShadow: {
        'xxxs': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'xss': '0 1px 2px 0 rgba(228, 228, 231, 1)',
        'input': '0 1px 1px rgba(228, 228, 231, 0.6)',
        'dropdown': '0 1px 3px 0px rgba(0, 0, 0, 0.2)',
      },
      textShadow: {
        'black': '0 4px 4px 0 rgba(0, 0, 0, 0.84)',
      },
      borderWidth: {
        3: '3px',
      }
    },
  },
  variants: {
    extend: {
      content: ['before', 'after'], 
    },
  },
  plugins: []
}


