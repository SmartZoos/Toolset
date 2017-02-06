<template>
    <div style="height:100%;width:100%;">
        <game-information-modal ref="informationModal" v-if="activity" v-bind:activity="activity"></game-information-modal>
        <game-question-modal v-bind:question="question" v-if="question" ref="questionModal"></game-question-modal>
        <div id="map">
        </div>
    </div>
</template>

<script>
    function GameControls(controlDiv, map, playerMarker, vm) {
        var controlUI = document.createElement('div');
        controlUI.id = 'sz-map-controls'
        controlDiv.appendChild(controlUI);

        var informationControlItem = document.createElement('i');
        informationControlItem.className = 'mdi mdi-information-outline';
        informationControlItem.title = 'Game Info';
        controlUI.appendChild(informationControlItem);

        informationControlItem.addEventListener('click', function() {
            vm.$refs.informationModal.open();
        });

        var navigationControlItem = document.createElement('i');
        navigationControlItem.className = 'mdi mdi-navigation';
        navigationControlItem.title = 'Enable or disable position tracking';
        controlUI.appendChild(navigationControlItem);

        navigationControlItem.addEventListener('click', function() {
            if ( map.szTrackingEnabled ) {
                map.szTrackingEnabled = false;
                navigationControlItem.className = 'mdi mdi-navigation';
            } else {
                map.panTo(playerMarker.getPosition());
                google.maps.event.trigger(playerMarker, 'click');
                map.szTrackingEnabled = true;
                navigationControlItem.className = 'mdi mdi-navigation active';
            }
        });

        var exitControlIcon = document.createElement('i');
        exitControlIcon.className = 'mdi mdi-exit-to-app';
        exitControlIcon.title = 'Exit the game';
        controlUI.appendChild(exitControlIcon);

        exitControlIcon.addEventListener('click', function() {
            // TODO Make translatable
            var confirmation = confirm('Are you sure you want to exit the game?');

            if ( confirmation ) {
                window.location = window.SmartZoos.config.base_url;
            }
        });
    }

    export default {
        components: {
            'game-information-modal': require('./GameInformationModal.vue'),
            'game-question-modal': require('./GameQuestionModal.vue')
        },
        props: ['latitude', 'longitude'],
        mounted() {
            // XXX This should be something smaller, attached items are not needed
            this.activity = window.SmartZoos.data.activity;

            this.mapData = {};
            this.mapData.markers = [];
            this.mapData.mapOptions = {
                center: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.HYBRID,
                disableDefaultUI: true,
                styles: [
                    {
                        featureType: 'poi',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'transit.station',
                        stylers: [{visibility: 'off'}]
                  },
                ]
            }
            this.initMap();
        },
        data() {
            return {
                question: null,
                activity: null
            };
        },
        methods: {
            initMap: function() {
                var _this = this;

                this.mapData.map = new google.maps.Map(document.getElementById('map'), this.mapData.mapOptions);

                this.mapData.infoWindow = new google.maps.InfoWindow();

                this.initPlayerMarker();

                this.initGameControls();

                this.$parent.getGeoLocation(function(position) {
                    var map = _this.mapData.map,
                        playerMarker = _this.mapData.playerMarker;

                    playerMarker.setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    if ( map.szTrackingEnabled === true ) {
                        map.panTo(playerMarker.getPosition());
                    }
                    /*if ( markers.length > 0 ) {
                        detectAndActivateClosestMarker(playerMarker.getPosition(), markers, closestMarker);
                    }*/
                }, true);

                if ( window.SmartZoos.data.activity.questions ) {
                    var map = _this.mapData.map,
                        markers = _this.mapData.markers,
                        infoWindow = _this.mapData.infoWindow,
                        playerMarker = _this.mapData.playerMarker;

                    _.each(window.SmartZoos.data.activity.questions, function(question) {
                        var marker = new google.maps.Marker({
                            title: question.title,
                            position: {
                                lat: Number(question.latitude),
                                lng: Number(question.longitude)
                            },
                            map: map,
                            animation: google.maps.Animation.DROP
                        });
                        markers.push(marker);

                        marker.addListener('click', function() {
                            //var distance = google.maps.geometry.spherical.computeDistanceBetween(playerMarker.getPosition(), marker.getPosition());
                            // TODO Distance value should be global
                            //if ( distance <= 25 ) {
                                _this.question = question;
                                _this.$nextTick(function() {
                                    this.$refs.questionModal.open();
                                });
                            //}
                        });
                    });
                }

                this.$nextTick(function() {
                    this.$refs.informationModal.open();
                });
            },
            initGameControls: function() {
                var map = this.mapData.map,
                    playerMarker = this.mapData.playerMarker,
                    gameControlsDiv = document.createElement('div'),
                    gameControls = new GameControls(gameControlsDiv, map, playerMarker, this);

                gameControls.index = 1;
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(gameControlsDiv);
            },
            closeInfoWindow: function() {
                var infoWindow = this.mapData.infoWindow;

                if ( infoWindow && infoWindow.getMap() ) {
                    infoWindow.close();
                }
            },
            initPlayerMarker: function() {
                var circle,
                    playerMarker,
                    activeDistanceCircle,
                    _this = this,
                    map = this.mapData.map,
                    infoWindow = this.mapData.infoWindow;

                circle = {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: 'red',
                    fillOpacity: 1.0,
                    scale: 4.5,
                    strokeColor: 'white',
                    strokeWeight: 1
                };

                var playerMarker = new google.maps.Marker({
                    title: 'It\'s You!', // TODO Make sure that this is translated
                    position: {
                        lat: this.latitude,
                        lng: this.longitude
                    },
                    map: map,
                    icon: circle
                });

                playerMarker.addListener('click', function() {
                    _this.closeInfoWindow();
                    infoWindow.setContent(this.title);
                    infoWindow.open(map, this);
                });

                var activeDistanceCircle = new google.maps.Circle({
                    map: map,
                    radius: 25, // TODO This should be global
                    fillColor: 'blue',
                    fillOpacity: 0.25,
                    strokeColor: 'blue',
                    strokeWeight: 1,
                    strokeOpacity: 0.5
                });
                activeDistanceCircle.bindTo('center', playerMarker, 'position');

                google.maps.event.trigger(playerMarker, 'click');

                this.mapData.playerMarker = playerMarker;
            }
        }
    }
</script>