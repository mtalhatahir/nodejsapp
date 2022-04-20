pipeline{
    agent any
    tools{
        nodejsjenkins '18.0.0'
    }
    stages{
        stage('Testing-Node'){
            steps{
                sh "npm version"
            }
        }
        stage('pull-data-from-git'){
            steps{
                sh "git credentialsId: 'GitHubCreds', url: 'https://github.com/mtalhatahir/nodejsapp.git'"
            }
        }
        stage('Building-App'){
            steps{
                sh "npm install package.json"
            }
        }
        stage('Run-App'){
            steps{
                sh "npm start"
            }
        }
    }

}