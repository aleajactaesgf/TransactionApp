Ext.define('Admin.view.dashboard.Services', {
    extend: 'Ext.Panel',
    xtype: 'services',

    requires: [

    ],
    viewModel: {
        type: 'services'
    },
    cls: 'service-type-panel',
    height: 350,
    bodyPadding: 15,
    title: 'Card',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [

        {
            xtype: 'component',
            userCls: 'box x-fa fa-user',
            bind: {
                html: '{nameSpace}'
            },
            padding: '0 0 12 0'
        },
        {
            xtype: 'component',
            userCls: 'box x-fa fa-credit-card',
            bind: {
                html: '{numberCardHide}'
            },
            padding: '0 0 12 0'
        },
        {
            xtype: 'component',
            userCls: 'box x-fa fa-calendar-times-o',
            bind: {
                html: '{fecExpiryMothYear}'
            },
            padding: '0 0 12 0'
        }

    ]
});