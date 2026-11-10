export default{async fetch(r){const u=new URL(r.url);u.hostname='bb.emby.edu.kg';u.protocol='https:';return fetch(u,r)}}
