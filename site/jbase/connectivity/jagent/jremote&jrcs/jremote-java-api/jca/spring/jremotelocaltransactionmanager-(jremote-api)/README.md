# JRemoteLocalTransactionManager (jremote API)

<PageHeader />

## Class JRemoteLocalTransactionManager

All Implemented Interfaces:Serializable, org.springframework.beans.factory.InitializingBean, org.springframework.transaction.PlatformTransactionManager
* * *


```
public class JRemoteLocalTransactionManager
extends org.springframework.transaction.support.AbstractPlatformTransactionManager
implements org.springframework.beans.factory.InitializingBean
```

### Nested Class Summary

- Nested classes/interfaces inherited from class org.springframework.transaction.support.AbstractPlatformTransactionManager
    - `org.springframework.transaction.support.AbstractPlatformTransactionManager.SuspendedResourcesHolder`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `protected JConnectionFactory`<br> | `_connectionFactory` <br> |


- Fields inherited from class org.springframework.transaction.support.AbstractPlatformTransactionManager
    - `SYNCHRONIZATION_ALWAYS, SYNCHRONIZATION_NEVER, SYNCHRONIZATION_ON_ACTUAL_TRANSACTION`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteLocalTransactionManager()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `afterPropertiesSet()` <br> |
| `protected void`<br> | `doBegin(Object transaction, org.springframework.transaction.TransactionDefinition td)` <br> |
| `protected void`<br> | `doCommit(org.springframework.transaction.support.DefaultTransactionStatus stat)` <br> |
| `protected Object`<br> | `doGetTransaction()` <br> |
| `protected void`<br> | `doRollback(org.springframework.transaction.support.DefaultTransactionStatus stat)` <br> |
| `JConnectionFactory`<br> | `getConnectionFactory()` <br> |
| `void`<br> | `setConnectionFactory(JConnectionFactory xf)` <br> |


- Methods inherited from class org.springframework.transaction.support.AbstractPlatformTransactionManager
    - `commit, determineTimeout, doCleanupAfterCompletion, doResume, doSetRollbackOnly, doSuspend, getDefaultTimeout, getTransaction, getTransactionSynchronization, invokeAfterCompletion, isExistingTransaction, isFailEarlyOnGlobalRollbackOnly, isGlobalRollbackOnParticipationFailure, isNestedTransactionAllowed, isRollbackOnCommitFailure, isValidateExistingTransaction, newTransactionStatus, prepareForCommit, registerAfterCompletionWithExistingTransaction, resume, rollback, setDefaultTimeout, setFailEarlyOnGlobalRollbackOnly, setGlobalRollbackOnParticipationFailure, setNestedTransactionAllowed, setRollbackOnCommitFailure, setTransactionSynchronization, setTransactionSynchronizationName, setValidateExistingTransaction, shouldCommitOnGlobalRollbackOnly, suspend, triggerBeforeCommit, triggerBeforeCompletion, useSavepointForNestedTransaction`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### \_connectionFactory

```
protected JConnectionFactory _connectionFactory
```



### 


### Constructor Detail

#### JRemoteLocalTransactionManager

```
public JRemoteLocalTransactionManager()
```



### 


### Method Detail

#### setConnectionFactory

```
public void setConnectionFactory(JConnectionFactory xf)
```

#### 


#### getConnectionFactory

```
public JConnectionFactory getConnectionFactory()
```

#### 


#### doBegin

```
protected void doBegin(Object transaction,
                       org.springframework.transaction.TransactionDefinition td)
                throws org.springframework.transaction.TransactionException
```
Specified by:`doBegin` in class `org.springframework.transaction.support.AbstractPlatformTransactionManager`Throws:`org.springframework.transaction.TransactionException`
#### 


#### doCommit

```
protected void doCommit(org.springframework.transaction.support.DefaultTransactionStatus stat)
                 throws org.springframework.transaction.TransactionException
```
Specified by:`doCommit` in class `org.springframework.transaction.support.AbstractPlatformTransactionManager`Throws:`org.springframework.transaction.TransactionException`
#### 


#### doGetTransaction

```
protected Object doGetTransaction()
                           throws org.springframework.transaction.TransactionException
```
Specified by:`doGetTransaction` in class `org.springframework.transaction.support.AbstractPlatformTransactionManager`Throws:`org.springframework.transaction.TransactionException`
#### 


#### doRollback

```
protected void doRollback(org.springframework.transaction.support.DefaultTransactionStatus stat)
                   throws org.springframework.transaction.TransactionException
```
Specified by:`doRollback` in class `org.springframework.transaction.support.AbstractPlatformTransactionManager`Throws:`org.springframework.transaction.TransactionException`
#### 


#### afterPropertiesSet

```
public void afterPropertiesSet()
                        throws Exception
```
Specified by:`afterPropertiesSet` in interface `org.springframework.beans.factory.InitializingBean`Throws:`Exception`

Back to [jREMOTE API](com_jbase_jremote_package-summary)

  
<PageFooter />
