# JBCGLOBALDIR

<PageHeader />

**Tags:**
<badge text='jbcglobaldir' vertical='middle' />
<badge text='directories' vertical='middle' />
<badge text='global files' vertical='middle' />

## Description

Defines the directory for jBASE global files.

## Values

Valid file path

## Default

The default is the same as JBCRELEASEDIR

## Setting

On UNIX it should be setup in the .profile.

On Windows it should be set before running any jBASE program.

## Note

> JBCGLOBALDIR is the primary search directory for many jBASE elements (e.g.  licensing, spooler, 'proc' directory, etc.). For all practical purposes, this variable retains certain dependencies with JBCRELEASEDIR, therefore it should  not ever be set to a different location.  
> This will change with the advent of jBASE 5.8, where JBCGLOBALDIR can be a different location used to house information related to user profiles.  

Go Back to [Environment Variables](./../README.md)

<PageFooter />
