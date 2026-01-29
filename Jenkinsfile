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
                    # 젠킨스 컨테이너 경로를 호스트 경로로 변환
                    HOST_WORKSPACE=$(echo $WORKSPACE | sed 's|/var/jenkins_home|/volume1/docker/jenkins/jenkins_home|')
                    
                    docker run --rm \
                        -v "$HOST_WORKSPACE":/app \
                        -v /volume1/docker/web:/deploy \
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
