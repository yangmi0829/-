### 正则解析
```$xslt
/^<(\w+)\s*\/?>(?:<\/\1>|)$/
```
<table class="table table-bordered table-striped table-condensed">
    <tr>
        <td>表达式</td>
        <td>含义</td>
    </tr>
    <tr>
        <td><</td>
        <td><</td>
    </tr>
    <tr>
        <td>(\w+) </td>
        <td>一个或多个字符</td>
    </tr>
    <tr>
        <td>\s* </td>
        <td>零个或多个空格</td>
    </tr>
    <tr>
        <td>\/?></td>
        <td>零个或单个?</td>
    </tr>
    <tr>
        <td>(?:<\/\1>|)</td>
        <td>分组，但不记住匹配项，</\,反向引用分组1的内容，确保前后标签一致,或者为空</td>
    </tr>
</table>


