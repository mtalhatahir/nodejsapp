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
            steps{
            sshagent(['admin1']) {
                sh '''ssh -tt -o StrictHostKeyChecking=no admin1@192.168.117.128 "cd Deployments/NodeJs/; rm -rf nodejsapp; git clone https://github.com/mtalhatahir/nodejsapp.git; cd nodejsapp; npm install package.json; pm2 start app.js"
                
                '''
                }
            }
        }
        /*stage('Run-App'){
            steps{
                sh "pm2 start app.js"
            }
        }*/
    }

}