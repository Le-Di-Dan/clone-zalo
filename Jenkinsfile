pipeline {
  agent any
  stages {
    stage("Build") {
      agent {
        docker {
          image 'node:18-alpine'
        }
      }
      steps {
        sh '''
        yarn --version
        yarn install
        yarn generate
        '''
      }
    }
    stage("Deploy") {
      agent {
        docker {
        image 'node:18-alpine'
        reuseNode true
        }
      }
      steps {
        sh '''
        echo 'DEPLOY'
        ls -la
        '''
      }
    }
  }
}
