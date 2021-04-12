const getLocation = (href) => {
    const match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}

const requestType = (payload) => {
    let response = {id:'1',name:'ss'};
    let url = getLocation(payload);
    console.log('url',url.pathname);
    if (url.pathname.indexOf('es') > -1 && url.pathname.indexOf('list') > -1) {
        response =  JSON.parse( require('../db/list.json'));
    } else if (url.pathname.indexOf('order') > -1) {
        response = JSON.parse( require('../db/order.json') )
    } else if (url.pathname.indexOf('episode') > -1) {
        response = require('../public/db/episodes.json');
    } else if (url.pathname.indexOf('user') > -1 || url.pathname.indexOf('profile') > -1) {
        response = JSON.parse( require('../db/sender.json') )
    }
    return response;
}

const request = {
        __esModule: true,
        get: (payload) => ( Promise.resolve(requestType(payload) )),
        post: (payload) => Promise.resolve({id: '1', name: 'ss'}),
        default: (payload) => Promise.resolve(requestType(payload))
}

export default request;
