Ext.define('Admin.model.Dashboard.Transaccion', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'id',
            type: 'string'
        },
        {
            name: 'action',
            type: 'string'
        },
        {
            name: 'amount',
            type: 'int'
        },
        {
            name: 'brandId',
            type: 'int'
        },
        {
            name: 'currencyCode',
            type: 'string'
        },
        {
            name: 'trackingCode',
            type: 'string'
        },
        {
            name: 'expiryMonth',
            mapping: 'card.expiryMonth',
            type: 'string'
        },
        {
            name: 'expiryYear',
            mapping: 'card.expiryYear',
            type: 'string'
        },
        {
            name: 'firstSixDigits',
            mapping: 'card.firstSixDigits',
            type: 'string'
        },
        {
            name: 'lastFourDigits',
            mapping: 'card.lastFourDigits',
            type: 'string'
        },
        {
            name: 'holderName',
            mapping: 'card.holderName',
            type: 'string'
        },
        {
            name: 'expiryMonthYear',
            calculate: function(data) {
                return Ext.Date.parseDate(data.expiryMonth + data.expiryYear, 'mY');;
            }
        }


    ]
});