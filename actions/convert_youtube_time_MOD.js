module.exports={name:"YouTube Time Converter",section:"Audio Control",subtitle:function(data){return `Convert into ${data.varName}`;},author:"General Wrex",version:"1.8.6",short_description:"Converts YouTube Time Code into numeric time.",variableStorage:function(data,varType){const type=parseInt(data.storage);if(type!==varType)return;return([data.varName,'Time']);},fields:["ytTime","storage","varName"],html:function(isEvent,data){return `
<div>
		<p>
			<u>Mod Info:</u><br>
			Created by General Wrex! Edited by mjmalec
		</p>
</div><br>
<div>
<br>
    YouTube Time:<br>
	<textarea id="ytTime" class="round" style="width: 35%; resize: none;" type="textarea" rows="1" cols="20"></textarea><br>
	<div style="float: left; width: 35%;">
		Store In:<br>
		<select id="storage" class="round">
			${data.variables[1]}
		</select>
	</div>
	<div id="varNameContainer" style="float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName" class="round" type="text"><br>
	</div>
</div>`;},init:function(){},action:function(cache){const data=cache.actions[cache.index];const storage=parseInt(data.storage);const varName=this.evalMessage(data.varName,cache);const ytTime=this.evalMessage(data.ytTime,cache);function parseDuration(PT,format){var output=[];var durationInSec=0;var matches=PT.match(/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)W)?(?:(\d*)D)?T?(?:(\d*)H)?(?:(\d*)M)?(?:(\d*)S)?/i);var parts=[{pos:1,multiplier:86400*365},{pos:2,multiplier:86400*30},{pos:3,multiplier:604800},{pos:4,multiplier:86400},{pos:5,multiplier:3600},{pos:6,multiplier:60},{pos:7,multiplier:1}];for(var i=0;i<parts.length;i++){if(typeof matches[parts[i].pos]!='undefined'){durationInSec+=parseInt(matches[parts[i].pos])*parts[i].multiplier;}}
var totalSec=durationInSec;if(durationInSec>3599){output.push(parseInt(durationInSec/3600));durationInSec%=3600;}
output.push(('0'+parseInt(durationInSec/60)).slice(-2)*60+(('0'+parseInt(durationInSec%60)).slice(-2)));if(format===undefined)
return totalSec;};this.storeValue(parseDuration(ytTime),storage,varName,cache);this.callNextAction(cache);},mod:function(DBM){}};