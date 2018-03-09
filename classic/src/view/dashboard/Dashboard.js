Ext.define('Admin.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'admindashboard',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },

    layout: 'responsivecolumn',

    listeners: {
        hide: 'onHideView'
    },
    items: [{
            xtype: 'todo',
            reference: 'todo',

            // 60% width when viewport is big enough,
            // 100% when viewport is small
            userCls: 'big-60 small-100'
        },
        {
            xtype: 'services',
            reference: 'services',
            hidden: true,
            userCls: 'big-40 small-100'
        }

    ]

});