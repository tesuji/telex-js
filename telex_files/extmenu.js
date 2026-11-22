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

if(typeof(MOD)=='undefined') MOD=1;
if(typeof(ON_OFF)=='undefined') ON_OFF=1;
if(typeof(SPELL)=='undefined') SPELL=1;
if(typeof(NEWV)=='undefined') NEWV=0;

/***** Editting SKIN of CheckBox here *****/
var vdmenu= "<form name=VietdevMenu><table border=1 cellpadding=2 cellspacing=0><tr valign=center><td bgcolor=#a0a0ff><b>\
Viettyping:<input name=vtmnu type=radio onclick='setFocus();changeMode(0)' CHECKED0>Auto[F8]&nbsp;\
<input name=vtmnu type=radio onclick='setFocus();changeMode(1)' CHECKED1>VNI[F8]&nbsp;\
<input name=vtmnu type=radio onclick='setFocus();changeMode(2)' CHECKED2>Telex[F8]&nbsp;\
<input name=vtmnu type=radio onclick='setFocus();changeMode(3)' CHECKED3>VIQR[F8]&nbsp;\
<input name=vtmnu type=radio onclick='setFocus();changeMode(-1)' CHECKED5>Off[F12]&nbsp;\
<input name=vtspe type=checkbox onclick='setFocus();SPELL=(this.checked)?1:0;QBsetCookie()' CHECKED6>Spelling[F9]&nbsp;\
<input name=vtacc type=checkbox onclick='setFocus();NEWV=(this.checked)?1:0;QBsetCookie()' CHECKED7>newAccent[F7]\
</b></td></tr></table></form>";
/***** End Editting SKIN ******/

var CHECKED = Array('','','','','','','','');
if(ON_OFF==0) CHECKED[5]="checked"
else CHECKED[MOD]="checked"
if(SPELL==1) CHECKED[6]='checked'
if(NEWV==1) CHECKED[7]='checked'

for(var i=0; i<8; i++)
 vdmenu= vdmenu.replace("CHECKED"+i,CHECKED[i])

document.writeln(vdmenu)
STATUS=0;
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
var oFo=document.forms['VietdevMenu']
if(!oFo)return

if(ON_OFF==0)oFo.vtmnu[4].checked=true
else if(MOD==0)oFo.vtmnu[0].checked=true
else if(MOD==1)oFo.vtmnu[1].checked=true
else if(MOD==2)oFo.vtmnu[2].checked=true
else if(MOD==3)oFo.vtmnu[3].checked=true
oFo.vtspe.checked=(SPELL==1)?true:false
oFo.vtacc.checked=(NEWV==1)?true:false
QBsetCookie()
}

QBOnloadMenu()
