const config = {
    timerDefaults: {
        duration: 30, // default timer duration in minutes
        alertBefore: 5 // alert before duration in minutes
    },
    storageSettings: {
        localStorageKey: 'app_data',
        sessionStorageKey: 'session_data'
    },
    notificationSettings: {
        enabled: true,
        sound: 'notification.mp3'
    },
    audioSettings: {
        volume: 0.5, // default volume level
        mute: false
    },
    urls: {
        api: 'https://api.example.com',
        docs: 'https://docs.example.com'
    },
    imageValidation: {
        allowedFormats: ['jpg', 'png', 'gif'],
        maxSize: 5 // max size in MB
    },
    debounceTimings: {
        search: 300, // debounce time for search input in milliseconds
        resize: 400 // debounce time for window resize in milliseconds
    },
    phasesInformation: {
        initial: 'initial_phase',
        processing: 'processing_phase',
        completed: 'completed_phase'
    },
    materialIcons: {
        add: 'add_icon',
        edit: 'edit_icon',
        delete: 'delete_icon'
    }
};

export default config;