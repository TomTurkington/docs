# jBASE 5.7.3 Release Notes

**Created At:** 6/27/2019 10:51:18 AM  
**Updated At:** 7/11/2019 9:52:58 AM  


# Patches

- [PN5\_60867](pn5_60867) - jQL process exits prematurely when a jBC subroutine exits from within a query
- [PN5\_60868](PN5_60868) - Add try/catch/throw constructs to Dynamic Objects
- [PN5\_60869](PN5_60869) - **CREATE-ACCOUNT** does not respect **JEDI\_PREFILEOP**when it creates the MD
- [PN5\_60870](PN5_60870) - New dot-stacker command to clear the stack
- [PN5\_60871](PN5_60871) - jBC: Increase default **INPUT**buffer to 32k
- [PN5\_60872](PN5_60872) - jEDI: F-pointers do not allow comments after the "F" on line one
- [PN5\_60873](PN5_60873) - Enhance **jpq**, the Proc processor, to allow external calls to paragraphs
- [PN5\_60875](PN5_60875) - **READNEXT KEY** does not process all records in Universe or Prime emulations
- [PN5\_60877](PN5_60877) - Prevent process abort when restoring over an existing file with indexes
- [PN5\_60879](PN5_60879) - Prevent process abort with **Tn,m**conversion
- [PN5\_60880](PN5_60880) - Create 64-bit build of **telnet**/**transcmd**with a registry option to set the code page
- [PN5\_60881](PN5_60881) - **GET-LIST**in D3 emulation changes characters in the select-list
- [PN5\_60882](PN5_60882) - jQL: Extra blank lines appear on subvalued data that exceeds the defined column width
- [PN5\_60883](PN5_60883) - The **jtic** command produces a segmentation fault on Linux
- [PN5\_60887](PN5_60887) - Compiler: Make **GOSUB** stack depth configurable
- [PN5\_60888](PN5_60888) -  A previously cataloged subroutine could get its shared library reused by a subsequent catalog of a different subroutine
- [PN5\_60891](PN5_60891) - Add **-D**option to the **BASIC**command to compile programs with a compiler directive
- [PN5\_60892](PN5_60892) - New environment variable to ignore **EDICT** flags and **jDP\_Options**
- [PN5\_60893](PN5_60893) - **@SELECTED** not getting set when doing an **EXECUTE** with a **RTNLIST**
- [PN5\_60895](PN5_60895) - Support sub-valued fields in a secondary index
- [PN5\_60896](PN5_60896) - **jshow -f filename** misleading
