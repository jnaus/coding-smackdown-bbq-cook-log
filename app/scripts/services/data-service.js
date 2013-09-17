'use strict';

angular.module('codingSmackdownBbqCookLogApp')
    .service('DataService', ['dropstoreClient', 'uuidService', function DataService(dropstoreClient, uuidService) {
        var dataService = {
            // data members
            uid: ['0', '0', '0'],
            cookLogs: [],
            events: [],
            dataStore: null,

            linkAccount: function () {
                dropstoreClient.create({key: 'vmgj6yecetgfi6u'})
                    .authenticate({interactive: true})
                    .then(function (datastoreManager) {
                        console.log('completed authentication');
                        return datastoreManager.openDefaultDatastore();
                    }, function (error) {
                        console.log('auth failure');
                    })
                    .then(function (datastore) {
                        dataService.dataStore = datastore;

                        var eventTable = dataService.dataStore.getTable('eventLogs');
                        dataService.cookLogs = eventTable.query();
                    });
            },

            signOut: function () {
                dropstoreClient.signOut({mustInvalidate: true})
                    .then(function () {
                        console.log('signout successful');
                    }, function (error) {
                        console.log('signout failure');
                    });
                dataService.dataManager = null;
            },

            getCookLogs: function () {
                return dataService.cookLogs;
            },

            getEvents: function () {
                return dataService.events;
            },

            addCookLog: function (newEvent) {
                var cookLogTable = dataService.dataStore.getTable('cookLogs');
                var eventTable = dataService.dataStore.getTable('events');
                var cookLogId = uuidService.uuid();

                var eventRecord = new codingsmackdown.LogEntryRecord();
                eventRecord.id = cookLogId;
                eventRecord.title = newEvent.title;
                eventRecord.allDay = newEvent.allDay;
                eventRecord.start = newEvent.start;
                eventRecord.end = newEvent.end;

                var cookLog = cookLogTable.insert(eventRecord);

                if(cookLog){
                    newEvent.event.id = cookLogId;
                    eventTable.insert(newEvent.event);
                }

                dataService.cookLogs = cookLogTable.query();
                dataService.events = eventTable.query();
            },

            removeCookLog: function (event) {
                event.deleteRecord();

                var eventTable = dataService.dataStore.getTable('cookLogs');
                dataService.cookLogs = eventTable.query();
            }
        };

        return dataService;
    }]);
