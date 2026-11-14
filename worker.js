const MAP = {
  'okemby.museai2027.cc.cd': 'link01.okemby.org',
};
export default{async fetch(r){const u=new URL(r.url);u.hostname=MAP[u.hostname]||'bb.emby.edu.kg';u.protocol='https:';return fetch(u,r)}}
