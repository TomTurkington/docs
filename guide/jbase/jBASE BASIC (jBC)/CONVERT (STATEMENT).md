# CONVERT (STATEMENT)

**Created At:** 8/14/2017 9:28:39 AM  
**Updated At:** 10/24/2018 10:59:37 PM  


# Description

The **CONVERT** statement converts one or more characters in a string to their corresponding replacement characters. It takes the general form:

```
CONVERT expression1 TO expression2 IN expression3
```

Where:

- **expression1** is the list of all characters to translate in **expression3**
- **expression2** is the list of characters that will be converted to.
- **expression3** is the string to which the conversion will apply.


## Note:


> That there is a one to one correspondence between the characters in expression1 and expression2. That is, conversion of character 1 in expression1 to character 1 in expression2, etc.


An example of use is as follows:

```
Value = 'ABCDEFGHIJ'
CONVERT 'BJE' TO '^+!' IN Value
! Value now contains A^CD!FGHI+
```



See also: the [CONVERT](266859-convert) function.

Go back to [JBASE BASIC](263498-jbase-basic).