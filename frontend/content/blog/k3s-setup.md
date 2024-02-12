## A Beginner's Guide to Setting Up and Running Pod K3s on Linux

In the world of container orchestration, Kubernetes stands tall as the leading platform for automating deployment, scaling, and management of containerized applications. However, Kubernetes can sometimes feel overwhelming, especially for beginners or those looking for a lightweight alternative. Enter K3s – a lightweight Kubernetes distribution designed for resource-constrained environments and ease of use. In this guide, we'll walk through the steps to set up and run Pod K3s on Linux, from installation to deploying your first application.

## Important Notes:

> K3s is not supported on macOS, we have to install Virtual Machine for linux system

## 1. Install K3s

First things first, let's install K3s. Open your terminal and run the following command:

```curl
curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644
```

This command will download and install K3s on your system, and set the appropriate permissions for the kubeconfig file.

## 2. Set kubeconfig

After the installation, you'll need to set up your kubeconfig file to communicate with the K3s cluster. This can be achieved by exporting the KUBECONFIG environment variable:

```bash
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```

## 3. Get Nodes

Now that K3s is installed and configured, let's verify that everything is up and running. Run the following command to get the list of nodes in your K3s cluster:

```bash
kubectl get nodes
```

## 4. Create a Basic Node.js App and Dockerfile

Next, let's create a simple Node.js application and a Dockerfile to containerize it. You can use your favorite code editor to create the following files:

**app.js**

```js
const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

**Dockerfile**

```Dockerfile
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

Build the Docker image:

```bash
docker build -t my-node-app .
```

## 5. Send Docker Image to K3s Docker

To deploy our Docker image to the K3s cluster, we need to import it using the k3s containerd (ctr) command:

```bash
docker save my-node-app:latest | sudo k3s ctr images import -
```

## 6. Create YAML File for Deployment and Service

Now, let's create a YAML file for deploying our application and exposing it via a LoadBalancer service. Create a file named `app-deployment.yaml` with the following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-node-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-node-app
  template:
    metadata:
      labels:
        app: my-node-app
    spec:
      containers:
        - name: my-node-app
          image: my-node-app:latest
          ports:
            - containerPort: 3000

---
apiVersion: v1
kind: Service
metadata:
  name: my-node-app-service
spec:
  selector:
    app: my-node-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
```

Apply the YAML file to create the deployment and service:

```bash
kubectl apply -f app-deployment.yaml
```

## 7. Guide to Check Running Pod and Service, Check Logs, and Describe

Now that our application is deployed, let's check its status, logs, and describe its details.

Check running all:

```bash
kubectl get all
```

Check running pods:

```bash
kubectl get pods
```

Check service:

```bash
kubectl get svc
```

View logs:

```bash
kubectl logs <pod-name>
```

Describe pod:

```bash
kubectl describe pod <pod-name>
```

## 8. Conclusion

Congratulations! You've successfully set up and run Pod K3s on Linux. You've learned how to install K3s, deploy a simple Node.js application, and interact with the cluster using kubectl commands. K3s provides a lightweight yet powerful Kubernetes experience, making it ideal for development, testing, and production use cases. Experiment further with K3s and explore its capabilities to unlock the full potential of container orchestration. Happy coding!

_Author: Abhishek Pandey_
[Follow on Instagram](https://www.instagram.com/abhhishek_17)
