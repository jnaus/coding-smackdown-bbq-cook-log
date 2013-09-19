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
                    dataService.deferredCookLogRequest.reject(apiError.responseText.error);
                }
                else {
                    dataService.cookLogs = angular.fromJson(fileContents);
                    dataService.deferredCookLogRequest.resolve(dataService.cookLogs);
                }
            },

            writeFileHandler: function(apiError, fileStat){
                if(apiError){
                    alert(apiError.responseText.error);
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

            getCookLog: function(cookLogId){
                var result = null;

                angular.forEach(dataService.cookLogs, function(event){
                    if(event.id === cookLogId){
                        if(event.title.indexOf('Pack') < 0 && event.title.indexOf('Pickup') < 0){
                            result = event;
                        }
                    }
                });

                return result;
            },

            addCookLog: function (newLog) {
                newLog.id = uuidService.uuid();

                if(!dataService.cookLogs){
                    dataService.cookLogs = [];
                }

                var shopDate = new Date(newLog.start);
                shopDate.setDate(shopDate.getDate() - 2);
                var shopEvent = new codingsmackdown.PrepEvent();
                shopEvent.id = newLog.id;
                shopEvent.title = 'Pickup Meat - ' + newLog.title;
                shopEvent.start = shopDate.toISOString();
                shopEvent.end = shopDate.toISOString();
                shopEvent.allDay = true;
                dataService.cookLogs.push(shopEvent);

                var packDate = new Date(newLog.start);
                packDate.setDate(packDate.getDate() - 1);
                var packEvent = new codingsmackdown.PrepEvent();
                packEvent.id = newLog.id;
                packEvent.title = 'Pack - ' + newLog.title;
                packEvent.start = packDate.toISOString();
                packEvent.end = packDate.toISOString();
                packEvent.allDay = true;
                dataService.cookLogs.push(packEvent);

                dataService.cookLogs.push(newLog);
                dataService.client.writeFile('bbq-cook-log.json', angular.toJson(dataService.cookLogs), {noOverwrite : false}, dataService.writeFileHandler);
            },

            removeCookLog: function (cookLogId) {
                var itemIndexes = [];

                for(var i = 0; i < dataService.cookLogs.length; i++){
                    if(dataService.cookLogs[i].id === cookLogId){
                        itemIndexes.push(i);
                    }
                }

                for(i = 0; i < itemIndexes.length; i++){
                    dataService.cookLogs.splice(itemIndexes[i], 1);
                }
            },

            saveCookLog: function(){
                dataService.client.writeFile('bbq-cook-log.json', angular.toJson(dataService.cookLogs), {noOverwrite : false}, dataService.writeFileHandler);
            }
        };

        return dataService;
    }]);
