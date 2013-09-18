'use strict';

angular.module('codingSmackdownBbqCookLogApp')
    .service('DataService', ['localStorageService', 'uuidService', function DataService(localStorageService, uuidService) {
        var dataService = {
            // data members
            cookLogs: [],

            getCookLogs: function () {
                if (!dataService.cookLogs || dataService.cookLogs.length === 0) {
                    dataService.cookLogs = localStorageService.get('BBQ_COOK_LOG');
                    if (!dataService.cookLogs || dataService.cookLogs.length === 0) {
                        dataService.cookLogs = [];
                    }
                }
                return dataService.cookLogs;
            },

            addCookLog: function (newLog) {
                newLog.id = uuidService.uuid();
                dataService.cookLogs.push(newLog);
                localStorageService.set('BBQ_COOK_LOG', dataService.cookLogs);
            },

            removeCookLog: function (log) {
            }
        };

        return dataService;
    }]);
