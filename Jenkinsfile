pipeline{
    agent any
    tools{
        nodejs 'nodejsjenkins'
    }
    stages{
        /*stage('Testing-Node'){
            steps{
                sh "npm version"
            }
        }
        stage('pull-data-from-git'){
            steps{
                git credentialsId: 'GitHubCreds', url: 'https://github.com/mtalhatahir/nodejsapp.git'
            }
        }
        stage('Building-App'){
            steps{
                sh "npm install package.json"
            }
        }*/
        stage(deploy){
            sshagent(['admin1']) {
                sh 'ls'
            }
        }
        /*stage('Run-App'){
            steps{
                sh "npm start"
            }
        }*/
    }

}