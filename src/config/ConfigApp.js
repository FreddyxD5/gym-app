import Constants from 'expo-constants';

const isStandAloneApp = Constants.appOwnership = 'standalone';

const ConfigApp  ={
    URL: 'http://localhost:8000/admin',
    DEFAULTLANG:'es',
    THEMEMODE:"light",
    TESTDEVICE_ID : isStandAloneApp ?"EMULATOR":"EMULATOR"

}

export default ConfigApp;