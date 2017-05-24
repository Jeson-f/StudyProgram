			var oBanner = document.getElementById("banner");
			var oDcent = document.getElementById("dcent");
			var oNav = document.getElementById("nav");
			var aBanLi = oBanner.getElementsByTagName("li");
			var aNavLi = oNav.getElementsByTagName("li");
      var oallBgC = ["#fead15","#fcd33d","#ff9a2e","#ffcb17","#b957e5","#ecbc2c"]
			var oAllBg = ["http://vmxiang-file.oss-cn-shenzhen.aliyuncs.com/images/partner.jpg","http://vmxiang-file.oss-cn-shenzhen.aliyuncs.com/images/0.jpg", "http://vmxiang-file.oss-cn-shenzhen.aliyuncs.com/images/2.jpg", "http://vmxiang-file.oss-cn-shenzhen.aliyuncs.com/images/3.jpg","http://vmxiang-file.oss-cn-shenzhen.aliyuncs.com/images/QqBanner.jpg", "http://vmxiang-file.oss-cn-shenzhen.aliyuncs.com/images/4.jpg"];
			var oHref_ban = [ 'http://www.vmxiang.com/webpage-partner.html','http://www.vmxiang.com/webpage-neW5183Club.html','http://www.vmxiang.com/webpage-vip.html','http://www.vmxiang.com/webpage-tghy.html', 'http:www.vmxiang.com/webpage-qqhy.html','http://www.vmxiang.com/webpage-tyzzs.html']
			var aNavTxt = [ '合伙人','5183俱乐部', 'VIP会员', '铁杆会员','亲情会员','特约赞助商']
			var aNavBg = ['http:www.vmxiang.com/template/dean_edu_160115/deancss/ad/ico5.png','http:www.vmxiang.com/template/dean_edu_160115/deancss/ad/ico1.png', 'http:www.vmxiang.com/template/dean_edu_160115/deancss/ad/ico2.png', 'http:www.vmxiang.com/template/dean_edu_160115/deancss/ad/ico3.png', 'http:www.vmxiang.com/template/dean_edu_160115/deancss/ad/ico4.png','http:www.vmxiang.com/template/dean_edu_160115/deancss/ad/ico0.png']
			var len = aNavTxt.length;
			var num = 0;
			for (var i = 0; i < len; i++) {
				oBanner.innerHTML += '<li></li>';
				oNav.innerHTML += '<li><a href="' + oHref_ban[i] + '">' + aNavTxt[i] + '</a></li>'
				aNavLi[i].style.background = "url(" + aNavBg[i] + ") no-repeat 38px";
			}
			function fnBanBg() {
				aBanLi[num].style.background = "url(" + oAllBg[num] + ") no-repeat center";
				aBanLi[num].style.backgroundColor = oallBgC[num];
				aBanLi[num].className = 'Block';
				aBanLi[num].innerHTML = '<a href="' + oHref_ban[num] + '"></a>';
				aNavLi[num].style.background = "#e35f13 url(" + aNavBg[num] + ") no-repeat 38px";
			}
			fnBanBg();
			for (var i = 0; i < len; i++) {
				aNavLi[i].a = i;
				aNavLi[i].onmousemove = function () {
					for (var j = 0; j < aNavLi.length; j++) {
						aNavLi[j].style.backgroundColor = "rgba(36, 36, 36, 0)";
						aBanLi[j].className = 'None';
						aBanLi[j].innerHTML = '';
					}
					this.style.background = "#e35f13 url(" + aNavBg[this.a] + ") no-repeat 38px";
					num = this.a
					fnBanBg();
				}
			}
