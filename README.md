# langpractice

Just a practice to use the Lang Ecosystem and learn about different technologies for fun

# Intention

To learn how to use Gemma 4 locally on my device.
I also want to learn about K8s and practice Docker, thus Gemma 4 should be hosted in a Container.
Initially, this will rely on Docker, and move on to k8s when everything works properly on Docker.
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

Download Ubuntu WSL file from:
https://releases.ubuntu.com/jammy/

### Installation of Ubuntu

https://documentation.ubuntu.com/wsl/latest/howto/install-ubuntu-wsl2/

Install it using:

```
wsl --import NAME FOLDER_LOCATION FILENAME
```

## Installing Docker Engine

https://docs.docker.com/engine/install/ubuntu/

# LocalAI & Gemma 4

## Run LocalAI on Docker at Port 8080

### Run via CLI

```
docker run -p 8080:8080 --name local-ai -ti localai/localai:latest
```

### Install via docker-compose

Ensure that `pwd` shows the github folder:

```
docker compose up -d
```

## Utility Commands

* **To see all containers:** `docker ps -a`

* **To run LocalAI in the future:** `docker start <Name Here>`

## Install Gemma 4

Open `localhost:8080` on your web browser.

### Option A: Install via the existing Model Gallery

1. Click on **Install Models**.

2. Find `Gemma-4-E4B-it` and install it.

### Option B: Install Gemma 4 manually

Model Source: https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF

You have 2 choices inside the LocalAI UI:

1. **Import via HuggingFace link:** Use the Standard HuggingFace format example found in the LocalAI UI.

2. **Download Gemma 4 GGUF version (Q4_K_M):** Place the file in the `models` folder of this repository (or update the volume path in `docker-compose.yml`):

   ```
   volumes:
     - ./models:/models:cached
   ```

   Import it using the **Local Files** absolute path template found in the LocalAI UI.

# Virtual Environment

https://docs.astral.sh/uv/getting-started/installation/

# Lang Ecosystem

## Setup

```
uv init
uv add langchain
uv add langgraph
```

## LangChain

Refer to `basic_langchain`. We'll be using OpenAI and LocalAI. LocalAI hosts the Model using OpenAI Specs, allowing us to use the standard LangChain/OpenAI integration to connect locally.

## LangGraph

Refer to `basic_langgraph_dev.ipynb` (referenced from https://docs.langchain.com/oss/python/langgraph/quickstart).

### Basic understanding

LangGraph works by having nodes in a graph connected to other nodes (`START` -> `Nodes` -> `END`). You can easily attach executable tools directly to the model node.

## LangSmith for Observability

# Streamlit

*(Placeholder for initial rapid UI prototype)*

# ReactJS (Full-Stack Frontend & API)

A modular, production-ready full-stack setup designed to replace the initial Streamlit prototype once the backend pipeline is stabilized.

## ⚙️ Backend (FastAPI)

Acts as the secure bridge connecting the frontend client to the localized LangChain/LangGraph orchestration layers.

### Run Backend

Navigate to the backend folder and start the Uvicorn development server:

```
cd backend
uv run uvicorn app.main:app --reload --port 8000
```

*Interactive API documentation available at:* `http://localhost:8000/docs`

## 🖥️ Frontend (ReactJS + Vite)

Built using a modular component pattern to isolate views and manage reusable elements cleanly.

### Folder Structure

* **`pages/`** - Main dashboard and AI playground views.

* **`components/`** - Global, reusable UI elements (buttons, inputs).

* **`features/`** - Dedicated directories grouping feature-specific UI layouts and API logic together.

### Run Frontend

Navigate to the frontend folder, install dependencies securely, and start Vite:

```
cd frontend
npm install --ignore-scripts
npm run dev
```

*App runs at:* `http://localhost:5173`

# Terraform

*(Placeholder for infrastructure automation)*

# Kubernetes

*(Placeholder for final orchestration deployment)*