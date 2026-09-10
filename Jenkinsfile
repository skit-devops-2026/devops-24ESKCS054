pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install User Dependencies') {
            steps {
                dir('User') {
                    bat 'npm ci'
                }
            }
        }

        stage('Build User Application') {
            steps {
                dir('User') {
                    bat 'npm run build'
                }
            }
        }

        stage('Install Admin Dependencies') {
            steps {
                dir('admin') {
                    bat 'npm ci'
                }
            }
        }

        stage('Build Admin Application') {
            steps {
                dir('admin') {
                    bat 'npm run build'
                }
            }
        }

        stage('Automated Tests') {
            steps {
                bat 'node tests/basic.test.js'
            }
        }
    }

    post {
        success {
            echo 'ELARA Jenkins Pipeline completed successfully.'
        }
        failure {
            echo 'ELARA Jenkins Pipeline failed.'
        }
    }
}
