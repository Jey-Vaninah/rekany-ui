@echo off
echo Copying images from rekany-agri-premium to rekany-ui assets...
xcopy /Y /S "..\rekany-agri-premium\src\assets\*" "src\assets\"
echo Copy completed!
pause
