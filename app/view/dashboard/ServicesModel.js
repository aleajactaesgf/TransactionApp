Ext.define('Admin.view.dashboard.ServicesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.services', // connects to viewModel/type below
    data: {
        expiryMonth: "",
        expiryYear: "",
        firstSixDigits: "",
        lastFourDigits: "",
        holderName: ""
    },
    formulas: {
        // We'll explain formulas in more detail soon.
        numberCardHide: function(get) {
            var fn = get('firstSixDigits'),
                ln = get('lastFourDigits');
            return fn + '******' + ln;
        },
        nameSpace: function(get) {
            var fn = get('holderName');
            return '  ' + fn;
        },
        fecExpiryMothYear: function(get) {
            var fn = get('expiryMonth'),
                ln = get('expiryYear');
            return fn + '/' + ln;
        }
    }
});