pipeline {
    agent any
    
    environment {
        CI = 'false'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build with Docker') {
            steps {
                sh '''
                    docker run --rm \
                        -v "$WORKSPACE":/app \
                        -v /var/jenkins_home/web_deploy:/deploy \
                        -w /app \
                        node:20-alpine sh -c "
                            corepack enable && 
                            yarn install && 
                            yarn build && 
                            rm -rf /deploy/* && 
                            cp -r build/* /deploy/
                        "
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
