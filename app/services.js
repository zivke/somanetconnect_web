var myServices = angular.module('myServices', []);

myServices.factory('WebsocketService', [
    function() {
        // We return this object to anything injecting our service
        var Service = {};

        var ws = new WebSocket("wss://127.0.0.1:62523");
        
        ws.onopen = function(){  
            console.log("Websocket to SOMANETconnect has been opened!");  
        };

        ws.onclose = function(){  
            console.log("Websocket to SOMANETconnect has been closeed!");  
        };
        
        ws.onmessage = function(message) {
            listener(JSON.parse(message.data));
        };

        function sendRequest(method, data) {
            var requestId = window.uuid.v4();
            var obj = {
                jsonrpc: "2.0",
                method: method,
                id: requestId
            };
            if(typeof data !== "undefined") {
                obj.params = data;
            }
            ws.send(JSON.stringify(obj));
            console.log("Sent data to websocket: ", obj);
            return requestId;
        }

        function listener(data) {
          var messageObj = data;
          console.log("Received data from websocket: ", messageObj);
        }

        Service.startCounter = function() {
            sendRequest("start-counter");
        }

        Service.stopCounter = function() {
            sendRequest("stop-counter");
        }

        return Service;
    }
]);