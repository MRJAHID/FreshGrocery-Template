module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          transitionDuration: {
            '400': '400ms',
            '600': '600ms',
            '800': '800ms',
           },
          screens: {
            'xs': {'min': '450px', 'max': '639px'},
          },
            inset: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
            },
            colors: {
                green: {
                    550: '#14a753',
                },
                yellow: {
                    550: '#ff7200',
                },
            },
            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
                '1/7': '14.2857143%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
