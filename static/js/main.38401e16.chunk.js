(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},24:function(e,a,t){},26:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(12),o=t.n(l),c=(t(24),t(2)),s=t.n(c),i=t(13),m=t(14),d=t(17),u=t(15),g=t(18),h=(t(26),t(16)),p=t.n(h),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).renderWelcomeMsg=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,a=e.getHours(),t=12,r=17;return a>=t&&a<=r?"afternoon":a>=r?"evening":"morning"},t.state={date:new Date,dayPortion:t.renderWelcomeMsg()},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"clockUpdate",value:function(){var e=this;setInterval((function(){e.setState({date:new Date,dayPortion:e.renderWelcomeMsg()})}),1e3)}},{key:"getDataAxios",value:function(){var e;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(p.a.get("https://flask-inow.herokuapp.com/api/grades"));case 2:e=a.sent,console.log(e.data);case 4:case"end":return a.stop()}}))}},{key:"render",value:function(){var e=this.state.date;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"welcomeHeader"},n.a.createElement("div",{className:"welcomeTime"},"Good ",this.state.dayPortion,", Katsuki."),n.a.createElement("div",{className:"dateLabel"},e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})," - ",e.toDateString())),n.a.createElement("div",{className:"linksParentContainer"},n.a.createElement("div",{className:"work linkContainer"},n.a.createElement("div",{className:"groupHeader workHeader"},n.a.createElement("div",{className:"headerText orangeHeader"},"Work"),n.a.createElement("hr",{className:"orangeLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://classroom.google.com/u/5",target:"_blank",rel:"noopener noreferrer"},"Google Classroom")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://drive.google.com/drive/u/5/my-drive",target:"_blank",rel:"noopener noreferrer"},"Google Drive")),n.a.createElement("li",null,n.a.createElement("a",{onClick:this.getDataAxios},"iNow")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.thesauraus.com/",target:"_blank",rel:"noopener noreferrer"},"Thesaurus")))),n.a.createElement("div",{className:"collegeApps linkContainer"},n.a.createElement("div",{className:"groupHeader collegeAppsHeader"},n.a.createElement("div",{className:"headerText blueHeader"},"ForensX"),n.a.createElement("hr",{className:"blueLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://forensx.io/",target:"_blank",rel:"noopener norefferer"},"Team Page")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://stackoverflow.com/",target:"_blank",rel:"noopener noreferrer"},"Stack Overflow")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://congressionalappchallenge.us/",target:"_blank",rel:"noopener noreferrer"},"Congressionals")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://spaceappschallenge.org/",target:"_blank",rel:"noopener noreferrer"},"NASA Space Apps")),n.a.createElement("li",null,n.a.createElement("a",{href:"spotify:playlist:1ElDbXgmaqhMWXHbAGNPSH"},"Spotify")))),n.a.createElement("div",{className:"messaging linkContainer"},n.a.createElement("div",{className:"groupHeader messagingHeader"},n.a.createElement("div",{className:"headerText greenHeader"},"Messaging"),n.a.createElement("hr",{className:"greenLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"discord://",target:"_blank",rel:"noopener noreferrer"},"Discord")),n.a.createElement("li",null,n.a.createElement("a",{href:"slack://",target:"_blank",rel:"noopener noreferrer"},"Slack")))),n.a.createElement("div",{className:"socialMedia linkContainer"},n.a.createElement("div",{className:"groupHeader socialMediaHeader"},n.a.createElement("div",{className:"headerText redHeader"},"Other Links"),n.a.createElement("hr",{className:"redLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.reddit.com/r/twice/",target:"_blank",rel:"noopener noreferrer"},"Twice")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.reddit.com/r/myouimina/",target:"_blank",rel:"noopener noreferrer"},"Mina")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://steamcommunity.com/id/katsukixyz",target:"_blank",rel:"noopener noreferrer"},"Steam")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitch.tv/katsukixyz/",target:"_blank",rel:"noopener noreferrer"},"Twitch"))))),this.clockUpdate())}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.38401e16.chunk.js.map