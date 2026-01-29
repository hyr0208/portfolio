FROM jenkins/jenkins:lts

USER root

# Docker CLI 설치
RUN apt-get update && \
    apt-get install -y docker.io && \
    apt-get clean

USER jenkins
