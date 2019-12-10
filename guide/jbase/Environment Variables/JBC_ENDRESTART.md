# JBC_ENDRESTART

**Created At:** 11/3/2017 5:15:57 PM  
**Updated At:** 12/24/2018 6:28:59 PM  


## Description

Enables the Break/End Restart feature.

## 


## Values

Restart program name.

## 


## Default

Break/End Restart feature disabled.

## 


## Setting

On UNIX or on Windows, the JBC\_ENDRESTART environment variable should be set before any jBASE program is run. The environment variable should contain the command string to execute when the the debugger is exited.

To later enable the feature, use the [BITSET](284141-bitset)(-3). To later disable the feature, use the [BITRESET](284140-bitreset)(-3).