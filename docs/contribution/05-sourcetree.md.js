webpackJsonp([39,169],{821:function(e,t){e.exports={content:["article",["h1","SourceTree \u4e0b\u7684 gitflow \u6a21\u578b"],["ul",["li",["p",["a",{title:null,href:"www.sourcetreeapp.com"},"SourceTree"],"  \u662f\u4e00\u4e2a\u514d\u8d39\u7684\u8de8\u5e73\u53f0 Git \u5ba2\u6237\u7aef\u5de5\u5177\uff0c\u6709 windows \u548c mac \u7b49\u7248\u672c, SourceTree \u62e5\u6709\u4e00\u4e2a\u7cbe\u7f8e\u7b80\u6d01\u7684\u754c\u9762\uff0c\u5927\u5927\u7b80\u5316\u4e86\u5f00\u53d1\u8005\u4e0e\u4ee3\u7801\u5e93\u4e4b\u95f4\u7684 Git \u64cd\u4f5c\u65b9\u5f0f\uff0c\u8fd9\u5bf9\u4e8e\u90a3\u4e9b\u4e0d\u719f\u6089 Git \u547d\u4ee4\u7684\u5f00\u53d1\u8005\u6765\u8bf4\u975e\u5e38\u5b9e\u7528\u3002"]],["li",["p","gitflow \u662f\u4e00\u4e2a\u4f7f\u7528 Git \u8fdb\u884c\u6e90\u4ee3\u7801\u7ba1\u7406\u65f6\u7684\u4e00\u5957\u884c\u4e3a\u89c4\u8303\u548c\u7b80\u5316\u90e8\u5206 Git \u64cd\u4f5c\u7684\u6269\u5c55\u3002SourceTree \u9ed8\u8ba4\u5df2\u7ecf\u652f\u6301 gitflow"]]],["h1","gitflow \u57fa\u672c\u64cd\u4f5c\u6d41\u7a0b"],["ol",["li",["p","\u5148\u7528 SourceTree \u521b\u5efa\u4e00\u4e2a\u672c\u5730 Git \u9879\u76ee\uff08\u6216 clone \u4e00\u4e2a\u8fdc\u7a0b\u9879\u76ee\uff09\u3002"]],["li",["p","\u5728\u9879\u76ee\u91cc\u9762\u5148 ",["code","commit"]," \u4e00\u4e0b\uff0c\u9ed8\u8ba4\u63d0\u4ea4\u5728\u4e86 master \u5206\u652f\u3002"]],["li",["p","\u7136\u540e\u5728 SourceTree \u5de5\u5177 \u53f3\u4e0a\u89d2\uff0c\u70b9\u51fb GitFlow\uff0c\u5f00\u542f ",["code","gitflow"]," \u89c4\u8303\u6a21\u578b\u7684\u914d\u7f6e\n",["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-01.png",alt:"\u914d\u7f6e gitflow"}],["br"],"\u5728\u5f00\u542f gitflow \u4e4b\u540e\uff0c\u751f\u4ea7\u73af\u5883\u5206\u652f\u4f7f\u7528 ",["code","master"],"\uff0c\u5f00\u53d1\u5206\u652f\u4f7f\u7528 ",["code","develop"],"\uff0c\u5f53\u9700\u8981\u65b0\u589e\u52a0\u529f\u80fd\u3001\u53d1\u5e03\u7248\u672c\u65f6\u6216\u521b\u5efa\u8865\u4e01\u4fee\u590d bug \u65f6\uff0c\u5206\u522b\u5bf9\u5e94\u7684 ",["code","feature"],"\u3001",["code","release"]," \u548c ",["code","hotfix"]," \u524d\u7f00\u7684\u5206\u652f\u3002"]],["li",["p","\u914d\u7f6e\u5b8c\u4e4b\u540e\uff0c\u6211\u4eec\u7684\u9879\u76ee\u5c31\u56de\u5230\u4e86 develop \u5206\u652f\uff0c\u4ee5\u540e\u6240\u6709\u7684\u5f00\u53d1\u90fd\u5728\u8fd9\u4e2a\u5206\u652f\u4e0a\u8fdb\u884c\uff1b"]],["li",["p","\u4f7f\u7528 gitflow \u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u70b9\u51fb SourceTree \u7684\u53f3\u4e0a\u89d2 Git Flow \u6309\u94ae\uff0c\u9009\u62e9",["code","\u521b\u5efa\u65b0\u529f\u80fd"],"\n",["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-02.png",alt:"\u6dfb\u52a0\u65b0\u529f\u80fd"}],["br"],"\u8f93\u5165\u65b0\u529f\u80fd\u540d\u79f0\uff0c\u9ed8\u8ba4\u4f1a\u5728",["code","\u65b0\u529f\u80fd"],"\u5206\u652f\u4e0a\u5f00\u53d1\u65b0\u529f\u80fd\uff1b\n",["code","\u65b0\u529f\u80fd"],"\u5f00\u53d1\u5b8c\u6210\u4e4b\u540e\uff0c\u518d\u6b21\u70b9\u51fb git flow \u6309\u94ae\uff0c\u4f1a\u51fa\u73b0",["code","\u5b8c\u6210\u65b0\u529f\u80fd"],"\u6309\u94ae\n\u70b9\u51fb",["code","\u5b8c\u6210\u65b0\u529f\u80fd"],"\uff0c\u4f1a\u628a\u5f53\u524d\u65b0\u529f\u80fd\u5408\u5206\u652f\u5408\u5e76\u5230 develop \u5206\u652f\uff0c\u5e76\u5220\u9664\u65b0\u529f\u80fd\u5206\u652f\n",["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-03.jpg",alt:"\u5b8c\u6210\u65b0\u529f\u80fd"}],"  "]],["li",["p","\u4f7f\u7528Git Flow \u53d1\u5e03\u65b0\u7248\u672c\uff0c\u70b9\u51fb git Flow \u6309\u94ae\uff0c\u83dc\u5355\u9009\u62e9",["code","\u521b\u5efa\u65b0\u53d1\u5e03\u7248\u672c"],"\n",["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-04.png",alt:"\u53d1\u5e03\u65b0\u7248\u672c"}],["br"],"\u5728\u53d1\u5e03\u7248\u672c\u5206\u652f\u4e0a\uff0c\u5b8c\u6210\u9879\u76ee\u53d1\u5e03\u914d\u7f6e\u4e4b\u540e\uff0c\u63d0\u4ea4\uff0c\u518d\u70b9\u51fb git flow \u6309\u94ae\uff0c\u4f1a\u5f39\u51fa",["code","\u5b8c\u6210\u53d1\u5e03\u7248\u672c"],"\u6309\u94ae\uff0c\u70b9\u51fb\uff0c\n",["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-05.png",alt:"\u5b8c\u6210\u53d1\u5e03"}],["br"],"\u786e\u8ba4\u4e4b\u540e\uff0c\u4f1a\u53d1\u73b0",["code","\u53d1\u5e03\u7248\u672c"],"\u7684\u5206\u652f\uff0c\u4f1a\u5408\u5e76\u5230 develop \u5206\u652f \u548c master \u5206\u652f\uff0c\u8868\u793a\u751f\u4ea7\u4e0a\u53d1\u5e03\u4e86\u4e00\u4e2a\u7248\u672c"]],["li",["p","\u4f7f\u7528 git flow \u65b0\u5efa\u8865\u4e01\uff0c\u4fee\u590d bug",["br"],"\u6bd4\u5982\u4e0a\u9762\u53d1\u5e03\u7684\u4e00\u4e2a\u7248\u672c\u5728\u751f\u4ea7\u7528\u7684\u65f6\u5019\uff0c\u51fa\u73b0\u4e86\u4e00\u4e2a bug\uff0c\u8fd9\u65f6\uff0c\u70b9\u51fb git flow \u83dc\u5355\uff0c\u9009\u62e9",["code","\u5efa\u7acb\u65b0\u7684\u4fee\u590d\u8865\u4e01"],["br"],["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-06.png",alt:"\u4fee\u590d bug"}],["br"],"\u8fd9\u65f6\uff0cbug \u4fee\u590d\u5206\u652f\uff0c\u662f\u57fa\u4e8e master\u7684\uff0c\u5728\u4fee\u590d bug \u540e\uff0c\u518d\u6b21\u70b9\u51fb git flow \u5f39\u51fa\uff0c\u5b8c\u6210",["code","\u8865\u4e01\u4fee\u590d"],"\n",["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-07.png",alt:"\u5b8c\u6210\u4fee\u590d"}],["br"],"\u786e\u5b9a\u4e4b\u540e\uff0c\u65b0\u4fee\u590d\u7684bug\u5206\u652f\uff0c\u4f1a\u5408\u5e76\u5230 master \u5206\u652f\u548c develop \u5206\u652f"]],["li",["p","\u6700\u540e\u6211\u4eec\u6765\u770b\u770b\uff0c\u7ecf\u8fc7\u4e0a\u9762\u7684",["code","\u521b\u5efa\u9879\u76ee--\u5f00\u542fgitflow---\u6dfb\u52a0\u65b0\u529f\u80fd---\u53d1\u5e03\u65b0\u7248\u672c---\u4fee\u590dbug"],"\u7b49\u6d41\u7a0b\u4e4b\u540e\uff0c\u5f53\u524d\u7684 Git \u63d0\u4ea4\u72b6\u6001\n",["img",{title:null,src:"https://app-design.github.io/s/sourcetree-gitflow-08.png",alt:"Git \u63d0\u4ea4\u72b6\u6001"}],"  "]]]],meta:{order:5,title:{"zh-CN":"SourceTree \u7684\u4f7f\u7528","en-US":"Use SourceTree"},filename:"docs/contribution/05-sourcetree.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#SourceTree-\u4e0b\u7684-gitflow-\u6a21\u578b",title:"SourceTree \u4e0b\u7684 gitflow \u6a21\u578b"},"SourceTree \u4e0b\u7684 gitflow \u6a21\u578b"]],["li",["a",{className:"bisheng-toc-h1",href:"#gitflow-\u57fa\u672c\u64cd\u4f5c\u6d41\u7a0b",title:"gitflow \u57fa\u672c\u64cd\u4f5c\u6d41\u7a0b"},"gitflow \u57fa\u672c\u64cd\u4f5c\u6d41\u7a0b"]]]}}});