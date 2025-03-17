#!/bin/bash

# Create directories if they don't exist
mkdir -p public/icons/tech

# Download technology icons
curl -o public/icons/tech/python.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
curl -o public/icons/tech/javascript.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
curl -o public/icons/tech/typescript.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
curl -o public/icons/tech/react.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
curl -o public/icons/tech/nodejs.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
curl -o public/icons/tech/nextjs.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
curl -o public/icons/tech/express.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
curl -o public/icons/tech/mongodb.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
curl -o public/icons/tech/postgresql.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
curl -o public/icons/tech/docker.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
curl -o public/icons/tech/aws.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
curl -o public/icons/tech/git.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"

# Download interest icons
curl -o public/icons/code.svg "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
curl -o public/icons/soccer.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fifa.svg"
curl -o public/icons/gaming.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/playstation.svg" 