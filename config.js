module.exports = {
    mongo_url: process.env.MONGOHQ_URL || 'mongodb://localhost:27017/gtfs'
  , agencies: [
      /* Put agency_key names from gtfs-data-exchange.com.  
      Optionally, specify a download URL to use a dataset not from gtfs-data-exchange.com */
    // 'san-francisco-municipal-transportation-agency',
    // 'ac-transit',
    // 'city-of-seattle',
    // 'metropolitan-atlanta-rapid-transit-authority',
    // { agency_key: 'norta', url: 'http://samhashemi.com/20140629G.clean.zip'}
    // 'chapel-hill-transit',
    // 'triangle-transit',
    // 'durham-area-transit-authority',
    // 'capital-area-transit',
    // 'cary-transit',
    // 'city-of-madison',
    // 'capital-area-transit',
    // 'regional-transportation-district',
    // 'mountain-line',
    // 'auckland-transport',
    // 'lextran',
    // { agency_key: 'people-move', url: 'http://gtfs.muni.org/People_Mover.gtfs.zip' }
    //'sacramento-regional-transit',
    // { agency_key: 'carta', url: 'http://carta-gtfs.herokuapp.com/' }
    // 'indygo',
    // { agency_key: 't2estinffdgfdeefe', url: 'https://www.dropbox.com/s/tw4vkrw82vd6dpv/Compressed%20file.zip?dl=1'}
    // { agency_key: 'haiphong', url: 'https://www.dropbox.com/s/nxcbaiido3r4u9k/haiphong%20gtfs.zip?dl=1'}
    // { agency_key: 'thisisatest', url: 'https://www.dropbox.com/s/tefg5wfg187uq1f/try3.zip?dl=1' },
    { agency_key: 'zhengzhou', url: 'https://www.dropbox.com/s/tgpvenjeqt2vbyw/zhengzhou.zip?dl=1' }
    // { agency_key: 'haiphong', url: 'https://www.dropbox.com/s/rvowpa1v7vvlas9/haiphong.zip?dl=1' }
    ]
};
