pipeline {
    agent any
    
    environment {
        CHROME_BIN = '/usr/bin/google-chrome'
    }
    
    tools {
        nodejs 'NodeJS'
    }
    
    stages {
        stage('Fetching') {
            steps {
                echo 'Fetching'
            }
        }
        
        stage('Cleanup') {
            steps {
                sh 'echo pwd'
                sh 'rm -rf dist' // remove the dist directory on Linux or macOS
            }
        }
        
        stage('Install dependencies') {
            steps {
               
                    sh 'npm install'
                    echo 'Modules installed'
                
            }
        }
    
        
        stage('Build') {
            steps {
               
                    sh 'npm run build'
                    echo 'Build completed'
                
            }
        }
        
        stage('Package Build') {
            steps {
                sh 'tar -zcvf bundle.tar.gz dist/mutualfund/*'
            }
        }
        
        stage('Artifacts Creation') {
            steps {
                fingerprint 'bundle.tar.gz'
                archiveArtifacts 'bundle.tar.gz'
                echo 'Artifacts created'
            }
        }
        
        stage('Stash changes') {
            steps {
                stash allowEmpty: true, includes: 'bundle.tar.gz', name: 'buildArtifacts'
            }
        }
        
        stage('Unstash and Copy') {
            agent {
                label 'WebMFU'
            }
            steps {
                echo 'Unstash'
                unstash 'buildArtifacts'
                echo 'Artifacts copied'
                
                echo 'Copy'
                sh 'sudo rm -rf /var/www/html/* '
                sh 'yes | sudo cp -R bundle.tar.gz /var/www/html/ && cd /var/www/html/ && sudo tar -xvf bundle.tar.gz'
                echo 'Copy completed'
                sh 'sudo cp -R /var/www/html/dist/mutualfund/*  /var/www/html/'
                sh 'sudo systemctl restart apache2'
            }
        }
    }
}
