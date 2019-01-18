pipeline {
    agent { label "build" }
    environment {
         def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
    }

    stages {
         
         /*stage("slack notification") {
             steps {
                 slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
             }
         }*/

        stage("checkout"){
            steps {
                checkout scm
            }
        }

        stage("Deploy swagger"){
            steps {
                dir("src/"){
                    sh "npm install"
                    sh "npm start"
                }
            }
        } 

        stage("Launch Info"){
            steps {
                echo "service running on http://${ip}:$CR_SWAGGER_INTERFACE_PORT"
            }
        }
    }
}
          