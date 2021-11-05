#!/bin/bash
apt-get update
apt-get install -y\
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common \
    unzip
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
apt-cache madison docker-ce
apt install -y docker.io docker-compose

#Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install
aws --version

#Get source code to project-one
aws s3 cp s3://project00001/project1 ~/.ssh
chmod 0600 ~/.ssh/project1 
echo -e "Host github.com\n\tHostName github.com\n\tIdentityFile ~/.ssh/project1" >> ~/.ssh/config
ssh-keyscan github.com >> ~/.ssh/known_hosts
git clone git@github.com:ardeearam/project-one.git
aws s3 cp s3://project00001/LocalSettings.php /project-one/src

#Start docker process
cd /project-one/deploy
./prod.sh
