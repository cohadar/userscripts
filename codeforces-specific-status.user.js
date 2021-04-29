// ==UserScript==
// @name        CodeForces Specific Status
// @namespace   cohadar
// @description On a problem page: adds a status button to second level menu that shows submissions for that problem only.
// @match     https://codeforces.com/problemset/problem/*/*
// @author       You
// @version     1
// @grant       none
// ==/UserScript==

function getMenu(menuClass) {
 	var temp = document.getElementsByClassName(menuClass);
 	if (temp == null) {
 		return null;
 	} else {
		return temp[0];
	}
}

function updateMenu(menu, contest, problem) {
	var li = document.createElement('li');
	var a = document.createElement('a');
	var linkText = document.createTextNode("Status-" + contest + problem);
	a.appendChild(linkText);
	a.title = "problem specific status";
	a.href = "https://codeforces.com/problemset/status/" + contest + "/problem/" + problem;
	li.appendChild(a);
	menu.appendChild(li);
}

function main() {
	var menu = getMenu("second-level-menu-list");
	if (menu == null) {
		alert("UserScript[Codeforces Specific Status] - Cannot find second level menu");
		return -1;
	}
	var re = /https:\/\/codeforces\.com\/problemset\/problem\/(\d+)\/(\D+)[\/]?/;
	var problem = re.exec(document.URL);
	if (problem == null) {
		alert("UserScript[Codeforces Specific Status] - Cannot parse url");
		return -2;
	}
	updateMenu(menu, problem[1], problem[2]);
	return 0;
}

main();
