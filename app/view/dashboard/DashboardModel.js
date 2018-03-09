Ext.define('Admin.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean',
        'Ext.data.proxy.JsonP'
    ],

    stores: {
        /* hddusage: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/area'
            }

        },
        quarterlyGrowth: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/bar'
            }
        },
        earnings: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/line'
            }
        },
        servicePerformance: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/pie'
            }

        },
        topMovies: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/movies'
            }
        },
        networkData: {
            autoLoad: true,
            model: 'Admin.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/full'
            }
        },
        visitors: {
            autoLoad: true,
            model: 'Admin.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/visitor'
            }
        },
        bounces: {
            autoLoad: true,
            model: 'Admin.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/counce'
            }
        },
        subscriptions: {
            autoLoad: true,
            model: 'Admin.model.Subscription',
            proxy: {
                type: 'api',
                url: '~api/subscriptions'
            }
        }, */
        todos: {
            model: 'Admin.model.Dashboard.Transaccion',
            groupField: 'brandId',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa('code-challenge' + ':' + 'payvisioner')
                },
                noCache: false,
                disableCaching: false,
                useDefaultXhrHeader: false,
                pageParam: undefined,
                startParam: undefined,
                limitParam: undefined,
                url: 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions',
                reader: {
                    type: 'json',
                    transform: function(o) {
                        return o;
                    }
                }
            }

        }
    }
});