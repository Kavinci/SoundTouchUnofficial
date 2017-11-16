var Method = {
key: function(){},
select: function(){},
sources: function(){},
bassCapabilities: function(){},
bass: function(){},
getZone: function(getter){},
setZone: function(setter){},
addZoneSlave: function(){},
removeZoneSlave: function(){},
now_playing: function(){},
trackInfo: function(){},
volume: function(){},
presets: function(){},
info: function(){},
name: function(){}
};

var Variable = {
    ART_STATUS: {
        INVALID = 'invalid',
        SHOW_DEFAULT_IMAGE = 'show default image',
        DOWNLOADING = 'downloading',
        IMAGE_PRESENT = 'image present'
    },
    IPADDR,
    KEY_VALUE: {
        PLAY = 'play',
        PAUSE = 'pause',
        STOP = 'stop',
        PREV_TRACK = 'previous track',
        NEXT_TRACK = 'next track',
        THUMBS_UP = 'thumbs up',
        THUMBS_DOWN = 'thumbs down',
        BOOKMARK = 'bookmark',
        POWER = 'power',
        MUTE = 'mute',
        VOLUME_UP = 'volume up',
        VOLUME_DOWN = 'volume down',
        PRESET_1 = 'preset 1',
        PRESET_2 = 'preset 2',
        PRESET_3 = 'preset 3',
        PRESET_4 = 'preset 4',
        PRESET_5 = 'preset 5',
        PRESET_6 = 'preset 6',
        AUX_INPUT = 'aux input',
        SHUFFLE_OFF = 'shuffle off',
        SHUFFLE_ON = 'shuffle on',
        REPEAT_OFF = 'repeat off',
        REPEAT_ONE = 'repeat on',
        REPEAT_ALL = 'repeat all',
        PLAY_PAUSE = 'play pause',
        ADD_FAVORITE = 'add favorite',
        REMOVE_FAVORITE = 'remove favorite',
        INVALID_KEY = 'invalid key'
    },
    KEY_STATE: {
        press = 'press',
        release = 'release'
    }
    MACADDR,
    PLAY_STATUS: {
        PLAY_STATE = 'play',
        PAUSE_STATE = 'pause',
        STOP_STATE = 'stop',
        BUFFERING_STATE = 'buffering',
        INVALID_PLAY_STATUS = 'invalid play status'
        },
    PRESET_ID,
    SOURCE_STATUS: {
        UNAVAILABLE,
        READY
    },
    URL
}