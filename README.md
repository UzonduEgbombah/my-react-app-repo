# Automation And Deployment With, Github-Action And Agro-cd

Architecture Overview:
Source Code Management (SCM):

Use GitHub as your source code repository to host the React application.
Continuous Integration (CI):


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/a0f3875a-3888-40d6-b850-a03cfd6fd4af)


Leverage GitHub Actions for the CI pipeline to build and push the Docker image to AWS ECR.
Container Registry:


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/274cf8e3-84c7-473b-aa16-91f3d861db11)



Utilize AWS Elastic Container Registry (ECR) to store the Docker images.
Continuous Deployment (CD):

Implement AgroCD for continuous deployment to the Minikube cluster.
Detailed Steps:

- Source Code Management (GitHub):

Host your React application on GitHub.

- Continuous Integration (GitHub Actions):

Create a dedicated GitHub Actions workflow (e.g., .github/workflows/build.yaml) for CI.

Workflow Steps:

- Checkout the source code.

- Set up Node.js environment.
  
- Install dependencies and build the React application.

- Authenticate with AWS ECR using secrets.

- Build the Docker image.

- Push the Docker image to AWS ECR.

- Ensure that the GitHub Actions workflow is triggered on pushes to the main branch.

![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/ed0dc98b-379e-466c-95f6-ca8f95688428)


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/f3abc5ed-78f8-465f-b0f5-0cf3c619d0a6)


 Container Registry (AWS ECR):
Create an AWS ECR repository to store Docker images.

Configure GitHub Actions to use AWS credentials stored as secrets for authentication during the Docker image push.


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/c06e2935-1bd5-4c44-86fd-a73cffbfac95)


#### Continuous Deployment (AgroCD):

-Install and configure AgroCD on Minikube by following the official documentation.

- Create a repository configuration in AgroCD pointing to the GitHub repository.

- Set up a synchronization trigger in AgroCD to watch for changes in the GitHub repository.

Minikube Cluster:
Ensure Minikube is properly installed and started.

AgroCD will synchronize with the Minikube cluster, applying changes automatically when triggered.

![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/e09d5d85-cb62-4dca-b268-0fa8f95b6f1d)


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/9f1aabc9-ac69-42fe-b4d9-23fef4f6707c)


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/2f155585-e71d-4b30-8b2e-bb7f0eb471cc)


Install agrocd in minikube and port-forward to access the gui via localhost:8080

![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/9fbbfd34-0425-4e22-81ce-a3e99e3d27ef)


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/468fd090-844e-4ee1-a7ce-8b5392d1fa49)


In your agro-cd navigate to create new app and fill in all the neccesary details which include , App name, Repo-url, Cluster-url, Namespace etc
- after tap on create 

![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/ce2c4780-b3a7-43cf-b62d-ad8cf350f318)


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/cbc37a18-73e5-45e7-93dc-7519fff6f089)

Allow the cluster to access the ecr 

![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/869f7de1-95e8-4926-886e-e75746b01a06)


- navigate to synch and enter


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/9c4f7e5d-8206-4403-8c0f-6757c90310c9)


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/29da9db0-6b7f-44a1-89d9-5c1007f6fa41)


Deployment Healthy and Running

![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/e2e66745-383d-46f6-bc0e-688e070b4df8)


![](https://github.com/UzonduEgbombah/my-react-app-repo/assets/137091610/ee946362-3506-4853-b472-1ca60a424430)









