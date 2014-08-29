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
    // { agency_key: 'PhilTransit', url: 'http://www.dotc.gov.ph/images/stories/front/PhilTransit/gtfs_884416.zip'}
    { agency_key: 'haiphong', url: 'https://www.dropbox.com/s/nxcbaiido3r4u9k/haiphong%20gtfs.zip?dl=1'}
    ]
};
