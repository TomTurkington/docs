# Uses of Class com.jbase.jrcs.JExecuteResults (jrclient   API)

**Created At:** 9/25/2017 11:27:51 AM  
**Updated At:** 9/20/2018 12:59:16 PM  
**Original Doc:** [com_jbase_jrcs_class-use_jexecuteresults](https://docs.jbase.com/39245-class-use/com_jbase_jrcs_class-use_jexecuteresults)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jrcs.JExecuteResults (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
# 

## Uses of [JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs") in [com.jbase.jrcs](/jrcs/com_jbase_jrcs_package-summary)



**Methods in [com.jbase.jrcs](/jrcs/com_jbase_jrcs_package-summary) that return [JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")**


| <br>Modifier and Type<br> | <br>Method<br> | <br>Description<br> |
| --- | --- | --- |
| <br>[JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | <br>JConnection.[execute](/jrcs/com_jbase_jrcs_JConnection#execute-java.lang.String-int-)(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution<br> |
| <br>[JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | <br>JConnection.[execute](/jrcs/com_jbase_jrcs_JConnection#execute-java.lang.String-int-com.jbase.jrcs.JSelectList-)(String command, int flags, [JSelectList](/jrcs/com_jbase_jrcs_jselectlist "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution<br> |
| <br>[JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | <br>JConnection.[executeAndStore](/jrcs/com_jbase_jrcs_JConnection#executeAndStore-java.lang.String-int-)(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution.<br> |
| <br>[JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | <br>JConnection.[executeAndStore](/jrcs/com_jbase_jrcs_JConnection#executeAndStore-java.lang.String-int-com.jbase.jrcs.JSelectList-)(String command, int flags, [JSelectList](/jrcs/com_jbase_jrcs_jselectlist "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| <br>[JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | <br>JConnection.[executeAndStore](/jrcs/com_jbase_jrcs_JConnection#executeAndStore-java.lang.String-int-com.jbase.jrcs.JSelectList-int-)(String command, int flags, [JSelectList](/jrcs/com_jbase_jrcs_jselectlist "class in com.jbase.jrcs") passList, int blockSize)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |

