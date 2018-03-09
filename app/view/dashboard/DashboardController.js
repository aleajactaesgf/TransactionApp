Ext.define('Admin.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    requires: [
        'Ext.util.TaskRunner'
    ],
    onSelectRecord: function(model, selected, eOpts) {
        var me = this;
        var services = me.getReferences().services;
        var servicesVM = services.getViewModel();
        if (selected.length === 1) {
            servicesVM.setData(selected[0].getData());
            if (!services.isVisible()) {
                services.show();
            }
        } else {
            services.hide();
        }


    },
    onChangeCb: function(combo, newValue, oldValue, eOpts) {
        var me = this;
        var ref = me.getReferences();
        var url = 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions';
        var urlFinalAux = '';
        var urlFinal = '';

        if (!Ext.isEmpty(ref.cbType.getValue())) {
            urlFinalAux += 'action=' + ref.cbType.getValue();
        }
        if (!Ext.isEmpty(ref.cbCurrency.getValue())) {
            if (Ext.isEmpty(urlFinalAux)) {
                urlFinalAux += 'currencyCode=' + ref.cbCurrency.getValue();
            } else {
                urlFinalAux += '&currencyCode=' + ref.cbCurrency.getValue();
            }
        }
        if (!Ext.isEmpty(ref.cbOrder.getValue())) {
            if (Ext.isEmpty(urlFinalAux)) {
                urlFinalAux += 'orderBy=' + ref.cbOrder.getValue();
            } else {
                urlFinalAux += '&orderBy=' + ref.cbOrder.getValue();
            }
        }

        if (Ext.isEmpty(urlFinalAux)) {
            urlFinal = url;
        } else {
            urlFinal = url + '?' + urlFinalAux
        }


        var store = ref.todoGrid.getStore();
        store.proxy.url = urlFinal;
        store.load({
            scope: this,
            callback: function(records, operation, success) {
                if (success) {
                    //console.log('OK')
                } else {
                    //console.log('Error')
                }
            }
        })


    },
    onRefreshToggle: function(tool, e, owner) {
        var store, runner;

        if (tool.toggleValue) {
            this.clearChartUpdates();
        } else {
            store = this.getStore('networkData');

            if (store.getCount()) {
                runner = this.chartTaskRunner;

                if (!runner) {
                    this.chartTaskRunner = runner = new Ext.util.TaskRunner();
                }

                runner.start({
                    interval: 200,
                    run: function() {
                        // Move the first record to the end
                        var rec = store.first();

                        store.remove(rec);
                        store.add(rec);
                    }
                });
            }
        }

        // change the toggle value
        tool.toggleValue = !tool.toggleValue;
    },

    clearChartUpdates: function() {
        this.chartTaskRunner = Ext.destroy(this.chartTaskRunner);
    },

    destroy: function() {
        this.clearChartUpdates();
        this.callParent();
    },

    onHideView: function() {
        this.clearChartUpdates();
    }
});