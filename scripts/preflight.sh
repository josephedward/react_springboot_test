echo 'Running Preflight...'


echo 'attempting to close ports'
echo 'killing node...'
sudo killall -9 node

echo 'killing java...'
sudo killall -9 java

echo 'ports test(3000) :'
sudo lsof -i tcp:3000 

echo 'ports test(8080) :'
sudo lsof -i tcp:8080 

sudo mvn clean  -X
 