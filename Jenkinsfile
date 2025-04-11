pipeline {
    agent any
    tools {
        nodejs('16.20.0')
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
          environment {
                PORT = 5001
            }
            steps {
                echo 'Deploying to local environment...'
                sh 'npm start'
            }
        }
    }
    post {
        failure {
            echo 'Pipeline failed!'
        }
    }
}
