
function parseURL(url) {
    return {
        host: url.hostname,
        port: url.port,
        query: url.search,
        params: (function(){
            var ret = {},
               seg = url.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        hash: url.hash.replace('#','')
    };
}

console.log(parseURL('https://shopee.vn/Android-SMART-TV-4K-UHD-Coocaa-50-inch-Wifi-tivi-vi%E1%BB%81n-m%E1%BB%8Fng-Model-50S5G-(V%C3%A0ng)-i.131201661.2827568895'))