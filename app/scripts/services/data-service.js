angular.module('codingSmackdownBbqCookLogApp')
    .service('dataService', ['$q', 'uuidService', function($q, uuidService) {
        'use strict';

        var dataService = {
            // data members
            // Insert your Dropbox app key here:
            DROPBOX_APP_KEY: 'vmgj6yecetgfi6u',
            // Exposed for easy access in the browser console.
            client: new Dropbox.Client({key: 'vmgj6yecetgfi6u'}),
            cookLogs: [],
            deferredCookLogRequest: null,

            authenticate: function() {
                dataService.client.authenticate();
            },

            readFileHandler: function(apiError, fileContents, fileStat, rangeInfo) {
                if(apiError){
                    dataService.deferredCookLogRequest.reject(apiError.responseText());
                }
                else {
                    dataService.cookLogs = angular.fromJson(fileContents);
                    dataService.deferredCookLogRequest.resolve(dataService.cookLogs);
                }
            },

            writeFileHandler: function(apiError, fileStat){
                if(apiError){
                    alert(apiError.responseText());
                }
            },

            getCookLogs: function () {
                if (!dataService.cookLogs || dataService.cookLogs.length === 0) {
                    dataService.deferredCookLogRequest = $q.defer();
                    dataService.client.readFile('bbq-cook-log.json', {httpCache: false}, dataService.readFileHandler);
                    return dataService.deferredCookLogRequest.promise;
                } else {
                    return $q.when(dataService.cookLogs);
                }
            },

            addCookLog: function (newLog) {
                newLog.id = uuidService.uuid();
                if(!dataService.cookLogs){
                    dataService.cookLogs = [];
                }
                dataService.cookLogs.push(newLog);
                dataService.client.writeFile('bbq-cook-log.json', angular.toJson(dataService.cookLogs), {noOverwrite : false}, dataService.writeFileHandler);
            },

            removeCookLog: function (log) {
            }
        };

        return dataService;
    }]);
