(this.webpackJsonpkinopoisk=this.webpackJsonpkinopoisk||[]).push([[0],{27:function(e,a,t){e.exports=t(58)},32:function(e,a,t){},33:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),s=t.n(r),o=(t(32),t(9)),i=t(8),c=t(3),u=t(4),m=t(6),b=t(5),v=(t(33),t(61)),p=t(60),h="https://api.themoviedb.org/3",d="2bf9f43ff01f800a4b2838b95fcce99e",g=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,n){fetch(e,a).then((function(e){if(e.status<400)return t(e.json());throw e})).catch((function(e){return e.json().then((function(e){return n(e)}))}))}))},f=t(7),_=t.n(f),y=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).getUser=function(){e.setState({submitting:!0}),g("".concat(h,"/authentication/token/new?api_key=").concat(d)).then((function(a){return g("".concat(h,"/authentication/token/validate_with_login?api_key=").concat(d),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify({username:e.state.username,password:e.state.password,request_token:a.request_token})})})).then((function(e){return g("".concat(h,"/authentication/session/new?api_key=").concat(d),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify({request_token:e.request_token})})})).then((function(a){return e.props.updateSessionId(a.session_id),g("".concat(h,"/account?api_key=").concat(d,"&session_id=").concat(a.session_id))})).then((function(a){e.setState({submitting:!1},(function(){e.props.updateUser(a)}))})).catch((function(a){e.setState((function(e){return{errors:Object(i.a)(Object(i.a)({},e.errors),{},{base:a.status_message}),submitting:!1}}))}))},e.validateFields=function(){var a={};return e.state.username.length<5&&(a.username="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d, \u043c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"),e.state.password.length<6&&(a.password="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c, \u043c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0437\u0430\u0447\u0435\u043d\u0438\u0439"),e.state.password!==e.state.repeatPassword&&(a.repeatPassword="\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b"),a},e.onChange=function(a){var t=a.target,n=t.name,l=t.value;e.setState((function(e){var a,t;return t={},Object(o.a)(t,n,l),Object(o.a)(t,"errors",Object(i.a)(Object(i.a)({},e.errors),{},(a={},Object(o.a)(a,n,null),Object(o.a)(a,"base",null),a))),t}))},e.handleBlur=function(a){var t=a.target.name,n=e.validateFields(),l=n[t];Object.keys(n).length>0&&e.setState((function(e){return{errors:Object(i.a)(Object(i.a)({},e.errors),{},Object(o.a)({},t,l))}}))},e.onSubmit=function(a){a.preventDefault();var t=e.validateFields();Object.keys(t).length>0?e.setState({errors:Object(i.a)({},t)}):e.getUser()},e.getClassForInpur=function(a){return _()("form-control",{invalid:e.state.errors[a]})},e.state={username:"",password:"",repeatPassword:"",submitting:!1,errors:{}},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.repeatPassword,r=e.submitting,s=e.errors;return l.a.createElement("form",{className:"form-group login-form container pl-4 pr-4",onSubmit:this.onSubmit},l.a.createElement("div",{className:"login-form__title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),l.a.createElement("label",{htmlFor:"username"},"\u041b\u043e\u0433\u0438\u043d:"),l.a.createElement("input",{className:this.getClassForInpur("username"),type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d",id:"username",name:"username",value:a,onChange:this.onChange,onBlur:this.handleBlur}),s.username&&l.a.createElement("div",{className:"invalid-feedback pl-2"},s.username),l.a.createElement("label",{htmlFor:"password",className:"mt-2"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),l.a.createElement("input",{className:this.getClassForInpur("password"),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",value:t,onChange:this.onChange,onBlur:this.handleBlur}),s.password&&l.a.createElement("div",{className:"invalid-feedback pl-2"},s.password),l.a.createElement("label",{htmlFor:"repeatPassword",className:"mt-2"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"),l.a.createElement("input",{className:this.getClassForInpur("repeatPassword"),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"repeatPassword",name:"repeatPassword",value:n,onChange:this.onChange,onBlur:this.handleBlur}),s.repeatPassword&&l.a.createElement("div",{className:"invalid-feedback pl-2"},s.repeatPassword),l.a.createElement("button",{type:"submit",className:"btn btn-success text-center col-12 mt-4 pb-2",disabled:r},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),l.a.createElement("div",{className:"invalid-feedback pl-2 mt-2 text-center"},s.base))}}]),t}(l.a.Component),O=function(e){return l.a.createElement(K.Consumer,null,(function(a){return l.a.createElement(y,Object.assign({updateUser:a.updateUser,updateSessionId:a.updateSessionId},e))}))},E=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.state={showModal:!1},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-outline-warning",type:"button",onClick:this.toggleModal},"\u0412\u043e\u0439\u0442\u0438"),l.a.createElement(v.a,{isOpen:this.state.showModal,toggle:this.toggleModal},l.a.createElement(p.a,null,l.a.createElement(O,null))))}}]),t}(l.a.Component),N=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement("div",null,l.a.createElement("img",{width:"40",className:"rounded-circle",src:"https://secure.gravatar.com/avatar/".concat(e.avatar.gravatar.hash,".jpg?s=64"),alt:""}))}}]),t}(l.a.Component),j=function(e){return l.a.createElement(K.Consumer,null,(function(a){return l.a.createElement(N,Object.assign({user:a.user},e))}))},w=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"pt-3 pb-3 row col-12"},l.a.createElement("div",{className:"title col-2"},l.a.createElement("p",{className:"title__name"},"Kino",l.a.createElement("span",{className:"title__sub-name"},"poisk"))),l.a.createElement("div",{className:"search col-8"}),l.a.createElement("div",{className:"login col-2"},e?l.a.createElement(j,null):l.a.createElement(E,null))))}}]),t}(l.a.Component),C=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.sort_by,t=e.onChangeFilters,n=e.sortByOptions;return l.a.createElement("select",{className:"form-control",name:"sort_by",id:"sort_by",value:a,onChange:t},n.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)})))}}]),t}(l.a.PureComponent);C.defaultProps={sortByOptions:[{label:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 (\u0443\u0431\u044b\u0432\u0430\u043d\u0438\u0435)",value:"popularity.desc"},{label:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 (\u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u0435)",value:"popularity.asc"},{label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 (\u0443\u0431\u044b\u0432\u0430\u043d\u0438\u0435)",value:"vote_average.desc"},{label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 (\u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u0435)",value:"vote_average.asc"}]};var k=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.onChangePage,t=e.page,n=e.total_pages;return l.a.createElement("div",{className:"pagination form-group row col-12"},l.a.createElement("button",{type:"button",className:"btn btn-light col-4",onClick:a.bind(null,t-1),disabled:1===t},"\u041d\u0430\u0437\u0430\u0434"),l.a.createElement("div",{className:"col-4 total-pages"},"".concat(t," \u0438\u0437 ").concat(n)),l.a.createElement("button",{type:"button",className:"btn btn-light col-4",onClick:a.bind(null,t+1),disabled:t===Number(n)},"\u0412\u043f\u0435\u0440\u0435\u0434"))}}]),t}(l.a.Component),S=t(14),F=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.primary_release_year_options,t=e.primary_release_year,n=e.onChangeFilters;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"filters-label primary-release-year",htmlFor:"primary_release_year"},"\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430"),l.a.createElement("select",{className:"form-control",name:"primary_release_year",id:"primary_release_year",value:t,onChange:n},a.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)}))))}}]),t}(l.a.Component);F.defaultProps={primary_release_year_options:Object(S.a)([{label:"1950",value:"1950"},{label:"1951",value:"1951"},{label:"1952",value:"1952"},{label:"1953",value:"1953"},{label:"1954",value:"1954"},{label:"1955",value:"1955"},{label:"1956",value:"1956"},{label:"1957",value:"1957"},{label:"1958",value:"1958"},{label:"1959",value:"1959"},{label:"1960",value:"1960"},{label:"1961",value:"1961"},{label:"1962",value:"1962"},{label:"1963",value:"1963"},{label:"1964",value:"1964"},{label:"1965",value:"1965"},{label:"1966",value:"1966"},{label:"1967",value:"1967"},{label:"1968",value:"1968"},{label:"1969",value:"1969"},{label:"1970",value:"1970"},{label:"1971",value:"1971"},{label:"1972",value:"1972"},{label:"1973",value:"1973"},{label:"1974",value:"1974"},{label:"1975",value:"1975"},{label:"1976",value:"1976"},{label:"1977",value:"1977"},{label:"1978",value:"1978"},{label:"1979",value:"1979"},{label:"1980",value:"1980"},{label:"1981",value:"1981"},{label:"1982",value:"1982"},{label:"1983",value:"1983"},{label:"1984",value:"1984"},{label:"1985",value:"1985"},{label:"1986",value:"1986"},{label:"1987",value:"1987"},{label:"1988",value:"1988"},{label:"1989",value:"1989"},{label:"1990",value:"1990"},{label:"1991",value:"1991"},{label:"1992",value:"1992"},{label:"1993",value:"1993"},{label:"1994",value:"1994"},{label:"1995",value:"1995"},{label:"1996",value:"1996"},{label:"1997",value:"1997"},{label:"1998",value:"1998"},{label:"1999",value:"1999"},{label:"2000",value:"2000"},{label:"2001",value:"2001"},{label:"2002",value:"2002"},{label:"2003",value:"2003"},{label:"2004",value:"2004"},{label:"2005",value:"2005"},{label:"2006",value:"2006"},{label:"2007",value:"2007"},{label:"2008",value:"2008"},{label:"2009",value:"2009"},{label:"2010",value:"2010"},{label:"2011",value:"2011"},{label:"2012",value:"2012"},{label:"2013",value:"2013"},{label:"2014",value:"2014"},{label:"2015",value:"2015"},{label:"2016",value:"2016"},{label:"2017",value:"2017"},{label:"2018",value:"2018"},{label:"2019",value:"2019"},{label:"2020",value:"2020"},{label:"2021",value:"2021"},{label:"2022",value:"2022"},{label:"2023",value:"2023"},{label:"2024",value:"2024"},{label:"2025",value:"2025"}])};var P=function(e){var a=e.with_genres,t=e.allGenres,n=e.onChangeGenres;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"filters-label genre-label",htmlFor:"with_genres"},"\u0416\u0430\u043d\u0440\u044b"),l.a.createElement("div",{className:"genres",id:"with_genres"},t.map((function(e){return l.a.createElement("div",{className:"genres__item",key:e.id},l.a.createElement("input",{type:"checkbox",value:e.id,checked:-1!==a.indexOf(String(e.id)),className:"genres__item__checkbox",name:"with_genres",id:e.id,onChange:n}),l.a.createElement("label",{className:"genres__item__label",htmlFor:e.id},e.name))}))))};P.defaultProps={allGenres:[]};var M=P,I=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onChangeGenres=function(a){var t=a.target,n=t.name,l=t.value,r=e.props,s=r.onChangeFilters,o=r.with_genres;-1===o.indexOf(String(l))?s({target:{name:n,value:[].concat(Object(S.a)(o),[l])}}):s({target:{name:n,value:o.filter((function(e){return e!==l}))}})},e.state={allGenres:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,a="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(d,"&language=ru-RU");return fetch(a).then((function(e){return e.json()})).then((function(a){e.setState({allGenres:a.genres})}))}},{key:"render",value:function(){return l.a.createElement(M,{with_genres:this.props.with_genres,allGenres:this.state.allGenres,onChangeGenres:this.onChangeGenres})}}]),t}(l.a.PureComponent),U=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.filters,t=e.onChangeFilters,n=e.page,r=e.onChangePage,s=e.total_pages,o=e.resetFilters;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"mb-3"},l.a.createElement("div",{className:"sort form-group"},l.a.createElement("label",{className:"filters-label",htmlFor:"sort_by"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),l.a.createElement(C,{sort_by:a.sort_by,onChangeFilters:t})),l.a.createElement(k,{total_pages:s,onChangePage:r,page:n}),l.a.createElement("div",{className:"sort form-group mt-3"},l.a.createElement("label",{className:"filters-label",htmlFor:"sort_by"},"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c"),l.a.createElement(F,{primary_release_year:a.primary_release_year,onChangeFilters:t}),l.a.createElement(I,{with_genres:a.with_genres,onChangeFilters:t}),l.a.createElement("button",{onClick:o,className:"btn btn-light col-12 mt-2",type:"button",style:{background:"#e2e6ea"}},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b"))))}}]),t}(l.a.Component),B=[{month:"01",shortName:"\u044f\u043d\u0432",fullName:"\u044f\u043d\u0432\u0430\u0440\u044c"},{month:"02",shortName:"\u0444\u0435\u0432",fullName:"\u0444\u0435\u0432\u0440\u0430\u043b\u044c"},{month:"03",shortName:"\u043c\u0430\u0440",fullName:"\u043c\u0430\u0440\u0442"},{month:"04",shortName:"\u0430\u043f\u0440",fullName:"\u0430\u043f\u0440\u0435\u043b\u044c"},{month:"05",shortName:"\u043c\u0430\u0439",fullName:"\u043c\u0430\u0439"},{month:"06",shortName:"\u0438\u044e\u043d",fullName:"\u0438\u044e\u043d\u044c"},{month:"07",shortName:"\u0438\u044e\u043b",fullName:"\u0438\u044e\u043b\u044c"},{month:"08",shortName:"\u0430\u0432\u0433",fullName:"\u0430\u0432\u0433\u0443\u0441\u0442"},{month:"09",shortName:"\u0441\u0435\u043d",fullName:"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c"},{month:"10",shortName:"\u043e\u043a\u0442",fullName:"\u043e\u043a\u0442\u044f\u0431\u0440\u044c"},{month:"11",shortName:"\u043d\u043e\u044f",fullName:"\u043d\u043e\u044f\u0431\u0440\u044c"},{month:"12",shortName:"\u0434\u0435\u043a",fullName:"\u0434\u0435\u043a\u0430\u0431\u0440\u044c"}],x=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).getMonthNameOnMonthNumber=function(){var a=e.props.movie;return B.filter((function(e){return e.month===a.release_date.substr(5,2)}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.movie,a="".concat(e.release_date.substr(8,2)," ").concat(this.getMonthNameOnMonthNumber()[0].shortName," ").concat(e.release_date.substr(0,4));return l.a.createElement("div",{className:"movie-card"},l.a.createElement("img",{className:"movie-card__img",src:e.poster_path?"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path):"not-foundPoster.png",alt:""}),l.a.createElement("div",{className:"movie-card__desc"},l.a.createElement("p",{className:"movie-card__desc__title"},e.title),l.a.createElement("p",{className:"movie-card__desc__release-date"},a)))}}]),t}(l.a.Component),G=function(e){return l.a.createElement(l.a.Fragment,null,e.movies.map((function(e){return l.a.createElement(x,{movie:e,key:e.id})})))};G.defaultProps={movies:[]};var D=G,T=t(23),q=t.n(T),J=t(24),A=t.n(J),R=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).getMovies=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a.sort_by,l=a.primary_release_year,r=a.with_genres,s=e.props.onChangeTotalPages,o={api_key:d,language:"ru-RU",sort_by:n,page:t,primary_release_year:l,with_genres:r.join(",")},i="\n    ".concat(h,"/discover/movie?").concat(A.a.stringify(o));return fetch(i).then((function(e){return e.json()})).then((function(a){s(a.total_pages),e.setState({movies:a.results})}))},e.state={movies:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.filters,t=e.page;this.getMovies(a,t)}},{key:"componentDidUpdate",value:function(e){var a=this.props,t=a.onChangePage,n=a.filters,l=a.page;q.a.isEqual(e.filters,n)||(t(1),this.getMovies(n)),e.page!==l&&this.getMovies(n,l)}},{key:"render",value:function(){return l.a.createElement(D,{movies:this.state.movies})}}]),t}(l.a.PureComponent),W=new(t(26).a),K=l.a.createContext(),Y=function(e){Object(m.a)(t,e);var a=Object(b.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onChangeFilters=function(a){var t=a.target,n=t.name,l=t.value;e.setState((function(e){return{filters:Object(i.a)(Object(i.a)({},e.filters),{},Object(o.a)({},n,l))}}))},e.updateUser=function(a){e.setState({user:a})},e.updateSessionId=function(a){W.set("session_id",a,{path:"/",maxAge:2592e3}),e.setState({session_id:a})},e.onChangePage=function(a){e.setState({page:a})},e.onChangeTotalPages=function(a){e.setState({total_pages:a})},e.resetFilters=function(){e.setState(e.initialState)},e.initialState={user:null,session_id:"",filters:{sort_by:"popularity.desc",primary_release_year:(new Date).getFullYear(),with_genres:[]},page:1},e.state=Object(i.a)(Object(i.a)({},e.initialState),{},{total_pages:""}),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=W.get("session_id");a&&g("".concat(h,"/account?api_key=").concat(d,"&session_id=").concat(a)).then((function(a){e.updateUser(a)}))}},{key:"render",value:function(){var e=this.state,a=e.filters,t=e.page,n=e.total_pages,r=e.user,s=e.session_id;return l.a.createElement(K.Provider,{value:{user:r,updateUser:this.updateUser,session_id:s,updateSessionId:this.updateSessionId}},l.a.createElement("div",{className:"header"},l.a.createElement(w,{updateSessionId:this.updateSessionId,user:r})),l.a.createElement("div",{className:"main container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"filters col-3"},l.a.createElement(U,{onChangeFilters:this.onChangeFilters,filters:a,page:t,onChangePage:this.onChangePage,total_pages:n,resetFilters:this.resetFilters})),l.a.createElement("div",{className:"movies col-9"},l.a.createElement(R,{filters:a,page:t,onChangePage:this.onChangePage,onChangeTotalPages:this.onChangeTotalPages})))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(57);var $=t(25);t.n($).a.load({google:{families:["Open Sans"]}}),s.a.render(l.a.createElement(Y,null),document.getElementById("kinopoisk")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.471cbf70.chunk.js.map