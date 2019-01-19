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
                sh returnStatus: true, script: 'docker rm -f swagger'
                sh "docker build -t swagger ."
                sh "docker run -d -p 8285:8285 -e CR_SWAGGER_SOURCE_HOST=$CR_SWAGGER_SOURCE_HOST -e CR_SWAGGER_SOURCE_ONBOARD_HOST=$CR_SWAGGER_SOURCE_ONBOARD_HOST  -e CR_SWAGGER_INTERFACE_PORT=$CR_SWAGGER_INTERFACE_PORT --name swagger swagger"
            }
        } 

        stage("Launch Info"){
            steps {
                echo "service running on http://${ip}:$CR_SWAGGER_INTERFACE_PORT"
            }
        }
    }
}
          
