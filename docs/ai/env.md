# 环境安装

###  M1 Mac Anaconda

```shell
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
sh Miniconda3-latest-MacOSX-arm64.sh
```

**不自动激活** `conda config --set auto*activate*base false`

**撤销设置** `conda init --reverse $SHELL`

### 创建激活Conda环境

```shell
conda create -n llm python=3.9
conda activate llm
```

**查看环境**

```shell
conda info --envs | grep "*"
```

**删除环境**

```shell
conda remove --name llm --all
```

### 安装 modelscope

`audio,cv` 版本不兼容需要单独环境安装

```shell
# audio,cv == 1.25.0
# nlp,multi-modal,science == 1.6.1
# cv,audio,nlp,multi-modal,science

pip install "modelscope[nlp,multi-modal,science]" -f https://modelscope.oss-cn-beijing.aliyuncs.com/releases/repo.html

pip install "modelscope[audio]" -f https://modelscope.oss-cn-beijing.aliyuncs.com/releases/repo.html

pip install "modelscope[cv]" -f https://modelscope.oss-cn-beijing.aliyuncs.com/releases/repo.html
```

### 安装Mac Pytorc

PyTorch 从 **1.12** 起对 Apple 的 M 系列芯片供了支持Metal Performance Shaders（MPS）后端来达成 GPU 加速

```shell
#pip install torch==2.6.0 torchaudio==2.6.0 torchvision==0.21.0
pip install torch torchaudio torchvision
```

验证是否支持 GPU 加速

```shell
python -c "import torch; print(torch.backends.mps.is_available())"
```

### 安装 tensorflow

```shell
python -m pip install tensorflow-macos tensorflow-metal
#python -m pip install tensorflow-macos==2.16.2
#python -m pip install tensorflow-metal==1.2.0
```

```shell
conda install -c apple tensorflow-deps
GRPC_PYTHON_BUILD_SYSTEM_OPENSSL=1 GRPC_PYTHON_BUILD_SYSTEM_ZLIB=1  python -m pip install tensorflow-macos==2.13.0
python -m pip install tensorflow-metal
```

TensorFlow 从**2.4 版本**开始支持 Mac M1 GPU 加速验证方法

```shell
python -c "import tensorflow as tf; print(len(tf.config.list_physical_devices('GPU')) > 0)"
```

#### 安装 JAX

```shell
# jax==0.4.30 flax==0.8.5
pip install jax flax
```

```shell
python -c "import jax; print(jax.devices())"
```

### 安装编译环境

Rust 和 Cargo

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

cv 需要安装 Cmake 

```shell
brew install cmake
```

audio 需要安装 llvm 

```shell
brew install llvm
```

### modelscope 2.6.1

device should be either `cpu, cuda, gpu, gpu:X or cuda:X` where X is the ordinal for gpu device.

```shell
python -c "from modelscope.pipelines import pipeline;print(pipeline('word-segmentation', device='gpu')('今天天气不错，适合 出去游玩'))"
```

### Huggingface

[Pipeline Apple silicon device](https://huggingface.co/docs/transformers/main/en/pipeline_tutorial?device=Apple+silicon#device) 

[qwen2 doc](https://huggingface.co/docs/transformers/main/en/model_doc/qwen2)  
[Qwen/Qwen2.5-7B-Instruct](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct)  

```shell
# pip install -U flash-attn --no-build-isolation
transformers-cli chat --model_name_or_path Qwen/Qwen2-7B-Instruct --torch_dtype auto --attn_implementation flash_attention_2 --device mps
```

翻译模型

[m2m doc](https://huggingface.co/docs/transformers/model_doc/m2m_100)  
[facebook/m2m100_418M](https://huggingface.co/facebook/m2m100_418M)  

[nllb doc](https://huggingface.co/docs/transformers/main/en/model_doc/nllb#generating-with-nllb)  
[facebook/nllb-200-distilled-600M](https://huggingface.co/facebook/nllb-200-distilled-600M), 
[facebook/nllb-200-distilled-1.3B](https://huggingface.co/facebook/nllb-200-distilled-1.3B), 
[acebook/nllb-200-1.3B](https://huggingface.co/facebook/nllb-200-1.3B), 
[facebook/nllb-200-3.3B](https://huggingface.co/facebook/nllb-200-3.3B), 
[facebook/nllb-moe-54b](https://huggingface.co/facebook/nllb-moe-54b)  

[mbart doc](https://huggingface.co/transformers/master/model_doc/mbart.html)  
[facebook/mbart-large-cc25](https://huggingface.co/facebook/mbart-large-cc25), [facebook/mbart-large-50-many-to-many-mmt](https://huggingface.co/facebook/mbart-large-50-many-to-many-mmt)  

[madlad doc](https://huggingface.co/docs/transformers/model_doc/madlad-400)  
[google/madlad400-3b-mt](https://huggingface.co/google/madlad400-3b-mt), [google/madlad400-7b-mt](https://huggingface.co/google/madlad400-7b-mt), [google/madlad400-7b-mt-bt](https://huggingface.co/google/madlad400-7b-mt-bt), [google/madlad400-10b-mt](https://huggingface.co/google/madlad400-10b-mt)  

[ModelSpace/GemmaX2-28-2B-v0.1](https://huggingface.co/ModelSpace/GemmaX2-28-2B-v0.1), [ModelSpace/GemmaX2-28-9B-v0.1](https://huggingface.co/ModelSpace/GemmaX2-28-9B-v0.1)  

[alirezamsh/small100](https://huggingface.co/alirezamsh/small100)  



[GGUF](https://huggingface.co/docs/transformers/v4.51.0/en/gguf)



[Mac M1 安装 modelscope 深度学习库](https://spaceack.github.io/20221213-macm1%E5%AE%89%E8%A3%85modelscope%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E5%BA%93/)  
[Grpcio fails installation for Tensorflow 2.5 on arm64 Apple Silicon](https://stackoverflow.com/questions/69151553/grpcio-fails-installation-for-tensorflow-2-5-on-arm64-apple-silicon)  