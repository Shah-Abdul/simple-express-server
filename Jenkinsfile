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
        stage('Deploy to Stage') {
            steps {
                echo 'Triggering Deploy to Stage environment...'
                sh "curl '${env.RENDER_STAGE_DEPLOY_HOOK_URL}'"
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Triggering Deploy to Prod environment...'
                sh "curl '${env.RENDER_STAGE_DEPLOY_HOOK_URL}'"
            }
        }
    }
    post {
        failure {
            echo 'Pipeline failed!'
        }
    }
}
