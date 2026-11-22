function QBOnloadMenu()
{
var cookie= document.cookie;
var reg= eval('/VTYPMOD/');
var res= reg.test(cookie);  
if(res)
{
var cookieA=cookie.split('; ')
var pair;
for(var i=0;i<cookieA.length;i++)
{   
 pair= cookieA[i].split('=')
 if(pair[0]=='VONOFF') ON_OFF=pair[1];
 else if(pair[0]=='VTYPMOD') MOD=pair[1];
}
}

if(typeof(MOD)=='undefined') MOD=2;   // default: Telex (was 1 = VNI)
if(typeof(ON_OFF)=='undefined') ON_OFF=1;
if(typeof(SPELL)=='undefined') SPELL=1;
if(typeof(NEWV)=='undefined') NEWV=0;

// The menu form is now static in the HTML (no document.writeln here).
// Just sync its controls with the saved/default state.
syncMenu();
STATUS=0;
}

function syncMenu()
{
var oFo=document.forms['VietdevMenu']
if(!oFo)return

if(ON_OFF==0)oFo.vtmnu[4].checked=true
else if(MOD>=0 && MOD<=3)oFo.vtmnu[MOD].checked=true
oFo.vtspe.checked=(SPELL==1)
oFo.vtacc.checked=(NEWV==1)
}

function setFocus()
{
if(typeof(TXT)!="undefined" && TXT) TXT.focus();
else if(typeof(FID)!="undefined" && FID && document.getElementById(FID)) 
 document.getElementById(FID).contentWindow.focus()
}

function changeMode(mod)
{
if(mod==-1) ON_OFF=0
else ON_OFF=1
MOD= mod 
QBsetCookie()
}


function updCtrl()
{
syncMenu()
QBsetCookie()
}

QBOnloadMenu()
