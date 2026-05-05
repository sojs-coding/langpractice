# langpractice
Just a practice to use the Lang Ecosystem and learn about different technologies for fun

# Intention
To learn how to use Gemma 4 locally on my device.
I also want to learn about K8s and practice Docker, thus Gemma 4 should be hosted in a Container.
This will rely on Docker initially, and move on to k8s when everything works properly on Docker.
To host it locally, I'll be using LocalAI in the container.
With Gemma 4 available on my device, I want to leverage on Langchain and Langgraph to do some simple Agentic AI.
I will run this on Docker, and quickly bring up a Frontend for it via Streamlit, before moving on to ReactJS in the future.
The agent will rely on the locally deployed Gemma 4.
When everything is working, we'll move to k8s and work on UI using ReactJS instead.
Lastly, I want to learn more about terraform to ensure consistent infrastructure deployment.

# Installing Docker Engine on Ubuntu
## Installing Linux on Windows with WSL
https://learn.microsoft.com/en-us/windows/wsl/install
## Installing Ubuntu
### Download Ubuntu
Download Ubuntu WSL file from
https://releases.ubuntu.com/jammy/
### Installation of Ubuntu
https://documentation.ubuntu.com/wsl/latest/howto/install-ubuntu-wsl2/
Install it using `wsl --import NAME FOLDER_LOCATION FILENAME`
## Installing Docker Engine
https://docs.docker.com/engine/install/ubuntu/

# LocalAI & Gemma 4
## Run LocalAI on Docker at Port 8080
docker run -p 8080:8080 --name local-ai -ti localai/localai:latest
## Install Gemma 4 via the existing Model Gallery
Click on Install Models
Find Gemma-4-E4B-it and install it

# Lang Ecosystem

## LangChain

## LangGraph

# Streamlit

# ReactJS

# Terraform