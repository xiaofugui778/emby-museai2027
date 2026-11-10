const MAP = {
  'emby.museai2027.cc.cd': 'bb.emby.edu.kg',
  'okemby.museai2027.cc.cd': 'link00.okemby.org',
};
export default{async fetch(r){const u=new URL(r.url);u.hostname=MAP[u.hostname]||'bb.emby.edu.kg';u.protocol='https:';return fetch(u,r)}}
