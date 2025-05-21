# 环境安装3.11语音模型

###  M1 Mac Anaconda

```shell
curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh
sh Miniconda3-latest-MacOSX-arm64.sh
```

**不自动激活** `conda config --set auto*activate*base false`

**撤销设置** `conda init --reverse $SHELL`

### 创建激活Conda环境

```shell
conda create -n llm_audio python=3.9
conda activate llm_audio
```

**查看环境**

```shell
conda info --envs | grep "*"
```

**删除环境**

```shell
conda remove --name llm_audio --all
```

### 安装 modelscope

`audio,cv` 版本不兼容需要单独环境安装

```shell
# audio,cv == 1.25.0

pip install "modelscope[audio]" -f https://modelscope.oss-cn-beijing.aliyuncs.com/releases/repo.html

pip install "modelscope[cv]" -f https://modelscope.oss-cn-beijing.aliyuncs.com/releases/repo.html
```

### modelscope

[Paraformer语音识别-中文-通用-16k-离线-large-pytorch](https://www.modelscope.cn/models/iic/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-pytorch/summary)

```python
from modelscope.pipelines import pipeline
from modelscope.utils.constant import Tasks

inference_16k_pipline = pipeline(
    task=Tasks.auto_speech_recognition,
    model='iic/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-pytorch')

rec_result = inference_16k_pipline('https://isv-data.oss-cn-hangzhou.aliyuncs.com/ics/MaaS/ASR/test_audio/asr_example_zh.wav')
print(rec_result)
```

[语音合成-中文-多情感领域-16k-多发音人](https://www.modelscope.cn/models/iic/speech_sambert-hifigan_tts_zh-cn_16k)

```python
from modelscope.outputs import OutputKeys
from modelscope.pipelines import pipeline
from modelscope.utils.constant import Tasks

text = '待合成文本'
model_id = 'iic/speech_sambert-hifigan_tts_zh-cn_16k'
sambert_hifigan_tts = pipeline(task=Tasks.text_to_speech, model=model_id)
output = sambert_hifigan_tts(input=text, voice='zhitian_emo')
wav = output[OutputKeys.OUTPUT_WAV]
with open('output.wav', 'wb') as f:
    f.write(wav)
```

### Huggingface



### Issues

#### [ImportError: cannot import name 'kaiser' from 'scipy.signal' ](https://github.com/kan-bayashi/ParallelWaveGAN/issues/430)

`pip install scipy==1.10.0 `

#### 'ttsfrd' has no attribute 'TtsFrontendEngine'

```
raise type(e)(f'{obj_cls.name}: {e}') from e
AttributeError: TextToSpeechSambertHifiganPipeline: SambertHifigan: module 'ttsfrd' has no attribute 'TtsFrontendEngine'
```

[CosyVoice](https://github.com/FunAudioLLM/CosyVoice)

[ttsfrd-0.0.3-cp39-cp39-macosx_12_0_x86_64.whl](https://modelscope.oss-cn-beijing.aliyuncs.com/releases/ttsfrd-0.0.3-cp39-cp39-macosx_12_0_x86_64.whl)