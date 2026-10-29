chrome.action.onClicked.addListener(async()=>{
 const url=chrome.runtime.getURL('app.html');
 const tabs=await chrome.tabs.query({}); const existing=tabs.find(t=>t.url===url);
 if(existing) await chrome.tabs.update(existing.id,{active:true});
 else await chrome.tabs.create({url});
 const data=await chrome.storage.local.get('welcomed');
 if(!data.welcomed){await chrome.tabs.create({url:'https://web.whatsapp.com/'}); await chrome.storage.local.set({welcomed:true});}
});
