webpackJsonp([45,172],{817:function(e,l){e.exports={content:["article",["h1","\u4ecb\u7ecd"],["p","\u4ea7\u54c1\u56e2\u961f\u5728\u4ea7\u54c1\u7814\u53d1\u4ee5\u53ca\u548c\u793e\u533a\u4e92\u52a8\u65f6\uff0c\u4f7f\u7528\u76ee\u524d\u6d41\u4f20\u6700\u5e7f\u7684 Git \u5206\u652f\u7ba1\u7406\u89c4\u8303 ",["a",{title:null,href:"http://nvie.com/posts/a-successful-git-branching-model/"},"gitflow"]," \u3002",["br"],"gitflow \u4e3b\u8981\u6d41\u7a0b\u5982\u4e0b\u56fe\uff1a"],["div",{style:"text-align: center; background: rgb(255, 255, 255); margin: 40px 0px;"},["img",{width:"600",src:"https://app-design.github.io/s/git-model@2x.png"}]],["h2","Branch\uff08\u5206\u652f\uff09"],["p","\u7248\u672c\u5e93\u6709\u4e24\u6761\u4e3b\u8981\u5206\u652f\uff1aMaster\u548cDevelop\u3002\u524d\u8005\u7528\u4e8e\u6b63\u5f0f\u53d1\u5e03\uff0c\u540e\u8005\u7528\u4e8e\u65e5\u5e38\u5f00\u53d1\u3002"],["ul",["li",["p","develop\uff1a\u5f00\u53d1\u5206\u652f\u3002\u65e5\u5e38\u5f00\u53d1\u4f7f\u7528\u7684\u5206\u652f\uff0c\u9879\u76ee\u534f\u4f5c\u8005\u4e3b\u8981\u5de5\u4f5c\u5728\u8fd9\u4e2a\u5206\u652f\u4e0a\uff0c\u540c\u65f6\u6240\u6709\u7684 pull request \u90fd\u5e94\u8be5\u53d1\u5230\u8fd9\u4e2a\u5206\u652f\uff1b"]],["li",["p","master\uff1a\u4e3b\u5206\u652f\u3002\u6240\u6709\u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u7684\u6b63\u5f0f\u7248\u672c\uff0c\u90fd\u5728\u8fd9\u4e2a\u4e3b\u5206\u652f\u4e0a\u53d1\u5e03\u3002  "]]],["p","\u5176\u5b9e\uff0c\u5e38\u8bbe\u5206\u652f\u53ea\u9700\u8981\u8fd9\u4e24\u6761\u5c31\u591f\u4e86\uff0c\u4e0d\u9700\u8981\u5176\u4ed6\u4e86\u3002\u4f46\u662f\uff0c\u9664\u4e86\u5e38\u8bbe\u5206\u652f\u4ee5\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u4e34\u65f6\u6027\u5206\u652f\uff0c\u7528\u4e8e\u5e94\u5bf9\u4e00\u4e9b\u7279\u5b9a\u76ee\u7684\u7684\u7248\u672c\u5f00\u53d1\u3002\u4e34\u65f6\u6027\u5206\u652f\u4e3b\u8981\u6709\u4e09\u79cd\uff1a  "],["ul",["li",["p","feature branches\uff1a\u529f\u80fd\u5206\u652f\u3002\u5b83\u662f\u4e3a\u4e86\u5f00\u53d1\u67d0\u79cd\u7279\u5b9a\u529f\u80fd\uff0c\u4eceDevelop\u5206\u652f\u4e0a\u9762\u5206\u51fa\u6765\u7684\uff0c\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u8981\u518d\u5e76\u5165Develop\u3002\u529f\u80fd\u5206\u652f\u53ef\u4ee5\u6709\u591a\u4e2a\uff0c\u8fd9\u4e9b\u5206\u652f\u901a\u5e38\u53ea\u662f\u4e2a\u4eba\u4f7f\u7528\uff0c\u5b58\u5728\u5f00\u53d1\u8005\u672c\u5730\u5e93\u4e2d\uff0c\u5982\u679c\u9700\u8981\u591a\u4eba\u534f\u4f5c\uff0c\u5219\u9700\u8981\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff1b"]],["li",["p","release branches\uff1a\u9884\u53d1\u5e03\u5206\u652f\u3002\u5b83\u662f\u6307\u53d1\u5e03\u6b63\u5f0f\u7248\u672c\u4e4b\u524d\uff08\u5373\u5408\u5e76\u5230Master\u5206\u652f\u4e4b\u524d\uff09\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u6709\u4e00\u4e2a\u9884\u53d1\u5e03\u7684\u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5e76\u5141\u8bb8\u4fee\u6b63\u5c0f\u95ee\u9898\uff1b"]],["li",["p","hotfixes\uff1a\u8865\u4e01\u5206\u652f\u3002\u8f6f\u4ef6\u6b63\u5f0f\u53d1\u5e03\u4ee5\u540e\uff0c\u96be\u514d\u4f1a\u51fa\u73b0bug\u3002\u8fd9\u65f6\u5c31\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u8fdb\u884cbug\u4fee\u8865\u3002\u8865\u4e01bug\u5206\u652f\u662f\u4eceMaster\u5206\u652f\u4e0a\u9762\u5206\u51fa\u6765\u7684\u3002\u4fee\u8865\u7ed3\u675f\u4ee5\u540e\uff0c\u518d\u5408\u5e76\u8fdbMaster\u548cDevelop\u5206\u652f\u3002"]]],["h2","Tag\uff08\u6807\u7b7e\uff09"],["ul",["li",["p","Tag: \u5bf9\u5e94\u6bcf\u4e2a\u53d1\u5e03\u7248\u672c\u7684\u7248\u672c\u6807\u8bc6\u3002"]]],["p","app-design \u7684 tag \u547d\u4ee4\u89c4\u8303\u9075\u7167 ",["a",{title:null,href:"http://semver.org/lang/zh-CN/"},"Semantic Versioning 2.0.0"],"\xa0\u8bed\u4e49\u5316\u7248\u672c\u89c4\u8303\u3002"],["h2","\u65b0\u529f\u80fd\u5f00\u53d1\u6d41\u7a0b"],["p","\u5bf9\u4e8e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u4e0d\u540c\u4efb\u52a1\uff0c\u9700\u8981\u5728\u5bf9\u5e94\u7684\u5206\u652f\u4e0a\u8fdb\u884c\u5de5\u4f5c\u5e76\u6b63\u786e\u5730\u8fdb\u884c\u5408\u5e76\u3002\u6bcf\u4e2a\u4efb\u52a1\u5f00\u59cb\u524d\u9700\u8981\u6309\u7167\u6307\u5b9a\u7684\u6b65\u9aa4\u5b8c\u6210\u5206\u652f\u7684\u521b\u5efa\u3002\u4f8b\u5982\u5f53\u9700\u8981\u5f00\u53d1\u4e00\u4e2a\u65b0\u7684\u529f\u80fd\u65f6\uff0c\u57fa\u672c\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"],["ul",["li",["p","\u4ece develop \u5206\u652f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 feature \u5206\u652f\uff0c\u5982 feature/my-awesome-feature\u3002"]],["li",["p","\u5728\u8be5 feature \u5206\u652f\u4e0a\u8fdb\u884c\u5f00\u53d1\uff0c\u63d0\u4ea4\u4ee3\u7801\uff0c\u5982\u9700\u591a\u4eba\u534f\u4f5c\uff0cpush \u5230\u8fdc\u7aef\u4ed3\u5e93\u3002"]],["li",["p","\u5f53\u4ee3\u7801\u5b8c\u6210\u4e4b\u540e\uff0c\u5408\u5e76\u5230 develop \u5206\u652f\u5e76\u5220\u9664\u5f53\u524d feature \u5206\u652f\u3002  "]]],["h2","\u7248\u672c\u53d1\u5e03\u6d41\u7a0b"],["p","\u5f53\u9700\u8981\u53d1\u5e03\u65b0\u7248\u672c\u65f6\uff0c\u91c7\u7528\u7684\u662f\u5982\u4e0b\u7684\u6d41\u7a0b\uff1a"],["ul",["li",["p","\u786e\u4fdd\u6240\u6709\u8981\u53d1\u5e03\u7684 pull request \u90fd\u5df2\u7ecf merge \u5230 develop\u4e86\uff1b"]],["li",["p","\u4ece develop \u5206\u652f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 release \u5206\u652f\uff0c\u5982 v1.1.0\uff1b"]],["li",["p","\u628a release \u5206\u652f\u90e8\u7f72\u5230\u6301\u7eed\u96c6\u6210\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u6d4b\u8bd5\u3002\u6d4b\u8bd5\u5305\u62ec\u81ea\u52a8\u5316\u96c6\u6210\u6d4b\u8bd5\u548c\u624b\u52a8\u7684\u7528\u6237\u9a8c\u6536\u6d4b\u8bd5\uff1b"]],["li",["p","\u5bf9\u4e8e\u6d4b\u8bd5\u4e2d\u53d1\u73b0\u7684\u95ee\u9898\uff0c\u76f4\u63a5\u5728 release \u5206\u652f\u4e0a\u63d0\u4ea4\u4fee\u6539\u3002\u5b8c\u6210\u4fee\u6539\u4e4b\u540e\u518d\u6b21\u90e8\u7f72\u548c\u6d4b\u8bd5\uff1b"]],["li",["p","\u5f53 release \u5206\u652f\u4e2d\u7684\u4ee3\u7801\u901a\u8fc7\u6d4b\u8bd5\u4e4b\u540e\uff0c\u628a release \u5206\u652f\u5408\u5e76\u5230 develop \u548c master \u5206\u652f\uff0c\u5e76\u5728 master \u5206\u652f\u4e0a\u6dfb\u52a0\u76f8\u5e94\u7684 tag\u3002"]]],["h2","\u6253\u8865\u4e01\u6d41\u7a0b"],["p","\u6253\u8865\u4e01\u662f\u6307\u5bf9\u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u7684\u6b63\u5f0f\u7248\u672c\u8fdb\u884c\u4fee\u590d\u3002"],["ul",["li",["p","\u4ece master \u5206\u652f\u521b\u5efa\u4e00\u4e2a\u8865\u4e01\u5206\u652f\uff1b"]],["li",["p","\u4fee\u8865\u7ed3\u675f\u540e\uff0c\u5408\u5e76\u5230 master \u5206\u652f\u5e76\u6253 Tag\uff1b"]],["li",["p","\u518d\u5408\u5e76\u5230 develop \u5206\u652f\uff1b"]],["li",["p","\u6700\u540e\uff0c\u5220\u9664\u8865\u4e01\u5206\u652f\u3002\n\u5e76\u975e\u6bcf\u4e2a bug \u90fd\u6709\u6253\u8865\u4e01\u7684\u5fc5\u8981\uff0c\u5bf9\u4e8e\u4e0d\u7d27\u6025\u7684 bug\uff0c\u53ef\u4ee5\u5728 develop \u91cc\u4fee\u590d\u540e\u968f\u4e0b\u4e00\u4e2a\u7248\u672c\u53d1\u5e03\u3002"]]],["blockquote",["p","\u5173\u4e8egit-flow\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u4f60\u8fd8\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html"},"git-flow \u5907\u5fd8\u6e05\u5355"]]],["h2","Git \u5ba2\u6237\u7aef\u5de5\u5177"],["p","\u867d\u7136 eclipse\u3001webstorm \u4e4b\u7c7b\u7684 IDE \u90fd\u81ea\u5e26 Git \u5ba2\u6237\u7aef\uff0c\u4f46\u662f\u6211\u4eec\u4ecd\u7136\u5411\u4f60\u63a8\u8350\u66f4\u597d\u7528\u7684 SourceTree\uff0c\u800c\u4e14 SourceTree \u9ed8\u8ba4\u5df2\u7ecf\u96c6\u6210\u4e86 gitflow \u7684\u6269\u5c55\uff0c\u7528\u8d77\u6765\u66f4\u65b9\u4fbf\u3002"],["blockquote",["p","\u4f60\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"/docs/contribution/05-sourcetree"},"SourceTree \u5de5\u5177\u7684\u4f7f\u7528"]]],["h1","commit \u4ee3\u7801"],["h2","\u5728 commit \u7684\u6ce8\u91ca\u4e2d\u5173\u95ed issue"],["p","\u4f60\u53ef\u4ee5\u5728\u63d0\u4ea4\u6d88\u606f\u4e2d\u5305\u542b\u5173\u952e\u5b57\uff0c\u4ee5\u81ea\u52a8\u5173\u95edGit\u4e2d\u7684issue\u3002"],["p","\u8981\u5728\u540c\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u5173\u95ed\u4e00\u4e2a\u95ee\u9898\uff0c\u8bf7\u4f7f\u7528\u4e0b\u9762\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u5173\u952e\u5b57\uff0c\u7136\u540e\u5f15\u7528\u63d0\u4ea4\u6d88\u606f\u4e2d\u7684\u95ee\u9898\u7f16\u53f7\u3002 \u4f8b\u5982\uff0c\u5f53\u63d0\u4ea4\u5408\u5e76\u5230\u9ed8\u8ba4\u5206\u652f\u4e2d\u65f6\uff0c\u5177\u6709",["code","Fixes\uff0345"],"\u7684\u63d0\u4ea4\u6d88\u606f\u5c06\u5173\u95ed\u8be5\u5b58\u50a8\u5e93\u4e2d\u7684\u95ee\u989845\u3002"],["p","\u5982\u679c\u63d0\u4ea4\u5904\u4e8e\u975e\u9ed8\u8ba4\u5206\u652f\u4e2d\uff0c\u5219\u95ee\u9898\u5c06\u4fdd\u6301\u6253\u5f00\uff0c\u5e76\u4e14\u5c06\u4f7f\u7528\u63d0\u793a\u5f15\u7528\u8be5\u95ee\u9898\u3002 \u5982\u679c\u63d0\u4ea4\u88ab\u5f3a\u5236\u63a8\u9001\u5230\u9ed8\u8ba4\u5206\u652f\u5e76\u4e14\u5df2\u7ecf\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u5206\u652f\u4e0a\uff0c\u5219\u8be5\u95ee\u9898\u5c06\u4fdd\u6301\u6253\u5f00\u3002"],["h3","\u5173\u95edissue\u7684\u5173\u952e\u5b57\uff1a"],["ul",["li",["p","close"]],["li",["p","closes"]],["li",["p","closed"]],["li",["p","fix"]],["li",["p","fixes"]],["li",["p","fixed"]],["li",["p","resolve"]],["li",["p","resolves"]],["li",["p","resolved"]]],["blockquote",["p","\u53c2\u8003 gogs ",["a",{title:null,href:"https://github.com/gogits/gogs/issues/462"},"\u8fd9\u4e2a issue"],"\n\u6216\u8005 ",["a",{title:null,href:"https://help.github.com/articles/closing-issues-via-commit-messages/"},"github\u7684\u5e2e\u52a9"],"\u3002"]]],meta:{category:"\u534f\u4f5c\u89c4\u8303",order:2,title:{"zh-CN":"\u4ea7\u54c1\u534f\u4f5c","en-US":"Product Collaboration"},filename:"docs/contribution/01-product.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#\u4ecb\u7ecd",title:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"]],["li",["a",{className:"bisheng-toc-h2",href:"#Branch\uff08\u5206\u652f\uff09",title:"Branch\uff08\u5206\u652f\uff09"},"Branch\uff08\u5206\u652f\uff09"]],["li",["a",{className:"bisheng-toc-h2",href:"#Tag\uff08\u6807\u7b7e\uff09",title:"Tag\uff08\u6807\u7b7e\uff09"},"Tag\uff08\u6807\u7b7e\uff09"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65b0\u529f\u80fd\u5f00\u53d1\u6d41\u7a0b",title:"\u65b0\u529f\u80fd\u5f00\u53d1\u6d41\u7a0b"},"\u65b0\u529f\u80fd\u5f00\u53d1\u6d41\u7a0b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7248\u672c\u53d1\u5e03\u6d41\u7a0b",title:"\u7248\u672c\u53d1\u5e03\u6d41\u7a0b"},"\u7248\u672c\u53d1\u5e03\u6d41\u7a0b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6253\u8865\u4e01\u6d41\u7a0b",title:"\u6253\u8865\u4e01\u6d41\u7a0b"},"\u6253\u8865\u4e01\u6d41\u7a0b"]],["li",["a",{className:"bisheng-toc-h2",href:"#Git-\u5ba2\u6237\u7aef\u5de5\u5177",title:"Git \u5ba2\u6237\u7aef\u5de5\u5177"},"Git \u5ba2\u6237\u7aef\u5de5\u5177"]],["li",["a",{className:"bisheng-toc-h1",href:"#commit-\u4ee3\u7801",title:"commit \u4ee3\u7801"},"commit \u4ee3\u7801"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5728-commit-\u7684\u6ce8\u91ca\u4e2d\u5173\u95ed-issue",title:"\u5728 commit \u7684\u6ce8\u91ca\u4e2d\u5173\u95ed issue"},"\u5728 commit \u7684\u6ce8\u91ca\u4e2d\u5173\u95ed issue"]]]}}});