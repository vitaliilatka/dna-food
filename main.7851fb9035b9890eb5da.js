(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2lKY":function(e,n){var a={checkbox:document.querySelector("#theme-switch-toggle"),body:document.querySelector("body")},i="light-theme",c="dark-theme";!function(){if(localStorage.getItem("theme")===c)return a.checkbox.checked=!0,void a.body.classList.add(""+c);a.body.classList.add(""+i)}(),a.checkbox.addEventListener("change",(function(e){var n=e.currentTarget;if(a.body.classList.toggle(""+c),a.body.classList.toggle(""+i),n.checked)return void localStorage.setItem("theme",c);localStorage.setItem("theme",i)}))},"4cH7":function(e,n,a){var i=a("mp5j");e.exports=(i.default||i).template({1:function(e,n,a,i,c){var l,t,r=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,o="function",d=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="menu__item">\r\n  <article class="card">\r\n    <img\r\n      src="'+d(typeof(t=null!=(t=u(a,"image")||(null!=n?u(n,"image"):n))?t:s)===o?t.call(r,{name:"image",hash:{},data:c,loc:{start:{line:5,column:11},end:{line:5,column:20}}}):t)+'"\r\n      alt="'+d(typeof(t=null!=(t=u(a,"name")||(null!=n?u(n,"name"):n))?t:s)===o?t.call(r,{name:"name",hash:{},data:c,loc:{start:{line:6,column:11},end:{line:6,column:19}}}):t)+'"\r\n      class="card__image"\r\n    />\r\n    <div class="card__content">\r\n      <h2 class="card__name">'+d(typeof(t=null!=(t=u(a,"name")||(null!=n?u(n,"name"):n))?t:s)===o?t.call(r,{name:"name",hash:{},data:c,loc:{start:{line:10,column:29},end:{line:10,column:37}}}):t)+'</h2>\r\n      <p class="card__price">\r\n        <i class="material-icons"> monetization_on </i>\r\n        '+d(typeof(t=null!=(t=u(a,"price")||(null!=n?u(n,"price"):n))?t:s)===o?t.call(r,{name:"price",hash:{},data:c,loc:{start:{line:13,column:8},end:{line:13,column:17}}}):t)+' кредитов\r\n      </p>\r\n\r\n      <p class="card__descr">\r\n      '+d(typeof(t=null!=(t=u(a,"description")||(null!=n?u(n,"description"):n))?t:s)===o?t.call(r,{name:"description",hash:{},data:c,loc:{start:{line:17,column:6},end:{line:17,column:21}}}):t)+'\r\n      </p>\r\n\r\n      <ul class="tag-list">\r\n'+(null!=(l=u(a,"each").call(r,null!=n?u(n,"ingredients"):n,{name:"each",hash:{},fn:e.program(2,c,0),inverse:e.noop,data:c,loc:{start:{line:21,column:8},end:{line:23,column:16}}}))?l:"")+'      </ul>\r\n    </div>\r\n\r\n    <button class="card__button button">\r\n      <i class="material-icons button__icon"> shopping_cart </i>\r\n      В корзину\r\n    </button>\r\n  </article>\r\n</li>\r\n'},2:function(e,n,a,i,c){return'        <li class="tag-list__item">'+e.escapeExpression(e.lambda(n,n))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,a,i,c){var l;return null!=(l=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(a,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,c,0),inverse:e.noop,data:c,loc:{start:{line:1,column:0},end:{line:33,column:9}}}))?l:""},useData:!0})},"6U4H":function(e){e.exports=JSON.parse('[{"id":"pelmeni-4-syra","name":"Пельмени 4 сыра","description":"Пельмени 4 сыра - это сочетание вкуса четырёх самых популярных сыров. Методом проб и ошибок, тестирования продукции мы пришли к совершенному вкусу этих пельменей. Для любителей расплавленного, тянущегося сыра это самое то👍🏼 Лайфхак от нас: покупаете пельмени свино-говяжьи и 4 сыра, варите и перемешиваете. Это невероятно вкусно😻 Попробуй раз и не сможешь остановиться😍.","image":"https://cdn1.savepice.ru/uploads/2021/1/27/f574cc285cbd2d75a3c7e0ea6a1c0a02-full.jpg","price":100,"ingredients":["Сыр чеддер","Сыр камамбер","Сыр моцарелла","Сыр пармезан","Мука"]},{"id":"chebureki-so-svininoi","name":"Чебуреки со свининой","description":"Чебуреки большие, сочные и нереально вкусные🤤","image":"https://cdn1.savepice.ru/uploads/2021/1/27/71fa9cfb80ad9cdfd99043a90c380ae5-full.jpg","price":150,"ingredients":["Свинной фарш","Лук","Чеснок","Мука"]},{"id":"blinchiki-shynka-syr","name":"Блинчики шинка + сыр","description":"Если Вы обожаете тянущийся сыр, если Вы очень любите кушать, но Вам лень готовить завтрак, если Вы на работе, а захотелось чего-то вкусненького - смело пишите нам. Мы исполним все Ваши прихоти 🙈😻 Удовлетворим вкус даже самых привередливых клиентов. Попробуй раз и не сможешь отказать себе в этом удовольствии☺️","image":"https://cdn1.savepice.ru/uploads/2021/1/27/3a5273e84e604a38d9c76bdd3937b98d-full.jpg","price":100,"ingredients":["Ветчина","Сыр","Мука"]},{"id":"blinchiki-s-kuricei-i-gribami","name":"Блинчики с курицей и грибами","description":"Замечательные и аппетитные блинчики с курицей и грибами для гурманов и не только","image":"https://cdn1.savepice.ru/uploads/2021/1/27/fd886b4d96b4af93df533719228a9a03-full.jpg","price":150,"ingredients":["Куриное филе","Шампиньоны","Мука"]},{"id":"pelmeni-svino-govyazhje","name":"Пельмени свино-говяжьи","description":"Тестируя пельмешки на качество мы возвращались в детство... пельмени, сметана, перец, сочный фарш внутри... оооо Боже это фантастика...Совсем скоро Вы опять почувствуете этот божественный вкус, Вы вспомните, что такое настоящие вкусные пельмени...","image":"https://cdn1.savepice.ru/uploads/2021/1/27/d80d8426372a296723181ed682b8a9a8-full.jpg","price":350,"ingredients":["Свинной фарш","Говяжий фарш","Мука"]},{"id":"vareniki-s-lososem","name":"Вареники с лососем","description":"После наших вареников Вы не сможете ответить нет. Только представьте: нежнейший лосось и сыр Филадельфия. Это сочетание оценят даже самые изысканные гурманы. Нежнейшие, сочные, вкусные. У меня слюнки текут только от одного упоминания о них.","image":"https://cdn1.savepice.ru/uploads/2021/1/27/eca1a25585748b3e571c49761cdbd4b9-full.jpg","price":170,"ingredients":["Лосось","Сыр филадельфия","Мука"]},{"id":"blinchiki-s-miodom","name":"Блинчики с мёдом","description":"Наш традиционный завтрак - это блины. Если Вы ещё не начинали своё утро с блинов - мы настоятельно рекомендуем попробовать😻 Блины есть не только сладкие, но и с соленой начинкой. У нас Вы найдёте блины на любой вкус, а также сможете придумать свою начинку и мы постараемся воплотить Вашу задумку в жизнь.","image":"https://cdn1.savepice.ru/uploads/2021/1/27/779f69f634154db01a8750442afaf612-full.jpg","price":270,"ingredients":["Мука","Мёд"]},{"id":"vareniki-s-klubnikoi","name":"Вареники с клубникой","description":"Вкуснейшие вареники с клубникой на десерт особенно со сметанкой - настоящее наслаждение","image":"https://cdn1.savepice.ru/uploads/2021/1/27/e6c2a27cca2e1239479c08c12c1bb177-full.jpg","price":240,"ingredients":["Клубника","Мука","Сметана"]},{"id":"paska-s-izumom","name":"Паска с изюмом","description":"Наполнены любовью, изюмом и пряностями 🥰 таких вкусных, даже мама не готовит, может быть бабушка ☺️ но, вашей бабушки в Варшаве наверное нет, а @d_n_a_food_warszawa есть всегда 😉😊","image":"https://cdn1.savepice.ru/uploads/2021/1/27/ef0156458e2dea178f4740649a158aca-full.jpg","price":240,"ingredients":["Изюм","Пряности","Яйца","Масло сливочное","Мука","Сладкая посыпка"]}]')},QfWi:function(e,n,a){"use strict";a.r(n);var i=a("4cH7"),c=a.n(i),l=a("6U4H"),t={menu:document.querySelector(".js-menu")},r=c()(l);t.menu.insertAdjacentHTML("beforeend",r);a("2lKY"),a("yjly")},yjly:function(e,n,a){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.7851fb9035b9890eb5da.js.map