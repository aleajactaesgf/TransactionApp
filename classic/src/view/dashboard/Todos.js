Ext.define('Admin.view.dashboard.Todos', {
    extend: 'Ext.panel.Panel',
    xtype: 'todo',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.grid.feature.Grouping'
    ],

    cls: 'todo-list shadow-panel',

    title: 'Transactions',
    height: 350,
    bodyPadding: 15,
    layout: 'fit',
    items: [{
        xtype: 'gridpanel',
        cls: 'dashboard-todo-list',
        reference: 'todoGrid',
        header: false,
        title: 'My Grid Panel',
        //hideHeaders: true,
        /* scrollable: {
            x: false,
            y: false
        }, */
        bind: {
            store: '{todos}'
        },
        features: [{
            ftype: 'grouping',
            groupHeaderTpl: '{[ values.rows[0].data.holderName]} - {[ values.rows.length > 1  ? values.rows.length+" Transactions" : values.rows.length+" Transaction" ]}',
            startCollapsed: false

        }],
        listeners: {
            selectionchange: 'onSelectRecord'
        },
        columns: [{
                text: 'TrackingCode',
                dataIndex: 'trackingCode',
                flex: 2
            },
            {
                text: 'Type',
                dataIndex: 'action',
                flex: 1
            },
            {
                text: 'Amount',
                dataIndex: 'amount',
                flex: 1,
                renderer: function(v, column, record) {
                    return record.get('amount') + ' ' + record.get('currencyCode')
                }
            }
            /* ,
                        {
                            dataIndex: 'currencyCode',
                            //formatter: 'date("m/Y")',
                            text: 'Moneda',
                            flex: 1
                        } */

        ],

        dockedItems: [{
                xtype: 'container',
                layout: 'hbox',
                dock: 'bottom',
                padding: '10 0 0 0',
                items: [{
                        xtype: 'combobox',
                        editable: false,
                        reference: 'cbType',
                        flex: 1,
                        hideLabel: true,
                        emptyText: 'Type',
                        queryMode: 'local',
                        store: {
                            data: [
                                { "abbr": "payment", "name": "payment" },
                                { "abbr": "credit", "name": "credit" }
                            ]
                        },
                        displayField: 'name',
                        valueField: 'abbr',
                        triggers: {
                            clear: {
                                type: 'clear'
                            }
                        },
                        listeners: {
                            change: 'onChangeCb'
                        }
                    },
                    {
                        xtype: 'combobox',
                        editable: false,
                        reference: 'cbCurrency',
                        flex: 1,
                        hideLabel: true,
                        emptyText: 'Currency',
                        queryMode: 'local',
                        store: {
                            data: [
                                { "abbr": "EUR", "name": "EUR" },
                                { "abbr": "USD", "name": "USD" },
                                { "abbr": "JPY", "name": "JPY" }
                            ]
                        },
                        displayField: 'name',
                        valueField: 'abbr',
                        triggers: {
                            clear: {
                                type: 'clear'
                            }
                        },
                        listeners: {
                            change: 'onChangeCb'
                        }
                    },
                    {
                        xtype: 'combobox',
                        editable: false,
                        reference: 'cbOrder',
                        flex: 1,
                        hideLabel: true,
                        emptyText: 'Order',
                        queryMode: 'local',
                        store: {
                            data: [
                                { "abbr": "date", "name": "DESC" },
                                { "abbr": "-date", "name": "ASC" }
                            ]
                        },
                        displayField: 'name',
                        valueField: 'abbr',
                        triggers: {
                            clear: {
                                type: 'clear'
                            }
                        },
                        listeners: {
                            change: 'onChangeCb'
                        }
                    }

                ]
            }]
            /*,
                    selModel: {
                        selType: 'checkboxmodel'
                    }*/
    }]
});