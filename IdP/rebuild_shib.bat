
setlocal
net stop shibd_idp

call "%~dp0\bin\ant.bat" %* build-war

net start shibd_idp

