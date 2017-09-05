

requirejs.config({
    baseUrl: 'app',
    paths:{
        'jquery':'../lib/jquery-3.2.1.min'
    }
});

requirejs(['../com/index'])