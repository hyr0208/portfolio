pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
    }
    
    environment {
        CI = 'false'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    rm -rf /var/jenkins_home/web_deploy/*
                    cp -r build/* /var/jenkins_home/web_deploy/
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Build and Deploy successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
